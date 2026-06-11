"use client";

import {
  ArrowRight,
  Check,
  CheckCircle2,
  Clock3,
  MapPin,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";
import { useLocale } from "next-intl";
import { useMemo, useState } from "react";
import { HONEYPOT_FIELD, useHoneypot } from "@/components/ui/honeypot";
import { Link } from "@/i18n/routing";

type FormValues = {
  name: string;
  websiteOrProfile: string;
  monthlyBudget: string;
  email: string;
  consent: boolean;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

type CaseStudy = {
  niche: string;
  timeframe: string;
  budget: string;
  problem: string;
  changes: string[];
  result: string[];
};

const painPoints = [
  "Тратите 40 000–150 000 CZK в месяц, а CPL/CPA прыгает на 30–50% от недели к неделе.",
  "В CRM лидов больше, чем в GA4, и непонятно, каким цифрам доверять.",
  "Meta показывает «много лидов», но отдел продаж отбраковывает половину.",
  "Google Search съедает бюджет на общие запросы вместо коммерческого спроса.",
  "Лендинг получает трафик, но конверсия 1–2% не растет месяцами.",
];

const auditDeliverables = [
  {
    title: "PDF-аудит 12–18 страниц",
    description:
      "Приоритеты P1/P2/P3, ожидаемый эффект и конкретные действия на 30 дней.",
  },
  {
    title: "Tracking map",
    description:
      "Карта событий для GA4 + GTM + Meta CAPI с точками потерь воронки.",
  },
  {
    title: "Разбор воронки",
    description:
      "Источник → клик → лид → квалификация → продажа с узкими местами по шагам.",
  },
  {
    title: "Фиксы лендинга",
    description:
      "5–10 быстрых правок и 2 A/B-гипотезы для роста конверсии без редизайна.",
  },
  {
    title: "План структуры рекламы",
    description:
      "Кампании, бюджеты, аудитории, минус-слова и креативные углы под CZ рынок.",
  },
  {
    title: "Backlog экспериментов",
    description: "Очередь тестов по неделям с KPI-контролем на 2/4/8 неделе.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Заявка и мини-бриф",
    description:
      "Оставляете 4 поля формы. Мы фиксируем нишу, бюджет и текущую ситуацию.",
    timing: "5 минут",
  },
  {
    number: "02",
    title: "Аудит за 48 часов",
    description:
      "Проверяем рекламу, посадочную, аналитику и логику распределения бюджета.",
    timing: "до 48 часов",
  },
  {
    number: "03",
    title: "20-мин разбор + план",
    description:
      "На звонке показываем точки роста и отправляем PDF с планом в течение 24 часов.",
    timing: "20 минут + 24 часа",
  },
];

const caseStudies: CaseStudy[] = [
  {
    niche: "Салон лазерной эпиляции, Прага 3",
    timeframe: "45 дней",
    budget: "55 000 CZK/мес (Meta Ads)",
    problem:
      "CPA лида 1 420 CZK, 38 лидов/мес, часть событий терялась после ограничений iOS.",
    changes: [
      "Настроили Meta CAPI и дедупликацию событий.",
      "Пересобрали структуру lead-кампаний.",
      "Обновили оффер и блоки доверия на лендинге.",
    ],
    result: [
      "CPA: 1 420 → 820 CZK (-42%)",
      "Лиды: 38 → 71 в месяц (+87%)",
      "Стоимость записи: 2 630 → 1 540 CZK",
    ],
  },
  {
    niche: "Клининг-сервис, Прага",
    timeframe: "60 дней",
    budget: "80 000 CZK/мес (Google Ads)",
    problem:
      "Дорогие и нерелевантные звонки, отсутствовал нормальный call-tracking, CPL 1 950 CZK.",
    changes: [
      "Поставили call-tracking через GA4/GTM.",
      "Разделили Search по услугам и районам.",
      "Добавили минус-слова и улучшили посадочные.",
    ],
    result: [
      "Квалифицированные лиды: 29 → 54/мес (+86%)",
      "CPL: 1 950 → 1 130 CZK (-42%)",
      "Нерелевантные звонки: 34% → 12%",
    ],
  },
  {
    niche: "E-commerce косметики, Чехия",
    timeframe: "30 дней",
    budget: "120 000 CZK/мес (Meta + Shopping)",
    problem:
      "ROAS 1.8, дубли Purchase-событий, решения принимались по искаженной аналитике.",
    changes: [
      "Перешли на server-side tracking.",
      "Починили value/currency и дедупликацию Purchase.",
      "Сегментировали фид по марже и оптимизировали PDP/checkout.",
    ],
    result: [
      "ROAS: 1.8 → 3.1",
      "CPA заказа: 520 → 360 CZK (-31%)",
      "Выручка: +72% при росте расхода только на +18%",
    ],
  },
];

const testimonials = [
  {
    name: "Марина К.",
    role: "Владелица студии эстетики",
    quote:
      "Впервые увидела нормальную картину по цифрам. После правок из аудита CPA начал снижаться уже в первый месяц.",
  },
  {
    name: "Олег П.",
    role: "Сооснователь клининг-сервиса",
    quote:
      "Раньше спорили с подрядчиком, потому что цифры везде разные. Теперь есть единый дашборд и четкий контроль по неделям.",
  },
  {
    name: "Ірина Ш.",
    role: "Owner e-commerce бренда",
    quote:
      "Главная ценность — навели порядок в трекинге. До этого ROAS был «на глаз», сейчас принимаем решения по фактам.",
  },
  {
    name: "Дмитрий Л.",
    role: "Управляющий стоматологией",
    quote:
      "Понравилось, что без воды: список конкретных действий, сроки и понятный приоритет.",
  },
  {
    name: "Анна Б.",
    role: "Владелица языковой школы",
    quote:
      "После изменения структуры кампаний и посадочной лиды стали стабильнее и качественнее.",
  },
];

const trustSignals = [
  "Google Ads Certified (Search + Measurement)",
  "GA4 + GTM экспертная настройка",
  "Server-side tracking + Meta CAPI",
  "Прозрачный weekly KPI dashboard",
];

const faqItems = [
  {
    q: "Подойдет ли аудит, если бюджет меньше 30 000 CZK/мес?",
    a: "Подойдет, если нужен порядок в воронке и аналитике. Но для устойчивого тестирования гипотез комфортный уровень обычно от 40 000 CZK/мес.",
  },
  {
    q: "Вы работаете только с Прагой?",
    a: "Основной фокус — Прага, но ведем проекты по всей Чехии. Созвоны, аудит и внедрение проходят полностью онлайн.",
  },
  {
    q: "Нужны ли доступы к кабинетам?",
    a: "Для точного аудита желательно read-only доступ к Google Ads, Meta Ads, GA4, GTM и CRM. Если доступов нет, начинаем с внешнего аудита посадочной и структуры.",
  },
  {
    q: "Можно взять аудит без дальнейшего ведения?",
    a: "Да. Аудит — самостоятельная услуга. Вы получаете план и можете внедрять его своей командой или текущим подрядчиком.",
  },
  {
    q: "Когда виден первый результат после внедрения?",
    a: "Обычно первые изменения по CPL/CPA видны на 2–4 неделе. Стабильный тренд формируется в диапазоне 4–8 недель.",
  },
  {
    q: "Что, если трекинг не настроен вообще?",
    a: "Это частая ситуация. В Growth Audit вы получите карту событий, приоритеты и порядок внедрения, чтобы данные стали пригодны для решений.",
  },
  {
    q: "Вы работаете на русском/украинском и чешском?",
    a: "Да. Мы адаптируем креативы и офферы под язык аудитории и конкретный регион в Чехии.",
  },
  {
    q: "Есть ли договор и фактура для s.r.o./OSVČ?",
    a: "Да, работаем официально: договор, счет, отчетность по KPI и прозрачная логика изменений.",
  },
  {
    q: "Если у меня уже есть агентство, вы все равно можете сделать аудит?",
    a: "Да. Это формат second opinion без конфликта: независимая диагностика, зоны риска и точки роста.",
  },
];

const slotsLeft = 6;

export default function ExperimentalLPClient() {
  const locale = useLocale() as "ru" | "cs";
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
  const [wantsSamplePdf, setWantsSamplePdf] = useState(false);
  const honeypot = useHoneypot();

  const emailRegex = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/, []);

  const scrollToForm = (prefillSamplePdf = false) => {
    if (prefillSamplePdf) setWantsSamplePdf(true);
    document
      .getElementById("audit-form")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const validateForm = () => {
    const nextErrors: FormErrors = {};
    if (!values.name.trim()) nextErrors.name = "Укажите ваше имя";
    if (!values.websiteOrProfile.trim())
      nextErrors.websiteOrProfile = "Укажите сайт или Instagram";
    if (!values.monthlyBudget.trim())
      nextErrors.monthlyBudget = "Укажите рекламный бюджет";
    if (!values.email.trim() || !emailRegex.test(values.email.trim()))
      nextErrors.email = "Укажите корректный email";
    if (!values.consent)
      nextErrors.consent = "Нужно согласие на обработку данных";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const submitLead = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError("");
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      const leadId = crypto.randomUUID();
      const response = await fetch("/api/webhook/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "growth-audit-experimental",
          page_locale: locale,
          reply_language: locale === "cs" ? "czech" : undefined,
          lead_id: leadId,
          source: "lp_experimental",
          landing_page_type: "experimental",
          name: values.name.trim(),
          email: values.email.trim(),
          websiteOrProfile: values.websiteOrProfile.trim(),
          monthlyBudget: values.monthlyBudget.trim(),
          wantsSamplePdf,
          service: "Growth Audit",
          value: 4900,
          currency: "CZK",
          consent_given: true,
          timestamp: new Date().toISOString(),
          [HONEYPOT_FIELD]: honeypot.value(),
        }),
      });

      if (!response.ok) {
        const details = await response
          .json()
          .catch(() => ({ error: "Ошибка отправки формы" }));
        throw new Error(details.error || "Ошибка отправки формы");
      }

      setSubmitSuccess(true);
      setValues({
        name: "",
        websiteOrProfile: "",
        monthlyBudget: "",
        email: "",
        consent: false,
      });
      setWantsSamplePdf(false);
      setErrors({});
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Не удалось отправить заявку. Попробуйте снова.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F5F5F7] text-[#1A1A1A]">
      {/* Dot grid background */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#d1d5db 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10">
        {/* Header */}
        <header className="sticky top-0 z-40 border-b border-[#1A1A1A]/5 bg-white/80 backdrop-blur-md">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between gap-3">
            <Link
              href="/"
              className="text-lg font-bold tracking-tight text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Halo<span className="text-[#FF3366]">Agency</span>
            </Link>
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="https://wa.me/420705729502"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-[#1A1A1A]/10 bg-white px-3 py-1.5 text-xs font-medium text-[#1A1A1A]/60 transition hover:border-[#FF3366] hover:text-[#FF3366] sm:text-sm"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href="tel:+420705729502"
                className="hidden items-center gap-1.5 rounded-full border border-[#1A1A1A]/10 bg-white px-3 py-1.5 text-sm font-medium text-[#1A1A1A]/60 transition hover:border-[#FF3366] hover:text-[#FF3366] sm:inline-flex"
              >
                <PhoneCall className="h-4 w-4" />
                +420 705 729 502
              </a>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="relative py-14 sm:py-16 md:py-20 z-10">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start relative z-10">
            <div className="space-y-6">
              <p className="inline-flex items-center gap-2 rounded-full border border-[#1A1A1A]/10 bg-white px-4 py-2 text-sm font-medium text-[#1A1A1A]/60 shadow-sm">
                <MapPin className="h-4 w-4 text-[#FF3366]" />
                Performance marketing + tracking для SMB в Праге и по Чехии
              </p>
              <div className="space-y-4">
                <h1
                  className="max-w-xl text-4xl font-extrabold tracking-tight text-[#1A1A1A] sm:text-5xl lg:leading-[1.1]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Реклама должна давать стабильные заявки, а не{" "}
                  <span className="text-[#1A1A1A]/30 italic">
                    хаос в цифрах.
                  </span>
                </h1>
                <p className="max-w-xl text-lg leading-relaxed text-[#1A1A1A]/60">
                  На 20-мин{" "}
                  <span className="text-[#1A1A1A] font-medium">
                    Growth Audit Call
                  </span>{" "}
                  покажем, где вы теряете деньги: в рекламе, лендинге или
                  трекинге. После звонка получите внедряемый план на 30 дней.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { value: "90+", label: "аудитов по CZ" },
                  { value: "-28%", label: "среднее снижение CPA за 60 дней" },
                  { value: "< 2 ч", label: "ответ в WhatsApp" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white border border-[#1A1A1A]/5 rounded-2xl px-4 py-3 flex flex-col justify-center shadow-sm"
                  >
                    <span className="text-lg font-extrabold text-[#FF3366]">
                      {stat.value}
                    </span>
                    <span className="text-xs font-medium text-[#1A1A1A]/40 mt-0.5">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => scrollToForm(false)}
                  className="inline-flex items-center justify-center rounded-full bg-[#FF3366] px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#FF3366]/90 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:shadow-[0px_0px_0px_0px_rgba(26,26,26,1)]"
                >
                  Забронировать 20-мин Growth Audit Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollToForm(true)}
                  className="inline-flex items-center justify-center rounded-full border border-[#1A1A1A]/10 bg-white px-6 py-3 text-sm font-bold text-[#1A1A1A] transition hover:-translate-y-0.5 hover:border-[#FF3366] hover:text-[#FF3366]"
                >
                  Получить пример аудита PDF
                </button>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#1A1A1A]/40">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF3366] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF3366]"></span>
                </span>
                На этой неделе открыто{" "}
                <span className="text-[#1A1A1A] font-bold">
                  {slotsLeft} слотов
                </span>{" "}
                на аудит.
              </div>
            </div>

            {/* Form Card */}
            <div
              id="audit-form"
              className="bg-white border border-[#1A1A1A]/5 rounded-[2rem] p-6 sm:p-8 shadow-sm relative overflow-hidden"
            >
              <h2
                className="text-2xl font-bold text-[#1A1A1A] flex items-center gap-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span className="w-2 h-6 bg-[#FF3366] block rounded-sm"></span>
                Заявка на аудит
              </h2>
              <p className="mt-2 text-sm text-[#1A1A1A]/40">
                4 поля. 20 минут созвона. План на 30 дней.
              </p>

              {submitSuccess && (
                <div className="mt-5 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-700">
                  ✓ Заявка получена. Ожидайте email с вариантами времени (до 2
                  часов).
                </div>
              )}

              {submitError && (
                <div className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600">
                  {submitError}
                </div>
              )}

              <form onSubmit={submitLead} className="mt-6 space-y-4">
                {honeypot.field}
                <div className="space-y-1.5 flex flex-col">
                  <label
                    className="text-xs font-bold tracking-wider text-[#1A1A1A]/40 uppercase"
                    htmlFor="name"
                  >
                    Имя
                  </label>
                  <input
                    id="name"
                    value={values.name}
                    onChange={(e) =>
                      setValues((p) => ({ ...p, name: e.target.value }))
                    }
                    className="h-11 w-full rounded-xl border border-[#1A1A1A]/5 bg-[#F5F5F7] px-3 text-sm text-[#1A1A1A] outline-none transition placeholder:text-[#1A1A1A]/30 focus:border-[#FF3366] focus:bg-white"
                    placeholder="Ваше имя"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-1.5 flex flex-col">
                  <label
                    className="text-xs font-bold tracking-wider text-[#1A1A1A]/40 uppercase"
                    htmlFor="website"
                  >
                    Сайт или Instagram
                  </label>
                  <input
                    id="website"
                    value={values.websiteOrProfile}
                    onChange={(e) =>
                      setValues((p) => ({
                        ...p,
                        websiteOrProfile: e.target.value,
                      }))
                    }
                    className="h-11 w-full rounded-xl border border-[#1A1A1A]/5 bg-[#F5F5F7] px-3 text-sm text-[#1A1A1A] outline-none transition placeholder:text-[#1A1A1A]/30 focus:border-[#FF3366] focus:bg-white"
                    placeholder="https://... | @..."
                  />
                  {errors.websiteOrProfile && (
                    <p className="text-xs text-red-500">
                      {errors.websiteOrProfile}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5 flex flex-col">
                  <label
                    className="text-xs font-bold tracking-wider text-[#1A1A1A]/40 uppercase"
                    htmlFor="budget"
                  >
                    Рекламный бюджет (CZK/мес)
                  </label>
                  <input
                    id="budget"
                    value={values.monthlyBudget}
                    onChange={(e) =>
                      setValues((p) => ({
                        ...p,
                        monthlyBudget: e.target.value,
                      }))
                    }
                    className="h-11 w-full rounded-xl border border-[#1A1A1A]/5 bg-[#F5F5F7] px-3 text-sm text-[#1A1A1A] outline-none transition placeholder:text-[#1A1A1A]/30 focus:border-[#FF3366] focus:bg-white"
                    placeholder="60 000"
                  />
                  {errors.monthlyBudget && (
                    <p className="text-xs text-red-500">
                      {errors.monthlyBudget}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5 flex flex-col">
                  <label
                    className="text-xs font-bold tracking-wider text-[#1A1A1A]/40 uppercase"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={values.email}
                    onChange={(e) =>
                      setValues((p) => ({ ...p, email: e.target.value }))
                    }
                    className="h-11 w-full rounded-xl border border-[#1A1A1A]/5 bg-[#F5F5F7] px-3 text-sm text-[#1A1A1A] outline-none transition placeholder:text-[#1A1A1A]/30 focus:border-[#FF3366] focus:bg-white"
                    placeholder="you@company.com"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500">{errors.email}</p>
                  )}
                </div>

                <label className="flex items-start gap-3 pt-2 text-xs text-[#1A1A1A]/40">
                  <input
                    type="checkbox"
                    checked={values.consent}
                    onChange={(e) =>
                      setValues((p) => ({ ...p, consent: e.target.checked }))
                    }
                    className="mt-0.5 h-4 w-4 rounded border-[#1A1A1A]/10 bg-[#F5F5F7] accent-[#FF3366]"
                  />
                  <span>
                    Согласие на обработку данных (только контакт по аудиту)
                  </span>
                </label>
                {errors.consent && (
                  <p className="text-xs text-red-500">{errors.consent}</p>
                )}

                <label className="flex items-start gap-3 text-xs text-[#1A1A1A]/60">
                  <input
                    type="checkbox"
                    checked={wantsSamplePdf}
                    onChange={(e) => setWantsSamplePdf(e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-[#1A1A1A]/10 bg-[#F5F5F7] accent-[#FF3366]"
                  />
                  <span className="text-[#1A1A1A] font-medium">
                    Прислать пример аудита PDF на email
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex h-12 w-full mt-2 items-center justify-center rounded-xl bg-[#FF3366] font-bold text-sm text-white transition hover:bg-[#FF3366]/90 disabled:cursor-not-allowed disabled:opacity-60 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:translate-y-1 hover:shadow-[0px_0px_0px_0px_rgba(26,26,26,1)]"
                >
                  {isSubmitting ? "Отправляем..." : "Забронировать аудит →"}
                </button>
              </form>

              <div className="mt-5 rounded-xl border border-[#1A1A1A]/5 bg-[#F5F5F7] p-3 text-xs text-[#1A1A1A]/40 flex items-center gap-2">
                <span className="block w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                Быстрая связь:{" "}
                <a
                  href="https://wa.me/420705729502"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF3366] underline underline-offset-4 hover:text-[#FF3366]/80"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-10 sm:py-14">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="bg-white border border-[#1A1A1A]/5 rounded-[2rem] p-6 sm:p-8 shadow-sm">
              <h2
                className="text-3xl font-extrabold text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Если это звучит знакомо,{" "}
                <span className="text-[#FF3366]">аудит нужен сейчас</span>
              </h2>
              <p className="mt-3 max-w-3xl text-[#1A1A1A]/60">
                Типичный кейс для бизнеса в Праге и по Чехии: реклама уже идет,
                но результат нестабилен и трудно масштабируется.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {painPoints.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 rounded-xl border border-[#1A1A1A]/5 bg-[#F5F5F7] p-4 text-sm leading-relaxed text-[#1A1A1A]/70 transition-colors hover:bg-white hover:border-[#FF3366]/30"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#FF3366]" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <button
                  type="button"
                  onClick={() => scrollToForm(false)}
                  className="inline-flex items-center justify-center rounded-full bg-[#FF3366] px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#FF3366]/90 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:shadow-[0px_0px_0px_0px_rgba(26,26,26,1)]"
                >
                  Показать, где теряются заявки
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-10 sm:py-14">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="space-y-3">
              <h2
                className="text-3xl font-extrabold text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Что вы получаете в Growth Audit
              </h2>
              <p className="max-w-3xl text-[#1A1A1A]/60">
                Это не «диагностический созвон», а рабочий пакет с приоритетами
                и действиями, которые можно запускать сразу.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {auditDeliverables.map((item) => (
                <article
                  key={item.title}
                  className="bg-white border border-[#1A1A1A]/5 rounded-[2rem] p-5 shadow-sm hover:border-[#FF3366]/30 transition-colors"
                >
                  <h3 className="text-base font-bold text-[#1A1A1A] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#1A1A1A]/60">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => scrollToForm(false)}
                className="inline-flex items-center justify-center rounded-full bg-[#FF3366] px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#FF3366]/90 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:shadow-[0px_0px_0px_0px_rgba(26,26,26,1)]"
              >
                Хочу такой аудит
              </button>
              <button
                type="button"
                onClick={() => scrollToForm(true)}
                className="inline-flex items-center justify-center rounded-full border border-[#1A1A1A]/10 bg-white px-6 py-3 text-sm font-bold text-[#1A1A1A] transition hover:-translate-y-0.5 hover:border-[#FF3366] hover:text-[#FF3366]"
              >
                Прислать пример PDF
              </button>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-10 sm:py-14">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="bg-white border border-[#1A1A1A]/5 rounded-[2rem] p-6 sm:p-8 shadow-sm">
              <h2
                className="text-3xl font-extrabold text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Как это работает
              </h2>
              <div className="mt-6 grid gap-4 lg:grid-cols-3">
                {processSteps.map((step) => (
                  <article
                    key={step.number}
                    className="rounded-2xl border border-[#1A1A1A]/5 bg-[#F5F5F7] p-5 relative overflow-hidden"
                  >
                    <div className="absolute -right-4 -top-6 text-6xl font-extrabold text-[#1A1A1A]/5 select-none pointer-events-none">
                      {step.number}
                    </div>
                    <p className="text-xs font-bold text-[#FF3366] tracking-widest uppercase">
                      Шаг {step.number}
                    </p>
                    <h3 className="mt-2 text-lg font-bold text-[#1A1A1A]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#1A1A1A]/60">
                      {step.description}
                    </p>
                    <div className="mt-4 pt-4 border-t border-[#1A1A1A]/5 flex items-center gap-1.5 text-xs text-[#1A1A1A]/40">
                      <Clock3 className="h-3.5 w-3.5 text-[#FF3366]" />
                      {step.timing}
                    </div>
                  </article>
                ))}
              </div>
              <p className="mt-6 text-sm text-[#1A1A1A]/40">
                После аудита вы можете внедрять с нами или со своей командой.
                Без обязательного долгого контракта.
              </p>
              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => scrollToForm(false)}
                  className="inline-flex items-center justify-center rounded-full bg-[#FF3366] px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#FF3366]/90 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:shadow-[0px_0px_0px_0px_rgba(26,26,26,1)]"
                >
                  Выбрать время для аудита
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies + Testimonials */}
        <section className="py-10 sm:py-14">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl font-extrabold text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Результаты клиентов
            </h2>
            <p className="mt-3 max-w-3xl text-[#1A1A1A]/60">
              Примеры из ниш, где важны контролируемый CPL/CPA и прозрачный
              трекинг, а не «просто больше трафика».
            </p>

            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {caseStudies.map((study) => (
                <article
                  key={study.niche}
                  className="bg-white border border-[#1A1A1A]/5 rounded-[2rem] p-5 shadow-sm hover:border-[#FF3366]/30 transition-all"
                >
                  <p className="text-lg font-bold text-[#1A1A1A]">
                    {study.niche}
                  </p>
                  <p className="mt-1 text-xs text-[#1A1A1A]/40">
                    {study.budget} <span className="text-[#FF3366]">|</span>{" "}
                    {study.timeframe}
                  </p>
                  <div className="mt-4 p-3 bg-red-50 border border-red-100 rounded-xl text-sm leading-relaxed text-[#1A1A1A]/70">
                    <span className="text-red-500 font-bold block mb-1">
                      Проблема:
                    </span>
                    {study.problem}
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-[#1A1A1A]/60">
                    <p className="text-[#FF3366] font-bold">Что поменяли:</p>
                    {study.changes.map((change) => (
                      <p key={change} className="flex gap-2">
                        <span className="mt-0.5 text-[#FF3366]">→</span>
                        <span>{change}</span>
                      </p>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-green-50 border border-green-100 rounded-xl space-y-2 text-sm">
                    <p className="text-green-600 font-bold">Результат:</p>
                    {study.result.map((result) => (
                      <p key={result} className="flex gap-2 items-start">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                        <span className="font-medium text-[#1A1A1A]">
                          {result}
                        </span>
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <article
                  key={testimonial.name}
                  className="rounded-2xl border border-[#1A1A1A]/5 bg-white p-5 relative shadow-sm"
                >
                  <p className="text-sm leading-relaxed text-[#1A1A1A]/70 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-[#FF3366]/10 border border-[#FF3366]/20 flex items-center justify-center font-bold text-[#FF3366]">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#1A1A1A]">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-[#1A1A1A]/40">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-7 flex justify-center">
              <button
                type="button"
                onClick={() => scrollToForm(false)}
                className="inline-flex items-center justify-center rounded-full bg-[#FF3366] px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#FF3366]/90 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:shadow-[0px_0px_0px_0px_rgba(26,26,26,1)]"
              >
                Разобрать мой проект
              </button>
            </div>
          </div>
        </section>

        {/* Why HaloAgency + Trust */}
        <section className="py-10 sm:py-14">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="bg-white border border-[#1A1A1A]/5 rounded-[2rem] grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] shadow-sm">
              <div>
                <h2
                  className="text-3xl font-extrabold text-[#1A1A1A]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Почему HaloAgency
                </h2>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[#1A1A1A]/60">
                  <li className="flex gap-3">
                    <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#FF3366]" />
                    <span>
                      <strong className="text-[#1A1A1A]">
                        Tracking-first:
                      </strong>{" "}
                      сначала чиним данные, затем масштабируем бюджет.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#FF3366]" />
                    <span>
                      <strong className="text-[#1A1A1A]">
                        Фокус на бизнес-метриках:
                      </strong>{" "}
                      CPL/CPA/ROAS и качество лида.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#FF3366]" />
                    <span>
                      <strong className="text-[#1A1A1A]">Скорость:</strong>{" "}
                      первые внедрения запускаются в течение 72 часов после
                      аудита.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#FF3366]" />
                    <span>
                      <strong className="text-[#1A1A1A]">
                        Локальная экспертиза:
                      </strong>{" "}
                      сезонность, гео и креативы под CZ-аудиторию.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border border-[#1A1A1A]/5 bg-[#F5F5F7] p-5">
                <p className="text-xs font-bold text-[#FF3366] tracking-widest uppercase">
                  Сертификации
                </p>
                <div className="mt-4 grid gap-2">
                  {trustSignals.map((signal) => (
                    <div
                      key={signal}
                      className="flex items-center gap-2 rounded-xl border border-[#1A1A1A]/5 bg-white px-3 py-2 text-sm text-[#1A1A1A]/70"
                    >
                      <CheckCircle2 className="h-3 w-3 text-[#FF3366] flex-shrink-0" />
                      {signal}
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => scrollToForm(false)}
                  className="inline-flex w-full mt-5 items-center justify-center rounded-full bg-[#FF3366] px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#FF3366]/90 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:shadow-[0px_0px_0px_0px_rgba(26,26,26,1)]"
                >
                  Записаться на аудит
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Offer + Guarantee */}
        <section className="py-10 sm:py-14">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="bg-white border-2 border-[#FF3366]/20 rounded-[2rem] p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                <h2
                  className="text-3xl font-extrabold text-[#1A1A1A]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Оффер и Гарантия
                </h2>
                <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-sm font-bold text-green-600">
                  <ShieldCheck className="h-4 w-4" />
                  100% Refund Guarantee
                </div>
              </div>
              <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
                <div className="rounded-2xl border border-[#1A1A1A]/5 bg-[#F5F5F7] p-6 flex flex-col justify-center">
                  <p className="text-xs font-bold text-[#FF3366] tracking-widest uppercase">
                    Growth Audit
                  </p>
                  <p className="mt-2 text-4xl font-extrabold text-[#1A1A1A]">
                    4 900 CZK
                  </p>
                  <p className="mt-3 text-sm text-[#1A1A1A]/60 leading-relaxed border-t border-[#1A1A1A]/5 pt-3">
                    Полный аудит рекламы + лендинга + трекинга, 20-мин разбор и
                    PDF-план на 30 дней.
                  </p>
                </div>
                <div className="space-y-4 text-sm leading-relaxed text-[#1A1A1A]/60 flex flex-col justify-center">
                  <p>
                    <span className="text-[#FF3366] font-bold">
                      Ежемесячное ведение:
                    </span>{" "}
                    от 35 000 CZK + рекламный бюджет.
                  </p>
                  <p>
                    Аудит платный, потому что это 4–5 часов senior-анализа, а не
                    «продающий звонок».
                  </p>
                  <p className="text-[#1A1A1A] p-3 rounded-xl border border-green-200 bg-green-50">
                    <span className="text-green-600 font-bold block mb-1">
                      Гарантия:
                    </span>
                    Если на звонке вы не получаете минимум 3 конкретные точки
                    роста с цифрами, возвращаем 100% стоимости аудита прямо на
                    звонке.
                  </p>
                  <p className="text-[#1A1A1A]/40 italic">
                    * Если стартуем ведение в течение 14 дней после аудита, 4
                    900 CZK засчитываются в первый счет.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => scrollToForm(false)}
                      className="inline-flex items-center justify-center rounded-full bg-[#FF3366] px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#FF3366]/90 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:shadow-[0px_0px_0px_0px_rgba(26,26,26,1)]"
                    >
                      Забронировать аудит
                    </button>
                    <button
                      type="button"
                      onClick={() => scrollToForm(true)}
                      className="inline-flex items-center justify-center rounded-full border border-[#1A1A1A]/10 bg-white px-6 py-3 text-sm font-bold text-[#1A1A1A] transition hover:-translate-y-0.5 hover:border-[#FF3366] hover:text-[#FF3366]"
                    >
                      Пример PDF
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-10 sm:py-14">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl font-extrabold text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Частые вопросы
            </h2>
            <div className="mt-6 space-y-3">
              {faqItems.map((item, index) => (
                <details
                  key={item.q}
                  open={index === 0}
                  className="group overflow-hidden rounded-2xl border border-[#1A1A1A]/5 bg-white shadow-sm"
                >
                  <summary className="cursor-pointer list-none px-5 py-4 text-sm font-bold text-[#1A1A1A] marker:content-none transition-colors group-hover:bg-[#F5F5F7]">
                    <span className="flex items-center justify-between gap-3">
                      {item.q}
                      <ArrowRight className="h-4 w-4 shrink-0 text-[#FF3366] transition group-open:rotate-90" />
                    </span>
                  </summary>
                  <div className="border-t border-[#1A1A1A]/5 px-5 py-4 text-sm leading-relaxed text-[#1A1A1A]/60 bg-[#F5F5F7]">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="pb-20 pt-10 sm:pb-24 sm:pt-14">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-[#FF3366]/20 bg-white p-6 sm:p-9 text-center shadow-sm relative z-10">
              <h2
                className="text-3xl font-extrabold text-[#1A1A1A] mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span className="text-[#FF3366]">20 минут</span>, чтобы найти
                точки утечки бюджета
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-[#1A1A1A]/60">
                Запишитесь на Growth Audit Call и получите внедряемый 30-дневный
                план уже на этой неделе. WhatsApp-ответ в рабочее время до 2
                часов.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => scrollToForm(false)}
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-[#FF3366] px-8 py-4 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#FF3366]/90 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:shadow-[0px_0px_0px_0px_rgba(26,26,26,1)]"
                >
                  Забронировать Growth Audit Call
                </button>
                <button
                  type="button"
                  onClick={() => scrollToForm(true)}
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-[#1A1A1A]/10 bg-white px-8 py-4 text-base font-bold text-[#1A1A1A] transition hover:-translate-y-0.5 hover:border-[#FF3366] hover:text-[#FF3366]"
                >
                  Получить пример PDF
                </button>
              </div>
              <div className="mt-6 flex justify-center items-center gap-2 text-sm text-[#1A1A1A]/40">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF3366] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF3366]"></span>
                </span>
                На этой неделе:{" "}
                <span className="text-[#1A1A1A] font-bold">
                  {slotsLeft} слотов
                </span>
                .
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
