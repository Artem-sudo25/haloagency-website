"use client";

import { motion, useInView } from "framer-motion";
import { Check, ChevronRight, Circle, Terminal } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const pipelineSteps = [
  {
    id: "discovery",
    stage: "DISCOVERY",
    title: "Понимание задачи",
    duration: "1–2 дня",
    status: "complete",
    tasks: [
      "Обсуждаем ваш бизнес и цель сайта",
      "Определяем, для кого сайт и что он должен делать",
      "Согласовываем формат и структуру",
    ],
    result: "Чёткое понимание, какой сайт нужен и зачем",
    terminalTitle: "Анализ проекта",
    terminalChecks: [
      "Цели и задачи определены",
      "Целевая аудитория понятна",
      "Структура согласована",
      "Формат выбран",
    ],
  },
  {
    id: "design",
    stage: "DESIGN",
    title: "Структура и внешний вид",
    duration: "3–5 дней",
    status: "complete",
    tasks: [
      "Продумываем логику страниц",
      "Делаем понятную структуру и пользовательский путь",
      "Согласовываем стиль и подачу",
    ],
    result: "Понятный макет и структура будущего сайта",
    terminalTitle: "Дизайн-система",
    terminalChecks: [
      "Wireframes готовы",
      "UI-компоненты спроектированы",
      "Мобильная версия продумана",
      "Стиль согласован",
    ],
  },
  {
    id: "develop",
    stage: "DEVELOPMENT",
    title: "Разработка сайта",
    duration: "5–10 дней",
    status: "complete",
    tasks: [
      "Реализуем сайт на современной технологии",
      "Адаптируем под мобильные устройства",
      "Оптимизируем скорость и стабильность",
    ],
    result: "Готовый, быстрый сайт, который корректно работает",
    terminalTitle: "Сборка проекта",
    terminalChecks: [
      "Код написан и проверен",
      "Адаптив под все устройства",
      "Скорость оптимизирована",
      "Формы работают",
    ],
  },
  {
    id: "test",
    stage: "TESTING",
    title: "Проверка и финальные правки",
    duration: "1–2 дня",
    status: "complete",
    tasks: [
      "Проверяем сайт на разных устройствах",
      "Тестируем скорость и удобство",
      "Вносим финальные правки",
    ],
    result: "Сайт готов к запуску без неприятных сюрпризов",
    terminalTitle: "Проверка перед запуском",
    terminalChecks: [
      "Проверка скорости загрузки",
      "Адаптация под мобильные устройства",
      "Проверка форм и заявок",
      "Подготовка к рекламе и аналитике",
    ],
  },
  {
    id: "launch",
    stage: "LAUNCH",
    title: "Запуск сайта",
    duration: "1 день",
    status: "running",
    tasks: [
      "Публикуем сайт",
      "Проверяем корректную работу",
      "Передаём доступы и инструкции",
    ],
    result: "Сайт запущен и готов принимать клиентов",
    terminalTitle: "Публикация",
    terminalChecks: [
      "Домен подключён",
      "SSL-сертификат активен",
      "Аналитика настроена",
      "Сайт доступен",
    ],
  },
];

function PipelineStep({ 
  step, 
  index, 
  isActive,
  onActivate,
}: { 
  step: typeof pipelineSteps[0]; 
  index: number;
  isActive: boolean;
  onActivate: () => void;
}) {
  const isComplete = step.status === "complete";
  const isRunning = step.status === "running";

  return (
    <motion.button
      type="button"
      onClick={onActivate}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`
        relative flex items-start gap-4 p-5 rounded-2xl w-full text-left
        transition-all duration-300 group
        ${isActive 
          ? "bg-slate-800/80 border border-blue-500/50 shadow-lg shadow-blue-500/10" 
          : "bg-slate-900/40 border border-white/5 hover:border-white/20 hover:bg-slate-800/40"
        }
      `}
    >
      {/* Status Indicator */}
      <div className={`
        relative w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5
        ${isComplete 
          ? "bg-emerald-500/20 border border-emerald-500/30" 
          : isRunning 
            ? "bg-blue-500/20 border border-blue-500/30" 
            : "bg-slate-800 border border-white/10"
        }
      `}>
        {isComplete ? (
          <Check className="w-5 h-5 text-emerald-400" />
        ) : isRunning ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full"
          />
        ) : (
          <Circle className="w-5 h-5 text-slate-600" />
        )}
        
        {/* Pulse for running */}
        {isRunning && (
          <motion.div
            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute inset-0 rounded-xl bg-blue-500/30"
          />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {/* Header */}
        <div className="flex items-center gap-2 mb-1.5">
          <span className={`
            text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded
            ${isComplete 
              ? "bg-emerald-500/20 text-emerald-400" 
              : isRunning 
                ? "bg-blue-500/20 text-blue-400" 
                : "bg-slate-800 text-slate-500"
            }
          `}>
            {step.stage}
          </span>
          <span className="text-xs text-slate-600">•</span>
          <span className="text-xs text-slate-500">{step.duration}</span>
        </div>

        {/* Title */}
        <h3 className={`
          text-lg font-semibold mb-2 transition-colors
          ${isActive ? "text-white" : "text-slate-300 group-hover:text-white"}
        `}>
          {step.title}
        </h3>

        {/* Result Preview */}
        <p className="text-sm text-slate-500 line-clamp-1">
          → {step.result}
        </p>
      </div>

      {/* Arrow */}
      <ChevronRight className={`
        w-5 h-5 flex-shrink-0 mt-3 transition-all duration-300
        ${isActive ? "text-blue-400 translate-x-1" : "text-slate-600 group-hover:text-slate-400"}
      `} />

      {/* Connection Line */}
      {index < pipelineSteps.length - 1 && (
        <div className="absolute left-[2.1rem] top-full w-px h-2 bg-gradient-to-b from-white/10 to-transparent" />
      )}
    </motion.button>
  );
}

