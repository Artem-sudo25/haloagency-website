"use client";

import { type FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

type FormValues = {
  name: string;
  websiteOrProfile: string;
  phone: string;
  consent: boolean;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;
type DataLayerEvent = { event: string; [key: string]: unknown };
type MarketingWindow = Window & {
  fbq?: (...args: unknown[]) => void;
  dataLayer?: DataLayerEvent[];
};

type DemoFormProps = {
  /** Where the form is placed — used for analytics source tracking */
  source?: string;
  /** Accent color for the form card background */
  accentColor?: string;
};

export default function DemoForm({
  source = "web_service_page",
  accentColor = "#FFD166",
}: DemoFormProps) {
  const [values, setValues] = useState<FormValues>({
    name: "",
    websiteOrProfile: "",
    phone: "",
    consent: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const nextErrors: FormErrors = {};
    if (!values.name.trim()) nextErrors.name = "Укажите ваше имя";
    if (!values.phone.trim()) nextErrors.phone = "Укажите телефон для связи";
    if (!values.consent)
      nextErrors.consent = "Нужно согласие на обработку данных";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError("");
    if (!validate()) return;
    setIsSubmitting(true);

    try {
      const leadId = crypto.randomUUID();
      const sessionId =
        (window as any).HaloTrack?.getSessionId?.() || null;

      const res = await fetch("/api/webhook/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Webhook-Secret":
            process.env.NEXT_PUBLIC_HALOTRACK_WEBHOOK_SECRET || "",
        },
        body: JSON.stringify({
          type: "website",
          lead_id: leadId,
          source,
          landing_page_type: "web-demo",
          name: values.name.trim(),
          websiteOrProfile: values.websiteOrProfile.trim() || undefined,
          phone: values.phone.trim(),
          service: "Website Development",
          offer: "Demo + Estimate",
          value: 0,
          currency: "CZK",
          consent_given: true,
          session_id: sessionId,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!res.ok) {
        const data = await res
          .json()
          .catch(() => ({ error: "Ошибка отправки" }));
        throw new Error(data.error || "Ошибка отправки");
      }

      if (typeof window !== "undefined") {
        const mw = window as MarketingWindow;
        if (typeof mw.fbq === "function") {
          mw.fbq(
            "track",
            "Lead",
            { content_name: `website_${source}`, currency: "CZK", value: 0 },
            { eventID: leadId },
          );
        }
        mw.dataLayer = mw.dataLayer || [];
        mw.dataLayer.push({
          event: "generate_lead_web_demo",
          eventID: leadId,
          user_data: { phone_number: values.phone.trim() },
        });
      }

      if ((window as any).HaloTrack?.identify) {
        (window as any).HaloTrack.identify({ phone: values.phone.trim() });
      }

      setSubmitSuccess(true);
      setValues({ name: "", websiteOrProfile: "", phone: "", consent: false });
      setErrors({});
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Не удалось отправить заявку. Попробуйте снова.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="px-4 py-16 md:py-24" id="demo-form">
      <div className="container mx-auto max-w-5xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          {/* Left — pitch */}
          <div className="flex flex-col justify-center">
            <div
              className="mb-6 inline-flex w-fit items-center gap-2 rounded-xl border-2 border-[#1A1A1A] px-4 py-2 shadow-[4px_4px_0px_0px_#1A1A1A]"
              style={{ backgroundColor: accentColor }}
            >
              <Sparkles className="h-4 w-4 text-[#1A1A1A]" />
              <span className="text-sm font-bold uppercase tracking-wide text-[#1A1A1A]">
                Демо + расчёт
              </span>
            </div>

            <h2
              className="mb-4 text-4xl font-extrabold text-[#1A1A1A] md:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Получите демо сайта
              <br />
              до 48 часов
            </h2>

            <p className="mb-8 max-w-lg text-lg leading-relaxed text-[#1A1A1A]/60">
              15 минут на созвон, демо-концепт до 48 часов и ориентир по
              стоимости. Без оплаты и без обязательств.
            </p>

            <div className="space-y-4">
              {[
                "Короткий созвон — понимаем задачу и бизнес",
                "До 48 часов отправляем демо под вашу подачу",
                "Даём ориентир по стоимости и срокам",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#FF3366]" />
                  <span className="text-base font-medium text-[#1A1A1A]/75">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form card */}
          <div
            className="rounded-3xl border-2 border-[#1A1A1A] p-8 shadow-[8px_8px_0px_0px_#1A1A1A]"
            style={{ backgroundColor: accentColor }}
          >
            <h3 className="mb-1 text-2xl font-bold text-[#1A1A1A]">
              Оставьте заявку
            </h3>
            <p className="mb-6 text-sm text-[#1A1A1A]/60">
              Обычно перезваниваем в течение 20 минут в рабочее время
            </p>

            {submitSuccess && (
              <div className="rounded-xl border-2 border-[#1A1A1A] bg-white p-5 text-center shadow-[4px_4px_0px_0px_#1A1A1A]">
                <CheckCircle2 className="mx-auto mb-3 h-10 w-10 text-[#06D6A0]" />
                <p className="text-lg font-bold text-[#1A1A1A]">
                  Заявка отправлена!
                </p>
                <p className="mt-2 text-sm text-[#1A1A1A]/60">
                  Свяжемся с вами и обсудим демо сайта и ориентир по стоимости.
                </p>
              </div>
            )}

            {submitError && (
              <div className="mb-4 rounded-xl border-2 border-red-400 bg-red-50 p-4 text-sm font-medium text-red-800">
                {submitError}
              </div>
            )}

            {!submitSuccess && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    className="mb-1.5 block text-sm font-bold text-[#1A1A1A]"
                    htmlFor="demo-name"
                  >
                    Имя *
                  </label>
                  <input
                    id="demo-name"
                    className="w-full rounded-xl border-2 border-[#1A1A1A] bg-white px-4 py-3 text-sm text-[#1A1A1A] outline-none placeholder:text-[#1A1A1A]/35 transition-shadow focus:shadow-[4px_4px_0px_0px_#1A1A1A]"
                    placeholder="Ваше имя"
                    value={values.name}
                    onChange={(e) =>
                      setValues((prev) => ({ ...prev, name: e.target.value }))
                    }
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs font-medium text-red-700">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    className="mb-1.5 block text-sm font-bold text-[#1A1A1A]"
                    htmlFor="demo-link"
                  >
                    Сайт, Instagram или пример
                  </label>
                  <input
                    id="demo-link"
                    className="w-full rounded-xl border-2 border-[#1A1A1A] bg-white px-4 py-3 text-sm text-[#1A1A1A] outline-none placeholder:text-[#1A1A1A]/35 transition-shadow focus:shadow-[4px_4px_0px_0px_#1A1A1A]"
                    placeholder="https://... или @ваш_профиль"
                    value={values.websiteOrProfile}
                    onChange={(e) =>
                      setValues((prev) => ({
                        ...prev,
                        websiteOrProfile: e.target.value,
                      }))
                    }
                  />
                </div>

                <div>
                  <label
                    className="mb-1.5 block text-sm font-bold text-[#1A1A1A]"
                    htmlFor="demo-phone"
                  >
                    Телефон для связи *
                  </label>
                  <input
                    id="demo-phone"
                    type="tel"
                    className="w-full rounded-xl border-2 border-[#1A1A1A] bg-white px-4 py-3 text-sm text-[#1A1A1A] outline-none placeholder:text-[#1A1A1A]/35 transition-shadow focus:shadow-[4px_4px_0px_0px_#1A1A1A]"
                    placeholder="777 777 777"
                    value={values.phone}
                    onChange={(e) =>
                      setValues((prev) => ({ ...prev, phone: e.target.value }))
                    }
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs font-medium text-red-700">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div className="flex items-start gap-3 pt-1">
                  <input
                    id="demo-consent"
                    type="checkbox"
                    checked={values.consent}
                    onChange={(e) =>
                      setValues((prev) => ({
                        ...prev,
                        consent: e.target.checked,
                      }))
                    }
                    className="mt-0.5 h-4 w-4 rounded border-2 border-[#1A1A1A] accent-[#FF3366]"
                  />
                  <label
                    htmlFor="demo-consent"
                    className="text-xs leading-snug text-[#1A1A1A]/60"
                  >
                    Согласен(а) на обработку данных. Мы используем контакт только
                    для ответа по демо сайта и расчёту стоимости.
                  </label>
                </div>
                {errors.consent && (
                  <p className="text-xs font-medium text-red-700">
                    {errors.consent}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl border-2 border-[#1A1A1A] bg-[#FF3366] py-4 font-bold text-white shadow-[4px_4px_0px_0px_#1A1A1A] transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting
                    ? "Отправляем..."
                    : "Получить демо и расчёт стоимости"}
                  {!isSubmitting && (
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
