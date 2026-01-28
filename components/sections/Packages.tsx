"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Sparkles, Zap, ShoppingCart, Rocket, Crown } from "lucide-react";
import Link from "next/link";
import { useContactModalActions } from "@/context/contact-modal-context";
import { useState, useRef, useEffect } from "react";

const packages = [
  {
    title: "Фундамент",
    subtitle: "Основа для онлайн-присутствия",
    priceSetup: "18,000 Kč",
    priceMonthly: "от 8,000 Kč/мес",
    description: "Для быстрого старта",
    features: [
      "Landing page или простой сайт (до 5 страниц)",
      "Настройка Meta Ads или Google Ads (одна платформа)",
      "Полная аналитика (Server-side tracking)",
      "Базовое SEO и оптимизация под AI-выдачу",
      "Email отчеты раз в месяц"
    ],
    highlight: false,
    icon: Rocket
  },
  {
    title: "Трафик",
    subtitle: "Привлечение клиентов из рекламы",
    priceSetup: "35,000 Kč",
    priceMonthly: "от 16,000 Kč/мес",
    description: "Оптимально для роста",
    features: [
      "Все из пакета \"Фундамент\"",
      "Многостраничный сайт (до 15 страниц)",
      "Meta + Google Ads (обе платформы)",
      "Еженедельные отчеты",
      "Приоритетная поддержка (WhatsApp/Telegram)"
    ],
    highlight: true,
    badge: "⭐ POPULAR",
    icon: Zap
  },
  {
    title: "E-commerce",
    subtitle: "Для интернет-магазинов",
    priceSetup: "50,000 Kč",
    priceMonthly: "от 25,000 Kč/мес",
    description: "Для интернет-магазинов",
    features: [
      "Всё из пакета \"Трафик\"",
      "Интернет-магазин до 100 товаров",
      "Google Shopping / Performance Max",
      "Google Merchant / Meta Catalog",
      "Meta Advantage+ Catalog Ads",
      "Отчёты: топ товаров, категории, средний чек"
    ],
    highlight: false,
    icon: ShoppingCart
  },
  {
    title: "Масштаб",
    subtitle: "Индивидуальное решение под ваш бизнес",
    priceSetup: "По запросу",
    priceMonthly: "Индивидуально",
    description: "Индивидуальное решение",
    features: [
      "Полностью кастомное решение",
      "Любые интеграции и автоматизации",
      "AI-ассистенты для бизнеса",
      "Полный технический аудит",
      "Стратегическое консультирование",
      "24/7 приоритетная поддержка"
    ],
    highlight: false,
    icon: Crown
  }
];

export default function Packages() {
  const { open: openContactModal } = useContactModalActions();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showScrollHint, setShowScrollHint] = useState(true);

  // Track scroll position to update dots and hide hint
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.offsetWidth * 0.8; // Approximate card width (80vw)
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(newIndex);

      // Hide scroll hint after user scrolls
      if (scrollLeft > 20) {
        setShowScrollHint(false);
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePackageClick = (pkg: typeof packages[0]) => {
    const message = `Интересует пакет "${pkg.title}"\nНастройка: ${pkg.priceSetup}\nMonthly: ${pkg.priceMonthly}\n\n`;
    openContactModal({
      service: "package",
      package_name: pkg.title,
      message: message,
    });
  };

  return (
    <section id="pricing" className="py-16 md:py-24 bg-[#0A1628] overflow-hidden" aria-labelledby="pricing-heading">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4 md:mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-gray-300">💎 Тарифы</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Выберите подходящий пакет
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Прозрачное ценообразование. Без скрытых платежей.
          </p>
        </div>

        {/* Mobile: Horizontal Scroll | Desktop: Grid */}
        <div className="relative">
          {/* Scroll Hint - Mobile Only */}
          {showScrollHint && (
            <div className="md:hidden absolute top-1/2 -translate-y-1/2 right-0 z-20 pointer-events-none transition-opacity duration-300">
              <div className="bg-gradient-to-l from-[#0A1628] via-[#0A1628]/80 to-transparent w-24 h-full flex items-center justify-end pr-3">
                <svg
                  className="w-6 h-6 text-blue-400 animate-bounce-x"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          )}

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 snap-x snap-mandatory scroll-pl-4 p-4 md:p-6"
          >
            <div className="flex md:contents gap-4 px-4 md:px-0 pb-2">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`
                    flex-shrink-0 w-[80vw] sm:w-[70vw] md:w-auto snap-start
                    ${pkg.highlight ? 'z-10' : ''}
                  `}
                >
                  <Card
                    className={`relative flex flex-col h-full transition-all duration-300 ${pkg.highlight
                      ? 'bg-gradient-to-b from-[#1a2c4e] to-[#0A1628] border-2 border-blue-500 shadow-2xl shadow-blue-500/20 scale-100 lg:scale-105'
                      : 'bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10'
                      } rounded-2xl overflow-hidden`}
                  >
                    {/* Popular Badge */}
                    {pkg.highlight && (
                      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                    )}

                    {pkg.badge && (
                      <div className="absolute top-4 right-4 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded shadow-lg">
                        {pkg.badge}
                      </div>
                    )}

                    <CardHeader className="p-6 pb-2">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${pkg.highlight ? 'bg-blue-500/20 text-blue-400' : 'bg-white/5 text-gray-400'
                        }`}>
                        <pkg.icon className="w-6 h-6" />
                      </div>

                      <CardTitle className="text-2xl font-bold text-white mb-1">
                        {pkg.title}
                      </CardTitle>

                      <p className="text-sm text-gray-400 font-medium mb-4">
                        {pkg.subtitle}
                      </p>

                      <div className="space-y-1 mb-2">
                        <div className="flex items-baseline gap-1">
                          <span className="text-sm text-gray-400">Настройка:</span>
                          <span className="text-lg font-bold text-white">{pkg.priceSetup}</span>
                        </div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-sm text-gray-400">В месяц:</span>
                          <span className={`text-base font-semibold ${pkg.highlight ? 'text-blue-400' : 'text-gray-300'}`}>
                            {pkg.priceMonthly}
                          </span>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="p-6 pt-2 flex-grow">
                      <div className="w-full h-px bg-white/10 mb-4" />

                      <ul className="space-y-3">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${pkg.highlight ? 'text-blue-400' : 'text-green-500'
                              }`} />
                            <span className="text-sm text-gray-300 leading-tight">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>

                    <CardFooter className="p-6 pt-0 mt-auto">
                      <Button
                        onClick={() => handlePackageClick(pkg)}
                        className={`w-full font-medium transition-all ${pkg.highlight
                          ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25'
                          : 'bg-white/10 hover:bg-white/20 text-white'
                          }`}
                      >
                        {pkg.title === "VIP" ? "Связаться" : "Выбрать"}
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Indicators (Dots) - Mobile Only */}
          <div className="md:hidden flex justify-center gap-2 mt-6">
            {packages.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${index === activeIndex ? 'w-6 bg-blue-500' : 'w-1.5 bg-white/20'
                  }`}
                aria-label={`Пакет ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Discount Banner */}


        <div className="text-center mt-8">
          <button
            onClick={() => openContactModal({ service: "consultation", message: "Нужна помощь в выборе пакета" })}
            className="text-sm text-gray-400 hover:text-gray-200 underline underline-offset-4 transition-colors"
          >
            Нужна помощь в выборе?
          </button>
        </div>

      </div>
    </section >
  );
}
