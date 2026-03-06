"use client";

import {
  Apple,
  BarChart3,
  Ban,
  Check,
  CircleX,
  Cookie,
  Globe,
  Lock,
  Server,
  Target,
  TrendingDown,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useContactModalActions } from "@/context/contact-modal-context";
import { motion } from "framer-motion";

export default function TrackingPage() {
  const { open } = useContactModalActions();
  return (
    <main className="min-h-screen bg-[#F5F5F7] pt-20 overflow-hidden">
      {/* Dot grid background */}
      <div className="fixed inset-0 z-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-6 md:py-32 px-4">

          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] mb-8">
                  <BarChart3 className="w-4 h-4 text-[#FF3366]" />
                  <span className="text-sm font-bold text-[#1A1A1A] tracking-wide uppercase">Advanced Analytics</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold text-[#1A1A1A] mb-6 leading-tight tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                  Видеть <br />
                  <span className="relative inline-block z-10">
                    каждую конверсию
                    <svg className="absolute -bottom-2 left-0 w-full h-4 text-[#FF3366] -z-10" fill="none" preserveAspectRatio="none" viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeLinecap="round" strokeWidth="4" />
                    </svg>
                  </span>
                </h1>

                <p className="text-xl text-[#1A1A1A]/60 mb-4 max-w-xl leading-relaxed">
                  Server-side tracking и Meta CAPI. Мы восстанавливаем 20-40% данных, которые теряются из-за блокировщиков и iOS.
                </p>

                <p className="text-sm text-[#1A1A1A]/40 mb-10 max-w-xl font-medium">
                  HaloTrack — first-party server-side трекинг от HaloAgency, адаптированный под GDPR, iOS и рекламу в Чехии.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <Button
                    size="lg"
                    onClick={() => open({ service: "tracking" })}
                    className="rounded-xl px-8 bg-[#FF3366] hover:bg-[#FF3366] text-white font-bold border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-y-[1px] active:translate-x-[1px] active:shadow-[0px_0px_0px_0px_#1A1A1A] transition-all h-12"
                  >
                    Настроить трекинг
                  </Button>
                  <Link href="#problem" className="text-[#1A1A1A]/60 font-medium hover:text-[#FF3366] transition-colors text-base">
                    Как это работает →
                  </Link>
                </div>

                <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
                  <Button variant="ghost" size="sm" className="text-[#1A1A1A]/40 hover:text-[#FF3366] p-0 h-auto font-normal hover:bg-transparent" asChild>
                    <Link href="#target-audience">Для кого</Link>
                  </Button>
                  <Button variant="ghost" size="sm" className="text-[#1A1A1A]/40 hover:text-[#FF3366] p-0 h-auto font-normal hover:bg-transparent" asChild>
                    <Link href="#pricing">Стоимость</Link>
                  </Button>
                  <Button variant="ghost" size="sm" className="text-[#1A1A1A]/40 hover:text-[#FF3366] p-0 h-auto font-normal hover:bg-transparent" asChild>
                    <Link href="#faq">FAQ</Link>
                  </Button>
                </div>
              </div>

              {/* Hero Graphic: Data Stream Visualization */}
              <div className="relative hidden lg:block h-[400px]">
                <div className="absolute inset-0 bg-[#E0E7FF] rounded-3xl border-2 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#1A1A1A] overflow-hidden">
                  <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#1A1A1A 1px, transparent 1px)', backgroundSize: '16px 16px', opacity: 0.1 }} />

                  <div className="absolute top-1/2 left-12 -translate-y-1/2 w-24 h-24 bg-white rounded-xl border-2 border-[#1A1A1A] flex flex-col items-center justify-center z-10 shadow-[4px_4px_0px_0px_#1A1A1A]">
                    <Globe className="w-8 h-8 text-[#1A1A1A]/60 mb-2" />
                    <span className="text-xs font-bold text-[#1A1A1A]">Browser</span>
                  </div>

                  <div className="absolute top-1/2 right-12 -translate-y-1/2 w-24 h-24 bg-[#FF3366] rounded-xl border-2 border-[#1A1A1A] flex flex-col items-center justify-center z-10 shadow-[4px_4px_0px_0px_#1A1A1A]">
                    <Server className="w-8 h-8 text-white mb-2" />
                    <span className="text-xs font-bold text-white">Server</span>
                  </div>

                  <div className="absolute top-1/2 left-36 right-36 h-0.5 bg-[#1A1A1A]/10 -translate-y-1/2">
                    <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-[#FF3366] rounded-full shadow-[0_0_10px_rgba(255,51,102,0.6)] animate-[moveParticle_2s_linear_infinite]" />
                    <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-[#FF3366] rounded-full shadow-[0_0_10px_rgba(255,51,102,0.6)] animate-[moveParticle_2s_linear_infinite_0.6s]" />
                    <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-[#FF3366] rounded-full shadow-[0_0_10px_rgba(255,51,102,0.6)] animate-[moveParticle_2s_linear_infinite_1.2s]" />
                  </div>

                  <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 rounded-full bg-red-50 border border-red-200 flex items-center justify-center animate-pulse">
                      <Lock className="w-5 h-5 text-red-400" />
                    </div>
                  </div>

                  <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-xs text-[#1A1A1A] font-bold bg-[#FFD166] px-3 py-1 rounded-md border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A]">
                    Обход блокировщиков...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Analytics No Longer Works */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="relative p-8 md:p-10 rounded-3xl bg-[#FFD166] border-2 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#1A1A1A] overflow-hidden">
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl border-2 border-[#1A1A1A] bg-white flex items-center justify-center shadow-[2px_2px_0px_0px_#1A1A1A]">
                  <TrendingDown className="w-7 h-7 text-[#1A1A1A]" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4">
                    Почему обычная аналитика больше не работает
                  </h2>
                  <div className="space-y-2 text-[#1A1A1A]/60 leading-relaxed">
                    <p>
                      Браузеры, iOS и GDPR всё чаще блокируют передачу данных. В результате реклама «видит» только часть заявок и обучается на неполной картине.
                    </p>
                    <p className="text-[#FF3366] font-medium">
                      → Мы решаем эту проблему с помощью server-side и first-party трекинга.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem - Cards */}
        <section id="problem" className="py-16 md:py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Куда пропадают данные?
              </h2>
              <p className="text-lg text-[#1A1A1A]/60 max-w-2xl mx-auto">
                Потеря данных — это не одна проблема, а сразу несколько факторов, которые накладываются друг на друга.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "iOS 14.5+", desc: "Блокирует трекинг по умолчанию. Минус 20-30% данных.", icon: Apple, bg: "bg-[#FFD166]" },
                { title: "Ad Blockers", desc: "30-40% пользователей блокируют скрипты аналитики.", icon: Ban, bg: "bg-[#06D6A0]" },
                { title: "Cookies", desc: "Браузеры ограничивают срок жизни cookies до 7 дней.", icon: Cookie, bg: "bg-[#B19CD9]" },
                { title: "Ошибки", desc: "Неверная атрибуция и дублирование транзакций.", icon: CircleX, bg: "bg-white" },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`group p-6 rounded-2xl ${item.bg} border-2 border-[#1A1A1A] transition-all duration-300 shadow-[6px_6px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[10px_10px_0px_0px_#1A1A1A]`}
                >
                  <div className="w-12 h-12 rounded-xl border-2 border-[#1A1A1A] bg-white shadow-[2px_2px_0px_0px_#1A1A1A] flex items-center justify-center mb-4 group-hover:-translate-y-[2px] group-hover:-translate-x-[2px] group-hover:shadow-[4px_4px_0px_0px_#1A1A1A] transition-all">
                    <item.icon className="w-6 h-6 text-[#1A1A1A]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#1A1A1A]/60">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <p className="text-[#1A1A1A]/40 text-base max-w-2xl mx-auto text-center mt-10">
              Все эти факторы не ломают рекламу по отдельности —<br />
              вместе они делают данные неполными и искажают обучение алгоритмов.
            </p>
          </div>
        </section>

        {/* HaloTrack Solution */}
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Наше решение: HaloTrack
              </h2>
              <p className="text-xl text-[#1A1A1A]/60 max-w-2xl mx-auto">
                Практичный server-side трекинг для бизнеса, а не «сложная система ради галочки»
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Данные идут напрямую с вашего сайта", desc: "Заявки и покупки сначала фиксируются на вашем сервере, а не теряются в браузере или блокировщиках. Это делает данные стабильнее — даже на iPhone и при строгих ограничениях.", icon: Globe },
                { title: "Данные доходят до Google и Meta", desc: "Обычно браузер решает, какие события отправить в рекламу, а какие — нет. Мы меняем маршрут: сначала фиксируем событие на сервере сайта и уже оттуда корректно передаём в Google и Meta — легально, в рамках GDPR.", icon: Server },
                { title: "Фокус на заявках и продажах", desc: "Настраиваем трекинг под реальные цели бизнеса: заявки, покупки, лиды. Чтобы вы понимали, что работает в рекламе, а за что вы просто платите.", icon: Target },
              ].map((item) => (
                <div key={item.title} className="group p-6 rounded-2xl bg-white border-2 border-[#1A1A1A] transition-all duration-300 shadow-[6px_6px_0px_0px_#1A1A1A] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_#1A1A1A]">
                  <div className="w-12 h-12 rounded-xl border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] flex items-center justify-center mb-4 bg-white group-hover:-translate-y-[2px] group-hover:-translate-x-[2px] group-hover:shadow-[4px_4px_0px_0px_#1A1A1A] transition-all">
                    <item.icon className="w-6 h-6 text-[#1A1A1A]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">{item.title}</h3>
                  <p className="text-[#1A1A1A]/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Server-side Tracking Explanation */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="rounded-3xl border-2 border-[#1A1A1A] bg-[#B19CD9] shadow-[8px_8px_0px_0px_#1A1A1A] p-8 md:p-10">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] mb-4">
                    <Server className="w-4 h-4 text-[#1A1A1A]" />
                    <span className="text-sm font-bold text-[#1A1A1A]">Server-side для бизнеса</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4">
                    Server-side трекинг — выбор тех, кто считает заявки
                  </h2>
                </div>
                <div className="md:pt-2">
                  <Link href="/blog/server-side-tracking" className="inline-flex items-center gap-2 text-sm text-[#FF3366] hover:text-[#FF3366]/80 transition-colors font-medium">
                    Читать подробно в блоге →
                  </Link>
                </div>
              </div>
              <div className="space-y-4 text-[#1A1A1A]/60 leading-relaxed">
                <p>Обычно Google, Meta и аналитика получают информацию о заявках прямо из браузера пользователя. Если браузер, iPhone или блокировщики что-то ограничивают — данные просто не доходят.</p>
                <p>Server-side трекинг меняет путь данных и аккуратно обходит эти ограничения. Сначала заявка фиксируется на сервере сайта — там, где данные сложнее заблокировать браузеру, — и уже оттуда корректно и легально передаётся в Google и Meta.</p>
                <p className="text-[#FF3366] font-medium">За счёт этого рекламные системы видят больше реальных заявок, а не только ту часть, которую удалось поймать браузеру.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 md:py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-12" style={{ fontFamily: 'var(--font-display)' }}>
              Что это даёт?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { value: "85%", label: "Точность данных вместо 60%", bg: "bg-[#06D6A0]" },
                { value: "+30%", label: "Больше отслеженных конверсий", bg: "bg-[#FFD166]" },
                { value: "-20%", label: "Снижение стоимости лида (CPA)", bg: "bg-[#B19CD9]" },
              ].map((stat) => (
                <div key={stat.value} className={`p-8 rounded-2xl ${stat.bg} border-2 border-[#1A1A1A] shadow-[6px_6px_0px_0px_#1A1A1A] transition-all hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[10px_10px_0px_0px_#1A1A1A]`}>
                  <p className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-4" style={{ fontFamily: 'var(--font-display)' }}>{stat.value}</p>
                  <p className="text-[#1A1A1A] font-bold">{stat.label}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-[#1A1A1A]/40 max-w-xl mx-auto mt-10">
              Цифры зависят от ниши, сайта и источников трафика. Мы не обещаем 100%, но возвращаем максимум возможного в рамках ограничений браузеров и GDPR.
            </p>
          </div>
        </section>

        {/* Who needs this */}
        <section id="target-audience" className="py-16 md:py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Кому особенно нужен server-side трекинг
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: BarChart3, text: "Если у вас реклама в Google или Meta" },
                { icon: TrendingDown, text: "Если вы видите расхождения между заявками и отчётами" },
                { icon: Zap, text: "Если CPA растёт, а причина непонятна" },
                { icon: Users, text: "Если вы работаете в конкурентной нише в Чехии" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-5 rounded-2xl bg-white border-2 border-[#1A1A1A] transition-all shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A]">
                  <div className="w-10 h-10 rounded-xl bg-white border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] flex items-center justify-center text-[#1A1A1A] flex-shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <p className="text-[#1A1A1A]/70">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-16 md:py-24 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-white border-2 border-[#1A1A1A] rounded-3xl p-8 md:p-12 shadow-[8px_8px_0px_0px_#1A1A1A] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5">
                <BarChart3 className="w-64 h-64 text-[#1A1A1A]" />
              </div>
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">Стоимость настройки</h3>
                  <p className="text-[#1A1A1A]/60 mb-6">Полный комплекс server-side отслеживания.</p>
                  <div className="text-4xl font-extrabold text-[#1A1A1A] mb-2">от 8,000 CZK</div>
                  <p className="text-sm text-[#1A1A1A]/40 mb-6">Единоразовый платеж</p>
                  <p className="text-sm text-[#1A1A1A]/60 leading-relaxed">
                    Подходит, если у вас уже есть сайт и реклама, но вы не уверены, что данные собираются корректно.
                  </p>
                </div>
                <div className="space-y-4">
                  {["Настройка GTM Server-side", "Meta CAPI + Google Enhanced", "Настройка событий GA4", "Верификация данных"].map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-[#1A1A1A]/70">
                      <Check className="w-5 h-5 text-[#FF3366]" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  <p className="text-xs text-[#1A1A1A]/40 pt-4 border-t border-[#1A1A1A]/5">
                    Для клиентов на комплексных пакетах трекинг уже включён со скидкой.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 md:py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Частые вопросы
              </h2>
            </div>

            <div className="space-y-4">
              {[
                { q: "Это законно с точки зрения GDPR в Чехии?", a: "Да. Мы настраиваем трекинг в рамках GDPR: учитываем consent-баннер, минимизируем данные и передаём события в рекламные системы только при корректных основаниях." },
                { q: "HaloTrack заменяет Google Analytics (GA4)?", a: "Нет. GA4 остаётся основной аналитикой, а HaloTrack усиливает её: помогает корректно собирать события и передавать более точные сигналы в Google Ads и Meta." },
                { q: "Что именно вы настраиваете?", a: "Обычно это: события (Lead / Purchase и др.), связка сайта с GA4, Google Ads и Meta, server-side передача событий (Meta CAPI / Enhanced Conversions — по необходимости), проверка dataLayer и финальная верификация." },
                { q: "Подойдёт ли это для малого бизнеса?", a: "Да — если у вас уже есть реклама или вы планируете её запускать. Когда данные неполные, вы платите больше за лиды." },
                { q: "Можно ли без server-side трекинга?", a: "Можно, но часть данных будет неизбежно теряться из‑за iOS, блокировщиков и ограничений cookies." },
                { q: "Гарантируете ли вы +20–40% данных?", a: "Нет, потому что это зависит от ниши, источников трафика, доли iOS и настроек consent. Мы гарантируем аккуратную настройку, прозрачную проверку и отчёт." },
                { q: "Сколько времени занимает настройка?", a: "Чаще всего — от нескольких дней до 1 недели." },
                { q: "Нужен ли доступ к сайту/хостингу?", a: "Обычно нужен доступ к GTM/GA4 и рекламным кабинетам. Доступ к сайту зависит от реализации." },
              ].map((item, index) => (
                <details key={index} className="group rounded-2xl bg-white border-2 border-[#1A1A1A] transition-all overflow-hidden shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A]">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none border-b-2 border-transparent group-open:border-[#1A1A1A]">
                    <span className="text-[#1A1A1A] font-bold pr-4">{item.q}</span>
                    <span className="text-[#1A1A1A] group-open:rotate-45 transition-transform text-xl font-extrabold">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-[#1A1A1A]/60 leading-relaxed">{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Хватит терять данные
            </h2>
            <p className="text-xl text-[#1A1A1A]/60 mb-10">
              Настроим аналитику, которой можно доверять.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => open({ service: "tracking" })}
                className="rounded-xl px-10 h-14 text-lg bg-[#FF3366] hover:bg-[#FF3366] text-white font-bold border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-y-[1px] active:translate-x-[1px] active:shadow-[0px_0px_0px_0px_#1A1A1A] transition-all"
              >
                Настроить трекинг
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
