import {
  BarChart3,
  Check,
  CreditCard,
  Lock,
  Package,
  ShoppingCart,
  TrendingUp,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/button";
import { breadcrumbJsonLd, buildMetadata, webPageJsonLd } from "@/lib/seo";

const breadcrumbItems = [
  { label: "Главная", href: "/" },
  { label: "Пакеты", href: "/packages" },
  { label: "Интернет-магазин", href: "/packages/ecommerce" },
];

export const metadata: Metadata = buildMetadata({
  title: 'Пакет "Интернет-магазин" | HaloAgency',
  description:
    "Интернет-магазин под ключ с рекламой, аналитикой продаж и ведением. 50,000 Kč запуск + от 20,000 Kč/мес.",
  path: "/packages/ecommerce",
  openGraphTitle: 'Пакет "Интернет-магазин" — HaloAgency',
});

export default function EcommercePackagePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(breadcrumbItems),
          webPageJsonLd({
            name: 'Пакет "Интернет-магазин"',
            description:
              "Интернет-магазин под ключ с рекламой, аналитикой продаж и ведением. 50,000 Kč запуск + от 20,000 Kč/мес.",
            path: "/packages/ecommerce",
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
                <ShoppingCart className="w-5 h-5 text-[#FF3366]" />
                <span className="text-sm font-bold text-[#1A1A1A] uppercase tracking-wide">
                  Пакет для интернет-магазина
                </span>
              </div>

              <h1
                className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-[#1A1A1A] mb-6 leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Пакет <br />
                <span className="relative inline-block z-10">
                  Интернет-магазин
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
                Полностью готовый интернет-магазин с рекламой, аналитикой продаж
                и ведением. Вы занимаетесь товаром, мы занимаемся ростом.
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
                    50,000 Kč
                  </p>
                  <p className="text-sm font-bold text-[#1A1A1A]">
                    Полная разработка
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
                    от 20,000 Kč
                  </p>
                  <p className="text-sm font-bold text-[#1A1A1A]">
                    Ведение + масштабирование
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
                    data-cta-name="Запустить магазин"
                    data-cta-location="package_ecommerce_hero"
                    data-cta-category="primary"
                  >
                    Запустить магазин →
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
                    title: "Интернет-магазины",
                    description:
                      "Под каталог, корзину, оформление заказа и дальнейший рост магазина.",
                    href: "/web/ecommerce",
                  },
                  {
                    title: "Google Ads",
                    description:
                      "Для спроса из поиска, Shopping и прямых продаж.",
                    href: "/ads/google-ads",
                  },
                  {
                    title: "Трекинг и аналитика",
                    description:
                      "Чтобы магазин обучал рекламу по покупкам и доходу, а не по шуму.",
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
                  Сначала собираем магазин, оплату, доставку и аналитику. Потом
                  подключаем рост и регулярное ведение.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    icon: ShoppingCart,
                    title: "Разработка магазина",
                    color: "text-[#FF3366]",
                    items: [
                      "каталог товаров до 200 SKU",
                      "корзина и оформление заказа",
                      "карточки товаров и категории",
                      "поиск и фильтры",
                      "личный кабинет покупателя",
                    ],
                  },
                  {
                    icon: CreditCard,
                    title: "Оплата и доставка",
                    color: "text-[#FF3366]",
                    items: [
                      "подключение Stripe / PayPal",
                      "банковский перевод при необходимости",
                      "расчет доставки",
                      "статусы и аналитика заказов",
                      "email-уведомления покупателю",
                    ],
                  },
                  {
                    icon: BarChart3,
                    title: "Аналитика + Реклама",
                    color: "text-[#FF3366]",
                    items: [
                      "аналитика продаж в GA4",
                      "серверная аналитика: GA4 + HaloTrack + e-commerce события",
                      "подготовка Google Shopping",
                      "ремаркетинг по просмотрам и корзине",
                      "Meta Catalog + CAPI",
                    ],
                  },
                ].map((section) => (
                  <div
                    key={section.title}
                    className="bg-white border-2 border-[#1A1A1A] rounded-2xl p-8 transition-all shadow-[6px_6px_0px_0px_#1A1A1A] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_#1A1A1A]"
                  >
                    <div className="w-14 h-14 rounded-xl border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] bg-white flex items-center justify-center mb-6">
                      <section.icon className={`w-7 h-7 text-[#1A1A1A]`} />
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border-2 border-[#1A1A1A] rounded-2xl p-6 shadow-[6px_6px_0px_0px_#1A1A1A]">
                  <h4 className="text-lg font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
                    <Lock className="w-5 h-5 text-[#FF3366]" />
                    Безопасность и производительность
                  </h4>
                  <ul className="space-y-2 text-sm text-[#1A1A1A]/60">
                    {[
                      "SSL-сертификат (HTTPS)",
                      "GDPR: cookies и consent mode",
                      "CDN для быстрой загрузки",
                      "оптимизация изображений",
                      "стабильная техническая база под рост",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#FF3366] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#06D6A0] border-2 border-[#1A1A1A] rounded-2xl p-6 shadow-[6px_6px_0px_0px_#1A1A1A]">
                  <h4 className="text-lg font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
                    <Package className="w-5 h-5 text-[#1A1A1A]" />
                    Управление и процессы
                  </h4>
                  <ul className="space-y-2 text-sm text-[#1A1A1A]">
                    {[
                      "админ-панель для товаров и заказов",
                      "импорт и экспорт товаров",
                      "автоматические письма по заказам",
                      "промокоды и скидки",
                      "подготовка к многоязычности",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 font-medium"
                      >
                        <Check className="w-4 h-4 text-[#1A1A1A] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
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
                  После запуска следим за рекламой, воронкой и самим магазином,
                  чтобы продажи росли на нормальной базе, а не хаотично.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: TrendingUp,
                    title: "Управление рекламой",
                    items: [
                      "Google Shopping + Performance Max",
                      "Meta Dynamic Ads (каталог)",
                      "ремаркетинг для брошенных корзин",
                      "тесты креативов и аудиторий",
                      "еженедельная оптимизация бюджета",
                    ],
                  },
                  {
                    icon: BarChart3,
                    title: "Аналитика и CRO",
                    items: [
                      "анализ воронки покупки",
                      "контроль брошенных корзин",
                      "тесты страниц и карточек товаров",
                      "гипотезы по повышению конверсии",
                      "ежемесячный отчет по спросу и продажам",
                    ],
                  },
                  {
                    icon: ShoppingCart,
                    title: "Техническая поддержка",
                    items: [
                      "обновление товаров и коллекций",
                      "настройка промоакций",
                      "исправление багов",
                      "обновления и безопасность",
                      "приоритетная поддержка по текущим задачам",
                    ],
                  },
                  {
                    icon: Zap,
                    title: "Масштабирование",
                    items: [
                      "запуск новых рекламных каналов",
                      "расширение ассортимента",
                      "интеграции с маркетплейсами",
                      "email-маркетинг и автоматизация",
                      "консультации по росту",
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
                    title: "Бренды со своей продукцией",
                    desc: "Нужен магазин, который аккуратно показывает продукт и помогает масштабировать продажи.",
                    examples: ["Одежда", "Косметика", "Аксессуары"],
                  },
                  {
                    title: "Дистрибьюторы",
                    desc: "Нужен каталог, понятная структура заказов и готовность к работе с большим ассортиментом.",
                    examples: ["B2B + B2C", "Запчасти", "Оборудование"],
                  },
                  {
                    title: "Нишевые магазины",
                    desc: "Нужен управляемый запуск без лишнего масштаба на старте, но с нормальной базой под рост.",
                    examples: [
                      "Нишевые товары",
                      "Печать под заказ",
                      "Handmade",
                    ],
                  },
                  {
                    title: "Выход из офлайна в онлайн",
                    desc: "Уже есть продажи офлайн, но нужен нормальный интернет-магазин с оплатой и аналитикой.",
                    examples: ["Магазины", "Шоурумы", "Оптовики"],
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-white border-2 border-[#1A1A1A] rounded-2xl p-6 transition-all shadow-[6px_6px_0px_0px_#1A1A1A] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_#1A1A1A]"
                  >
                    <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">
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

          {/* CTA */}
          <section className="py-16 md:py-24 px-4">
            <div className="container mx-auto max-w-4xl text-center">
              <div className="w-16 h-16 rounded-xl border-2 border-[#1A1A1A] bg-white shadow-[4px_4px_0px_0px_#1A1A1A] flex items-center justify-center mx-auto mb-6">
                <ShoppingCart className="w-8 h-8 text-[#1A1A1A]" />
              </div>
              <h2
                className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Нужен магазин, который можно измерять и усиливать?
              </h2>
              <p className="text-xl text-[#1A1A1A]/60 mb-4">
                Соберем магазин, подключим оплату, аналитику и подготовим
                площадку к рекламе без лишней сборной солянки из подрядчиков.
              </p>
              <p className="text-lg text-[#FF3366] font-bold mb-10">
                50,000 Kč запуск + от 20,000 Kč/мес
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
                    data-cta-name="Запустить магазин"
                    data-cta-location="package_ecommerce_final_cta"
                    data-cta-category="primary"
                  >
                    Запустить магазин →
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
