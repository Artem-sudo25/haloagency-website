import { Button } from "@/components/ui/button";
import { Check, Sparkles, Zap, TrendingUp, BarChart3, Megaphone, Code2, Star } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: 'Пакет "Лид-машина" - HaloAgency',
  description: "Комплексное решение: сайт + реклама + аналитика. 35,000 Kč setup + 8,000 Kč/мес. 80% наших клиентов выбирают это.",
};

export default function LeadsPackagePage() {
  return (
    <main className="min-h-screen bg-[#F5F5F7] pt-20">
      {/* Dot grid background */}
      <div className="fixed inset-0 z-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-16 md:py-20 md:py-32 px-4 overflow-hidden">

          <div className="container mx-auto max-w-5xl text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FFD166] border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] mb-6">
              <Star className="w-5 h-5 text-[#1A1A1A] fill-[#1A1A1A]" />
              <span className="text-base font-bold text-[#1A1A1A]">ХИТ ПРОДАЖ — 80% клиентов выбирают это</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-[#1A1A1A] mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Пакет <br />
              <span className="relative inline-block z-10">
                Лид-машина
                <svg className="absolute -bottom-2 left-0 w-full h-4 text-[#FF3366] -z-10" fill="none" preserveAspectRatio="none" viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeLinecap="round" strokeWidth="4" />
                </svg>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-[#1A1A1A]/60 mb-8 max-w-3xl mx-auto leading-relaxed">
              Всё, что нужно для генерации лидов: сайт, реклама и правильная аналитика. Один пакет = полный цикл.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
              <div className="bg-white border-2 border-[#1A1A1A] rounded-2xl p-6 shadow-[6px_6px_0px_0px_#1A1A1A]">
                <p className="text-sm text-[#FF3366] mb-2 uppercase tracking-wide font-bold">Одноразово</p>
                <p className="text-5xl font-extrabold text-[#1A1A1A] mb-1" style={{ fontFamily: 'var(--font-display)' }}>35,000 Kč</p>
                <p className="text-sm font-bold text-[#1A1A1A]">Полная настройка</p>
              </div>
              <div className="bg-[#B19CD9] border-2 border-[#1A1A1A] rounded-2xl p-6 shadow-[6px_6px_0px_0px_#1A1A1A]">
                <p className="text-sm text-[#1A1A1A] mb-2 uppercase tracking-wide font-bold">Ежемесячно</p>
                <p className="text-5xl font-extrabold text-[#1A1A1A] mb-1" style={{ fontFamily: 'var(--font-display)' }}>8,000 Kč</p>
                <p className="text-sm font-bold text-[#1A1A1A]">Ведение + оптимизация</p>
              </div>
            </div>

            <div className="inline-block bg-[#06D6A0] border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] rounded-xl px-6 py-3 mb-8">
              <p className="text-[#1A1A1A] font-bold">🎄 Новогоднее предложение: 25,000 Kč setup (скидка 10k)</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Button
                size="lg"
                className="rounded-xl px-10 h-14 text-lg bg-[#FF3366] hover:bg-[#FF3366] text-white font-bold border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-y-[1px] active:translate-x-[1px] active:shadow-[0px_0px_0px_0px_#1A1A1A] transition-all"
                asChild
              >
                <Link href="/#contact">Запустить за 7 дней →</Link>
              </Button>
              <Link href="/#contact" className="text-[#1A1A1A] font-bold hover:text-[#FF3366] transition-colors text-base underline decoration-2 underline-offset-4">
                Задать вопрос →
              </Link>
            </div>
          </div>
        </section>

        {/* What's Included - Setup */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Одноразовая настройка (35,000 Kč)
              </h2>
              <p className="text-lg text-[#1A1A1A]/60 max-w-2xl mx-auto">
                Полный комплекс работ для старта: от разработки сайта до запуска первых кампаний
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Code2, title: "Разработка сайта", items: ["Landing page (до 5 секций)", "Адаптив для всех устройств", "Формы захвата лидов", "Интеграция с соцсетями", "Базовое SEO + метатеги"] },
                { icon: BarChart3, title: "Аналитика", items: ["Google Analytics 4 + GTM", "Server-side tracking (Stape.io)", "Meta CAPI + Enhanced Conv.", "Дашборды и отчёты", "Точность 70-85% (не 50%)"] },
                { icon: Megaphone, title: "Настройка рекламы", items: ["Google Ads (Search + Display)", "Meta Ads (FB + Instagram)", "Аудитории и таргетинг", "Креативы и тексты", "Первые 3 кампании запущены"] },
              ].map((section, idx) => (
                <div key={idx} className="bg-white border-2 border-[#1A1A1A] rounded-2xl p-8 transition-all shadow-[6px_6px_0px_0px_#1A1A1A] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_#1A1A1A]">
                  <div className="w-14 h-14 rounded-xl border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] bg-white flex items-center justify-center mb-6">
                    <section.icon className="w-7 h-7 text-[#1A1A1A]" />
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
          </div>
        </section>

        {/* Monthly Service */}
        <section className="py-16 md:py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Ведение и оптимизация (8,000 Kč/мес)
              </h2>
              <p className="text-lg text-[#1A1A1A]/60 max-w-2xl mx-auto">
                Мы не просто запускаем кампании — мы постоянно их улучшаем на основе данных
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                { icon: Megaphone, title: "Управление рекламой", items: ["Еженедельная оптимизация ставок и бюджета", "A/B тесты креативов и аудиторий", "Отключение неэффективных кампаний", "Ежемесячный отчёт с рекомендациями", "Консультации по стратегии"] },
                { icon: BarChart3, title: "Мониторинг аналитики", items: ["Проверка корректности трекинга", "Анализ воронки продаж", "Контроль качества лидов", "Рекомендации по улучшению конверсий", "Доступ к real-time дашбордам"] },
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

            <div className="bg-[#FFD166] border-2 border-[#1A1A1A] rounded-3xl p-8 text-center shadow-[8px_8px_0px_0px_#1A1A1A]">
              <div className="w-16 h-16 rounded-xl border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] bg-white flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-[#1A1A1A]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">Бонус: Приоритетная поддержка</h3>
              <p className="text-[#1A1A1A]/80 font-medium max-w-2xl mx-auto">
                Ответы на вопросы в течение 4 часов, срочные правки в течение 24 часов, прямой доступ к вашему менеджеру в Telegram
              </p>
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
                { title: "Локальный бизнес", desc: "Услуги, мастера, салоны — всё, что работает с местными клиентами", examples: ["Стоматологии", "Юристы", "Ремонт техники"] },
                { title: "B2B сервисы", desc: "Консалтинг, агентства, SaaS — продажи через заявки и встречи", examples: ["IT-консалтинг", "Бухгалтерия", "HR-услуги"] },
                { title: "Онлайн-школы", desc: "Образование, курсы, тренинги — нужны заявки на пробные уроки", examples: ["Языковые школы", "Репетиторы", "Коучинг"] },
                { title: "E-commerce (до 50 SKU)", desc: "Небольшие магазины с простым каталогом товаров", examples: ["Handmade", "Дропшиппинг", "Нишевые товары"] },
              ].map((item, i) => (
                <div key={i} className="bg-white border-2 border-[#1A1A1A] rounded-2xl p-6 transition-all shadow-[6px_6px_0px_0px_#1A1A1A] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_#1A1A1A]">
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{item.title}</h3>
                  <p className="text-[#1A1A1A]/60 mb-4">{item.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.examples.map((ex, j) => (
                      <span key={j} className="text-xs px-3 py-1 rounded-md border-2 border-[#1A1A1A] bg-[#FFD166] text-[#1A1A1A] font-bold shadow-[2px_2px_0px_0px_#1A1A1A]">{ex}</span>
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-12 text-center" style={{ fontFamily: 'var(--font-display)' }}>
              Как проходит работа
            </h2>
            <div className="space-y-6">
              {[
                { week: "Дни 1-3", title: "Разработка сайта", desc: "Создаём landing page, настраиваем формы, тестируем на всех устройствах" },
                { week: "Дни 4-5", title: "Настройка аналитики", desc: "Подключаем GTM, server-side tracking, проверяем передачу данных" },
                { week: "День 6", title: "Запуск рекламы", desc: "Создаём кампании в Google + Meta, настраиваем аудитории и креативы" },
                { week: "День 7+", title: "Мониторинг и оптимизация", desc: "Следим за результатами, оптимизируем ставки, улучшаем конверсии" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-20 h-20 rounded-2xl border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] bg-white flex items-center justify-center">
                    <span className="text-3xl font-bold text-[#1A1A1A]" style={{ fontFamily: 'var(--font-display)' }}>{i + 1}</span>
                  </div>
                  <div className="pt-2">
                    <div className="text-sm text-[#FF3366] font-bold mb-1 uppercase tracking-wide">{item.week}</div>
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{item.title}</h3>
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
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Готовы запустить лид-машину?
            </h2>
            <p className="text-xl text-[#1A1A1A]/60 mb-4">
              Полный цикл за 7 дней: сайт + аналитика + реклама
            </p>
            <p className="text-lg text-[#FF3366] font-bold mb-10">
              35,000 Kč setup + 8,000 Kč/мес
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="rounded-xl px-12 h-16 text-lg bg-[#FF3366] hover:bg-[#FF3366] text-white font-bold border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-y-[1px] active:translate-x-[1px] active:shadow-[0px_0px_0px_0px_#1A1A1A] transition-all"
                asChild
              >
                <Link href="/#contact">Запустить за 7 дней →</Link>
              </Button>
            </div>
            <p className="text-sm font-bold text-[#1A1A1A] bg-[#06D6A0] inline-block px-4 py-2 rounded-lg border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] mt-6">
              🎄 Новогоднее предложение: 25,000 Kč setup (скидка 10,000 Kč)
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
