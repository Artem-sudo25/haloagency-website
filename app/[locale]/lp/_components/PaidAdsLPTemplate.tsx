"use client";

import {
  ArrowRight,
  CheckCircle,
  type LucideIcon,
  Phone,
  Star,
} from "lucide-react";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useLocale } from "next-intl";
import { type FormEvent, useState } from "react";
import { HONEYPOT_FIELD, useHoneypot } from "@/components/ui/honeypot";
import { Link } from "@/i18n/routing";

const inter = Inter({
  subsets: ["latin", "cyrillic-ext"],
  display: "swap",
  variable: "--font-inter",
});

const shell = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";
const primaryBtn =
  "inline-flex items-center justify-center rounded-xl bg-[#f43f5e] px-8 py-4 text-sm font-semibold text-white transition-all shadow-lg hover:-translate-y-0.5 hover:bg-[#e11d48] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f43f5e] focus-visible:ring-offset-2";

type IconText = {
  icon: LucideIcon;
  text: string;
};

type InfoCard = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
};

type StepItem = {
  num: string;
  title: string;
  desc: string;
  time: string;
};

type CaseStudy = {
  title: string;
  subtitle: string;
  summary: string;
  metrics: string[];
};

type Testimonial = {
  quote: string;
  author: string;
  details: string;
  initial: string;
};

type FAQItem = {
  q: string;
  a: string;
};

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

export type PaidAdsLPConfig = {
  hero: {
    eyebrow: string;
    titleTop: string;
    titleMiddle: string;
    titleHighlight: string;
    subheadline: string;
    proofs: IconText[];
    chips: string[];
    trustText: string;
  };
  form: {
    id: string;
    badge: string;
    title: string;
    subtitle: string;
    successMessage: string;
    presenceLabel: string;
    presencePlaceholder: string;
    consentText: string;
  };
  submit: {
    cta: string;
    whatsappHref: string;
    whatsappLabel: string;
    leadType: string;
    source: string;
    landingPageType: string;
    service: string;
    offer: string;
    trafficChannel: string;
    fbContentName: string;
    dataLayerEvent: string;
  };
  intentSection: {
    title: string;
    description: string;
    cards: InfoCard[];
  };
  painSection: {
    title: string;
    description: string;
    points: string[];
  };
  offerSection: {
    title: string;
    description: string;
    cards: InfoCard[];
  };
  includedSection: {
    title: string;
    description: string;
    items: string[];
  };
  stepsSection: {
    title: string;
    description: string;
    items: StepItem[];
  };
  caseSection: {
    title: string;
    description: string;
    cards: CaseStudy[];
  };
  testimonialSection: {
    title: string;
    description: string;
    ratingLabel: string;
    items: Testimonial[];
  };
  faqSection: {
    title: string;
    description: string;
    items: FAQItem[];
  };
  finalSection: {
    availability: string;
    title: string;
    highlight: string;
    description: string;
    bullets: string[];
  };
};

