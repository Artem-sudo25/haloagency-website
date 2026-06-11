"use client";

import {
  ArrowRight,
  Briefcase,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Globe,
  LayoutTemplate,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useLocale } from "next-intl";
import { type FormEvent, useRef, useState } from "react";
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

const heroProofs = [
  {
    icon: LayoutTemplate,
    text: "Покажем, каким может быть ваш сайт до старта проекта",
  },
  {
    icon: Sparkles,
    text: "Сделаем структуру под ваши услуги, оффер и заявки",
  },
  {
    icon: ShieldCheck,
    text: "Подготовим сайт так, чтобы на него можно было вести Google Ads и Meta",
  },
];

const siteFormats = [
  {
    icon: LayoutTemplate,
    title: "Лендинг",
    price: "от 10 000 Kč",
    subtitle: "Быстрый запуск оффера или рекламы",
    description:
      "Подходит, если нужно быстро запустить рекламу, протестировать оффер или собирать заявки на одну услугу.",
  },
  {
    icon: Briefcase,
    title: "Сайт услуг",
    price: "от 20 000 Kč",
    subtitle: "Услуги, кейсы, FAQ и доверие",
    description:
      "Подходит, если важно показать несколько услуг, кейсы, часто задаваемые вопросы и сделать понятный путь до заявки.",
  },
  {
    icon: Globe,
    title: "Корпоративный сайт",
    price: "от 30 000 Kč",
    subtitle: "Более широкая структура для компании",
    description:
      "Подходит бизнесу, у которого несколько направлений, нужен более полный сайт и сильнее работает доверие к компании.",
  },
];

const painPoints = [
  "Клиенты пишут только в Instagram или WhatsApp, и часть заявок теряется по дороге",
  "Старый сайт не вызывает доверия и давно не обновлялся",
  "Хотите запускать рекламу, но текущий сайт плохо объясняет, почему выбрать именно вас",
  "Нужно показать услуги, цены, кейсы и FAQ в одном понятном месте",
  "У конкурентов уже есть нормальный сайт, и они стабильно получают заявки из Google",
];

const includedItems = [
  "Структура сайта под заявки и продажи",
  "Подача под ваш бизнес, услуги и оффер",
  "Адаптация под телефон и планшет",
  "Форма заявки, WhatsApp или Telegram",
  "Базовая аналитика и точки контакта",
  "Подготовка под Google Ads и Meta Ads",
];

const steps = [
  {
    num: "01",
    title: "Оставляете заявку",
    desc: "Имя, контакт и ссылка на текущий сайт, Instagram или пример, который вам нравится.",
    time: "1 минута",
  },
  {
    num: "02",
    title: "Короткий созвон",
    desc: "За 15 минут понимаем задачу, тип сайта, структуру и ориентир по бюджету.",
    time: "15 минут",
  },
  {
    num: "03",
    title: "Показываем демо",
    desc: "Через 48 часов отправляем демо-концепт сайта под ваш бизнес и подачу.",
    time: "48 часов",
  },
  {
    num: "04",
    title: "Запускаем проект",
    desc: "Если подход нравится, собираем финальную версию сайта и готовим его к запуску.",
    time: "3-7 дней",
  },
];

const websiteExamples = [
  {
    title: "Кафе",
    feature: "бронирование столиков",
    image: "/images/case-studies/catcafe-screenshot.png",
    alt: "Пример сайта для кафе",
  },
  {
    title: "Прачечная",
    feature: "landing page под рекламу",
    image: "/images/case-studies/propradlo-screenshot.png",
    alt: "Пример сайта для прачечной",
  },
  {
    title: "Интернет-магазин",
    feature: "каталог, доставка и физический магазин",
    image: "/images/case-studies/nejbalonky-screenshot.png",
    alt: "Пример сайта для интернет-магазина",
  },
  {
    title: "Груминг салон",
    feature: "онлайн запись",
    image: "/images/case-studies/doggy-screenshot.png",
    alt: "Пример сайта для груминг-салона",
  },
  {
    title: "Студия штор",
    feature: "премиальный сайт услуг",
    image: "/images/case-studies/drape-studio.png",
    alt: "Пример сайта для студии услуг",
  },
];

