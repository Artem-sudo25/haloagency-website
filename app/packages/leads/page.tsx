import { Button } from "@/components/ui/button";
import { Check, Sparkles, Zap, TrendingUp, BarChart3, Megaphone, Code2, Star } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: 'Пакет "Лид-машина" - HaloAgency',
  description: "Комплексное решение: сайт + реклама + аналитика. 35,000 Kč setup + 8,000 Kč/мес. 80% наших клиентов выбирают это.",
};

export default function LeadsPackagePage() {
  return (
    <main className="min-h-screen bg-ha-bg pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-ha-bg">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(249,115,22,0.15),transparent_50%)]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          {/* Popular Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 mb-6 backdrop-blur-sm">
            <Star className="w-5 h-5 text-orange-400 fill-orange-400" />
            <span className="text-base font-semibold text-orange-300">
              ХИТ ПРОДАЖ — 80% клиентов выбирают это
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Пакет <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-pink-400">
              Лид-машина
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Всё, что нужно для генерации лидов: сайт, реклама и правильная аналитика. Один пакет = полный цикл.
          </p>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-2xl p-6 backdrop-blur-sm">
              <p className="text-sm text-orange-300 mb-2 uppercase tracking-wide font-medium">Одноразово</p>
              <p className="text-5xl font-bold text-white mb-1">35,000 Kč</p>
              <p className="text-sm text-slate-400">Полная настройка</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-2xl p-6 backdrop-blur-sm">
              <p className="text-sm text-blue-300 mb-2 uppercase tracking-wide font-medium">Ежемесячно</p>
              <p className="text-5xl font-bold text-white mb-1">8,000 Kč</p>
              <p className="text-sm text-slate-400">Ведение + оптимизация</p>
            </div>
          </div>

          {/* Promo Badge */}
          <div className="inline-block bg-green-500/10 border border-green-500/30 rounded-full px-6 py-3 mb-8">
            <p className="text-green-400 font-semibold">
              🎄 Новогоднее предложение: 25,000 Kč setup (скидка 10k)
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="rounded-full px-10 h-14 text-lg bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-xl shadow-orange-500/25"
              asChild
            >
              <Link href="/#contact">Запустить за 7 дней →</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800"
              asChild
            >
              <Link href="/#contact">Задать вопрос</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What's Included - Setup */}
      <section className="py-20 border-y border-ha-border-dark bg-ha-bg-soft">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-medium text-orange-300 uppercase">Что входит</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Одноразовая настройка (35,000 Kč)
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Полный комплекс работ для старта: от разработки сайта до запуска первых кампаний
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Web Development */}
            <div className="bg-ha-card-dark border border-ha-border-dark rounded-3xl p-8 hover:border-blue-500/30 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-[2px] mb-6">
                <div className="w-full h-full rounded-2xl bg-ha-card-dark flex items-center justify-center">
                  <Code2 className="w-7 h-7 text-blue-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Разработка сайта</h3>
              <ul className="space-y-3">
                {[
                  "Landing page (до 5 секций)",
                  "Адаптив для всех устройств",
                  "Формы захвата лидов",
                  "Интеграция с соцсетями",
                  "Базовое SEO + метатеги",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Analytics */}
            <div className="bg-ha-card-dark border border-ha-border-dark rounded-3xl p-8 hover:border-green-500/30 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 p-[2px] mb-6">
                <div className="w-full h-full rounded-2xl bg-ha-card-dark flex items-center justify-center">
                  <BarChart3 className="w-7 h-7 text-green-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Аналитика</h3>
              <ul className="space-y-3">
                {[
                  "Google Analytics 4 + GTM",
                  "Server-side tracking (Stape.io)",
                  "Meta CAPI + Enhanced Conv.",
                  "Дашборды и отчёты",
                  "Точность 70-85% (не 50%)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ads Setup */}
            <div className="bg-ha-card-dark border border-ha-border-dark rounded-3xl p-8 hover:border-orange-500/30 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 p-[2px] mb-6">
                <div className="w-full h-full rounded-2xl bg-ha-card-dark flex items-center justify-center">
                  <Megaphone className="w-7 h-7 text-orange-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Настройка рекламы</h3>
              <ul className="space-y-3">
                {[
                  "Google Ads (Search + Display)",
                  "Meta Ads (FB + Instagram)",
                  "Аудитории и таргетинг",
                  "Креативы и тексты",
                  "Первые 3 кампании запущены",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
              <TrendingUp className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300 uppercase">Ежемесячное ведение</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ведение и оптимизация (8,000 Kč/мес)
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Мы не просто запускаем кампании — мы постоянно их улучшаем на основе данных
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-ha-card-dark border border-ha-border-dark rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Megaphone className="w-6 h-6 text-orange-400" />
                Управление рекламой
              </h3>
              <ul className="space-y-4">
                {[
                  "Еженедельная оптимизация ставок и бюджета",
                  "A/B тесты креативов и аудиторий",
                  "Отключение неэффективных кампаний",
                  "Ежемесячный отчёт с рекомендациями",
                  "Консультации по стратегии",
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
                Мониторинг аналитики
              </h3>
              <ul className="space-y-4">
                {[
                  "Проверка корректности трекинга",
                  "Анализ воронки продаж",
                  "Контроль качества лидов",
                  "Рекомендации по улучшению конверсий",
                  "Доступ к real-time дашбордам",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bonus */}
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-3xl p-8 text-center">
            <Zap className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">Бонус: Приоритетная поддержка</h3>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Ответы на вопросы в течение 4 часов, срочные правки в течение 24 часов, прямой доступ к вашему менеджеру в Telegram
            </p>
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
                title: "Локальный бизнес",
                desc: "Услуги, мастера, салоны — всё, что работает с местными клиентами",
                examples: ["Стоматологии", "Юристы", "Ремонт техники"],
              },
              {
                title: "B2B сервисы",
                desc: "Консалтинг, агентства, SaaS — продажи через заявки и встречи",
                examples: ["IT-консалтинг", "Бухгалтерия", "HR-услуги"],
              },
              {
                title: "Онлайн-школы",
                desc: "Образование, курсы, тренинги — нужны заявки на пробные уроки",
                examples: ["Языковые школы", "Репетиторы", "Коучинг"],
              },
              {
                title: "E-commerce (до 50 SKU)",
                desc: "Небольшие магазины с простым каталогом товаров",
                examples: ["Handmade", "Дропшиппинг", "Нишевые товары"],
              },
            ].map((item, i) => (
              <div key={i} className="bg-ha-card-dark border border-ha-border-dark rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
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

      {/* Timeline */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
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
                <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 flex items-center justify-center">
                  <span className="text-2xl font-bold text-orange-400">{i + 1}</span>
                </div>
                <div className="pt-4">
                  <div className="text-sm text-orange-400 font-semibold mb-1 uppercase tracking-wide">{item.week}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-gradient-to-br from-orange-500/5 via-red-500/5 to-pink-500/5 border-y border-ha-border-dark">
        <div className="container mx-auto max-w-4xl text-center">
          <Star className="w-16 h-16 text-orange-400 fill-orange-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Готовы запустить лид-машину?
          </h2>
          <p className="text-xl text-slate-300 mb-4">
            Полный цикл за 7 дней: сайт + аналитика + реклама
          </p>
          <p className="text-lg text-orange-400 font-semibold mb-10">
            35,000 Kč setup + 8,000 Kč/мес
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="rounded-full px-12 h-16 text-lg bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-2xl shadow-orange-500/30 font-semibold"
              asChild
            >
              <Link href="/#contact">Запустить за 7 дней →</Link>
            </Button>
          </div>
          <p className="text-sm text-slate-500 mt-6">
            🎄 Новогоднее предложение: 25,000 Kč setup (скидка 10,000 Kč)
          </p>
        </div>
      </section>
    </main>
  );
}
