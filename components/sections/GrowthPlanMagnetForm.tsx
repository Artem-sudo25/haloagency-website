"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  getHaloTrackSessionId,
  trackFormEvent,
  waitForHaloTrack,
} from "@/lib/halotrack";
import { trackLeadSubmission } from "@/lib/site-tracking";
import { createGrowthPlanSchema, type GrowthPlanData } from "@/lib/validations";

const businessTypeKeys = ["service", "ecommerce", "local", "other"] as const;
const goalKeys = ["leads", "sales", "checkAds", "prepareGrowth"] as const;
const triedKeys = ["googleAds", "metaAds", "seo", "social", "nothing"] as const;
const triedValues: Record<string, string> = {
  googleAds: "google-ads",
  metaAds: "meta-ads",
  seo: "seo",
  social: "social",
  nothing: "nothing",
};

export default function GrowthPlanMagnetForm() {
  const locale = useLocale() as "ru" | "cs";
  const t = useTranslations("growthPlanMagnet");
  const tCommon = useTranslations("common");
  const tv = useTranslations("validation.growthPlan");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedTried, setSelectedTried] = useState<string[]>([]);
  const [haloSessionId, setHaloSessionId] = useState<string>("");
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<GrowthPlanData>({
    resolver: zodResolver(
      createGrowthPlanSchema((key) =>
        tv(
          (
            {
              siteOrProfileRequired: "websiteRequired",
              textTooLong: "mainProblemMax",
            } as Record<string, string>
          )[key] ?? key,
        ),
      ),
    ),
    defaultValues: {
      triedBefore: [],
      mainProblem: "",
    },
  });

  useEffect(() => {
    waitForHaloTrack().then(() => {
      setHaloSessionId(getHaloTrackSessionId());
    });
  }, []);

  const toggleTried = (value: string) => {
    setSelectedTried((prev) => {
      if (value === "nothing") {
        return prev.includes("nothing") ? [] : ["nothing"];
      }

      const withoutNothing = prev.filter((item) => item !== "nothing");
      return withoutNothing.includes(value)
        ? withoutNothing.filter((item) => item !== value)
        : [...withoutNothing, value];
    });
  };

  const getLeadValue = (businessType: string): number => {
    switch (businessType) {
      case "ecommerce":
        return 25000;
      case "service":
        return 15000;
      case "local":
        return 8000;
      default:
        return 8000;
    }
  };

  const onSubmit = async (data: GrowthPlanData) => {
    setSubmitError("");
    setIsSubmitting(true);

    const leadValue = getLeadValue(data.businessType);

    try {
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.contact);
      const leadId = crypto.randomUUID();

      const response = await fetch("/api/webhook/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Webhook-Secret":
            process.env.NEXT_PUBLIC_HALOTRACK_WEBHOOK_SECRET || "",
        },
        body: JSON.stringify({
          type: "growth-plan",
          page_locale: locale,
          reply_language: locale === "cs" ? "czech" : undefined,
          session_id: haloSessionId,
          websiteOrProfile: data.websiteOrProfile,
          businessType: data.businessType,
          mainGoal: data.mainGoal,
          mainProblem: data.mainProblem,
          contact: data.contact,
          email: isEmail ? data.contact : undefined,
          phone: data.phone,
          contact_method: isEmail ? "email" : "other",
          triedBefore: selectedTried,
          value: leadValue,
          currency: "CZK",
          lead_id: leadId,
          source: "growth_plan_form",
          consent_given: true,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        const result = await response
          .json()
          .catch(() => ({ error: tCommon("errors.submitError") }));
        throw new Error(result.error || tCommon("errors.submitError"));
      }

      trackFormEvent("growth_plan_submit", {
        business_type: data.businessType,
        goal: data.mainGoal,
        value: leadValue,
      });

      trackLeadSubmission({
        leadId,
        formType: "growth_plan",
        contentName: "growth_plan",
        email: isEmail ? data.contact : undefined,
        phone: data.phone,
        value: leadValue,
        currency: "CZK",
      });

      setShowSuccess(true);
      reset();
      setSelectedTried([]);
    } catch (error) {
      console.error("Failed to submit:", error);
      setSubmitError(tCommon("errors.submitError"));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccess) {
    return (
      <div className="py-12 text-center">
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </div>
        <h3
          className="mb-3 text-2xl font-bold text-[#1A1A1A]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {t("success.title")}
        </h3>
        <p className="mx-auto max-w-md text-[#1A1A1A]/60">
          {t("success.message")}
        </p>
        <button
          onClick={() => setShowSuccess(false)}
          className="mt-6 rounded-full border-2 border-[#1A1A1A] px-6 py-2.5 font-bold text-[#1A1A1A] transition-all hover:bg-[#1A1A1A] hover:text-white"
          type="button"
        >
          {t("success.submitAgain")}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="growth-website"
            className="ml-4 text-sm font-bold text-[#1A1A1A]/80"
          >
            {t("form.websiteLabel")}
          </label>
          <Input
            id="growth-website"
            {...register("websiteOrProfile")}
            placeholder={t("form.websitePlaceholder")}
            className="h-auto rounded-xl border-2 border-[#1A1A1A] bg-white px-6 py-4 font-medium text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] outline-none transition-all focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-[2px_2px_0px_0px_#1A1A1A]"
          />
          {errors.websiteOrProfile && (
            <p className="ml-4 text-sm text-red-500">
              {errors.websiteOrProfile.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="growth-contact"
            className="ml-4 text-sm font-bold text-[#1A1A1A]/80"
          >
            {t("form.emailLabel")}
          </label>
          <Input
            id="growth-contact"
            type="email"
            {...register("contact")}
            placeholder={t("form.emailPlaceholder")}
            className="h-auto rounded-xl border-2 border-[#1A1A1A] bg-white px-6 py-4 font-medium text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] outline-none transition-all focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-[2px_2px_0px_0px_#1A1A1A]"
          />
          {errors.contact && (
            <p className="ml-4 text-sm text-red-500">
              {errors.contact.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="growth-business-type"
          className="ml-4 text-sm font-bold text-[#1A1A1A]/80"
        >
          {t("form.businessTypeLabel")}
        </label>
        <Controller
          name="businessType"
          control={control}
          render={({ field }) => (
            <select
              {...field}
              id="growth-business-type"
              className="w-full cursor-pointer appearance-none rounded-xl border-2 border-[#1A1A1A] bg-white px-6 py-4 font-medium text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] outline-none transition-all focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-[2px_2px_0px_0px_#1A1A1A]"
            >
              <option value="">{t("form.businessTypePlaceholder")}</option>
              {businessTypeKeys.map((key) => (
                <option key={key} value={key}>
                  {t(`form.businessTypes.${key}`)}
                </option>
              ))}
            </select>
          )}
        />
        {errors.businessType && (
          <p className="ml-4 text-sm text-red-500">
            {errors.businessType.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="growth-goal"
          className="ml-4 text-sm font-bold text-[#1A1A1A]/80"
        >
          {t("form.goalLabel")}
        </label>
        <Controller
          name="mainGoal"
          control={control}
          render={({ field }) => (
            <select
              {...field}
              id="growth-goal"
              className="w-full cursor-pointer appearance-none rounded-xl border-2 border-[#1A1A1A] bg-white px-6 py-4 font-medium text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] outline-none transition-all focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-[2px_2px_0px_0px_#1A1A1A]"
            >
              <option value="">{t("form.goalPlaceholder")}</option>
              {goalKeys.map((key) => (
                <option key={key} value={key}>
                  {t(`form.goals.${key}`)}
                </option>
              ))}
            </select>
          )}
        />
        {errors.mainGoal && (
          <p className="ml-4 text-sm text-red-500">{errors.mainGoal.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <div className="ml-4 text-sm font-bold text-[#1A1A1A]/80">
          {t("form.triedLabel")}
        </div>
        <div className="flex flex-wrap gap-2">
          {triedKeys.map((key) => {
            const value = triedValues[key];
            return (
              <button
                key={key}
                type="button"
                onClick={() => toggleTried(value)}
                className={`rounded-xl border-2 border-[#1A1A1A] px-4 py-2 text-sm font-bold transition-all ${
                  selectedTried.includes(value)
                    ? "translate-x-[2px] translate-y-[2px] bg-[#1A1A1A] text-white shadow-[2px_2px_0px_0px_#FF3366]"
                    : "bg-white text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[5px_5px_0px_0px_#1A1A1A]"
                }`}
              >
                {t(`form.triedOptions.${key}`)}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="growth-problem"
          className="ml-4 text-sm font-bold text-[#1A1A1A]/80"
        >
          {t("form.problemLabel")}
        </label>
        <Textarea
          id="growth-problem"
          {...register("mainProblem")}
          placeholder={t("form.problemPlaceholder")}
          className="min-h-[120px] w-full resize-none rounded-2xl border-2 border-[#1A1A1A] bg-white px-6 py-4 font-medium text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] outline-none transition-all focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-[2px_2px_0px_0px_#1A1A1A]"
        />
        {errors.mainProblem && (
          <p className="ml-4 text-sm text-red-500">
            {errors.mainProblem.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="growth-phone"
          className="ml-4 text-sm font-bold text-[#1A1A1A]/80"
        >
          {t("form.phoneLabel")}
        </label>
        <Input
          id="growth-phone"
          type="tel"
          {...register("phone")}
          placeholder={t("form.phonePlaceholder")}
          className="h-auto rounded-xl border-2 border-[#1A1A1A] bg-white px-6 py-4 font-medium text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] outline-none transition-all focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-[2px_2px_0px_0px_#1A1A1A]"
        />
      </div>

      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          id="consent-growth"
          {...register("consent")}
          className="mt-1 h-4 w-4 cursor-pointer rounded border-[#1A1A1A]/20 text-[#FF3366] accent-[#FF3366] focus:ring-[#FF3366]"
        />
        <label
          htmlFor="consent-growth"
          className="cursor-pointer text-xs text-[#1A1A1A]/60"
        >
          {tCommon("consent.accept")}{" "}
          <a
            href="/privacy-policy"
            target="_blank"
            className="text-[#FF3366] hover:underline"
            rel="noreferrer"
          >
            {tCommon("consent.privacyPolicy")}
          </a>
        </label>
      </div>
      {errors.consent && (
        <p className="ml-4 text-xs text-red-500">{errors.consent.message}</p>
      )}

      <div className="pt-2">
        {submitError && (
          <p className="mb-3 text-center text-sm text-red-500">{submitError}</p>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-2xl border-2 border-[#1A1A1A] bg-[#1A1A1A] px-10 py-5 text-lg font-bold text-white shadow-[4px_4px_0px_0px_#FFFFFF] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#FFFFFF] active:translate-x-1 active:translate-y-1 active:shadow-[0px_0px_0px_0px_#FFFFFF] disabled:opacity-70"
        >
          {isSubmitting ? (
            t("form.submitting")
          ) : (
            <>
              {t("form.submitButton")}
              <ArrowRight className="ml-2 inline h-5 w-5" />
            </>
          )}
        </button>
        <p className="mt-3 text-center text-xs text-[#1A1A1A]/40">
          {t("form.footerNote")}
        </p>
      </div>
    </form>
  );
}