export default function WebProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  
  // Auto-cycle through steps
  useEffect(() => {
    if (!isInView) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % pipelineSteps.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isInView]);

  const currentStep = pipelineSteps[activeStep];

  return (
    <section 
      ref={containerRef}
      className="py-24 bg-ha-bg relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[600px] h-[400px] bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-transparent rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[300px] bg-gradient-to-l from-blue-500/8 to-transparent rounded-full blur-[100px]" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Terminal className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">Процесс</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Процесс разработки
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            От идеи до запуска — прозрачный процесс с понятными этапами
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Pipeline Steps */}
          <div className="space-y-3 flex flex-col">
            {pipelineSteps.map((step, index) => (
              <PipelineStep
                key={step.id}
                step={step}
                index={index}
                isActive={activeStep === index}
                onActivate={() => setActiveStep(index)}
              />
            ))}
          </div>

          {/* Terminal Output - Human Readable */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col"
          >
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col h-full">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="text-xs text-slate-500 font-mono ml-2">
                  {currentStep.terminalTitle}
                </span>
              </div>

              {/* Terminal Body */}
              <div className="bg-[#0a0f1a] p-6 flex-1 flex flex-col justify-between">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Stage Header */}
                  <div className="pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-emerald-400 font-mono text-sm">❯</span>
                      <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                        {currentStep.stage}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {currentStep.title}
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">
                      Срок: {currentStep.duration}
                    </p>
                  </div>

                  {/* What happens */}
                  <div>
                    <p className="text-xs text-slate-600 uppercase tracking-wider mb-3 font-medium">
                      Что происходит:
                    </p>
                    <ul className="space-y-2">
                      {currentStep.tasks.map((task, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + i * 0.1 }}
                          className="flex items-start gap-2 text-sm text-slate-400"
                        >
                          <span className="text-slate-600 mt-0.5">•</span>
                          {task}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Checklist */}
                  <div className="pt-4 border-t border-slate-800/50">
                    <p className="text-xs text-slate-600 uppercase tracking-wider mb-3 font-medium">
                      Чек-лист:
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {currentStep.terminalChecks.map((check, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className="flex items-center gap-2"
                        >
                          <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                          <span className="text-xs text-slate-400">{check}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Result */}
                  <div className="pt-4 border-t border-slate-800/50">
                    <p className="text-xs text-slate-600 uppercase tracking-wider mb-2 font-medium">
                      Результат:
                    </p>
                    <p className="text-blue-400 text-sm font-medium">
                      → {currentStep.result}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Status Bar */}
              <div className="flex items-center justify-between px-4 py-2 bg-slate-900/80 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    currentStep.status === "running" 
                      ? "bg-blue-400 animate-pulse" 
                      : "bg-emerald-400"
                  }`} />
                  <span className="text-xs text-slate-500 font-mono">
                    {currentStep.status === "running" ? "в процессе" : "готово к запуску"}
                  </span>
                </div>
                <span className="text-xs text-slate-600 font-mono">
                  этап {activeStep + 1}/{pipelineSteps.length}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-slate-500">
            Вы всегда понимаете, на каком этапе находится проект и что будет дальше.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
