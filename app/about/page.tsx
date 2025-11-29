"use client";

import { motion } from "framer-motion";
import { Brain, Rocket, Sparkles, Target, TrendingUp, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SpotlightHero } from "@/components/ui/spotlight";
import { useContactModal } from "@/context/contact-modal-context";

export default function AboutPage() {
  const { open } = useContactModal();

  return (
    <main className="min-h-screen bg-ha-bg pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4">
        <SpotlightHero />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
                <Brain className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-300 tracking-wide uppercase">
                  AI-First Agency
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                Мы не просто <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  делаем сайты
                </span>
              </h1>

              <p className="text-xl text-slate-400 mb-10 max-w-xl leading-relaxed">
                Мы строим системы привлечения клиентов, которые работают на
                автопилоте. Используя AI и передовую аналитику, мы превращаем
                ваш сайт в машину продаж.
              </p>

              <Button
                size="lg"
                onClick={() => open()}
                className="rounded-full px-8 bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/25 h-12"
              >
                Обсудить проект
              </Button>
            </motion.div>

            {/* CEO Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative overflow-hidden px-4"
            >
              <div className="relative max-w-md mx-auto">
                {/* Animated gradient glow */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30"
                />

                {/* Floating animation */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative"
                >
                  {/* Gradient border effect */}
                  <div className="relative p-1 rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
                    <div className="relative bg-slate-900 rounded-3xl overflow-hidden">
                      <Image
                        src="/ceo_professional_portrait.webp"
                        alt="CEO - Artem Horvatsky"
                        width={500}
                        height={500}
                        className="rounded-3xl"
                        priority
                      />

                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                      {/* Badge */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="bg-slate-900/90 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                          <p className="text-white font-bold text-lg">
                            Artem Horvatsky
                          </p>
                          <p className="text-blue-400 text-sm">Founder & CEO</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative elements - adjusted positioning */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <p className="text-2xl md:text-3xl font-medium text-slate-200 leading-relaxed">
            "В 2026 году{" "}
            <span className="text-blue-400">
              AI — это не преимущество, это необходимость
            </span>
            . Мы используем передовые технологии, чтобы ваш бизнес рос быстрее
            конкурентов."
          </p>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-24 px-4 bg-ha-bg-soft">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-1">
              <div className="sticky top-32">
                <h2 className="text-3xl font-bold text-white mb-4">Кто мы?</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6" />
              </div>
            </div>

            <div className="md:col-span-2 space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                Меня зовут{" "}
                <span className="text-white font-semibold">
                  Артем Хорватский
                </span>
                , и я основатель HaloAgency. Я не просто маркетолог — я инженер
                роста.
              </p>

              <p>
                За последние годы я помог десяткам компаний масштабироваться с
                помощью
                <span className="text-blue-400">
                  {" "}
                  AI-оптимизированных воронок продаж
                </span>
                , server-side трекинга и высокоточной рекламы.
              </p>

              <p>
                Большинство агентств продают "красивые сайты". Мы продаем{" "}
                <span className="text-white font-semibold">результаты</span>:
                больше лидов, выше конверсия, ниже стоимость привлечения.
              </p>

              <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6 mt-8">
                <p className="text-blue-300 font-medium">
                  💡 Наш подход: Мы не гадаем. Мы тестируем, измеряем и
                  оптимизируем каждый шаг воронки с помощью AI и продвинутой
                  аналитики.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why AI-First */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Почему AI-First?
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Искусственный интеллект — это не будущее. Это настоящее. И мы
              используем его на полную.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Brain,
                title: "AI-копирайтинг",
                desc: "Генерируем и тестируем сотни вариантов текстов для максимальной конверсии.",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: Target,
                title: "Умный таргетинг",
                desc: "AI находит вашу идеальную аудиторию быстрее и точнее любого маркетолога.",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: TrendingUp,
                title: "Предиктивная аналитика",
                desc: "Предсказываем тренды и оптимизируем кампании до того, как конкуренты поймут, что происходит.",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: Zap,
                title: "Автоматизация",
                desc: "Автоматизируем рутину: от A/B тестов до ретаргетинга.",
                color: "from-orange-500 to-red-500",
              },
              {
                icon: Sparkles,
                title: "Персонализация",
                desc: "AI адаптирует контент под каждого посетителя в реальном времени.",
                color: "from-indigo-500 to-purple-500",
              },
              {
                icon: Rocket,
                title: "Быстрый запуск",
                desc: "То, что раньше занимало недели, мы делаем за дни благодаря AI-инструментам.",
                color: "from-yellow-500 to-orange-500",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 relative overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                <div className="relative z-10">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} opacity-80 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:opacity-100 transition-all`}
                  >
                    <item.icon className="w-6 h-6 text-white drop-shadow-lg" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 bg-ha-bg-soft border-y border-ha-border-dark">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Наши принципы
          </h2>

          <div className="space-y-6">
            {[
              {
                title: "Результаты > Процесс",
                desc: "Нам не важно, сколько часов мы работали. Важно, сколько лидов вы получили.",
              },
              {
                title: "Данные > Мнения",
                desc: 'Мы не спорим, что "красивее". Мы тестируем и смотрим на цифры.',
              },
              {
                title: "Скорость > Перфекционизм",
                desc: "Лучше запустить сегодня и улучшить завтра, чем ждать идеального момента.",
              },
              {
                title: "Прозрачность > Обещания",
                desc: "Мы не обещаем золотые горы. Мы показываем реальные метрики и ROI.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-2xl bg-slate-900 border border-white/10 hover:border-blue-500/30 transition-colors"
              >
                <h3 className="text-xl font-bold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-400">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Готовы работать с AI-first агентством?
          </h2>
          <p className="text-xl text-slate-400 mb-10">
            Давайте обсудим, как мы можем помочь вашему бизнесу расти быстрее.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => open()}
              className="rounded-full px-10 h-14 text-lg bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-500/20"
            >
              Начать проект
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-10 h-14 text-lg border-white/10 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm"
              asChild
            >
              <Link href="/case-studies">Посмотреть кейсы</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
