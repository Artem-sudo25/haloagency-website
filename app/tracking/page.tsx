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
import { SpotlightHero } from "@/components/ui/spotlight";
import { useContactModalActions } from "@/context/contact-modal-context";
import { CSSScrollAnimation, CSSStagger, CSSStaggerItem } from "@/components/ui/css-scroll-animation";

// Unified divider for consistent separation between sections (green accent for tracking page)
const SectionDivider = () => (
  <div className="h-px w-full bg-gradient-to-r from-transparent via-green-500/15 to-transparent" />
);

export default function TrackingPage() {
  const { open } = useContactModalActions();
  return (
    <main className="min-h-screen bg-ha-bg pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-6 md:py-32 px-4">
        <SpotlightHero />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-8 animate-fade-in-up"
              >
                <BarChart3 className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium text-green-300 tracking-wide uppercase">
                  Advanced Analytics
                </span>
              </div>

              <h1
                className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                Видеть <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                  каждую конверсию
                </span>
              </h1>

              <p
                className="text-xl text-slate-400 mb-4 max-w-xl leading-relaxed animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Server-side tracking и Meta CAPI. Мы восстанавливаем 20-40%
                данных, которые теряются из-за блокировщиков и iOS.
              </p>

              {/* HaloTrack positioning */}
              <p
                className="text-sm text-slate-400 mb-10 max-w-xl animate-fade-in-up font-medium"
                style={{ animationDelay: "0.28s" }}
              >
                HaloTrack — first-party server-side трекинг от HaloAgency, адаптированный под GDPR, iOS и рекламу в Чехии.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                <Button
                  size="lg"
                  onClick={() => open({ service: "tracking" })}
                  className="rounded-full px-8 bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-500/25 h-12"
                >
                  Настроить трекинг
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 border-white/10 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm h-12"
                  asChild
                >
                  <Link href="#problem">Как это работает</Link>
                </Button>
              </div>

              {/* Anchor Buttons */}
              <div
                className="flex flex-wrap gap-4 mt-8 animate-fade-in-up justify-center md:justify-start"
                style={{ animationDelay: "0.35s" }}
              >
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white p-0 h-auto font-normal hover:bg-transparent" asChild>
                  <Link href="#target-audience">Для кого</Link>
                </Button>
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white p-0 h-auto font-normal hover:bg-transparent" asChild>
                  <Link href="#pricing">Стоимость</Link>
                </Button>
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white p-0 h-auto font-normal hover:bg-transparent" asChild>
                  <Link href="#faq">FAQ</Link>
                </Button>
              </div>
            </div>

            {/* Hero Graphic: Data Stream Visualization */}
            <div
              className="relative hidden lg:block h-[400px] animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/5 rounded-3xl border border-white/5 backdrop-blur-sm overflow-hidden">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />

                {/* Nodes */}
                <div className="absolute top-1/2 left-12 -translate-y-1/2 w-24 h-24 bg-slate-900 rounded-2xl border border-slate-700 flex flex-col items-center justify-center z-10 shadow-xl">
                  <Globe className="w-8 h-8 text-blue-400 mb-2" />
                  <span className="text-xs text-slate-400">Browser</span>
                </div>

                <div className="absolute top-1/2 right-12 -translate-y-1/2 w-24 h-24 bg-slate-900 rounded-2xl border border-green-500/50 flex flex-col items-center justify-center z-10 shadow-xl shadow-green-500/20">
                  <Server className="w-8 h-8 text-green-400 mb-2" />
                  <span className="text-xs text-green-400">Server</span>
                </div>

                {/* Connecting Line with CSS animation */}
                <div className="absolute top-1/2 left-36 right-36 h-0.5 bg-slate-800 -translate-y-1/2">
                  <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-green-400 rounded-full shadow-[0_0_10px_rgba(74,222,128,0.8)] animate-[moveParticle_2s_linear_infinite]" />
                  <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-green-400 rounded-full shadow-[0_0_10px_rgba(74,222,128,0.8)] animate-[moveParticle_2s_linear_infinite_0.6s]" />
                  <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-green-400 rounded-full shadow-[0_0_10px_rgba(74,222,128,0.8)] animate-[moveParticle_2s_linear_infinite_1.2s]" />
                </div>

                {/* Shield (Blocking) */}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center animate-pulse">
                    <Lock className="w-5 h-5 text-red-400" />
                  </div>
                </div>

                {/* Bypass indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-xs text-green-400 font-mono bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
                  Обход блокировщиков...
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* NEW: Why Analytics No Longer Works - Alert Banner Style */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <CSSScrollAnimation>
            <div className="relative p-8 md:p-10 rounded-2xl bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent border border-amber-500/20 overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />

              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-amber-500/20 flex items-center justify-center">
                  <TrendingDown className="w-7 h-7 text-amber-400" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Почему обычная аналитика больше не работает
                  </h2>
                  <div className="space-y-2 text-slate-400 leading-relaxed">
                    <p>
                      Браузеры, iOS и GDPR всё чаще блокируют передачу данных.
                      В результате реклама «видит» только часть заявок и обучается на неполной картине.
                    </p>
                    <p className="text-green-400 font-medium">
                      → Мы решаем эту проблему с помощью server-side и first-party трекинга.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CSSScrollAnimation>
        </div>
      </section>

      {/* The Problem - Glassmorphism Cards */}
      <section id="problem" className="py-20 bg-ha-bg-soft">
        <div className="container mx-auto max-w-6xl px-4">
          <CSSScrollAnimation className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Куда пропадают данные?
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Потеря данных — это не одна проблема, а сразу несколько факторов,
              которые накладываются друг на друга.
            </p>
          </CSSScrollAnimation>

          <CSSStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "iOS 14.5+",
                desc: "Блокирует трекинг по умолчанию. Минус 20-30% данных.",
                icon: Apple,
                color: "text-red-400",
                bg: "bg-red-500/10",
              },
              {
                title: "Ad Blockers",
                desc: "30-40% пользователей блокируют скрипты аналитики.",
                icon: Ban,
                color: "text-yellow-400",
                bg: "bg-yellow-500/10",
              },
              {
                title: "Cookies",
                desc: "Браузеры ограничивают срок жизни cookies до 7 дней.",
                icon: Cookie,
                color: "text-blue-400",
                bg: "bg-blue-500/10",
              },
              {
                title: "Ошибки",
                desc: "Неверная атрибуция и дублирование транзакций.",
                icon: CircleX,
                color: "text-rose-400",
                bg: "bg-rose-500/10",
              },
            ].map((item, index) => (
              <CSSStaggerItem key={item.title} index={index}>
                <div className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 h-full">
                  <div
                    className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-4 ${item.color} group-hover:scale-110 transition-transform`}
                  >
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              </CSSStaggerItem>
            ))}
          </CSSStagger>

          {/* Connecting text after cards */}
          <CSSScrollAnimation delay={0.3} className="text-center mt-10">
            <p className="text-slate-500 text-base max-w-2xl mx-auto">
              Все эти факторы не ломают рекламу по отдельности —<br />
              вместе они делают данные неполными и искажают обучение алгоритмов.
            </p>
          </CSSScrollAnimation>
        </div>
      </section>

      <SectionDivider />

      {/* NEW: Our Solution - HaloTrack */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.1),transparent_70%)]" />
        <div className="container mx-auto max-w-5xl relative z-10">
          <CSSScrollAnimation className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
              <Server className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium text-green-400">HaloTrack</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Наше решение: HaloTrack
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Практичный server-side трекинг для бизнеса, а не «сложная система ради галочки»
            </p>
          </CSSScrollAnimation>

          <CSSStagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Данные идут напрямую с вашего сайта",
                desc: "Заявки и покупки сначала фиксируются на вашем сервере, а не теряются в браузере или блокировщиках. Это делает данные стабильнее — даже на iPhone и при строгих ограничениях.",
                icon: Globe,
              },
              {
                title: "Данные доходят до Google и Meta",
                desc: "Обычно браузер решает, какие события отправить в рекламу, а какие — нет. Мы меняем маршрут: сначала фиксируем событие на сервере сайта и уже оттуда корректно передаём в Google и Meta — легально, в рамках GDPR.",
                icon: Server,
              },
              {
                title: "Фокус на заявках и продажах",
                desc: "Настраиваем трекинг под реальные цели бизнеса: заявки, покупки, лиды. Чтобы вы понимали, что работает в рекламе, а за что вы просто платите. И вы перестаёте гадать, откуда пришёл клиент.",
                icon: Target,
              },
            ].map((item, index) => (
              <CSSStaggerItem key={item.title} index={index}>
                <div className="group p-6 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-green-500/30 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4 text-green-400 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </CSSStaggerItem>
            ))}
          </CSSStagger>
        </div>
      </section>

      {/* Server-side Tracking Explanation */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <CSSScrollAnimation>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-10">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-4">
                    <Server className="w-4 h-4 text-green-400" />
                    <span className="text-sm font-medium text-green-300">
                      Server-side для бизнеса
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Server-side трекинг — выбор тех, кто считает заявки
                  </h2>
                </div>
                <div className="md:pt-2">
                  <Link
                    href="/blog/server-side-tracking"
                    className="inline-flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors"
                  >
                    Читать подробно в блоге →
                  </Link>
                </div>
              </div>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Обычно Google, Meta и аналитика получают информацию о заявках прямо из браузера пользователя.
                  Если браузер, iPhone или блокировщики что-то ограничивают — данные просто не доходят.
                </p>
                <p>
                  Server-side трекинг меняет путь данных и аккуратно обходит эти ограничения.
                  Сначала заявка фиксируется на сервере сайта — там, где данные сложнее заблокировать браузеру, —
                  и уже оттуда корректно и легально передаётся в Google и Meta.
                </p>
                <p className="text-green-400 font-medium">
                  За счёт этого рекламные системы видят больше реальных заявок, а не только ту часть,
                  которую удалось поймать браузеру.
                </p>
              </div>
            </div>
          </CSSScrollAnimation>
        </div>
      </section>

      <SectionDivider />

      {/* Results - Bento Style */}
      <section className="py-20 bg-ha-bg-soft px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <CSSScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
              Что это даёт?
            </h2>
          </CSSScrollAnimation>

          <CSSStagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { value: "85%", label: "Точность данных вместо 60%" },
              { value: "+30%", label: "Больше отслеженных конверсий" },
              { value: "-20%", label: "Снижение стоимости лида (CPA)" },
            ].map((stat, index) => (
              <CSSStaggerItem key={stat.value} index={index}>
                <div className="p-8 rounded-3xl bg-slate-900 border border-white/10 hover:border-green-500/30 transition-colors">
                  <p className="text-4xl md:text-5xl font-bold text-green-500 mb-4">
                    {stat.value}
                  </p>
                  <p className="text-slate-400">{stat.label}</p>
                </div>
              </CSSStaggerItem>
            ))}
          </CSSStagger>

          {/* Realism disclaimer */}
          <CSSScrollAnimation delay={0.3} className="mt-10">
            <p className="text-sm text-slate-500 max-w-xl mx-auto">
              Цифры зависят от ниши, сайта и источников трафика.
              Мы не обещаем 100%, но возвращаем максимум возможного в рамках ограничений браузеров и GDPR.
            </p>
          </CSSScrollAnimation>
        </div>
      </section>

      <SectionDivider />

      {/* Who needs this - NEW SECTION */}
      <section id="target-audience" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <CSSScrollAnimation className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
              <Target className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium text-green-400">Для кого</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Кому особенно нужен server-side трекинг
            </h2>
          </CSSScrollAnimation>

          <CSSStagger className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                icon: BarChart3,
                text: "Если у вас реклама в Google или Meta",
              },
              {
                icon: TrendingDown,
                text: "Если вы видите расхождения между заявками и отчётами",
              },
              {
                icon: Zap,
                text: "Если CPA растёт, а причина непонятна",
              },
              {
                icon: Users,
                text: "Если вы работаете в конкурентной нише в Чехии",
              },
            ].map((item, index) => (
              <CSSStaggerItem key={index} index={index}>
                <div className="flex items-center gap-4 p-5 rounded-xl bg-slate-900/50 border border-white/10 hover:border-green-500/20 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 flex-shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <p className="text-slate-300">{item.text}</p>
                </div>
              </CSSStaggerItem>
            ))}
          </CSSStagger>
        </div>
      </section>

      <SectionDivider />

      {/* Pricing */}
      <section id="pricing" className="py-24 px-4 bg-ha-bg-soft">
        <div className="container mx-auto max-w-4xl">
          <CSSScrollAnimation>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5">
                <BarChart3 className="w-64 h-64" />
              </div>
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Стоимость настройки
                  </h3>
                  <p className="text-slate-400 mb-6">
                    Полный комплекс server-side отслеживания.
                  </p>
                  <div className="text-4xl font-bold text-white mb-2">
                    от 8,000 CZK
                  </div>
                  <p className="text-sm text-slate-500 mb-6">Единоразовый платеж</p>

                  {/* Context text */}
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Подходит, если у вас уже есть сайт и реклама,
                    но вы не уверены, что данные собираются корректно.
                  </p>
                </div>
                <div className="space-y-4">
                  {[
                    "Настройка GTM Server-side",
                    "Meta CAPI + Google Enhanced",
                    "Настройка событий GA4",
                    "Верификация данных",
                  ].map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-slate-300"
                    >
                      <Check className="w-5 h-5 text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}

                  {/* Cross-sell note */}
                  <p className="text-xs text-slate-500 pt-4 border-t border-white/5">
                    Для клиентов на комплексных пакетах трекинг уже включён со скидкой.
                  </p>
                </div>
              </div>
            </div>
          </CSSScrollAnimation>
        </div>
      </section>

      <SectionDivider />

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <CSSScrollAnimation className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Частые вопросы
            </h2>
          </CSSScrollAnimation>

          <CSSStagger className="space-y-4">
            {[
              {
                q: "Это законно с точки зрения GDPR в Чехии?",
                a: "Да. Мы настраиваем трекинг в рамках GDPR: учитываем consent-баннер, минимизируем данные и передаём события в рекламные системы только при корректных основаниях. Наша цель — сохранить максимум возможного законным способом, а не «обходить правила»."
              },
              {
                q: "HaloTrack заменяет Google Analytics (GA4)?",
                a: "Нет. GA4 остаётся основной аналитикой, а HaloTrack усиливает её: помогает корректно собирать события и передавать более точные сигналы в Google Ads и Meta. В результате отчёты и реклама начинают совпадать лучше."
              },
              {
                q: "Что именно вы настраиваете?",
                a: "Обычно это: события (Lead / Purchase и др.), связка сайта с GA4, Google Ads и Meta, server-side передача событий (Meta CAPI / Enhanced Conversions — по необходимости), проверка dataLayer и финальная верификация, чтобы данные не «дублились» и не терялись."
              },
              {
                q: "Подойдёт ли это для малого бизнеса?",
                a: "Да — если у вас уже есть реклама или вы планируете её запускать. Когда данные неполные, вы платите больше за лиды и сложнее понимаете, что реально работает. Если рекламы нет совсем — сначала лучше сфокусироваться на сайте/оффере."
              },
              {
                q: "Можно ли без server-side трекинга?",
                a: "Можно, но часть данных будет неизбежно теряться из‑за iOS, блокировщиков и ограничений cookies. Мы заранее объясняем, какие потери будут именно у вас, и показываем разницу после настройки — без «магии» и обещаний 100%."
              },
              {
                q: "Гарантируете ли вы +20–40% данных?",
                a: "Нет, потому что это зависит от ниши, источников трафика, доли iOS и настроек consent. Мы гарантируем другое: аккуратную настройку, прозрачную проверку и отчёт «что было / что стало», чтобы вы видели реальный эффект."
              },
              {
                q: "Сколько времени занимает настройка?",
                a: "Чаще всего — от нескольких дней до 1 недели. Срок зависит от платформы сайта, текущих настроек и количества рекламных систем. Перед стартом согласуем план и точки проверки."
              },
              {
                q: "Нужен ли доступ к сайту/хостингу?",
                a: "Обычно нужен доступ к GTM/GA4 и рекламным кабинетам. Доступ к сайту зависит от реализации: иногда достаточно GTM и настроек домена, иногда — небольших правок на сайте (например, для событий или формы). Мы согласуем это заранее."
              }
            ].map((item, index) => (
              <CSSStaggerItem key={index} index={index}>
                <details className="group rounded-2xl bg-slate-900/50 border border-white/10 hover:border-green-500/20 transition-colors overflow-hidden">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <span className="text-white font-medium pr-4">{item.q}</span>
                    <span className="text-green-400 group-open:rotate-45 transition-transform text-xl">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-slate-400 leading-relaxed">{item.a}</p>
                  </div>
                </details>
              </CSSStaggerItem>
            ))}
          </CSSStagger>
        </div>
      </section>

      <SectionDivider />

      {/* CTA */}
      <section className="py-24 px-4 bg-ha-bg-soft">
        <div className="container mx-auto max-w-4xl text-center">
          <CSSScrollAnimation>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Хватит терять данные
            </h2>
            <p className="text-xl text-slate-400 mb-10">
              Настроим аналитику, которой можно доверять.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => open({ service: "tracking" })}
                className="rounded-full px-10 h-14 text-lg bg-green-600 hover:bg-green-700 text-white shadow-xl shadow-green-500/20"
              >
                Настроить трекинг
              </Button>
            </div>
          </CSSScrollAnimation>
        </div>
      </section>
    </main>
  );
}
