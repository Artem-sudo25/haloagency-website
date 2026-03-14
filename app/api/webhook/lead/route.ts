import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "edge";

export async function POST(req: NextRequest) {
    try {
        // Validate webhook secret
        const incomingSecret = req.headers.get('x-webhook-secret');
        if (process.env.WEBHOOK_SECRET && incomingSecret !== process.env.WEBHOOK_SECRET) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const body = await req.json();
        const { type, phone, email, name, ...formData } = body;
        const normalizedSource =
            typeof body.source === "string" && body.source.trim().length > 0
                ? body.source
                : "haloagency_website";

        // Basic validation — phone is the primary identifier, email is optional
        const contactIdentifier = phone || email;
        if (!type || !contactIdentifier) {
            return NextResponse.json(
                { success: false, error: "Missing required fields: type and phone (or email)" },
                { status: 400 }
            );
        }

        // --- 1. Email Notification to Admin (Primary) ---
        const resendApiKey = process.env.RESEND_API_KEY;
        const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL;
        let emailPromise = Promise.resolve();

        if (resendApiKey && adminEmail) {
            const resend = new Resend(resendApiKey);
            const timestamp = new Date().toLocaleString('cs-CZ', { timeZone: 'Europe/Prague' });

            const emailContent = `
                <h1>📞 Новая заявка на разбор</h1>
                <table style="border-collapse:collapse;width:100%;max-width:500px;">
                    <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Имя</td><td style="padding:8px;border-bottom:1px solid #eee;">${name || "—"}</td></tr>
                    <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Телефон</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="tel:${phone}">${phone || "—"}</a></td></tr>
                    <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Сайт / Instagram</td><td style="padding:8px;border-bottom:1px solid #eee;">${formData.websiteOrProfile || "—"}</td></tr>
                    <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Тип</td><td style="padding:8px;border-bottom:1px solid #eee;">${type}</td></tr>
                    <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Источник</td><td style="padding:8px;border-bottom:1px solid #eee;">${normalizedSource}</td></tr>
                    <tr><td style="padding:8px;font-weight:bold;">Время</td><td style="padding:8px;">${timestamp}</td></tr>
                </table>
            `;

            const subjectLabel = name ? `${name} (${phone})` : phone;

            emailPromise = resend.emails.send({
                from: "HaloAgency Lead <leads@haloagency.cz>",
                to: adminEmail,
                subject: `📞 Новая заявка: ${subjectLabel}`,
                html: emailContent
            }).then(({ data, error }) => {
                if (error) {
                    console.error("Email notification failed (API Error):", error);
                    return null;
                }
                console.log("Email notification sent:", data?.id);
                return data;
            }).catch(err => {
                console.error("Email notification failed (Network Error):", err);
                return null;
            }) as any;
        } else {
            console.error("RESEND_API_KEY or ADMIN_NOTIFICATION_EMAIL is not defined");
        }

        // --- 2. Send to n8n (Optional Automation) ---
        let n8nPromise = Promise.resolve(new Response(JSON.stringify({ skipped: true }), { status: 200 }));
        const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;

        if (n8nWebhookUrl) {
            const payload = {
                ...body,
                timestamp: new Date().toISOString(),
                source: normalizedSource,
            };

            n8nPromise = fetch(n8nWebhookUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
        }

        // --- 3. Send to HaloTrack (Attribution / Dashboard) ---
        const halotrackDomain = process.env.NEXT_PUBLIC_HALOTRACK_DOMAIN;
        let halotrackPromise = Promise.resolve();

        if (halotrackDomain) {
            const {
                type,
                email,
                contact,
                name,
                phone,
                message,
                session_id,
                consent_given,
                lead_id,
                source,
                value,
                currency,
                ...extras
            } = body;

            const halotrackPayload = {
                lead_id: lead_id || crypto.randomUUID(),
                source: source || normalizedSource,
                form_type: type,
                email: email || contact || "",
                name: name || "",
                phone: phone || "",
                message: message || JSON.stringify(extras),
                session_id: session_id,
                consent_given: consent_given ?? true,
                lead_value: Number.isFinite(Number(value)) ? Number(value) : 0,
                currency: typeof currency === "string" && currency ? currency : "CZK",
                custom_fields: extras
            };

            const protocol = halotrackDomain.startsWith('localhost') ? 'http' : 'https';
            halotrackPromise = fetch(`${protocol}://${halotrackDomain}/api/webhook/lead`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-Webhook-Secret": process.env.HALOTRACK_WEBHOOK_SECRET || "",
                },
                body: JSON.stringify(halotrackPayload),
            }).then(res => {
                if (!res.ok) console.error(`HaloTrack push failed: ${res.status}`);
                return res;
            }).catch(err => {
                console.error("HaloTrack push error:", err);
                return null;
            }) as any;
        }

        // Await all services
        const [emailResult, n8nResponse] = await Promise.all([emailPromise, n8nPromise, halotrackPromise]);

        // Log n8n failure but don't block the response (email is primary)
        if (n8nWebhookUrl && !n8nResponse.ok) {
            const errorText = await n8nResponse.text().catch(() => "No error details");
            console.error(`n8n webhook failed: ${n8nResponse.status} ${n8nResponse.statusText}`, errorText);
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