export default function PaidAdsLPTemplate({
  config,
}: {
  config: PaidAdsLPConfig;
}) {
  const locale = useLocale() as "ru" | "cs";
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
  const honeypot = useHoneypot();

  const scrollToForm = () => {
    document
      .getElementById(config.form.id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!values.name.trim()) nextErrors.name = "Укажите ваше имя";
    if (!values.phone.trim()) nextErrors.phone = "Укажите телефон для связи";
    if (!values.consent) {
      nextErrors.consent = "Нужно согласие на обработку данных";
    }

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
        },
        body: JSON.stringify({
          type: config.submit.leadType,
          page_locale: locale,
          reply_language: locale === "cs" ? "czech" : undefined,
          lead_id: leadId,
          source: config.submit.source,
          landing_page_type: config.submit.landingPageType,
          name: values.name.trim(),
          websiteOrProfile: values.websiteOrProfile.trim() || undefined,
          phone: values.phone.trim(),
          service: config.submit.service,
          offer: config.submit.offer,
          traffic_channel: config.submit.trafficChannel,
          value: 0,
          currency: "CZK",
          consent_given: true,
          session_id: sessionId,
          timestamp: new Date().toISOString(),
          [HONEYPOT_FIELD]: honeypot.value(),
        }),
      });

      if (!res.ok) {
        const data = await res
          .json()
          .catch(() => ({ error: "Ошибка отправки" }));
        throw new Error(data.error || "Ошибка отправки");
      }

      if (typeof window !== "undefined") {
        const marketingWindow = window as MarketingWindow;

        if (typeof marketingWindow.fbq === "function") {
          marketingWindow.fbq(
            "track",
            "Lead",
            {
              content_name: config.submit.fbContentName,
              currency: "CZK",
              value: 0,
            },
            { eventID: leadId },
          );
        }

        marketingWindow.dataLayer = marketingWindow.dataLayer || [];
        marketingWindow.dataLayer.push({
          event: config.submit.dataLayerEvent,
          eventID: leadId,
          user_data: {
            phone_number: values.phone.trim(),
          },
        });
      }

      // Store phone in HaloTrack session for fallback attribution matching
      if ((window as any).HaloTrack?.identify) {
        (window as any).HaloTrack.identify({ phone: values.phone.trim() });
      }

      setSubmitSuccess(true);
      setValues({
        name: "",
        websiteOrProfile: "",
        phone: "",
        consent: false,
      });
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

  const fieldClass =
    "w-full rounded-lg border border-gray-200 bg-[#fafafa] px-4 py-3 text-sm text-gray-900 outline-none placeholder:text-gray-400 transition-shadow focus:border-[#f43f5e] focus:ring-2 focus:ring-[#f43f5e]";
  const labelClass = "mb-1.5 block text-sm font-medium text-gray-900";
  const errorClass = "mt-1 text-xs text-red-600";

  return (
    <main
      className={`${inter.variable} min-h-screen bg-[#fafafa] font-[family-name:var(--font-inter)] text-gray-900`}
      style={{
        backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    >
      <header
        className="fixed top-0 z-50 w-full shadow-sm"
        style={{
          background: "rgba(255,255,255,0.7)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255,255,255,0.3)",
        }}
      >
        <div className={`${shell} flex h-20 items-center justify-between`}>
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-gray-900"
          >
            Halo<span className="text-[#f43f5e]">Agency</span>
          </Link>
          <a
            href="tel:+420705729502"
            className="flex items-center gap-2 font-medium text-gray-500 transition-colors hover:text-gray-900"
          >
            <Phone className="h-4 w-4" />
            +420 705 729 502
          </a>
        </div>
      </header>

      <section className="relative pb-14 pt-28 sm:pb-20 sm:pt-32">
        <div
          className={`${shell} grid items-start gap-12 lg:grid-cols-12 lg:gap-16`}
        >
          <div className="flex flex-col justify-center lg:col-span-7 lg:pt-12">
            <p className="mb-4 text-sm font-medium uppercase tracking-wide text-[#f43f5e]">
              {config.hero.eyebrow}
            </p>

            <h1 className="mb-8 max-w-5xl text-5xl font-bold leading-[1.1] tracking-tight text-gray-900 lg:text-6xl">
              {config.hero.titleTop}
              <br />
              {config.hero.titleMiddle}
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">
                  {config.hero.titleHighlight}
                </span>
                <span className="absolute bottom-2 left-0 -z-0 h-4 w-full -skew-x-[15deg] bg-[#f43f5e]/20" />
              </span>
            </h1>

            <div className="mb-8 max-w-3xl border-l-4 border-[#f43f5e] py-2 pl-5 sm:pl-6">
              <p className="text-lg leading-relaxed text-gray-500">
                {config.hero.subheadline}
              </p>
            </div>

            <div className="mb-10 flex flex-col gap-4">
              {config.hero.proofs.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.text}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full border border-[#f43f5e]/15 bg-white shadow-sm">
                      <Icon className="h-4 w-4 text-[#f43f5e]" />
                    </div>
                    <span className="max-w-xl text-base leading-relaxed">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mb-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <button
                type="button"
                onClick={scrollToForm}
                className={`w-full sm:w-auto ${primaryBtn}`}
              >
                {config.submit.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <a
                href={config.submit.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gray-900 underline decoration-2 decoration-gray-200 underline-offset-4 transition-colors hover:text-[#f43f5e] hover:decoration-[#f43f5e]"
              >
                {config.submit.whatsappLabel}
              </a>
            </div>

            <div className="mb-10 flex flex-wrap gap-3 text-sm text-gray-500">
              {config.hero.chips.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center -space-x-2">
                <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-[#fafafa]">
                  <Image
                    src="/victoria-drapes.png"
                    alt="Клиент HaloAgency"
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="z-10 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-[#fafafa] bg-white">
                  <Image
                    src="/logo_nejbalonky.webp"
                    alt="NejBalonky"
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                </div>
                <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-[#fafafa]">
                  <Image
                    src="/alex-grooming.png"
                    alt="Клиент HaloAgency"
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <p className="text-sm font-medium text-gray-500">
                {config.hero.trustText}
              </p>
            </div>
          </div>

          <div className="relative lg:col-span-5" id={config.form.id}>
            <div className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-2xl bg-[#f43f5e] opacity-90 sm:translate-x-4 sm:translate-y-4" />

            <div className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] sm:p-8">
              <div className="mb-6">
                <span className="mb-3 inline-block rounded-md bg-green-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-green-800">
                  {config.form.badge}
                </span>
                <h3 className="text-3xl font-bold text-gray-900">
                  {config.form.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {config.form.subtitle}
                </p>
              </div>

              {submitSuccess && (
                <div className="mt-5 rounded-lg border border-green-300 bg-green-50 p-4 text-sm font-medium text-green-800">
                  {config.form.successMessage}
                </div>
              )}
              {submitError && (
                <div className="mt-5 rounded-lg border border-red-300 bg-red-50 p-4 text-sm font-medium text-red-800">
                  {submitError}
                </div>
              )}

              {!submitSuccess && (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {honeypot.field}
                  <div>
                    <label
                      className={labelClass}
                      htmlFor={`${config.form.id}-name`}
                    >
                      Имя
                    </label>
                    <input
                      id={`${config.form.id}-name`}
                      className={fieldClass}
                      placeholder="Ваше имя"
                      value={values.name}
                      onChange={(e) =>
                        setValues((prev) => ({ ...prev, name: e.target.value }))
                      }
                    />
                    {errors.name && <p className={errorClass}>{errors.name}</p>}
                  </div>

                  <div>
                    <label
                      className={labelClass}
                      htmlFor={`${config.form.id}-link`}
                    >
                      {config.form.presenceLabel}
                    </label>
                    <input
                      id={`${config.form.id}-link`}
                      className={fieldClass}
                      placeholder={config.form.presencePlaceholder}
                      value={values.websiteOrProfile}
                      onChange={(e) =>
                        setValues((prev) => ({
                          ...prev,
                          websiteOrProfile: e.target.value,
                        }))
                      }
                    />
                    {errors.websiteOrProfile && (
                      <p className={errorClass}>{errors.websiteOrProfile}</p>
                    )}
                  </div>

                  <div>
                    <label
                      className={labelClass}
                      htmlFor={`${config.form.id}-phone`}
                    >
                      Телефон для связи
                    </label>
                    <input
                      id={`${config.form.id}-phone`}
                      type="tel"
                      className={fieldClass}
                      placeholder="777 777 777"
                      value={values.phone}
                      onChange={(e) =>
                        setValues((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                    />
                    {errors.phone && (
                      <p className={errorClass}>{errors.phone}</p>
                    )}
                  </div>

                  <div className="flex items-start gap-3 pt-1">
                    <div className="flex h-5 items-center">
                      <input
                        id={`${config.form.id}-consent`}
                        type="checkbox"
                        checked={values.consent}
                        onChange={(e) =>
                          setValues((prev) => ({
                            ...prev,
                            consent: e.target.checked,
                          }))
                        }
                        className="h-4 w-4 rounded border-gray-300 bg-[#fafafa] text-[#f43f5e] focus:ring-[#f43f5e]"
                      />
                    </div>
                    <label
                      htmlFor={`${config.form.id}-consent`}
                      className="text-xs leading-snug text-gray-500"
                    >
                      {config.form.consentText}
                    </label>
                  </div>
                  {errors.consent && (
                    <p className={errorClass}>{errors.consent}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#111827] py-4 font-bold text-white transition-all hover:bg-[#0b1220] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? "Отправляем..." : config.submit.cta}
                    {!isSubmitting && (
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    )}
                  </button>

                  <p className="mt-4 text-center text-xs text-gray-400">
                    Обычно перезваниваем в течение 20 минут в рабочее время
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20 sm:mb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
              {config.intentSection.title}
            </h2>
            <p className="mt-3 text-gray-500">
              {config.intentSection.description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {config.intentSection.cards.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#f43f5e]/15 bg-[#fff5f7]">
                    <Icon className="h-5 w-5 text-[#f43f5e]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-[#f43f5e]">
                    {item.subtitle}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-gray-500">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mb-20 sm:mb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]">
            <div className="border-b border-gray-100 px-6 pb-5 pt-7 sm:px-8 sm:pt-8">
              <h2 className="text-xl font-bold text-gray-900">
                {config.painSection.title}
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                {config.painSection.description}
              </p>
            </div>

            <ul className="divide-y divide-gray-100">
              {config.painSection.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-4 px-6 py-4 sm:px-8"
                >
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#f43f5e]" />
                  <span className="text-sm leading-relaxed text-gray-700">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <div className="border-t border-gray-100 bg-gray-50 px-6 pb-7 pt-6 sm:px-8 sm:pb-8">
              <button
                type="button"
                onClick={scrollToForm}
                className={`w-full text-sm sm:w-auto ${primaryBtn}`}
              >
                {config.submit.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-24 sm:mb-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
              {config.offerSection.title}
            </h2>
            <p className="mt-3 text-gray-500">
              {config.offerSection.description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {config.offerSection.cards.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#f43f5e]/15 bg-[#fff5f7]">
                    <Icon className="h-5 w-5 text-[#f43f5e]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-[#f43f5e]">
                    {item.subtitle}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-gray-500">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mb-24 sm:mb-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
              {config.includedSection.title}
            </h2>
            <p className="mt-3 text-gray-500">
              {config.includedSection.description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {config.includedSection.items.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]"
              >
                <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#fff5f7] text-sm font-bold text-[#f43f5e]">
                  ✓
                </span>
                <span className="text-sm leading-relaxed text-gray-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-24 sm:mb-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
              {config.caseSection.title}
            </h2>
            <p className="mt-3 text-gray-500">
              {config.caseSection.description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {config.caseSection.cards.map((item) => (
              <article
                key={item.title}
                className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]"
              >
                <p className="text-sm font-medium uppercase tracking-wide text-[#f43f5e]">
                  {item.subtitle}
                </p>
                <h3 className="mt-2 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-gray-500">
                  {item.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-900"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-24 sm:mb-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
              {config.stepsSection.title}
            </h2>
            <p className="mt-2 text-gray-500">
              {config.stepsSection.description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {config.stepsSection.items.map((step) => (
              <div
                key={step.num}
                className="rounded-2xl border border-gray-200 bg-white p-7 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white">
                    {step.num}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#f43f5e]">
                    {step.time}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-24 sm:mb-32">
        <div className={shell}>
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                {config.testimonialSection.title}
              </h2>
              <p className="mt-2 text-gray-500">
                {config.testimonialSection.description}
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">
              <span className="font-bold">5.0</span>
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="ml-1 text-xs text-gray-500">
                {config.testimonialSection.ratingLabel}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {config.testimonialSection.items.map((item) => (
              <div
                key={item.author}
                className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]"
              >
                <div className="mb-4 flex gap-1 text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-3.5 w-3.5 fill-yellow-400" />
                  ))}
                </div>
                <p className="mb-8 flex-grow text-gray-900">
                  &laquo;{item.quote}&raquo;
                </p>
                <div className="mt-auto flex items-center gap-4 border-t border-gray-200 pt-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white">
                    {item.initial}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      {item.author}
                    </p>
                    <p className="text-xs text-gray-500">{item.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-24 sm:mb-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-bold text-gray-900">
            {config.faqSection.title}
          </h2>
          <p className="mb-8 text-sm text-gray-500">
            {config.faqSection.description}
          </p>
          <div className="space-y-4">
            {config.faqSection.items.map((item) => (
              <details
                key={item.q}
                className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-colors hover:border-[#f43f5e]/30"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-medium text-gray-900 marker:content-none">
                  {item.q}
                  <ArrowRight className="h-4 w-4 flex-shrink-0 text-[#f43f5e] opacity-70 transition-all group-open:rotate-90 group-hover:opacity-100" />
                </summary>
                <div className="border-t border-gray-200 px-5 py-4 text-sm leading-relaxed text-gray-500">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative pb-20">
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 -z-10 translate-y-4 rounded-[2rem] bg-[#f43f5e] sm:mx-6 lg:mx-8" />

          <div className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-white p-10 text-center shadow-2xl sm:p-12 md:p-16">
            <div className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-500">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-500" />
              {config.finalSection.availability}
            </div>

            <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              {config.finalSection.title}
              <br />
              <span className="text-[#f43f5e]">
                {config.finalSection.highlight}
              </span>
            </h2>

            <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-500">
              {config.finalSection.description}
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <button
                type="button"
                onClick={scrollToForm}
                className={`w-full text-lg sm:w-auto ${primaryBtn}`}
              >
                {config.submit.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <a
                href={config.submit.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-600 transition-colors hover:text-[#f43f5e] sm:text-base"
              >
                {config.submit.whatsappLabel}
              </a>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-gray-400">
              {config.finalSection.bullets.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
