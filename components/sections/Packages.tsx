"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Sparkles, Zap, Trophy, Rocket, Crown } from "lucide-react";
import Link from "next/link";
import { useContactModal } from "@/context/contact-modal-context";

const packages = [
  {
    title: "Старт",
    subtitle: "Entry Level",
    priceSetup: "60,000 Kč",
    priceMonthly: "15,000 Kč/мес",
    description: "Для быстрого старта",
    features: [
      "Landing page или простой сайт (до 5 страниц)",
      "Настройка Meta Ads или Google Ads (одна платформа)",
      "Базовая аналитика (GA4 + GTM)",
      "Email отчеты раз в месяц",
      "Support via email"
    ],
    highlight: false,
    icon: Rocket
  },
  {
    title: "Рост",
    subtitle: "Most Popular",
    priceSetup: "70,000 Kč",
    priceMonthly: "18,000 Kč/мес",
    description: "Оптимально для роста",
    features: [
      "Все из пакета \"Старт\"",
      "E-commerce или многостраничный сайт (до 10 страниц)",
      "Meta + Google Ads (обе платформы)",
      "Полная аналитика (Server-side tracking)",
      "Еженедельные отчеты",
      "Приоритетная поддержка (WhatsApp/Telegram)"
    ],
    highlight: true,
    badge: "⭐ POPULAR",
    icon: Zap
  },
  {
    title: "Масштаб",
    subtitle: "Advanced",
    priceSetup: "85,000 Kč",
    priceMonthly: "20,000 Kč/мес",
    description: "Максимальный охват",
    features: [
      "Все из пакета \"Рост\"",
      "Премиум дизайн (до 15 страниц + кастомизация)",
      "Meta + Google + Seznam Sklik",
      "Advanced tracking (Meta CAPI, Enhanced)",
      "Автоматизация (n8n/Make интеграции)",
      "Еженедельные video-call и менеджер"
    ],
    highlight: false,
    icon: Trophy
  },
  {
    title: "VIP",
    subtitle: "Custom",
    priceSetup: "Custom quote",
    priceMonthly: "Custom retainer",
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
  const { open: openContactModal } = useContactModal();

  const handlePackageClick = (pkg: typeof packages[0]) => {
    const message = `Интересует пакет "${pkg.title}"\nSetup: ${pkg.priceSetup}\nMonthly: ${pkg.priceMonthly}\n\n`;
    openContactModal({
      service: "package",
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-purple-400">
            Выберите подходящий пакет
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Прозрачное ценообразование. Без скрытых платежей.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative h-full ${pkg.highlight ? 'lg:-mt-6 lg:mb-6 z-10' : ''}`}
            >
              <Card
                className={`relative flex flex-col h-full transition-all duration-300 ${pkg.highlight
                  ? 'bg-gradient-to-b from-[#1a2c4e] to-[#0A1628] border-2 border-blue-500 shadow-2xl shadow-blue-500/20'
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
                      <span className="text-sm text-gray-400">Setup:</span>
                      <span className="text-lg font-bold text-white">{pkg.priceSetup}</span>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm text-gray-400">Monthly:</span>
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

        {/* Bottom Discount Banner */}
        <div className="mt-12 mx-auto max-w-3xl">
          <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 flex items-center justify-center text-center">
            <p className="text-lg md:text-xl text-blue-200 font-medium flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              Первым 5 клиентам — скидка <span className="text-white font-bold">20%</span> на setup!
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link href="/contact" className="text-sm text-gray-500 hover:text-gray-300 underline underline-offset-4">
            Нужна помощь в выборе?
          </Link>
        </div>

      </div>
    </section>
  );
}
