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
                                От владельца бизнеса до агентства
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-purple-400">
                            Как это всё началось и куда мы движемся
                        </h2>

                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                            <p>
                                Артем, основатель HaloAgency.cz, ранее владел e-commerce бизнесом в Праге — доставкой воздушных шаров (NejBalonky.cz). Когда мощностей уже не хватало и пришлось нанимать людей, стало ясно: пора передать бизнес и двигаться дальше.
                            </p>
                            <p>
                                За годы работы Артем на собственном опыте прошел все этапы digital-маркетинга: создание сайтов, настройку рекламы, отслеживание конверсий, оптимизацию бюджетов. И самое главное — понял, что большинство компаний теряют деньги не из-за плохой рекламы, а из-за плохого сайта и неправильных процессов.
                            </p>
                            <p>
                                Именно поэтому цель HaloAgency.cz — не просто запускать рекламу, а помогать бизнесу расти комплексно: от качественного сайта до настроенной аналитики и автоматизации процессов.
                            </p>
                        </div>

                        {/* Vision Callout */}
                        <div className="mt-10 p-8 rounded-2xl bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/10 relative overflow-hidden group hover:border-white/20 transition-colors">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500" />
                            <h3 className="text-xl md:text-2xl font-medium text-white relative z-10 italic">
                                "Наша цель — чтобы каждый клиент достиг максимальной отдачи от рекламы и мог уверенно масштабировать бизнес."
                            </h3>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
