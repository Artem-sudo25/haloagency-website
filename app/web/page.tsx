import { Button } from "@/components/ui/button";
import { Check, Code2, Rocket, Smartphone, Globe } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Разработка сайтов - HaloAgency",
  description: "Современные сайты на Next.js. От landing за 3 дня до e-commerce за неделю. Быстро, SEO-ready, mobile-first.",
};

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen bg-ha-bg pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-ha-bg">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_50%)]" />
        </div>

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
            <Code2 className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300 tracking-wide uppercase">
              Web Development
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Сайты, которые <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              продают за вас
            </span>
          </h1>

          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Разрабатываем на Next.js. Это значит: мгновенная загрузка, идеальное SEO и удобство для мобильных пользователей.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="rounded-full px-8 bg-ha-primary hover:bg-blue-600 text-white shadow-lg shadow-blue-500/25"
              asChild
            >
              <Link href="/#contact">Обсудить проект</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800"
              asChild
            >
              <Link href="/#packages">Цены и сроки</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 border-y border-ha-border-dark bg-ha-bg-soft">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Next.js 14", label: "Framework", icon: Globe },
              { name: "TypeScript", label: "Reliability", icon: Code2 },
              { name: "Tailwind CSS", label: "Styling", icon: Rocket },
              { name: "Framer Motion", label: "Animations", icon: Smartphone },
            ].map((tech, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl bg-ha-card-dark border border-ha-border-dark hover:border-slate-600 transition-colors">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 text-blue-400">
                  <tech.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{tech.name}</h3>
                <p className="text-sm text-slate-500">{tech.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
            Что мы разрабатываем
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Landing Page",
                desc: "Идеально для запуска продукта или услуги. Высокая конверсия.",
                price: "от 8,000 CZK",
                time: "3-5 дней",
                features: ["Адаптивный дизайн", "Формы захвата", "Базовое SEO"],
              },
              {
                title: "Корпоративный сайт",
                desc: "Многостраничный сайт для компании. Блог, услуги, о нас.",
                price: "от 15,000 CZK",
                time: "1-2 недели",
                features: ["CMS (админка)", "Анимации", "Мультиязычность"],
              },
              {
                title: "E-commerce",
                desc: "Полноценный интернет-магазин с корзиной и оплатой.",
                price: "от 50,000 CZK",
                time: "3-4 недели",
                features: ["Каталог товаров", "Платежные шлюзы", "Личный кабинет"],
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col p-8 rounded-3xl bg-ha-card-dark border border-ha-border-dark hover:border-blue-500/50 transition-colors group">
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 mb-6 flex-grow">{item.desc}</p>

                <div className="space-y-3 mb-8">
                  {item.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-slate-300">
                      <Check className="w-4 h-4 text-green-500" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-slate-800">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-2xl font-bold text-white">{item.price}</span>
                    <span className="text-sm text-slate-500">{item.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-ha-bg-soft border-t border-ha-border-dark px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
            Как мы работаем
          </h2>
          <div className="space-y-8">
            {[
              { step: "01", title: "Бриф и структура", desc: "Обсуждаем задачи, составляем ТЗ и структуру будущего сайта." },
              { step: "02", title: "Дизайн и прототип", desc: "Рисуем макет, утверждаем визуальный стиль и UX." },
              { step: "03", title: "Разработка", desc: "Пишем чистый код на Next.js, настраиваем анимации и логику." },
              { step: "04", title: "Запуск", desc: "Тестируем, подключаем домен, настраиваем аналитику и сдаем проект." },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 md:gap-10 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-ha-card-dark border border-ha-border-dark flex items-center justify-center text-xl font-bold text-blue-500 shadow-lg shadow-blue-500/10">
                  {item.step}
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Готовы начать?
          </h2>
          <p className="text-xl text-slate-400 mb-10">
            Запустим ваш проект в кратчайшие сроки с гарантией качества.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="rounded-full px-10 h-14 text-lg bg-ha-primary hover:bg-blue-600 text-white shadow-xl shadow-blue-500/20"
              asChild
            >
              <Link href="/#contact">Начать проект</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
