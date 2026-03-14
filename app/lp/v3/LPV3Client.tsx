"use client";

import { Inter } from "next/font/google";
import Link from "next/link";
import { useState, useMemo } from "react";
import { ArrowRight, Phone, Star, CheckCircle } from "lucide-react";

const inter = Inter({
  subsets: ["latin", "cyrillic-ext"],
  display: "swap",
  variable: "--font-inter",
});

/* ─── Shared styles ─── */
const shell = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";
const primaryBtn =
  "inline-flex items-center justify-center rounded-xl bg-[#f43f5e] px-8 py-4 text-sm font-semibold text-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:bg-[#e11d48] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f43f5e] focus-visible:ring-offset-2";

/* ─── Pain checklist ─── */
const painPoints = [
  "Клиенты спрашивают цены в Instagram — и не все возвращаются с ответом",
  "Хотите запустить рекламу, но некуда вести трафик",
  "У конкурентов есть сайт — и они стабильно появляются в Google",
  "Записи, заказы, брони — всё вручную через звонки и мессенджеры",
  "Клиент заходит, ничего не понимает — и молча уходит к другим",
];

/* ─── How it works ─── */
const steps = [
  {
    num: "01",
    title: "Оставьте заявку",
    desc: "Имя и email — больше ничего. Займёт меньше минуты.",
    time: "1 минута",
  },
  {
    num: "02",
    title: "Созвонимся на 20 минут",
    desc: "Расскажем честно: как вас находят сейчас, где уходят клиенты и что с этим делать.",
    time: "20 минут",
  },
  {
    num: "03",
    title: "Получите конкретный план",
    desc: "PDF с шагами, сроками и стоимостью под ваш бизнес. Без обязательств.",
    time: "В тот же день",
  },
];

/* ─── Case studies ─── */
const caseStudies = [
  {
    business: "Грумингсалон DoggyStyle, Прага",
    meta: "Сайт + CRM + онлайн-запись · 3 недели",
    situation:
      "Салон работал только через Instagram и сарафанное радио. Все записи — по телефону и в WhatsApp. Клиенты не могли быстро понять цены, записаться или найти в Google.",
    changes: [
      "Сделали сайт с онлайн-записью и карточкой питомца",
      "Настроили CRM и уведомления в Telegram",
      "Оптимизировали Google My Business под локальный поиск",
    ],
    results: [
      { label: "Онлайн-записи", before: "0%", after: "85%", delta: "с нуля" },
      { label: "Звонки для записи", before: "100%", after: "↓ 90%", delta: "−90%" },
      { label: "Новые клиенты из Google", before: "0", after: "+18/мес", delta: "органика" },
    ],
  },
  {
    business: "Прачечная ProPradlo, Прага",
    meta: "Лендинг + автоматизация · 2 недели",
    situation:
      "Принимали заказы только по телефону и email. Старый сайт не отображался на мобильных и не приносил заявок. В локальном поиске Google компании не было.",
    changes: [
      "Создали конверсионный лендинг с формой онлайн-заказа",
      "Автоматизировали приём заявок через Telegram",
      "Вышли в ТОП-3 Google по ключевым запросам в Праге",
    ],
    results: [
      { label: "Онлайн-заявки", before: "0", after: "3.5x рост", delta: "+250%" },
      { label: "Конверсия сайта", before: "—", after: "12%", delta: "с нуля" },
      { label: "Позиция в Google", before: "не было", after: "ТОП 3", delta: "локально" },
    ],
  },
  {
    business: "Кафе GetCafe, Прага",
    meta: "Редизайн + бронирование · 2 недели",
    situation:
      "Устаревший сайт плохо отображался на телефоне. Бронирование — только по телефону. Реклама не запускалась, потому что вести трафик было некуда.",
    changes: [
      "Полностью переработали сайт под мобильные и рекламу",
      "Встроили онлайн-бронирование с Google Календарём",
      "Запустили Google Ads на готовые посадочные страницы",
    ],
    results: [
      { label: "Онлайн-брони", before: "0", after: "+240%", delta: "за 4 недели" },
      { label: "Конверсия сайта", before: "1.2%", after: "8.5%", delta: "+608%" },
      { label: "Ручная работа по брони", before: "100%", after: "↓ 90%", delta: "автопилот" },
    ],
  },
];

