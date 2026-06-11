"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Minus, Phone, Plus, Users } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { HONEYPOT_FIELD, useHoneypot } from "@/components/ui/honeypot";
import { Input } from "@/components/ui/input";
import { Link } from "@/i18n/routing";
import { hasConsented } from "@/lib/consent";
import {
  getHaloTrackSessionId,
  trackFormEvent,
  waitForHaloTrack,
} from "@/lib/halotrack";
import {
  type AuditConsultationData,
  createAuditConsultationSchema,
} from "@/lib/validations";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type AvatarType = "insta" | "burned" | "deadsite";

interface Props {
  avatar?: AvatarType;
}

// ---------------------------------------------------------------------------
// Headline Variants
// ---------------------------------------------------------------------------

const headlineVariants: Record<
  AvatarType | "default",
  { h1: string; sub: string }
> = {
  insta: {
    h1: "Знаете, сколько клиентов ищут вас в Google\u00A0\u2014 и\u00A0не\u00A0находят?",
    sub: "Вы продвигаетесь только через Instagram, но большинство клиентов ищут услуги в Google. Давайте разберём, что с этим делать \u2014 за 15 минут.",
  },
  burned: {
    h1: "Потратили бюджет на\u00A0рекламу и\u00A0ничего не\u00A0получили?",
    sub: "Деньги ушли, а заявок нет. Разберём, почему реклама не сработала и что изменить \u2014 за 15 минут, бесплатно.",
  },
  deadsite: {
    h1: "Когда последний раз ваш сайт сам привёл клиента?",
    sub: "Сайт есть, но он не работает как инструмент продаж. Покажем, что исправить, чтобы он начал приносить заявки.",
  },
  default: {
    h1: "Не\u00A0знаете, откуда брать клиентов онлайн?",
    sub: "Запишитесь на бесплатный 15-минутный разбор. Покажем, какие каналы сработают для вашего бизнеса в Чехии.",
  },
};

const sourceHeadlineVariants: Record<
  "meta" | "google" | "other",
  { h1: string; sub: string }
> = {
  meta: {
    h1: "Покажем за\u00A015\u00A0минут, откуда вашему бизнесу брать клиентов в\u00A0Чехии",
    sub: "Вы расскажете про бизнес \u2014 мы покажем, какой канал принесёт первых клиентов быстрее всего. Без воды и навязывания услуг.",
  },
  google: {
    h1: "Нужен понятный план, как получать заявки онлайн в Чехии?",
    sub: "Разберём ваш текущий маркетинг и покажем, какие каналы дадут результат быстрее всего именно в вашей нише.",
  },
  other: {
    h1: "Не\u00A0знаете, откуда брать клиентов онлайн?",
    sub: "Запишитесь на бесплатный 15-минутный разбор. Покажем, какие каналы сработают для вашего бизнеса в Чехии.",
  },
};

// ---------------------------------------------------------------------------
// Static Data
// ---------------------------------------------------------------------------

const deliverables = [
  {
    step: "01",
    text: "Узнаете, какой канал (Google, Instagram, реклама) принесёт клиентов быстрее всего",
  },
  {
    step: "02",
    text: "Получите 2\u20133 конкретных шага, которые можно внедрить на этой неделе",
  },
  {
    step: "03",
    text: "Поймёте, сколько стоит один клиент из интернета в вашей нише",
  },
];

const testimonials = [
  {
    quote:
      "Думал, будут впаривать услуги \u2014 а реально получил план с конкретными цифрами",
    author: "Алексей Р.",
    business: "Барбершоп",
    city: "Прага",
    initial: "А",
    accentColor: "#FF3366",
    stars: 5,
  },
  {
    quote: "За 15 минут узнал больше, чем за 3 платных консультации у других",
    author: "Мартин К.",
    business: "ProPradlo",
    city: "Брно",
    initial: "P",
    accentColor: "#3B82F6",
    stars: 5,
  },
];

const heroStats = [
  { value: "50+", label: "бизнесов получили план" },
  { value: "15", label: "минут на разбор" },
  { value: "2-3", label: "конкретных шага" },
];

