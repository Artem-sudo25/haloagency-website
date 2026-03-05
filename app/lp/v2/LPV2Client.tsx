"use client";

import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";
import { useState, useMemo } from "react";
import { ArrowRight, PhoneCall } from "lucide-react";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-jakarta",
});

/* ─── Shared styles ─── */
const shell = "mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8";
const primaryBtn =
  "inline-flex items-center justify-center rounded-lg bg-[#C15C32] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#A84E28] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C15C32] focus-visible:ring-offset-2";

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
    "h-11 w-full rounded-lg border border-[#DDD4C8] bg-white px-3.5 text-sm text-[#1A1F28] outline-none placeholder:text-[#A0AAB4] transition-colors focus:border-[#C15C32] focus:ring-1 focus:ring-[#C15C32]";
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
            Halo<span className="text-[#C15C32]">Agency</span>
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
      <section className="py-14 sm:py-20">
        <div className={`${shell} grid gap-10 lg:grid-cols-[1fr_420px] lg:items-start`}>
          {/* Left copy */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-[#1A1F28] sm:text-5xl">
              Реклама уходит,{" "}
              <span className="text-[#C15C32]">а заявок не прибавляется.</span>{" "}
              Разберём почему — бесплатно.
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-[#4C5A67]">
              За 20 минут смотрим на вашу рекламу, лендинг и трекинг — и
              называем конкретные причины. После звонка присылаем PDF с
              приоритетами под ваш проект. Без обязательств работать с нами.
            </p>
            <p className="text-sm text-[#64707C]">
              90+ разборов для SMB в Чехии · Среднее снижение CPL — 28% за 60 дней
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button type="button" onClick={scrollToForm} className={primaryBtn}>
                Записаться на бесплатный разбор
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <a
                href="https://wa.me/420705729502"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[#64707C] underline underline-offset-4 decoration-[#C8BDB4] transition-colors hover:text-[#C15C32] hover:decoration-[#C15C32]"
              >
                или напишите в WhatsApp
              </a>
            </div>
          </div>

          {/* Right — Form card */}
          <div
            id="v2-form"
            className="rounded-2xl border border-[#E8DDD2] bg-white p-6 shadow-[0_8px_32px_rgba(26,31,40,0.08)] sm:p-8"
          >
            <div className="mb-1 inline-flex items-center rounded-md bg-[#F5EDE6] px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-[#A84E28]">
              Бесплатно
            </div>
            <h2 className="mt-2 text-xl font-bold text-[#1A1F28]">
              Бесплатный разбор — 20 минут
            </h2>
            <p className="mt-1 text-sm text-[#64707C]">
              Без продажи. Только разбор вашей ситуации.
            </p>

            {submitSuccess && (
              <div className="mt-5 rounded-xl border border-[#C8E6C9] bg-[#F1F8F1] p-4 text-sm text-[#2E6E3E]">
                Заявка отправлена. Напишем на email в рабочее время — обычно в
                течение 2 часов — и предложим удобное время для звонка.
              </div>
            )}
            {submitError && (
              <div className="mt-5 rounded-xl border border-[#FECDCA] bg-[#FFF5F5] p-4 text-sm text-[#912018]">
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
                    className="mt-0.5 h-4 w-4 flex-shrink-0 rounded border-[#D8CCC0] accent-[#C15C32]"
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
                  className="h-12 w-full rounded-lg bg-[#C15C32] text-sm font-semibold text-white transition-colors hover:bg-[#A84E28] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Отправляем..." : "Отправить заявку →"}
                </button>
                <p className="text-center text-xs text-[#8A9BAA]">
                  Ответим за 2 часа в рабочее время
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── Case Studies ── */}
      <section className="py-12 sm:py-16">
        <div className={shell}>
          <h2 className="text-3xl font-bold tracking-tight text-[#1A1F28] sm:text-4xl">
            Что меняется после разбора
          </h2>
          <p className="mt-3 max-w-2xl text-[#4C5A67]">
            Примеры из ниш, где важен стабильный CPL/CPA, а не просто трафик.
          </p>
          <div className="mt-8 space-y-5">
            {caseStudies.map((cs) => (
              <article
                key={cs.business}
                className="rounded-2xl border border-[#E8DDD2] bg-white p-6 sm:p-8"
              >
                <div className="flex flex-wrap items-baseline gap-3">
                  <h3 className="text-lg font-bold text-[#1A1F28]">{cs.business}</h3>
                  <span className="text-sm text-[#64707C]">{cs.meta}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#4C5A67]">
                  <span className="font-semibold text-[#1A1F28]">Ситуация: </span>
                  {cs.situation}
                </p>
                <div className="mt-4 space-y-1.5">
                  <p className="text-sm font-semibold text-[#1A1F28]">Что изменили:</p>
                  <ul className="space-y-1.5">
                    {cs.changes.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-sm text-[#4C5A67]">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#C15C32]" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-5 flex flex-wrap gap-6 rounded-xl bg-[#F8F4EF] p-4 sm:gap-8">
                  {cs.results.map((r) => (
                    <div key={r.label}>
                      <p className="text-xs text-[#64707C]">{r.label}</p>
                      <p className="mt-0.5 text-sm text-[#9AA5B0] line-through">{r.before}</p>
                      <p className="text-2xl font-bold text-[#1B5E38]">{r.after}</p>
                      <p className="text-xs font-semibold text-[#1B5E38]">{r.delta}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust Block ── */}
      <section className="py-12 sm:py-16">
        <div className={shell}>
          <div className="rounded-2xl bg-[#F0E8DF] p-8 sm:p-10">
            <p className="text-3xl font-bold text-[#1A1F28] sm:text-4xl">Это не продажа.</p>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#4C5A67]">
              На звонке разбираем вашу ситуацию честно: где теряются деньги, что
              мешает расти конверсии, что в трекинге даёт неправильную картину.
              После — присылаем PDF с приоритетами.
            </p>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed text-[#4C5A67]">
              Хотите работать с нами дальше — хорошо. Не хотите — план остаётся
              у вас и подходит для внедрения с любой командой.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button type="button" onClick={scrollToForm} className={primaryBtn}>
                Записаться бесплатно
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <a
                href="https://wa.me/420705729502"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[#64707C] underline underline-offset-4 decoration-[#C8BDB4] transition-colors hover:text-[#C15C32] hover:decoration-[#C15C32]"
              >
                или напишите в WhatsApp
              </a>
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
                  <ArrowRight className="h-4 w-4 flex-shrink-0 text-[#C15C32] transition-transform group-open:rotate-90" />
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
      <section className="py-12 pb-20 sm:py-16 sm:pb-24">
        <div className={shell}>
          <div className="rounded-2xl border border-[#E0D4C8] bg-[#F0E8DF] p-8 text-center sm:p-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#1A1F28] sm:text-4xl">
              20 минут, чтобы понять,{" "}
              <span className="text-[#C15C32]">где теряются заявки</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-[#4C5A67]">
              Бесплатный разбор рекламы, лендинга и трекинга. PDF с
              приоритетами после звонка. Без обязательств.
            </p>
            <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <button type="button" onClick={scrollToForm} className={primaryBtn}>
                Записаться бесплатно
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <a
                href="https://wa.me/420705729502"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[#64707C] underline underline-offset-4 decoration-[#C8BDB4] transition-colors hover:text-[#C15C32] hover:decoration-[#C15C32]"
              >
                или напишите в WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
