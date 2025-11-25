import { NextResponse } from "next/server";
import { websiteAnalysisSchema } from "@/lib/validations";
import { ZodError } from "zod";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const validatedData = websiteAnalysisSchema.parse(body);

    const { url, email } = validatedData;

    // Check if Resend is configured
    if (!resend) {
      return NextResponse.json(
        {
          success: false,
          message: "Email service not configured. Please try again later.",
        },
        { status: 500 }
      );
    }

    // TODO: Implement actual website analysis logic
    // For v1, return mock data
    const mockAnalysis = {
      url,
      timestamp: new Date().toISOString(),
      tools: {
        gtm: {
          detected: true,
          status: "working",
          message: "Обнаружен и работает",
        },
        ga4: {
          detected: false,
          status: "missing",
          message: "Не найден",
        },
        metaPixel: {
          detected: true,
          status: "warning",
          message: "Обнаружен, но не работает правильно",
        },
        serverSideTracking: {
          detected: false,
          status: "missing",
          message: "Не настроен",
        },
      },
      accuracy: 52,
      lostConversions: 48,
    };

    // Send detailed report email
    await resend.emails.send({
      from: "HaloAgency Tracking Report <noreply@haloagency.cz>",
      to: email,
      subject: "Отчёт по трекингу вашего сайта",
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
                max-width: 700px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #F97316 0%, #DC2626 100%);
                color: white;
                padding: 40px;
                border-radius: 12px 12px 0 0;
                text-align: center;
              }
              .content {
                background: #f9fafb;
                padding: 40px;
              }
              .score-card {
                background: linear-gradient(135deg, #F97316 0%, #DC2626 100%);
                color: white;
                padding: 30px;
                border-radius: 12px;
                text-align: center;
                margin: 30px 0;
              }
              .score {
                font-size: 72px;
                font-weight: bold;
                margin: 10px 0;
              }
              .tool-item {
                background: white;
                padding: 20px;
                margin: 15px 0;
                border-radius: 8px;
                border-left: 4px solid #e5e7eb;
              }
              .tool-item.working {
                border-left-color: #10B981;
              }
              .tool-item.warning {
                border-left-color: #F97316;
              }
              .tool-item.missing {
                border-left-color: #DC2626;
              }
              .tool-name {
                font-weight: 600;
                color: #1f2937;
                margin-bottom: 5px;
              }
              .tool-status {
                color: #6b7280;
                font-size: 14px;
              }
              .cta-button {
                display: inline-block;
                background: #F97316;
                color: white;
                padding: 16px 40px;
                text-decoration: none;
                border-radius: 8px;
                margin: 20px 0;
                font-weight: 600;
              }
              .footer {
                margin-top: 40px;
                padding-top: 30px;
                border-top: 2px solid #e5e7eb;
                color: #6b7280;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0; font-size: 32px;">🔍 Анализ трекинга сайта</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">${url}</p>
            </div>

            <div class="content">
              <div class="score-card">
                <p style="margin: 0; font-size: 18px; opacity: 0.9;">Точность отслеживания конверсий</p>
                <div class="score">${mockAnalysis.accuracy}%</div>
                <p style="margin: 0; font-size: 20px; font-weight: 600;">Вы теряете ~${mockAnalysis.lostConversions}% конверсий</p>
              </div>

              <h2 style="color: #1f2937; margin-top: 40px;">Обнаруженные инструменты</h2>

              <div class="tool-item ${mockAnalysis.tools.gtm.status}">
                <div class="tool-name">✅ Google Tag Manager</div>
                <div class="tool-status">${mockAnalysis.tools.gtm.message}</div>
              </div>

              <div class="tool-item ${mockAnalysis.tools.ga4.status}">
                <div class="tool-name">❌ Google Analytics 4</div>
                <div class="tool-status">${mockAnalysis.tools.ga4.message}</div>
              </div>

              <div class="tool-item ${mockAnalysis.tools.metaPixel.status}">
                <div class="tool-name">⚠️ Meta Pixel (Facebook)</div>
                <div class="tool-status">${mockAnalysis.tools.metaPixel.message}</div>
              </div>

              <div class="tool-item ${mockAnalysis.tools.serverSideTracking.status}">
                <div class="tool-name">❌ Server-side tracking</div>
                <div class="tool-status">${mockAnalysis.tools.serverSideTracking.message}</div>
              </div>

              <h2 style="color: #1f2937; margin-top: 40px;">Что это значит?</h2>
              <p>С текущей настройкой вы теряете почти <strong>половину данных о конверсиях</strong>. Это влияет на:</p>
              <ul style="color: #4b5563;">
                <li>Оптимизацию рекламы (алгоритмы не видят реальные результаты)</li>
                <li>Принятие решений (неполная картина эффективности)</li>
                <li>Масштабирование (рискованно без точных данных)</li>
              </ul>

              <h2 style="color: #1f2937; margin-top: 40px;">Как мы можем помочь</h2>
              <p>С правильной настройкой server-side tracking через Stape.io мы восстанавливаем <strong>20-40% потерянных конверсий</strong>, доводя точность до 70-85%.</p>

              <div style="text-align: center; margin: 40px 0;">
                <a href="https://haloagency.cz/#pricing" class="cta-button">
                  Исправить трекинг →
                </a>
              </div>

              <p style="color: #6b7280; font-size: 14px;">
                Или <a href="https://t.me/haloagency" style="color: #F97316;">напишите нам в Telegram</a> для бесплатной консультации
              </p>

              <div class="footer">
                <p><strong>HaloAgency</strong><br>
                Технический маркетинг для бизнеса в Чехии<br>
                Email: hello@haloagency.cz | Telegram: @haloagency</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    // Send internal notification
    await resend.emails.send({
      from: "HaloAgency Tracking Check <noreply@haloagency.cz>",
      to: "artem@haloagency.cz",
      subject: `Новая проверка трекинга: ${url}`,
      html: `
        <h2>Новая проверка трекинга</h2>
        <p><strong>URL:</strong> ${url}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Точность:</strong> ${mockAnalysis.accuracy}%</p>
        <p><strong>Время:</strong> ${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Prague" })}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Анализ завершён! Детальный отчёт отправлен на ваш email.",
      analysis: mockAnalysis,
    });
  } catch (error) {
    console.error("Website analysis error:", error);

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
        message: "Произошла ошибка при анализе. Попробуйте позже или напишите нам в Telegram.",
      },
      { status: 500 }
    );
  }
}
