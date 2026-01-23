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
    color: "from-blue-500/20 to-blue-600/5",
    size: "large",
  },
  {
    id: 2,
    name: "ProPradlo.cz",
    category: "Web & Ads",
    description: "Редизайн и запуск рекламных кампаний для прачечной.",
    stats: { label: "Стоимость лида", value: "-40%" },
    tags: ["Landing Page", "Local SEO", "PPC"],
    color: "from-orange-500/20 to-orange-600/5",
    size: "small",
  },
  {
    id: 3,
    name: "Segway Tours",
    category: "Tourism",
    description: "Комплексный маркетинг для туристического оператора.",
    stats: { label: "Бронирования", value: "+210%" },
    tags: ["SEO", "TripAdvisor", "Google Ads"],
    color: "from-green-500/20 to-green-600/5",
    size: "small",
  },
  {
    id: 4,
    name: "TechStart",
    category: "SaaS",
    description: "Разработка корпоративного сайта для IT-стартапа.",
    stats: { label: "Скорость загрузки", value: "0.4s" },
    tags: ["Next.js", "Tailwind", "Motion"],
    color: "from-purple-500/20 to-purple-600/5",
    size: "large",
  },
  {
    id: 5,
    name: "BeautySalon",
    category: "Local Business",
    description: "Система онлайн-записи и Instagram продвижение.",
    stats: { label: "Новые клиенты", value: "+50/мес" },
    tags: ["Instagram", "Booking System"],
    color: "from-pink-500/20 to-pink-600/5",
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
    <main className="min-h-screen bg-ha-bg pt-20">
      {/* Hero */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Наши <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Кейсы</span>
          </h1>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Мы гордимся результатами наших клиентов. Посмотрите, как мы помогаем бизнесу расти.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat
                  ? "bg-white text-black shadow-lg shadow-white/10"
                  : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
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
                  className={`group relative rounded-3xl overflow-hidden border border-ha-border-dark bg-ha-card-dark hover:border-white/20 transition-colors ${project.size === "large" ? "md:col-span-2" : "md:col-span-1"
                    }`}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`} />

                  <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                    <div className="flex justify-between items-start">
                      <div className="bg-black/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white border border-white/10">
                        {project.category}
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0 translate-x-4">
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">{project.name}</h3>
                      <p className="text-slate-300 mb-6 line-clamp-2">{project.description}</p>

                      <div className="flex items-end justify-between border-t border-white/10 pt-6">
                        <div>
                          <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">{project.stats.label}</p>
                          <p className="text-2xl font-bold text-white">{project.stats.value}</p>
                        </div>
                        <div className="flex gap-2">
                          {project.tags.slice(0, 2).map((tag, i) => (
                            <span key={i} className="text-xs text-slate-500 bg-black/20 px-2 py-1 rounded">
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
      <section className="py-24 bg-ha-bg-soft border-t border-ha-border-dark px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Хотите такой же результат?
          </h2>
          <p className="text-xl text-slate-400 mb-10">
            Обсудим ваш проект и найдем точки роста.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => openContactModal()}
              className="rounded-full px-10 h-14 text-lg bg-ha-primary hover:bg-blue-600 text-white shadow-xl shadow-blue-500/20"
            >
              Обсудить проект
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-10 h-14 text-lg border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800"
              asChild
            >
              <Link href="/packages">Посмотреть цены</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
