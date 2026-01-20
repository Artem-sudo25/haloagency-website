"use client";

import { useEffect } from "react";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Briefcase,
  Check,
  Code2,
  Globe,
  Layout,
  Rocket,
  ShoppingCart,
  Smartphone,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";
import WebFAQ from "@/components/sections/WebFAQ";
import WebGuarantees from "@/components/sections/WebGuarantees";
import WebProcess from "@/components/sections/WebProcess";
import WebProjectForm from "@/components/sections/WebProjectForm";
import WebSocialProof from "@/components/sections/WebSocialProof";
import { Button } from "@/components/ui/button";
import { CSSScrollAnimation, CSSStagger, CSSStaggerItem } from "@/components/ui/css-scroll-animation";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SpotlightHero } from "@/components/ui/spotlight";
import { useContactModal } from "@/context/contact-modal-context";

// Data Definitions
const webPackages = [
  {
    id: "landing",
    title: "Landing Page",
    subtitle: "Идеально для запуска продукта",
    price: "от 8,000 CZK",
    time: "от 3 дней",
    features: [
      "Продающая структура",
      "Формы захвата лидов",
      "Интеграция с CRM",
      "Готов к рекламе",
      "Быстрая загрузка",
    ],
    highlight: false,
    icon: Rocket,
  },
  {
    id: "corporate",
    title: "Корпоративный",
    subtitle: "Многостраничный сайт для компании",
    price: "от 15,000 CZK",
    time: "от 7 дней",
    features: [
      "До 10 страниц",
      "Блог, услуги, о нас",
      "SEO-основа",
      "Базовая аналитика",
      "Адаптив под все устройства",
    ],
    highlight: true,
    badge: "⭐ POPULAR",
    icon: Layout,
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    subtitle: "Полноценный интернет-магазин",
    price: "от 50,000 CZK",
    time: "от 14 дней",
    features: [
      "Каталог + корзина",
      "Онлайн-оплата",
      "Интеграция со складом",
      "Server-side tracking",
      "Готов к масштабированию",
    ],
    highlight: false,
    icon: ShoppingCart,
  },
];

// Simple typewriter effect component
function Typewriter({ text }: { text: string }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
    >
      {text}|
    </motion.span>
  );
}

// Unified section divider to keep consistent separation between blocks
const SectionDivider = () => (
  <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/15 to-transparent border-t border-white/5" />
);

