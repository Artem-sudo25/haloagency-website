"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Sparkles, Gift } from "lucide-react";
import Link from "next/link";

const packages = [
  {
    title: "Start",
    price: "от 15,000 Kč",
    description: "Идеально для малого бизнеса",
    features: [
      "Landing (до 5 блоков)",
      "Адаптивный дизайн",
      "Базовая SEO",
      "Форма заявки",
      "1 месяц поддержки"
    ],
    timeline: "Срок: 3-5 дней",
    highlight: false,
  },
  {
    title: "Business",
    price: "от 35,000 Kč",
    priceMonthly: "+ 8,000 Kč/мес",
    description: "Комплексное решение для роста",
    setupFeatures: [
      "Многостраничный сайт",
      "CMS для управления",
      "Расширенная аналитика (GA4 + GTM)",
      "Интеграция с CRM",
      "3 месяца поддержки"
    ],
    monthlyFeatures: [
      "Настройка рекламы (Google + Meta)",
      "Server-side tracking (Stape.io)",
      "Ежемесячная оптимизация",
      "Детальные отчёты"
    ],
    timeline: "Срок setup: 7-10 дней",
    socialProof: "80% наших клиентов выбирают это",
    promo: "🎄 Новогоднее предложение: 25,000 CZK",
    highlight: true,
  },
  {
    title: "Enterprise",
    price: "Индивидуально",
    pricingNote: "От 50,000 CZK + 12,000/мес",
    description: "Сложные веб-сервисы",
    features: [
      "Уникальный дизайн",
      "Сложная архитектура",
      "Личные кабинеты",
      "API интеграции",
      "Приоритетная поддержка",
      "SLA"
    ],
    highlight: false,
  },
];

export default function Packages() {
  return (
    <section id="pricing" className="py-12 md:py-16 lg:py-20 bg-[#0A1628] overflow-hidden" aria-labelledby="pricing-heading">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-28">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4 md:mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-gray-300">💎 Тарифы</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 px-4 text-white">
            Пакеты услуг
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Выберите подходящий тариф
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative ${pkg.highlight ? 'md:scale-110 md:-translate-y-8 z-10' : ''}`}
            >
              {/* Glow effect for Tier 2 */}
              {pkg.highlight && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl -z-10" />
              )}

              <Card
                className={`relative flex flex-col h-full transition-all duration-300 ${
                  pkg.highlight
                    ? 'bg-white/5 border-2 border-blue-500 shadow-2xl shadow-blue-500/20'
                    : 'bg-white/5 border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Popular badge for Tier 2 */}
                {pkg.highlight && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 z-20">
                    <Sparkles className="w-3 h-3" /> Популярный
                  </div>
                )}

                <CardHeader className="p-6 md:p-8 pb-4">
                  <CardTitle className={`font-bold text-white mb-2 ${pkg.highlight ? 'text-3xl' : 'text-2xl'}`}>
                    {pkg.title}
                  </CardTitle>
                  <div className="mb-4">
                    <div className={`font-bold text-white ${pkg.highlight ? 'text-4xl' : 'text-3xl'}`}>
                      {pkg.price}
                    </div>
                    {pkg.priceMonthly && (
                      <div className="text-xl font-medium text-blue-400 mt-1">
                        {pkg.priceMonthly}
                      </div>
                    )}
                    {pkg.pricingNote && (
                      <div className="text-sm text-gray-400 mt-2">
                        {pkg.pricingNote}
                      </div>
                    )}
                  </div>
                  <p className="text-base text-gray-400 leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Social proof for Tier 2 */}
                  {pkg.socialProof && (
                    <div className="mt-4 p-3 rounded-lg bg-green-500/20 border border-green-500/30">
                      <p className="text-sm text-green-400 font-medium">{pkg.socialProof}</p>
                    </div>
                  )}
                </CardHeader>

                <CardContent className="p-6 md:p-8 pt-4 flex-grow">
                  <div className="w-full h-px bg-gray-700 mb-6" />

                  {/* Tier 2 has two feature sections */}
                  {pkg.setupFeatures ? (
                    <div className="space-y-6">
                      <div>
                        <p className="text-sm font-semibold text-gray-300 mb-3">
                          Setup (35,000 Kč):
                        </p>
                        <ul className="space-y-3">
                          {pkg.setupFeatures.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                              <Check className="w-4 h-4 mt-0.5 text-green-500 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-300 mb-3">
                          Ежемесячно (8,000 Kč):
                        </p>
                        <ul className="space-y-3">
                          {pkg.monthlyFeatures?.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                              <Check className="w-4 h-4 mt-0.5 text-blue-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <ul className="space-y-3">
                      {pkg.features?.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                          <Check className="w-4 h-4 mt-0.5 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Timeline */}
                  {pkg.timeline && (
                    <p className="text-sm text-gray-500 mt-6">{pkg.timeline}</p>
                  )}

                  {/* Promo box for Tier 2 */}
                  {pkg.promo && (
                    <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30">
                      <p className="text-sm text-orange-300 font-medium">{pkg.promo}</p>
                    </div>
                  )}
                </CardContent>

                <CardFooter className="p-6 md:p-8 pt-0">
                  <Button
                    size="lg"
                    className={`w-full text-base font-medium transition-all duration-300 ${
                      pkg.highlight
                        ? 'h-14 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105'
                        : 'h-12 bg-white/5 border border-white/10 hover:bg-white/10 text-white'
                    }`}
                    asChild
                  >
                    <Link href="/packages">
                      {pkg.highlight ? 'Запустить за 7 дней →' : 'Подробнее →'}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-gray-400">
            Не уверены какой пакет?{' '}
            <Link href="/packages" className="text-blue-400 hover:text-blue-300 underline">
              Бесплатная консультация - 30 минут
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
