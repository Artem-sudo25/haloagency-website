import {
  BarChart3,
  Check,
  Code2,
  Globe,
  Mail,
  Megaphone,
  Smartphone,
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
  { label: "Старт", href: "/packages/site" },
];

export const metadata = {
  title: 'Пакет "Старт" - HaloAgency',
  description:
    "Сайт, реклама, аналитика и локальный поиск для бизнеса в Чехии. От 15,000 Kč запуск + от 5,000 Kč/мес.",
};

export default function SitePackagePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(breadcrumbItems),
          webPageJsonLd({
            name: 'Пакет "Старт"',
            description:
              "Сайт, реклама, аналитика и локальный поиск для бизнеса в Чехии. От 15,000 Kč запуск + от 5,000 Kč/мес.",
            path: "/packages/site",
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] mb-6">
                <Code2 className="w-4 h-4 text-[#FF3366]" />
                <span className="text-sm font-bold text-[#1A1A1A] uppercase tracking-wide">
                  Стартовый пакет
                </span>
              </div>

              <h1
                className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-[#1A1A1A] mb-6 leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Пакет <br />
                <span className="relative inline-block z-10">
                  Старт
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

              <p className="text-lg md:text-2xl text-[#1A1A1A]/60 mb-10 max-w-3xl mx-auto leading-relaxed">
                Готовое веб-присутствие за одну неделю. Сайт, аналитика,
                локальный поиск и AI-выдача — всё настроено и под контролем.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
                <div className="bg-white border-2 border-[#1A1A1A] rounded-2xl p-6 shadow-[6px_6px_0px_0px_#1A1A1A]">
                  <p className="text-sm text-[#FF3366] mb-2 uppercase tracking-wide font-bold">
                    Одноразово
                  </p>
                  <p
                    className="text-5xl font-extrabold text-[#1A1A1A] mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    15,000 Kč
                  </p>
                  <p className="text-sm font-bold text-[#1A1A1A]">
                    Полная настройка
                  </p>
                </div>
                <div className="bg-[#06D6A0] border-2 border-[#1A1A1A] rounded-2xl p-6 shadow-[6px_6px_0px_0px_#1A1A1A]">
                  <p className="text-sm text-[#1A1A1A] mb-2 uppercase tracking-wide font-bold">
                    Ежемесячно
                  </p>
                  <p
                    className="text-5xl font-extrabold text-[#1A1A1A] mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    от 5,000 Kč
                  </p>
                  <p className="text-sm font-bold text-[#1A1A1A]">
                    Ведение рекламы + поддержка
                  </p>
                </div>
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
                    data-cta-name="Заказать сайт"
                    data-cta-location="package_site_hero"
                    data-cta-category="primary"
                  >
                    Заказать сайт →
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          <section className="pb-12 px-4">
            <div className="container mx-auto max-w-5xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Лендинги",
                    description:
                      "Если нужен короткий путь от рекламы к форме и одно главное действие.",
                    href: "/web/landing-pages",
                  },
                  {
                    title: "Многостраничные сайты",
                    description:
                      "Если нужно больше страниц, навигация по услугам и более сильное доверие к компании.",
                    href: "/web/business-websites",
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

          {/* What's Included */}
          <section className="py-16 md:py-20">
            <div className="container mx-auto max-w-5xl px-4">
              <div className="text-center mb-16">
                <h2
                  className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Что входит в пакет
                </h2>
                <p className="text-lg text-[#1A1A1A]/60 max-w-2xl mx-auto">
                  Сайт, реклама, аналитика и локальное присутствие — всё, что
                  нужно для старта, без лишней сложности.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Code2,
                    title: "Разработка",
                    items: [
                      "лендинг или сайт до 3 страниц",
                      "структура под услуги, контакты и доверие",
                      "дизайн и сборка на Next.js",
                      "быстрая загрузка и техническая база",
                      "публикация и подключение домена",
                    ],
                  },
                  {
                    icon: Smartphone,
                    title: "Адаптивность",
                    items: [
                      "корректное отображение на телефоне и ноутбуке",
                      "проверка ключевых экранов",
                      "понятные кнопки и формы на мобильных",
                      "аккуратная скорость загрузки",
                      "готовность к дальнейшим доработкам",
                    ],
                  },
                  {
                    icon: Mail,
                    title: "Формы захвата",
                    items: [
                      "контактная форма",
                      "отправка заявок на email",
                      "валидация полей",
                      "базовая защита от спама",
                      "подготовка к подключению CRM или Telegram",
                    ],
                  },
                  {
                    icon: Globe,
                    title: "SEO и локальный поиск",
                    items: [
                      "title, description и Open Graph",
                      "robots.txt и sitemap",
                      "видимость в AI-поиске",
                      "профиль в Google Картах",
                      "готовность к индексации",
                    ],
                  },
                  {
                    icon: Megaphone,
                    title: "1 рекламный канал",
                    items: [
                      "Google Ads или Meta Ads на выбор",
                      "настройка рекламного кабинета",
                      "структура кампании под задачу бизнеса",
                      "базовые креативы и тексты для старта",
                      "запуск первых рабочих кампаний",
                    ],
                  },
                  {
                    icon: BarChart3,
                    title: "Аналитика",
                    items: [
                      "GA4 + HaloTrack",
                      "записи визитов и поведение на сайте",
                      "базовая настройка событий и конверсий",
                      "проверка корректности данных",
                      "понятный отчёт по ключевым метрикам",
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
                    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6">
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
                    title: "Фрилансеры и консультанты",
                    desc: "Нужна аккуратная страница с услугами, кейсами и контактами.",
                  },
                  {
                    title: "Локальные услуги",
                    desc: "Салоны, мастера, студии и сервисы, которым нужен понятный способ получать обращения.",
                  },
                  {
                    title: "Новый проект",
                    desc: "Нужно быстро выйти в онлайн без большой кастомной разработки на старте.",
                  },
                  {
                    title: "Малый бизнес",
                    desc: "Кафе, мастерские и небольшие компании, которым нужен нормальный сайт вместо устаревшей визитки.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-white border-2 border-[#1A1A1A] rounded-2xl p-6 transition-all shadow-[6px_6px_0px_0px_#1A1A1A] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_#1A1A1A]"
                  >
                    <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#1A1A1A]/60">{item.desc}</p>
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
                Этапы работы
              </h2>
              <div className="space-y-6">
                {[
                  {
                    day: "День 1",
                    title: "Созвон и структура",
                    desc: "Коротко разбираем задачу, собираем материалы и утверждаем состав страниц.",
                  },
                  {
                    day: "День 2-3",
                    title: "Дизайн и сборка",
                    desc: "Собираем страницу, выравниваем визуальный стиль и проверяем ключевые блоки.",
                  },
                  {
                    day: "День 4",
                    title: "Формы, аналитика и проверка",
                    desc: "Подключаем GA4, HaloTrack, формы. Тестируем мобильную версию и скорость загрузки.",
                  },
                  {
                    day: "День 5",
                    title: "Реклама и публикация",
                    desc: "Подключаем домен, публикуем сайт, настраиваем рекламный канал и запускаем первые кампании.",
                  },
                ].map((item, index) => (
                  <div key={item.day} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-16 h-16 rounded-xl border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] bg-white flex items-center justify-center">
                      <span
                        className="text-2xl font-bold text-[#1A1A1A]"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {index + 1}
                      </span>
                    </div>
                    <div className="pt-1">
                      <div className="text-sm text-[#FF3366] font-bold mb-1 uppercase tracking-wide">
                        {item.day}
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

          {/* Upgrade Path */}
          <section className="py-16 md:py-20 px-4">
            <div className="container mx-auto max-w-4xl">
              <div className="bg-[#FFD166] border-2 border-[#1A1A1A] rounded-3xl p-8 md:p-12 text-center shadow-[8px_8px_0px_0px_#1A1A1A]">
                <div className="w-16 h-16 rounded-xl border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] bg-white flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-[#1A1A1A]" />
                </div>
                <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">
                  Нужно больше — оба рекламных канала?
                </h2>
                <p className="text-lg font-medium text-[#1A1A1A] mb-8 max-w-2xl mx-auto">
                  В пакете «Лид-машина» — бизнес-сайт на несколько страниц,
                  Google Ads + Meta Ads, серверная аналитика и полное ведение.
                </p>
                <Button
                  size="lg"
                  className="rounded-xl px-8 h-12 bg-[#FF3366] hover:bg-[#FF3366] text-white font-bold border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-y-[1px] active:translate-x-[1px] active:shadow-[0px_0px_0px_0px_#1A1A1A] transition-all"
                  asChild
                >
                  <Link href="/packages/leads">Посмотреть «Лид-машину» →</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 md:py-24 px-4">
            <div className="container mx-auto max-w-4xl text-center">
              <h2
                className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Нужен аккуратный сайт с рекламой и аналитикой?
              </h2>
              <p className="text-xl text-[#1A1A1A]/60 mb-4">
                Соберём стартовую версию, которая нормально выглядит, быстро
                грузится и приводит первых клиентов через рекламу.
              </p>
              <p className="text-2xl text-[#FF3366] font-bold mb-10">
                15,000 Kč запуск + от 5,000 Kč/мес
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
                    data-cta-name="Заказать сайт"
                    data-cta-location="package_site_final_cta"
                    data-cta-category="primary"
                  >
                    Заказать сайт →
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
