import { Button } from "@/components/ui/button";
import { Check, Code2, Smartphone, Zap, Globe, Mail } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: 'Пакет "Сайт-визитка" - HaloAgency',
  description: "Базовое онлайн-присутствие за 3-5 дней. Landing page с формами, адаптивный дизайн, базовое SEO. От 15,000 Kč.",
};

export default function SitePackagePage() {
  return (
    <main className="min-h-screen bg-[#F5F5F7] pt-20">
      {/* Dot grid background */}
      <div className="fixed inset-0 z-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-16 md:py-20 md:py-32 px-4 overflow-hidden">
          <div className="container mx-auto max-w-5xl text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] mb-6">
              <Code2 className="w-4 h-4 text-[#FF3366]" />
              <span className="text-sm font-bold text-[#1A1A1A] uppercase tracking-wide">Starter Package</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-[#1A1A1A] mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Пакет <br />
              <span className="relative inline-block z-10">
                Сайт-визитка
                <svg className="absolute -bottom-2 left-0 w-full h-4 text-[#FF3366] -z-10" fill="none" preserveAspectRatio="none" viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeLinecap="round" strokeWidth="4" />
                </svg>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-[#1A1A1A]/60 mb-10 max-w-3xl mx-auto leading-relaxed">
              Идеально для старта: современный сайт за 3-5 дней без лишних сложностей
            </p>

            <div className="inline-block bg-[#06D6A0] border-2 border-[#1A1A1A] rounded-3xl p-8 mb-10 shadow-[8px_8px_0px_0px_#1A1A1A]">
              <p className="text-sm font-bold text-[#1A1A1A] mb-2 uppercase tracking-wide">Единоразовый платёж</p>
              <p className="text-6xl font-extrabold text-[#1A1A1A] mb-2" style={{ fontFamily: 'var(--font-display)' }}>15,000 Kč</p>
              <p className="font-medium text-[#1A1A1A]">Никаких ежемесячных платежей</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Button
                size="lg"
                className="rounded-xl px-10 h-14 text-lg bg-[#FF3366] hover:bg-[#FF3366] text-white font-bold border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-y-[1px] active:translate-x-[1px] active:shadow-[0px_0px_0px_0px_#1A1A1A] transition-all"
                asChild
              >
                <Link href="/#contact">Заказать сайт →</Link>
              </Button>
              <Link href="/#contact" className="text-[#1A1A1A] font-bold hover:text-[#FF3366] transition-colors text-base underline decoration-2 underline-offset-4">
                Задать вопрос →
              </Link>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Что входит в пакет
              </h2>
              <p className="text-lg text-[#1A1A1A]/60 max-w-2xl mx-auto">
                Всё необходимое для профессионального онлайн-присутствия
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: Code2, title: "Разработка", items: ["Landing page (1-3 страницы)", "Современный дизайн", "Next.js (быстрая загрузка)", "Анимации и переходы", "Домен и хостинг (Vercel)"] },
                { icon: Smartphone, title: "Адаптивность", items: ["Полная адаптация под мобильные", "Тестирование на всех устройствах", "Touch-friendly интерфейс", "Быстрая загрузка на 3G/4G", "Lighthouse Score 90+"] },
                { icon: Mail, title: "Формы захвата", items: ["Контактная форма", "Отправка на email", "Валидация полей", "Защита от спама", "Уведомления в Telegram (опция)"] },
                { icon: Globe, title: "Базовое SEO", items: ["Метатеги и Open Graph", "Настройка robots.txt", "Sitemap.xml", "Оптимизация изображений", "Настройка Google Search Console"] },
              ].map((section, idx) => (
                <div key={idx} className="bg-white border-2 border-[#1A1A1A] rounded-2xl p-8 transition-all shadow-[6px_6px_0px_0px_#1A1A1A] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_#1A1A1A]">
                  <div className="w-14 h-14 rounded-xl border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] bg-white flex items-center justify-center mb-6">
                    <section.icon className="w-7 h-7 text-[#1A1A1A]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6">{section.title}</h3>
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
                { title: "Фрилансеры и консультанты", desc: "Нужна онлайн-визитка с портфолио и контактами" },
                { title: "Локальные мастера", desc: "Сантехники, электрики, репетиторы — простой сайт с формой заявки" },
                { title: "Стартапы на MVP", desc: "Быстро валидировать идею без больших вложений" },
                { title: "Малый бизнес", desc: "Кафе, салоны, мастерские — базовое присутствие в интернете" },
              ].map((item, i) => (
                <div key={i} className="bg-white border-2 border-[#1A1A1A] rounded-2xl p-6 transition-all shadow-[6px_6px_0px_0px_#1A1A1A] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_#1A1A1A]">
                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">{item.title}</h3>
                  <p className="text-[#1A1A1A]/60">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 md:py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-12 text-center" style={{ fontFamily: 'var(--font-display)' }}>
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
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] bg-white flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#1A1A1A]" style={{ fontFamily: 'var(--font-display)' }}>{i + 1}</span>
                  </div>
                  <div className="pt-1">
                    <div className="text-sm text-[#FF3366] font-bold mb-1 uppercase tracking-wide">{item.day}</div>
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{item.title}</h3>
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
                Нужны лиды? Апгрейд до "Лид-машины"
              </h2>
              <p className="text-lg font-medium text-[#1A1A1A] mb-8 max-w-2xl mx-auto">
                Если позже захотите добавить рекламу и правильную аналитику — переход на пакет "Лид-машина" со скидкой 10,000 Kč
              </p>
              <Button
                size="lg"
                className="rounded-xl px-8 h-12 bg-[#FF3366] hover:bg-[#FF3366] text-white font-bold border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-y-[1px] active:translate-x-[1px] active:shadow-[0px_0px_0px_0px_#1A1A1A] transition-all"
                asChild
              >
                <Link href="/packages/leads">Посмотреть "Лид-машину" →</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Запустим ваш сайт за 3-5 дней
            </h2>
            <p className="text-xl text-[#1A1A1A]/60 mb-4">
              Современно, быстро, без переплат
            </p>
            <p className="text-2xl text-[#FF3366] font-bold mb-10">15,000 Kč</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="rounded-xl px-12 h-16 text-lg bg-[#FF3366] hover:bg-[#FF3366] text-white font-bold border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-y-[1px] active:translate-x-[1px] active:shadow-[0px_0px_0px_0px_#1A1A1A] transition-all"
                asChild
              >
                <Link href="/#contact">Заказать сайт →</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
