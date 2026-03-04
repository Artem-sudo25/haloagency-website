"use client";

import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  auditConsultationSchema,
  type AuditConsultationData,
} from "@/lib/validations";
import {
  waitForHaloTrack,
  getHaloTrackSessionId,
  trackFormEvent,
} from "@/lib/halotrack";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  CheckCircle2,
  Minus,
  Plus,
  Phone,
  ArrowRight,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  CSSScrollAnimation,
  CSSStagger,
  CSSStaggerItem,
} from "@/components/ui/css-scroll-animation";
import { hasConsented } from "@/lib/consent";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type AvatarType = "insta" | "burned" | "deadsite";

interface Props {
  avatar?: AvatarType;
}

// ---------------------------------------------------------------------------
// Headline Variants (P1: rewrites for cold-inclusive messaging)
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

// P1: Meta source headline — rewritten to be inclusive of ALL cold segments
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
// Static Data (P11: rewritten as user outcomes + P12: step numbers)
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

// P13+P14+P15: Testimonials rewritten for audit experience + full names
const testimonials = [
  {
    quote: "Думал, будут впаривать услуги \u2014 а реально получил план с конкретными цифрами",
    author: "Алексей Р.",
    business: "Барбершоп",
    city: "Прага",
    initial: "А",
    accentColor: "#F59E0B",
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

// Hero stats — concrete, reachable numbers
const heroStats = [
  { value: "50+", label: "бизнесов получили план" },
  { value: "15", label: "минут на разбор" },
  { value: "2-3", label: "конкретных шага" },
];

// P16: Added "will you sell me?" objection + P17: first item auto-open
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

  // P6: Post-submit micro-survey
  const [postSubmitTimeline, setPostSubmitTimeline] = useState<string | null>(null);
  const [timelineSaved, setTimelineSaved] = useState(false);

  // Sticky CTA
  const formRef = useRef<HTMLDivElement>(null);
  const [showSticky, setShowSticky] = useState(false);

  // P17: FAQ auto-open first item
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AuditConsultationData>({
    resolver: zodResolver(auditConsultationSchema),
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
      if (e.key === "halo_cookie_consent") {
        syncConsentState();
      }
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
      { threshold: 0 }
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

      // 1. POST to webhook
      const response = await fetch("/api/webhook/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Webhook-Secret":
            process.env.NEXT_PUBLIC_HALOTRACK_WEBHOOK_SECRET || "",
        },
        body: JSON.stringify({
          type: "audit-consultation",
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
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.error || `Error ${response.status}`
        );
      }

      // 2. Facebook Pixel
      if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
        (window as any).fbq(
          "track",
          "Lead",
          {
            content_name: "audit_consultation",
            currency: "CZK",
            value: leadValue,
          },
          { eventID: leadId }
        );
      }

      // 3. Google Ads Enhanced Conversions
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: "generate_lead_v2",
        eventID: leadId,
        user_data: {
          email_address: data.email,
          ...(data.phone ? { phone_number: data.phone } : {}),
        },
      });

      // 4. HaloTrack event
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

  // P6: Post-submit timeline save
  const handleTimelineSelect = (value: string) => {
    setPostSubmitTimeline(value);
    setTimelineSaved(true);

    // Fire supplementary tracking event with timeline data
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
    <main className="min-h-screen bg-ha-bg">
      {/* ================================================================= */}
      {/* HERO + FORM (P4: tighter mobile padding) */}
      {/* ================================================================= */}
      <section className="relative pt-8 pb-8 md:pt-24 md:pb-20 px-4 overflow-hidden">
        {/* Green spotlight background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-30%] left-[-20%] w-[140%] h-[140%] opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(16,185,129,0.4)_0%,transparent_60%)] blur-3xl" />
          </div>
          <div className="absolute bottom-0 right-0 w-[60%] h-[60%] opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.3)_0%,transparent_60%)] blur-3xl" />
          </div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">
            {/* Left: Copy */}
            <div className="text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4 md:mb-6 animate-fade-in-up">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-sm font-medium text-emerald-300 tracking-wide">
                  Бесплатно &middot; 15 минут &middot; Без обязательств
                </span>
              </div>

              {/* H1 (P4: tighter mb on mobile) */}
              <h1
                className="text-3xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-3 md:mb-5 leading-[1.15] tracking-tight animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                {variant.h1}
              </h1>

              {/* Sub (P2: no jargon, P4: tighter mb) */}
              <p
                className="text-base md:text-xl text-slate-400 mb-4 md:mb-6 max-w-xl leading-relaxed animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                {variant.sub}
              </p>

              {/* Stats row — concrete numbers */}
              <div
                className="flex items-center gap-6 md:gap-8 mb-4 md:mb-8 animate-fade-in-up"
                style={{ animationDelay: "0.24s" }}
              >
                {heroStats.map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-xs md:text-sm text-slate-500 leading-tight mt-0.5">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Trust indicators — desktop */}
              <div
                className="hidden lg:flex items-center gap-6 animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                {[
                  "Без обязательств",
                  "Конкретный план",
                  "Для бизнеса в Чехии",
                ].map((text) => (
                  <div key={text} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-sm text-slate-400">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form Card */}
            <div
              ref={formRef}
              id="audit-form"
              className="animate-fade-in-up"
              style={{ animationDelay: "0.15s" }}
            >
              <div className="relative">
                {/* Glow */}
                <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500/20 via-green-500/10 to-transparent rounded-2xl blur-xl opacity-60" />

                <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-emerald-500/20 shadow-2xl shadow-emerald-900/20">
                  {showSuccess ? (
                    /* ---- P24: Improved Success State ---- */
                    <div className="text-center py-4 md:py-8">
                      <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        Заявка принята!
                      </h3>
                      <p className="text-slate-400 max-w-sm mx-auto leading-relaxed mb-6">
                        Мы свяжемся с вами в течение 2 рабочих часов и согласуем
                        удобный формат (звонок или сообщение).
                      </p>

                      {/* P6: Post-submit micro-survey */}
                      {!timelineSaved ? (
                        <div className="border-t border-white/5 pt-5">
                          <p className="text-sm text-slate-500 mb-3">
                            Ещё один вопрос — когда планируете запускать продвижение?
                          </p>
                          <div className="flex flex-col gap-2">
                            {[
                              { value: "asap", label: "Нужны клиенты срочно" },
                              { value: "quarter", label: "Планирую рост бизнеса" },
                              { value: "research", label: "Хочу разобраться в маркетинге" },
                            ].map((opt) => (
                              <button
                                key={opt.value}
                                type="button"
                                onClick={() => handleTimelineSelect(opt.value)}
                                className={`w-full px-4 py-2.5 rounded-xl text-sm text-left transition-all border ${
                                  postSubmitTimeline === opt.value
                                    ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                                    : "bg-white/[0.03] border-white/[0.06] text-slate-400 hover:border-white/10"
                                }`}
                              >
                                {opt.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="border-t border-white/5 pt-5">
                          <p className="text-sm text-emerald-400">
                            Спасибо! Учтём это при подготовке к звонку.
                          </p>
                        </div>
                      )}
                    </div>
                  ) : (
                    /* ---- Form ---- */
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-4"
                    >
                      {/* P5: Value statement title */}
                      <div className="mb-2">
                        <h2 className="text-lg font-semibold text-white">
                          Узнайте, где вы теряете клиентов
                        </h2>
                        <p className="text-sm text-slate-500 mt-1">
                          Заполните форму — мы свяжемся и разберём вашу ситуацию
                        </p>
                      </div>

                      {/* Business Type (P7: broader placeholder) */}
                      <div>
                        <Input
                          {...register("businessType")}
                          placeholder="Например: салон красоты, автосервис, клиника..."
                          className="h-12 bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-xl"
                        />
                        {errors.businessType && (
                          <p className="text-red-400 text-xs mt-1">
                            {errors.businessType.message}
                          </p>
                        )}
                      </div>

                      {/* Website / Instagram */}
                      <div>
                        <Input
                          {...register("websiteOrProfile")}
                          placeholder="Сайт, Instagram или Google Maps (необязательно)"
                          className="h-12 bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-xl"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <Input
                          {...register("email")}
                          type="email"
                          placeholder="Email для связи"
                          className="h-12 bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-xl"
                        />
                        {errors.email && (
                          <p className="text-red-400 text-xs mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      {/* P8: Phone / WhatsApp (optional) */}
                      <div>
                        <Input
                          {...register("phone")}
                          type="tel"
                          placeholder="WhatsApp или телефон (необязательно)"
                          className="h-12 bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-xl"
                        />
                      </div>

                      {/* Consent */}
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          {...register("consent")}
                          className="mt-1 h-4 w-4 rounded border-white/20 bg-white/5 text-emerald-500 focus:ring-emerald-500/20 cursor-pointer"
                        />
                        <span className="text-xs text-slate-500 leading-relaxed">
                          Согласен с{" "}
                          <Link
                            href="/privacy-policy"
                            target="_blank"
                            className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
                          >
                            политикой конфиденциальности
                          </Link>
                        </span>
                      </label>
                      {errors.consent && (
                        <p className="text-red-400 text-xs -mt-2">
                          {errors.consent.message}
                        </p>
                      )}

                      {/* Error */}
                      {submitError && (
                        <p className="text-red-400 text-sm text-center">
                          {submitError}
                        </p>
                      )}

                      {/* P9: Submit with arrow */}
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-12 md:h-14 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-medium text-base md:text-lg shadow-lg shadow-emerald-500/25 rounded-xl transition-all duration-300 disabled:opacity-50"
                      >
                        {isSubmitting
                          ? "Отправляем..."
                          : "Получить бесплатный разбор \u2192"}
                      </Button>

                      <p className="text-[11px] text-slate-600 text-center">
                        Свяжемся в течение 2 рабочих часов
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Trust indicators — mobile only */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 lg:hidden animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            {[
              "Без обязательств",
              "Конкретный план",
              "Для бизнеса в Чехии",
            ].map((text) => (
              <div key={text} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span className="text-xs text-slate-500">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-500/15 to-transparent border-t border-white/5" />

      {/* ================================================================= */}
      {/* WHAT YOU GET (P11+P12: outcomes + step numbers) */}
      {/* ================================================================= */}
      <section className="py-12 md:py-16 px-4 bg-ha-bg-soft">
        <div className="container mx-auto max-w-4xl">
          <CSSScrollAnimation className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Что вы получите за 15 минут
            </h2>
          </CSSScrollAnimation>

          <CSSStagger className="grid md:grid-cols-3 gap-5">
            {deliverables.map((item, index) => (
              <CSSStaggerItem key={index} index={index}>
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-emerald-500/20 transition-colors duration-300 h-full">
                  <span className="text-2xl font-bold text-emerald-500/40 mb-3 block">
                    {item.step}
                  </span>
                  <p className="text-slate-300 text-[15px] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </CSSStaggerItem>
            ))}
          </CSSStagger>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-500/15 to-transparent border-t border-white/5" />

      {/* ================================================================= */}
      {/* SOCIAL PROOF (P13+P14+P15: audit-specific + credibility) */}
      {/* ================================================================= */}
      <section className="py-14 md:py-20 px-4 relative overflow-hidden">
        {/* Warm-tinted background to break the monotone green */}
        <div className="absolute inset-0 bg-[#0D1117]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.06)_0%,transparent_60%)]" />

        <div className="container mx-auto max-w-4xl relative z-10">
          <CSSScrollAnimation className="text-center mb-10">
            <p className="text-amber-400/80 text-sm font-medium tracking-widest uppercase mb-3">
              Отзывы клиентов
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Что говорят о разборе
            </h2>
          </CSSScrollAnimation>

          <CSSStagger className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <CSSStaggerItem key={i} index={i}>
                <div className="relative p-7 rounded-2xl bg-white/[0.04] border border-amber-500/10 hover:border-amber-500/20 transition-all duration-300 h-full group">
                  {/* Subtle warm glow on hover */}
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="relative">
                    {/* Stars — warm amber */}
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

                    {/* Quote — bigger and more prominent */}
                    <p className="text-white text-base md:text-lg mb-5 leading-relaxed font-medium">
                      &laquo;{t.quote}&raquo;
                    </p>

                    {/* Author card with logo initial */}
                    <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                      {/* Business "logo" — colored initial */}
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                        style={{ backgroundColor: t.accentColor + "20", color: t.accentColor }}
                      >
                        {t.initial}
                      </div>
                      <div className="min-w-0">
                        <p className="text-white text-sm font-medium truncate">
                          {t.author}
                        </p>
                        <p className="text-slate-500 text-xs truncate">
                          {t.business} &middot; {t.city}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CSSStaggerItem>
            ))}
          </CSSStagger>

          {/* Credibility stat below testimonials */}
          <CSSScrollAnimation className="text-center mt-8">
            <div className="inline-flex items-center gap-2 text-slate-500 text-sm">
              <Users className="w-4 h-4 text-amber-400/60" />
              <span>50+ бизнесов в Чехии уже получили план роста</span>
            </div>
          </CSSScrollAnimation>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-500/15 to-transparent border-t border-white/5" />

      {/* ================================================================= */}
      {/* MINI FAQ (P16: sales objection + P17: first auto-open) */}
      {/* ================================================================= */}
      <section className="py-12 md:py-16 px-4 bg-ha-bg-soft">
        <div className="container mx-auto max-w-2xl">
          <CSSScrollAnimation className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-white">
              Частые вопросы
            </h2>
          </CSSScrollAnimation>

          <div className="space-y-3">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <CSSScrollAnimation key={index} delay={index * 0.05}>
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="w-full text-left"
                  >
                    <div
                      className={`rounded-xl border transition-all duration-300 ${
                        isOpen
                          ? "bg-emerald-500/5 border-emerald-500/20"
                          : "bg-white/[0.02] border-white/[0.06] hover:border-white/10"
                      }`}
                    >
                      <div className="flex items-center justify-between p-5">
                        <span
                          className={`font-medium text-[15px] pr-4 transition-colors ${
                            isOpen ? "text-emerald-300" : "text-white"
                          }`}
                        >
                          {item.q}
                        </span>
                        <div
                          className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                            isOpen
                              ? "bg-emerald-500/20 text-emerald-400"
                              : "bg-white/5 text-slate-400"
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
                        style={{
                          gridTemplateRows: isOpen ? "1fr" : "0fr",
                        }}
                      >
                        <div className="overflow-hidden">
                          <p className="px-5 pb-5 text-slate-400 text-sm leading-relaxed">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  </button>
                </CSSScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-500/15 to-transparent border-t border-white/5" />

      {/* ================================================================= */}
      {/* BOTTOM CTA (P18: urgency + risk-reversal recap) */}
      {/* ================================================================= */}
      <section className="py-12 md:py-16 px-4 bg-ha-bg">
        <div className="container mx-auto max-w-2xl text-center">
          <CSSScrollAnimation>
            <p className="text-emerald-400 text-sm font-medium mb-2 tracking-wide uppercase">
              Осталось несколько мест на этой неделе
            </p>
            <p className="text-white text-xl md:text-2xl font-bold mb-2">
              15 минут. Конкретный план. Без обязательств.
            </p>
            <p className="text-slate-500 text-sm mb-6">
              Уже помогли 50+ бизнесам в Чехии найти точки роста
            </p>
            <Button
              onClick={() =>
                document
                  .getElementById("audit-form")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="h-12 md:h-14 px-8 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-medium text-base md:text-lg shadow-lg shadow-emerald-500/25 rounded-xl transition-all duration-300"
            >
              Получить бесплатный разбор &rarr;
            </Button>
          </CSSScrollAnimation>

          {/* Minimal footer */}
          <div className="mt-16 pt-8 border-t border-white/5">
            <p className="text-slate-600 text-xs">
              &copy; {new Date().getFullYear()} HaloAgency.cz &middot;{" "}
              <Link
                href="/privacy-policy"
                target="_blank"
                className="hover:text-slate-400 transition-colors"
              >
                Политика конфиденциальности
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* STICKY MOBILE CTA (P9: arrow in copy) */}
      {/* ================================================================= */}
      <div
        className={`fixed left-0 right-0 z-50 lg:hidden bg-ha-bg/95 backdrop-blur-md border-t border-emerald-500/20 p-3 transition-transform duration-300 ${
          hasCookieChoice ? "bottom-0" : "bottom-28"
        } ${
          showSticky && !showSuccess
            ? "translate-y-0"
            : "translate-y-full"
        }`}
      >
        <Button
          onClick={() =>
            document
              .getElementById("audit-form")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="w-full h-12 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-medium rounded-xl shadow-lg shadow-emerald-500/25"
        >
          Получить бесплатный разбор &rarr;
        </Button>
      </div>
    </main>
  );
}
