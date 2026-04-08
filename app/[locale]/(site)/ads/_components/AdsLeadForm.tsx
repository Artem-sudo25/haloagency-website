"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { type FormEvent, useState } from "react";

type DataLayerEvent = { event: string; [key: string]: unknown };
type MarketingWindow = Window & {
  fbq?: (...args: unknown[]) => void;
  dataLayer?: DataLayerEvent[];
};

export type AdsLeadFormConfig = {
  formId: string;
  badge: string;
  title: string;
  subtitle: string;
  successMessage: string;
  presenceLabel: string;
  presencePlaceholder: string;
  consentText: string;
  cta: string;
  whatsappHref: string;
  whatsappLabel: string;
  leadType: string;
  source: string;
  service: string;
  fbContentName: string;
  dataLayerEvent: string;
  accentColor: string;
};

type FormValues = {
  name: string;
  websiteOrProfile: string;
  phone: string;
  consent: boolean;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

export default function AdsLeadForm({
  config,
  sectionTitle,
  sectionText,
}: {
  config: AdsLeadFormConfig;
  sectionTitle: string;
  sectionText: string;
}) {
  const locale = useLocale() as "ru" | "cs";
  const t = useTranslations("common");
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
    if (!values.name.trim()) nextErrors.name = t("form.nameRequired");
    if (!values.phone.trim()) nextErrors.phone = t("form.phoneRequired");
    if (!values.consent) nextErrors.consent = t("form.consentRequired");
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
      const sessionId = (window as any).HaloTrack?.getSessionId?.() || null;

      const res = await fetch("/api/webhook/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Webhook-Secret":
            process.env.NEXT_PUBLIC_HALOTRACK_WEBHOOK_SECRET || "",
        },
        body: JSON.stringify({
          type: config.leadType,
          page_locale: locale,
          reply_language: locale === "cs" ? "czech" : undefined,
          lead_id: leadId,
          source: config.source,
          name: values.name.trim(),
          websiteOrProfile: values.websiteOrProfile.trim() || undefined,
          phone: values.phone.trim(),
          service: config.service,
          offer: "Review + Plan",
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
          .catch(() => ({ error: t("errors.submitErrorGeneric") }));
        throw new Error(data.error || t("errors.submitErrorGeneric"));
      }

      if (typeof window !== "undefined") {
        const mw = window as MarketingWindow;
        if (typeof mw.fbq === "function") {
          mw.fbq(
            "track",
            "Lead",
            { content_name: config.fbContentName, currency: "CZK", value: 0 },
            { eventID: leadId },
          );
        }
        mw.dataLayer = mw.dataLayer || [];
        mw.dataLayer.push({
          event: config.dataLayerEvent,
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
        err instanceof Error ? err.message : t("errors.submitFailed"),
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass =
    "w-full rounded-xl border-2 border-[#1A1A1A] bg-white px-6 py-4 font-medium text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] outline-none transition-all focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-[2px_2px_0px_0px_#1A1A1A] placeholder:text-[#1A1A1A]/35";

  return (
    <section id={config.formId} className="px-4 py-16 md:py-24">
      <div className="container mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div className="flex flex-col justify-center">
          <h2
            className="mb-6 text-4xl font-extrabold text-[#1A1A1A] md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {sectionTitle}
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-[#1A1A1A]/60">
            {sectionText}
          </p>
          <a
            href={config.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-base font-bold text-[#1A1A1A] transition-colors hover:text-[#FF3366]"
          >
            {config.whatsappLabel}
          </a>
        </div>

        <div
          className="rounded-3xl border-2 border-[#1A1A1A] p-8 shadow-[8px_8px_0px_0px_#1A1A1A] md:p-10"
          style={{ backgroundColor: config.accentColor }}
        >
          <div className="mb-2 inline-flex rounded-full border-2 border-[#1A1A1A] bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#1A1A1A] shadow-[3px_3px_0px_0px_#1A1A1A]">
            {config.badge}
          </div>
          <h3
            className="mb-2 text-2xl font-extrabold text-[#1A1A1A] md:text-3xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {config.title}
          </h3>
          <p className="mb-8 text-sm font-medium leading-relaxed text-[#1A1A1A]/70">
            {config.subtitle}
          </p>

          {submitSuccess ? (
            <div className="py-8 text-center">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#1A1A1A] bg-white shadow-[4px_4px_0px_0px_#1A1A1A]">
                <CheckCircle2 className="h-7 w-7 text-green-600" />
              </div>
              <h4
                className="mb-2 text-xl font-bold text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("success.applicationSent")}
              </h4>
              <p className="mx-auto max-w-sm text-sm text-[#1A1A1A]/60">
                {config.successMessage}
              </p>
              <button
                onClick={() => setSubmitSuccess(false)}
                className="mt-6 rounded-xl border-2 border-[#1A1A1A] bg-white px-6 py-2.5 text-sm font-bold text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] transition-all hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[5px_5px_0px_0px_#1A1A1A]"
                type="button"
              >
                {t("cta.submitAgain")}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor={`${config.formId}-name`}
                  className="mb-2 block text-sm font-bold text-[#1A1A1A]/80"
                >
                  {t("form.nameLabel")}
                </label>
                <input
                  id={`${config.formId}-name`}
                  className={fieldClass}
                  placeholder={t("form.namePlaceholder")}
                  value={values.name}
                  onChange={(e) =>
                    setValues((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
                {errors.name && (
                  <p className="mt-1 text-sm font-bold text-red-600">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor={`${config.formId}-link`}
                  className="mb-2 block text-sm font-bold text-[#1A1A1A]/80"
                >
                  {config.presenceLabel}
                </label>
                <input
                  id={`${config.formId}-link`}
                  className={fieldClass}
                  placeholder={config.presencePlaceholder}
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
                  htmlFor={`${config.formId}-phone`}
                  className="mb-2 block text-sm font-bold text-[#1A1A1A]/80"
                >
                  {t("form.phoneLabel")}
                </label>
                <input
                  id={`${config.formId}-phone`}
                  type="tel"
                  className={fieldClass}
                  placeholder={t("form.phonePlaceholder")}
                  value={values.phone}
                  onChange={(e) =>
                    setValues((prev) => ({ ...prev, phone: e.target.value }))
                  }
                />
                {errors.phone && (
                  <p className="mt-1 text-sm font-bold text-red-600">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div className="flex items-start gap-3 pt-1">
                <input
                  id={`${config.formId}-consent`}
                  type="checkbox"
                  checked={values.consent}
                  onChange={(e) =>
                    setValues((prev) => ({
                      ...prev,
                      consent: e.target.checked,
                    }))
                  }
                  className="mt-1 h-4 w-4 rounded border-[#1A1A1A]/20 accent-[#FF3366]"
                />
                <label
                  htmlFor={`${config.formId}-consent`}
                  className="cursor-pointer text-xs leading-snug text-[#1A1A1A]/60"
                >
                  {config.consentText}
                </label>
              </div>
              {errors.consent && (
                <p className="text-sm font-bold text-red-600">
                  {errors.consent}
                </p>
              )}

              {submitError && (
                <p className="rounded-xl border-2 border-[#1A1A1A] bg-red-50 py-3 text-center text-sm font-bold text-red-600">
                  {submitError}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-2xl border-2 border-[#1A1A1A] bg-[#1A1A1A] px-10 py-5 text-lg font-bold text-white shadow-[4px_4px_0px_0px_#FFFFFF] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#FFFFFF] active:translate-x-1 active:translate-y-1 active:shadow-[0px_0px_0px_0px_#FFFFFF] disabled:opacity-70"
              >
                {isSubmitting ? (
                  t("cta.submitting")
                ) : (
                  <>
                    {config.cta}
                    <ArrowRight className="ml-2 inline h-5 w-5" />
                  </>
                )}
              </button>

              <p className="text-center text-xs font-medium text-[#1A1A1A]/40">
                {t("serviceTemplate.callbackNote")}
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
