"use client";

import { ArrowRight, CheckCircle, Phone, Star } from "lucide-react";
import { Inter } from "next/font/google";
import Link from "next/link";
import { type FormEvent, useEffect, useRef, useState } from "react";
import { hasConsented } from "@/lib/consent";

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
  "Хотите запустить рекламу, но некуда вести трафик",
  "У конкурентов есть сайт — и они стабильно получают клиентов из Google",
  "Записи, заявки и брони идут вручную через звонки и мессенджеры",
  "Клиент заходит, ничего не понимает — и уходит к другим",
];

const heroBullets = [
  "Клиенту не нужно писать и ждать ответа",
  "Ваши услуги и преимущества понятны за 30 секунд",
  "Можно запускать рекламу и вести людей в понятную точку",
];

const heroStats = [
  { value: "40+", label: "сайтов для бизнеса в Чехии" },
  { value: "7–14 дн.", label: "обычно до запуска" },
  { value: "Сайт + реклама", label: "и аналитика под заявки" },
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

const caseStudies = [
  {
    business: "DoggyStyle",
    meta: "Груминг-салон, Прага",
    before:
      "До сайта записи шли только через Instagram, WhatsApp и сарафанное радио.",
    changes: [
      "Сделали сайт с онлайн-записью",
      "Подключили CRM и уведомления",
      "Оптимизировали Google-профиль",
    ],
    results: [
      { value: "85%", label: "записей онлайн" },
      { value: "−90%", label: "звонков для записи" },
      { value: "+18", label: "новых клиентов в месяц из Google" },
    ],
  },
  {
    business: "ProPradlo",
    meta: "Прачечная, Прага",
    before:
      "Заказы принимали по телефону и email, а старый сайт не давал заявок с мобильных.",
    changes: [
      "Собрали лендинг с понятным оффером и формой заказа",
      "Автоматизировали приём заявок через Telegram",
      "Подготовили страницы под локальный поиск и рекламу",
    ],
    results: [
      { value: "3.5x", label: "рост онлайн-заявок" },
      { value: "ТОП-3", label: "в Google по локальным запросам" },
      { value: "+250%", label: "рост заявок после запуска" },
    ],
  },
  {
    business: "GetCafe",
    meta: "Кафе, Прага",
    before:
      "Бронирование шло только по телефону, а рекламу запускать было некуда.",
    changes: [
      "Переработали сайт под мобильный трафик",
      "Добавили онлайн-бронирование и интеграцию с календарём",
      "Подготовили посадочные страницы под Google Ads",
    ],
    results: [
      { value: "+240%", label: "онлайн-бронирований" },
      { value: "8.5%", label: "конверсия сайта" },
      { value: "−90%", label: "ручной работы по брони" },
    ],
  },
];

const testimonials = [
  {
    quote:
      "Раньше клиенты спрашивали цены в Instagram, и часть просто пропадала. После запуска сайта сами читают, понимают и записываются онлайн.",
    author: "Анна В.",
    details: "DoggyStyle, Прага · сайт + онлайн-запись",
    initial: "А",
  },
  {
    quote:
      "Думал, что сайт будет долгим и дорогим проектом. Получили понятную структуру, запустились быстро и перевели большую часть заказов в онлайн.",
    author: "Дмитрий К.",
    details: "ProPradlo, Прага · лендинг + автоматизация",
    initial: "Д",
  },
  {
    quote:
      "Наконец-то стало куда вести трафик. После нормальной точки входа реклама начала работать заметно лучше, а бронирование перестало висеть на звонках.",
    author: "Катерина М.",
    details: "GetCafe, Прага · сайт + бронирование",
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
    a: "Зависит от задачи. Простой landing page обычно стартует от 25 000 Kč, сайт услуг с дополнительными блоками и интеграциями — от 40 000 Kč. Точную стоимость скажем после короткого созвона.",
  },
  {
    q: "Сколько времени занимает сделать сайт?",
    a: "Обычно 7–14 дней, если речь о landing page или сайте услуг без сложной кастомной логики. Более объёмные проекты занимают дольше, но сроки фиксируем заранее.",
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
    q: "Вы работаете только с Прагой?",
    a: "Нет. Работаем по всей Чехии и с бизнесами за её пределами. Созвоны проводим онлайн, поэтому география не ограничивает проект.",
  },
];

type FormValues = {
  name: string;
  websiteOrProfile: string;
  contact: string;
  consent: boolean;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

export default function LPV3Client() {
  const [values, setValues] = useState<FormValues>({
    name: "",
    websiteOrProfile: "",
    contact: "",
    consent: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [hasCookieChoice, setHasCookieChoice] = useState(true);
  const [showSticky, setShowSticky] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    document
      .getElementById("v3-form")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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

  useEffect(() => {
    if (!formRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowSticky(!entry.isIntersecting);
      },
      { threshold: 0.2 },
    );

    observer.observe(formRef.current);
    return () => observer.disconnect();
  }, []);

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!values.name.trim()) nextErrors.name = "Укажите ваше имя";
    if (!values.websiteOrProfile.trim()) {
      nextErrors.websiteOrProfile = "Добавьте Instagram или ссылку на сайт";
    }
    if (!values.contact.trim() || values.contact.trim().length < 5) {
      nextErrors.contact = "Укажите телефон, WhatsApp или email";
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
      const contactValue = values.contact.trim();
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactValue);

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
          websiteOrProfile: values.websiteOrProfile.trim(),
          email: isEmail ? contactValue : "",
          phone: isEmail ? "" : contactValue,
          preferredContact: contactValue,
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

      setSubmitSuccess(true);
      setValues({
        name: "",
        websiteOrProfile: "",
        contact: "",
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
      className={`${inter.variable} min-h-screen bg-[#fafafa] pb-24 font-[family-name:var(--font-inter)] text-gray-900 lg:pb-0`}
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
          <div className="flex flex-col justify-center lg:col-span-7">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-800">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-500"></span>
              На следующей неделе доступно 3 демо-слота
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Нет сайта — значит,
              <br className="hidden lg:block" />
              вы каждый день теряете
              <br className="hidden lg:block" />
              <span className="relative inline-block">
                <span className="relative z-10">клиентов.</span>
                <span className="absolute bottom-1 left-0 -z-0 h-3 w-full -skew-x-[15deg] bg-[#f43f5e]/20"></span>
              </span>
            </h1>

            <div className="mb-6 border-l-4 border-[#f43f5e] py-2 pl-5 sm:pl-6">
              <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
                Не потому что у вас плохой продукт.
                <br />А потому что людям негде быстро понять, кто вы, что вы
                предлагаете и почему вам можно доверять.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-900 sm:text-lg">
                Закажите короткий созвон — и через 48 часов мы покажем
                бесплатное демо сайта именно под ваш бизнес.
              </p>
            </div>

            <ul className="mb-8 space-y-3">
              {heroBullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-3 text-sm text-gray-700 sm:text-base"
                >
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#f43f5e]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <button
                type="button"
                onClick={scrollToForm}
                className={`w-full sm:w-auto ${primaryBtn}`}
              >
                Получить демо сайта
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <a
                href="https://wa.me/420705729502"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-600 transition-colors hover:text-[#f43f5e]"
              >
                Или написать в WhatsApp
              </a>
            </div>

            <div className="mb-10 flex flex-wrap gap-3 text-xs text-gray-500">
              {[
                "Без оплаты",
                "Без обязательств",
                "Сначала покажем результат",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-gray-200 bg-white px-3 py-1.5"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="grid gap-4 border-t border-gray-200 pt-6 sm:grid-cols-3 sm:gap-8">
              {heroStats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </span>
                  <span className="mt-0.5 text-xs text-gray-500">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div ref={formRef} className="relative lg:col-span-5" id="v3-form">
            <div className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-2xl bg-[#f43f5e] opacity-90 sm:translate-x-4 sm:translate-y-4"></div>

            <div className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] sm:p-8">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#f43f5e]">
                    Бесплатно
                  </p>
                  <h3 className="text-3xl font-bold text-gray-900">
                    Бесплатное демо сайта
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    15 минут на созвон. 48 часов на демо.
                  </p>
                </div>
                <span className="rounded-md bg-green-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-green-800">
                  Бесплатно
                </span>
              </div>

              <p className="mb-6 rounded-xl border border-[#f43f5e]/10 bg-[#fff5f7] px-4 py-3 text-sm leading-relaxed text-gray-600">
                Не продаём вслепую — сначала покажем, как это может выглядеть
                для вашего бизнеса.
              </p>

              {submitSuccess && (
                <div className="mt-5 rounded-lg border border-green-300 bg-green-50 p-4 text-sm font-medium text-green-800">
                  Заявка отправлена. Ответим в течение дня и согласуем короткий
                  созвон.
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
                      Ваше имя
                    </label>
                    <input
                      id="v3-name"
                      className={fieldClass}
                      placeholder="Например, Ирина"
                      value={values.name}
                      onChange={(e) =>
                        setValues((prev) => ({ ...prev, name: e.target.value }))
                      }
                    />
                    {errors.name && <p className={errorClass}>{errors.name}</p>}
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="v3-link">
                      Ссылка на Instagram / сайт
                    </label>
                    <input
                      id="v3-link"
                      className={fieldClass}
                      placeholder="@brand или https://example.com"
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
                    <label className={labelClass} htmlFor="v3-contact">
                      Телефон / WhatsApp или Email
                    </label>
                    <input
                      id="v3-contact"
                      className={fieldClass}
                      placeholder="+420... или you@company.com"
                      value={values.contact}
                      onChange={(e) =>
                        setValues((prev) => ({
                          ...prev,
                          contact: e.target.value,
                        }))
                      }
                    />
                    {errors.contact && (
                      <p className={errorClass}>{errors.contact}</p>
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
                      Согласен(а) на обработку данных. Используем контакт только
                      для ответа по вашей заявке, без рассылок.
                    </label>
                  </div>
                  {errors.consent && (
                    <p className={errorClass}>{errors.consent}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#f43f5e] py-4 font-bold text-white transition-all hover:bg-[#e11d48] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? "Отправляем..." : "Получить демо сайта"}
                    {!isSubmitting && (
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    )}
                  </button>

                  <p className="text-center text-xs text-gray-500">
                    Ответим в течение дня · Без обязательств · Покажем реальный
                    пример
                  </p>

                  <a
                    href="https://wa.me/420705729502"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-sm font-medium text-gray-600 transition-colors hover:text-[#f43f5e]"
                  >
                    Или сразу написать в WhatsApp
                  </a>
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
              <h2 className="text-xl font-bold text-gray-900">Узнайте себя</h2>
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
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
              Как сайт{" "}
              <span className="text-[#f43f5e]">меняет бизнес на практике</span>
            </h2>
            <p className="mt-3 max-w-2xl text-gray-500">
              Кейсы из сфер, где клиент принимает решение онлайн и должен быстро
              понять, кому доверять.
            </p>
          </div>

          <div className="space-y-8">
            {caseStudies.map((item, index) => (
              <article
                key={item.business}
                className={`overflow-hidden rounded-2xl border bg-white shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] ${
                  index === 0
                    ? "border-2 border-gray-900/10"
                    : "border-gray-200"
                }`}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="border-b border-gray-200 p-7 md:w-3/5 md:border-b-0 md:border-r md:p-8">
                    <div className="mb-5 flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white">
                        0{index + 1}
                      </span>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {item.business}, {item.meta}
                        </h3>
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-500">
                        До
                      </p>
                      <p className="text-sm leading-relaxed text-gray-900">
                        {item.before}
                      </p>
                    </div>

                    <div>
                      <p className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-500">
                        Что сделали
                      </p>
                      <ul className="space-y-2 text-sm text-gray-900">
                        {item.changes.map((change) => (
                          <li key={change} className="flex items-start gap-2">
                            <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-[#f43f5e]" />
                            <span>{change}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="grid gap-4 bg-[#fafafa] p-7 md:w-2/5 md:p-8">
                    {item.results.map((result) => (
                      <div
                        key={result.label}
                        className="rounded-xl border border-gray-200 bg-white px-4 py-5"
                      >
                        <div className="text-2xl font-bold text-gray-900">
                          {result.value}
                        </div>
                        <div className="mt-1 text-sm leading-relaxed text-gray-500">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
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
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-xs font-semibold text-amber-800">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-500"></span>
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
                href="https://wa.me/420705729502"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-600 transition-colors hover:text-[#f43f5e] sm:text-base"
              >
                или напишите в WhatsApp
              </a>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs text-gray-500">
              {[
                "Без оплаты",
                "Без обязательств",
                "Если не понравится — ничего не платите",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-gray-200 bg-[#fafafa] px-3 py-1.5"
                >
                  {item}
                </span>
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

      <div
        className={`fixed left-0 right-0 z-50 border-t border-[#f43f5e]/20 bg-white/95 p-3 backdrop-blur-md transition-transform duration-300 lg:hidden ${
          hasCookieChoice ? "bottom-0" : "bottom-28"
        } ${showSticky && !submitSuccess ? "translate-y-0" : "translate-y-full"}`}
      >
        <button
          type="button"
          onClick={scrollToForm}
          className="flex w-full items-center justify-center rounded-xl bg-[#f43f5e] py-3.5 font-bold text-white shadow-lg transition-all hover:bg-[#e11d48]"
        >
          Получить демо сайта
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </main>
  );
}
