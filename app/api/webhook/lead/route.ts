
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

        // Construct the payload for n8n
        // We include the HaloTrack session_id so n8n can query attribution data
        // or we can blindly forward everything we received.
        const payload = {
            ...body,
            timestamp: new Date().toISOString(),
            source: "haloagency_website",
        };

        // Forward to n8n
        const n8nResponse = await fetch(n8nWebhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

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
