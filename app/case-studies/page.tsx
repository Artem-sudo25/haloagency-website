"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight, BarChart3, Code2, Megaphone, Filter } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useContactModal } from "@/context/contact-modal-context";

const projects = [
  {
    id: 1,
    name: "Nejbalonky.cz",
    category: "E-commerce",
    description: "Full-stack запуск: разработка, интеграции (PPL, iDoklad) и реклама.",
    stats: { label: "Средний ROAS", value: "5.6" },
    tags: ["Google Ads", "Meta Ads", "SEO"],
    size: "large",
    href: "/case-studies/nejablonky",
  },
  {
    id: 2,
    name: "ProPradlo.cz",
    category: "Web & Ads",
    description: "Редизайн и запуск рекламных кампаний для прачечной.",
    stats: { label: "Стоимость лида", value: "-40%" },
    tags: ["Landing Page", "Local SEO", "PPC"],
    size: "small",
    href: "/case-studies/propradlo",
  },
  {
    id: 3,
    name: "Segway Tours",
    category: "Tourism",
    description: "Комплексный маркетинг для туристического оператора.",
    stats: { label: "Бронирования", value: "+210%" },
    tags: ["SEO", "TripAdvisor", "Google Ads"],
    size: "small",
    href: "/case-studies/segway-tours-budapest",
  },
  {
    id: 4,
    name: "TechStart",
    category: "SaaS",
    description: "Разработка корпоративного сайта для IT-стартапа.",
    stats: { label: "Скорость загрузки", value: "0.4s" },
    tags: ["Next.js", "Tailwind", "Motion"],
    size: "large",
  },
  {
    id: 5,
    name: "BeautySalon",
    category: "Local Business",
    description: "Система онлайн-записи и Instagram продвижение.",
    stats: { label: "Новые клиенты", value: "+50/мес" },
    tags: ["Instagram", "Booking System"],
    size: "small",
  },
];

const categories = ["All", "E-commerce", "Web & Ads", "Tourism", "SaaS"];

export default function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { open: openContactModal } = useContactModal();

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory || p.tags.includes(activeCategory));

  return (
    <main className="min-h-screen bg-[#F5F5F7] pt-20">
      {/* Dot grid background */}
      <div className="fixed inset-0 z-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <div className="relative z-10">
        {/* Hero */}
        <section className="relative py-16 md:py-20 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold text-[#1A1A1A] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Наши{" "}
              <span className="relative inline-block z-10">
                Кейсы
                <svg className="absolute -bottom-2 left-0 w-full h-4 text-[#FF3366] -z-10" fill="none" preserveAspectRatio="none" viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeLinecap="round" strokeWidth="4" />
                </svg>
              </span>
            </h1>
            <p className="text-xl text-[#1A1A1A]/60 mb-12 max-w-2xl mx-auto">
              Мы гордимся результатами наших клиентов. Посмотрите, как мы помогаем бизнесу расти.
            </p>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-xl text-sm font-bold transition-all border-2 border-[#1A1A1A] ${activeCategory === cat
                    ? "bg-[#FF3366] text-white shadow-[4px_4px_0px_0px_#1A1A1A]"
                    : "bg-white text-[#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[4px_4px_0px_0px_#1A1A1A]"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]"
            >
              <AnimatePresence>
                {filteredProjects.map((project) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={project.id}
                    className={`group relative rounded-2xl overflow-hidden border-2 border-[#1A1A1A] bg-white transition-all shadow-[6px_6px_0px_0px_#1A1A1A] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_#1A1A1A] ${project.size === "large" ? "md:col-span-2" : "md:col-span-1"
                      } ${(project as any).href ? "cursor-pointer" : ""}`}
                  >
                    {/* Clickable overlay for projects with detail pages */}
                    {(project as any).href && (
                      <Link href={(project as any).href} className="absolute inset-0 z-20" aria-label={`Открыть кейс ${project.name}`} />
                    )}
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF3366]/5 to-pink-400/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                      <div className="flex justify-between items-start">
                        <div className="bg-[#FFD166] border-2 border-[#1A1A1A] px-3 py-1 rounded-md text-xs font-bold text-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A]">
                          {project.category}
                        </div>
                        <div className="w-10 h-10 rounded-xl border-2 border-[#1A1A1A] bg-white shadow-[2px_2px_0px_0px_#1A1A1A] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0 translate-x-4">
                          <ArrowUpRight className="w-5 h-5 text-[#1A1A1A]" />
                        </div>
                      </div>

                      <div>
                        <h3 className="text-3xl font-bold text-[#1A1A1A] mb-2">{project.name}</h3>
                        <p className="text-[#1A1A1A]/60 mb-6 line-clamp-2">{project.description}</p>

                        <div className="flex items-end justify-between border-t border-[#1A1A1A]/5 pt-6">
                          <div>
                            <p className="text-xs text-[#1A1A1A]/40 uppercase tracking-wider mb-1">{project.stats.label}</p>
                            <p className="text-2xl font-bold text-[#1A1A1A]">{project.stats.value}</p>
                          </div>
                          <div className="flex gap-2">
                            {project.tags.slice(0, 2).map((tag, i) => (
                              <span key={i} className="text-xs text-[#1A1A1A] bg-[#06D6A0] border-2 border-[#1A1A1A] px-2 py-1 rounded-md font-bold shadow-[2px_2px_0px_0px_#1A1A1A]">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Хотите такой же результат?
            </h2>
            <p className="text-xl text-[#1A1A1A]/60 mb-10">
              Обсудим ваш проект и найдем точки роста.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Button
                size="lg"
                onClick={() => openContactModal()}
                className="rounded-xl px-10 h-14 text-lg bg-[#FF3366] hover:bg-[#FF3366] text-white font-bold border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-y-[1px] active:translate-x-[1px] active:shadow-[0px_0px_0px_0px_#1A1A1A] transition-all"
              >
                Обсудить проект
              </Button>
              <Link href="/packages" className="text-[#1A1A1A] font-bold hover:text-[#FF3366] transition-colors text-base underline decoration-2 underline-offset-4">
                Посмотреть цены →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
