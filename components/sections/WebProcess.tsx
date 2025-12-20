"use client";

import { motion, useInView } from "framer-motion";
import { Check, ChevronRight, Circle, Terminal } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const pipelineSteps = [
  {
    id: "discovery",
    command: "halo init --project",
    status: "complete",
    label: "Discovery",
    duration: "2 дня",
    output: [
      "Анализ бизнес-целей...",
      "Исследование конкурентов...",
      "Определение структуры сайта...",
    ],
    result: "✓ Бриф и roadmap готовы",
  },
  {
    id: "design",
    command: "halo design --ui --ux",
    status: "complete",
    label: "Design",
    duration: "3-5 дней",
    output: [
      "Создание wireframes...",
      "UI Kit и компоненты...",
      "Прототип в Figma...",
    ],
    result: "✓ Дизайн согласован",
  },
  {
    id: "develop",
    command: "halo build --next --typescript",
    status: "complete",
    label: "Development",
    duration: "5-10 дней",
    output: [
      "Компоненты React...",
      "API интеграции...",
      "SEO оптимизация...",
    ],
    result: "✓ Код готов к деплою",
  },
  {
    id: "test",
    command: "halo test --e2e --performance",
    status: "complete",
    label: "Testing",
    duration: "1-2 дня",
    output: [
      "Core Web Vitals check...",
      "Кроссбраузерное тестирование...",
      "Mobile responsive audit...",
    ],
    result: "✓ Все тесты пройдены",
  },
  {
    id: "deploy",
    command: "halo deploy --production",
    status: "running",
    label: "Launch",
    duration: "1 день",
    output: [
      "Настройка домена...",
      "SSL сертификат...",
      "Analytics подключена...",
    ],
    result: "→ Сайт в продакшене",
  },
];

function TerminalLine({ 
  children, 
  delay = 0, 
  isCommand = false,
  isResult = false,
}: { 
  children: React.ReactNode; 
  delay?: number;
  isCommand?: boolean;
  isResult?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.3 }}
      className={`font-mono text-sm ${
        isCommand 
          ? "text-emerald-400" 
          : isResult 
            ? "text-blue-400 font-medium"
            : "text-slate-500"
      }`}
    >
      {children}
    </motion.div>
  );
}

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
        relative flex items-center gap-4 p-4 rounded-xl w-full text-left
        transition-all duration-300 group
        ${isActive 
          ? "bg-slate-800/80 border border-blue-500/50 shadow-lg shadow-blue-500/10" 
          : "bg-slate-900/40 border border-white/5 hover:border-white/20 hover:bg-slate-800/40"
        }
      `}
    >
      {/* Status Indicator */}
      <div className={`
        relative w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0
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
            className="absolute inset-0 rounded-lg bg-blue-500/30"
          />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className={`
            text-xs font-mono uppercase tracking-wider
            ${isComplete ? "text-emerald-400" : isRunning ? "text-blue-400" : "text-slate-500"}
          `}>
            {step.label}
          </span>
          <span className="text-xs text-slate-600">•</span>
          <span className="text-xs text-slate-500">{step.duration}</span>
        </div>
        <code className={`
          text-sm font-mono truncate block
          ${isActive ? "text-white" : "text-slate-400 group-hover:text-slate-300"}
        `}>
          $ {step.command}
        </code>
      </div>

      {/* Arrow */}
      <ChevronRight className={`
        w-5 h-5 flex-shrink-0 transition-all duration-300
        ${isActive ? "text-blue-400 translate-x-1" : "text-slate-600 group-hover:text-slate-400"}
      `} />

      {/* Connection Line */}
      {index < pipelineSteps.length - 1 && (
        <div className="absolute left-[2.25rem] top-full w-px h-2 bg-gradient-to-b from-white/10 to-transparent" />
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
    }, 4000);
    
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
        <div className="absolute top-1/4 left-0 w-[600px] h-[400px] bg-gradient-to-r from-emerald-500/5 via-blue-500/5 to-transparent rounded-full blur-[120px]" />
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-mono text-emerald-400">build.pipeline</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Процесс разработки
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            От идеи до запуска — прозрачный процесс с понятными этапами
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Pipeline Steps */}
          <div className="space-y-2">
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

          {/* Terminal Output */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="sticky top-24"
          >
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="text-xs text-slate-500 font-mono ml-2">
                  halo-cli — {currentStep.label.toLowerCase()}
                </span>
              </div>

              {/* Terminal Body */}
              <div className="bg-[#0a0f1a] p-6 min-h-[280px]">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3"
                >
                  {/* Command */}
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-mono text-sm">❯</span>
                    <TerminalLine isCommand delay={0}>
                      {currentStep.command}
                    </TerminalLine>
                  </div>

                  {/* Progress indicator */}
                  <div className="flex items-center gap-3 py-2">
                    <motion.div 
                      className="h-1 bg-slate-800 rounded-full flex-1 overflow-hidden"
                    >
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 3.5, ease: "easeInOut" }}
                        className="h-full bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"
                      />
                    </motion.div>
                    <span className="text-xs text-slate-600 font-mono">
                      {currentStep.duration}
                    </span>
                  </div>

                  {/* Output Lines */}
                  <div className="space-y-1.5 pl-4 border-l border-slate-800">
                    {currentStep.output.map((line, i) => (
                      <TerminalLine key={i} delay={0.5 + i * 0.3}>
                        {line}
                      </TerminalLine>
                    ))}
                  </div>

                  {/* Result */}
                  <div className="pt-3 mt-3 border-t border-slate-800/50">
                    <TerminalLine isResult delay={1.4}>
                      {currentStep.result}
                    </TerminalLine>
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
                    {currentStep.status === "running" ? "in progress" : "completed"}
                  </span>
                </div>
                <span className="text-xs text-slate-600 font-mono">
                  step {activeStep + 1}/{pipelineSteps.length}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

