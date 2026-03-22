"use client";

import { Check, Terminal } from "lucide-react";
import { CSSScrollAnimation } from "@/components/ui/css-scroll-animation";

const processSteps = [
  {
    id: 1,
    stage: "DISCOVERY",
    title: "Понимание задачи",
    duration: "1–2 дня",
    description:
      "Обсуждаем ваш бизнес и цель сайта. Определяем, для кого сайт и что он должен делать. Согласовываем формат и структуру.",
    result: "Чёткое понимание, какой сайт нужен и зачем",
  },
  {
    id: 2,
    stage: "DESIGN",
    title: "Структура и внешний вид",
    duration: "3–5 дней",
    description:
      "Продумываем логику страниц и пользовательский путь. Согласовываем стиль и подачу.",
    result: "Понятный макет и структура будущего сайта",
  },
  {
    id: 3,
    stage: "DEVELOPMENT",
    title: "Разработка сайта",
    duration: "5–10 дней",
    description:
      "Реализуем сайт на современной технологии. Адаптируем под мобильные устройства. Оптимизируем скорость.",
    result: "Готовый, быстрый сайт, который корректно работает",
  },
  {
    id: 4,
    stage: "TESTING",
    title: "Проверка и финальные правки",
    duration: "1–2 дня",
    description:
      "Проверяем сайт на разных устройствах. Тестируем скорость и удобство. Вносим финальные правки.",
    result: "Сайт готов к запуску без неприятных сюрпризов",
  },
  {
    id: 5,
    stage: "LAUNCH",
    title: "Запуск сайта",
    duration: "1 день",
    description:
      "Публикуем сайт. Проверяем корректную работу. Передаём доступы и инструкции.",
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
            <span className="text-sm font-bold text-white uppercase tracking-wider">
              Процесс
            </span>
          </div>
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
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

          <div className="space-y-4">
            {processSteps.map((step, index) => (
              <div key={step.id} className="group relative">
                <div className="relative flex gap-5 rounded-3xl border-2 border-[#1A1A1A] bg-white p-5 shadow-[6px_6px_0px_0px_#1A1A1A] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#1A1A1A] md:p-6">
                  <div className="relative flex-shrink-0">
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl border-2 border-[#1A1A1A] bg-[#06D6A0] shadow-[4px_4px_0px_0px_#1A1A1A] transition-transform duration-300 group-hover:scale-110">
                      <Check className="h-6 w-6 font-bold text-[#1A1A1A]" />
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="absolute left-1/2 top-full z-20 mt-4 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-[#1A1A1A] bg-white shadow-[2px_2px_0px_0px_#1A1A1A] md:block" />
                    )}
                  </div>

                  <div className="relative z-10 min-w-0 flex-1">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-[#FFD166] text-[#1A1A1A] border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A]">
                        {step.stage}
                      </span>
                      <span className="rounded-md border-2 border-[#1A1A1A] bg-white px-2 py-0.5 text-sm font-bold text-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A]">
                        {step.duration}
                      </span>
                    </div>
                    <h3
                      className="mb-2 text-2xl font-bold text-[#1A1A1A]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {step.title}
                    </h3>
                    <p className="mb-3 text-base font-medium leading-relaxed text-[#1A1A1A]/80 md:text-lg">
                      {step.description}
                    </p>
                    <p className="text-[#FF3366] text-base font-bold bg-[#FF3366]/10 inline-block px-3 py-1 rounded-lg border-2 border-[#FF3366]/20">
                      → {step.result}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Line */}
        <CSSScrollAnimation
          delay={0.3}
          className="text-center font-bold text-lg text-[#1A1A1A]/80 mt-12 bg-white border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] p-4 rounded-2xl mx-auto max-w-2xl"
        >
          Вы всегда понимаете, на каком этапе находится проект и что будет
          дальше.
        </CSSScrollAnimation>
      </div>
    </section>
  );
}
