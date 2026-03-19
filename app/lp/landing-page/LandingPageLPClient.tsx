"use client";

import {
  ArrowRight,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  LayoutTemplate,
  Megaphone,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
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

const heroProofs = [
  {
    icon: LayoutTemplate,
    text: "Покажем, каким может быть ваш лендинг до старта проекта",
  },
  {
    icon: Sparkles,
    text: "Соберём структуру под оффер, трафик и форму заявки",
  },
  {
    icon: ShieldCheck,
    text: "Подготовим страницу так, чтобы на неё можно было сразу вести Google Ads и Meta",
  },
];

const useCases = [
  {
    icon: Megaphone,
    title: "Под рекламу",
    subtitle: "Когда нужен быстрый запуск трафика",
    description:
      "Если вы хотите вести трафик из Google Ads или Meta, лендинг даёт более короткий и понятный путь до заявки, чем общий сайт.",
  },
  {
    icon: Target,
    title: "Под одну услугу",
    subtitle: "Когда нужен фокус на одном предложении",
    description:
      "Если у вас есть одна ключевая услуга или оффер, лендинг помогает не распылять внимание посетителя и вести его к одному действию.",
  },
  {
    icon: Sparkles,
    title: "Под быстрый тест",
    subtitle: "Когда нужно проверить оффер или гипотезу",
    description:
      "Если вы хотите быстро проверить новое предложение, направление или аудиторию, лендинг запускается быстрее, чем полноценный сайт.",
  },
];

const painPoints = [
  "Есть реклама, но некуда вести трафик",
  "Старый сайт перегружен и плохо конвертирует",
  "Нужно быстро запустить оффер или новую услугу",
  "На странице непонятно, почему клиент должен выбрать именно вас",
  "Форма заявки неудобная, спрятана или не мотивирует написать",
];

const includedItems = [
  "Заголовок и первый экран под ваш оффер",
  "Структура под одну цель: заявка, звонок или сообщение",
  "Блоки доверия, кейсы, FAQ и сильные CTA",
  "Форма заявки, WhatsApp или Telegram",
  "Мобильная адаптация и быстрая загрузка",
  "Базовая аналитика и подготовка под рекламу",
];

const steps = [
  {
    num: "01",
    title: "Оставляете заявку",
    desc: "Имя, контакт и ссылка на текущий сайт, Instagram или рекламу, если она уже есть.",
    time: "1 минута",
  },
  {
    num: "02",
    title: "Короткий созвон",
    desc: "За 15 минут понимаем оффер, аудиторию, трафик и какую заявку должен давать лендинг.",
    time: "15 минут",
  },
  {
    num: "03",
    title: "Показываем демо",
    desc: "Через 48 часов отправляем демо лендинга под ваш бизнес и рекламную задачу.",
    time: "48 часов",
  },
  {
    num: "04",
    title: "Запускаем лендинг",
    desc: "Если формат подходит, собираем финальную страницу и готовим её к запуску трафика.",
    time: "3-5 дней",
  },
];

const landingExamples = [
  {
    title: "Прачечная",
    feature: "landing page под Google Ads",
    image: "/images/case-studies/propradlo-screenshot.png",
    alt: "Пример лендинга для прачечной",
  },
  {
    title: "Груминг салон",
    feature: "лендинг с записью и примерами работ",
    image: "/images/case-studies/doggy-screenshot.png",
    alt: "Пример лендинга для груминг-салона",
  },
  {
    title: "Студия штор",
    feature: "лендинг услуг с заявкой",
    image: "/images/case-studies/drape-studio.png",
    alt: "Пример лендинга для студии штор",
  },
  {
    title: "Кафе",
    feature: "страница под бронирование и акции",
    image: "/images/case-studies/catcafe-screenshot.png",
    alt: "Пример landing page для кафе",
  },
];

const testimonials = [
  {
    quote:
      "Сначала запускали рекламу просто на Instagram, и часть людей отваливалась. После лендинга стало проще объяснить услугу, показать цены и собрать заявки в одном месте. Реклама начала работать заметно ровнее.",
    author: "Виктория Б.",
    details: "Бьюти салон, Брно",
    initial: "В",
  },
  {
    quote:
      "Нужна была не большая разработка, а быстрая страница под рекламу. Помогли собрать оффер, структуру и понятную форму заявки. Запустились быстро, и страница сразу выглядела как рабочий инструмент, а не временный костыль.",
    author: "Роман Г.",
    details: "Сервисный бизнес, Прага",
    initial: "Р",
  },
  {
    quote:
      "Понравилось, что сначала показали демо лендинга, а не просто рассказывали словами. Стало понятно, как будет выглядеть подача и куда вести трафик. После этого уже спокойно приняли решение запускать проект.",
    author: "Алексей Р.",
    details: "Локальный бизнес, Прага",
    initial: "А",
  },
];

const faqItems = [
  {
    q: "Сколько стоит разработка лендинга?",
    a: "Обычно лендинг стартует от 10 000 Kč. Точная стоимость зависит от объёма блоков, уровня проработки оффера, необходимости в интеграциях и сроков.",
  },
  {
    q: "За сколько можно запустить лендинг?",
    a: "Если задача без сложной логики, лендинг обычно можно собрать за 3-5 дней после согласования структуры и подачи.",
  },
  {
    q: "Подойдёт ли лендинг под Google Ads и Meta?",
    a: "Да. Именно под это он и делается: под один оффер, понятную структуру, сильный первый экран, форму заявки и мобильный трафик.",
  },
  {
    q: "Можно ли сначала посмотреть демо лендинга?",
    a: "Да. Сначала короткий созвон, потом показываем демо лендинга под ваш бизнес. После этого вы уже решаете, запускать проект или нет.",
  },
  {
    q: "Вы помогаете с оффером и структурой?",
    a: "Да. Мы не просто рисуем блоки, а помогаем собрать нормальную логику страницы: что сказать в первом экране, какие блоки нужны и как довести человека до заявки.",
  },
  {
    q: "Можно ли потом расширить лендинг в полноценный сайт?",
    a: "Да. Если со временем понадобится добавить больше услуг, кейсов или разделов, лендинг можно использовать как основу и дальше расширять проект.",
  },
];

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

export default function LandingPageLPClient() {
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
      .getElementById("landing-page-form")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollExamples = (direction: -1 | 1) => {
    if (!examplesRef.current) return;
    examplesRef.current.scrollBy({ left: direction * 340, behavior: "smooth" });
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
          "X-Webhook-Secret":
            process.env.NEXT_PUBLIC_HALOTRACK_WEBHOOK_SECRET || "",
        },
        body: JSON.stringify({
          type: "website",
          lead_id: leadId,
          source: "lp_landing_page",
          landing_page_type: "landing-page",
          name: values.name.trim(),
          websiteOrProfile: values.websiteOrProfile.trim() || undefined,
          phone: values.phone.trim(),
          service: "Landing Page",
          offer: "Landing Page Demo",
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
        const marketingWindow = window as MarketingWindow;

        if (typeof marketingWindow.fbq === "function") {
          marketingWindow.fbq(
            "track",
            "Lead",
            {
              content_name: "landing_page_lp",
              currency: "CZK",
              value: 0,
            },
            { eventID: leadId },
          );
        }

        marketingWindow.dataLayer = marketingWindow.dataLayer || [];
        marketingWindow.dataLayer.push({
          event: "generate_lead_landing_page",
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
              Для русскоязычного бизнеса в Чехии
            </p>

            <h1 className="mb-8 max-w-5xl text-5xl font-bold leading-[1.1] tracking-tight text-gray-900 lg:text-6xl">
              Разработка лендингов
              <br />
              под рекламу для
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">бизнеса в Чехии</span>
                <span className="absolute bottom-2 left-0 -z-0 h-4 w-full -skew-x-[15deg] bg-[#f43f5e]/20" />
              </span>
            </h1>

            <div className="mb-8 max-w-3xl border-l-4 border-[#f43f5e] py-2 pl-5 sm:pl-6">
              <p className="text-lg leading-relaxed text-gray-500">
                Делаем landing page под Google Ads и Meta: оффер, структура,
                форма заявки, мобильная версия и базовая аналитика. За 15 минут
                обсудим задачу, за 48 часов покажем демо лендинга.
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
                Получить демо лендинга
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <a
                href="https://wa.me/420705729502?text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%2C%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D0%BB%D0%B5%D0%BD%D0%B4%D0%B8%D0%BD%D0%B3%20%D0%BF%D0%BE%D0%B4%20%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D1%83%20%D0%B4%D0%BB%D1%8F%20%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%D0%B0%20%D0%B2%20%D0%A7%D0%B5%D1%85%D0%B8%D0%B8."
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gray-900 underline decoration-2 decoration-gray-200 underline-offset-4 transition-colors hover:text-[#f43f5e] hover:decoration-[#f43f5e]"
              >
                Написать в WhatsApp →
              </a>
            </div>

            <div className="mb-10 flex flex-wrap gap-3 text-sm text-gray-500">
              {[
                "Лендинг от 10 000 Kč",
                "Запуск от 3 дней",
                "Под Google Ads и Meta",
              ].map((item) => (
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
                Лендинги для локальных услуг, теста офферов и рекламного трафика
              </p>
            </div>
          </div>

          <div className="relative lg:col-span-5" id="landing-page-form">
            <div className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-2xl bg-[#f43f5e] opacity-90 sm:translate-x-4 sm:translate-y-4" />

            <div className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] sm:p-8">
              <div className="mb-6">
                <span className="mb-3 inline-block rounded-md bg-green-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-green-800">
                  Демо лендинга
                </span>
                <h3 className="text-3xl font-bold text-gray-900">
                  Получите демо лендинга
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  15 минут на созвон · демо через 48 часов · ориентир по бюджету
                </p>
              </div>

              {submitSuccess && (
                <div className="mt-5 rounded-lg border border-green-300 bg-green-50 p-4 text-sm font-medium text-green-800">
                  Заявка отправлена. Свяжемся с вами в рабочее время и обсудим
                  демо лендинга и ориентир по стоимости.
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
                    <label className={labelClass} htmlFor="landing-name">
                      Имя
                    </label>
                    <input
                      id="landing-name"
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
                    <label className={labelClass} htmlFor="landing-link">
                      Сайт, Instagram или текущая реклама (если есть)
                    </label>
                    <input
                      id="landing-link"
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
                    <label className={labelClass} htmlFor="landing-phone">
                      Телефон для связи
                    </label>
                    <input
                      id="landing-phone"
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
                        id="landing-consent"
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
                      htmlFor="landing-consent"
                      className="text-xs leading-snug text-gray-500"
                    >
                      Согласен(а) на обработку данных. Мы используем контакт
                      только для ответа по демо лендинга и расчёту стоимости.
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
                    {isSubmitting ? "Отправляем..." : "Получить демо лендинга"}
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
              Когда лендинг подходит лучше, чем большой сайт
            </h2>
            <p className="mt-3 text-gray-500">
              Если задача в быстрых заявках, одном оффере и понятном пути из
              рекламы в заявку, лендинг обычно выигрывает у перегруженного
              сайта.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {useCases.map((item) => {
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
                Когда лендинг нужен уже сейчас
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Если узнаёте себя в этих пунктах, landing page обычно даёт самый
                быстрый путь к нормальному запуску.
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
                Получить демо лендинга
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-24 sm:mb-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
              Что входит в разработку лендинга
            </h2>
            <p className="mt-3 text-gray-500">
              Это не просто одна страница с картинками, а структура под оффер,
              трафик и заявку.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {includedItems.map((item) => (
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
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900">
              Как это работает
            </h2>
            <p className="mt-2 text-gray-500">
              Быстрый сценарий: заявка, короткий созвон, демо и запуск лендинга,
              если формат подходит.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step) => (
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
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
                Примеры лендингов под рекламу
              </h2>
              <p className="mt-2 text-gray-500">
                Для локальных услуг, лидогенерации и быстрого запуска оффера.
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
            {landingExamples.map((example) => (
              <article
                key={example.title}
                className="group min-w-[292px] max-w-[360px] flex-none snap-start"
              >
                <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)]">
                  <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-[#f5f5f7] p-2">
                    <div className="mb-2 flex items-center gap-1.5 rounded-lg bg-white px-3 py-2 shadow-sm">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]" />
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
            Смотрите примеры, чтобы понять, как может выглядеть лендинг именно
            под вашу рекламную задачу.
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
                Отзывы после запуска лендинга и первых заявок
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">
              <span className="font-bold">5.0</span>
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="ml-1 text-xs text-gray-500">
                лендинги и сайты
              </span>
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
            Ниже ответы на вопросы, которые чаще всего возникают перед запуском
            лендинга.
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
          <div className="absolute inset-0 -z-10 translate-y-4 rounded-[2rem] bg-[#f43f5e] sm:mx-6 lg:mx-8" />

          <div className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-white p-10 text-center shadow-2xl sm:p-12 md:p-16">
            <div className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-500">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-500" />
              На следующей неделе доступно 3 лендинг-слота
            </div>

            <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Покажем демо лендинга
              <br />
              <span className="text-[#f43f5e]">под ваш оффер за 48 часов</span>
            </h2>

            <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-500">
              Короткий созвон, демо лендинга и понятный ориентир по стоимости.
              Без оплаты и без обязательств.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <button
                type="button"
                onClick={scrollToForm}
                className={`w-full text-lg sm:w-auto ${primaryBtn}`}
              >
                Получить демо лендинга
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <a
                href="https://wa.me/420705729502?text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%2C%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D0%BB%D0%B5%D0%BD%D0%B4%D0%B8%D0%BD%D0%B3%20%D0%BF%D0%BE%D0%B4%20%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D1%83%20%D0%B4%D0%BB%D1%8F%20%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%D0%B0%20%D0%B2%20%D0%A7%D0%B5%D1%85%D0%B8%D0%B8."
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
                "Если формат не подойдёт — ничего не платите",
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
