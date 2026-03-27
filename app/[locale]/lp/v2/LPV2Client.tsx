"use client";

import { ArrowRight, Phone, Star } from "lucide-react";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useLocale } from "next-intl";
import { useState } from "react";
import { Link } from "@/i18n/routing";

const inter = Inter({
  subsets: ["latin", "cyrillic-ext"],
  display: "swap",
  variable: "--font-inter",
});

/* ─── Shared styles ─── */
const shell = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";
const primaryBtn =
  "inline-flex items-center justify-center rounded-xl bg-[#f43f5e] px-8 py-4 text-sm font-semibold text-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:bg-[#e11d48] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f43f5e] focus-visible:ring-offset-2";

/* ─── Data ─── */
const caseStudies = [
  {
    business: "Интернет-магазин товаров для праздника",
    context: "шары с гелием и декор • доставка по Праге",
    situation:
      "Реклама уже была запущена, но кампании работали нестабильно — стоимость продаж сильно колебалась, а часть бюджета уходила в менее эффективные аудитории.",
    changes: [
      "Пересобрали структуру рекламных кампаний",
      "Настроили корректное отслеживание покупок",
      "Разделили холодный трафик и ретаргетинг",
    ],
    resultText:
      "Реклама стала стабильнее масштабироваться без резкого роста стоимости продаж.",
    results: [
      {
        label: "Возвратность рекламы",
        before: "3.3",
        value: "5.8",
        delta: "+76%",
      },
      {
        label: "Стоимость продажи",
        before: "463",
        value: "229 CZK",
        delta: "−51%",
      },
      { label: "Конверсии", value: "+35%" },
    ],
  },
  {
    business: "Груминг салон, Прага",
    context: "салон для собак и кошек • запись по времени",
    situation:
      "Салон привлекал клиентов в основном через Instagram и рекомендации. Реклама запускалась, но вела людей просто в профиль — часть пользователей смотрела страницу, но не доходила до записи. Не было понятного пути записи и невозможно было оценить эффективность рекламы.",
    changes: [
      "Сделали простую страницу с услугами, ценами и примерами работ",
      "Настроили рекламу в Meta с переходом на запись",
      "Настроили отслеживание заявок и сообщений",
    ],
    resultText:
      "Количество записей из рекламы выросло, а стоимость привлечения клиента снизилась.",
    results: [
      { label: "Рост количества записей", value: "+55%" },
      {
        label: "Стоимость продажи",
        before: "630",
        value: "280 CZK",
        delta: "−56%",
      },
      { label: "Доля новых клиентов из рекламы", value: "+40%" },
    ],
  },
  {
    business: "Студия дизайна штор, Прага",
    context: "частные интерьеры • индивидуальный пошив",
    situation:
      "Основной поток клиентов приходил через рекомендации и Instagram. Реклама запускалась нерегулярно, а заявки приходили хаотично — было сложно планировать замеры и загрузку.",
    changes: [
      "Создали понятную страницу с услугами, примерами работ и формой заявки",
      "Настроили рекламу в Google и Meta для привлечения новых клиентов",
      "Настроили отслеживание заявок",
    ],
    resultText:
      "Заявки начали приходить регулярно через сайт, а не только через личные сообщения. Стало проще планировать замеры и загрузку.",
    results: [
      { label: "Основные источники клиентов", value: "Google + Meta" },
      { label: "Рост количества заявок", value: "+65%" },
      { label: "Средний бюджет проекта", value: "~35-60 тыс Kč" },
    ],
  },
];

