"use client";

import { Zap } from "lucide-react";
import { CSSScrollAnimation, CSSStagger, CSSStaggerItem } from "@/components/ui/css-scroll-animation";

const processSteps = [
  {
    id: 1,
    title: "Диагностика и цели",
    description: "Разбираемся в вашем бизнесе: что продаёте, кому, и что считается хорошим результатом. Договариваемся о KPI.",
  },
  {
    id: 2,
    title: "Подготовка и стратегия",
    description: "Выбираем рекламные каналы и формат под задачу. Проверяем готовность сайта к рекламе.",
  },
  {
    id: 3,
    title: "Запуск рекламы",
    description: "Настраиваем кампании, проверяем ссылки и трекинг. Запускаем и контролируем первые показы.",
  },
  {
    id: 4,
    title: "Оптимизация по данным",
    description: "Анализируем, что работает. Убираем неэффективное, усиливаем то, что приносит заявки.",
  },
  {
    id: 5,
    title: "Масштабирование",
    description: "Когда реклама стабильно работает — аккуратно увеличиваем бюджеты и расширяем охват.",
  },
];

export default function AdsProcess() {
  return (
    <section className="py-16 md:py-24 bg-white border-y-2 border-[#1A1A1A] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[400px] bg-[#FFD166]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[300px] bg-[#FF3366]/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-3xl px-4 relative z-10">
        {/* Header */}
        <CSSScrollAnimation className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FFD166] border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] mb-6">
            <Zap className="w-5 h-5 text-[#1A1A1A]" />
            <span className="text-sm font-bold text-[#1A1A1A] uppercase tracking-wider">Процесс</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Процесс работы
          </h2>
          <p className="text-[#1A1A1A]/80 font-medium text-lg md:text-xl max-w-xl mx-auto">
            От первого разговора до результата — понятные этапы
          </p>
        </CSSScrollAnimation>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-6 top-8 bottom-8 w-1 bg-[#1A1A1A] hidden md:block" />

          <CSSStagger className="space-y-4">
            {processSteps.map((step, index) => (
              <CSSStaggerItem key={step.id} index={index} className="group relative">
                <div className="relative flex gap-5 p-5 md:p-6 rounded-3xl bg-white border-2 border-[#1A1A1A] shadow-[6px_6px_0px_0px_#1A1A1A] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_#1A1A1A] transition-all duration-300">
                  {/* Number Badge */}
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-[#06D6A0] border-2 border-[#1A1A1A] flex items-center justify-center text-[#1A1A1A] font-extrabold text-xl shadow-[4px_4px_0px_0px_#1A1A1A] group-hover:scale-110 transition-transform duration-300 z-10 relative" style={{ fontFamily: 'var(--font-display)' }}>
                      {step.id}
                    </div>
                    {/* Dot on the line */}
                    {index < processSteps.length - 1 && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-4 h-4 rounded-full bg-white border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] hidden md:block z-20" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 relative z-10">
                    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                      {step.title}
                    </h3>
                    <p className="text-[#1A1A1A]/80 font-medium text-base md:text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </CSSStaggerItem>
            ))}
          </CSSStagger>
        </div>

        {/* Trust Line */}
        <CSSScrollAnimation delay={0.3} className="text-center font-bold text-lg text-[#1A1A1A]/80 mt-12 bg-white border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] p-4 rounded-2xl mx-auto max-w-2xl">
          Мы объясняем, что происходит с рекламой, простым языком — без лишних терминов.
        </CSSScrollAnimation>
      </div>
    </section>
  );
}
