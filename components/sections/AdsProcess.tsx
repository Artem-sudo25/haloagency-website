"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

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
    <section className="py-24 bg-ha-bg relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[400px] bg-gradient-to-r from-orange-500/5 to-transparent rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[300px] bg-gradient-to-l from-orange-500/5 to-transparent rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-3xl px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
            <Zap className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-medium text-orange-400">Процесс</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Процесс работы
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto">
            От первого разговора до результата — понятные этапы
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-orange-500/50 via-orange-500/20 to-transparent hidden md:block" />
          
          <div className="space-y-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="group relative"
              >
                <div className="relative flex gap-5 p-5 md:p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-300">
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  {/* Number Badge */}
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-orange-500/30 group-hover:shadow-orange-500/50 group-hover:scale-105 transition-all duration-300">
                      {step.id}
                    </div>
                    {/* Dot on the line */}
                    {index < processSteps.length - 1 && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-2 h-2 rounded-full bg-orange-500/50 hidden md:block" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 relative z-10">
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-2 group-hover:text-orange-200 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust Line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-slate-500 text-sm mt-12"
        >
          Мы объясняем, что происходит с рекламой, простым языком — без лишних терминов.
        </motion.p>
      </div>
    </section>
  );
}
