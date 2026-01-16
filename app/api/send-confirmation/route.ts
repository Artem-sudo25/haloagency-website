import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
        console.error("RESEND_API_KEY is missing");
        return NextResponse.json({ error: "Configuration error" }, { status: 500 });
    }

    const resend = new Resend(resendApiKey);

    try {
        const { email, name, projectType } = await request.json();

        const { data, error } = await resend.emails.send({
            from: "HaloAgency <onboarding@resend.dev>", // Update this with your verified domain
            to: [email],
            subject: "Ваш дизайн-концепт в работе! 🚀",
            html: `
        <div style="font-family: sans-serif; color: #333;">
          <h1>Привет! 👋</h1>
          <p>Спасибо за заявку. Мы уже начали работать над концептом для вашего проекта <strong>${name}</strong> (${projectType}).</p>
          <p>В течение 48 часов мы пришлем вам ссылку на персональное демо.</p>
          <hr />
          <p style="font-size: 12px; color: #666;">Если у вас есть дополнительные вопросы, просто ответьте на это письмо.</p>
        </div>
      `,
        });

        if (error) {
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