const faqItems = [
  {
    q: "Сколько стоит сайт?",
    a: "Конверсионный лендинг — от 25 000 Kč. Многостраничный сайт с интеграциями — от 40 000 Kč. На разборе покажем, что именно нужно вашему бизнесу, и посчитаем смету. Никаких скрытых платежей.",
  },
  {
    q: "Сколько времени занимает сделать сайт?",
    a: "Конверсионный лендинг — 7–14 дней. Многостраничный сайт — 2–4 недели. Мы не затягиваем: работаем по чёткому плану с фиксированными дедлайнами.",
  },
  {
    q: "Что нужно подготовить с моей стороны?",
    a: "Минимум: рассказать о бизнесе, дать фотографии (или мы поможем с этим). Всё остальное — тексты, структуру, дизайн — берём на себя.",
  },
  {
    q: "Смогу ли я потом сам редактировать сайт?",
    a: "Да. Все сайты передаём с инструкцией и короткой демонстрацией. Если нужно — добавим простую панель управления контентом.",
  },
  {
    q: "Вы работаете только с Прагой?",
    a: "Работаем онлайн с русскоязычным бизнесом по всей Чехии. Встречи — по видеозвонку, без лишних поездок.",
  },
];

const testimonials = [
  {
    quote:
      "Раньше клиенты спрашивали цены в Instagram, и половина уходила, не дождавшись ответа. После сайта — сами находят, читают и записываются.",
    author: "Анна В.",
    business: "DoggyStyle, Прага",
    initial: "А",
  },
  {
    quote:
      "Думал, сайт — это дорого и долго. Сделали за 10 дней. Теперь 70% заказов приходят онлайн, без единого звонка с моей стороны.",
    author: "Дмитрий К.",
    business: "ProPradlo, Прага",
    initial: "Д",
  },
  {
    quote:
      "Наконец-то могу давать рекламу — есть куда вести людей. За первый месяц окупили сайт в несколько раз.",
    author: "Катерина М.",
    business: "GetCafe, Прага",
    initial: "К",
  },
];

/* ─── Form types ─── */
type FormValues = {
  name: string;
  currentPresence: string;
  email: string;
  consent: boolean;
};
type FormErrors = Partial<Record<keyof FormValues, string>>;

