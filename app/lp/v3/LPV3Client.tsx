"use client";

import {
  ArrowRight,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  LayoutTemplate,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { type FormEvent, useRef, useState } from "react";

const inter = Inter({
  subsets: ["latin", "cyrillic-ext"],
  display: "swap",
  variable: "--font-inter",
});

const shell = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";
const primaryBtn =
  "inline-flex items-center justify-center rounded-xl bg-[#f43f5e] px-8 py-4 text-sm font-semibold text-white transition-all shadow-lg hover:-translate-y-0.5 hover:bg-[#e11d48] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f43f5e] focus-visible:ring-offset-2";

const painPoints = [
  "Клиенты спрашивают цены в Instagram — и не все возвращаются после ответа",
  "Сайт у вас есть, но он старый и не обновлялся годами",
  "Хотите запустить рекламу, но некуда вести трафик",
  "У конкурентов есть сайт — и они стабильно получают клиентов из Google",
  "Записи, заявки и брони идут вручную через звонки и мессенджеры",
];

const steps = [
  {
    num: "01",
    title: "Оставьте заявку",
    desc: "Имя, контакт и ссылка на Instagram или сайт. Займёт меньше минуты.",
    time: "1 минута",
  },
  {
    num: "02",
    title: "Короткий созвон",
    desc: "За 15 минут поймём, что вы продаёте, кто ваш клиент и какой сайт вам нужен.",
    time: "15 минут",
  },
  {
    num: "03",
    title: "Получите демо сайта",
    desc: "Через 48 часов отправим рабочее демо, чтобы вы увидели, как ваш бизнес может выглядеть онлайн.",
    time: "48 часов",
  },
];

const websiteExamples = [
  {
    title: "Груминг салон",
    feature: "онлайн запись",
    image: "/images/case-studies/doggy-screenshot.png",
    alt: "Пример сайта для груминг-салона",
  },
  {
    title: "Кафе",
    feature: "бронирование столиков",
    image: "/images/case-studies/catcafe-screenshot.png",
    alt: "Пример сайта для кафе",
  },
  {
    title: "Прачечная",
    feature: "landing page для рекламы",
    image: "/images/case-studies/propradlo-screenshot.png",
    alt: "Пример landing page для прачечной",
  },
  {
    title: "Интернет магазин",
    feature: "Доставка и физический магазин",
    image: "/images/case-studies/nejbalonky-screenshot.png",
    alt: "Пример сайта для event-бизнеса",
  },
  {
    title: "Услуги дизайнера",
    feature: "премиальный сайт услуг",
    image: "/images/case-studies/drape-studio.png",
    alt: "Пример сайта для студии штор",
  },
];

const heroProofs = [
  {
    icon: LayoutTemplate,
    text: "Покажем, как сайт будет выглядеть для вашего бизнеса",
  },
  {
    icon: Sparkles,
    text: "Сделаем демо под ваши услуги, оффер и подачу",
  },
  {
    icon: ShieldCheck,
    text: "Вы увидите результат до того, как решите запускать сайт",
  },
];

const testimonials = [
  {
    quote:
      "Раньше все клиенты писали нам в Instagram, спрашивали цены, и часть просто пропадала. Ребята показали демо сайта под наш салон — стало понятно, как можно нормально объяснить услуги и записываться онлайн. После запуска сайта люди сами читают и оставляют заявку.",
    author: "Анна В.",
    details: "Салон красоты, Прага",
    initial: "А",
  },
  {
    quote:
      "Думал, что разработка сайта — это долгий и сложный проект. В итоге всё оказалось намного проще. Мы созвонились, через пару дней показали демо сайта под наш сервис. Стало понятно, как всё будет выглядеть, и мы спокойно решили запускать.",
    author: "Дмитрий К.",
    details: "Прачечная B2B, Прага",
    initial: "Д",
  },
  {
    quote:
      "Понравился подход: сначала показали демо сайта под наш бизнес, без давления и продаж. Мы посмотрели, обсудили правки и только потом решили делать полноценный сайт. В итоге получили понятную страницу, куда теперь ведём рекламу.",
    author: "Катерина М.",
    details: "Кафе, Прага",
    initial: "К",
  },
];

const faqItems = [
  {
    q: "Что если демо сайт мне не понравится?",
    a: "Ничего страшного. Вы ничего не платите. Мы просто покажем, как может выглядеть сайт для вашего бизнеса, а дальше вы сами решаете, идти ли дальше.",
  },
  {
    q: "Сколько стоит сайт?",
    a: "Зависит от задачи. Простой landing page обычно стартует от 10 000 Kč, сайт услуг с дополнительными блоками и интеграциями — от 20 000 Kč. Точную стоимость скажем после короткого созвона.",
  },
  {
    q: "Сколько времени занимает сделать сайт?",
    a: "Обычно 3-7 дней, если речь о landing page или сайте услуг без сложной кастомной логики. Более объёмные проекты занимают дольше, но сроки фиксируем заранее.",
  },
  {
    q: "Что нужно подготовить с моей стороны?",
    a: "Достаточно коротко рассказать о бизнесе и прислать Instagram, старый сайт или примеры, которые вам нравятся. Структуру, тексты и визуальную подачу поможем собрать вместе.",
  },
  {
    q: "Смогу ли я потом сам редактировать сайт?",
    a: "Да, если проект делается на подходящей для этого системе. Мы сразу подбираем решение под то, хотите ли вы менять контент сами или передавать это нам.",
  },
  {
    q: "Вы работаете только в Чехии?",
    a: "Нет. Работаем не только по Чехии, но и с бизнесами за её пределами. Созвоны проводим онлайн, поэтому география не ограничивает проект.",
  },
];

type FormValues = {
  name: string;
  websiteOrProfile: string;
  phone: string;
  consent: boolean;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

export default function LPV3Client() {
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
  const examplesRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    document
      .getElementById("v3-form")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollExamples = (direction: -1 | 1) => {
    if (!examplesRef.current) return;
    examplesRef.current.scrollBy({ left: direction * 340, behavior: "smooth" });
  };

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!values.name.trim()) nextErrors.name = "Укажите ваше имя";
    if (!values.phone.trim()) {
      nextErrors.phone = "Укажите телефон для связи";
    }
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

      const res = await fetch("/api/webhook/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Webhook-Secret":
            process.env.NEXT_PUBLIC_HALOTRACK_WEBHOOK_SECRET || "",
        },
        body: JSON.stringify({
          type: "website-demo-v3",
          lead_id: leadId,
          source: "lp_v3",
          landing_page_type: "v3",
          name: values.name.trim(),
          websiteOrProfile: values.websiteOrProfile.trim() || undefined,
          phone: values.phone.trim(),
          service: "Free Website Demo",
          value: 0,
          currency: "CZK",
          consent_given: true,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!res.ok) {
        const data = await res
          .json()
          .catch(() => ({ error: "Ошибка отправки" }));
        throw new Error(data.error || "Ошибка отправки");
      }

      // Facebook Pixel — Lead event
      if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
        (window as any).fbq("track", "Lead", {
          content_name: "website_demo_v3",
          currency: "CZK",
          value: 0,
        }, { eventID: leadId });
      }

      // Google Ads / GTM — dataLayer push
      if (typeof window !== "undefined") {
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({
          event: "generate_lead_v3",
          eventID: leadId,
          user_data: {
            phone_number: values.phone.trim(),
          },
        });
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
              Для бизнеса в Чехии
            </p>

            <h1 className="mb-8 max-w-5xl text-5xl font-bold leading-[1.1] tracking-tight text-gray-900 lg:text-6xl">
              Нет сайта?
              <br />
              Получите бесплатное
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">демо сайта за 48 часов.</span>
                <span className="absolute bottom-2 left-0 -z-0 h-4 w-full -skew-x-[15deg] bg-[#f43f5e]/20" />
              </span>
            </h1>

            <div className="mb-8 max-w-3xl border-l-4 border-[#f43f5e] py-2 pl-5 sm:pl-6">
              <p className="text-lg leading-relaxed text-gray-500">
                Созвонимся на 15 минут — и мы сделаем демо сайта под ваш бизнес.
                Если понравится — запускаем. Если нет — вы ничего не платите.
              </p>
            </div>

            <div className="mb-10 flex flex-col gap-4">
              {heroProofs.map((item) => {
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
                Получить демо сайта
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <a
                href="https://wa.me/420705729502?text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%2C%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE%D0%B5%20%D0%B4%D0%B5%D0%BC%D0%BE%20%D0%B2%D0%B5%D0%B1%D1%81%D0%B0%D0%B9%D1%82%D0%B0."
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gray-900 underline decoration-2 decoration-gray-200 underline-offset-4 transition-colors hover:text-[#f43f5e] hover:decoration-[#f43f5e]"
              >
                Написать в WhatsApp →
              </a>
            </div>
            <p className="mb-10 text-sm text-gray-400">
              Сначала демо — потом решение.
            </p>

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
                Сайты для локального бизнеса, сервисов и рекламы в Чехии
              </p>
            </div>
          </div>

          <div className="relative lg:col-span-5" id="v3-form">
            <div className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-2xl bg-[#f43f5e] opacity-90 sm:translate-x-4 sm:translate-y-4"></div>

            <div className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] sm:p-8">
              <div className="mb-6">
                <span className="mb-3 inline-block rounded-md bg-green-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-green-800">
                  Бесплатное демо
                </span>
                <h3 className="text-3xl font-bold text-gray-900">
                  Получите демо сайта
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  15 минут на созвон · демо сайта через 48 часов
                </p>
              </div>

              {submitSuccess && (
                <div className="mt-5 rounded-lg border border-green-300 bg-green-50 p-4 text-sm font-medium text-green-800">
                  Заявка отправлена. Перезвоним в течение 20 минут в рабочее
                  время.
                </div>
              )}
              {submitError && (
                <div className="mt-5 rounded-lg border border-red-300 bg-red-50 p-4 text-sm font-medium text-red-800">
                  {submitError}
                </div>
              )}

              {!submitSuccess && (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className={labelClass} htmlFor="v3-name">
                      Имя
                    </label>
                    <input
                      id="v3-name"
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
                    <label className={labelClass} htmlFor="v3-link">
                      Сайт или Instagram (если есть)
                    </label>
                    <input
                      id="v3-link"
                      className={fieldClass}
                      placeholder="https://... или @ваш_профиль"
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
                    <label className={labelClass} htmlFor="v3-phone">
                      Телефон для связи
                    </label>
                    <input
                      id="v3-phone"
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
                        id="v3-consent"
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
                      htmlFor="v3-consent"
                      className="text-xs leading-snug text-gray-500"
                    >
                      Согласен(а) на обработку данных. Мы используем контакт
                      только для ответа по демо сайта.
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
                    {isSubmitting ? "Отправляем..." : "Получить демо сайта"}
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
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]">
            <div className="border-b border-gray-100 px-6 pb-5 pt-7 sm:px-8 sm:pt-8">
              <h2 className="text-xl font-bold text-gray-900">Узнаёте себя?</h2>
              <p className="mt-1 text-sm text-gray-500">
                Если узнали себя хотя бы в двух пунктах, демо покажет, как это
                можно исправить.
              </p>
            </div>

            <ul className="divide-y divide-gray-100">
              {painPoints.map((point) => (
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
                Получить демо сайта
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-24 sm:mb-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900">
              Как это работает
            </h2>
            <p className="mt-2 text-gray-500">
              Вы оставляете минимум данных, созваниваемся на 15 минут и затем
              показываем рабочее демо.
            </p>
          </div>

          <div className="relative grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="pointer-events-none absolute left-[calc(16.66%-1rem)] right-[calc(16.66%-1rem)] top-10 hidden h-px bg-gray-200 md:block"></div>

            {steps.map((step, index) => (
              <div
                key={step.num}
                className="relative z-10 rounded-2xl border border-gray-200 bg-white p-7 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                      index === 0
                        ? "bg-gray-900 text-white"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
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
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
                Примеры сайтов
              </h2>
              <p className="mt-2 text-gray-500">
                Вот как обычно выглядят сайты, которые мы делаем для бизнеса.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => scrollExamples(-1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-colors hover:border-gray-300 hover:bg-gray-50"
                aria-label="Прокрутить примеры назад"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollExamples(1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-colors hover:border-gray-300 hover:bg-gray-50"
                aria-label="Прокрутить примеры вперёд"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div
            ref={examplesRef}
            className="relative flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {websiteExamples.map((example, index) => (
              <article
                key={example.title}
                className="group min-w-[292px] max-w-[360px] flex-none snap-start"
              >
                <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)]">
                  <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-[#f5f5f7] p-2">
                    <div className="mb-2 flex items-center gap-1.5 rounded-lg bg-white px-3 py-2 shadow-sm">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]"></span>
                      <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]"></span>
                      <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]"></span>
                    </div>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-gray-200 bg-white">
                      <Image
                        src={example.image}
                        alt={example.alt}
                        fill
                        sizes="(max-width: 768px) 292px, 360px"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>

                  <div className="mt-4 flex items-start justify-between gap-4 px-1">
                    <div>
                      <p className="text-lg font-semibold text-gray-900">
                        {example.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-gray-500">
                        {example.feature}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-5 text-sm text-gray-400">
            Листайте примеры или используйте стрелки, чтобы посмотреть разные
            стили сайтов.
          </p>
        </div>
      </section>

      <section className="mb-24 sm:mb-32">
        <div className={shell}>
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Что <span className="text-[#f43f5e]">говорят</span> клиенты
              </h2>
              <p className="mt-2 text-gray-500">
                Отзывы клиентов после запуска сайта
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">
              <span className="font-bold">5.0</span>
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="ml-1 text-xs text-gray-500">40+ проектов</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
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
            Частые вопросы
          </h2>
          <p className="mb-8 text-sm text-gray-500">
            Сначала показываем демо, потом вы решаете, нужно ли продолжать.
          </p>
          <div className="space-y-4">
            {faqItems.map((item) => (
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
          <div className="absolute inset-0 -z-10 translate-y-4 rounded-[2rem] bg-[#f43f5e] sm:mx-6 lg:mx-8"></div>

          <div className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-white p-10 text-center shadow-2xl sm:p-12 md:p-16">
            <div className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-500">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-500"></span>
              На следующей неделе доступно 3 демо-слота
            </div>

            <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Покажем демо сайта
              <br />
              <span className="text-[#f43f5e]">под ваш бизнес за 48 часов</span>
            </h2>

            <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-500">
              Короткий созвон — и через 48 часов вы получите рабочее демо сайта
              без оплаты и без обязательств.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <button
                type="button"
                onClick={scrollToForm}
                className={`w-full text-lg sm:w-auto ${primaryBtn}`}
              >
                Получить демо сайта
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <a
                href="https://wa.me/420705729502?text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%2C%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE%D0%B5%20%D0%B4%D0%B5%D0%BC%D0%BE%20%D0%B2%D0%B5%D0%B1%D1%81%D0%B0%D0%B9%D1%82%D0%B0."
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-600 transition-colors hover:text-[#f43f5e] sm:text-base"
              >
                или напишите в WhatsApp
              </a>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-gray-400">
              {[
                "Без оплаты",
                "Без обязательств",
                "Если не понравится — ничего не платите",
              ].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-20 border-t border-gray-200 bg-white py-8">
        <div
          className={`${shell} flex flex-col items-center justify-between gap-4 text-xs text-gray-400 sm:flex-row`}
        >
          <Link href="/" className="text-sm font-bold text-gray-900">
            Halo<span className="text-[#f43f5e]">Agency</span>
          </Link>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-gray-600"
            >
              Политика конфиденциальности
            </Link>
            <Link
              href="/terms-of-service"
              className="transition-colors hover:text-gray-600"
            >
              Условия использования
            </Link>
          </div>
          <span>© 2026 HaloAgency.cz</span>
        </div>
      </footer>
    </main>
  );
}
