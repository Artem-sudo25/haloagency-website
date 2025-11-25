import { Button } from "@/components/ui/button";
import { Check, Code2, Smartphone, Zap, Globe, Mail } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: 'Пакет "Сайт-визитка" - HaloAgency',
  description: "Базовое онлайн-присутствие за 3-5 дней. Landing page с формами, адаптивный дизайн, базовое SEO. От 15,000 Kč.",
};

export default function SitePackagePage() {
  return (
    <main className="min-h-screen bg-ha-bg pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-ha-bg">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_50%)]" />
        </div>

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Code2 className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300 uppercase tracking-wide">
              Starter Package
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Пакет <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              Сайт-визитка
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Идеально для старта: современный сайт за 3-5 дней без лишних сложностей
          </p>

          {/* Pricing */}
          <div className="inline-block bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/30 rounded-2xl p-8 backdrop-blur-sm mb-10">
            <p className="text-sm text-blue-300 mb-2 uppercase tracking-wide font-medium">Единоразовый платёж</p>
            <p className="text-6xl font-bold text-white mb-2">15,000 Kč</p>
            <p className="text-slate-400">Никаких ежемесячных платежей</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="rounded-full px-10 h-14 text-lg bg-ha-primary hover:bg-blue-600 text-white shadow-xl shadow-blue-500/25"
              asChild
            >
              <Link href="/#contact">Заказать сайт →</Link>
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

      {/* What's Included */}
      <section className="py-20 border-y border-ha-border-dark bg-ha-bg-soft">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Что входит в пакет
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Всё необходимое для профессионального онлайн-присутствия
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-ha-card-dark border border-ha-border-dark rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
                <Code2 className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-6">Разработка</h3>
              <ul className="space-y-4">
                {[
                  "Landing page (1-3 страницы)",
                  "Современный дизайн",
                  "Next.js (быстрая загрузка)",
                  "Анимации и переходы",
                  "Домен и хостинг (Vercel)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-ha-card-dark border border-ha-border-dark rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-6">Адаптивность</h3>
              <ul className="space-y-4">
                {[
                  "Полная адаптация под мобильные",
                  "Тестирование на всех устройствах",
                  "Touch-friendly интерфейс",
                  "Быстрая загрузка на 3G/4G",
                  "Lighthouse Score 90+",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-ha-card-dark border border-ha-border-dark rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6">
                <Mail className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-6">Формы захвата</h3>
              <ul className="space-y-4">
                {[
                  "Контактная форма",
                  "Отправка на email",
                  "Валидация полей",
                  "Защита от спама",
                  "Уведомления в Telegram (опция)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-ha-card-dark border border-ha-border-dark rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-6">Базовое SEO</h3>
              <ul className="space-y-4">
                {[
                  "Метатеги и Open Graph",
                  "Настройка robots.txt",
                  "Sitemap.xml",
                  "Оптимизация изображений",
                  "Настройка Google Search Console",
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

      {/* Ideal For */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Для кого этот пакет?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Фрилансеры и консультанты",
                desc: "Нужна онлайн-визитка с портфолио и контактами",
              },
              {
                title: "Локальные мастера",
                desc: "Сантехники, электрики, репетиторы — простой сайт с формой заявки",
              },
              {
                title: "Стартапы на MVP",
                desc: "Быстро валидировать идею без больших вложений",
              },
              {
                title: "Малый бизнес",
                desc: "Кафе, салоны, мастерские — базовое присутствие в интернете",
              },
            ].map((item, i) => (
              <div key={i} className="bg-ha-card-dark border border-ha-border-dark rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-ha-bg-soft border-t border-ha-border-dark px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Этапы работы
          </h2>
          <div className="space-y-6">
            {[
              { day: "День 1", title: "Бриф и структура", desc: "Обсуждаем задачи, составляем структуру страниц, собираем контент" },
              { day: "День 2-3", title: "Дизайн и разработка", desc: "Рисуем макет, утверждаем стиль, пишем код на Next.js" },
              { day: "День 4", title: "Тестирование", desc: "Проверяем на всех устройствах, тестируем формы, оптимизируем скорость" },
              { day: "День 5", title: "Запуск", desc: "Подключаем домен, настраиваем аналитику, передаём доступы" },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-500/30 flex items-center justify-center">
                  <span className="text-xl font-bold text-blue-400">{i + 1}</span>
                </div>
                <div className="pt-3">
                  <div className="text-sm text-blue-400 font-semibold mb-1 uppercase tracking-wide">{item.day}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upgrade Path */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-3xl p-8 md:p-12 text-center">
            <Zap className="w-12 h-12 text-orange-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Нужны лиды? Апгрейд до "Лид-машины"
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Если позже захотите добавить рекламу и правильную аналитику — переход на пакет "Лид-машина" со скидкой 10,000 Kč
            </p>
            <Button
              size="lg"
              className="rounded-full px-8 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white"
              asChild
            >
              <Link href="/packages/leads">Посмотреть "Лид-машину" →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 border-y border-ha-border-dark">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Запустим ваш сайт за 3-5 дней
          </h2>
          <p className="text-xl text-slate-300 mb-4">
            Современно, быстро, без переплат
          </p>
          <p className="text-2xl text-blue-400 font-bold mb-10">
            15,000 Kč
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="rounded-full px-12 h-16 text-lg bg-ha-primary hover:bg-blue-600 text-white shadow-2xl shadow-blue-500/30 font-semibold"
              asChild
            >
              <Link href="/#contact">Заказать сайт →</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
