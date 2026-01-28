"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Check,
  ExternalLink,
  Megaphone,
  Search,
  Settings,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
  Rocket,
  Layers
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SpotlightHero } from "@/components/ui/spotlight";
import { useContactModalActions } from "@/context/contact-modal-context";
import { CSSScrollAnimation, CSSStagger, CSSStaggerItem } from "@/components/ui/css-scroll-animation";
import AdsProcess from "@/components/sections/AdsProcess";
import AdsLeadMagnet from "@/components/sections/AdsLeadMagnet";
import AdsFAQ from "@/components/sections/AdsFAQ";

// Pricing packages data
const adsPackages = [
  {
    id: "one-channel",
    title: "1 канал",
    subtitle: "Базовый запуск и ведение",
    price: "от 8 000 Kč",
    period: "в месяц",
    features: [
      "Анализ ниши и предложения",
      "Настройка и запуск кампаний",
      "Базовая структура аккаунта",
      "Регулярная оптимизация",
      "Понятная отчётность по результатам",
    ],
    note: "Подходит для старта или тестирования одного канала (Google / Meta / Seznam)",
    highlight: false,
    icon: Target,
  },
  {
    id: "two-channels",
    title: "2 канала",
    subtitle: "Стабильный поток заявок",
    price: "от 15 000 Kč",
    period: "в месяц",
    features: [
      "Работа сразу с двумя каналами",
      "Распределение бюджета по эффективности",
      "Регулярные тесты объявлений",
      "Оптимизация по заявкам, а не кликам",
      "Рекомендации по масштабированию",
    ],
    note: "Для бизнеса, которому важно присутствие в нескольких источниках",
    highlight: true,
    badge: "⭐ POPULAR",
    icon: Rocket,
  },
  {
    id: "three-plus",
    title: "3+ каналов",
    subtitle: "Рост и масштабирование",
    price: "Индивидуально",
    period: "",
    features: [
      "Несколько рекламных каналов",
      "Глубокая оптимизация и тестирование",
      "Масштабирование эффективных связок",
      "Работа с гипотезами и стратегией",
      "Приоритетное взаимодействие",
    ],
    note: "Для проектов с активной рекламой и ростом бюджета",
    highlight: false,
    icon: Layers,
  },
];

// Section divider consistent with home page
const SectionDivider = () => (
  <div className="h-px w-full bg-gradient-to-r from-transparent via-orange-500/15 to-transparent border-t border-white/5" />
);

