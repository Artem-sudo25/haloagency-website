"use client";

import { motion } from "framer-motion";
import { Brain, Rocket, Sparkles, Target, TrendingUp, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useContactModalActions } from "@/context/contact-modal-context";

export default function AboutPage() {
  const { open } = useContactModalActions();

  return (
    <main className="min-h-screen bg-[#F5F5F7] pt-20 overflow-hidden">
      {/* Dot grid background */}
      <div className="fixed inset-0 z-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-16 md:py-20 md:py-32 px-4">
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-left"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#1A1A1A]/10 shadow-sm mb-8">
                  <Brain className="w-4 h-4 text-[#FF3366]" />
                  <span className="text-sm font-bold text-[#1A1A1A]/60 tracking-wide uppercase">
                    AI-First Agency
                  </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold text-[#1A1A1A] mb-6 leading-tight tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                  Мы не просто <br />
                  <span className="relative inline-block z-10">
                    делаем сайты
                    <svg className="absolute -bottom-2 left-0 w-full h-4 text-[#FF3366] -z-10" fill="none" preserveAspectRatio="none" viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeLinecap="round" strokeWidth="4" />
                    </svg>
                  </span>
                </h1>

                <p className="text-xl text-[#1A1A1A]/60 mb-10 max-w-xl leading-relaxed">
                  Мы строим системы привлечения клиентов, которые работают на
                  автопилоте. Используя AI и передовую аналитику, мы превращаем
                  ваш сайт в машину продаж.
                </p>

                <Button
                  size="lg"
                  onClick={() => open()}
                  className="rounded-full px-8 bg-[#FF3366] hover:bg-[#FF3366]/90 text-white font-bold shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:translate-y-1 hover:shadow-[0px_0px_0px_0px_rgba(26,26,26,1)] transition-all h-12"
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

                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative"
                  >
                    <div className="relative p-1 rounded-[2rem] bg-gradient-to-br from-[#FF3366] via-pink-400 to-[#FF3366]/50">
                      <div className="relative bg-white rounded-[2rem] overflow-hidden">
                        <Image
                          src="/ceo_professional_portrait.webp"
                          alt="CEO - Artem Horvatsky"
                          width={500}
                          height={500}
                          className="rounded-[2rem]"
                          priority
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent" />

                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="bg-white/90 backdrop-blur-sm border border-[#1A1A1A]/5 rounded-2xl p-4 shadow-sm">
                            <p className="text-[#1A1A1A] font-bold text-lg">Artem Horvatsky</p>
                            <p className="text-[#FF3366] text-sm font-medium">Founder & CEO</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-12">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <div className="bg-white/80 backdrop-blur-sm border border-[#1A1A1A]/5 rounded-[2rem] p-8 shadow-sm">
              <p className="text-2xl md:text-3xl font-medium text-[#1A1A1A] leading-relaxed">
                "В 2026 году{" "}
                <span className="text-[#FF3366] font-bold">
                  AI — это не преимущество, это необходимость
                </span>
                . Мы используем передовые технологии, чтобы ваш бизнес рос быстрее
                конкурентов."
              </p>
            </div>
          </div>
        </section>

        {/* CEO Section */}
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
              <div className="md:col-span-1">
                <div className="sticky top-32">
                  <h2 className="text-3xl font-extrabold text-[#1A1A1A] mb-4" style={{ fontFamily: 'var(--font-display)' }}>Кто мы?</h2>
                  <div className="h-1 w-20 bg-[#FF3366] rounded-full mb-6" />
                </div>
              </div>

              <div className="md:col-span-2 space-y-6 text-[#1A1A1A]/70 text-lg leading-relaxed">
                <p>
                  Меня зовут{" "}
                  <span className="text-[#1A1A1A] font-semibold">Артем Хорватский</span>
                  , и я основатель HaloAgency. Я не просто маркетолог — я инженер роста.
                </p>

                <p>
                  За последние годы я помог десяткам компаний масштабироваться с помощью
                  <span className="text-[#FF3366] font-medium"> AI-оптимизированных воронок продаж</span>
                  , server-side трекинга и высокоточной рекламы.
                </p>

                <p>
                  Большинство агентств продают "красивые сайты". Мы продаем{" "}
                  <span className="text-[#1A1A1A] font-semibold">результаты</span>:
                  больше лидов, выше конверсия, ниже стоимость привлечения.
                </p>

                <div className="bg-[#FF3366]/5 border border-[#FF3366]/10 rounded-2xl p-6 mt-8">
                  <p className="text-[#FF3366] font-medium">
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
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Почему AI-First?
              </h2>
              <p className="text-xl text-[#1A1A1A]/60 max-w-2xl mx-auto">
                Искусственный интеллект — это не будущее. Это настоящее. И мы
                используем его на полную.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Brain, title: "AI-копирайтинг", desc: "Генерируем и тестируем сотни вариантов текстов для максимальной конверсии." },
                { icon: Target, title: "Умный таргетинг", desc: "AI находит вашу идеальную аудиторию быстрее и точнее любого маркетолога." },
                { icon: TrendingUp, title: "Предиктивная аналитика", desc: "Предсказываем тренды и оптимизируем кампании до того, как конкуренты поймут, что происходит." },
                { icon: Zap, title: "Автоматизация", desc: "Автоматизируем рутину: от A/B тестов до ретаргетинга." },
                { icon: Sparkles, title: "Персонализация", desc: "AI адаптирует контент под каждого посетителя в реальном времени." },
                { icon: Rocket, title: "Быстрый запуск", desc: "То, что раньше занимало недели, мы делаем за дни благодаря AI-инструментам." },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className="group p-6 rounded-[2rem] bg-white border border-[#1A1A1A]/5 hover:border-[#FF3366]/30 transition-all duration-300 relative overflow-hidden shadow-sm hover:shadow-md"
                >
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full bg-[#FF3366]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-all">
                      <item.icon className="w-6 h-6 text-[#FF3366]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">{item.title}</h3>
                    <p className="text-sm text-[#1A1A1A]/60">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-12 text-center" style={{ fontFamily: 'var(--font-display)' }}>
              Наши принципы
            </h2>

            <div className="space-y-6">
              {[
                { title: "Результаты > Процесс", desc: "Нам не важно, сколько часов мы работали. Важно, сколько лидов вы получили." },
                { title: "Данные > Мнения", desc: 'Мы не спорим, что "красивее". Мы тестируем и смотрим на цифры.' },
                { title: "Скорость > Перфекционизм", desc: "Лучше запустить сегодня и улучшить завтра, чем ждать идеального момента." },
                { title: "Прозрачность > Обещания", desc: "Мы не обещаем золотые горы. Мы показываем реальные метрики и ROI." },
              ].map((value) => (
                <div
                  key={value.title}
                  className="p-6 rounded-2xl bg-white border border-[#1A1A1A]/5 hover:border-[#FF3366]/30 transition-colors shadow-sm hover:shadow-md"
                >
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{value.title}</h3>
                  <p className="text-[#1A1A1A]/60">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Готовы работать с AI-first агентством?
            </h2>
            <p className="text-xl text-[#1A1A1A]/60 mb-10">
              Давайте обсудим, как мы можем помочь вашему бизнесу расти быстрее.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Button
                size="lg"
                onClick={() => open()}
                className="rounded-full px-10 h-14 text-lg bg-[#FF3366] hover:bg-[#FF3366]/90 text-white font-bold shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:translate-y-1 hover:shadow-[0px_0px_0px_0px_rgba(26,26,26,1)] transition-all"
              >
                Начать проект
              </Button>
              <Link href="/case-studies" className="text-[#1A1A1A]/60 font-medium hover:text-[#FF3366] transition-colors text-base">
                Посмотреть кейсы →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
