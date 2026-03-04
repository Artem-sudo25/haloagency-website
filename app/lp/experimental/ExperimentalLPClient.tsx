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
import Link from "next/link";
import { useMemo, useState } from "react";

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

const sectionShell = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";
const primaryButtonClass =
  "inline-flex items-center justify-center rounded-full bg-[#C56A3A] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#B65D2F]";
const secondaryButtonClass =
  "inline-flex items-center justify-center rounded-full border border-[#D9CFC2] bg-white px-6 py-3 text-sm font-semibold text-[#3D4852] transition hover:-translate-y-0.5 hover:border-[#C56A3A] hover:text-[#9C4C22]";
const cardClass =
  "rounded-3xl border border-[#E8E1D8] bg-white shadow-[0_10px_30px_rgba(31,41,51,0.08)]";

export default function ExperimentalLPClient() {
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

  const slotsLeft = 6;
  const emailRegex = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/, []);

  const scrollToForm = (prefillSamplePdf = false) => {
    if (prefillSamplePdf) {
      setWantsSamplePdf(true);
    }
    document.getElementById("audit-form")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const validateForm = () => {
    const nextErrors: FormErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = "Укажите ваше имя";
    }
    if (!values.websiteOrProfile.trim()) {
      nextErrors.websiteOrProfile = "Укажите сайт или Instagram";
    }
    if (!values.monthlyBudget.trim()) {
      nextErrors.monthlyBudget = "Укажите рекламный бюджет";
    }
    if (!values.email.trim() || !emailRegex.test(values.email.trim())) {
      nextErrors.email = "Укажите корректный email";
    }
    if (!values.consent) {
      nextErrors.consent = "Нужно согласие на обработку данных";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const submitLead = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError("");

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const leadId = crypto.randomUUID();
      const response = await fetch("/api/webhook/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Webhook-Secret":
            process.env.NEXT_PUBLIC_HALOTRACK_WEBHOOK_SECRET || "",
        },
        body: JSON.stringify({
          type: "growth-audit-experimental",
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
    <main className="min-h-screen bg-[#FCFAF7] text-[#1F2933]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[360px] bg-[radial-gradient(circle_at_top_right,rgba(197,106,58,0.18),transparent_54%)]" />

      <header className="sticky top-0 z-40 border-b border-[#EEE6DB] bg-[#FCFAF7]/95 backdrop-blur">
        <div
          className={`${sectionShell} flex h-16 items-center justify-between gap-3`}
        >
          <Link href="/" className="text-lg font-semibold tracking-tight">
            Halo<span className="text-[#C56A3A]">Agency</span>
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://wa.me/420705729502"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-[#E6DBCC] bg-white px-3 py-1.5 text-xs font-medium text-[#3D4852] transition hover:border-[#C56A3A] hover:text-[#9C4C22] sm:text-sm"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href="tel:+420705729502"
              className="hidden items-center gap-1 rounded-full border border-[#E6DBCC] bg-white px-3 py-1.5 text-sm font-medium text-[#3D4852] transition hover:border-[#C56A3A] hover:text-[#9C4C22] sm:inline-flex"
            >
              <PhoneCall className="h-4 w-4" />
              +420 705 729 502
            </a>
          </div>
        </div>
      </header>

      <section className="relative py-14 sm:py-20">
        <div
          className={`${sectionShell} grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start`}
        >
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-[#5E6A76] shadow-[0_6px_18px_rgba(31,41,51,0.08)]">
              <MapPin className="h-4 w-4 text-[#C56A3A]" />
              Performance marketing + tracking для SMB в Праге и по Чехии
            </p>
            <div className="space-y-4">
              <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-[#1C252E] sm:text-5xl">
                Реклама должна давать стабильные заявки, а не хаос в цифрах.
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-[#4C5A67]">
                На 20-мин Growth Audit Call покажем, где вы теряете деньги: в
                рекламе, лендинге или трекинге. После звонка получите внедряемый
                план на 30 дней.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                "90+ аудитов по CZ",
                "Среднее снижение CPA: -28% за 60 дней",
                "Ответ в WhatsApp до 2 часов",
              ].map((stat) => (
                <div
                  key={stat}
                  className={`${cardClass} px-4 py-3 text-sm font-medium text-[#3F4A55]`}
                >
                  {stat}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => scrollToForm(false)}
                className={primaryButtonClass}
              >
                Забронировать 20-мин Growth Audit Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollToForm(true)}
                className={secondaryButtonClass}
              >
                Получить пример аудита PDF
              </button>
            </div>
            <p className="text-sm text-[#607080]">
              На этой неделе открыто {slotsLeft} слотов на аудит.
            </p>
          </div>

          <div id="audit-form" className={`${cardClass} p-6 sm:p-8`}>
            <h2 className="text-2xl font-semibold text-[#1C252E]">
              Запись на Growth Audit Call
            </h2>
            <p className="mt-2 text-sm text-[#65717D]">
              4 поля, 20 минут созвона и план на 30 дней. Без лишних шагов.
            </p>

            {submitSuccess && (
              <div className="mt-5 rounded-2xl border border-[#DDEAD8] bg-[#F4FAF2] p-4 text-sm text-[#2E5A3A]">
                Заявка отправлена. Мы напишем на указанный email в рабочее время
                (обычно до 2 часов) и предложим время для звонка.
              </div>
            )}

            {submitError && (
              <div className="mt-5 rounded-2xl border border-[#F2D2CC] bg-[#FFF5F2] p-4 text-sm text-[#9C3C2E]">
                {submitError}
              </div>
            )}

            <form onSubmit={submitLead} className="mt-5 space-y-4">
              <div className="space-y-1.5">
                <label
                  className="text-sm font-medium text-[#364350]"
                  htmlFor="name"
                >
                  Имя
                </label>
                <input
                  id="name"
                  value={values.name}
                  onChange={(event) =>
                    setValues((prev) => ({ ...prev, name: event.target.value }))
                  }
                  className="h-11 w-full rounded-xl border border-[#DED4C8] bg-[#FFFEFC] px-3 text-sm text-[#23303C] outline-none transition placeholder:text-[#94A0AB] focus:border-[#C56A3A]"
                  placeholder="Например, Ирина"
                />
                {errors.name && (
                  <p className="text-xs text-[#A84E2D]">{errors.name}</p>
                )}
              </div>

              <div className="space-y-1.5">
                <label
                  className="text-sm font-medium text-[#364350]"
                  htmlFor="website"
                >
                  Сайт или Instagram
                </label>
                <input
                  id="website"
                  value={values.websiteOrProfile}
                  onChange={(event) =>
                    setValues((prev) => ({
                      ...prev,
                      websiteOrProfile: event.target.value,
                    }))
                  }
                  className="h-11 w-full rounded-xl border border-[#DED4C8] bg-[#FFFEFC] px-3 text-sm text-[#23303C] outline-none transition placeholder:text-[#94A0AB] focus:border-[#C56A3A]"
                  placeholder="https://... или @..."
                />
                {errors.websiteOrProfile && (
                  <p className="text-xs text-[#A84E2D]">
                    {errors.websiteOrProfile}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <label
                  className="text-sm font-medium text-[#364350]"
                  htmlFor="budget"
                >
                  Рекламный бюджет в месяц (CZK)
                </label>
                <input
                  id="budget"
                  value={values.monthlyBudget}
                  onChange={(event) =>
                    setValues((prev) => ({
                      ...prev,
                      monthlyBudget: event.target.value,
                    }))
                  }
                  className="h-11 w-full rounded-xl border border-[#DED4C8] bg-[#FFFEFC] px-3 text-sm text-[#23303C] outline-none transition placeholder:text-[#94A0AB] focus:border-[#C56A3A]"
                  placeholder="Например, 60 000"
                />
                {errors.monthlyBudget && (
                  <p className="text-xs text-[#A84E2D]">
                    {errors.monthlyBudget}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <label
                  className="text-sm font-medium text-[#364350]"
                  htmlFor="email"
                >
                  Email для связи
                </label>
                <input
                  id="email"
                  type="email"
                  value={values.email}
                  onChange={(event) =>
                    setValues((prev) => ({
                      ...prev,
                      email: event.target.value,
                    }))
                  }
                  className="h-11 w-full rounded-xl border border-[#DED4C8] bg-[#FFFEFC] px-3 text-sm text-[#23303C] outline-none transition placeholder:text-[#94A0AB] focus:border-[#C56A3A]"
                  placeholder="you@company.com"
                />
                {errors.email && (
                  <p className="text-xs text-[#A84E2D]">{errors.email}</p>
                )}
              </div>

              <label className="flex items-start gap-2 pt-1 text-sm text-[#566473]">
                <input
                  type="checkbox"
                  checked={values.consent}
                  onChange={(event) =>
                    setValues((prev) => ({
                      ...prev,
                      consent: event.target.checked,
                    }))
                  }
                  className="mt-1 h-4 w-4 rounded border-[#D8CCC0] accent-[#C56A3A]"
                />
                <span>
                  Согласен(а) на обработку данных. Без спама и рассылок, только
                  контакт по вашему аудиту.
                </span>
              </label>
              {errors.consent && (
                <p className="text-xs text-[#A84E2D]">{errors.consent}</p>
              )}

              <label className="flex items-start gap-2 text-sm text-[#566473]">
                <input
                  type="checkbox"
                  checked={wantsSamplePdf}
                  onChange={(event) => setWantsSamplePdf(event.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-[#D8CCC0] accent-[#C56A3A]"
                />
                <span>Хочу получить пример аудита PDF на email</span>
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#C56A3A] px-6 text-sm font-semibold text-white transition hover:bg-[#B65D2F] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting
                  ? "Отправляем..."
                  : "Забронировать 20-мин Growth Audit Call"}
              </button>
            </form>

            <div className="mt-4 rounded-2xl border border-[#EAE0D2] bg-[#FFFDF9] p-3 text-sm text-[#5B6874]">
              Нужен быстрый ответ?{" "}
              <a
                href="https://wa.me/420705729502"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#9C4C22] underline decoration-[#D8AF95] underline-offset-4"
              >
                Напишите в WhatsApp
              </a>
              .
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className={sectionShell}>
          <div className={`${cardClass} p-6 sm:p-8`}>
            <h2 className="text-3xl font-semibold text-[#1C252E]">
              Если это звучит знакомо, аудит нужен сейчас
            </h2>
            <p className="mt-3 max-w-3xl text-[#5A6874]">
              Типичный кейс для бизнеса в Праге и по Чехии: реклама уже идет, но
              результат нестабилен и трудно масштабируется.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {painPoints.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-2xl border border-[#EFE5D8] bg-[#FFFEFC] p-4 text-sm leading-relaxed text-[#465461]"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#C56A3A]" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <button
                type="button"
                onClick={() => scrollToForm(false)}
                className={primaryButtonClass}
              >
                Показать, где теряются заявки
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className={sectionShell}>
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold text-[#1C252E]">
                Что вы получаете в Growth Audit
              </h2>
              <p className="max-w-3xl text-[#5A6874]">
                Это не «диагностический созвон», а рабочий пакет с приоритетами
                и действиями, которые можно запускать сразу.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {auditDeliverables.map((item) => (
                <article key={item.title} className={`${cardClass} p-5`}>
                  <p className="text-base font-semibold text-[#1E2A35]">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#5A6874]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => scrollToForm(false)}
                className={primaryButtonClass}
              >
                Хочу такой аудит
              </button>
              <button
                type="button"
                onClick={() => scrollToForm(true)}
                className={secondaryButtonClass}
              >
                Прислать пример PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className={sectionShell}>
          <div className={`${cardClass} p-6 sm:p-8`}>
            <h2 className="text-3xl font-semibold text-[#1C252E]">
              Как это работает: 3 шага
            </h2>
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {processSteps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-2xl border border-[#EFE5D8] bg-[#FFFEFC] p-5"
                >
                  <p className="text-sm font-semibold text-[#A2572F]">
                    {step.number}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-[#23303C]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5A6874]">
                    {step.description}
                  </p>
                  <p className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[#3F4A55]">
                    <Clock3 className="h-4 w-4 text-[#C56A3A]" />
                    {step.timing}
                  </p>
                </article>
              ))}
            </div>
            <p className="mt-6 text-sm text-[#66737F]">
              После аудита вы можете внедрять с нами или со своей командой. Без
              обязательного долгого контракта.
            </p>
            <div className="mt-6">
              <button
                type="button"
                onClick={() => scrollToForm(false)}
                className={primaryButtonClass}
              >
                Выбрать время для аудита
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className={sectionShell}>
          <h2 className="text-3xl font-semibold text-[#1C252E]">
            Доказательства: кейсы и отзывы
          </h2>
          <p className="mt-3 max-w-3xl text-[#5A6874]">
            Примеры из ниш, где важны контролируемый CPL/CPA и прозрачный
            трекинг, а не «просто больше трафика».
          </p>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <article key={study.niche} className={`${cardClass} p-5`}>
                <p className="text-lg font-semibold text-[#1E2A35]">
                  {study.niche}
                </p>
                <p className="mt-1 text-sm text-[#6A7783]">
                  {study.budget} • {study.timeframe}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[#4B5A66]">
                  <span className="font-semibold text-[#2A3743]">
                    Проблема:
                  </span>{" "}
                  {study.problem}
                </p>
                <div className="mt-4 space-y-1.5 text-sm text-[#4B5A66]">
                  <p className="font-semibold text-[#2A3743]">Что поменяли:</p>
                  {study.changes.map((change) => (
                    <p key={change} className="flex gap-2">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#C56A3A]" />
                      <span>{change}</span>
                    </p>
                  ))}
                </div>
                <div className="mt-4 space-y-1.5 text-sm text-[#2D4E38]">
                  <p className="font-semibold text-[#2D4E38]">Результат:</p>
                  {study.result.map((result) => (
                    <p key={result} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#2E7D4B]" />
                      <span>{result}</span>
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className={`${cardClass} p-5`}>
                <p className="text-sm leading-relaxed text-[#43515D]">
                  “{testimonial.quote}”
                </p>
                <p className="mt-4 text-sm font-semibold text-[#1E2A35]">
                  {testimonial.name}
                </p>
                <p className="text-xs text-[#6D7A86]">{testimonial.role}</p>
              </article>
            ))}
          </div>

          <div className="mt-7">
            <button
              type="button"
              onClick={() => scrollToForm(false)}
              className={primaryButtonClass}
            >
              Разобрать мой проект
            </button>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className={sectionShell}>
          <div
            className={`${cardClass} grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr]`}
          >
            <div>
              <h2 className="text-3xl font-semibold text-[#1C252E]">
                Почему HaloAgency
              </h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[#4C5A67]">
                <li className="flex gap-2">
                  <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#C56A3A]" />
                  <span>
                    Tracking-first: сначала чиним данные, затем масштабируем
                    бюджет.
                  </span>
                </li>
                <li className="flex gap-2">
                  <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#C56A3A]" />
                  <span>
                    Фокус на бизнес-метриках: CPL/CPA/ROAS и качество лида.
                  </span>
                </li>
                <li className="flex gap-2">
                  <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#C56A3A]" />
                  <span>
                    Скорость: первые внедрения запускаются в течение 72 часов
                    после аудита.
                  </span>
                </li>
                <li className="flex gap-2">
                  <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#C56A3A]" />
                  <span>
                    Локальная экспертиза Чехии: сезонность, гео и креативы под
                    CZ-аудиторию.
                  </span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[#EFE5D8] bg-[#FFFEFC] p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#8A562C]">
                Trust Signals
              </p>
              <div className="mt-4 grid gap-2">
                {trustSignals.map((signal) => (
                  <div
                    key={signal}
                    className="rounded-xl border border-[#E8DDCF] bg-white px-3 py-2 text-sm text-[#42505D]"
                  >
                    {signal}
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => scrollToForm(false)}
                className={`${primaryButtonClass} mt-5 w-full`}
              >
                Записаться на аудит
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className={sectionShell}>
          <div className={`${cardClass} p-6 sm:p-8`}>
            <h2 className="text-3xl font-semibold text-[#1C252E]">
              Оффер и ценовой ориентир
            </h2>
            <div className="mt-6 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="rounded-2xl border border-[#E7DCCF] bg-[#FFFCF7] p-5">
                <p className="text-sm uppercase tracking-wide text-[#865232]">
                  Growth Audit
                </p>
                <p className="mt-2 text-4xl font-semibold text-[#1E2A35]">
                  4 900 CZK
                </p>
                <p className="mt-2 text-sm text-[#5C6975]">
                  Полный аудит рекламы + лендинга + трекинга, 20-мин разбор и
                  PDF-план на 30 дней.
                </p>
              </div>
              <div className="space-y-3 text-sm leading-relaxed text-[#4C5A67]">
                <p>
                  <span className="font-semibold text-[#26333E]">
                    Типовое ежемесячное ведение:
                  </span>{" "}
                  от 35 000 CZK + рекламный бюджет.
                </p>
                <p>
                  Аудит платный, потому что это 4–5 часов senior-анализа, а не
                  «продающий звонок».
                </p>
                <p>
                  <span className="font-semibold text-[#2D4E38]">
                    Гарантия:
                  </span>{" "}
                  если на звонке вы не получаете минимум 3 конкретные точки
                  роста с цифрами, возвращаем 100% стоимости аудита.
                </p>
                <p>
                  Если стартуем ведение в течение 14 дней после аудита, 4 900
                  CZK засчитываются в первый счет.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => scrollToForm(false)}
                    className={primaryButtonClass}
                  >
                    Забронировать аудит за 4 900 CZK
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToForm(true)}
                    className={secondaryButtonClass}
                  >
                    Сначала посмотреть пример PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className={sectionShell}>
          <h2 className="text-3xl font-semibold text-[#1C252E]">FAQ</h2>
          <div className="mt-6 space-y-3">
            {faqItems.map((item, index) => (
              <details
                key={item.q}
                open={index === 0}
                className={`${cardClass} group overflow-hidden`}
              >
                <summary className="cursor-pointer list-none px-5 py-4 text-sm font-semibold text-[#26333E] marker:content-none">
                  <span className="flex items-center justify-between gap-3">
                    {item.q}
                    <ArrowRight className="h-4 w-4 shrink-0 text-[#A35A31] transition group-open:rotate-90" />
                  </span>
                </summary>
                <div className="border-t border-[#EFE5D8] px-5 py-4 text-sm leading-relaxed text-[#566472]">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 pt-10 sm:pb-24 sm:pt-14">
        <div className={sectionShell}>
          <div className="rounded-3xl border border-[#E4D8C9] bg-[#F7EFE6] p-6 shadow-[0_12px_34px_rgba(31,41,51,0.1)] sm:p-9">
            <h2 className="text-3xl font-semibold text-[#1F2A34]">
              20 минут, чтобы найти точки утечки бюджета
            </h2>
            <p className="mt-3 max-w-3xl text-[#4F5D69]">
              Запишитесь на Growth Audit Call и получите внедряемый 30-дневный
              план уже на этой неделе. WhatsApp-ответ в рабочее время до 2
              часов.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => scrollToForm(false)}
                className={primaryButtonClass}
              >
                Забронировать 20-мин Growth Audit Call
              </button>
              <button
                type="button"
                onClick={() => scrollToForm(true)}
                className={secondaryButtonClass}
              >
                Получить пример аудита PDF
              </button>
            </div>
            <p className="mt-4 text-sm text-[#61707C]">
              На этой неделе: {slotsLeft} слотов.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
