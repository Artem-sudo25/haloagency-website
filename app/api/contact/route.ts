import { Resend } from "resend";
import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import { ZodError } from "zod";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate with Zod
    const validatedData = contactFormSchema.parse(body);

    const { name, email, telegram, message, service } = validatedData;

    // Check if Resend is configured
    if (!resend) {
      return NextResponse.json(
        {
          success: false,
          message: "Email service not configured. Please contact support directly.",
        },
        { status: 500 }
      );
    }

    // Send confirmation email to user
    await resend.emails.send({
      from: "HaloAgency <noreply@haloagency.cz>",
      to: email,
      subject: "Спасибо за вашу заявку!",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%);
                color: white;
                padding: 30px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .content {
                background: #f9fafb;
                padding: 30px;
                border-radius: 0 0 10px 10px;
              }
              .footer {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #e5e7eb;
                color: #6b7280;
                font-size: 14px;
              }
              .button {
                display: inline-block;
                background: #3B82F6;
                color: white;
                padding: 12px 30px;
                text-decoration: none;
                border-radius: 6px;
                margin-top: 20px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0; font-size: 28px;">HaloAgency</h1>
            </div>
            <div class="content">
              <h2 style="color: #1f2937; margin-top: 0;">Здравствуйте, ${name}!</h2>
              <p>Спасибо за обращение в HaloAgency. Мы получили вашу заявку и свяжемся с вами в течение 2 часов в рабочее время.</p>

              <p><strong>Ваше сообщение:</strong></p>
              <p style="background: white; padding: 15px; border-radius: 6px; border-left: 4px solid #3B82F6;">
                ${message.replace(/\n/g, "<br>")}
              </p>

              <p>Если вам нужна срочная помощь, напишите нам в Telegram: <a href="https://t.me/haloagency">@haloagency</a></p>

              <div class="footer">
                <p><strong>HaloAgency</strong><br>
                Прага, Чехия<br>
                Email: hello@haloagency.cz<br>
                Telegram: @haloagency</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    // Send notification email to agency
    await resend.emails.send({
      from: "HaloAgency Contact Form <noreply@haloagency.cz>",
      to: "artem@haloagency.cz",
      replyTo: email,
      subject: `Новая заявка от ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: #1f2937;
                color: white;
                padding: 20px;
                border-radius: 6px;
                margin-bottom: 20px;
              }
              .field {
                margin-bottom: 15px;
                padding: 15px;
                background: #f9fafb;
                border-radius: 6px;
              }
              .label {
                font-weight: 600;
                color: #6b7280;
                font-size: 12px;
                text-transform: uppercase;
                margin-bottom: 5px;
              }
              .value {
                color: #1f2937;
                font-size: 16px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h2 style="margin: 0;">📬 Новая заявка с сайта</h2>
            </div>

            <div class="field">
              <div class="label">Имя</div>
              <div class="value">${name}</div>
            </div>

            <div class="field">
              <div class="label">Email</div>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>

            ${
              telegram
                ? `
            <div class="field">
              <div class="label">Telegram</div>
              <div class="value">${telegram}</div>
            </div>
            `
                : ""
            }

            ${
              service
                ? `
            <div class="field">
              <div class="label">Интересующая услуга</div>
              <div class="value">${service}</div>
            </div>
            `
                : ""
            }

            <div class="field">
              <div class="label">Сообщение</div>
              <div class="value">${message.replace(/\n/g, "<br>")}</div>
            </div>

            <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
              Отправлено: ${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Prague" })}
            </p>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Спасибо! Мы свяжемся с вами в течение 2 часов.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    // Handle validation errors
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Ошибка валидации формы",
          errors: error.issues.map((err) => ({
            field: err.path.join("."),
            message: err.message,
          })),
        },
        { status: 400 }
      );
    }

    // Handle other errors
    return NextResponse.json(
      {
        success: false,
        message: "Произошла ошибка при отправке формы. Попробуйте позже или напишите нам в Telegram.",
      },
      { status: 500 }
    );
  }
}