export default function WebDevelopmentPage() {
  const { open } = useContactModal();

  const openModal = (packageName: string, price?: string, time?: string) => {
    open({
      service: "package",
      package_name: `Сайты: ${packageName}`,
      message: `Интересует пакет "${packageName}"${price ? `\nСтоимость: ${price}` : ''}${time ? `\nСроки: ${time}` : ''}\n\n`
    });
  };

  // Prevent browser scroll restoration and ensure page starts at top
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Disable automatic scroll restoration
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      // Scroll to top on mount
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <main className="min-h-screen bg-ha-bg pt-20 overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative py-6 md:py-32 px-4">
        <SpotlightHero />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 animate-fade-in-up"
              >
                <Code2 className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-300 tracking-wide uppercase">
                  Веб-разработка
                </span>
              </div>

              <h1
                className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                Сайты, которые продают <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                  за вас 24/7
                </span>
              </h1>

              <p
                className="text-xl text-slate-400 mb-4 max-w-xl leading-relaxed animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Современные web-решения для малого и среднего бизнеса в Чехии
                — быстрые, SEO-ready и готовые к рекламе.
              </p>

              <p
                className="text-sm text-slate-500 mb-10 max-w-xl animate-fade-in-up"
                style={{ animationDelay: "0.25s" }}
              >
                Лендинг — от 3 дней. Онлайн магазин — до 3 недель
              </p>

              <div
                className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                <Button
                  size="lg"
                  onClick={() => open({ service: "web" })}
                  className="rounded-full px-8 bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/25 h-12"
                >
                  Заказать сайт
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 border-white/10 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm h-12"
                  asChild
                >
                  <Link href="#packages">Цены и сроки</Link>
                </Button>
              </div>
            </div>

            {/* Hero Graphic: 3D Code Window */}
            <div
              className="relative hidden lg:block animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-30 animate-pulse" />
              <div className="relative bg-[#0f172a] border border-slate-800 rounded-xl shadow-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-slate-900/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                  </div>
                  <div className="text-xs text-slate-500 font-mono ml-2">
                    page.tsx
                  </div>
                </div>
                <div className="p-6 font-mono text-sm leading-relaxed">
                  <div className="text-purple-400">
                    export default function{" "}
                    <span className="text-blue-400">Hero</span>() {"{"}
                  </div>
                  <div className="pl-4 text-slate-300">return (</div>
                  <div className="pl-8 text-slate-300">
                    &lt;<span className="text-red-400">section</span> className=
                    <span className="text-green-400">"relative"</span>&gt;
                  </div>
                  <div className="pl-12 text-slate-300">
                    &lt;<span className="text-red-400">h1</span>&gt;
                  </div>
                  <div className="pl-16 text-white">
                    <Typewriter text="Высокопроизводительный Веб" />
                  </div>
                  <div className="pl-12 text-slate-300">
                    &lt;/<span className="text-red-400">h1</span>&gt;
                  </div>
                  <div className="pl-12 text-slate-300">
                    &lt;<span className="text-red-400">Button</span>&gt;
                  </div>
                  <div className="pl-16 text-white">Start Project</div>
                  <div className="pl-12 text-slate-300">
                    &lt;/<span className="text-red-400">Button</span>&gt;
                  </div>
                  <div className="pl-8 text-slate-300">
                    &lt;/<span className="text-red-400">section</span>&gt;
                  </div>
                  <div className="pl-4 text-slate-300">);</div>
                  <div className="text-purple-400">{"}"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 2. For Whom - Target Audience */}
      <section className="py-24 bg-ha-bg-soft border-t border-ha-border-dark relative overflow-hidden">
        {/* Premium background effects */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-gradient-to-tl from-indigo-500/8 to-transparent rounded-full blur-[100px] pointer-events-none" />
        

        <div className="container mx-auto max-w-5xl px-4 relative z-10">
          <CSSScrollAnimation className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Users className="w-4 h-4 text-blue-400" />
              <p className="text-blue-400 text-sm font-medium uppercase tracking-wider">Целевая аудитория</p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Кому подойдут наши сайты
            </h2>
          </CSSScrollAnimation>

          <CSSStagger className="grid md:grid-cols-3 gap-6">
            <CSSStaggerItem index={0}>
              <div className="group relative p-8 rounded-3xl bg-slate-900/40 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/50 transition-all duration-500 overflow-hidden h-full">
                {/* Premium gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/30 to-indigo-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">Сервисный бизнес</h3>
                  <p className="text-slate-400 leading-relaxed">Заявки, бронирования, звонки — всё, что приносит клиентов.</p>
                </div>
              </div>
            </CSSStaggerItem>

            <CSSStaggerItem index={1}>
              <div className="group relative p-8 rounded-3xl bg-slate-900/40 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/50 transition-all duration-500 overflow-hidden h-full">
                {/* Premium gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/30 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <ShoppingCart className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">E-commerce</h3>
                  <p className="text-slate-400 leading-relaxed">Готовность к рекламе и аналитике с первого дня.</p>
                </div>
              </div>
            </CSSStaggerItem>

            <CSSStaggerItem index={2}>
              <div className="group relative p-8 rounded-3xl bg-slate-900/40 backdrop-blur-sm border border-indigo-500/20 hover:border-indigo-500/50 transition-all duration-500 overflow-hidden h-full">
                {/* Premium gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500/0 via-indigo-500/20 to-indigo-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/30 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">Локальные компании в Чехии</h3>
                  <p className="text-slate-400 leading-relaxed">SEO, скорость, доверие — то, что ценят местные клиенты.</p>
                </div>
              </div>
            </CSSStaggerItem>
          </CSSStagger>
        </div>
      </section>

      <SectionDivider />

      {/* 3. Results - What You Get */}
      <section className="py-24 bg-ha-bg border-t border-ha-border-dark relative overflow-hidden">
        {/* Premium background effects */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[400px] bg-gradient-to-r from-blue-500/10 via-cyan-500/5 to-transparent rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[300px] bg-gradient-to-tl from-blue-500/8 via-cyan-500/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto max-w-4xl px-4 relative z-10">
          <CSSScrollAnimation className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <TrendingUp className="w-4 h-4 text-blue-400" />
              <p className="text-blue-400 text-sm font-medium uppercase tracking-wider">Результаты</p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Что даёт сайт от HaloAgency
            </h2>
          </CSSScrollAnimation>

          <CSSStagger className="space-y-5">
            {[
              {
                title: "Быстрая работа сайта — без потери клиентов",
                description: "Сайт быстро открывается на телефоне и компьютере, не «тормозит» и не раздражает посетителей. Это напрямую влияет на количество заявок и доверие к бизнесу."
              },
              {
                title: "Готовность к рекламе с первого дня",
                description: "Структура сайта сразу подходит для Google Ads и Meta. Не нужно переделывать сайт после запуска рекламы или «допиливать на ходу»."
              },
              {
                title: "Видимость бизнеса в Google и AI-поиске",
                description: "Структура сайта помогает современным поисковым системам и AI правильно понимать ваш бизнес и показывать его потенциальным клиентам."
              },
              {
                title: "Понимание, откуда приходят клиенты",
                description: "Настраиваем аналитику так, чтобы вы понимали: какие страницы работают, откуда приходят заявки, что приносит результат, а что нет. Без лишних графиков и путаницы."
              },
              {
                title: "Возможность развиваться без переделки сайта",
                description: "Сайт не «одноразовый». Его можно спокойно дополнять, расширять и адаптировать под рост бизнеса — без полного редизайна через год."
              }
            ].map((item, i) => (
              <CSSStaggerItem key={i} index={i}>
                <div className="group relative p-6 rounded-2xl bg-slate-900/40 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/50 transition-all duration-500 overflow-hidden">
                  {/* Premium gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Animated border glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
                  
                  <div className="relative z-10 flex gap-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/30 via-cyan-500/20 to-blue-500/10 flex items-center justify-center text-blue-300 font-bold text-lg flex-shrink-0 group-hover:scale-110 group-hover:from-blue-500/40 group-hover:via-cyan-500/30 transition-all duration-300 shadow-lg shadow-blue-500/20">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-blue-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CSSStaggerItem>
            ))}
          </CSSStagger>
        </div>
      </section>

      <SectionDivider />

      {/* 4. Process - Build Pipeline */}
      <WebProcess />

      <SectionDivider />

      {/* 5. Services (What we develop) */}
      <section id="packages" className="py-24 bg-[#0A1628] relative overflow-hidden">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <ShoppingCart className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-400">Ценник услуг</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Что мы разрабатываем
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Мы подбираем формат сайта под задачу бизнеса, а не наоборот.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {webPackages.map((pkg, index) => (
              <div
                key={index}
                className={`relative h-full ${pkg.highlight ? "lg:-mt-6 lg:mb-6 z-10" : ""}`}
              >
                <Card
                  className={`relative flex flex-col h-full transition-all duration-300 ${
                    pkg.highlight
                      ? "bg-gradient-to-b from-[#1a2c4e] to-[#0A1628] border-2 border-blue-500 shadow-2xl shadow-blue-500/20"
                      : "bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10"
                  } rounded-2xl overflow-hidden`}
                >
                  {/* Popular Badge - gradient line */}
                  {pkg.highlight && (
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                  )}

                  {/* Popular Badge - text */}
                  {pkg.badge && (
                    <div className="absolute top-4 right-4 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded shadow-lg">
                      {pkg.badge}
                    </div>
                  )}

                  <CardHeader className="p-8 pb-3">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                        pkg.highlight ? "bg-blue-500/20 text-blue-400" : "bg-white/5 text-gray-400"
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
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm text-gray-400">Срок:</span>
                        <span className={`text-base font-semibold ${pkg.highlight ? "text-blue-400" : "text-gray-300"}`}>
                          {pkg.time}
                        </span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-8 pt-3 flex-grow">
                    <div className="w-full h-px bg-white/10 mb-4" />

                    <ul className="space-y-4">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check
                            className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                              pkg.highlight ? "text-blue-400" : "text-green-500"
                            }`}
                          />
                          <span className="text-sm text-gray-300 leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="p-8 pt-0 mt-auto">
                    <Button
                      onClick={() => openModal(pkg.title, pkg.price, pkg.time)}
                      className={`w-full font-medium transition-all ${
                        pkg.highlight
                          ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25"
                          : "bg-white/10 hover:bg-white/20 text-white"
                      }`}
                    >
                      Заказать
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              type="button"
              onClick={() => openModal("Индивидуальное решение", undefined, undefined)}
              className="text-sm text-gray-400 hover:text-gray-200 underline underline-offset-4 transition-colors"
            >
              Нужен индивидуальный проект? Обсудим →
            </button>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 3. Lead Gen Form - Enhanced */}
      <section className="py-24 px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />

        <div className="container mx-auto max-w-4xl relative z-10">
          {/* Section header */}
          <CSSScrollAnimation className="text-center mb-12">
            {/* Icon like home page */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500/20 mb-6 relative">
              <div className="absolute inset-0 rounded-full bg-orange-500/30 blur-xl" />
              <AlertTriangle className="w-8 h-8 text-orange-500 relative z-10" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Бесплатный концепт сайта
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Получите персональное демо до 48 часов
            </p>
          </CSSScrollAnimation>

          {/* Form wrapper with glassmorphism */}
          <CSSScrollAnimation delay={0.2} className="relative rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-orange-500/20 p-8 md:p-12 shadow-2xl">
            {/* Gradient border glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/20 via-orange-600/10 to-orange-500/20 opacity-60 blur-xl -z-10" />

            <WebProjectForm />
          </CSSScrollAnimation>
        </div>
      </section>


      <SectionDivider />

      {/* 5. FAQ */}
      <WebFAQ />

      <SectionDivider />

      {/* 6. Cases - Web-Dev Focus */}
      <section className="py-24 bg-ha-bg relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Briefcase className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-400">Кейсы</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Как это работает на практике
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Nejbalonky */}
            <div className="group p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
              <div className="text-blue-400 text-sm font-mono mb-2">01</div>
              <h3 className="text-xl font-bold text-white mb-3">Nejbalonky.cz</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                E-commerce архитектура на Next.js + WooCommerce. Масштабируемая система, готовая к росту трафика.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded">Архитектура</span>
                <span className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded">E-commerce</span>
                <span className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded">Масштаб</span>
              </div>
            </div>

            {/* ProPradlo */}
            <div className="group p-6 rounded-2xl bg-gradient-to-br from-teal-500/10 to-transparent border border-teal-500/20 hover:border-teal-500/40 transition-all duration-300">
              <div className="text-teal-400 text-sm font-mono mb-2">02</div>
              <h3 className="text-xl font-bold text-white mb-3">ProPradlo.cz</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Web-app с real-time бронированием и интеграцией в CRM. Логика заказов и автоматизация.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-teal-500/20 text-teal-300 rounded">Web-app</span>
                <span className="px-2 py-1 text-xs bg-teal-500/20 text-teal-300 rounded">Бронирование</span>
                <span className="px-2 py-1 text-xs bg-teal-500/20 text-teal-300 rounded">CRM</span>
              </div>
            </div>

            {/* Segway */}
            <div className="group p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300">
              <div className="text-amber-400 text-sm font-mono mb-2">03</div>
              <h3 className="text-xl font-bold text-white mb-3">Segway Tours</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                SEO-структура, оптимизированный контент и Core Web Vitals. Быстрый сайт для туризма.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-amber-500/20 text-amber-300 rounded">SEO</span>
                <span className="px-2 py-1 text-xs bg-amber-500/20 text-amber-300 rounded">Скорость</span>
                <span className="px-2 py-1 text-xs bg-amber-500/20 text-amber-300 rounded">Контент</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 7. Social Proof */}
      <WebSocialProof />

      <SectionDivider />

      {/* 8. Guarantees */}
      <WebGuarantees />

      <SectionDivider />

      {/* 9. CTA */}
      <section className="py-24 px-4 bg-ha-bg-soft border-t border-ha-border-dark">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Готовы начать проект?
          </h2>
          <p className="text-xl text-slate-400 mb-10">
            Оставьте заявку, и мы подготовим для вас персональное предложение и
            стратегию развития.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => openModal("Обсудить проект", undefined, undefined)}
              className="rounded-full px-10 h-14 text-lg bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-500/20"
            >
              Обсудить проект
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
