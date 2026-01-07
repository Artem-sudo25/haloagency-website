
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
        if (!type || !email) {
            return NextResponse.json(
                { success: false, error: "Missing required fields: type or email" },
                { status: 400 }
            );
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
            console.error(`n8n webhook failed: ${n8nResponse.status} ${n8nResponse.statusText}`);
            // We might still want to return success to the client if we have a fallback
            // or if we don't want to block the user.
            // For now, let's treat it as an error to debug easier during dev.
            return NextResponse.json(
                { success: false, error: "Failed to process lead" },
                { status: 502 }
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
