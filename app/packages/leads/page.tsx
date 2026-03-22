import {
  BarChart3,
  Check,
  Code2,
  Megaphone,
  Server,
  Star,
  Wrench,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/button";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";

const breadcrumbItems = [
  { label: "Главная", href: "/" },
  { label: "Пакеты", href: "/packages" },
  { label: "Лид-машина", href: "/packages/leads" },
];

export const metadata = {
  title: 'Пакет "Лид-машина" - HaloAgency',
  description:
    "Бизнес-сайт, реклама и серверная аналитика в одной связке. Пакет для бизнеса, которому нужна готовая система заявок: 35,000 Kč запуск + от 16,000 Kč/мес.",
};

export default function LeadsPackagePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(breadcrumbItems),
          webPageJsonLd({
            name: 'Пакет "Лид-машина"',
            description:
              "Бизнес-сайт, реклама и серверная аналитика в одной связке. Пакет для бизнеса, которому нужна готовая система заявок: 35,000 Kč запуск + от 16,000 Kč/мес.",
            path: "/packages/leads",
          }),
        ]}
      />
      <main className="min-h-screen bg-[#F5F5F7] pt-20">
        {/* Dot grid background */}
        <div
          className="fixed inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#d1d5db 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10">
          {/* Hero Section */}
          <section className="relative py-16 md:py-20 md:py-32 px-4 overflow-hidden">
            <div className="container mx-auto max-w-5xl text-center relative z-10">
              <Breadcrumbs
                items={breadcrumbItems}
                className="flex justify-center"
              />
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FFD166] border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] mb-6">
                <Star className="w-5 h-5 text-[#1A1A1A] fill-[#1A1A1A]" />
                <span className="text-base font-bold text-[#1A1A1A]">
                  Сайт + реклама + аналитика
                </span>
              </div>

              <h1
                className="text-5xl md:text-7xl font-extrabold text-[#1A1A1A] mb-6 leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Пакет <br />
                <span className="relative inline-block z-10">
                  Лид-машина
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-4 text-[#FF3366] -z-10"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Акцент линии</title>
                    <path
                      d="M0 10 Q 50 20 100 10"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="4"
                    />
                  </svg>
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-[#1A1A1A]/60 mb-8 max-w-3xl mx-auto leading-relaxed">
                Бизнес-сайт, подключённая реклама и серверная аналитика — всё
                настроено, запущено и под нашим контролем.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-4">
                <div className="bg-white border-2 border-[#1A1A1A] rounded-2xl p-6 shadow-[6px_6px_0px_0px_#1A1A1A]">
                  <p className="text-sm text-[#FF3366] mb-2 uppercase tracking-wide font-bold">
                    Одноразово
                  </p>
                  <p
                    className="text-5xl font-extrabold text-[#1A1A1A] mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    35,000 Kč
                  </p>
                  <p className="text-sm font-bold text-[#1A1A1A]">
                    2 рекламных канала
                  </p>
                </div>
                <div className="bg-[#B19CD9] border-2 border-[#1A1A1A] rounded-2xl p-6 shadow-[6px_6px_0px_0px_#1A1A1A]">
                  <p className="text-sm text-[#1A1A1A] mb-2 uppercase tracking-wide font-bold">
                    Ежемесячно
                  </p>
                  <p
                    className="text-5xl font-extrabold text-[#1A1A1A] mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    от 16,000 Kč
                  </p>
                  <p className="text-sm font-bold text-[#1A1A1A]">
                    Полное ведение + поддержка
                  </p>
                </div>
              </div>

              <p className="text-sm text-[#1A1A1A]/50 mb-4">
                1 канал — от 27,000 Kč запуск, от 8,000 Kč/мес
              </p>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#06D6A0] border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] mb-10">
                <Zap className="w-4 h-4 text-[#1A1A1A]" />
                <span className="text-sm font-bold text-[#1A1A1A]">
                  Первый месяц ведения рекламы в цене
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <Button
                  size="lg"
                  className="rounded-xl px-10 h-14 text-lg bg-[#FF3366] hover:bg-[#FF3366] text-white font-bold border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-y-[1px] active:translate-x-[1px] active:shadow-[0px_0px_0px_0px_#1A1A1A] transition-all"
                  asChild
                >
                  <Link
                    href="/contact"
                    data-cta-track="true"
                    data-cta-name="Обсудить пакет"
                    data-cta-location="package_leads_hero"
                    data-cta-category="primary"
                  >
                    Обсудить пакет →
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          <section className="pb-12 px-4">
            <div className="container mx-auto max-w-5xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    title: "Google Ads",
                    description:
                      "Для горячего спроса и прямого пути из поиска в заявку.",
                    href: "/ads/google-ads",
                  },
                  {
                    title: "Meta Ads",
                    description:
                      "Для формирования спроса, креативов и ретаргетинга.",
                    href: "/ads/meta-ads",
                  },
                  {
                    title: "Трекинг и аналитика",
                    description:
                      "Чтобы реклама и страница опирались на реальные заявки, а не на неполные данные.",
                    href: "/tracking",
                  },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-2xl border-2 border-[#1A1A1A] bg-white p-5 shadow-[4px_4px_0px_0px_#1A1A1A] transition-all hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A]"
                  >
                    <div className="text-lg font-bold text-[#1A1A1A]">
                      {item.title}
                    </div>
                    <div className="mt-2 text-sm leading-relaxed text-[#1A1A1A]/60">
                      {item.description}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* What's Included - Setup */}
          <section className="py-16 md:py-20">
            <div className="container mx-auto max-w-6xl px-4">
              <div className="text-center mb-16">
                <h2
                  className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Что входит в запуск
                </h2>
                <p className="text-lg text-[#1A1A1A]/60 max-w-2xl mx-auto">
                  Собираем бизнес-сайт, подключаем рекламу, аналитику и всю
                  инфраструктуру. Потом переходим к ведению и оптимизации.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Code2,
                    title: "Бизнес-сайт",
                    items: [
                      "сайт на несколько страниц с понятной структурой",
                      "адаптив под мобильные устройства",
                      "формы для заявок и базовые тексты",
                      "SEO-оптимизация и видимость в AI-поиске",
                      "готовность к рекламному трафику",
                    ],
                  },
                  {
                    icon: BarChart3,
                    title: "Серверная аналитика",
                    items: [
                      "GA4 + HaloTrack + записи визитов",
                      "серверная передача событий (server-side)",
                      "Meta CAPI и передача конверсий",
                      "проверка корректности всех событий",
                      "понятный отчёт по ключевым метрикам",
                    ],
                  },
                  {
                    icon: Megaphone,
                    title: "Рекламный запуск",
                    items: [
                      "Google Ads и/или Meta Ads под задачу бизнеса",
                      "структура кампаний и аудитории",
                      "креативы и тексты для старта",
                      "проверка ссылок и форм",
                      "запуск первых рабочих кампаний",
                    ],
                  },
                  {
                    icon: Wrench,
                    title: "Полная инфраструктура",
                    items: [
                      "подключение и настройка домена",
                      "хостинг и SSL-сертификат",
                      "пиксели, GTM и рекламные теги",
                      "GDPR: cookies и consent mode",
                      "всё, чтобы ничего не настраивать самим",
                    ],
                  },
                ].map((section) => (
                  <div
                    key={section.title}
                    className="bg-white border-2 border-[#1A1A1A] rounded-2xl p-8 transition-all shadow-[6px_6px_0px_0px_#1A1A1A] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_#1A1A1A]"
                  >
                    <div className="w-14 h-14 rounded-xl border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] bg-white flex items-center justify-center mb-6">
                      <section.icon className="w-7 h-7 text-[#1A1A1A]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-[#1A1A1A]/60"
                        >
                          <Check className="w-5 h-5 text-[#FF3366] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Monthly Service */}
          <section className="py-16 md:py-20 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2
                  className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Что входит в ведение
                </h2>
                <p className="text-lg text-[#1A1A1A]/60 max-w-2xl mx-auto">
                  После запуска не оставляем проект без внимания: ведём рекламу,
                  следим за аналитикой и поддерживаем сайт.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {[
                  {
                    icon: Megaphone,
                    title: "Управление рекламой",
                    items: [
                      "еженедельная оптимизация бюджета и ставок",
                      "тесты аудиторий, офферов и креативов",
                      "отключение слабых связок",
                      "ежемесячный отчёт с выводами",
                      "консультации по следующему шагу",
                    ],
                  },
                  {
                    icon: BarChart3,
                    title: "Мониторинг аналитики",
                    items: [
                      "проверка корректности аналитики и событий",
                      "анализ заявок и слабых мест воронки",
                      "контроль качества лидов",
                      "рекомендации по странице и формам",
                      "понятные цифры без ручной свалки",
                    ],
                  },
                ].map((section) => (
                  <div
                    key={section.title}
                    className="bg-white border-2 border-[#1A1A1A] rounded-2xl p-8 transition-all shadow-[6px_6px_0px_0px_#1A1A1A] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_#1A1A1A]"
                  >
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-6 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] bg-[#FFD166] flex items-center justify-center">
                        <section.icon className="w-5 h-5 text-[#1A1A1A]" />
                      </div>
                      {section.title}
                    </h3>
                    <ul className="space-y-4">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-[#1A1A1A]/60"
                        >
                          <Check className="w-5 h-5 text-[#FF3366] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="bg-[#FFD166] border-2 border-[#1A1A1A] rounded-3xl p-8 text-center shadow-[8px_8px_0px_0px_#1A1A1A]">
                <div className="w-16 h-16 rounded-xl border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] bg-white flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-[#1A1A1A]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">
                  Ведение сайта и оперативная поддержка
                </h3>
                <p className="text-[#1A1A1A]/80 font-medium max-w-2xl mx-auto">
                  Проблемы с сайтом, рекламой или аналитикой — решаем быстро, без
                  длинной цепочки посредников. Всё в одних руках.
                </p>
              </div>
            </div>
          </section>

          {/* Ideal For */}
          <section className="py-16 md:py-20 px-4">
            <div className="container mx-auto max-w-4xl">
              <h2
                className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-12 text-center"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Для кого этот пакет?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Локальный бизнес",
                    desc: "Услуги, мастера, салоны и другие проекты, которым нужен поток обращений.",
                    examples: ["Стоматологии", "Юристы", "Ремонт техники"],
                  },
                  {
                    title: "B2B сервисы",
                    desc: "Консалтинг, агентства и сервисные компании, где продажа начинается с заявки или созвона.",
                    examples: ["IT-консалтинг", "Бухгалтерия", "HR-услуги"],
                  },
                  {
                    title: "Онлайн-обучение",
                    desc: "Школы, курсы и программы, где важно приводить людей на пробный шаг или консультацию.",
                    examples: ["Языковые школы", "Репетиторы", "Коучинг"],
                  },
                  {
                    title: "Небольшой интернет-магазин",
                    desc: "Когда нужен не большой магазин, а понятный запуск продаж через рекламу и форму заказа.",
                    examples: ["Handmade", "Дропшиппинг", "Нишевые товары"],
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-white border-2 border-[#1A1A1A] rounded-2xl p-6 transition-all shadow-[6px_6px_0px_0px_#1A1A1A] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_#1A1A1A]"
                  >
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#1A1A1A]/60 mb-4">{item.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.examples.map((ex) => (
                        <span
                          key={ex}
                          className="text-xs px-3 py-1 rounded-md border-2 border-[#1A1A1A] bg-[#FFD166] text-[#1A1A1A] font-bold shadow-[2px_2px_0px_0px_#1A1A1A]"
                        >
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="py-16 md:py-20 px-4">
            <div className="container mx-auto max-w-4xl">
              <h2
                className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-12 text-center"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Как проходит работа
              </h2>
              <div className="space-y-6">
                {[
                  {
                    week: "Дни 1-3",
                    title: "Бизнес-сайт и инфраструктура",
                    desc: "Собираем сайт на несколько страниц, подключаем домен, хостинг, формы и базовую структуру.",
                  },
                  {
                    week: "Дни 4-5",
                    title: "Аналитика и серверный трекинг",
                    desc: "Подключаем GA4, HaloTrack, серверные события и проверяем корректность данных.",
                  },
                  {
                    week: "День 6",
                    title: "Запуск рекламы",
                    desc: "Собираем рабочие кампании в Google Ads и/или Meta Ads, проверяем связки и запускаем.",
                  },
                  {
                    week: "День 7+",
                    title: "Оптимизация и ведение",
                    desc: "Смотрим на заявки, убираем слабое, усиливаем то, что работает. Ведём сайт и рекламу.",
                  },
                ].map((item, index) => (
                  <div key={item.week} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-20 h-20 rounded-2xl border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] bg-white flex items-center justify-center">
                      <span
                        className="text-3xl font-bold text-[#1A1A1A]"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {index + 1}
                      </span>
                    </div>
                    <div className="pt-2">
                      <div className="text-sm text-[#FF3366] font-bold mb-1 uppercase tracking-wide">
                        {item.week}
                      </div>
                      <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[#1A1A1A]/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 md:py-24 px-4">
            <div className="container mx-auto max-w-4xl text-center">
              <div className="w-16 h-16 rounded-xl border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] bg-[#FFD166] flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-[#1A1A1A] fill-[#1A1A1A]" />
              </div>
              <h2
                className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Нужны сайт, реклама и аналитика в одной связке?
              </h2>
              <p className="text-xl text-[#1A1A1A]/60 mb-4">
                Обсудим задачу, поймём, подходит ли вам этот пакет, и скажем, с
                чего лучше начать.
              </p>
              <p className="text-lg text-[#FF3366] font-bold mb-10">
                35,000 Kč запуск + от 16,000 Kč/мес
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="rounded-xl px-12 h-16 text-lg bg-[#FF3366] hover:bg-[#FF3366] text-white font-bold border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-y-[1px] active:translate-x-[1px] active:shadow-[0px_0px_0px_0px_#1A1A1A] transition-all"
                  asChild
                >
                  <Link
                    href="/contact"
                    data-cta-track="true"
                    data-cta-name="Обсудить пакет"
                    data-cta-location="package_leads_final_cta"
                    data-cta-category="primary"
                  >
                    Обсудить пакет →
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