const faqItems = [
  {
    q: "Подойдёт ли разбор, если у меня нет сайта?",
    a: "Да, подойдёт, и на самом деле это даже очень частая ситуация. Многие локальные бизнесы в Чехии работают без сайта вообще.",
  },
  {
    q: "Можно взять рекомендации и внедрять самостоятельно?",
    a: "Конечно. PDF-план остаётся у вас и подходит для внедрения своей командой или текущим подрядчиком.",
  },
  {
    q: "Нужны ли доступы к рекламным кабинетам?",
    a: "Для точного разбора желательно read-only к Google Ads, Meta Ads, GA4 и GTM. Если нет — начнём с внешнего анализа лендинга и структуры кампаний.",
  },
  {
    q: "Когда виден первый результат после изменений?",
    a: "Обычно первые сдвиги по CPL/CPA видны на 2–4 неделе. Стабильный тренд — через 4–8 недель.",
  },
];

const testimonials = [
  {
    quote:
      "Заказал аудит контекстной рекламы. Выяснилось, что кампании велись пассивно и почти не тестировались. После внедрения рекомендаций расходы на рекламу снизились, а окупаемость выросла более чем в 2 раза.",
    author: "Алексей Р.",
    business: "Интернет-магазин, Прага",
    initial: "АР",
  },
  {
    quote:
      "Работали только через Instagram и запускали рекламу на профиль. Сначала помогли настроить рекламу в форму заявки, позже сделали простую посадочную страницую. Поток заявок заметно вырос — запись теперь заполнена примерно на месяц вперёд.",
    author: "Виктория Б.",
    business: "Бьюти Салон, Брно",
    initial: "ВБ",
  },
  {
    quote:
      "Думали, что проблема в рекламе, но аудит показал, что не продаёт сам веб-сайт — предложение было неясныи, а форма заявки спрятана. После изменения структуры страницы и усиления призыва к действию количество заявок заметно выросло.",
    author: "Роман Г.",
    business: "Прачечная, Прага",
    initial: "РГ",
  },
];

/* ─── Form types ─── */
type FormValues = {
  name: string;
  websiteOrProfile: string;
  phone: string;
  consent: boolean;
};
type FormErrors = Partial<Record<keyof FormValues, string>>;

