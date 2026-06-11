import { after, type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

export const runtime = "edge";

const leadPayloadSchema = z
  .object({
    type: z.string().min(1).max(100),
    phone: z.string().max(50).optional(),
    email: z.string().max(200).optional(),
    name: z.string().max(200).optional(),
    source: z.string().max(100).optional(),
    session_id: z.string().max(200).optional(),
    consent_given: z.boolean().optional(),
    lead_id: z.string().max(100).optional(),
    value: z.union([z.number(), z.string()]).optional(),
    currency: z.string().max(10).optional(),
    // Honeypot — hidden field real users never fill (see components/ui/honeypot.tsx)
    website_url: z.string().max(500).optional(),
  })
  .passthrough();

function escapeHtml(value: unknown): string {
  return String(value ?? "").replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[char] as string,
  );
}

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const parsed = leadPayloadSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: "Invalid payload" },
        { status: 400 },
      );
    }

    // Honeypot: bots auto-fill the hidden website_url field. Pretend success
    // so they don't learn the field is a trap; do nothing else.
    const { website_url, ...body } = parsed.data;
    if (website_url) {
      console.log("Honeypot triggered, dropping lead silently");
      return NextResponse.json({ success: true, message: "Lead processed" });
    }

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

    // Visitor IP — the browser posts this route directly, so x-forwarded-for
    // is the visitor, not a server. HaloTrack forwards it to Meta CAPI.
    const visitorIp =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || null;

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
            const websiteOrProfile = escapeHtml(
              formData.websiteOrProfile || formData.currentPresence || "—",
            );
            const safeName = escapeHtml(name || "—");
            const safePhone = escapeHtml(phone);
            const safeEmail = escapeHtml(email);
            const safeType = escapeHtml(type);
            const safeSource = escapeHtml(normalizedSource);
            const phoneCell = phone
              ? `<a href="tel:${safePhone}">${safePhone}</a>`
              : "—";
            const emailCell = email
              ? `<a href="mailto:${safeEmail}">${safeEmail}</a>`
              : "—";

            const emailContent = `
                <h1>📞 ${leadHeadline}</h1>
                <table style="border-collapse:collapse;width:100%;max-width:500px;">
                    <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Имя</td><td style="padding:8px;border-bottom:1px solid #eee;">${safeName}</td></tr>
                    <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Телефон</td><td style="padding:8px;border-bottom:1px solid #eee;">${phoneCell}</td></tr>
                    <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;">${emailCell}</td></tr>
                    <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Сайт / Instagram</td><td style="padding:8px;border-bottom:1px solid #eee;">${websiteOrProfile}</td></tr>
                    <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Тип</td><td style="padding:8px;border-bottom:1px solid #eee;">${safeType}</td></tr>
                    <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Источник</td><td style="padding:8px;border-bottom:1px solid #eee;">${safeSource}</td></tr>
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
              ip_address: visitorIp,
            };

            const protocol = halotrackDomain.startsWith("localhost")
              ? "http"
              : "https";
            const rawBody = JSON.stringify(halotrackPayload);
            const secret = process.env.HALOTRACK_WEBHOOK_SECRET || "";
            const timestamp = Math.floor(Date.now() / 1000).toString();
            const halotrackResponse = await fetch(
              `${protocol}://${halotrackDomain}/api/webhook/lead`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  // Legacy shared secret — kept until all HaloTrack
                  // deployments verify the HMAC signature below
                  "X-Webhook-Secret": secret,
                  ...(secret && {
                    "x-halo-timestamp": timestamp,
                    "x-halo-signature": await hmacSha256Hex(
                      `${timestamp}.${rawBody}`,
                      secret,
                    ),
                  }),
                },
                body: rawBody,
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

// HMAC signature for HaloTrack webhook auth (x-halo-signature). Web Crypto —
// this route runs on the edge runtime, where node:crypto is unavailable.
async function hmacSha256Hex(message: string, secret: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(message));
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}
