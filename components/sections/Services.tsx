"use client";

import { ArrowRight, Code2, Megaphone, BarChart3, Cog } from "lucide-react";
import Link from "next/link";

const services = [
    {
        icon: Code2,
        cardBg: "bg-[#FFD166]",
        title: "Разработка сайтов",
        description: "Современные сайты за 3-7 дней. От лендинга до интернет-магазина — адаптированы для мобильных устройств и поисковых систем.",
        href: "/web",
        offset: false,
    },
    {
        icon: Megaphone,
        cardBg: "bg-[#06D6A0]",
        title: "Онлайн Реклама",
        description: "Google и Meta Ads для стабильного потока заявок и продаж. Запуск, ведение и оптимизация с фокусом на рост бизнеса.",
        href: "/ads",
        offset: true,
    },
    {
        icon: BarChart3,
        cardBg: "bg-[#B19CD9]",
        title: "Аналитика и трекинг",
        description: "Точный учёт заявок и продаж даже при блокировке cookie. Вы видите на 30-40% больше реальных данных.",
        href: "/tracking",
        offset: false,
    },
    {
        icon: Cog,
        cardBg: "bg-[#FFD166]",
        title: "Автоматизация процессов",
        description: "Автоматизация вместо часов нудных ручных процессов, меньше ошибок, ниже операционные затраты.",
        href: "/automation",
        offset: true,
    },
];

export default function Services() {
    return (
        <section id="services" className="py-16 md:py-24 px-6 bg-white">
            <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
                {/* Section Header */}
                <div className="text-center flex flex-col items-center gap-4">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                        Что мы делаем
                    </h2>
                    <p className="text-lg text-[#1A1A1A]/70 max-w-xl mt-4">
                        Полный цикл digital-маркетинга: от разработки до автоматизации
                    </p>
                </div>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={index}
                                className={`p-8 rounded-xl border-2 border-[#1A1A1A] shadow-[6px_6px_0px_0px_#1A1A1A] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_#1A1A1A] flex flex-col gap-6 relative overflow-hidden group transition-all ${service.cardBg} ${service.offset ? 'mt-0 lg:mt-8' : ''}`}
                            >
                                <div className={`w-14 h-14 rounded-full border-2 border-[#1A1A1A] bg-white flex items-center justify-center text-[#1A1A1A]`}>
                                    <Icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#1A1A1A]" style={{ fontFamily: 'var(--font-display)' }}>{service.title}</h3>
                                <p className="text-[#1A1A1A] font-medium text-sm leading-relaxed flex-grow">{service.description}</p>
                                <div className="mt-4 pt-4 border-t-2 border-[#1A1A1A]/20 flex justify-between items-center text-sm font-bold text-[#1A1A1A]">
                                    <Link href={service.href} className="hover:underline">Подробнее</Link>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