const faqItems = [
  {
    q: "Будете потом продавать услуги?",
    a: "Нет давления. Если после разбора вы захотите работать с нами \u2014 отлично. Если нет \u2014 вы уйдёте с конкретным планом, который сможете реализовать сами или с кем угодно.",
  },
  {
    q: "Это действительно бесплатно?",
    a: "Да. 15-минутный разбор полностью бесплатный и ни к чему не обязывает. Мы покажем конкретные шаги, а дальше вы решаете сами.",
  },
  {
    q: "Мне нужно что-то подготовить?",
    a: "Нет. Достаточно указать ваш бизнес и ссылку на сайт или соцсети \u2014 мы сами посмотрим всё перед звонком.",
  },
  {
    q: "Сколько длится звонок?",
    a: "15 минут. Без воды и продаж \u2014 только конкретика по вашей ситуации.",
  },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function AuditLPClient({ avatar }: Props) {
  const locale = useLocale() as "ru" | "cs";
  const tv = useTranslations("validation.auditConsultation");
  const searchParams = useSearchParams();
  const utmSource = (searchParams.get("utm_source") || "").toLowerCase();
  const trafficSource =
    searchParams.has("fbclid") ||
    ["meta", "facebook", "instagram", "fb", "ig"].includes(utmSource)
      ? "meta"
      : searchParams.has("gclid") ||
          ["google", "adwords", "gads"].includes(utmSource)
        ? "google"
        : "other";
  const variant = avatar
    ? headlineVariants[avatar]
    : sourceHeadlineVariants[trafficSource];

  // Form
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [haloSessionId, setHaloSessionId] = useState("");
  const [hasCookieChoice, setHasCookieChoice] = useState(true);
  const honeypot = useHoneypot();

  // Post-submit micro-survey
  const [postSubmitTimeline, setPostSubmitTimeline] = useState<string | null>(
    null,
  );
  const [timelineSaved, setTimelineSaved] = useState(false);

  // Sticky CTA
  const formRef = useRef<HTMLDivElement>(null);
  const [showSticky, setShowSticky] = useState(false);

  // FAQ auto-open first item
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AuditConsultationData>({
    resolver: zodResolver(createAuditConsultationSchema((key) => tv(key))),
    defaultValues: {
      businessType: "",
      websiteOrProfile: "",
      email: "",
      phone: "",
      consent: false,
    },
  });

  // HaloTrack session
  useEffect(() => {
    waitForHaloTrack().then(() => {
      setHaloSessionId(getHaloTrackSessionId());
    });
  }, []);

  useEffect(() => {
    const syncConsentState = () => {
      setHasCookieChoice(hasConsented());
    };
    syncConsentState();
    const onStorage = (e: StorageEvent) => {
      if (e.key === "halo_cookie_consent") syncConsentState();
    };
    const onConsentUpdated = () => syncConsentState();
    window.addEventListener("storage", onStorage);
    window.addEventListener("consent-updated", onConsentUpdated);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("consent-updated", onConsentUpdated);
    };
  }, []);

  // Sticky CTA observer
  useEffect(() => {
    if (!formRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowSticky(!entry.isIntersecting);
      },
      { threshold: 0 },
    );
    observer.observe(formRef.current);
    return () => observer.disconnect();
  }, []);

  // -------------------------------------------------------------------------
  // Form Submit
  // -------------------------------------------------------------------------

  const onSubmit = async (data: AuditConsultationData) => {
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const leadId = crypto.randomUUID();
      const leadValue = 8000;

      const response = await fetch("/api/webhook/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "audit-consultation",
          page_locale: locale,
          reply_language: locale === "cs" ? "czech" : undefined,
          email: data.email,
          phone: data.phone || "",
          businessType: data.businessType,
          websiteOrProfile: data.websiteOrProfile || "",
          session_id: haloSessionId,
          lead_id: leadId,
          value: leadValue,
          currency: "CZK",
          source: "lp_audit",
          landing_page_type: "audit",
          traffic_source: trafficSource,
          offer_variant: avatar || "default",
          avatar: avatar || "default",
          consent_given: true,
          timestamp: new Date().toISOString(),
          [HONEYPOT_FIELD]: honeypot.value(),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Error ${response.status}`);
      }

      // Facebook Pixel
      if (
        typeof window !== "undefined" &&
        typeof (window as any).fbq === "function"
      ) {
        (window as any).fbq(
          "track",
          "Lead",
          {
            content_name: "audit_consultation",
            currency: "CZK",
            value: leadValue,
          },
          { eventID: leadId },
        );
      }

      // Google Ads Enhanced Conversions
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: "generate_lead_v2",
        eventID: leadId,
        user_data: {
          email_address: data.email,
          ...(data.phone ? { phone_number: data.phone } : {}),
        },
      });

      // HaloTrack event
      trackFormEvent("audit_consultation_submit", {
        avatar: avatar || "default",
        traffic_source: trafficSource,
        business_type: data.businessType,
        value: leadValue,
      });

      setShowSuccess(true);
      reset();
    } catch (error) {
      console.error("Failed to submit:", error);
      setSubmitError("Ошибка отправки. Попробуйте ещё раз.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTimelineSelect = (value: string) => {
    setPostSubmitTimeline(value);
    setTimelineSaved(true);
    trackFormEvent("audit_consultation_timeline", {
      avatar: avatar || "default",
      traffic_source: trafficSource,
      decision_timeline: value,
    });
  };

  // -------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------

  return (
    <main className="min-h-screen bg-[#F5F5F7]">
      {/* Dot grid background */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#d1d5db 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10">
        {/* ================================================================= */}
        {/* HERO + FORM */}
        {/* ================================================================= */}
        <section className="relative pt-8 pb-8 md:pt-24 md:pb-20 px-4 overflow-hidden">
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">
              {/* Left: Copy */}
              <div className="text-left">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF3366]/10 border border-[#FF3366]/20 mb-4 md:mb-6">
                  <Phone className="w-3.5 h-3.5 text-[#FF3366]" />
                  <span className="text-sm font-bold text-[#FF3366]">
                    Бесплатно &middot; 15 минут &middot; Без обязательств
                  </span>
                </div>

                <h1
                  className="text-3xl md:text-5xl lg:text-[3.5rem] font-extrabold text-[#1A1A1A] mb-3 md:mb-5 leading-[1.15] tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {variant.h1}
                </h1>

                <p className="text-base md:text-xl text-[#1A1A1A]/60 mb-4 md:mb-6 max-w-xl leading-relaxed">
                  {variant.sub}
                </p>

                {/* Stats row */}
                <div className="flex items-center gap-6 md:gap-8 mb-4 md:mb-8">
                  {heroStats.map((stat, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A] tracking-tight">
                        {stat.value}
                      </span>
                      <span className="text-xs md:text-sm text-[#1A1A1A]/40 leading-tight mt-0.5">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Trust indicators — desktop */}
                <div className="hidden lg:flex items-center gap-6">
                  {[
                    "Без обязательств",
                    "Конкретный план",
                    "Для бизнеса в Чехии",
                  ].map((text) => (
                    <div key={text} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF3366] flex-shrink-0" />
                      <span className="text-sm text-[#1A1A1A]/60">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Form Card */}
              <div ref={formRef} id="audit-form">
                <div className="bg-white rounded-[2rem] p-6 md:p-8 border border-[#1A1A1A]/5 shadow-sm">
                  {showSuccess ? (
                    <div className="text-center py-4 md:py-8">
                      <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#FF3366]/10 flex items-center justify-center">
                        <CheckCircle2 className="w-8 h-8 text-[#FF3366]" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">
                        Заявка принята!
                      </h3>
                      <p className="text-[#1A1A1A]/60 max-w-sm mx-auto leading-relaxed mb-6">
                        Мы свяжемся с вами в течение 2 рабочих часов и согласуем
                        удобный формат (звонок или сообщение).
                      </p>

                      {/* Post-submit micro-survey */}
                      {!timelineSaved ? (
                        <div className="border-t border-[#1A1A1A]/5 pt-5">
                          <p className="text-sm text-[#1A1A1A]/40 mb-3">
                            Ещё один вопрос — когда планируете запускать
                            продвижение?
                          </p>
                          <div className="flex flex-col gap-2">
                            {[
                              { value: "asap", label: "Нужны клиенты срочно" },
                              {
                                value: "quarter",
                                label: "Планирую рост бизнеса",
                              },
                              {
                                value: "research",
                                label: "Хочу разобраться в маркетинге",
                              },
                            ].map((opt) => (
                              <button
                                key={opt.value}
                                type="button"
                                onClick={() => handleTimelineSelect(opt.value)}
                                className={`w-full px-4 py-2.5 rounded-xl text-sm text-left transition-all border ${
                                  postSubmitTimeline === opt.value
                                    ? "bg-[#FF3366]/10 border-[#FF3366]/30 text-[#FF3366]"
                                    : "bg-[#F5F5F7] border-[#1A1A1A]/5 text-[#1A1A1A]/60 hover:border-[#1A1A1A]/10"
                                }`}
                              >
                                {opt.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="border-t border-[#1A1A1A]/5 pt-5">
                          <p className="text-sm text-[#FF3366]">
                            Спасибо! Учтём это при подготовке к звонку.
                          </p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-4"
                    >
                      {honeypot.field}
                      <div className="mb-2">
                        <h2 className="text-lg font-bold text-[#1A1A1A]">
                          Узнайте, где вы теряете клиентов
                        </h2>
                        <p className="text-sm text-[#1A1A1A]/40 mt-1">
                          Заполните форму — мы свяжемся и разберём вашу ситуацию
                        </p>
                      </div>

                      <div>
                        <Input
                          {...register("businessType")}
                          placeholder="Например: салон красоты, автосервис, клиника..."
                          className="h-12 bg-[#F5F5F7] border-[#1A1A1A]/5 text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 focus:border-[#FF3366] focus:ring-[#FF3366]/20 rounded-xl"
                        />
                        {errors.businessType && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.businessType.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Input
                          {...register("websiteOrProfile")}
                          placeholder="Сайт, Instagram или Google Maps (необязательно)"
                          className="h-12 bg-[#F5F5F7] border-[#1A1A1A]/5 text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 focus:border-[#FF3366] focus:ring-[#FF3366]/20 rounded-xl"
                        />
                      </div>

                      <div>
                        <Input
                          {...register("email")}
                          type="email"
                          placeholder="Email для связи"
                          className="h-12 bg-[#F5F5F7] border-[#1A1A1A]/5 text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 focus:border-[#FF3366] focus:ring-[#FF3366]/20 rounded-xl"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Input
                          {...register("phone")}
                          type="tel"
                          placeholder="WhatsApp или телефон (необязательно)"
                          className="h-12 bg-[#F5F5F7] border-[#1A1A1A]/5 text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 focus:border-[#FF3366] focus:ring-[#FF3366]/20 rounded-xl"
                        />
                      </div>

                      {/* Consent */}
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          {...register("consent")}
                          className="mt-1 h-4 w-4 rounded border-[#1A1A1A]/10 bg-[#F5F5F7] accent-[#FF3366] cursor-pointer"
                        />
                        <span className="text-xs text-[#1A1A1A]/40 leading-relaxed">
                          Согласен с{" "}
                          <Link
                            href="/privacy-policy"
                            target="_blank"
                            className="text-[#FF3366] hover:text-[#FF3366]/80 underline underline-offset-2"
                          >
                            политикой конфиденциальности
                          </Link>
                        </span>
                      </label>
                      {errors.consent && (
                        <p className="text-red-500 text-xs -mt-2">
                          {errors.consent.message}
                        </p>
                      )}

                      {submitError && (
                        <p className="text-red-500 text-sm text-center">
                          {submitError}
                        </p>
                      )}

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-12 md:h-14 bg-[#FF3366] hover:bg-[#FF3366]/90 text-white font-bold text-base md:text-lg shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:translate-y-1 hover:shadow-[0px_0px_0px_0px_rgba(26,26,26,1)] rounded-xl transition-all duration-300 disabled:opacity-50"
                      >
                        {isSubmitting
                          ? "Отправляем..."
                          : "Получить бесплатный разбор →"}
                      </Button>

                      <p className="text-[11px] text-[#1A1A1A]/30 text-center">
                        Свяжемся в течение 2 рабочих часов
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>

            {/* Trust indicators — mobile only */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-6 lg:hidden">
              {[
                "Без обязательств",
                "Конкретный план",
                "Для бизнеса в Чехии",
              ].map((text) => (
                <div key={text} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF3366] flex-shrink-0" />
                  <span className="text-xs text-[#1A1A1A]/40">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* WHAT YOU GET */}
        {/* ================================================================= */}
        <section className="py-12 md:py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2
              className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A] text-center mb-10"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Что вы получите за 15 минут
            </h2>

            <div className="grid md:grid-cols-3 gap-5">
              {deliverables.map((item) => (
                <div
                  key={item.step}
                  className="p-6 rounded-[2rem] bg-white border border-[#1A1A1A]/5 hover:border-[#FF3366]/30 transition-colors duration-300 shadow-sm"
                >
                  <span
                    className="text-2xl font-extrabold text-[#FF3366]/30 mb-3 block"
                    style={{ fontFamily: "var(--font-hand)" }}
                  >
                    {item.step}
                  </span>
                  <p className="text-[#1A1A1A]/70 text-[15px] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* SOCIAL PROOF */}
        {/* ================================================================= */}
        <section className="py-14 md:py-16 md:py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-10">
              <p className="text-[#FF3366] text-sm font-bold tracking-widest uppercase mb-3">
                Отзывы клиентов
              </p>
              <h2
                className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Что говорят о разборе
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="relative p-7 rounded-[2rem] bg-white border border-[#1A1A1A]/5 hover:border-[#FF3366]/30 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.stars }).map((_, si) => (
                      <svg
                        key={si}
                        className="w-4 h-4 text-amber-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-[#1A1A1A] text-base md:text-lg mb-5 leading-relaxed font-medium">
                    &laquo;{t.quote}&raquo;
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-[#1A1A1A]/5">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0"
                      style={{
                        backgroundColor: t.accentColor + "20",
                        color: t.accentColor,
                      }}
                    >
                      {t.initial}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[#1A1A1A] text-sm font-medium truncate">
                        {t.author}
                      </p>
                      <p className="text-[#1A1A1A]/40 text-xs truncate">
                        {t.business} &middot; {t.city}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <div className="inline-flex items-center gap-2 text-[#1A1A1A]/40 text-sm">
                <Users className="w-4 h-4 text-[#FF3366]/60" />
                <span>50+ бизнесов в Чехии уже получили план роста</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* MINI FAQ */}
        {/* ================================================================= */}
        <section className="py-12 md:py-16 px-4">
          <div className="container mx-auto max-w-2xl">
            <h2
              className="text-xl md:text-2xl font-extrabold text-[#1A1A1A] text-center mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Частые вопросы
            </h2>

            <div className="space-y-3">
              {faqItems.map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left"
                  >
                    <div
                      className={`rounded-2xl border transition-all duration-300 ${
                        isOpen
                          ? "bg-[#FF3366]/5 border-[#FF3366]/20"
                          : "bg-white border-[#1A1A1A]/5 hover:border-[#1A1A1A]/10"
                      }`}
                    >
                      <div className="flex items-center justify-between p-5">
                        <span
                          className={`font-medium text-[15px] pr-4 transition-colors ${
                            isOpen ? "text-[#FF3366]" : "text-[#1A1A1A]"
                          }`}
                        >
                          {item.q}
                        </span>
                        <div
                          className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                            isOpen
                              ? "bg-[#FF3366]/10 text-[#FF3366]"
                              : "bg-[#1A1A1A]/5 text-[#1A1A1A]/40"
                          }`}
                        >
                          {isOpen ? (
                            <Minus className="w-4 h-4" />
                          ) : (
                            <Plus className="w-4 h-4" />
                          )}
                        </div>
                      </div>
                      <div
                        className="grid transition-all duration-300"
                        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                      >
                        <div className="overflow-hidden">
                          <p className="px-5 pb-5 text-[#1A1A1A]/60 text-sm leading-relaxed">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* BOTTOM CTA */}
        {/* ================================================================= */}
        <section className="py-12 md:py-16 px-4">
          <div className="container mx-auto max-w-2xl text-center">
            <p className="text-[#FF3366] text-sm font-bold mb-2 tracking-wide uppercase">
              Осталось несколько мест на этой неделе
            </p>
            <p className="text-[#1A1A1A] text-xl md:text-2xl font-bold mb-2">
              15 минут. Конкретный план. Без обязательств.
            </p>
            <p className="text-[#1A1A1A]/40 text-sm mb-6">
              Уже помогли 50+ бизнесам в Чехии найти точки роста
            </p>
            <Button
              onClick={() =>
                document
                  .getElementById("audit-form")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="h-12 md:h-14 px-8 bg-[#FF3366] hover:bg-[#FF3366]/90 text-white font-bold text-base md:text-lg shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:translate-y-1 hover:shadow-[0px_0px_0px_0px_rgba(26,26,26,1)] rounded-xl transition-all duration-300"
            >
              Получить бесплатный разбор &rarr;
            </Button>

            {/* Minimal footer */}
            <div className="mt-16 pt-8 border-t border-[#1A1A1A]/5">
              <p className="text-[#1A1A1A]/30 text-xs">
                &copy; {new Date().getFullYear()} HaloAgency.cz &middot;{" "}
                <Link
                  href="/privacy-policy"
                  target="_blank"
                  className="hover:text-[#FF3366] transition-colors"
                >
                  Политика конфиденциальности
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* STICKY MOBILE CTA */}
        {/* ================================================================= */}
        <div
          className={`fixed left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-md border-t border-[#FF3366]/20 p-3 transition-transform duration-300 ${
            hasCookieChoice ? "bottom-0" : "bottom-28"
          } ${
            showSticky && !showSuccess ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <Button
            onClick={() =>
              document
                .getElementById("audit-form")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="w-full h-12 bg-[#FF3366] hover:bg-[#FF3366]/90 text-white font-bold rounded-xl shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:translate-y-1 hover:shadow-[0px_0px_0px_0px_rgba(26,26,26,1)] transition-all"
          >
            Получить бесплатный разбор &rarr;
          </Button>
        </div>
      </div>
    </main>
  );
}
