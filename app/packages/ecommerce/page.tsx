import { Button } from "@/components/ui/button";
import { Check, ShoppingCart, Package, CreditCard, BarChart3, Zap, Lock, TrendingUp } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: 'Пакет "E-commerce Профи" - HaloAgency',
  description: "Полноценный интернет-магазин с правильной аналитикой и рекламой. 50,000 Kč setup + 12,000 Kč/мес.",
};

export default function EcommercePackagePage() {
  return (
    <main className="min-h-screen bg-[#F5F5F7] pt-20">
      {/* Dot grid background */}
      <div className="fixed inset-0 z-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-16 md:py-20 md:py-32 px-4 overflow-hidden">

          <div className="container mx-auto max-w-5xl text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] mb-6">
              <ShoppingCart className="w-5 h-5 text-[#FF3366]" />
              <span className="text-sm font-bold text-[#1A1A1A] uppercase tracking-wide">Enterprise Package</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-[#1A1A1A] mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Пакет <br />
              <span className="relative inline-block z-10">
                E-commerce Профи
                <svg className="absolute -bottom-2 left-0 w-full h-4 text-[#FF3366] -z-10" fill="none" preserveAspectRatio="none" viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeLinecap="round" strokeWidth="4" />
                </svg>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-[#1A1A1A]/60 mb-10 max-w-3xl mx-auto leading-relaxed">
              Полноценный интернет-магазин с правильной аналитикой, рекламой и масштабируемой архитектурой
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
              <div className="bg-white border-2 border-[#1A1A1A] rounded-2xl p-6 shadow-[6px_6px_0px_0px_#1A1A1A]">
                <p className="text-sm text-[#FF3366] mb-2 uppercase tracking-wide font-bold">Одноразово</p>
                <p className="text-5xl font-extrabold text-[#1A1A1A] mb-1" style={{ fontFamily: 'var(--font-display)' }}>50,000 Kč</p>
                <p className="text-sm font-bold text-[#1A1A1A]">Полная разработка</p>
              </div>
              <div className="bg-[#B19CD9] border-2 border-[#1A1A1A] rounded-2xl p-6 shadow-[6px_6px_0px_0px_#1A1A1A]">
                <p className="text-sm text-[#1A1A1A] mb-2 uppercase tracking-wide font-bold">Ежемесячно</p>
                <p className="text-5xl font-extrabold text-[#1A1A1A] mb-1" style={{ fontFamily: 'var(--font-display)' }}>12,000 Kč</p>
                <p className="text-sm font-bold text-[#1A1A1A]">Ведение + масштабирование</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Button
                size="lg"
                className="rounded-xl px-10 h-14 text-lg bg-[#FF3366] hover:bg-[#FF3366] text-white font-bold border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-y-[1px] active:translate-x-[1px] active:shadow-[0px_0px_0px_0px_#1A1A1A] transition-all"
                asChild
              >
                <Link href="/#contact">Запустить магазин →</Link>
              </Button>
              <Link href="/#contact" className="text-[#1A1A1A] font-bold hover:text-[#FF3366] transition-colors text-base underline decoration-2 underline-offset-4">
                Обсудить проект →
              </Link>
            </div>
          </div>
        </section>

        {/* What's Included - Setup */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Одноразовая настройка (50,000 Kč)
              </h2>
              <p className="text-lg text-[#1A1A1A]/60 max-w-2xl mx-auto">
                Всё для запуска прибыльного интернет-магазина
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: ShoppingCart, title: "Разработка магазина", color: "text-[#FF3366]",
                  items: ["Каталог товаров (до 200 SKU)", "Корзина и checkout flow", "Карточки товаров с фото", "Фильтры и поиск", "Личный кабинет покупателя"]
                },
                {
                  icon: CreditCard, title: "Оплата и доставка", color: "text-[#FF3366]",
                  items: ["Stripe / PayPal интеграция", "Банковский перевод", "Калькулятор доставки", "Трекинг заказов", "Email уведомления"]
                },
                {
                  icon: BarChart3, title: "Аналитика + Реклама", color: "text-[#FF3366]",
                  items: ["E-commerce tracking (GA4)", "Server-side tracking (Stape)", "Google Shopping настройка", "Dynamic Remarketing", "Meta Catalog + CAPI"]
                },
              ].map((section, idx) => (
                <div key={idx} className="bg-white border-2 border-[#1A1A1A] rounded-2xl p-8 transition-all shadow-[6px_6px_0px_0px_#1A1A1A] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_#1A1A1A]">
                  <div className="w-14 h-14 rounded-xl border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] bg-white flex items-center justify-center mb-6">
                    <section.icon className={`w-7 h-7 text-[#1A1A1A]`} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#1A1A1A]/60">
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
                  {["SSL сертификат (HTTPS)", "GDPR compliance (cookies)", "CDN для быстрой загрузки", "Оптимизация изображений", "Lighthouse Score 85+"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#FF3366] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#06D6A0] border-2 border-[#1A1A1A] rounded-2xl p-6 shadow-[6px_6px_0px_0px_#1A1A1A]">
                <h4 className="text-lg font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
                  <Package className="w-5 h-5 text-[#1A1A1A]" />
                  Управление и автоматизация
                </h4>
                <ul className="space-y-2 text-sm text-[#1A1A1A]">
                  {["Админ-панель для управления", "Импорт/экспорт товаров (CSV)", "Автоматические email-рассылки", "Промокоды и скидки", "Многоязычность (опция)"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 font-medium">
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
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Ежемесячное ведение (12,000 Kč/мес)
              </h2>
              <p className="text-lg text-[#1A1A1A]/60 max-w-2xl mx-auto">
                Масштабирование продаж через постоянную оптимизацию рекламы и магазина
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: TrendingUp, title: "Управление рекламой", items: ["Google Shopping + Performance Max", "Meta Dynamic Ads (каталог)", "Ремаркетинг для брошенных корзин", "A/B тесты креативов и аудиторий", "Еженедельная оптимизация бюджета"] },
                { icon: BarChart3, title: "Аналитика и CRO", items: ["Анализ воронки продаж", "Отслеживание брошенных корзин", "A/B тесты landing pages", "Рекомендации по улучшению конверсий", "Ежемесячный отчёт с метриками"] },
                { icon: ShoppingCart, title: "Техническая поддержка", items: ["Добавление/изменение товаров", "Настройка промоакций", "Исправление багов", "Обновления и безопасность", "Приоритетная поддержка (4ч)"] },
                { icon: Zap, title: "Масштабирование", items: ["Запуск новых рекламных каналов", "Расширение ассортимента", "Интеграции с маркетплейсами", "Email-маркетинг (автоматизация)", "Консультации по росту"] },
              ].map((section, idx) => (
                <div key={idx} className="bg-white border-2 border-[#1A1A1A] rounded-2xl p-8 transition-all shadow-[6px_6px_0px_0px_#1A1A1A] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_#1A1A1A]">
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] bg-[#FFD166] flex items-center justify-center">
                      <section.icon className="w-5 h-5 text-[#1A1A1A]" />
                    </div>
                    {section.title}
                  </h3>
                  <ul className="space-y-4">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#1A1A1A]/60">
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-12 text-center" style={{ fontFamily: 'var(--font-display)' }}>
              Для кого этот пакет?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Бренды и производители", desc: "Продажа собственной продукции с высокой маржой", examples: ["Fashion бренды", "Косметика", "Аксессуары"] },
                { title: "Дистрибьюторы", desc: "Оптово-розничные продажи с каталогом", examples: ["B2B + B2C", "Запчасти", "Оборудование"] },
                { title: "Дропшипперы", desc: "Продажа без складских запасов", examples: ["Товары из Китая", "Print on Demand", "Handmade"] },
                { title: "Расширение бизнеса", desc: "Уже продаёте офлайн, переходите в онлайн", examples: ["Магазины", "Шоурумы", "Оптовики"] },
              ].map((item, i) => (
                <div key={i} className="bg-white border-2 border-[#1A1A1A] rounded-2xl p-6 transition-all shadow-[6px_6px_0px_0px_#1A1A1A] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_#1A1A1A]">
                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">{item.title}</h3>
                  <p className="text-[#1A1A1A]/60 mb-4">{item.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.examples.map((ex, j) => (
                      <span key={j} className="text-xs px-3 py-1 rounded-md border-2 border-[#1A1A1A] bg-[#FFD166] text-[#1A1A1A] font-bold shadow-[2px_2px_0px_0px_#1A1A1A]">
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
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Готовы запустить e-commerce?
            </h2>
            <p className="text-xl text-[#1A1A1A]/60 mb-4">
              Полноценный магазин с правильной аналитикой и рекламой
            </p>
            <p className="text-lg text-[#FF3366] font-bold mb-10">
              50,000 Kč setup + 12,000 Kč/мес
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="rounded-xl px-12 h-16 text-lg bg-[#FF3366] hover:bg-[#FF3366] text-white font-bold border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-y-[1px] active:translate-x-[1px] active:shadow-[0px_0px_0px_0px_#1A1A1A] transition-all"
                asChild
              >
                <Link href="/#contact">Запустить магазин →</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
