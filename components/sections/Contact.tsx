"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "@/i18n/routing";
import {
  getHaloTrackSessionId,
  trackFormEvent,
  waitForHaloTrack,
} from "@/lib/halotrack";
import { trackLeadSubmission } from "@/lib/site-tracking";
import {
  type ContactFormData,
  createContactFormSchema,
} from "@/lib/validations";

export default function Contact() {
  const locale = useLocale() as "ru" | "cs";
  const t = useTranslations("contact");
  const tCommon = useTranslations("common");
  const tv = useTranslations("validation.contact");
  const [selectedService, setSelectedService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [haloSessionId, setHaloSessionId] = useState<string>("");

  useEffect(() => {
    waitForHaloTrack().then(() => {
      setHaloSessionId(getHaloTrackSessionId());
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(
      createContactFormSchema((key) =>
        tv(
          (
            {
              nameTooLong: "nameMax",
              messageTooLong: "messageMax",
            } as Record<string, string>
          )[key] ?? key,
        ),
      ),
    ),
  });

  const serviceKeys = ["web", "ads", "tracking", "package", "other"] as const;

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      const leadId = crypto.randomUUID();
      const response = await fetch("/api/webhook/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Webhook-Secret":
            process.env.NEXT_PUBLIC_HALOTRACK_WEBHOOK_SECRET || "",
        },
        body: JSON.stringify({
          type: "contact",
          ...data,
          page_locale: locale,
          reply_language: locale === "cs" ? "czech" : undefined,
          service: selectedService || undefined,
          session_id: haloSessionId,
          source: "contact_form",
          consent_given: true,
          value: 0,
          currency: "CZK",
          lead_id: leadId,
          timestamp: new Date().toISOString(),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || tCommon("errors.formSubmitError"));
      }

      void trackFormEvent("contact_form_submit", {
        service: selectedService || "unspecified",
      });
      trackLeadSubmission({
        leadId,
        formType: "contact",
        contentName: "contact_form",
        email: data.email,
        phone: data.phone,
        metadata: {
          source: "contact_form",
          service: selectedService || "unspecified",
        },
      });

      setSubmitSuccess(true);
      reset();
      setSelectedService("");

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : tCommon("errors.genericError"),
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="contact"
      className="scroll-mt-24 rounded-3xl border-2 border-[#1A1A1A] bg-[#FFD166] p-6 shadow-[8px_8px_0px_0px_#1A1A1A] md:scroll-mt-32 md:p-10"
    >
      <h2
        className="mb-2 text-2xl font-extrabold text-[#1A1A1A] md:text-3xl"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {t("title")}
      </h2>
      <p className="mb-6 text-sm text-[#1A1A1A]/60 md:text-base">
        {t("subtitle")}
      </p>

      {submitSuccess ? (
        <div className="py-12 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle2 className="h-8 w-8 text-green-600" />
          </div>
          <h3
            className="mb-3 text-2xl font-bold text-[#1A1A1A]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t("success.title")}
          </h3>
          <p className="text-[#1A1A1A]/60">{t("success.message")}</p>
        </div>
      ) : (
        <>
          {submitError && (
            <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4">
              <p className="text-sm text-red-600">{submitError}</p>
            </div>
          )}

          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="ml-4 text-sm font-bold text-[#1A1A1A]/80"
                >
                  {t("form.nameLabel")} <span className="text-red-500">*</span>
                </label>
                <Input
                  id="name"
                  {...register("name")}
                  placeholder={t("form.namePlaceholder")}
                  className={`h-auto rounded-xl border-2 border-[#1A1A1A] bg-white px-6 py-4 font-medium text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] outline-none transition-all focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-[2px_2px_0px_0px_#1A1A1A] ${errors.name ? "border-red-500 shadow-[4px_4px_0px_0px_#ef4444]" : ""}`}
                />
                {errors.name && (
                  <p className="ml-4 text-xs text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="ml-4 text-sm font-bold text-[#1A1A1A]/80"
                >
                  {t("form.emailLabel")} <span className="text-red-500">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="ivan@company.com"
                  className={`h-auto rounded-xl border-2 border-[#1A1A1A] bg-white px-6 py-4 font-medium text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] outline-none transition-all focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-[2px_2px_0px_0px_#1A1A1A] ${errors.email ? "border-red-500 shadow-[4px_4px_0px_0px_#ef4444]" : ""}`}
                />
                {errors.email && (
                  <p className="ml-4 text-xs text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="phone"
                className="ml-4 text-sm font-bold text-[#1A1A1A]/80"
              >
                {t("form.phoneLabel")}{" "}
                <span className="text-xs font-normal text-[#1A1A1A]/40">
                  {t("form.phoneOptional")}
                </span>
              </label>
              <Input
                id="phone"
                type="tel"
                {...register("phone")}
                placeholder={t("form.phonePlaceholder")}
                className="h-auto rounded-xl border-2 border-[#1A1A1A] bg-white px-6 py-4 font-medium text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] outline-none transition-all focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-[2px_2px_0px_0px_#1A1A1A]"
              />
            </div>

            <div className="flex flex-col gap-3">
              <div className="ml-4 text-sm font-bold text-[#1A1A1A]/80">
                {t("form.serviceLabel")}
              </div>
              <div className="flex flex-wrap gap-2">
                {serviceKeys.map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSelectedService(key)}
                    className={`rounded-xl border-2 border-[#1A1A1A] px-4 py-2 text-sm font-bold transition-all ${
                      selectedService === key
                        ? "translate-x-[2px] translate-y-[2px] bg-[#1A1A1A] text-white shadow-[2px_2px_0px_0px_#FF3366]"
                        : "bg-white text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[5px_5px_0px_0px_#1A1A1A]"
                    }`}
                  >
                    {t(`form.services.${key}`)}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="ml-4 text-sm font-bold text-[#1A1A1A]/80"
              >
                {t("form.messageLabel")}
              </label>
              <Textarea
                id="message"
                {...register("message")}
                placeholder={t("form.messagePlaceholder")}
                className={`min-h-[120px] w-full resize-none rounded-2xl border-2 border-[#1A1A1A] bg-white px-6 py-4 font-medium text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] outline-none transition-all focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-[2px_2px_0px_0px_#1A1A1A] ${errors.message ? "border-red-500 shadow-[4px_4px_0px_0px_#ef4444]" : ""}`}
              />
              {errors.message && (
                <p className="ml-4 text-xs text-red-500">
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="consent-contact"
                {...register("consent")}
                className="mt-1 h-4 w-4 cursor-pointer rounded border-[#1A1A1A]/20 text-[#FF3366] accent-[#FF3366] focus:ring-[#FF3366]"
              />
              <label
                htmlFor="consent-contact"
                className="cursor-pointer text-xs text-[#1A1A1A]/60"
              >
                {tCommon("consent.accept")}{" "}
                <Link
                  href="/privacy-policy"
                  target="_blank"
                  className="text-[#FF3366] hover:underline"
                >
                  {tCommon("consent.privacyPolicy")}
                </Link>
              </label>
            </div>
            {errors.consent && (
              <p className="ml-4 text-xs text-red-500">
                {errors.consent.message}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-2xl border-2 border-[#1A1A1A] bg-[#1A1A1A] px-10 py-5 text-lg font-bold text-white shadow-[4px_4px_0px_0px_#FFFFFF] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#FFFFFF] active:translate-x-1 active:translate-y-1 active:shadow-[0px_0px_0px_0px_#FFFFFF] disabled:opacity-70"
            >
              {isSubmitting ? t("form.submitting") : t("form.submitButton")}
            </button>

            <p className="text-center text-xs text-[#1A1A1A]/40">
              {t("form.responseNote")}
            </p>
          </form>
        </>
      )}
    </div>
  );
}
