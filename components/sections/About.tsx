"use client";

import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-16 md:py-24 px-6">
            <div className="max-w-[1200px] mx-auto">
                <div className="flex flex-col md:flex-row gap-12 items-center bg-white p-8 md:p-12 rounded-2xl border-2 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#1A1A1A]">
                    {/* Image Column */}
                    <div className="w-full md:w-1/2 relative">
                        <div className="relative rounded-xl border-2 border-[#1A1A1A] overflow-hidden shadow-[4px_4px_0px_0px_#1A1A1A] aspect-[4/5] max-w-md mx-auto md:max-w-none">
                            <Image
                                src="/artem_about_portrait_final.jpg"
                                alt="Артём — основатель HaloAgency"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="w-full md:w-1/2 flex flex-col gap-6">
                        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#1A1A1A]" style={{ fontFamily: 'var(--font-display)' }}>
                            Маркетинг как система, а не набор услуг
                        </h2>
                        <div className="space-y-4 text-[#1A1A1A] font-medium leading-relaxed">
                            <p>
                                Я прошёл весь путь онлайн-маркетинга на практике — от создания сайтов и запуска рекламы до аналитики и автоматизации. Работая с сервисными бизнесами и e-commerce, я хорошо понимаю реальные задачи и ограничения малого и среднего бизнеса.
                            </p>
                            <p>
                                В основе моего подхода — выстраивать единую систему, где сайт, реклама и внутренние процессы связаны между собой и не требуют постоянного ручного управления.
                            </p>
                            <p>
                                Сегодня я использую AI и автоматизацию не как модный инструмент, а как рабочую основу: для аналитики, оптимизации рекламы и принятия решений на основе данных.
                            </p>
                        </div>
                        <div className="mt-4 flex flex-col">
                            <span className="font-extrabold text-xl text-[#1A1A1A]" style={{ fontFamily: 'var(--font-display)' }}>Artem K.</span>
                            <span className="text-sm text-[#1A1A1A] uppercase tracking-wider font-bold">Основатель HaloAgency</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
