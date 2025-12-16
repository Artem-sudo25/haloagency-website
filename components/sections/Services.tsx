"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Code2, Cog, Megaphone } from "lucide-react";
import Link from "next/link";

export default function Services() {
    const services = [
        {
            icon: Code2,
            title: "Разработка сайтов",
            description:
                "Современные сайты на Next.js за 3-7 дней. От landing page до полноценного e-commerce. Быстро, SEO-ready, mobile-first.",
            price: "От 8,000 CZK",
            link: "/web",
            gradient: "from-blue-500 via-blue-600 to-purple-600",
            iconColor: "text-blue-400",
        },
        {
            icon: Megaphone,
            title: "Реклама (Ads)",
            description:
                "Google Ads + Meta с правильным server-side tracking. Настройка за 2 дня, ведение от 8k/мес. Оптимизация на данных, не на догадках.",
            price: "От 10,000 CZK/мес",
            link: "/ads",
            gradient: "from-orange-500 via-red-500 to-pink-600",
            iconColor: "text-orange-400",
        },
        {
            icon: BarChart3,
            title: "Аналитика и трекинг",
            description:
                "Server-side GTM + Meta CAPI через Stape.io. Восстанавливаем 20-40% потерянных данных. Точность 70-85% против 50-60% стандартного setup.",
            price: "От 8,000 CZK setup",
            link: "/tracking",
            gradient: "from-green-500 via-emerald-500 to-teal-600",
            iconColor: "text-green-400",
        },
        {
            icon: Cog,
            title: "Автоматизация процессов",
            description:
                "Автоматизируем рутинные задачи с помощью n8n, Make и AI. Интеграции CRM, email-маркетинга, отчетности и коммуникаций. Экономим ваше время и снижаем ошибки.",
            price: "По запросу",
            link: "/automation",
            gradient: "from-violet-500 via-purple-500 to-fuchsia-600",
            iconColor: "text-violet-400",
        },
    ];
    return (
        <section
            id="services"
            className="py-16 md:py-24 px-4 bg-[#0A1628] relative overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ y: 10, opacity: 0.9 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="text-center mb-12 md:mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4 md:mb-6 backdrop-blur-sm">
                        <span className="text-sm font-medium text-gray-300">
                            🔧 Наши услуги
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-3 md:mb-4 px-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-purple-400">
                            Что мы делаем
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
                        Полный цикл digital-маркетинга: от разработки до аналитики
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <Link key={service.link} href={service.link}>
                            <motion.div
                                initial={{ y: 12, opacity: 0.9 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: index * 0.1, duration: 0.3, ease: "easeOut" }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer h-full"
                            >
                                {/* Gradient background on hover */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                                />

                                {/* Gradient border glow */}
                                <div
                                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500`}
                                />

                                <div className="relative z-10 h-full flex flex-col">
                                    {/* Icon with gradient background */}
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-[2px] mb-6`}
                                    >
                                        <div className="w-full h-full rounded-2xl bg-[#0A1628] flex items-center justify-center">
                                            <service.icon
                                                className={`w-8 h-8 ${service.iconColor}`}
                                            />
                                        </div>
                                    </motion.div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-400 mb-4 leading-relaxed flex-grow">
                                        {service.description}
                                    </p>

                                    <div className="mt-auto">
                                        <div className="space-y-3 mb-6">
                                            <div
                                                className={`inline-flex px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${service.gradient} bg-opacity-10`}
                                            >
                                                {service.price}
                                            </div>
                                        </div>

                                        {/* Call to action link */}
                                        <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                                            <span className={service.iconColor}>Подробнее</span>
                                            <svg
                                                className={`w-4 h-4 ${service.iconColor} group-hover:translate-x-1 transition-transform`}
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                aria-label="Arrow right"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                {/* Bottom CTA Link */}
                <div className="mt-12 text-center">
                    <Link
                        href="/#pricing"
                        className="inline-flex items-center gap-2 text-lg text-gray-300 hover:text-white transition-colors group"
                    >
                        Нужно комплексное решение? → Готовые пакеты
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
