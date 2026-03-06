"use client";

import { Terminal, Check } from "lucide-react";
import { CSSScrollAnimation, CSSStagger, CSSStaggerItem } from "@/components/ui/css-scroll-animation";

const processSteps = [
  {
    id: 1,
    stage: "DISCOVERY",
    title: "Понимание задачи",
    duration: "1–2 дня",
    description: "Обсуждаем ваш бизнес и цель сайта. Определяем, для кого сайт и что он должен делать. Согласовываем формат и структуру.",
    result: "Чёткое понимание, какой сайт нужен и зачем",
  },
  {
    id: 2,
    stage: "DESIGN",
    title: "Структура и внешний вид",
    duration: "3–5 дней",
    description: "Продумываем логику страниц и пользовательский путь. Согласовываем стиль и подачу.",
    result: "Понятный макет и структура будущего сайта",
  },
  {
    id: 3,
    stage: "DEVELOPMENT",
    title: "Разработка сайта",
    duration: "5–10 дней",
    description: "Реализуем сайт на современной технологии. Адаптируем под мобильные устройства. Оптимизируем скорость.",
    result: "Готовый, быстрый сайт, который корректно работает",
  },
  {
    id: 4,
    stage: "TESTING",
    title: "Проверка и финальные правки",
    duration: "1–2 дня",
    description: "Проверяем сайт на разных устройствах. Тестируем скорость и удобство. Вносим финальные правки.",
    result: "Сайт готов к запуску без неприятных сюрпризов",
  },
  {
    id: 5,
    stage: "LAUNCH",
    title: "Запуск сайта",
    duration: "1 день",
    description: "Публикуем сайт. Проверяем корректную работу. Передаём доступы и инструкции.",
    result: "Сайт запущен и готов принимать клиентов",
  },
];

export default function WebProcess() {
  return (
    <section className="py-16 md:py-24 bg-white border-y-2 border-[#1A1A1A] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[400px] bg-[#06D6A0]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[300px] bg-[#118AB2]/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-3xl px-4 relative z-10">
        {/* Header */}
        <CSSScrollAnimation className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#118AB2] border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] mb-6">
            <Terminal className="w-5 h-5 text-white" />
            <span className="text-sm font-bold text-white uppercase tracking-wider">Процесс</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Процесс разработки
          </h2>
          <p className="text-[#1A1A1A]/80 font-medium text-lg md:text-xl max-w-xl mx-auto">
            От идеи до запуска — прозрачный процесс с понятными этапами
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
                  {/* Status Badge */}
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-[#06D6A0] border-2 border-[#1A1A1A] flex items-center justify-center shadow-[4px_4px_0px_0px_#1A1A1A] group-hover:scale-110 transition-transform duration-300 z-10 relative">
                      <Check className="w-6 h-6 text-[#1A1A1A] font-bold" />
                    </div>
                    {/* Dot on the line */}
                    {index < processSteps.length - 1 && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-4 h-4 rounded-full bg-white border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] hidden md:block z-20" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 relative z-10">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-[#FFD166] text-[#1A1A1A] border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A]">
                        {step.stage}
                      </span>
                      <span className="text-sm font-bold text-[#1A1A1A] bg-white border-2 border-[#1A1A1A] px-2 py-0.5 rounded-md shadow-[2px_2px_0px_0px_#1A1A1A]">{step.duration}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                      {step.title}
                    </h3>
                    <p className="text-[#1A1A1A]/80 font-medium text-base md:text-lg leading-relaxed mb-3">
                      {step.description}
                    </p>
                    <p className="text-[#FF3366] text-base font-bold bg-[#FF3366]/10 inline-block px-3 py-1 rounded-lg border-2 border-[#FF3366]/20">
                      → {step.result}
                    </p>
                  </div>
                </div>
              </CSSStaggerItem>
            ))}
          </CSSStagger>
        </div>

        {/* Trust Line */}
        <CSSScrollAnimation delay={0.3} className="text-center font-bold text-lg text-[#1A1A1A]/80 mt-12 bg-white border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] p-4 rounded-2xl mx-auto max-w-2xl">
          Вы всегда понимаете, на каком этапе находится проект и что будет дальше.
        </CSSScrollAnimation>
      </div>
    </section>
  );
}