/* ─── Component ─── */
export default function LPV2Client() {
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

  const scrollToForm = () => {
    document
      .getElementById("v2-form")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const validate = () => {
    const e: FormErrors = {};
    if (!values.name.trim()) e.name = "Укажите ваше имя";
    if (!values.phone.trim()) e.phone = "Укажите телефон для связи";
    if (!values.consent) e.consent = "Нужно согласие на обработку данных";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
          type: "growth-audit-v2",
          page_locale: locale,
          reply_language: locale === "cs" ? "czech" : undefined,
          lead_id: leadId,
          source: "lp_v2",
          landing_page_type: "v2",
          name: values.name.trim(),
          phone: values.phone.trim(),
          websiteOrProfile: values.websiteOrProfile.trim() || undefined,
          service: "Free Growth Audit",
          value: 0,
          currency: "CZK",
          consent_given: true,
          session_id: sessionId,
          timestamp: new Date().toISOString(),
        }),
      });
      if (!res.ok) {
        const d = await res.json().catch(() => ({ error: "Ошибка отправки" }));
        throw new Error(d.error || "Ошибка отправки");
      }

      // Facebook Pixel — Lead event
      if (
        typeof window !== "undefined" &&
        typeof (window as any).fbq === "function"
      ) {
        (window as any).fbq(
          "track",
          "Lead",
          {
            content_name: "growth_audit_v2",
            currency: "CZK",
            value: 0,
          },
          { eventID: leadId },
        );
      }

      // Google Ads / GTM — dataLayer push
      if (typeof window !== "undefined") {
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({
          event: "generate_lead_v2",
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
      setValues({ name: "", websiteOrProfile: "", phone: "", consent: false });
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
    "w-full rounded-lg border border-gray-200 bg-[#fafafa] px-4 py-3 text-sm text-gray-900 outline-none placeholder:text-gray-400 transition-shadow focus:ring-2 focus:ring-[#f43f5e] focus:border-[#f43f5e]";
  const labelClass = "block text-sm font-medium text-gray-900 mb-1.5";
  const errorClass = "mt-1 text-xs text-red-600";

  return (
    <main
      className={`${inter.variable} font-[family-name:var(--font-inter)] min-h-screen bg-[#fafafa] text-gray-900`}
      style={{
        backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    >
      {/* ── Nav ── */}
      <header
        className="fixed top-0 w-full z-50 shadow-sm"
        style={{
          background: "rgba(255,255,255,0.7)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255,255,255,0.3)",
        }}
      >
        <div className={`${shell} flex h-20 items-center justify-between`}>
          <span className="text-2xl font-bold tracking-tight text-gray-900">
            Halo<span className="text-[#f43f5e]">Agency</span>
          </span>
          <a
            href="tel:+420705729502"
            className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors font-medium"
          >
            <Phone className="h-4 w-4" />
            +420 705 729 502
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="pt-32 pb-20 relative">
        <div
          className={`${shell} relative grid gap-16 lg:grid-cols-12 items-start`}
        >
          {/* Left copy */}
          <div className="lg:col-span-7 flex flex-col justify-center pt-8">
            <p className="text-sm font-medium text-[#f43f5e] tracking-wide uppercase mb-4">
              Для предпринимателей в Чехии
            </p>

            <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] mb-8 tracking-tight text-gray-900">
              Реклама работает,
              <br />а заявок мало?
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">
                  Покажем, где теряются
                  <br />
                  клиенты. Бесплатно.
                </span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-[#f43f5e]/20 -z-0 -skew-x-[15deg]"></span>
              </span>
            </h1>

            <div className="border-l-4 border-[#f43f5e] pl-6 py-2 mb-8">
              <p className="text-lg text-gray-500 leading-relaxed">
                За 20–30 минут покажем 3–5 конкретных ошибок, которые мешают
                получать заявки.
              </p>
            </div>

            <div className="flex flex-col gap-3 mb-10">
              <div className="flex items-center gap-3 text-gray-700">
                <span className="text-lg">🔍</span>
                <span className="text-base">Проверим рекламу</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <span className="text-lg">🌐</span>
                <span className="text-base">Посмотрим сайт или Instagram</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <span className="text-lg">📊</span>
                <span className="text-base">Найдём ошибки в аналитике</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 mb-3">
              <button
                type="button"
                onClick={scrollToForm}
                className={`w-full sm:w-auto ${primaryBtn}`}
              >
                Записаться на бесплатный разбор
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <a
                href="https://wa.me/420705729502?text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%2C%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D1%8B%D0%B9%20%D1%80%D0%B0%D0%B7%D0%B1%D0%BE%D1%80%20%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD-%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D1%8B."
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 font-medium hover:text-[#f43f5e] transition-colors underline decoration-2 decoration-gray-200 underline-offset-4 hover:decoration-[#f43f5e]"
              >
                Написать в WhatsApp →
              </a>
            </div>
            <p className="text-sm text-gray-400 mb-10">
              Без обязательств работать с нами
            </p>

            <div className="flex items-center gap-4">
              <div className="flex items-center -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-[#fafafa] overflow-hidden">
                  <Image
                    src="/victoria-drapes.png"
                    alt="Виктория"
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="w-10 h-10 rounded-full bg-white border-2 border-[#fafafa] overflow-hidden flex items-center justify-center z-10">
                  <Image
                    src="/logo_nejbalonky.webp"
                    alt="NejBalonky"
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-[#fafafa] overflow-hidden">
                  <Image
                    src="/alex-grooming.png"
                    alt="Алексей"
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <p className="text-sm text-gray-500 font-medium">
                <span className="font-bold text-gray-900">90+</span> аудитов
                рекламы и сайтов для бизнеса в Чехии
              </p>
            </div>
          </div>

          {/* Right — Form card */}
          <div className="lg:col-span-5 relative" id="v2-form">
            {/* Primary color offset shadow */}
            <div className="absolute inset-0 bg-[#f43f5e] translate-x-4 translate-y-4 rounded-2xl -z-10 opacity-90"></div>

            <div className="bg-white rounded-2xl p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-200 relative">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-green-50 text-green-800 text-xs font-bold rounded-md tracking-wider uppercase mb-3">
                  Бесплатный аудит
                </span>
                <h3 className="text-2xl font-bold mb-1">
                  Оставьте контакты для разбора
                </h3>
                <p className="text-sm text-gray-500">
                  Проверим рекламу, сайт и аналитику
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
                    <label className={labelClass} htmlFor="v2-name">
                      Имя
                    </label>
                    <input
                      id="v2-name"
                      className={fieldClass}
                      placeholder="Ваше имя"
                      value={values.name}
                      onChange={(e) =>
                        setValues((p) => ({ ...p, name: e.target.value }))
                      }
                    />
                    {errors.name && <p className={errorClass}>{errors.name}</p>}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="v2-site">
                      Сайт или Instagram (если есть)
                    </label>
                    <input
                      id="v2-site"
                      className={fieldClass}
                      placeholder="https://... или @ваш_профиль"
                      value={values.websiteOrProfile}
                      onChange={(e) =>
                        setValues((p) => ({
                          ...p,
                          websiteOrProfile: e.target.value,
                        }))
                      }
                    />
                    {errors.websiteOrProfile && (
                      <p className={errorClass}>{errors.websiteOrProfile}</p>
                    )}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="v2-email">
                      Телефон для связи
                    </label>
                    <input
                      id="v2-phone"
                      type="tel"
                      className={fieldClass}
                      placeholder="777 777 777"
                      value={values.phone}
                      onChange={(e) =>
                        setValues((p) => ({ ...p, phone: e.target.value }))
                      }
                    />
                    {errors.phone && (
                      <p className={errorClass}>{errors.phone}</p>
                    )}
                  </div>
                  <div className="flex items-start gap-3 pt-2">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        checked={values.consent}
                        onChange={(e) =>
                          setValues((p) => ({
                            ...p,
                            consent: e.target.checked,
                          }))
                        }
                        className="w-4 h-4 rounded border-gray-300 text-[#f43f5e] focus:ring-[#f43f5e] bg-[#fafafa]"
                      />
                    </div>
                    <label className="text-xs text-gray-500 leading-snug">
                      Согласен(а) на обработку данных. Мы используем контакт
                      только для ответа по разбору.
                    </label>
                  </div>
                  {errors.consent && (
                    <p className={errorClass}>{errors.consent}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full py-4 bg-gray-900 text-white font-bold rounded-xl transition-all hover:opacity-90 flex items-center justify-center gap-2 mt-2 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {isSubmitting
                        ? "Отправляем..."
                        : "Записаться на бесплатный разбор"}
                      {!isSubmitting && (
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      )}
                    </span>
                  </button>
                  <p className="text-center text-xs text-gray-400 mt-4">
                    Обычно отвечаем в течение 20 минут в рабочее время
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Social Proof Strip ── */}
      <section className="mb-32">
        <div className={shell}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <h2 className="text-3xl font-bold">
              Что <span className="text-[#f43f5e]">говорят</span> клиенты
            </h2>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm">
              <span className="font-bold">5.0</span>
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] flex flex-col h-full"
              >
                {/* Stars */}
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-900 mb-8 flex-grow">
                  &laquo;{t.quote}&raquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-200">
                  <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-sm">
                    {t.initial}
                  </div>
                  <div>
                    <p className="font-bold text-sm">{t.author}</p>
                    <p className="text-xs text-gray-500">{t.business}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Common Issues ── */}
      <section className="mb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Что обычно находим на{" "}
            <span className="text-[#f43f5e]">первом разборе</span>
          </h2>
          <p className="text-gray-500 mb-8">Самые частые проблемы:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Реклама оптимизируется не по заявкам",
              "Форма заявки спрятана или неудобна",
              "Бюджет уходит в нерелевантный трафик",
              "Сайт не объясняет, почему выбрать именно вас",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-white rounded-xl border border-gray-200 p-5 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]"
              >
                <ArrowRight className="h-4 w-4 text-[#f43f5e] shrink-0 mt-0.5" />
                <span className="text-sm text-gray-900">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case Studies ── */}
      <section className="mb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Примеры <span className="text-blue-500">разборов</span>
            </h2>
            <div className="border-l-2 border-[#f43f5e] pl-4">
              <p className="text-gray-500">
                Примеры проектов, где важен результат — заявки, продажи и
                окупаемость рекламы.
              </p>
            </div>
          </div>

          <div className="space-y-10 mb-6">
            {caseStudies.map((cs, idx) => (
              <article
                key={cs.business}
                className={`bg-white rounded-2xl border ${idx === 0 ? "border-[#f43f5e]/30 shadow-[0_8px_30px_-4px_rgba(244,63,94,0.12)]" : "border-gray-200 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]"} overflow-hidden`}
              >
                {/* Card header */}
                <div
                  className={`px-8 py-5 border-b ${idx === 0 ? "bg-gradient-to-r from-[#f43f5e]/[0.04] to-transparent border-[#f43f5e]/10" : "bg-gray-50/80 border-gray-100"}`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm ${idx === 0 ? "bg-[#f43f5e] text-white" : "bg-gray-900 text-white"}`}
                    >
                      0{idx + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold leading-tight">
                        {cs.business}
                      </h3>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {cs.context}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row">
                  {/* Left: Content */}
                  <div className="p-8 md:w-2/3 border-b md:border-b-0 md:border-r border-gray-100">
                    <div className="mb-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                        Ситуация
                      </h4>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {cs.situation}
                      </p>
                    </div>

                    <div className="h-px bg-gray-100 mb-6"></div>

                    <div className="mb-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                        Что сделали
                      </h4>
                      <ul className="space-y-2.5 text-sm text-gray-900">
                        {cs.changes.map((c) => (
                          <li key={c} className="flex items-start gap-2.5">
                            <span className="w-5 h-5 rounded-full bg-[#f43f5e]/10 flex items-center justify-center shrink-0 mt-0.5">
                              <ArrowRight className="h-3 w-3 text-[#f43f5e]" />
                            </span>
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="h-px bg-gray-100 mb-6"></div>

                    <div className="border-l-3 border-green-500 pl-4 py-1 bg-green-50/50 rounded-r-lg">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-green-700 mb-1.5">
                        Результат
                      </h4>
                      <p className="text-sm text-gray-900 leading-relaxed font-medium">
                        {cs.resultText}
                      </p>
                    </div>
                  </div>

                  {/* Right: Metrics */}
                  <div className="p-8 md:w-1/3 bg-gray-50 flex flex-col justify-center space-y-0">
                    {cs.results.map((r, rIdx) => (
                      <div
                        key={r.label}
                        className={`${rIdx > 0 ? "border-t border-gray-200 pt-5 mt-5" : ""}`}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs text-gray-500 uppercase tracking-wide">
                            {r.label}
                          </span>
                          {r.delta && (
                            <span className="px-2.5 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                              {r.delta}
                            </span>
                          )}
                        </div>
                        {r.before ? (
                          <div className="flex items-baseline gap-2">
                            <span className="text-sm text-gray-400 line-through">
                              {r.before}
                            </span>
                            <ArrowRight className="h-3 w-3 text-gray-400" />
                            <span className="text-2xl font-bold text-gray-900">
                              {r.value}
                            </span>
                          </div>
                        ) : (
                          <span className="text-2xl font-bold text-gray-900">
                            {r.value}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="text-xs text-gray-400 text-center">
            Данные усреднены по проектам.
          </p>
        </div>
      </section>

      {/* ── Trust Block ── */}
      <section className="mb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-white rounded-3xl p-10 md:p-14 border border-gray-200 shadow-xl overflow-hidden">
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-800 text-xs font-bold tracking-wider uppercase rounded mb-6">
              Гарантия прозрачности
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Без обязательств
            </h2>
            <div className="border-l-2 border-gray-200 pl-6 space-y-4 mb-10">
              <p className="text-lg text-gray-900 leading-relaxed">
                На звонке разбираем вашу ситуацию : где теряются деньги, что
                мешает расти конверсии, что в трекинге даёт неправильную
                картину. После — присылаем{" "}
                <strong>документ с приоритетами</strong>.
              </p>
              <p className="text-lg text-gray-900 leading-relaxed">
                Хотите работать с нами дальше — хорошо. Не хотите — этот план
                остаётся у вас и подходит для внедрения с любой командой или
                подрядчиком.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button
                type="button"
                onClick={scrollToForm}
                className={`w-full sm:w-auto ${primaryBtn} shadow-md`}
              >
                Записаться бесплатно
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <a
                href="https://wa.me/420705729502?text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%2C%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D1%8B%D0%B9%20%D1%80%D0%B0%D0%B7%D0%B1%D0%BE%D1%80%20%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD-%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D1%8B."
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 font-medium hover:text-[#f43f5e] transition-colors underline decoration-gray-200 underline-offset-4 hover:decoration-[#f43f5e]"
              >
                Написать в WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="mb-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Частые вопросы</h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.q}
                className="group bg-white rounded-xl border border-gray-200 hover:border-[#f43f5e]/30 transition-colors overflow-hidden"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-medium text-gray-900 marker:content-none">
                  {item.q}
                  <ArrowRight className="h-4 w-4 flex-shrink-0 text-[#f43f5e] opacity-70 group-hover:opacity-100 transition-all group-open:rotate-90" />
                </summary>
                <div className="border-t border-gray-200 px-5 py-4 text-sm leading-relaxed text-gray-500">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lead Filter ── */}
      <section className="mb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-gray-200 p-10 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]">
            <h2 className="text-2xl font-bold mb-6">Разбор подойдёт, если:</h2>
            <ul className="space-y-4">
              {[
                "Вы уже запускаете рекламу",
                "Хотите увеличить количество заявок",
                "Готовы внедрять рекомендации",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-gray-900"
                >
                  <span className="w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-sm font-bold shrink-0">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="pb-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Primary offset behind */}
          <div className="absolute inset-0 bg-[#f43f5e] translate-y-4 rounded-[2rem] -z-10 mx-4 sm:mx-6 lg:mx-8"></div>

          <div className="bg-white rounded-[2rem] p-12 md:p-16 text-center border border-gray-200 shadow-2xl relative overflow-hidden">
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-800 text-xs font-bold tracking-wider uppercase rounded-full mb-8">
              Финальный шаг
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              20 минут, чтобы понять,
              <br />
              <span className="text-[#f43f5e]">где теряются заявки</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
              Бесплатный разбор рекламы, лендинга и трекинга.{" "}
              <br className="hidden sm:block" />
              PDF с приоритетами после звонка. Без обязательств.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <button
                type="button"
                onClick={scrollToForm}
                className={`w-full sm:w-auto ${primaryBtn} text-lg px-10`}
              >
                Записаться бесплатно
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <span className="text-gray-400 hidden sm:inline">или</span>
              <a
                href="https://wa.me/420705729502?text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%2C%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D1%8B%D0%B9%20%D1%80%D0%B0%D0%B7%D0%B1%D0%BE%D1%80%20%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD-%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D1%8B."
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 font-medium hover:text-[#f43f5e] transition-colors underline decoration-gray-200 underline-offset-4 hover:decoration-[#f43f5e]"
              >
                напишите в WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-20 border-t border-gray-200 bg-white py-8">
        <div
          className={`${shell} flex flex-col items-center justify-between gap-4 text-xs text-gray-400 sm:flex-row`}
        >
          <span className="text-sm font-bold text-gray-900">
            Halo<span className="text-[#f43f5e]">Agency</span>
          </span>
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
