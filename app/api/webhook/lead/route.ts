import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

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
        if (!type || !email) {
            return NextResponse.json(
                { success: false, error: "Missing required fields: type or email" },
                { status: 400 }
            );
        }

        const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;

        // --- 1. Send to n8n (Primary Automation) ---
        let n8nPromise = Promise.resolve(new Response(JSON.stringify({ skipped: true }), { status: 200 }));

        if (n8nWebhookUrl) {
            // Construct the payload
            const timestamp = new Date().toISOString();
            const payload = {
                ...body,
                timestamp,
                source: "haloagency_website",
            };

            n8nPromise = fetch(n8nWebhookUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
        } else {
            console.error("N8N_WEBHOOK_URL is not defined");
        }

        // --- 2. Send to HaloTrack (Attribution / Dashboard) ---
        const halotrackDomain = process.env.NEXT_PUBLIC_HALOTRACK_DOMAIN;
        let halotrackPromise = Promise.resolve();

        if (halotrackDomain) {
            const { type, email, contact, name, phone, message, session_id, consent_given, lead_id, ...extras } = body;

            const halotrackPayload = {
                lead_id: lead_id || crypto.randomUUID(), // Use provided ID or generate matched ID for tracking
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

            const protocol = halotrackDomain.startsWith('localhost') ? 'http' : 'https';
            halotrackPromise = fetch(`${protocol}://${halotrackDomain}/api/webhook/lead`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(halotrackPayload),
            }).then(res => {
                if (!res.ok) console.error(`HaloTrack push failed: ${res.status}`);
                return res;
            }).catch(err => {
                console.error("HaloTrack push error:", err);
                return null; // Don't fail the written response
            }) as any;
        }

        // --- 3. Backup Email to Admin (Safety Net) ---
        const resendApiKey = process.env.RESEND_API_KEY;
        const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL;
        let backupEmailPromise = Promise.resolve();

        if (resendApiKey && adminEmail) {
            const resend = new Resend(resendApiKey);

            const emailContent = `
                <h1>New Lead Received</h1>
                <p><strong>Type:</strong> ${type}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Timestamp:</strong> ${new Date().toLocaleString('cs-CZ', { timeZone: 'Europe/Prague' })}</p>
                <h3>Details:</h3>
                <pre>${JSON.stringify(formData, null, 2)}</pre>
            `;

            backupEmailPromise = resend.emails.send({
                from: "HaloAgency Lead <leads@haloagency.cz>",
                to: adminEmail,
                subject: `🔔 New Lead: ${type} (${email})`,
                replyTo: email, // Allow reply directly to lead
                html: emailContent
            }).then(({ data, error }) => {
                if (error) {
                    console.error("Backup email failed (API Error):", error);
                    return null;
                }
                console.log("Backup email sent:", data?.id);
                return data;
            }).catch(err => {
                console.error("Backup email failed (Network Error):", err);
                return null;
            }) as any;
        }

        // Await all services
        // We prioritise n8n success for the response status, but we ensure backup email is attempted
        const [n8nResponse] = await Promise.all([n8nPromise, halotrackPromise, backupEmailPromise]);

        if (n8nWebhookUrl && !n8nResponse.ok) {
            const errorText = await n8nResponse.text().catch(() => "No error details");
            console.error(`n8n webhook failed: ${n8nResponse.status} ${n8nResponse.statusText}`, errorText);

            // Note: We return error even if backup email succeeded, because the primary automation failed.
            // But at least you have the email!
            return NextResponse.json(
                {
                    success: false,
                    error: `Workflow Error (${n8nResponse.status}): ${errorText.substring(0, 100)}`
                },
                { status: n8nResponse.status }
            );
        }

        return NextResponse.json({ success: true, message: "Lead processed" });

    } catch (error) {
        console.error("Error in lead webhook:", error);
        return NextResponse.json(
            { success: false, error: error instanceof Error ? error.message : String(error) },
            { status: 500 }
        );
    }
}
