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
import { useContactModalActions } from "@/context/contact-modal-context";

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
    price: "от 35,000 CZK",
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

export default function WebPageClient() {
  const { open } = useContactModalActions();

  const openModal = (packageName: string, price?: string, time?: string) => {
    const numericPrice = price ? parseInt(price.replace(/[^0-9]/g, "")) : 0;
    const leadValue = numericPrice > 0 ? numericPrice : 8000;

    open({
      service: "package",
      package_name: `Сайты: ${packageName}`,
      message: `Интересует пакет "${packageName}"${price ? `\nСтоимость: ${price}` : ''}${time ? `\nСроки: ${time}` : ''}\n\n`,
      value: leadValue,
      currency: "CZK"
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
    }
  }, []);

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
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] mb-8 animate-fade-in-up"
                >
                  <Code2 className="w-4 h-4 text-[#FF3366]" />
                  <span className="text-sm font-bold text-[#1A1A1A] tracking-wide uppercase">
                    Веб-разработка
                  </span>
                </div>

                <h1
                  className="text-5xl md:text-7xl font-extrabold text-[#1A1A1A] mb-6 leading-tight tracking-tight animate-fade-in-up"
                  style={{ animationDelay: "0.1s", fontFamily: 'var(--font-display)' }}
                >
                  Создание сайтов под ключ <br />
                  <span className="relative inline-block z-10">
                    для бизнеса в Чехии
                    <svg className="absolute -bottom-2 left-0 w-full h-4 text-[#FF3366] -z-10" fill="none" preserveAspectRatio="none" viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeLinecap="round" strokeWidth="4" />
                    </svg>
                  </span>
                </h1>

                <p
                  className="text-xl text-[#1A1A1A]/60 mb-4 max-w-xl leading-relaxed animate-fade-in-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  Современные web-решения для малого и среднего бизнеса в Чехии
                  — быстрые, SEO-ready и готовые к рекламе.
                </p>

                <p
                  className="text-sm text-[#1A1A1A]/40 mb-10 max-w-xl animate-fade-in-up"
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
                    className="rounded-xl px-8 bg-[#FF3366] hover:bg-[#FF3366]/90 text-white font-bold border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-y-[1px] active:translate-x-[1px] active:shadow-[0px_0px_0px_0px_#1A1A1A] transition-all h-12"
                  >
                    Заказать сайт
                  </Button>
                  <Link href="#packages" className="text-[#1A1A1A]/60 font-medium hover:text-[#FF3366] transition-colors text-base">
                    Цены и сроки →
                  </Link>
                </div>

                {/* Anchor Buttons */}
                <div
                  className="flex flex-wrap gap-4 mt-8 animate-fade-in-up justify-center md:justify-start"
                  style={{ animationDelay: "0.35s" }}
                >
                  <Button variant="ghost" size="sm" className="text-[#1A1A1A]/50 hover:text-[#FF3366] p-0 h-auto font-normal hover:bg-transparent" asChild>
                    <Link href="#results">Результаты</Link>
                  </Button>
                  <Button variant="ghost" size="sm" className="text-[#1A1A1A]/50 hover:text-[#FF3366] p-0 h-auto font-normal hover:bg-transparent" asChild>
                    <Link href="#process">Процесс</Link>
                  </Button>
                  <Button variant="ghost" size="sm" className="text-[#1A1A1A]/50 hover:text-[#FF3366] p-0 h-auto font-normal hover:bg-transparent" asChild>
                    <Link href="#faq">FAQ</Link>
                  </Button>
                  <Button variant="ghost" size="sm" className="text-[#FF3366] hover:text-[#FF3366]/80 p-0 h-auto font-normal hover:bg-transparent" asChild>
                    <Link href="#concept" className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Бесплатный концепт сайта
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Hero Graphic: Code Window */}
              <div
                className="relative hidden lg:block animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="relative bg-white border-2 border-[#1A1A1A] rounded-xl shadow-[8px_8px_0px_0px_#1A1A1A] overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 border-b-2 border-[#1A1A1A] bg-gray-50">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="text-xs text-[#1A1A1A]/40 font-mono ml-2">
                      page.tsx
                    </div>
                  </div>
                  <div className="p-6 font-mono text-sm leading-relaxed bg-[#1A1A1A]">
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
                    <div className="pl-16 text-[#1A1A1A]">
                      <Typewriter text="Высокопроизводительный Веб" />
                    </div>
                    <div className="pl-12 text-slate-300">
                      &lt;/<span className="text-red-400">h1</span>&gt;
                    </div>
                    <div className="pl-12 text-slate-300">
                      &lt;<span className="text-red-400">Button</span>&gt;
                    </div>
                    <div className="pl-16 text-[#1A1A1A]">Start Project</div>
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

        {/* 2. For Whom - Target Audience */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="container mx-auto max-w-5xl px-4 relative z-10">
            <CSSScrollAnimation className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Кому подойдут наши сайты
              </h2>
            </CSSScrollAnimation>

            <CSSStagger className="grid md:grid-cols-3 gap-6">
              <CSSStaggerItem index={0}>
                <div className="group relative p-8 rounded-2xl bg-white border-2 border-[#1A1A1A] transition-all overflow-hidden h-full shadow-[6px_6px_0px_0px_#1A1A1A] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_#1A1A1A]">
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full bg-[#FF3366]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Rocket className="w-6 h-6 text-[#FF3366]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#FF3366] transition-colors">Сервисный бизнес</h3>
                    <p className="text-[#1A1A1A]/60 leading-relaxed">Заявки, бронирования, звонки — всё, что приносит клиентов.</p>
                  </div>
                </div>
              </CSSStaggerItem>

              <CSSStaggerItem index={1}>
                <div className="group relative p-8 rounded-2xl bg-white border-2 border-[#1A1A1A] transition-all overflow-hidden h-full shadow-[6px_6px_0px_0px_#1A1A1A] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_#1A1A1A]">
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full bg-[#FF3366]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <ShoppingCart className="w-6 h-6 text-[#FF3366]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#FF3366] transition-colors">E-commerce</h3>
                    <p className="text-[#1A1A1A]/60 leading-relaxed">Готовность к рекламе и аналитике с первого дня.</p>
                  </div>
                </div>
              </CSSStaggerItem>

              <CSSStaggerItem index={2}>
                <div className="group relative p-8 rounded-2xl bg-white border-2 border-[#1A1A1A] transition-all overflow-hidden h-full shadow-[6px_6px_0px_0px_#1A1A1A] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_#1A1A1A]">
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full bg-[#FF3366]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Globe className="w-6 h-6 text-[#FF3366]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#FF3366] transition-colors">Локальные компании в Чехии</h3>
                    <p className="text-[#1A1A1A]/60 leading-relaxed">SEO, скорость, доверие — то, что ценят местные клиенты.</p>
                  </div>
                </div>
              </CSSStaggerItem>
            </CSSStagger>
          </div>
        </section>

        {/* 3. Results - What You Get */}
        <section id="results" className="py-16 md:py-24 relative overflow-hidden">
          <div className="container mx-auto max-w-4xl px-4 relative z-10">
            <CSSScrollAnimation className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
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
                  <div className="group relative p-6 rounded-2xl bg-white border-2 border-[#1A1A1A] transition-all overflow-hidden shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A]">
                    <div className="relative z-10 flex gap-5">
                      <div className="w-12 h-12 rounded-xl bg-[#06D6A0] border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] flex items-center justify-center text-[#1A1A1A] font-extrabold text-lg flex-shrink-0 group-hover:-translate-y-[2px] group-hover:-translate-x-[2px] group-hover:shadow-[4px_4px_0px_0px_#1A1A1A] transition-all duration-300" style={{ fontFamily: 'var(--font-display)' }}>
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[#1A1A1A] font-semibold text-lg mb-2 group-hover:text-[#FF3366] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-[#1A1A1A]/60 text-sm leading-relaxed">
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

        {/* 4. Process - Build Pipeline */}
        <div id="process">
          <WebProcess />
        </div>

        {/* 5. Services (What we develop) */}
        <section id="packages" className="py-16 md:py-24 relative md:overflow-visible">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Что мы разрабатываем
              </h2>
              <p className="text-[#1A1A1A]/60 text-lg md:text-xl max-w-2xl mx-auto">
                Мы подбираем формат сайта под задачу бизнеса, а не наоборот.
              </p>
            </div>

            <div className="overflow-x-auto scrollbar-hide md:grid md:grid-cols-3 gap-8 items-start snap-x snap-mandatory scroll-pl-4 md:overflow-visible pb-12 md:pb-0">
              <div className="flex md:contents gap-4 px-4 md:px-0 pb-2">
                {webPackages.map((pkg, index) => (
                  <div
                    key={index}
                    className={`flex-shrink-0 w-[80vw] sm:w-[50vw] md:w-auto snap-start relative h-full ${pkg.highlight ? "z-10" : ""}`}
                  >
                    <Card
                      className={`relative flex flex-col h-full transition-all duration-300 rounded-3xl ${pkg.highlight
                        ? "bg-[#1A1A1A] border-2 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#FF3366] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_#FF3366] lg:scale-105"
                        : "bg-white border-2 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#1A1A1A] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_#1A1A1A]"
                        } overflow-hidden`}
                    >
                      {pkg.highlight && (
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#FF3366] to-pink-400"></div>
                      )}

                      {pkg.badge && (
                        <div className="absolute top-4 right-4 bg-[#FF3366] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full shadow-lg">
                          {pkg.badge}
                        </div>
                      )}

                      <CardHeader className="p-8 pb-3">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${pkg.highlight ? "bg-[#FF3366]/20 text-[#FF3366]" : "bg-[#FF3366]/10 text-[#FF3366]"
                            }`}
                        >
                          <pkg.icon className="w-6 h-6" />
                        </div>

                        <CardTitle className={`text-2xl font-bold mb-1 ${pkg.highlight ? "text-white" : "text-[#1A1A1A]"}`}>
                          {pkg.title}
                        </CardTitle>

                        <p className={`text-sm font-medium mb-4 ${pkg.highlight ? "text-white/60" : "text-[#1A1A1A]/50"}`}>
                          {pkg.subtitle}
                        </p>

                        <div className="space-y-1 mb-2">
                          <div className="flex items-baseline gap-2">
                            <span className={`text-2xl font-bold ${pkg.highlight ? "text-white" : "text-[#1A1A1A]"}`}>{pkg.price}</span>
                          </div>
                          <div className="flex items-baseline gap-1">
                            <span className={`text-sm ${pkg.highlight ? "text-white/50" : "text-[#1A1A1A]/40"}`}>Срок:</span>
                            <span className={`text-base font-semibold ${pkg.highlight ? "text-[#FF3366]" : "text-[#1A1A1A]/70"}`}>
                              {pkg.time}
                            </span>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="p-8 pt-3 flex-grow">
                        <div className={`w-full h-px mb-4 ${pkg.highlight ? "bg-white/10" : "bg-[#1A1A1A]/5"}`} />

                        <ul className="space-y-4">
                          {pkg.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <Check
                                className={`w-4 h-4 mt-0.5 flex-shrink-0 ${pkg.highlight ? "text-[#FF3366]" : "text-[#FF3366]"
                                  }`}
                              />
                              <span className={`text-sm leading-tight ${pkg.highlight ? "text-white/80" : "text-[#1A1A1A]/60"}`}>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>

                      <CardFooter className="p-8 pt-0 mt-auto">
                        <Button
                          onClick={() => openModal(pkg.title, pkg.price, pkg.time)}
                          className={`w-full font-bold transition-all rounded-xl border-2 border-[#1A1A1A] ${pkg.highlight
                            ? "bg-[#FF3366] hover:bg-[#FF3366] text-white shadow-[4px_4px_0px_0px_#FFFFFF] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#FFFFFF] active:translate-y-[1px] active:translate-x-[1px] active:shadow-[0px_0px_0px_0px_#FFFFFF]"
                            : "bg-white hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-white shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-y-[1px] active:translate-x-[1px] active:shadow-[0px_0px_0px_0px_#1A1A1A]"
                            }`}
                        >
                          Заказать
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-12">
              <button
                type="button"
                onClick={() => openModal("Индивидуальное решение", undefined, undefined)}
                className="text-sm text-[#1A1A1A]/50 hover:text-[#FF3366] underline underline-offset-4 transition-colors"
              >
                Нужен индивидуальный проект? Обсудим →
              </button>
            </div>
          </div>
        </section>

        {/* 3. Lead Gen Form */}
        <section id="concept" className="py-16 md:py-24 px-4 relative overflow-hidden">

          <div className="container mx-auto max-w-4xl relative z-10">
            <CSSScrollAnimation className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FF3366]/10 mb-6">
                <AlertTriangle className="w-8 h-8 text-[#FF3366]" />
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Бесплатный концепт сайта
              </h2>
              <p className="text-[#1A1A1A]/60 text-lg md:text-xl max-w-2xl mx-auto">
                Получите персональное демо до 48 часов
              </p>
            </CSSScrollAnimation>

            <CSSScrollAnimation delay={0.2} className="relative rounded-3xl bg-[#B19CD9] border-2 border-[#1A1A1A] p-8 md:p-12 shadow-[8px_8px_0px_0px_#1A1A1A]">
              <WebProjectForm />
            </CSSScrollAnimation>
          </div>
        </section>

        {/* 5. FAQ */}
        <div id="faq">
          <WebFAQ />
        </div>

        {/* 6. Cases - Web-Dev Focus */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="container mx-auto max-w-6xl px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Как это работает на практике
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="group p-6 rounded-2xl bg-white border-2 border-[#1A1A1A] transition-all shadow-[6px_6px_0px_0px_#1A1A1A] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_#1A1A1A]">
                <div className="text-[#FF3366] text-xl font-extrabold mb-2" style={{ fontFamily: 'var(--font-display)' }}>01</div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Nejbalonky.cz</h3>
                <p className="text-[#1A1A1A]/60 text-sm leading-relaxed mb-4">
                  E-commerce архитектура на Next.js + WooCommerce. Масштабируемая система, готовая к росту трафика.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs bg-white border border-[#1A1A1A] text-[#1A1A1A] rounded-md font-bold shadow-[2px_2px_0px_0px_#1A1A1A]">Архитектура</span>
                  <span className="px-3 py-1 text-xs bg-white border border-[#1A1A1A] text-[#1A1A1A] rounded-md font-bold shadow-[2px_2px_0px_0px_#1A1A1A]">E-commerce</span>
                  <span className="px-3 py-1 text-xs bg-white border border-[#1A1A1A] text-[#1A1A1A] rounded-md font-bold shadow-[2px_2px_0px_0px_#1A1A1A]">Масштаб</span>
                </div>
              </div>

              <div className="group p-6 rounded-2xl bg-white border-2 border-[#1A1A1A] transition-all shadow-[6px_6px_0px_0px_#1A1A1A] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_#1A1A1A]">
                <div className="text-[#06D6A0] text-xl font-extrabold mb-2" style={{ fontFamily: 'var(--font-display)' }}>02</div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">ProPradlo.cz</h3>
                <p className="text-[#1A1A1A]/60 text-sm leading-relaxed mb-4">
                  Web-app с real-time бронированием и интеграцией в CRM. Логика заказов и автоматизация.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs bg-white border border-[#1A1A1A] text-[#1A1A1A] rounded-md font-bold shadow-[2px_2px_0px_0px_#1A1A1A]">Web-app</span>
                  <span className="px-3 py-1 text-xs bg-white border border-[#1A1A1A] text-[#1A1A1A] rounded-md font-bold shadow-[2px_2px_0px_0px_#1A1A1A]">Бронирование</span>
                  <span className="px-3 py-1 text-xs bg-white border border-[#1A1A1A] text-[#1A1A1A] rounded-md font-bold shadow-[2px_2px_0px_0px_#1A1A1A]">CRM</span>
                </div>
              </div>

              <div className="group p-6 rounded-2xl bg-white border-2 border-[#1A1A1A] transition-all shadow-[6px_6px_0px_0px_#1A1A1A] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_#1A1A1A]">
                <div className="text-[#118AB2] text-xl font-extrabold mb-2" style={{ fontFamily: 'var(--font-display)' }}>03</div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Segway Tours</h3>
                <p className="text-[#1A1A1A]/60 text-sm leading-relaxed mb-4">
                  SEO-структура, оптимизированный контент и Core Web Vitals. Быстрый сайт для туризма.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs bg-white border border-[#1A1A1A] text-[#1A1A1A] rounded-md font-bold shadow-[2px_2px_0px_0px_#1A1A1A]">SEO</span>
                  <span className="px-3 py-1 text-xs bg-white border border-[#1A1A1A] text-[#1A1A1A] rounded-md font-bold shadow-[2px_2px_0px_0px_#1A1A1A]">Скорость</span>
                  <span className="px-3 py-1 text-xs bg-white border border-[#1A1A1A] text-[#1A1A1A] rounded-md font-bold shadow-[2px_2px_0px_0px_#1A1A1A]">Контент</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Social Proof */}
        <WebSocialProof />

        {/* 8. Guarantees */}
        <WebGuarantees />

        {/* 9. CTA */}
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Готовы начать проект?
            </h2>
            <p className="text-xl text-[#1A1A1A]/60 mb-10">
              Оставьте заявку, и мы подготовим для вас персональное предложение и
              стратегию развития.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => openModal("Обсудить проект", undefined, undefined)}
                className="rounded-xl px-10 h-14 text-lg bg-[#FF3366] hover:bg-[#FF3366] text-white font-bold border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-y-[1px] active:translate-x-[1px] active:shadow-[0px_0px_0px_0px_#1A1A1A] transition-all"
              >
                Обсудить проект
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
