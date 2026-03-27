import { after, type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    // Validate webhook secret
    const incomingSecret = req.headers.get("x-webhook-secret");
    if (
      process.env.WEBHOOK_SECRET &&
      incomingSecret !== process.env.WEBHOOK_SECRET
    ) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
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
        {
          success: false,
          error: "Missing required fields: type and phone (or email)",
        },
        { status: 400 },
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL;
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;
    const halotrackDomain = process.env.NEXT_PUBLIC_HALOTRACK_DOMAIN;

    after(async () => {
      const tasks: Promise<unknown>[] = [];

      // --- 1. Email Notification to Admin (Primary) ---
      if (resendApiKey && adminEmail) {
        tasks.push(
          (async () => {
            const resend = new Resend(resendApiKey);
            const timestamp = new Date().toLocaleString("cs-CZ", {
              timeZone: "Europe/Prague",
            });
            const leadHeadline =
              type === "website-demo-v3"
                ? "Новая заявка на демо сайта"
                : typeof type === "string" && type.includes("plan")
                  ? "Новая заявка на разбор и план"
                  : typeof type === "string" && type.includes("audit")
                    ? "Новая заявка на разбор"
                    : type === "website"
                      ? "Новая заявка на сайт"
                      : "Новая заявка";
            const websiteOrProfile =
              formData.websiteOrProfile || formData.currentPresence || "—";
            const phoneCell = phone
              ? `<a href="tel:${phone}">${phone}</a>`
              : "—";
            const emailCell = email
              ? `<a href="mailto:${email}">${email}</a>`
              : "—";

            const emailContent = `
                <h1>📞 ${leadHeadline}</h1>
                <table style="border-collapse:collapse;width:100%;max-width:500px;">
                    <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Имя</td><td style="padding:8px;border-bottom:1px solid #eee;">${name || "—"}</td></tr>
                    <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Телефон</td><td style="padding:8px;border-bottom:1px solid #eee;">${phoneCell}</td></tr>
                    <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;">${emailCell}</td></tr>
                    <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Сайт / Instagram</td><td style="padding:8px;border-bottom:1px solid #eee;">${websiteOrProfile}</td></tr>
                    <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Тип</td><td style="padding:8px;border-bottom:1px solid #eee;">${type}</td></tr>
                    <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Источник</td><td style="padding:8px;border-bottom:1px solid #eee;">${normalizedSource}</td></tr>
                    <tr><td style="padding:8px;font-weight:bold;">Время</td><td style="padding:8px;">${timestamp}</td></tr>
                </table>
            `;

            const subjectLabel = name
              ? `${name} (${phone || email || "без контакта"})`
              : phone || email || "без контакта";

            const { data, error } = await resend.emails.send({
              from: "HaloAgency Lead <leads@haloagency.cz>",
              to: adminEmail,
              subject: `📞 ${leadHeadline}: ${subjectLabel}`,
              html: emailContent,
            });

            if (error) {
              console.error("Email notification failed (API Error):", error);
              return;
            }

            console.log("Email notification sent:", data?.id);
          })().catch((err) => {
            console.error("Email notification failed (Network Error):", err);
          }),
        );
      } else {
        console.error(
          "RESEND_API_KEY or ADMIN_NOTIFICATION_EMAIL is not defined",
        );
      }

      // --- 2. Send to n8n (Optional Automation) ---
      if (n8nWebhookUrl) {
        tasks.push(
          (async () => {
            const payload = {
              ...body,
              timestamp: new Date().toISOString(),
              source: normalizedSource,
            };

            const n8nResponse = await fetch(n8nWebhookUrl, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(payload),
            });

            if (!n8nResponse.ok) {
              const errorText = await n8nResponse
                .text()
                .catch(() => "No error details");
              console.error(
                `n8n webhook failed: ${n8nResponse.status} ${n8nResponse.statusText}`,
                errorText,
              );
            }
          })().catch((err) => {
            console.error("n8n webhook error:", err);
          }),
        );
      }

      // --- 3. Send to HaloTrack (Attribution / Dashboard) ---
      if (halotrackDomain) {
        tasks.push(
          (async () => {
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
              currency:
                typeof currency === "string" && currency ? currency : "CZK",
              custom_fields: extras,
            };

            const protocol = halotrackDomain.startsWith("localhost")
              ? "http"
              : "https";
            const halotrackResponse = await fetch(
              `${protocol}://${halotrackDomain}/api/webhook/lead`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "X-Webhook-Secret":
                    process.env.HALOTRACK_WEBHOOK_SECRET || "",
                },
                body: JSON.stringify(halotrackPayload),
              },
            );

            if (!halotrackResponse.ok) {
              console.error(
                `HaloTrack push failed: ${halotrackResponse.status}`,
              );
            }
          })().catch((err) => {
            console.error("HaloTrack push error:", err);
          }),
        );
      }

      await Promise.allSettled(tasks);
    });

    return NextResponse.json({ success: true, message: "Lead processed" });
  } catch (error) {
    console.error("Error in lead webhook:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
}