export default function AdsPage() {
  const { open } = useContactModalActions();

  return (
    <main className="min-h-screen bg-ha-bg pt-20">
      {/* 1. Hero Section */}
      <section className="relative py-6 md:py-32 px-4">
        <SpotlightHero />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8 animate-fade-in-up"
              >
                <Megaphone className="w-4 h-4 text-orange-400" />
                <span className="text-sm font-medium text-orange-300 tracking-wide uppercase">
                  Реклама
                </span>
              </div>

              <h1
                className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                Реклама, которая <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                  приводит клиентов
                </span>
              </h1>

              <p
                className="text-xl text-slate-400 mb-10 max-w-xl leading-relaxed animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Настраиваем и ведём рекламу в Google, Meta и Seznam.
                Фокус на заявках и продажах, а не на кликах и охватах.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                <Button
                  size="lg"
                  onClick={() => open({ service: "ads" })}
                  className="rounded-full px-8 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/25 h-12 transition-all duration-300"
                >
                  Обсудить запуск рекламы
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 border-white/10 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm h-12"
                  asChild
                >
                  <Link href="#pricing">Стоимость</Link>
                </Button>
              </div>

              {/* Anchor Buttons */}
              <div
                className="flex flex-wrap gap-4 mt-8 animate-fade-in-up justify-center md:justify-start"
                style={{ animationDelay: "0.35s" }}
              >
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white p-0 h-auto font-normal hover:bg-transparent" asChild>
                  <Link href="#channels">Каналы</Link>
                </Button>
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white p-0 h-auto font-normal hover:bg-transparent" asChild>
                  <Link href="#process">Процесс</Link>
                </Button>
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white p-0 h-auto font-normal hover:bg-transparent" asChild>
                  <Link href="#faq">FAQ</Link>
                </Button>
                <Button variant="ghost" size="sm" className="text-orange-400 hover:text-orange-300 p-0 h-auto font-normal hover:bg-transparent" asChild>
                  <Link href="#lead-magnet" className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Бесплатный план рекламы
                  </Link>
                </Button>
              </div>
            </div>

            {/* Hero Graphic: Floating Ad Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block h-[400px]"
            >
              {/* Google Ads Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-10 left-10 w-64 bg-white rounded-2xl shadow-2xl p-5 z-20 border border-slate-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/30">
                    G
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">
                      Google Ads
                    </div>
                    <div className="text-xs text-slate-500">Sponsored</div>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="h-2.5 bg-slate-100 rounded-full w-3/4" />
                  <div className="h-2.5 bg-slate-100 rounded-full w-full" />
                </div>
                <div className="flex gap-3">
                  <div className="flex-1 bg-gradient-to-br from-green-50 to-emerald-50 p-3 rounded-xl border border-green-100">
                    <div className="text-sm text-green-600 font-bold">
                      +124%
                    </div>
                    <div className="text-[10px] text-green-500 font-medium">ROAS</div>
                  </div>
                  <div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-50 p-3 rounded-xl border border-blue-100">
                    <div className="text-sm text-blue-600 font-bold">
                      2.4%
                    </div>
                    <div className="text-[10px] text-blue-500 font-medium">CTR</div>
                  </div>
                </div>
              </motion.div>

              {/* Meta Ads Card */}
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-20 right-10 w-64 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 rounded-2xl shadow-2xl p-5 z-10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-blue-600/30">
                    f
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Meta Ads</div>
                    <div className="text-xs text-slate-400">Sponsored</div>
                  </div>
                </div>
                <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl mb-4 relative overflow-hidden border border-slate-600/50">
                  <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-red-500/20" />
                  <TrendingUp className="absolute bottom-2 left-2 text-green-400 w-6 h-6" />
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-white font-bold">Заявка</div>
                  <div className="px-4 py-1.5 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs rounded-full font-medium shadow-lg shadow-orange-500/30">
                    Подробнее
                  </div>
                </div>
              </motion.div>

              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-red-500/10 to-transparent blur-3xl rounded-full -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 2. Для кого подойдёт */}
      <section className="py-24 bg-ha-bg-soft border-t border-ha-border-dark relative overflow-hidden">
        {/* Premium background effects */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-gradient-to-br from-orange-500/10 via-red-500/5 to-transparent rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-gradient-to-tl from-orange-500/8 to-transparent rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto max-w-5xl px-4 relative z-10">
          <CSSScrollAnimation className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <Users className="w-4 h-4 text-orange-400" />
              <p className="text-orange-400 text-sm font-medium uppercase tracking-wider">Для кого</p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Кому подойдёт реклама
            </h2>
          </CSSScrollAnimation>

          <CSSStagger className="grid md:grid-cols-3 gap-6">
            <CSSStaggerItem index={0}>
              <div className="group relative p-8 rounded-3xl bg-slate-900/40 backdrop-blur-sm border border-orange-500/20 hover:border-orange-500/50 transition-all duration-500 overflow-hidden h-full">
                {/* Premium gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/0 via-orange-500/20 to-orange-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/30 to-red-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">Локальный сервисный бизнес</h3>
                  <p className="text-slate-400 leading-relaxed">Салоны, клиники, ремонт, доставка — всё, где важен поток заявок из города или региона.</p>
                </div>
              </div>
            </CSSStaggerItem>

            <CSSStaggerItem index={1}>
              <div className="group relative p-8 rounded-3xl bg-slate-900/40 backdrop-blur-sm border border-orange-500/20 hover:border-orange-500/50 transition-all duration-500 overflow-hidden h-full">
                {/* Premium gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/0 via-orange-500/20 to-orange-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/30 to-amber-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">Компании с понятным предложением</h3>
                  <p className="text-slate-400 leading-relaxed">Чёткий продукт или услуга с нормальной маржой, где реклама может окупиться.</p>
                </div>
              </div>
            </CSSStaggerItem>

            <CSSStaggerItem index={2}>
              <div className="group relative p-8 rounded-3xl bg-slate-900/40 backdrop-blur-sm border border-orange-500/20 hover:border-orange-500/50 transition-all duration-500 overflow-hidden h-full">
                {/* Premium gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/0 via-orange-500/20 to-orange-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/30 to-red-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">Бизнес, которому нужны заявки</h3>
                  <p className="text-slate-400 leading-relaxed">Не красивые отчёты, а реальные лиды и продажи, которые можно посчитать.</p>
                </div>
              </div>
            </CSSStaggerItem>
          </CSSStagger>

          <CSSScrollAnimation delay={0.3} className="text-center text-slate-500 text-sm mt-10">
            Если чего-то не хватает (сайт, аналитика) — подскажем следующий шаг.
          </CSSScrollAnimation>
        </div>
      </section>

      <SectionDivider />

      {/* 3. Что мы делаем */}
      <section className="py-24 bg-[#0A1628] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-orange-500/5 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto max-w-5xl px-4 relative z-10">
          <CSSScrollAnimation className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <Settings className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-medium text-orange-400">Услуги</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Что мы делаем в рамках рекламы
            </h2>
          </CSSScrollAnimation>

          <CSSStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Search, text: "Анализ бизнеса и конкурентов" },
              { icon: Target, text: "Выбор рекламных каналов под задачу" },
              { icon: Zap, text: "Настройка и запуск кампаний" },
              { icon: TrendingUp, text: "Регулярная оптимизация по результатам" },
              { icon: BarChart3, text: "Понятные отчёты и рекомендации" },
            ].map((item, index) => (
              <CSSStaggerItem key={index} index={index}>
                <div className="group flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-orange-500/20 hover:bg-white/10 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/20 flex items-center justify-center text-orange-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-white font-medium">{item.text}</span>
                </div>
              </CSSStaggerItem>
            ))}

            {/* CTA Card - Desktop only */}
            <CSSStaggerItem index={5}>
              <button
                type="button"
                onClick={() => open({ service: "ads-consultation" })}
                className="hidden lg:flex group items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/30 hover:border-orange-500/60 hover:from-orange-500/30 hover:to-orange-600/20 transition-all duration-300 cursor-pointer h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/30">
                  <ArrowRight className="w-5 h-5" />
                </div>
                <span className="text-orange-300 font-medium group-hover:text-orange-200 transition-colors">Обсудить вашу задачу</span>
              </button>
            </CSSStaggerItem>
          </CSSStagger>

          <CSSScrollAnimation delay={0.3} className="text-center text-orange-400 text-sm mt-12 font-medium">
            Мы оптимизируем рекламу под результат, а не под клики.
          </CSSScrollAnimation>
        </div>
      </section>

      <SectionDivider />

      {/* 4. Рекламные каналы */}
      <section id="channels" className="py-24 bg-ha-bg relative overflow-hidden">
        <div className="container mx-auto max-w-4xl px-4 relative z-10">
          <CSSScrollAnimation className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <Megaphone className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-medium text-orange-400">Каналы</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Рекламные каналы
            </h2>
          </CSSScrollAnimation>

          <CSSStagger className="grid md:grid-cols-3 gap-4 mb-8">
            {/* Google Ads */}
            <CSSStaggerItem index={0}>
              <div className="group p-6 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-orange-500/30 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/10 mb-4">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                    <path d="M22.5 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09h-.06Z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23Z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62Z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53Z" fill="#EA4335" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Google Ads</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Для тех, кто уже ищет вашу услугу или продукт в поиске
                </p>
              </div>
            </CSSStaggerItem>

            {/* Meta Ads */}
            <CSSStaggerItem index={1}>
              <div className="group p-6 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-orange-500/30 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/10 mb-4">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10Z" fill="#1877F2" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Meta Ads</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Для привлечения внимания и формирования спроса через соцсети
                </p>
              </div>
            </CSSStaggerItem>

            {/* Seznam Sklik */}
            <CSSStaggerItem index={2}>
              <div className="group p-6 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-orange-500/30 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/10 mb-4">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="#CC0000" />
                    <path d="M7 12.5c0-1.38 1.12-2.5 2.5-2.5h5c1.38 0 2.5 1.12 2.5 2.5S15.88 15 14.5 15h-5C8.12 15 7 13.88 7 12.5Z" fill="white" />
                    <circle cx="12" cy="8" r="2" fill="white" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Seznam Sklik</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Для чешскоговорящей аудитории и локального бизнеса в Чехии
                </p>
              </div>
            </CSSStaggerItem>
          </CSSStagger>

          <CSSScrollAnimation delay={0.2} className="text-center text-slate-500 text-sm">
            Каналы подбираются под нишу и цель бизнеса.
          </CSSScrollAnimation>
        </div>
      </section>

      <SectionDivider />

      {/* 5. Аналитика + 6. Подготовка сайта */}
      <section className="py-24 bg-ha-bg-soft relative overflow-hidden">
        <div className="container mx-auto max-w-5xl px-4 relative z-10">
          <CSSStagger className="grid md:grid-cols-2 gap-8">
            {/* Аналитика */}
            <CSSStaggerItem index={0}>
              <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-slate-900/80 to-slate-900/50 border border-white/10 hover:border-orange-500/30 transition-all duration-500 overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/20 flex items-center justify-center mb-6 text-orange-400 group-hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Аналитика для принятия решений
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    Чтобы реклама не работала «вслепую», мы используем базовую аналитику для оценки эффективности кампаний.
                  </p>
                  <Link
                    href="/tracking"
                    className="inline-flex items-center gap-2 text-orange-400 font-medium hover:text-orange-300 transition-colors group/link"
                  >
                    Подробнее о трекинге
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </CSSStaggerItem>

            {/* Подготовка сайта */}
            <CSSStaggerItem index={1}>
              <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-slate-900/80 to-slate-900/50 border border-white/10 hover:border-orange-500/30 transition-all duration-500 overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/20 flex items-center justify-center mb-6 text-orange-400 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Подготовка посадочных страниц
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    Если сайт или страница не готовы к рекламе, мы помогаем выявить и устранить ключевые блокеры конверсии.
                  </p>
                  <Link
                    href="/web"
                    className="inline-flex items-center gap-2 text-orange-400 font-medium hover:text-orange-300 transition-colors group/link"
                  >
                    Подробнее о веб-разработке
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </CSSStaggerItem>
          </CSSStagger>
        </div>
      </section>

      <SectionDivider />

      {/* 7. Процесс работы */}
      <div id="process">
        <AdsProcess />
      </div>

      <SectionDivider />

      {/* 8. Цены */}
      <section id="pricing" className="py-24 bg-[#0A1628] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-gradient-to-bl from-orange-500/5 to-transparent rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-gradient-to-tr from-orange-500/5 to-transparent rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <CSSScrollAnimation className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <TrendingUp className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-medium text-orange-400">Стоимость</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Стоимость ведения рекламы
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Стоимость зависит от количества рекламных каналов и объёма работ.
              Ниже — ориентиры для большинства проектов в Чехии.
            </p>
          </CSSScrollAnimation>

          {/* Pricing Cards */}
          <div className="overflow-x-auto scrollbar-hide md:grid md:grid-cols-3 gap-8 items-start mb-12 snap-x snap-mandatory scroll-pl-4 p-4 md:p-6">
            <div className="flex md:contents gap-4 px-4 md:px-0 pb-2">
              {adsPackages.map((pkg, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 w-[80vw] sm:w-[50vw] md:w-auto snap-start relative h-full ${pkg.highlight ? "z-10" : ""}`}
                >
                  <Card
                    className={`relative flex flex-col h-full transition-all duration-300 ${pkg.highlight
                      ? "bg-gradient-to-b from-[#2a1a0a] to-[#0A1628] border-2 border-orange-500 shadow-2xl shadow-orange-500/20 scale-100 lg:scale-105"
                      : "bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10"
                      } rounded-2xl overflow-hidden`}
                  >
                    {/* Popular Badge - gradient line */}
                    {pkg.highlight && (
                      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-orange-500 to-red-500" />
                    )}

                    {/* Popular Badge - text */}
                    {pkg.badge && (
                      <div className="absolute top-4 right-4 bg-orange-600 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded shadow-lg">
                        {pkg.badge}
                      </div>
                    )}

                    <CardHeader className="p-8 pb-3">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${pkg.highlight ? "bg-orange-500/20 text-orange-400" : "bg-white/5 text-gray-400"
                          }`}
                      >
                        <pkg.icon className="w-6 h-6" />
                      </div>

                      <CardTitle className="text-2xl font-bold text-white mb-1">
                        {pkg.title}
                      </CardTitle>

                      <p className="text-sm text-gray-400 font-medium mb-4">
                        {pkg.subtitle}
                      </p>

                      <div className="space-y-1 mb-2">
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-white">{pkg.price}</span>
                        </div>
                        {pkg.period && (
                          <div className="flex items-baseline gap-1">
                            <span className={`text-base font-semibold ${pkg.highlight ? "text-orange-400" : "text-gray-300"}`}>
                              {pkg.period}
                            </span>
                          </div>
                        )}
                      </div>
                    </CardHeader>

                    <CardContent className="p-8 pt-3 flex-grow">
                      <div className="w-full h-px bg-white/10 mb-4" />

                      <ul className="space-y-4">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <Check
                              className={`w-4 h-4 mt-0.5 flex-shrink-0 ${pkg.highlight ? "text-orange-400" : "text-green-500"
                                }`}
                            />
                            <span className="text-sm text-gray-300 leading-tight">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Note */}
                      <p className="text-xs text-slate-500 mt-6 leading-relaxed">
                        {pkg.note}
                      </p>
                    </CardContent>

                    <CardFooter className="p-8 pt-0 mt-auto">
                      <Button
                        onClick={() => open({
                          service: "package",
                          package_name: `Реклама: ${pkg.title}`,
                          message: `Интересует пакет рекламы "${pkg.title}"\nСтоимость: ${pkg.price}${pkg.period ? ` ${pkg.period}` : ''}\n\n`
                        })}
                        className={`w-full font-medium transition-all ${pkg.highlight
                          ? "bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-500/25"
                          : "bg-white/10 hover:bg-white/20 text-white"
                          }`}
                      >
                        Обсудить
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Важные условия */}
          <CSSScrollAnimation delay={0.3} className="text-center text-slate-500 text-xs space-y-1 mb-12">
            <p>• Рекламный бюджет оплачивается отдельно</p>
            <p>• Минимальный срок сотрудничества — 1 месяц</p>
            <p>• Итоговый объём работ и стоимость подтверждаются до старта</p>
          </CSSScrollAnimation>

        </div>
      </section>

      <SectionDivider />

      {/* Lead Magnet */}
      <div id="lead-magnet">
        <AdsLeadMagnet />
      </div>

      <SectionDivider />

      {/* FAQ */}
      <div id="faq">
        <AdsFAQ />
      </div>

      <SectionDivider />

      {/* CTA */}
      <section className="py-24 px-4 bg-ha-bg relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-orange-500/5 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <CSSScrollAnimation>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Готовы запустить рекламу?
            </h2>
          </CSSScrollAnimation>
          <CSSScrollAnimation delay={0.1}>
            <p className="text-xl text-slate-400 mb-10">
              Обсудим ваш проект и предложим план действий.
            </p>
          </CSSScrollAnimation>
          <CSSScrollAnimation delay={0.2} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => open({ service: "ads" })}
              className="rounded-full px-10 h-14 text-lg bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-xl shadow-orange-500/25 transition-all duration-300"
            >
              Обсудить проект
            </Button>
          </CSSScrollAnimation>
        </div>
      </section>
    </main>
  );
}
