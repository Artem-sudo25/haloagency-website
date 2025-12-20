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
    <section className="py-24 bg-ha-bg relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[400px] bg-gradient-to-r from-blue-500/5 to-transparent rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[300px] bg-gradient-to-l from-blue-500/5 to-transparent rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-3xl px-4 relative z-10">
        {/* Header */}
        <CSSScrollAnimation className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Terminal className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">Процесс</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Процесс разработки
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto">
            От идеи до запуска — прозрачный процесс с понятными этапами
          </p>
        </CSSScrollAnimation>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-blue-500/50 via-blue-500/20 to-transparent hidden md:block" />
          
          <CSSStagger className="space-y-4">
            {processSteps.map((step, index) => (
              <CSSStaggerItem key={step.id} index={index} className="group relative">
                <div className="relative flex gap-5 p-5 md:p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-blue-500/30 transition-all duration-300">
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  {/* Status Badge */}
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30 flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                      <Check className="w-5 h-5 text-emerald-400" />
                    </div>
                    {/* Dot on the line */}
                    {index < processSteps.length - 1 && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-2 h-2 rounded-full bg-blue-500/50 hidden md:block" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">
                        {step.stage}
                      </span>
                      <span className="text-xs text-slate-500">•</span>
                      <span className="text-xs text-slate-500">{step.duration}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-2 group-hover:text-blue-200 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-2">
                      {step.description}
                    </p>
                    <p className="text-blue-400 text-sm font-medium">
                      → {step.result}
                    </p>
                  </div>
                </div>
              </CSSStaggerItem>
            ))}
          </CSSStagger>
        </div>

        {/* Trust Line */}
        <CSSScrollAnimation delay={0.3} className="text-center text-slate-500 text-sm mt-12">
          Вы всегда понимаете, на каком этапе находится проект и что будет дальше.
        </CSSScrollAnimation>
      </div>
    </section>
  );
}
