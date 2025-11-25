import { Button } from "@/components/ui/button";
import { Check, ShoppingCart, Package, CreditCard, BarChart3, Zap, Lock, TrendingUp } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: 'Пакет "E-commerce Профи" - HaloAgency',
  description: "Полноценный интернет-магазин с правильной аналитикой и рекламой. 50,000 Kč setup + 12,000 Kč/мес.",
};

export default function EcommercePackagePage() {
  return (
    <main className="min-h-screen bg-ha-bg pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-ha-bg">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.15),transparent_50%)]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <ShoppingCart className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-medium text-purple-300 uppercase tracking-wide">
              Enterprise Package
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Пакет <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
              E-commerce Профи
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Полноценный интернет-магазин с правильной аналитикой, рекламой и масштабируемой архитектурой
          </p>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-sm">
              <p className="text-sm text-purple-300 mb-2 uppercase tracking-wide font-medium">Одноразово</p>
              <p className="text-5xl font-bold text-white mb-1">50,000 Kč</p>
              <p className="text-sm text-slate-400">Полная разработка</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/30 rounded-2xl p-6 backdrop-blur-sm">
              <p className="text-sm text-blue-300 mb-2 uppercase tracking-wide font-medium">Ежемесячно</p>
              <p className="text-5xl font-bold text-white mb-1">12,000 Kč</p>
              <p className="text-sm text-slate-400">Ведение + масштабирование</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="rounded-full px-10 h-14 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-xl shadow-purple-500/25"
              asChild
            >
              <Link href="/#contact">Запустить магазин →</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800"
              asChild
            >
              <Link href="/#contact">Обсудить проект</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What's Included - Setup */}
      <section className="py-20 border-y border-ha-border-dark bg-ha-bg-soft">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Одноразовая настройка (50,000 Kč)
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Всё для запуска прибыльного интернет-магазина
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* E-commerce Development */}
            <div className="bg-ha-card-dark border border-ha-border-dark rounded-3xl p-8 hover:border-purple-500/30 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 p-[2px] mb-6">
                <div className="w-full h-full rounded-2xl bg-ha-card-dark flex items-center justify-center">
                  <ShoppingCart className="w-7 h-7 text-purple-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Разработка магазина</h3>
              <ul className="space-y-3">
                {[
                  "Каталог товаров (до 200 SKU)",
                  "Корзина и checkout flow",
                  "Карточки товаров с фото",
                  "Фильтры и поиск",
                  "Личный кабинет покупателя",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Payment & Delivery */}
            <div className="bg-ha-card-dark border border-ha-border-dark rounded-3xl p-8 hover:border-blue-500/30 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 p-[2px] mb-6">
                <div className="w-full h-full rounded-2xl bg-ha-card-dark flex items-center justify-center">
                  <CreditCard className="w-7 h-7 text-blue-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Оплата и доставка</h3>
              <ul className="space-y-3">
                {[
                  "Stripe / PayPal интеграция",
                  "Банковский перевод",
                  "Калькулятор доставки",
                  "Трекинг заказов",
                  "Email уведомления",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Analytics & Ads */}
            <div className="bg-ha-card-dark border border-ha-border-dark rounded-3xl p-8 hover:border-orange-500/30 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 p-[2px] mb-6">
                <div className="w-full h-full rounded-2xl bg-ha-card-dark flex items-center justify-center">
                  <BarChart3 className="w-7 h-7 text-orange-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Аналитика + Реклама</h3>
              <ul className="space-y-3">
                {[
                  "E-commerce tracking (GA4)",
                  "Server-side tracking (Stape)",
                  "Google Shopping настройка",
                  "Dynamic Remarketing",
                  "Meta Catalog + CAPI",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Additional Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-ha-card-dark border border-ha-border-dark rounded-2xl p-6">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Lock className="w-5 h-5 text-green-400" />
                Безопасность и производительность
              </h4>
              <ul className="space-y-2 text-sm text-slate-300">
                {[
                  "SSL сертификат (HTTPS)",
                  "GDPR compliance (cookies)",
                  "CDN для быстрой загрузки",
                  "Оптимизация изображений",
                  "Lighthouse Score 85+",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-ha-card-dark border border-ha-border-dark rounded-2xl p-6">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Package className="w-5 h-5 text-purple-400" />
                Управление и автоматизация
              </h4>
              <ul className="space-y-2 text-sm text-slate-300">
                {[
                  "Админ-панель для управления",
                  "Импорт/экспорт товаров (CSV)",
                  "Автоматические email-рассылки",
                  "Промокоды и скидки",
                  "Многоязычность (опция)",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Service */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ежемесячное ведение (12,000 Kč/мес)
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Масштабирование продаж через постоянную оптимизацию рекламы и магазина
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-ha-card-dark border border-ha-border-dark rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-orange-400" />
                Управление рекламой
              </h3>
              <ul className="space-y-4">
                {[
                  "Google Shopping + Performance Max",
                  "Meta Dynamic Ads (каталог)",
                  "Ремаркетинг для брошенных корзин",
                  "A/B тесты креативов и аудиторий",
                  "Еженедельная оптимизация бюджета",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-ha-card-dark border border-ha-border-dark rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <BarChart3 className="w-6 h-6 text-green-400" />
                Аналитика и CRO
              </h3>
              <ul className="space-y-4">
                {[
                  "Анализ воронки продаж",
                  "Отслеживание брошенных корзин",
                  "A/B тесты landing pages",
                  "Рекомендации по улучшению конверсий",
                  "Ежемесячный отчёт с метриками",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-ha-card-dark border border-ha-border-dark rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <ShoppingCart className="w-6 h-6 text-purple-400" />
                Техническая поддержка
              </h3>
              <ul className="space-y-4">
                {[
                  "Добавление/изменение товаров",
                  "Настройка промоакций",
                  "Исправление багов",
                  "Обновления и безопасность",
                  "Приоритетная поддержка (4ч)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-ha-card-dark border border-ha-border-dark rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Zap className="w-6 h-6 text-blue-400" />
                Масштабирование
              </h3>
              <ul className="space-y-4">
                {[
                  "Запуск новых рекламных каналов",
                  "Расширение ассортимента",
                  "Интеграции с маркетплейсами",
                  "Email-маркетинг (автоматизация)",
                  "Консультации по росту",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-20 bg-ha-bg-soft border-t border-ha-border-dark px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Для кого этот пакет?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Бренды и производители",
                desc: "Продажа собственной продукции с высокой маржой",
                examples: ["Fashion бренды", "Косметика", "Аксессуары"],
              },
              {
                title: "Дистрибьюторы",
                desc: "Оптово-розничные продажи с каталогом",
                examples: ["B2B + B2C", "Запчасти", "Оборудование"],
              },
              {
                title: "Дропшипперы",
                desc: "Продажа без складских запасов",
                examples: ["Товары из Китая", "Print on Demand", "Handmade"],
              },
              {
                title: "Расширение бизнеса",
                desc: "Уже продаёте офлайн, переходите в онлайн",
                examples: ["Магазины", "Шоурумы", "Оптовики"],
              },
            ].map((item, i) => (
              <div key={i} className="bg-ha-card-dark border border-ha-border-dark rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 mb-4">{item.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {item.examples.map((ex, j) => (
                    <span key={j} className="text-xs px-3 py-1 rounded-full bg-white/5 text-slate-400 border border-white/10">
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
      <section className="py-24 px-4 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-red-500/5 border-y border-ha-border-dark">
        <div className="container mx-auto max-w-4xl text-center">
          <ShoppingCart className="w-16 h-16 text-purple-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Готовы запустить e-commerce?
          </h2>
          <p className="text-xl text-slate-300 mb-4">
            Полноценный магазин с правильной аналитикой и рекламой
          </p>
          <p className="text-lg text-purple-400 font-semibold mb-10">
            50,000 Kč setup + 12,000 Kč/мес
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="rounded-full px-12 h-16 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-2xl shadow-purple-500/30 font-semibold"
              asChild
            >
              <Link href="/#contact">Запустить магазин →</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
