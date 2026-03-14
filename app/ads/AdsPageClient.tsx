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
    badge: "Популярный",
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

export default function AdsPageClient() {
  const { open } = useContactModalActions();

  const openPackageModal = (pkg: typeof adsPackages[0]) => {
    const numericPrice = pkg.price ? parseInt(pkg.price.replace(/[^0-9]/g, "")) : 0;
    const leadValue = numericPrice > 0 ? numericPrice : 8000;

    open({
      service: "package",
      package_name: `Реклама: ${pkg.title}`,
      message: `Интересует пакет рекламы "${pkg.title}"\nСтоимость: ${pkg.price}${pkg.period ? ` ${pkg.period}` : ''}\n\n`,
      value: leadValue,
      currency: "CZK"
    });
  };

  return (
    <main className="min-h-screen bg-[#F5F5F7] pt-20">
      {/* Dot grid background */}
      <div className="fixed inset-0 z-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <div className="relative z-10">
        {/* 1. Hero Section */}
        <section className="relative py-6 md:py-32 px-4">
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] mb-8 animate-fade-in-up">
                  <Megaphone className="w-4 h-4 text-[#FF3366]" />
                  <span className="text-sm font-bold text-[#1A1A1A] tracking-wide uppercase">Реклама</span>
                </div>

                <h1
                  className="text-5xl md:text-7xl font-extrabold text-[#1A1A1A] mb-6 leading-tight tracking-tight animate-fade-in-up"
                  style={{ animationDelay: "0.1s", fontFamily: 'var(--font-display)' }}
                >
                  Реклама, которая <br />
                  <span className="relative inline-block z-10">
                    приводит клиентов
                    <svg className="absolute -bottom-2 left-0 w-full h-4 text-[#FF3366] -z-10" fill="none" preserveAspectRatio="none" viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeLinecap="round" strokeWidth="4" />
                    </svg>
                  </span>
                </h1>

                <p className="text-xl text-[#1A1A1A]/60 mb-10 max-w-xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                  Настраиваем и ведём рекламу в Google, Meta и Seznam.
                  Фокус на заявках и продажах, а не на кликах и охватах.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                  <Button
                    size="lg"
                    onClick={() => open({ service: "ads" })}
                    className="rounded-xl px-8 bg-[#FF3366] hover:bg-[#FF3366] text-white font-bold border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-y-[1px] active:translate-x-[1px] active:shadow-[0px_0px_0px_0px_#1A1A1A] transition-all h-12"
                  >
                    Обсудить запуск рекламы
                  </Button>
                  <Link href="#pricing" className="text-[#1A1A1A]/60 font-medium hover:text-[#FF3366] transition-colors text-base">
                    Стоимость →
                  </Link>
                </div>

                <div className="flex flex-wrap gap-4 mt-8 animate-fade-in-up justify-center md:justify-start" style={{ animationDelay: "0.35s" }}>
                  <Button variant="ghost" size="sm" className="text-[#1A1A1A]/50 hover:text-[#FF3366] p-0 h-auto font-normal hover:bg-transparent" asChild>
                    <Link href="#channels">Каналы</Link>
                  </Button>
                  <Button variant="ghost" size="sm" className="text-[#1A1A1A]/50 hover:text-[#FF3366] p-0 h-auto font-normal hover:bg-transparent" asChild>
                    <Link href="#process">Процесс</Link>
                  </Button>
                  <Button variant="ghost" size="sm" className="text-[#1A1A1A]/50 hover:text-[#FF3366] p-0 h-auto font-normal hover:bg-transparent" asChild>
                    <Link href="#faq">FAQ</Link>
                  </Button>
                  <Button variant="ghost" size="sm" className="text-[#FF3366] hover:text-[#FF3366]/80 p-0 h-auto font-normal hover:bg-transparent" asChild>
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
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 left-10 w-64 bg-white rounded-2xl shadow-[6px_6px_0px_0px_#1A1A1A] p-5 z-20 border-2 border-[#1A1A1A]"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/30">G</div>
                    <div>
                      <div className="text-sm font-bold text-[#1A1A1A]">Google Ads</div>
                      <div className="text-xs text-[#1A1A1A]/40">Sponsored</div>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="h-2.5 bg-gray-100 rounded-full w-3/4" />
                    <div className="h-2.5 bg-gray-100 rounded-full w-full" />
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-1 bg-green-50 p-3 rounded-xl border border-green-100">
                      <div className="text-sm text-green-600 font-bold">+124%</div>
                      <div className="text-[10px] text-green-500 font-medium">ROAS</div>
                    </div>
                    <div className="flex-1 bg-blue-50 p-3 rounded-xl border border-blue-100">
                      <div className="text-sm text-blue-600 font-bold">2.4%</div>
                      <div className="text-[10px] text-blue-500 font-medium">CTR</div>
                    </div>
                  </div>
                </motion.div>

                {/* Meta Ads Card */}
                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-20 right-10 w-64 bg-[#1A1A1A] border-2 border-[#1A1A1A] rounded-2xl shadow-[6px_6px_0px_0px_#FF3366] p-5 z-10"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-blue-600/30">f</div>
                    <div>
                      <div className="text-sm font-bold text-[#1A1A1A]">Meta Ads</div>
                      <div className="text-xs text-[#1A1A1A]/40">Sponsored</div>
                    </div>
                  </div>
                  <div className="aspect-video bg-[#2a2a2a] rounded-xl mb-4 relative overflow-hidden border border-white/10">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#FF3366]/20 to-pink-500/20" />
                    <TrendingUp className="absolute bottom-2 left-2 text-green-400 w-6 h-6" />
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-white font-bold">Заявка</div>
                    <div className="px-4 py-1.5 bg-[#FF3366] text-white text-xs rounded-full font-medium">Подробнее</div>
                  </div>
                </motion.div>

              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. Для кого подойдёт */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="container mx-auto max-w-5xl px-4 relative z-10">
            <CSSScrollAnimation className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Кому подойдёт реклама
              </h2>
            </CSSScrollAnimation>

            <CSSStagger className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Target, title: "Локальный сервисный бизнес", text: "Салоны, клиники, ремонт, доставка — всё, где важен поток заявок из города или региона." },
                { icon: TrendingUp, title: "Компании с понятным предложением", text: "Чёткий продукт или услуга с нормальной маржой, где реклама может окупиться." },
                { icon: BarChart3, title: "Бизнес, которому нужны заявки", text: "Не красивые отчёты, а реальные лиды и продажи, которые можно посчитать." },
              ].map((item, i) => (
                <CSSStaggerItem key={i} index={i}>
                  <div className="group relative p-8 rounded-2xl bg-white border-2 border-[#1A1A1A] transition-all overflow-hidden h-full shadow-[6px_6px_0px_0px_#1A1A1A] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_#1A1A1A]">
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-full bg-[#FF3366]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-6 h-6 text-[#FF3366]" />
                      </div>
                      <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#FF3366] transition-colors">{item.title}</h3>
                      <p className="text-[#1A1A1A]/60 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </CSSStaggerItem>
              ))}
            </CSSStagger>

            <CSSScrollAnimation delay={0.3} className="text-center text-[#1A1A1A]/40 text-sm mt-10">
              Если чего-то не хватает (сайт, аналитика) — подскажем следующий шаг.
            </CSSScrollAnimation>
          </div>
        </section>

        {/* 3. Что мы делаем */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="container mx-auto max-w-5xl px-4 relative z-10">
            <CSSScrollAnimation className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
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
                  <div className="group flex items-center gap-4 p-5 rounded-2xl bg-white border-2 border-[#1A1A1A] transition-all h-full shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A]">
                    <div className="w-12 h-12 rounded-xl bg-[#06D6A0] border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] flex items-center justify-center text-[#1A1A1A] flex-shrink-0 group-hover:-translate-y-[2px] group-hover:-translate-x-[2px] group-hover:shadow-[4px_4px_0px_0px_#1A1A1A] transition-all duration-300">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[#1A1A1A] font-medium">{item.text}</span>
                  </div>
                </CSSStaggerItem>
              ))}

              <CSSStaggerItem index={5}>
                <button
                  type="button"
                  onClick={() => open({ service: "ads-consultation" })}
                  className="hidden lg:flex group items-center gap-4 p-5 rounded-2xl bg-[#FFD166] border-2 border-[#1A1A1A] transition-all cursor-pointer h-full shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A]"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#06D6A0] border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] flex items-center justify-center text-[#1A1A1A] flex-shrink-0 group-hover:-translate-y-[2px] group-hover:-translate-x-[2px] group-hover:shadow-[4px_4px_0px_0px_#1A1A1A] transition-all duration-300">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                  <span className="text-[#1A1A1A] font-bold group-hover:text-[#FF3366] transition-colors">Обсудить вашу задачу</span>
                </button>
              </CSSStaggerItem>
            </CSSStagger>

            <CSSScrollAnimation delay={0.3} className="text-center text-[#FF3366] text-sm mt-12 font-medium">
              Мы оптимизируем рекламу под результат, а не под клики.
            </CSSScrollAnimation>
          </div>
        </section>

        {/* 4. Рекламные каналы */}
        <section id="channels" className="py-16 md:py-24 relative overflow-hidden">
          <div className="container mx-auto max-w-4xl px-4 relative z-10">
            <CSSScrollAnimation className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Рекламные каналы
              </h2>
            </CSSScrollAnimation>

            <CSSStagger className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                {
                  name: "Google Ads",
                  desc: "Для тех, кто уже ищет вашу услугу или продукт в поиске",
                  svg: (
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                      <path d="M22.5 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09h-.06Z" fill="#4285F4" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23Z" fill="#34A853" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62Z" fill="#FBBC05" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53Z" fill="#EA4335" />
                    </svg>
                  ),
                },
                {
                  name: "Meta Ads",
                  desc: "Для привлечения внимания и формирования спроса через соцсети",
                  svg: (
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10Z" fill="#1877F2" />
                    </svg>
                  ),
                },
                {
                  name: "Seznam Sklik",
                  desc: "Для чешскоговорящей аудитории и локального бизнеса в Чехии",
                  svg: (
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" fill="#CC0000" />
                      <path d="M7 12.5c0-1.38 1.12-2.5 2.5-2.5h5c1.38 0 2.5 1.12 2.5 2.5S15.88 15 14.5 15h-5C8.12 15 7 13.88 7 12.5Z" fill="white" />
                      <circle cx="12" cy="8" r="2" fill="white" />
                    </svg>
                  ),
                },
              ].map((channel, i) => (
                <CSSStaggerItem key={i} index={i}>
                  <div className="group p-6 rounded-2xl bg-white border-2 border-[#1A1A1A] transition-all h-full shadow-[6px_6px_0px_0px_#1A1A1A] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_#1A1A1A]">
                    <div className="w-12 h-12 rounded-xl border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] flex items-center justify-center bg-white mb-4">
                      {channel.svg}
                    </div>
                    <h3 className="text-[#1A1A1A] font-semibold text-lg mb-2">{channel.name}</h3>
                    <p className="text-[#1A1A1A]/60 text-sm leading-relaxed">{channel.desc}</p>
                  </div>
                </CSSStaggerItem>
              ))}
            </CSSStagger>

            <CSSScrollAnimation delay={0.2} className="text-center text-[#1A1A1A]/40 text-sm">
              Каналы подбираются под нишу и цель бизнеса.
            </CSSScrollAnimation>
          </div>
        </section>

        {/* 5. Аналитика + 6. Подготовка сайта */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="container mx-auto max-w-5xl px-4 relative z-10">
            <CSSStagger className="grid md:grid-cols-2 gap-8">
              <CSSStaggerItem index={0}>
                <div className="group relative p-8 rounded-2xl bg-white border-2 border-[#1A1A1A] transition-all overflow-hidden h-full shadow-[6px_6px_0px_0px_#1A1A1A] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_#1A1A1A]">
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] bg-[#B19CD9] flex items-center justify-center mb-6 text-[#1A1A1A] group-hover:-translate-y-[2px] group-hover:-translate-x-[2px] group-hover:shadow-[4px_4px_0px_0px_#1A1A1A] transition-all duration-300">
                      <BarChart3 className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">Аналитика для принятия решений</h3>
                    <p className="text-[#1A1A1A]/60 leading-relaxed mb-6">
                      Чтобы реклама не работала «вслепую», мы используем базовую аналитику для оценки эффективности кампаний.
                    </p>
                    <Link href="/tracking" className="inline-flex items-center gap-2 text-[#FF3366] font-medium hover:text-[#FF3366]/80 transition-colors group/link">
                      Подробнее о трекинге
                      <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </CSSStaggerItem>

              <CSSStaggerItem index={1}>
                <div className="group relative p-8 rounded-2xl bg-white border-2 border-[#1A1A1A] transition-all overflow-hidden h-full shadow-[6px_6px_0px_0px_#1A1A1A] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_#1A1A1A]">
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] bg-[#118AB2] flex items-center justify-center mb-6 text-[#1A1A1A] group-hover:-translate-y-[2px] group-hover:-translate-x-[2px] group-hover:shadow-[4px_4px_0px_0px_#1A1A1A] transition-all duration-300">
                      <Target className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">Подготовка посадочных страниц</h3>
                    <p className="text-[#1A1A1A]/60 leading-relaxed mb-6">
                      Если сайт или страница не готовы к рекламе, мы помогаем выявить и устранить ключевые блокеры конверсии.
                    </p>
                    <Link href="/web" className="inline-flex items-center gap-2 text-[#FF3366] font-medium hover:text-[#FF3366]/80 transition-colors group/link">
                      Подробнее о веб-разработке
                      <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </CSSStaggerItem>
            </CSSStagger>
          </div>
        </section>

        {/* 7. Процесс работы */}
        <div id="process">
          <AdsProcess />
        </div>

        {/* 8. Цены */}
        <section id="pricing" className="py-16 md:py-24 relative overflow-hidden">
          <div className="container mx-auto max-w-6xl px-4 relative z-10">
            <CSSScrollAnimation className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Стоимость ведения рекламы
              </h2>
              <p className="text-[#1A1A1A]/60 text-lg md:text-xl max-w-2xl mx-auto">
                Стоимость зависит от количества рекламных каналов и объёма работ.
                Ниже — ориентиры для большинства проектов в Чехии.
              </p>
            </CSSScrollAnimation>

            <div className="overflow-x-auto scrollbar-hide md:grid md:grid-cols-3 gap-8 items-start mb-12 snap-x snap-mandatory scroll-pl-4 p-4 md:p-6">
              <div className="flex md:contents gap-4 px-4 md:px-0 pb-2">
                {adsPackages.map((pkg, index) => (
                  <div key={index} className={`flex-shrink-0 w-[80vw] sm:w-[50vw] md:w-auto snap-start relative h-full ${pkg.highlight ? "z-10" : ""}`}>
                    <Card className={`relative flex flex-col h-full transition-all duration-300 rounded-3xl ${pkg.highlight
                      ? "bg-[#1A1A1A] border-2 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#FF3366] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_#FF3366] lg:scale-105"
                      : "bg-white border-2 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#1A1A1A] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_#1A1A1A]"
                      }`}>
                      {pkg.badge && <div className="absolute -top-4 right-4 bg-[#FF3366] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-none border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] rotate-3 z-20 hover:rotate-6 transition-transform">{pkg.badge}</div>}

                      <CardHeader className="p-8 pb-3">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${pkg.highlight ? "bg-[#FF3366]/20 text-[#FF3366]" : "bg-[#FF3366]/10 text-[#FF3366]"}`}>
                          <pkg.icon className="w-6 h-6" />
                        </div>
                        <CardTitle className={`text-2xl font-bold mb-1 ${pkg.highlight ? "text-white" : "text-[#1A1A1A]"}`}>{pkg.title}</CardTitle>
                        <p className={`text-sm font-medium mb-4 ${pkg.highlight ? "text-white/60" : "text-[#1A1A1A]/50"}`}>{pkg.subtitle}</p>
                        <div className="space-y-1 mb-2">
                          <span className={`text-2xl font-bold ${pkg.highlight ? "text-white" : "text-[#1A1A1A]"}`}>{pkg.price}</span>
                          {pkg.period && <div className={`text-base font-semibold ${pkg.highlight ? "text-[#FF3366]" : "text-[#1A1A1A]/70"}`}>{pkg.period}</div>}
                        </div>
                      </CardHeader>

                      <CardContent className="p-8 pt-3 flex-grow">
                        <div className={`w-full h-px mb-4 ${pkg.highlight ? "bg-white/10" : "bg-[#1A1A1A]/5"}`} />
                        <ul className="space-y-4">
                          {pkg.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 text-[#FF3366]`} />
                              <span className={`text-sm leading-tight ${pkg.highlight ? "text-white/80" : "text-[#1A1A1A]/60"}`}>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <p className={`text-xs mt-6 leading-relaxed ${pkg.highlight ? "text-white/30" : "text-[#1A1A1A]/30"}`}>{pkg.note}</p>
                      </CardContent>

                      <CardFooter className="p-8 pt-0 mt-auto">
                        <Button
                          onClick={() => openPackageModal(pkg)}
                          className={`w-full font-bold transition-all rounded-xl border-2 border-[#1A1A1A] ${pkg.highlight
                            ? "bg-[#FF3366] hover:bg-[#FF3366] text-white shadow-[4px_4px_0px_0px_#FFFFFF] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#FFFFFF] active:translate-y-[1px] active:translate-x-[1px] active:shadow-[0px_0px_0px_0px_#FFFFFF]"
                            : "bg-white hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-white shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-y-[1px] active:translate-x-[1px] active:shadow-[0px_0px_0px_0px_#1A1A1A]"
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

            <CSSScrollAnimation delay={0.3} className="text-center text-[#1A1A1A]/30 text-xs space-y-1 mb-12">
              <p>• Рекламный бюджет оплачивается отдельно</p>
              <p>• Минимальный срок сотрудничества — 1 месяц</p>
              <p>• Итоговый объём работ и стоимость подтверждаются до старта</p>
            </CSSScrollAnimation>
          </div>
        </section>

        {/* Lead Magnet */}
        <div id="lead-magnet">
          <AdsLeadMagnet />
        </div>

        {/* FAQ */}
        <div id="faq">
          <AdsFAQ />
        </div>

        {/* CTA */}
        <section className="py-16 md:py-24 px-4 relative overflow-hidden">
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <CSSScrollAnimation>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Готовы запустить рекламу?
              </h2>
            </CSSScrollAnimation>
            <CSSScrollAnimation delay={0.1}>
              <p className="text-xl text-[#1A1A1A]/60 mb-10">
                Обсудим ваш проект и предложим план действий.
              </p>
            </CSSScrollAnimation>
            <CSSScrollAnimation delay={0.2} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => open({ service: "ads" })}
                className="rounded-xl px-10 h-14 text-lg bg-[#FF3366] hover:bg-[#FF3366] text-white font-bold border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-y-[1px] active:translate-x-[1px] active:shadow-[0px_0px_0px_0px_#1A1A1A] transition-all"
              >
                Обсудить проект
              </Button>
            </CSSScrollAnimation>
          </div>
        </section>
      </div>
    </main>
  );
}
