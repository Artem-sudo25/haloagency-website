"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, LineChart, Rocket, Settings, Search } from "lucide-react";
import { useContactModalActions } from "@/context/contact-modal-context";
import { Button } from "@/components/ui/button";

const steps = [
    {
        number: "01",
        title: "Диагностика и аудит",
        timeline: "Неделя 1",
        icon: Search,
        description: "Короткая консультация, аудит сайта и рекламы, анализ конкурентов. Фиксируем цели и ключевые показатели.",
        result: "Предложение с планом работ и прогнозом",
    },
    {
        number: "02",
        title: "Настройка и запуск",
        timeline: "Недели 2-3",
        icon: Settings,
        description: "Подготовка сайта к продажам, настройка аналитики и запуск рекламных кампаний с первыми креативами.",
        result: "Готовые системы к запуску",
    },
    {
        number: "03",
        title: "Тестирование и оптимизация",
        timeline: "Недели 4-6",
        icon: BarChart3,
        description: "Тестируем гипотезы, анализируем первые результаты и корректируем стратегию на основе данных (включая AI-инструменты).",
        result: "Стабильный поток лидов",
    },
    {
        number: "04",
        title: "Масштабирование",
        timeline: "Месяц 2-3",
        icon: Rocket,
        description: "Увеличиваем бюджеты на эффективные каналы, расширяем аудитории и добавляем новые креативы.",
        result: "Рост объемов при сохранении ROAS",
    },
    {
        number: "05",
        title: "Постоянная поддержка",
        timeline: "Постоянно",
        icon: LineChart, // or LifeBuoy maybe
        description: "Регулярные отчёты, мониторинг метрик и быстрые корректировки на основе данных и AI.",
        result: "Долгосрочный рост",
    },
];

export default function Process() {
    const { open: openContactModal } = useContactModalActions();
    return (
        <section id="process" className="py-20 md:py-28 bg-[#0B1A30] relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
                <div className="text-center mb-16 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                            <Settings className="w-4 h-4 text-blue-400" />
                            <span className="text-sm font-medium text-blue-400">Процесс</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                            Как мы работаем
                        </h2>
                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                            Простой, прозрачный процесс от старта до роста
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop) - simplified visual line using borders or pseudo elements might be complex, so keeping clean cards with arrows */}

                    {steps.map((step, index) => {
                        const isKeyStep = step.number === "02";
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="relative"
                            >
                                <div
                                    className={`relative h-full p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 hover:bg-white/10 transition-all duration-300 group ${isKeyStep ? "border-blue-500/30 ring-1 ring-blue-500/20" : ""
                                        }`}
                                >
                                    {/* Key Step Badge - positioned at top */}
                                    {isKeyStep && (
                                        <div className="mb-4">
                                            <span className="text-xs font-medium text-blue-300 bg-blue-500/15 border border-blue-500/25 px-2.5 py-1 rounded-full">
                                                Ключевой этап
                                            </span>
                                        </div>
                                    )}
                                    <div className="flex justify-between items-start mb-6">
                                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-white/5 group-hover:border-blue-500/30 transition-colors ${isKeyStep ? "border-blue-500/30" : ""}`}>
                                            <step.icon className="w-6 h-6 text-blue-400" />
                                        </div>
                                        <span className={`text-4xl font-bold transition-colors ${isKeyStep ? "text-blue-500/15 group-hover:text-blue-500/25" : "text-white/5 group-hover:text-white/10"}`}>
                                            {step.number}
                                        </span>
                                    </div>

                                    <div className="mb-2">
                                        <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">
                                            {step.timeline}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-4">
                                        {step.title}
                                    </h3>

                                    <p className="text-gray-400 mb-6 leading-relaxed">
                                        {step.description}
                                    </p>

                                    <div className="pt-4 border-t border-white/5">
                                        <span className="text-sm text-gray-500">Результат:</span>
                                        <p className="text-gray-200 font-medium mt-1">
                                            {step.result}
                                        </p>
                                    </div>
                                </div>

                                {/* Arrow for desktop flow */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-[15%] right-[-24px] z-10">
                                        {/* Logic to hide arrow for last item in row if grid is 3 cols? 
                                    Indexes: 0, 1, 2, 3, 4
                                    Row 1: 0, 1, 2
                                    Row 2: 3, 4
                                    Actually simpler to not have strict absolute arrows if wrapping.
                                    I'll leave visual arrows out or subtle. Let's start with cards. 
                                    The user asked for " -> " visual. I will try to add it for index 0,1 and 3.
                                */}
                                        {(index === 0 || index === 1) && (
                                            <ArrowRight className="w-6 h-6 text-white/20" />
                                        )}
                                        {(index === 3) && (
                                            <ArrowRight className="w-6 h-6 text-white/20" />
                                        )}
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}

                    {/* 6th Card: Call to Action / Result */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="relative hidden md:block"
                    >
                        <div className="h-full p-8 rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 border border-white/20 shadow-2xl shadow-blue-500/20 flex flex-col items-center justify-center text-center group overflow-hidden relative">
                            {/* Background decoration */}
                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl pointer-events-none" />

                            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6 backdrop-blur-sm border border-white/20 relative z-10">
                                <Rocket className="w-8 h-8 text-white" />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
                                Готовы к росту?
                            </h3>

                            <p className="text-blue-100 mb-8 leading-relaxed relative z-10">
                                Запишитесь на бесплатную диагностику — мы посмотрим текущую ситуацию и предложим понятный план роста.
                            </p>

                            <Button
                                size="lg"
                                className="bg-white text-blue-600 hover:bg-blue-50 font-bold w-full rounded-xl shadow-lg relative z-10"
                                onClick={() => openContactModal({ service: "process", message: "Хочу начать проект (из раздела Процесс)" })}
                            >
                                Начать проект <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