const testimonials = [
  {
    quote:
      "Раньше все клиенты писали нам в Instagram и постоянно спрашивали цены. На переписку уходило много времени. После запуска сайта стало проще показать услуги и сделать удобную форму записи. Теперь реклама ведёт на сайт, а заявки приходят напрямую.",
    author: "Анна В.",
    details: "Салон красоты, Прага",
    initial: "А",
  },
  {
    quote:
      "Думал, что разработка сайта — это долгий и сложный проект. В итоге всё оказалось намного проще. Созвонились, через пару дней показали понятное демо под наш сервис, а дальше уже спокойно приняли решение и запустили сайт.",
    author: "Дмитрий К.",
    details: "Прачечная B2B, Прага",
    initial: "Д",
  },
  {
    quote:
      "Нужен был сайт, который можно сразу использовать и для презентации бизнеса, и под рекламу. Помогли со структурой, подачей и формой заявки. В итоге получилось быстрее, чем ожидали, и сайт действительно стал рабочим инструментом.",
    author: "Катерина М.",
    details: "Кафе, Прага",
    initial: "К",
  },
];

const faqItems = [
  {
    q: "Сколько стоит создание сайта?",
    a: "Лендинг обычно стартует от 10 000 Kč, сайт услуг — от 20 000 Kč, корпоративный сайт — от 30 000 Kč. Точный ориентир зависит от объёма, структуры и нужных интеграций.",
  },
  {
    q: "Что входит в стоимость?",
    a: "Обычно это структура, визуальная подача, тексты по ключевым блокам, форма заявки, адаптация под мобильные устройства и базовая подготовка под рекламу и аналитику.",
  },
  {
    q: "Сколько времени занимает разработка сайта?",
    a: "Лендинг или сайт услуг без сложной логики обычно можно запустить за 3-7 дней. Более объёмные проекты занимают дольше, но сроки обсуждаем заранее после короткого созвона.",
  },
  {
    q: "Можно ли сначала посмотреть демо?",
    a: "Да. В этом и смысл страницы: сначала короткий созвон, затем показываем демо сайта под ваш бизнес. После этого вы уже решаете, идти дальше или нет.",
  },
  {
    q: "Подойдёт ли сайт под Google Ads и Meta?",
    a: "Да. Мы как раз строим такие сайты с учётом оффера, формы заявки, мобильной версии и общей структуры, чтобы на них можно было вести рекламный трафик.",
  },
  {
    q: "Вы делаете сайты для бизнеса только в Праге?",
    a: "Нет. Основной фокус — Прага и Чехия, но проект можно вести полностью онлайн, поэтому работаем и с бизнесом за пределами Праги.",
  },
  {
    q: "Можно ли потом самому редактировать сайт?",
    a: "Да, если для задачи подходит такой формат. На старте обсуждаем, нужен ли вам сайт, который вы сможете обновлять самостоятельно, или проще передать это нам.",
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

export default function WebDevelopmentLPClient() {
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
  const examplesRef = useRef<HTMLDivElement>(null);
  const honeypot = useHoneypot();

  const scrollToForm = () => {
    document
      .getElementById("web-development-form")
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
        },
        body: JSON.stringify({
          type: "website",
          page_locale: locale,
          reply_language: locale === "cs" ? "czech" : undefined,
          lead_id: leadId,
          source: "lp_web_development",
          landing_page_type: "web-development",
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
              content_name: "website_web_development",
              currency: "CZK",
              value: 0,
            },
            { eventID: leadId },
          );
        }

        marketingWindow.dataLayer = marketingWindow.dataLayer || [];
        marketingWindow.dataLayer.push({
          event: "generate_lead_web_development",
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
              Создание сайтов
              <br />
              под ключ для
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">бизнеса в Чехии</span>
                <span className="absolute bottom-2 left-0 -z-0 h-4 w-full -skew-x-[15deg] bg-[#f43f5e]/20" />
              </span>
            </h1>

            <div className="mb-8 max-w-3xl border-l-4 border-[#f43f5e] py-2 pl-5 sm:pl-6">
              <p className="text-lg leading-relaxed text-gray-500">
                Лендинги, сайты услуг и корпоративные сайты для бизнеса в Праге
                и по Чехии. За 15 минут обсудим задачу, за 48 часов покажем
                бесплатное демо и дадим ориентир по стоимости.
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
                Получить демо и расчёт стоимости
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <a
                href="https://wa.me/420705729502?text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%2C%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D1%81%D0%B0%D0%B9%D1%82%20%D0%BF%D0%BE%D0%B4%20%D0%BA%D0%BB%D1%8E%D1%87%20%D0%B4%D0%BB%D1%8F%20%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%D0%B0%20%D0%B2%20%D0%A7%D0%B5%D1%85%D0%B8%D0%B8."
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
                "Сайт услуг от 20 000 Kč",
                "Запуск от 3-7 дней",
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
                Сайты для локального бизнеса, услуг и e-commerce в Чехии
              </p>
            </div>
          </div>

          <div className="relative lg:col-span-5" id="web-development-form">
            <div className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-2xl bg-[#f43f5e] opacity-90 sm:translate-x-4 sm:translate-y-4" />

            <div className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] sm:p-8">
              <div className="mb-6">
                <span className="mb-3 inline-block rounded-md bg-green-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-green-800">
                  Демо + расчёт
                </span>
                <h3 className="text-3xl font-bold text-gray-900">
                  Получите демо сайта
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  15 минут на созвон · демо через 48 часов · ориентир по бюджету
                </p>
              </div>

              {submitSuccess && (
                <div className="mt-5 rounded-lg border border-green-300 bg-green-50 p-4 text-sm font-medium text-green-800">
                  Заявка отправлена. Свяжемся с вами в рабочее время и обсудим
                  демо сайта и ориентир по стоимости.
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
                    <label className={labelClass} htmlFor="web-dev-name">
                      Имя
                    </label>
                    <input
                      id="web-dev-name"
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
                    <label className={labelClass} htmlFor="web-dev-link">
                      Сайт, Instagram или пример (если есть)
                    </label>
                    <input
                      id="web-dev-link"
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
                    <label className={labelClass} htmlFor="web-dev-phone">
                      Телефон для связи
                    </label>
                    <input
                      id="web-dev-phone"
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
                        id="web-dev-consent"
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
                      htmlFor="web-dev-consent"
                      className="text-xs leading-snug text-gray-500"
                    >
                      Согласен(а) на обработку данных. Мы используем контакт
                      только для ответа по демо сайта и расчёту стоимости.
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
                    {isSubmitting
                      ? "Отправляем..."
                      : "Получить демо и расчёт стоимости"}
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
              Какой сайт подойдёт вашему бизнесу
            </h2>
            <p className="mt-3 text-gray-500">
              Не всем нужен большой проект. Часто достаточно понятной структуры
              под конкретную задачу и нормальный путь до заявки.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {siteFormats.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]"
                >
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#f43f5e]/15 bg-[#fff5f7]">
                      <Icon className="h-5 w-5 text-[#f43f5e]" />
                    </div>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-900">
                      {item.price}
                    </span>
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

          <p className="mt-6 text-sm text-gray-400">
            Если нужен интернет-магазин, стоимость считаем отдельно в
            зависимости от каталога, оплат, доставки и логики проекта.
          </p>
        </div>
      </section>

      <section className="mb-20 sm:mb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]">
            <div className="border-b border-gray-100 px-6 pb-5 pt-7 sm:px-8 sm:pt-8">
              <h2 className="text-xl font-bold text-gray-900">
                Когда сайт уже реально нужен
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Если узнаёте себя хотя бы в двух пунктах, сайт уже перестаёт
                быть “опцией” и становится рабочим инструментом.
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
                Получить демо и расчёт стоимости
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
              Что входит в создание сайта
            </h2>
            <p className="mt-3 text-gray-500">
              Не просто красивый макет, а рабочая основа под заявки, рекламу и
              понятную подачу вашего бизнеса.
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
              Минимум лишнего: заявка, короткий созвон, демо и запуск проекта,
              если формат вам подходит.
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
                Примеры сайтов, которые мы делаем
              </h2>
              <p className="mt-2 text-gray-500">
                Для локальных услуг, сервисного бизнеса, рекламы и e-commerce в
                Чехии.
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
            {websiteExamples.map((example) => (
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
            Листайте примеры или используйте стрелки, чтобы посмотреть разные
            форматы и стили сайтов.
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
                Отзывы после запуска сайта и первых заявок
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
            Ниже ответы на вопросы, которые чаще всего задают перед запуском
            сайта.
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
              На следующей неделе доступно 3 демо-слота
            </div>

            <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Покажем, каким может
              <br />
              <span className="text-[#f43f5e]">
                быть ваш сайт до старта проекта
              </span>
            </h2>

            <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-500">
              Короткий созвон, демо за 48 часов и ориентир по стоимости. Без
              оплаты и без обязательств.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <button
                type="button"
                onClick={scrollToForm}
                className={`w-full text-lg sm:w-auto ${primaryBtn}`}
              >
                Получить демо и расчёт стоимости
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <a
                href="https://wa.me/420705729502?text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%2C%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D1%81%D0%B0%D0%B9%D1%82%20%D0%BF%D0%BE%D0%B4%20%D0%BA%D0%BB%D1%8E%D1%87%20%D0%B4%D0%BB%D1%8F%20%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%D0%B0%20%D0%B2%20%D0%A7%D0%B5%D1%85%D0%B8%D0%B8."
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
