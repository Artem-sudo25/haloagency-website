"use client";

import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";
import { useState, useMemo } from "react";
import { ArrowRight, PhoneCall } from "lucide-react";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "cyrillic-ext"],
  display: "swap",
  variable: "--font-jakarta",
});

/* ─── Shared styles ─── */
const shell = "mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8";
const primaryBtn =
  "inline-flex items-center justify-center rounded-lg bg-[#F43F5E] px-6 py-3.5 text-sm font-bold text-white transition-all shadow-[4px_4px_0px_0px_rgba(26,31,40,0.1)] hover:shadow-none hover:translate-y-1 hover:translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F43F5E] focus-visible:ring-offset-2";

/* ─── Data ─── */
const caseStudies = [
  {
    business: "Салон лазерной эпиляции, Прага 3",
    meta: "55 000 CZK/мес · Meta Ads · 45 дней",
    situation:
      "CPA лида — 1 420 CZK, 38 лидов в месяц. Часть событий терялась после iOS-ограничений: Meta видела меньше конверсий, алгоритм оптимизировался по неполным данным.",
    changes: [
      "Настроили Meta CAPI и дедупликацию событий",
      "Пересобрали структуру lead-кампаний",
      "Обновили оффер и блоки доверия на лендинге",
    ],
    results: [
      { label: "CPA лида", before: "1 420", after: "820 CZK", delta: "−42%" },
      { label: "Лидов в месяц", before: "38", after: "71", delta: "+87%" },
      { label: "Стоимость записи", before: "2 630", after: "1 540 CZK", delta: "−41%" },
    ],
  },
  {
    business: "Клининг-сервис, Прага",
    meta: "80 000 CZK/мес · Google Ads · 60 дней",
    situation:
      "Дорогие нерелевантные звонки, CPL 1 950 CZK. Call-tracking отсутствовал — было невозможно понять, какие кампании приводят реальных клиентов, а какие — случайные звонки.",
    changes: [
      "Поставили call-tracking через GA4 и GTM",
      "Разделили Search по услугам и районам",
      "Добавили минус-слова, улучшили посадочные страницы",
    ],
    results: [
      { label: "Квалифицированных лидов", before: "29", after: "54/мес", delta: "+86%" },
      { label: "CPL", before: "1 950", after: "1 130 CZK", delta: "−42%" },
      { label: "Нерелевантные звонки", before: "34%", after: "12%", delta: "−65%" },
    ],
  },
  {
    business: "E-commerce косметики, Чехия",
    meta: "120 000 CZK/мес · Meta + Shopping · 30 дней",
    situation:
      "ROAS 1.8, дубли Purchase-событий. Решения принимались по искажённой аналитике: реальная картина по марже и источникам была скрыта за некорректными данными.",
    changes: [
      "Перешли на server-side tracking",
      "Починили value/currency и дедупликацию Purchase",
      "Сегментировали фид по марже, оптимизировали PDP и checkout",
    ],
    results: [
      { label: "ROAS", before: "1.8", after: "3.1", delta: "+72%" },
      { label: "CPA заказа", before: "520", after: "360 CZK", delta: "−31%" },
      { label: "Выручка", before: "база", after: "+72%", delta: "при +18% расхода" },
    ],
  },
];

const faqItems = [
  {
    q: "Подойдёт ли разбор, если трекинг вообще не настроен?",
    a: "Да. Это частая ситуация. Разберём что именно нужно настроить в первую очередь и пришлём приоритеты в PDF.",
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
    quote: "Думал, будут впаривать услуги — а реально получил план с конкретными цифрами. CPA упал за первый же месяц.",
    author: "Алексей Р.",
    business: "Барбершоп, Прага",
    initial: "А",
  },
  {
    quote: "За 20 минут узнал больше, чем за 3 платных консультации у других агентств.",
    author: "Мартин К.",
    business: "ProPradlo, Брно",
    initial: "M",
  },
  {
    quote: "Наконец-то кто-то показал реальную картину по трекингу. Половина конверсий просто не считалась.",
    author: "Ирина С.",
    business: "Косметология, Прага",
    initial: "И",
  },
];

/* ─── Form types ─── */
type FormValues = {
  name: string;
  websiteOrProfile: string;
  monthlyBudget: string;
  email: string;
  consent: boolean;
};
type FormErrors = Partial<Record<keyof FormValues, string>>;

