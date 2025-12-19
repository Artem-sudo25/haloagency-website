import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const data = await request.json();

        const {
            websiteOrProfile,
            businessType,
            mainGoal,
            triedBefore,
            mainProblem,
            contact,
        } = data;

        if (!websiteOrProfile || !contact) {
            return NextResponse.json(
                { message: "Required fields missing" },
                { status: 400 }
            );
        }

        // Send to n8n webhook
        const webhookUrl = process.env.N8N_WEBHOOK_URL;

        if (webhookUrl) {
            try {
                await fetch(webhookUrl, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        type: "growth_plan",
                        websiteOrProfile,
                        businessType,
                        mainGoal,
                        triedBefore: triedBefore || [],
                        mainProblem,
                        contact,
                        timestamp: new Date().toISOString(),
                    }),
                });
            } catch (e) {
                console.error("Webhook error:", e);
            }
        }

        return NextResponse.json({
            success: true,
            message: "Growth plan request received",
        });
    } catch (error) {
        console.error("Growth plan submission error:", error);
        return NextResponse.json(
            { message: "Failed to process request" },
            { status: 500 }
        );
    }
}
