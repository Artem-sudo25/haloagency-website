"use client";

import { Search, Settings, BarChart3, Rocket, LineChart } from "lucide-react";
import { useContactModalActions } from "@/context/contact-modal-context";

const steps = [
    {
        number: "1",
        title: "Диагностика и аудит",
        timeline: "Неделя 1",
        icon: Search,
        description: "Короткая консультация, аудит сайта и рекламы, анализ конкурентов. Фиксируем цели и ключевые показатели.",
    },
    {
        number: "2",
        title: "Настройка и запуск",
        timeline: "Недели 2-3",
        icon: Settings,
        description: "Подготовка сайта к продажам, настройка аналитики и запуск рекламных кампаний с первыми креативами.",
    },
    {
        number: "3",
        title: "Тестирование и оптимизация",
        timeline: "Недели 4-6",
        icon: BarChart3,
        description: "Тестируем гипотезы, анализируем первые результаты и корректируем стратегию на основе данных (включая AI-инструменты).",
    },
    {
        number: "4",
        title: "Масштабирование",
        timeline: "Месяц 2-3",
        icon: Rocket,
        description: "Увеличиваем бюджеты на эффективные каналы, расширяем аудитории и добавляем новые креативы.",
    },
    {
        number: "5",
        title: "Постоянная поддержка",
        timeline: "Постоянно",
        icon: LineChart,
        description: "Регулярные отчёты, мониторинг метрик и быстрые корректировки на основе данных и AI.",
        isFinal: true,
    },
];

export default function Process() {
    const { open: openContactModal } = useContactModalActions();
    return (
        <section id="process" className="py-16 md:py-24 px-6 bg-white">
            <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
                {/* Section Header */}
                <div className="text-center flex flex-col items-center gap-4 mb-8">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                        Как мы работаем
                    </h2>
                    <p className="text-lg text-[#1A1A1A]/70 max-w-xl mt-4">Простой, прозрачный процесс от старта до роста</p>
                </div>

                {/* Steps 1–4: 2×2 grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {steps.slice(0, 4).map((step, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden p-6 rounded-xl border-2 border-[#1A1A1A] bg-white shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_#1A1A1A] transition-all"
                        >
                            {/* Watermark Number */}
                            <div className="absolute -right-4 -top-8 text-8xl font-extrabold z-0 pointer-events-none text-[#1A1A1A]/5" style={{ fontFamily: 'var(--font-display)' }}>
                                {step.number}
                            </div>
                            <div className="relative z-10">
                                <div className="w-10 h-10 rounded-xl border-2 border-[#1A1A1A] flex items-center justify-center mb-4 bg-white text-[#FF3366]">
                                    <step.icon className="w-5 h-5" />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-wider text-[#FF3366]">
                                    {step.timeline}
                                </span>
                                <h3 className="text-xl font-bold mt-2 mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                                    {step.title}
                                </h3>
                                <p className="text-sm text-[#1A1A1A]/70">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Step 5: Full-width horizontal band */}
                {steps[4] && (
                    <div className="relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8 p-8 md:p-10 rounded-xl border-2 border-[#1A1A1A] bg-[#FF3366] text-white shadow-[6px_6px_0px_0px_#1A1A1A]">
                        <div className="absolute -right-6 -top-10 text-[10rem] font-extrabold z-0 pointer-events-none text-[#1A1A1A]/20 leading-none" style={{ fontFamily: 'var(--font-display)' }}>
                            {steps[4].number}
                        </div>
                        <div className="relative z-10 flex flex-col gap-3 max-w-2xl">
                            <span className="text-xs font-bold uppercase tracking-wider text-white/70">
                                {steps[4].timeline}
                            </span>
                            <h3 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                                {steps[4].title}
                            </h3>
                            <p className="text-white/80 text-sm md:text-base leading-relaxed">
                                {steps[4].description}
                            </p>
                        </div>
                        <button
                            onClick={() => openContactModal({ service: "process", message: "Хочу начать проект (из раздела Процесс)" })}
                            className="relative z-10 flex-shrink-0 px-8 py-3 bg-white text-[#1A1A1A] rounded-xl border-2 border-[#1A1A1A] font-bold shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-y-1 active:translate-x-1 active:shadow-none transition-all whitespace-nowrap"
                        >
                            Начать проект
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
