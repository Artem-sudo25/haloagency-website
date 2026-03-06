"use client";

import { Check, Rocket, Zap, ShoppingCart, Crown } from "lucide-react";
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
    icon: Rocket,
    iconBg: "bg-[#06D6A0]"
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
    badge: "Популярный",
    icon: Zap,
    iconBg: "bg-[#FF3366]"
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
    icon: ShoppingCart,
    iconBg: "bg-[#FFD166]"
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
    icon: Crown,
    iconBg: "bg-[#B19CD9]"
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
      const cardWidth = container.offsetWidth * 0.8;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(newIndex);

      if (scrollLeft > 20) {
        setShowScrollHint(false);
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePackageClick = (pkg: typeof packages[0]) => {
    const message = `Интересует пакет "${pkg.title}"\nНастройка: ${pkg.priceSetup}\nMonthly: ${pkg.priceMonthly}\n\n`;
    const numericPrice = parseInt(pkg.priceSetup.replace(/[^0-9]/g, "")) || 0;

    openContactModal({
      service: "package",
      package_name: pkg.title,
      message: message,
      value: numericPrice > 0 ? numericPrice : 8000,
      currency: "CZK"
    });
  };

  return (
    <section id="pricing" className="py-16 md:py-24 px-6" aria-labelledby="pricing-heading">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">

        {/* Header */}
        <div className="text-center flex flex-col items-center gap-4">
          <h2 id="pricing-heading" className="text-4xl md:text-5xl font-extrabold tracking-tight relative" style={{ fontFamily: 'var(--font-display)' }}>
            Выберите подходящий{" "}
            <span className="relative inline-block z-10">
              пакет
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#FF3366] -z-10" fill="none" preserveAspectRatio="none" viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeLinecap="round" strokeWidth="4" />
              </svg>
            </span>
          </h2>
          <p className="text-lg text-[#1A1A1A]/70 max-w-xl mt-4">
            Прозрачное ценообразование. Без скрытых платежей.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="relative">
          {/* Scroll Hint - Mobile Only */}
          {showScrollHint && (
            <div className="md:hidden absolute top-1/2 -translate-y-1/2 right-0 z-20 pointer-events-none transition-opacity duration-300">
              <div className="bg-gradient-to-l from-[#F5F5F7] via-[#F5F5F7]/80 to-transparent w-24 h-full flex items-center justify-end pr-3">
                <svg className="w-6 h-6 text-[#FF3366] animate-bounce-x" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          )}

          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 snap-x snap-mandatory scroll-pl-4 p-4 pt-10 pb-6 md:p-6 md:pt-14 -mx-4 md:mx-0"
          >
            <div className="flex md:contents gap-4 px-4 md:px-0 pb-2">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 w-[80vw] sm:w-[70vw] md:w-auto snap-start ${pkg.highlight ? 'z-10' : ''}`}
                >
                  <div
                    className={`relative flex flex-col h-full transition-all duration-300 rounded-2xl border-2 border-[#1A1A1A] ${pkg.highlight
                      ? 'bg-[#1A1A1A] text-white transform lg:-translate-y-4 shadow-[8px_8px_0px_0px_#FF3366]'
                      : 'bg-white shadow-[6px_6px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[10px_10px_0px_0px_#1A1A1A]'
                      }`}
                  >
                    {/* Popular Badge */}
                    {pkg.badge && (
                      <div className="absolute -top-4 right-4 bg-[#FF3366] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-none border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] rotate-3 z-20 hover:rotate-6 transition-transform">
                        {pkg.badge}
                      </div>
                    )}

                    <div className="p-8 flex flex-col h-full pt-10">
                      {/* Icon */}
                      <div className={`w-14 h-14 rounded-xl border-2 border-[#1A1A1A] flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_#1A1A1A] ${pkg.iconBg || 'bg-white'} text-[#1A1A1A]`}>
                        <pkg.icon className="w-6 h-6 " />
                      </div>

                      <h3 className="text-2xl font-bold mb-1" style={{ fontFamily: 'var(--font-display)' }}>{pkg.title}</h3>
                      <p className={`text-sm mb-4 ${pkg.highlight ? 'text-white/60' : 'text-[#1A1A1A]/60'}`}>{pkg.subtitle}</p>

                      {/* Pricing */}
                      <div className={`my-4 border-b pb-6 ${pkg.highlight ? 'border-white/10' : 'border-[#1A1A1A]/10'}`}>
                        <p className={`text-sm ${pkg.highlight ? 'text-white/60' : 'text-[#1A1A1A]/60'}`}>
                          Настройка: <span className={`font-bold ${pkg.highlight ? 'text-white' : 'text-[#1A1A1A]'}`}>{pkg.priceSetup}</span>
                        </p>
                        <p className={`text-sm mt-1 ${pkg.highlight ? 'text-white/60' : 'text-[#1A1A1A]/60'}`}>
                          В месяц: <span className={`font-bold ${pkg.highlight ? 'text-white' : 'text-[#1A1A1A]'}`}>{pkg.priceMonthly}</span>
                        </p>
                      </div>

                      {/* Features */}
                      <ul className="flex flex-col gap-3 text-sm flex-grow">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#FF3366]" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA Button */}
                      <button
                        onClick={() => handlePackageClick(pkg)}
                        className={`w-full py-3 mt-6 rounded-xl font-bold transition-all border-2 border-[#1A1A1A] ${pkg.highlight
                          ? 'bg-[#FF3366] text-white shadow-[4px_4px_0px_0px_#ffffff] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_#ffffff] active:translate-y-1 active:translate-x-1 active:shadow-[0px_0px_0px_0px_#ffffff]'
                          : 'bg-white text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-y-1 active:translate-x-1 active:shadow-[0px_0px_0px_0px_#1A1A1A]'
                          }`}
                      >
                        {pkg.title === "Масштаб" ? "Связаться" : "Выбрать"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Indicators (Dots) - Mobile Only */}
          <div className="md:hidden flex justify-center gap-2 mt-6">
            {packages.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${index === activeIndex ? 'w-6 bg-[#FF3366]' : 'w-1.5 bg-[#1A1A1A]/20'
                  }`}
                aria-label={`Пакет ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => openContactModal({ service: "consultation", message: "Нужна помощь в выборе пакета" })}
            className="text-sm text-[#1A1A1A]/60 hover:text-[#1A1A1A] underline underline-offset-4 transition-colors"
          >
            Нужна помощь в выборе?
          </button>
        </div>
      </div>
    </section>
  );
}
