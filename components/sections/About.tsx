"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-16 md:py-24 bg-[#0B1A30] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/5] max-w-md mx-auto md:max-w-none">
                            <Image
                                src="/ceo_professional_portrait.webp"
                                alt="Artem - Founder HaloAgency"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />

                            {/* Logo Overlay */}
                            <div className="absolute top-6 right-6 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                                <span className="text-white font-bold tracking-tight shadow-sm">
                                    haloagency<span className="text-blue-400">.cz</span>
                                </span>
                            </div>
                        </div>

                        {/* Decorative element behind */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-[2.5rem] -z-10 blur-sm hidden md:block" />
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                            <span className="text-blue-400 text-sm font-medium">
                                Практический опыт. Современный подход.
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight text-white">
                            Маркетинг как система, а не набор услуг
                        </h2>

                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                            <p>
                                В основе HaloAgency.cz — практический опыт работы с реальным бизнесом. Мы выстраиваем единую систему, где сайт, реклама и внутренние процессы связаны между собой и не требуют постоянного ручного управления.
                            </p>
                            <p>
                                Этот подход появился не из теории. Я прошёл весь путь онлайн-маркетинга на практике — от создания сайтов и запуска рекламы до аналитики и автоматизации. Работая с сервисными бизнесами и e-commerce, я хорошо понимаю реальные задачи и ограничения малого и среднего бизнеса.
                            </p>
                            <p>
                                Сегодня маркетинг невозможно эффективно развивать без автоматизации и AI. В 2026 году работать «по-старому» — значит терять время, данные и конкурентное преимущество. Поэтому в HaloAgency.cz мы используем AI не как модный инструмент, а как рабочую основу: для аналитики, оптимизации рекламы, автоматизации процессов и принятия решений.
                            </p>
                            <p>Наша задача — чтобы бизнес рос быстрее, тратил меньше ресурсов на рутину и мог масштабироваться без увеличения хаоса и команды.
                            </p>
                        </div>


                    </motion.div>
                </div>
            </div>
        </section>
    );
}