/* ─── Component ─── */
export default function LPV2Client() {
  const [values, setValues] = useState<FormValues>({
    name: "",
    websiteOrProfile: "",
    monthlyBudget: "",
    email: "",
    consent: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const emailRegex = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/, []);

  const scrollToForm = () => {
    document.getElementById("v2-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const validate = () => {
    const e: FormErrors = {};
    if (!values.name.trim()) e.name = "Укажите ваше имя";
    if (!values.websiteOrProfile.trim()) e.websiteOrProfile = "Укажите сайт или Instagram";
    if (!values.monthlyBudget.trim()) e.monthlyBudget = "Укажите рекламный бюджет";
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
          type: "growth-audit-v2",
          lead_id: crypto.randomUUID(),
          source: "lp_v2",
          landing_page_type: "v2",
          name: values.name.trim(),
          email: values.email.trim(),
          websiteOrProfile: values.websiteOrProfile.trim(),
          monthlyBudget: values.monthlyBudget.trim(),
          service: "Free Growth Audit",
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
      setValues({ name: "", websiteOrProfile: "", monthlyBudget: "", email: "", consent: false });
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
    "h-11 w-full rounded-lg border border-[#DDD4C8] bg-white px-3.5 text-sm text-[#1A1F28] outline-none placeholder:text-[#A0AAB4] transition-colors focus:border-[#F43F5E] focus:ring-1 focus:ring-[#F43F5E]/30";
  const labelClass = "block text-sm font-medium text-[#3D4852] mb-1.5";
  const errorClass = "mt-1 text-xs text-[#B94A2C]";

  return (
    <main
      className={`${jakarta.variable} font-[family-name:var(--font-jakarta)] min-h-screen bg-[#F8F4EF] text-[#1A1F28]`}
    >
      {/* ── Nav ── */}
      <header className="sticky top-0 z-40 border-b border-[#E8DDD2] bg-[#F8F4EF]/95 backdrop-blur-sm">
        <div className={`${shell} flex h-16 items-center justify-between`}>
          <Link href="/" className="text-lg font-bold tracking-tight text-[#1A1F28]">
            Halo<span className="text-[#F43F5E]">Agency</span>
          </Link>
          <a
            href="tel:+420705729502"
            className="flex items-center gap-1.5 text-sm font-medium text-[#64707C] transition-colors hover:text-[#1A1F28]"
          >
            <PhoneCall className="h-4 w-4" />
            +420 705 729 502
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-[#F43F5E]/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full bg-[#3B82F6]/5 blur-3xl"></div>

        <div className={`${shell} relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start`}>
          {/* Left copy - More editorial typography */}
          <div className="space-y-8 pt-4">
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-[#1A1F28] sm:text-[3.5rem]">
              Реклама уходит,{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#1B3A5C]">а заявок не прибавляется.</span>
                <span className="absolute -bottom-2 left-0 h-3 w-full bg-[#F43F5E]/20 -rotate-1"></span>
              </span>
              <br />
              Разберём почему — бесплатно.
            </h1>
            <p className="max-w-xl text-xl leading-relaxed text-[#4C5A67] border-l-4 border-[#3B82F6] pl-6">
              За 20 минут смотрим на вашу рекламу, лендинг и трекинг — и
              называем конкретные причины. После звонка присылаем PDF с
              приоритетами под ваш проект. Без обязательств работать с нами.
            </p>

            <div className="flex items-center gap-4 text-sm font-medium text-[#1A1F28]">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-[#F8F4EF] bg-[#E8DDD2]"></div>
                ))}
              </div>
              <p>90+ разборов для SMB в Чехии</p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center pt-2">
              <button type="button" onClick={scrollToForm} className={`${primaryBtn} shadow-[4px_4px_0px_0px_rgba(26,31,40,0.1)] hover:shadow-none hover:translate-y-1 hover:translate-x-1 hover:bg-[#F43F5E] transition-all`}>
                Записаться на бесплатный разбор
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <a
                href="https://wa.me/420705729502"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-[#1A1F28] underline decoration-2 underline-offset-4 decoration-[#3B82F6]/30 transition-colors hover:decoration-[#3B82F6]"
              >
                Написать в WhatsApp
              </a>
            </div>
          </div>

          {/* Right — Form card (Asymmetric / Brutalist touch) */}
          <div className="relative mt-8 lg:mt-0 lg:ml-8" id="v2-form">
            {/* Solid offset shadow */}
            <div className="absolute top-4 left-4 h-full w-full bg-[#F43F5E] rounded-xl -z-10"></div>

            <div className="rounded-xl border-2 border-[#1A1F28] bg-white p-6 sm:p-8 relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-black text-[#1A1F28] tracking-tight">
                    Growth Audit
                  </h2>
                  <p className="mt-1 text-sm text-[#64707C]">
                    20 минут. Без воды и продаж.
                  </p>
                </div>
                <div className="inline-flex items-center rounded bg-[#EFF6FF] px-2 py-1 text-xs font-bold uppercase tracking-wider text-[#3B82F6] border border-[#BFDBFE]">
                  Free
                </div>
              </div>

              {submitSuccess && (
                <div className="mt-5 rounded-lg border-2 border-[#22C55E] bg-[#F0FDF4] p-4 text-sm font-medium text-[#166534]">
                  Заявка отправлена. Напишем на email в течение 2 рабочих часов.
                </div>
              )}
              {submitError && (
                <div className="mt-5 rounded-lg border-2 border-[#EF4444] bg-[#FEF2F2] p-4 text-sm font-medium text-[#991B1B]">
                  {submitError}
                </div>
              )}

              {!submitSuccess && (
                <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                  <div>
                    <label className={labelClass} htmlFor="v2-name">
                      Имя
                    </label>
                    <input
                      id="v2-name"
                      className={fieldClass}
                      placeholder="Например, Ирина"
                      value={values.name}
                      onChange={(e) => setValues((p) => ({ ...p, name: e.target.value }))}
                    />
                    {errors.name && <p className={errorClass}>{errors.name}</p>}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="v2-site">
                      Сайт или Instagram
                    </label>
                    <input
                      id="v2-site"
                      className={fieldClass}
                      placeholder="https://... или @ваш_профиль"
                      value={values.websiteOrProfile}
                      onChange={(e) =>
                        setValues((p) => ({ ...p, websiteOrProfile: e.target.value }))
                      }
                    />
                    {errors.websiteOrProfile && (
                      <p className={errorClass}>{errors.websiteOrProfile}</p>
                    )}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="v2-budget">
                      Рекламный бюджет в месяц (CZK)
                    </label>
                    <input
                      id="v2-budget"
                      className={fieldClass}
                      placeholder="Например, 60 000"
                      value={values.monthlyBudget}
                      onChange={(e) =>
                        setValues((p) => ({ ...p, monthlyBudget: e.target.value }))
                      }
                    />
                    {errors.monthlyBudget && (
                      <p className={errorClass}>{errors.monthlyBudget}</p>
                    )}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="v2-email">
                      Email для связи
                    </label>
                    <input
                      id="v2-email"
                      type="email"
                      className={fieldClass}
                      placeholder="you@company.com"
                      value={values.email}
                      onChange={(e) => setValues((p) => ({ ...p, email: e.target.value }))}
                    />
                    {errors.email && <p className={errorClass}>{errors.email}</p>}
                  </div>
                  <label className="flex items-start gap-2.5 pt-1 text-sm text-[#566473]">
                    <input
                      type="checkbox"
                      checked={values.consent}
                      onChange={(e) =>
                        setValues((p) => ({ ...p, consent: e.target.checked }))
                      }
                      className="mt-0.5 h-4 w-4 flex-shrink-0 rounded border-[#D8CCC0] accent-[#F43F5E]"
                    />
                    <span>
                      Согласен(а) на обработку данных. Только контакт по вашему
                      разбору, без рассылок.
                    </span>
                  </label>
                  {errors.consent && <p className={errorClass}>{errors.consent}</p>}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative h-14 w-full overflow-hidden rounded-lg bg-[#1A1F28] text-sm font-bold text-white transition-all hover:bg-[#2D3748] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? "Отправляем..." : "Получить разбор"}
                      {!isSubmitting && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
                    </span>
                  </button>
                  <p className="text-center text-xs text-[#8A9BAA]">
                    Ответим за 2 часа в рабочее время
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Social Proof Strip ── */}
      <section className="py-12 sm:py-16">
        <div className={shell}>
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl font-extrabold tracking-tight text-[#1A1F28] whitespace-nowrap">
              Что <span className="text-[#F43F5E]">говорят</span> клиенты
            </h2>
            <div className="h-px flex-1 bg-[#E8DDD2]"></div>
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded bg-[#F8F4EF] border border-[#E8DDD2] whitespace-nowrap">
              <span className="text-sm font-bold text-[#1A1F28]">5.0</span>
              <svg className="w-4 h-4 text-[#F59E0B]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {testimonials.map((t, idx) => (
              <div key={t.author} className="relative group">
                {/* Small offset shadow */}
                <div className="absolute top-2 left-2 w-full h-full bg-[#E8DDD2] rounded-xl -z-10 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"></div>

                <div className="rounded-xl border border-[#1A1F28] bg-white p-5 sm:p-6 relative z-10 flex flex-col h-full">
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-3">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg key={s} className="w-3.5 h-3.5 text-[#F59E0B]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-sm leading-relaxed text-[#4C5A67] flex-1">
                    &laquo;{t.quote}&raquo;
                  </p>

                  {/* Author */}
                  <div className="mt-5 pt-4 border-t border-[#E8DDD2] flex items-center gap-3">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#1A1F28] text-white text-xs font-bold shrink-0">
                      {t.initial}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#1A1F28]">{t.author}</p>
                      <p className="text-xs text-[#64707C]">{t.business}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-24 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-40 right-10 w-72 h-72 bg-[#3B82F6]/5 rounded-full blur-3xl -z-10"></div>

        <div className={shell}>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1A1F28] sm:text-[2.5rem] leading-[1.1]">
              Что меняется после <span className="text-[#3B82F6]">разбора</span>
            </h2>
            <p className="mt-4 text-lg text-[#4C5A67] border-l-2 border-[#F43F5E] pl-4">
              Примеры из ниш, где важен стабильный CPL/CPA, а не просто пустой трафик.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {caseStudies.map((cs, idx) => (
              <article
                key={cs.business}
                className="relative group"
              >
                {/* Offset shadow that shifts on hover */}
                <div className="absolute top-3 left-3 w-full h-full bg-[#E8DDD2] rounded-xl -z-10 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"></div>

                <div className="rounded-xl border-2 border-[#1A1F28] bg-white p-6 sm:p-8 flex flex-col md:flex-row gap-8 items-start relative z-10">
                  <div className="flex-1 space-y-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#1A1F28] text-white font-bold text-sm">
                        0{idx + 1}
                      </div>
                      <h3 className="text-xl font-bold text-[#1A1F28]">{cs.business}</h3>
                      <span className="text-xs font-semibold px-2.5 py-1 bg-[#F8F4EF] text-[#3B82F6] rounded border border-[#EFF6FF]">
                        {cs.meta}
                      </span>
                    </div>

                    <p className="text-sm leading-relaxed text-[#4C5A67]">
                      <span className="font-bold text-[#1A1F28] uppercase text-xs tracking-wider mr-2">Ситуация:</span>
                      {cs.situation}
                    </p>

                    <div className="space-y-2">
                      <p className="font-bold text-[#1A1F28] uppercase text-xs tracking-wider">Что изменили:</p>
                      <ul className="space-y-2">
                        {cs.changes.map((c) => (
                          <li key={c} className="flex items-start gap-3 text-sm text-[#4C5A67]">
                            <ArrowRight className="h-4 w-4 text-[#F43F5E] shrink-0 mt-0.5" />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Results Box */}
                  <div className="w-full md:w-72 shrink-0 bg-[#F8F4EF] border border-[#E8DDD2] rounded-lg p-5 space-y-4">
                    {cs.results.map((r) => (
                      <div key={r.label} className="flex flex-col border-b border-[#E8DDD2] pb-3 last:pb-0 last:border-0 hover:bg-white/50 transition-colors rounded px-2 -mx-2">
                        <div className="flex justify-between items-baseline mb-1">
                          <p className="text-xs font-medium text-[#64707C]">{r.label}</p>
                          <p className="text-xs font-semibold text-[#1B5E38] bg-[#C8E6C9]/40 px-1.5 py-0.5 rounded">
                            {r.delta}
                          </p>
                        </div>
                        <div className="flex items-baseline gap-2">
                          <p className="text-sm text-[#9AA5B0] line-through">{r.before}</p>
                          <ArrowRight className="h-3 w-3 text-[#B0BCC7]" />
                          <p className="text-xl font-bold text-[#1A1F28]">{r.after}</p>
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

      {/* ── Trust Block ── */}
      <section className="py-16 sm:py-20 relative">
        <div className={shell}>
          <div className="relative">
            {/* Offset shadow border */}
            <div className="absolute top-3 left-3 w-full h-full border-2 border-[#1A1F28] rounded-xl -z-10"></div>

            <div className="rounded-xl border-2 border-[#1A1F28] bg-white p-8 sm:p-12 relative z-10 overflow-hidden">
              {/* Decorative corner element */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#F43F5E]/10 rounded-full blur-2xl"></div>

              <div className="max-w-2xl relative z-10">
                <div className="inline-flex items-center rounded-sm bg-[#EFF6FF] px-2 py-1 text-xs font-bold uppercase tracking-wider text-[#3B82F6] mb-4">
                  Гарантия прозрачности
                </div>
                <h2 className="text-3xl font-extrabold text-[#1A1F28] sm:text-4xl tracking-tight">Это не продажа.</h2>
                <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#4C5A67] border-l-2 border-[#E8DDD2] pl-5">
                  <p>
                    На звонке разбираем вашу ситуацию честно: где теряются деньги, что
                    мешает расти конверсии, что в трекинге даёт неправильную картину.
                    После — присылаем <span className="font-semibold text-[#1A1F28]">документ с приоритетами</span>.
                  </p>
                  <p>
                    Хотите работать с нами дальше — хорошо. Не хотите — этот план остаётся
                    у вас и подходит для внедрения с любой командой или подрядчиком.
                  </p>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
                  <button type="button" onClick={scrollToForm} className={primaryBtn}>
                    Записаться бесплатно
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                  <a
                    href="https://wa.me/420705729502"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-[#1A1F28] underline decoration-2 underline-offset-4 decoration-[#C8BDB4] transition-colors hover:decoration-[#1A1F28]"
                  >
                    Написать в WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ── FAQ ── */}
      <section className="py-12 sm:py-16">
        <div className={shell}>
          <h2 className="text-2xl font-bold tracking-tight text-[#1A1F28]">
            Частые вопросы
          </h2>
          <div className="mt-6 space-y-2">
            {faqItems.map((item) => (
              <details
                key={item.q}
                className="group overflow-hidden rounded-xl border border-[#E8DDD2] bg-white"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-semibold text-[#1A1F28] marker:content-none">
                  {item.q}
                  <ArrowRight className="h-4 w-4 flex-shrink-0 text-[#F43F5E] transition-transform group-open:rotate-90" />
                </summary>
                <div className="border-t border-[#E8DDD2] px-5 py-4 text-sm leading-relaxed text-[#566473]">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-16 pb-24 sm:py-24 sm:pb-32 overflow-hidden">
        <div className={shell}>
          {/* Group wrapper for hover interaction */}
          <div className="relative max-w-4xl mx-auto group">
            {/* Hot Pink offset shadow — makes the CTA pop */}
            <div className="absolute top-5 left-5 w-full h-full bg-[#F43F5E] rounded-2xl -z-10 transition-all duration-300 group-hover:top-6 group-hover:left-6"></div>

            <div className="rounded-2xl border-2 border-[#1A1F28] bg-white p-10 text-center sm:p-16 relative z-10 overflow-hidden transition-all duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5">
              {/* Decorative radial gradients */}
              <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-[#F43F5E]/10 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-[#3B82F6]/5 blur-3xl"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center rounded bg-[#EFF6FF] px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#3B82F6] border border-[#BFDBFE] mb-6">
                  Финальный шаг
                </div>
                <h2 className="text-3xl font-extrabold tracking-tight text-[#1A1F28] sm:text-[2.5rem] leading-tight">
                  20 минут, чтобы понять,<br />
                  <span className="text-[#F43F5E]">где теряются заявки</span>
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg text-[#4C5A67]">
                  Бесплатный разбор рекламы, лендинга и трекинга. <br className="hidden sm:block" />
                  PDF с приоритетами после звонка. Без обязательств.
                </p>

                <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
                  <button type="button" onClick={scrollToForm} className={primaryBtn}>
                    Записаться бесплатно
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                  <a
                    href="https://wa.me/420705729502"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-[#1A1F28] underline decoration-2 underline-offset-4 decoration-[#C8BDB4] transition-colors hover:decoration-[#F43F5E]"
                  >
                    или напишите в WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
