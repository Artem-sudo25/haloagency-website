
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const {
            type,
            session_id,
            email,
            ...formData
        } = body;

        // Basic validation
        // Basic validation (allow contact as fallback for email)
        const contactInfo = email || body.contact;

        if (!type || !contactInfo) {
            return NextResponse.json(
                { success: false, error: "Missing required fields: type or email/contact" },
                { status: 400 }
            );
        }

        // Ensure email field exists for downstream consistency
        if (!body.email && body.contact) {
            body.email = body.contact;
        }

        const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;

        if (!n8nWebhookUrl) {
            console.error("N8N_WEBHOOK_URL is not defined");
            return NextResponse.json(
                { success: false, error: "Configuration error" },
                { status: 500 }
            );
        }

        // Construct the payload
        const timestamp = new Date().toISOString();
        const payload = {
            ...body,
            timestamp,
            source: "haloagency_website",
        };

        // --- 1. Send to n8n (Primary Automation) ---
        const n8nPromise = fetch(n8nWebhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        // --- 2. Send to HaloTrack (Attribution / Dashboard) ---
        // We map "rich" fields into custom_fields for HaloTrack
        const halotrackDomain = process.env.NEXT_PUBLIC_HALOTRACK_DOMAIN;
        let halotrackPromise = Promise.resolve();

        if (halotrackDomain) {
            const { type, email, contact, name, phone, message, session_id, consent_given, ...extras } = body;

            const halotrackPayload = {
                lead_id: crypto.randomUUID(), // Generate ID for tracking
                source: "haloagency_website",
                form_type: type, // e.g. 'growth-plan'
                email: email || contact, // Normalized email
                name: name || "",
                phone: phone || "",
                message: message || JSON.stringify(extras), // Use message or stringified extras
                session_id: session_id,
                consent_given: consent_given ?? true,
                lead_value: 0, // Default
                currency: "CZK",
                custom_fields: extras // All rich data (goals, business type, etc.)
            };

            halotrackPromise = fetch(`https://${halotrackDomain}/api/webhook/lead`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(halotrackPayload),
            }).then(res => {
                if (!res.ok) console.error(`HaloTrack push failed: ${res.status}`);
                return res;
            }).catch(err => {
                console.error("HaloTrack push error:", err);
                return null;
            }) as any;
        }

        // Await primary n8n (critical) and secondary HaloTrack (non-critical)
        // We prioritize n8n success for the user response.
        const [n8nResponse] = await Promise.all([n8nPromise, halotrackPromise]);

        if (!n8nResponse.ok) {
            const errorText = await n8nResponse.text().catch(() => "No error details");
            console.error(`n8n webhook failed: ${n8nResponse.status} ${n8nResponse.statusText}`, errorText);

            return NextResponse.json(
                {
                    success: false,
                    error: `Workflow Error (${n8nResponse.status}): ${errorText.substring(0, 100)}`
                },
                { status: n8nResponse.status }
            );
        }

        return NextResponse.json({ success: true, message: "Lead received" });

    } catch (error) {
        console.error("Error in lead webhook:", error);
        return NextResponse.json(
            { success: false, error: "Internal server error" },
            { status: 500 }
        );
    }
}