/* ─── Component ─── */
export default function LPV3Client() {
  const [values, setValues] = useState<FormValues>({
    name: "",
    currentPresence: "",
    email: "",
    consent: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const emailRegex = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/, []);

  const scrollToForm = () => {
    document.getElementById("v3-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const validate = () => {
    const e: FormErrors = {};
    if (!values.name.trim()) e.name = "Укажите ваше имя";
    if (!values.currentPresence.trim()) e.currentPresence = "Укажите как вас находят клиенты";
    if (!values.email.trim() || !emailRegex.test(values.email.trim()))
      e.email = "Укажите корректный email";
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
      const res = await fetch("/api/webhook/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Webhook-Secret": process.env.NEXT_PUBLIC_HALOTRACK_WEBHOOK_SECRET || "",
        },
        body: JSON.stringify({
          type: "website-audit-v3",
          lead_id: crypto.randomUUID(),
          source: "lp_v3",
          landing_page_type: "v3",
          name: values.name.trim(),
          email: values.email.trim(),
          currentPresence: values.currentPresence.trim(),
          service: "Free Website Audit",
          value: 0,
          currency: "CZK",
          consent_given: true,
          timestamp: new Date().toISOString(),
        }),
      });
      if (!res.ok) {
        const d = await res.json().catch(() => ({ error: "Ошибка отправки" }));
        throw new Error(d.error || "Ошибка отправки");
      }
      setSubmitSuccess(true);
      setValues({ name: "", currentPresence: "", email: "", consent: false });
      setErrors({});
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Не удалось отправить заявку. Попробуйте снова.",
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
          <Link href="/" className="text-2xl font-bold tracking-tight text-gray-900">
            Halo<span className="text-[#f43f5e]">Agency</span>
          </Link>
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
        <div className={`${shell} relative grid gap-16 lg:grid-cols-12 items-start`}>
          {/* Left copy */}
          <div className="lg:col-span-7 flex flex-col justify-center pt-8">
            {/* Urgency badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold rounded-full mb-6 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
              Свободно 3 слота на следующей неделе
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] mb-8 tracking-tight text-gray-900">
              Нет сайта —<br />
              значит, вы каждый<br />
              день теряете<br />
              <span className="relative inline-block">
                <span className="relative z-10">клиентов.</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-[#f43f5e]/20 -z-0 -skew-x-[15deg]"></span>
              </span>
            </h1>

            <div className="border-l-4 border-[#f43f5e] pl-6 py-2 mb-6">
              <p className="text-lg text-gray-500 leading-relaxed">
                Не потому что плохой продукт. А потому что людям негде быстро понять:
                кто вы, что предлагаете и почему именно вы.
              </p>
            </div>

            <div className="mb-8 space-y-2 pl-6">
              <p className="text-gray-700 leading-relaxed">
                Если клиенту нужно <span className="font-semibold">писать и ждать ответа</span> —
                часть просто уходит к тем, у кого всё понятно за 2 минуты.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Сайт — это не «модно». Это{" "}
                <span className="font-semibold text-gray-900">точка принятия решения</span>.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Мы делаем сайты как инструмент продаж, а не как красивые визитки.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 mb-10">
              <button type="button" onClick={scrollToForm} className={`w-full sm:w-auto ${primaryBtn}`}>
                Получить разбор за 20 мин
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <a
                href="https://wa.me/420705729502"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 font-medium hover:text-[#f43f5e] transition-colors underline decoration-2 decoration-gray-200 underline-offset-4 hover:decoration-[#f43f5e]"
              >
                Написать в WhatsApp
              </a>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-8 pt-2 border-t border-gray-200">
              {[
                { value: "40+", label: "сайтов в Чехии" },
                { value: "7–14 дн.", label: "до запуска" },
                { value: "12%", label: "средняя конверсия" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="text-2xl font-bold text-gray-900">{s.value}</span>
                  <span className="text-xs text-gray-500 mt-0.5">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form card */}
          <div className="lg:col-span-5 relative" id="v3-form">
            {/* Offset shadow */}
            <div className="absolute inset-0 bg-[#f43f5e] translate-x-4 translate-y-4 rounded-2xl -z-10 opacity-90"></div>

            <div className="bg-white rounded-2xl p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-200 relative">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-1">Бесплатный разбор</h3>
                  <p className="text-sm text-gray-500">20 минут. Честно. Конкретно.</p>
                </div>
                <span className="px-3 py-1 bg-green-50 text-green-800 text-xs font-bold rounded-md tracking-wider uppercase">
                  Бесплатно
                </span>
              </div>

              {submitSuccess && (
                <div className="mt-5 rounded-lg border border-green-300 bg-green-50 p-4 text-sm font-medium text-green-800">
                  ✓ Заявка отправлена. Напишем на email в течение 2 рабочих часов.
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
                      onChange={(e) => setValues((p) => ({ ...p, name: e.target.value }))}
                    />
                    {errors.name && <p className={errorClass}>{errors.name}</p>}
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="v3-presence">
                      Как сейчас находят вас клиенты?
                    </label>
                    <input
                      id="v3-presence"
                      className={fieldClass}
                      placeholder="Instagram, сарафанное радио, старый сайт..."
                      value={values.currentPresence}
                      onChange={(e) =>
                        setValues((p) => ({ ...p, currentPresence: e.target.value }))
                      }
                    />
                    {errors.currentPresence && (
                      <p className={errorClass}>{errors.currentPresence}</p>
                    )}
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="v3-email">
                      Email для связи
                    </label>
                    <input
                      id="v3-email"
                      type="email"
                      className={fieldClass}
                      placeholder="you@company.com"
                      value={values.email}
                      onChange={(e) => setValues((p) => ({ ...p, email: e.target.value }))}
                    />
                    {errors.email && <p className={errorClass}>{errors.email}</p>}
                  </div>

                  <div className="flex items-start gap-3 pt-2">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        checked={values.consent}
                        onChange={(e) => setValues((p) => ({ ...p, consent: e.target.checked }))}
                        className="w-4 h-4 rounded border-gray-300 text-[#f43f5e] focus:ring-[#f43f5e] bg-[#fafafa]"
                      />
                    </div>
                    <label className="text-xs text-gray-500 leading-snug">
                      Согласен(а) на обработку данных. Только контакт по вашему разбору, без рассылок.
                    </label>
                  </div>
                  {errors.consent && <p className={errorClass}>{errors.consent}</p>}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full py-4 bg-gray-900 text-white font-bold rounded-xl transition-all hover:opacity-90 flex items-center justify-center gap-2 mt-2 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? "Отправляем..." : "Хочу узнать, сколько теряю"}
                    {!isSubmitting && (
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    )}
                  </button>
                  <p className="text-center text-xs text-gray-400 mt-3">
                    Ответим за 2 часа · Без продаж в лоб · Только по делу
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Pain Checklist ── */}
      <section className="mb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] overflow-hidden">
            <div className="px-8 pt-8 pb-5 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-900">Узнайте себя:</h2>
              <p className="text-sm text-gray-500 mt-1">
                Если хотя бы 2 пункта — это про вас, стоит поговорить.
              </p>
            </div>
            <ul className="divide-y divide-gray-100">
              {painPoints.map((point) => (
                <li key={point} className="flex items-start gap-4 px-8 py-4">
                  <CheckCircle className="w-5 h-5 text-[#f43f5e] shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <div className="px-8 pb-8 pt-6 bg-gray-50 border-t border-gray-100">
              <button
                type="button"
                onClick={scrollToForm}
                className={`w-full sm:w-auto ${primaryBtn} text-sm`}
              >
                Разобраться бесплатно — за 20 минут
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="mb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-2">Как это работает</h2>
            <p className="text-gray-500">Три шага от «нет сайта» до первых онлайн-клиентов.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Connector line (desktop only) */}
            <div className="hidden md:block absolute top-10 left-[calc(16.66%-1rem)] right-[calc(16.66%-1rem)] h-px bg-gray-200 z-0 pointer-events-none"></div>

            {steps.map((step, i) => (
              <div
                key={step.num}
                className="bg-white rounded-2xl border border-gray-200 p-7 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] relative z-10"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                      i === 0 ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {step.num}
                  </div>
                  <span className="text-xs font-semibold text-[#f43f5e] uppercase tracking-wider">
                    {step.time}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
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
              Что происходит после{" "}
              <span className="text-[#f43f5e]">запуска сайта</span>
            </h2>
            <div className="border-l-2 border-[#f43f5e] pl-4">
              <p className="text-gray-500">
                Реальные кейсы из ниш, где клиенты принимают решение онлайн.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {caseStudies.map((cs, idx) => (
              <article
                key={cs.business}
                className={`bg-white rounded-2xl ${idx === 0 ? "border-2" : "border"} border-gray-200 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] overflow-hidden`}
              >
                <div className="flex flex-col md:flex-row">
                  {/* Left: Content */}
                  <div className="p-8 md:w-2/3 border-b md:border-b-0 md:border-r border-gray-200">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-sm">
                        0{idx + 1}
                      </span>
                      <h3 className="text-xl font-bold">{cs.business}</h3>
                    </div>
                    <div className="inline-block px-3 py-1 bg-blue-50 text-blue-800 text-xs font-semibold rounded mb-6">
                      {cs.meta}
                    </div>

                    <div className="mb-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                        Ситуация:
                      </h4>
                      <p className="text-sm text-gray-900 leading-relaxed">{cs.situation}</p>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
                        Что сделали:
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-900">
                        {cs.changes.map((c) => (
                          <li key={c} className="flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 text-[#f43f5e] shrink-0 mt-0.5" />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right: Results */}
                  <div className="p-8 md:w-1/3 bg-[#fafafa] flex flex-col justify-center space-y-6">
                    {cs.results.map((r, rIdx) => (
                      <div key={r.label}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs text-gray-500">{r.label}</span>
                          <span className="px-2 py-0.5 bg-green-100 text-green-800 text-xs font-bold rounded">
                            {r.delta}
                          </span>
                        </div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-sm text-gray-400 line-through">{r.before}</span>
                          <ArrowRight className="h-3 w-3 text-gray-400" />
                          <span className="text-xl font-bold">{r.after}</span>
                        </div>
                        {rIdx < cs.results.length - 1 && (
                          <div className="h-px bg-gray-200 w-full mt-6"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="mb-32">
        <div className={shell}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <h2 className="text-3xl font-bold">
              Что <span className="text-[#f43f5e]">говорят</span> клиенты
            </h2>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm">
              <span className="font-bold">5.0</span>
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-xs text-gray-500 ml-1">40+ проектов</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] flex flex-col h-full"
              >
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-900 mb-8 flex-grow">&laquo;{t.quote}&raquo;</p>
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

      {/* ── Final CTA ── */}
      <section className="pb-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 bg-[#f43f5e] translate-y-4 rounded-[2rem] -z-10 mx-4 sm:mx-6 lg:mx-8"></div>

          <div className="bg-white rounded-[2rem] p-12 md:p-16 text-center border border-gray-200 shadow-2xl relative overflow-hidden">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
              Свободно 3 слота на следующей неделе
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Хотите понять,<br />
              <span className="text-[#f43f5e]">сколько вы теряете?</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
              Разберём за 20 минут — бесплатно. Покажем конкретно, где уходят клиенты и что с этим сделать.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <button
                type="button"
                onClick={scrollToForm}
                className={`w-full sm:w-auto ${primaryBtn} text-lg px-10`}
              >
                Получить разбор бесплатно
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <span className="text-gray-400 hidden sm:inline">или</span>
              <a
                href="https://wa.me/420705729502"
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

      {/* ── Footer ── */}
      <footer className="border-t border-gray-200 py-8 bg-white mt-20">
        <div
          className={`${shell} flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400`}
        >
          <Link href="/" className="font-bold text-sm text-gray-900">
            Halo<span className="text-[#f43f5e]">Agency</span>
          </Link>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-gray-600 transition-colors">
              Политика конфиденциальности
            </Link>
            <Link href="/terms-of-service" className="hover:text-gray-600 transition-colors">
              Условия использования
            </Link>
          </div>
          <span>© 2026 HaloAgency.cz</span>
        </div>
      </footer>
    </main>
  );
}
