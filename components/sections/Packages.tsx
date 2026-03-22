import {
  ArrowRight,
  Check,
  ClipboardList,
  Crown,
  Layers,
  MessageSquare,
  Rocket,
  ShoppingCart,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";

const packages = [
  {
    title: "Старт",
    subtitle: "Всё, чтобы бизнес нашли в интернете",
    priceSetup: "15,000 Kč",
    priceMonthly: "от 5,000 Kč / мес",
    description:
      "Готовое веб-присутствие за одну неделю. Сайт, аналитика, локальный поиск и AI-выдача — всё настроено и под контролем.",
    features: [
      "лендинг или сайт до 3 страниц",
      "1 рекламный канал (Google Ads или Meta Ads)",
      "SEO-оптимизация + видимость в AI-поиске",
      "профиль в Google Картах",
      "аналитика: GA4 + HaloTrack + записи визитов",
      "контактные формы и базовая инфраструктура",
    ],
    href: "/packages/site",
    cta: "Открыть пакет",
    relatedLinks: [
      { label: "Лендинги", href: "/web/landing-pages" },
      { label: "Многостраничные сайты", href: "/web/business-websites" },
    ],
    highlight: false,
    icon: Rocket,
    iconBg: "bg-[#06D6A0]",
  },
  {
    title: "Лид-машина",
    subtitle: "Сайт, реклама и аналитика — готовая система заявок",
    priceSetup: "35,000 Kč",
    priceMonthly: "от 16,000 Kč / мес",
    priceNote: "1 канал — от 27,000 Kč, от 8,000 Kč/мес",
    description:
      "Бизнес-сайт, подключённая реклама и серверная аналитика — всё настроено, запущено и под нашим контролем. Первый месяц ведения рекламы в цене.",
    features: [
      "бизнес-сайт на несколько страниц с SEO",
      "запуск Google Ads и/или Meta Ads",
      "серверная аналитика: GA4 + HaloTrack + записи визитов",
      "полная настройка: домен, хостинг, пиксели, формы",
      "ведение сайта и рекламы + поддержка",
    ],
    href: "/packages/leads",
    cta: "Открыть пакет",
    relatedLinks: [
      { label: "Google Ads", href: "/ads/google-ads" },
      { label: "Meta Ads", href: "/ads/meta-ads" },
      { label: "Трекинг", href: "/tracking" },
    ],
    highlight: true,
    badge: "Основной выбор",
    icon: Zap,
    iconBg: "bg-[#FF3366]",
  },
  {
    title: "Интернет-магазин",
    subtitle: "Магазин под ключ — от каталога до первых продаж",
    priceSetup: "50,000 Kč",
    priceMonthly: "от 20,000 Kč / мес",
    description:
      "Полностью готовый интернет-магазин с рекламой, аналитикой продаж и ведением. Настраиваем, запускаем и сопровождаем — вы занимаетесь товаром, мы занимаемся ростом.",
    features: [
      "магазин с каталогом, корзиной и оформлением заказа",
      "подключение оплаты, доставки и складского учёта",
      "запуск Google Ads и/или Meta Ads",
      "серверная аналитика: GA4 + HaloTrack + e-commerce события",
      "SEO, фид для площадок и товарная реклама",
      "ведение магазина, рекламы и техподдержка",
    ],
    href: "/packages/ecommerce",
    cta: "Открыть пакет",
    relatedLinks: [
      { label: "Интернет-магазины", href: "/web/ecommerce" },
      { label: "Трекинг", href: "/tracking" },
      { label: "Реклама", href: "/ads" },
    ],
    highlight: false,
    icon: ShoppingCart,
    iconBg: "bg-[#FFD166]",
  },
  {
    title: "Кастомный проект",
    subtitle: "Когда задача не укладывается в шаблон",
    priceSetup: "По задаче",
    priceMonthly: "По объёму работ",
    description:
      "Сложные интеграции, нестандартная логика, миграция с другой платформы или система, которой ещё нет на рынке. Обсуждаем задачу, проектируем архитектуру, фиксируем этапы и бюджет — и строим.",
    features: [
      "нестандартная архитектура и бизнес-логика",
      "интеграции: CRM, ERP, платёжные системы, API",
      "автоматизация процессов и AI-решения",
      "миграция данных и переезд с другой платформы",
      "выделенная команда и персональный менеджер",
      "согласованный план, этапы и прозрачный бюджет",
    ],
    href: "/contact",
    cta: "Обсудить проект",
    relatedLinks: [
      { label: "Автоматизация", href: "/automation" },
      { label: "Аналитика", href: "/tracking" },
      { label: "Контакт", href: "/contact" },
    ],
    highlight: false,
    icon: Crown,
    iconBg: "bg-[#B19CD9]",
  },
];

const whyPackage = [
  {
    icon: Layers,
    title: "Всё работает как система",
    text: "Сайт, реклама и аналитика проектируются вместе. Нет разрывов между подрядчиками, нет потерь данных между этапами.",
  },
  {
    icon: Users,
    title: "Один контакт, одна ответственность",
    text: "Не нужно координировать дизайнера, таргетолога и аналитика по отдельности. Всё в одних руках.",
  },
  {
    icon: Zap,
    title: "Быстрее запуск, ниже цена",
    text: "Пакет дешевле, потому что мы не тратим время на согласования между разными командами. Запуск за 2–4 недели вместо месяцев.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Короткий бриф",
    description:
      "Вы описываете задачу, мы задаём уточняющие вопросы. Обычно хватает одного разговора или переписки.",
    time: "1 день",
    icon: MessageSquare,
  },
  {
    num: "02",
    title: "План и состав работ",
    description:
      "Фиксируем, что входит в пакет, сроки и стоимость. Если нужно скорректировать состав — делаем это до старта.",
    time: "2–3 дня",
    icon: ClipboardList,
  },
  {
    num: "03",
    title: "Запуск и ведение",
    description:
      "Запускаем сайт, рекламу и аналитику. После запуска ведём, оптимизируем и показываем результат в цифрах.",
    time: "2–4 недели",
    icon: Rocket,
  },
];

const faqs = [
  {
    q: "Можно изменить состав пакета?",
    a: "Да. Пакеты — это ориентир, а не жёсткая рамка. Если вам нужна только часть или нужно что-то добавить, обсудим и соберём состав под задачу.",
  },
  {
    q: "Что если мне нужна только реклама без сайта?",
    a: "Можно. Но если текущий сайт слабый, реклама просто ускорит потерю денег. Мы сразу скажем, стоит ли начинать с рекламы или сначала доработать посадочную.",
  },
  {
    q: "Почему пакет дешевле, чем услуги по отдельности?",
    a: "Потому что мы проектируем всё как одну систему. Нет повторной настройки, нет потерь на стыках, нет лишних согласований. Это экономит и время, и деньги.",
  },
];

export default function Packages() {
  return (
    <div className="flex flex-col">
      {/* Package Cards */}
      <section id="pricing" className="px-6 py-8 md:py-12">
        <div className="mx-auto grid max-w-[1200px] gap-6 lg:grid-cols-4">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className={`relative flex h-full flex-col rounded-3xl border-2 border-[#1A1A1A] p-8 transition-all ${
                pkg.highlight
                  ? "bg-[#1A1A1A] text-white shadow-[8px_8px_0px_0px_#FF3366]"
                  : "bg-white text-[#1A1A1A] shadow-[8px_8px_0px_0px_#1A1A1A]"
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-4 right-4 rotate-3 border-2 border-[#1A1A1A] bg-[#FF3366] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-[4px_4px_0px_0px_#1A1A1A]">
                  {pkg.badge}
                </div>
              )}

              <div
                className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl border-2 border-[#1A1A1A] text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] ${pkg.iconBg}`}
              >
                <pkg.icon className="h-6 w-6" />
              </div>

              <h3
                className="mb-1 text-2xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {pkg.title}
              </h3>
              <p
                className={`mb-4 text-sm ${pkg.highlight ? "text-white/60" : "text-[#1A1A1A]/60"}`}
              >
                {pkg.subtitle}
              </p>

              <div
                className={`mb-6 border-b pb-6 ${pkg.highlight ? "border-white/10" : "border-[#1A1A1A]/10"}`}
              >
                <p
                  className={`text-sm ${pkg.highlight ? "text-white/60" : "text-[#1A1A1A]/60"}`}
                >
                  Запуск:{" "}
                  <span
                    className={`font-bold ${pkg.highlight ? "text-white" : "text-[#1A1A1A]"}`}
                  >
                    {pkg.priceSetup}
                  </span>
                </p>
                <p
                  className={`mt-1 text-sm ${pkg.highlight ? "text-white/60" : "text-[#1A1A1A]/60"}`}
                >
                  Далее:{" "}
                  <span
                    className={`font-bold ${pkg.highlight ? "text-white" : "text-[#1A1A1A]"}`}
                  >
                    {pkg.priceMonthly}
                  </span>
                </p>
                {pkg.priceNote && (
                  <p
                    className={`mt-2 text-xs ${pkg.highlight ? "text-white/40" : "text-[#1A1A1A]/40"}`}
                  >
                    {pkg.priceNote}
                  </p>
                )}
              </div>

              <p
                className={`mb-6 text-sm leading-relaxed ${pkg.highlight ? "text-white/75" : "text-[#1A1A1A]/70"}`}
              >
                {pkg.description}
              </p>

              <ul className="flex flex-1 flex-col gap-3 text-sm">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#FF3366]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {pkg.relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-full border-2 border-[#1A1A1A] px-3 py-1 text-xs font-bold ${
                      pkg.highlight
                        ? "bg-white text-[#1A1A1A]"
                        : "bg-[#F5F5F7] text-[#1A1A1A]"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <Link
                href={pkg.href}
                data-cta-track="true"
                data-cta-name={pkg.cta}
                data-cta-location="packages_grid"
                data-cta-category={pkg.highlight ? "primary" : "package"}
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#1A1A1A] px-5 py-3 text-sm font-bold transition-all ${
                  pkg.highlight
                    ? "bg-[#FF3366] text-white shadow-[4px_4px_0px_0px_#FFFFFF] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#FFFFFF]"
                    : "bg-white text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A]"
                }`}
              >
                {pkg.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why a Package */}
      <section className="border-y-2 border-[#1A1A1A] bg-[#1A1A1A] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12 text-center">
            <h2
              className="mb-4 text-3xl font-extrabold text-white md:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Почему пакет, а не услуги по одной
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {whyPackage.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border-2 border-white/15 bg-white/5 p-8"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border-2 border-white/20 bg-[#FF3366]">
                  <item.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/60">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12 text-center">
            <h2
              className="mb-4 text-3xl font-extrabold text-[#1A1A1A] md:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Как это работает
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[#1A1A1A]/60">
              От первого разговора до запуска — три понятных шага.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {processSteps.map((step) => (
              <div
                key={step.num}
                className="relative rounded-3xl border-2 border-[#1A1A1A] bg-white p-8 shadow-[8px_8px_0px_0px_#1A1A1A]"
              >
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-[#1A1A1A] bg-[#06D6A0] shadow-[4px_4px_0px_0px_#1A1A1A]">
                    <step.icon className="h-5 w-5 text-[#1A1A1A]" />
                  </div>
                  <span
                    className="text-4xl font-extrabold text-[#1A1A1A]/10"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {step.num}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-[#1A1A1A]">
                  {step.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-[#1A1A1A]/65">
                  {step.description}
                </p>
                <div className="inline-flex rounded-full border-2 border-[#1A1A1A] bg-[#F5F5F7] px-3 py-1 text-xs font-bold text-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A]">
                  {step.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Point */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border-2 border-[#1A1A1A] bg-[#FFD166] p-8 shadow-[8px_8px_0px_0px_#1A1A1A] md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <div className="mb-4 text-sm font-bold uppercase tracking-[0.15em] text-[#1A1A1A]/50">
                  Результат клиента
                </div>
                <h3
                  className="mb-4 text-2xl font-extrabold text-[#1A1A1A] md:text-3xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Nejbalonky.cz — пакет «Лид-машина»
                </h3>
                <p className="text-base leading-relaxed text-[#1A1A1A]/70">
                  Магазин, Google Ads, Meta Ads и аналитика запущены как одна
                  система. Средний ROAS по рекламе — 5.6. Данные, реклама и сайт
                  работают вместе, а не по отдельности.
                </p>
                <Link
                  href="/case-studies/nejablonky"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#1A1A1A] transition-colors hover:text-[#FF3366]"
                >
                  Открыть кейс
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="flex flex-col items-center rounded-2xl border-2 border-[#1A1A1A] bg-white px-8 py-6 shadow-[4px_4px_0px_0px_#1A1A1A]">
                <div className="text-xs font-bold uppercase tracking-wide text-[#1A1A1A]/50">
                  Средний ROAS
                </div>
                <div
                  className="text-5xl font-extrabold text-[#1A1A1A]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  5.6
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2
              className="mb-4 text-3xl font-extrabold text-[#1A1A1A] md:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Частые вопросы о пакетах
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-3xl border-2 border-[#1A1A1A] bg-white p-8 shadow-[8px_8px_0px_0px_#1A1A1A]"
              >
                <h3 className="mb-3 text-lg font-bold text-[#1A1A1A]">
                  {faq.q}
                </h3>
                <p className="text-sm leading-relaxed text-[#1A1A1A]/65">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2
            className="mb-6 text-3xl font-extrabold text-[#1A1A1A] md:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Не уверены, какой пакет подходит?
          </h2>
          <p className="mb-10 text-lg text-[#1A1A1A]/60">
            Опишите задачу — мы подскажем, какой формат работ ближе, и соберём
            состав под ваш бизнес.
          </p>
          <Link
            href="/contact"
            data-cta-track="true"
            data-cta-name="Обсудить задачу"
            data-cta-location="packages_bottom_cta"
            data-cta-category="primary"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#1A1A1A] bg-[#FF3366] px-10 py-4 text-lg font-bold text-white shadow-[4px_4px_0px_0px_#1A1A1A] transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A]"
          >
            Обсудить задачу
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
