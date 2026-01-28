"use client";

import { TrendingUp, Globe } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const projects = [
  {
    number: "01",
    title: "Nejbalonky.cz",
    image: "/images/case-studies/nejablonky_updated.png",
    category: "E-commerce",
    categoryColor: "bg-blue-500/20 text-blue-300 border-blue-500/20",
    subtitle: "E-commerce система с полной автоматизацией",
    stats: "ROAS 6+",
    statsIcon: "trending",
    statsColor: "bg-green-500/20 text-green-400 border-green-500/20",
    description: "Интеграция логистики, склада и AI-поиска. Стабильный рост без увеличения штата.",
    span: "md:col-span-2 md:row-span-2",
    href: "/case-studies/nejablonky",
  },
  {
    number: "02",
    title: "ProPradlo.cz",
    image: "/images/case-studies/propradlo-mockup-v3.png",
    category: "Automation",
    categoryColor: "bg-teal-500/20 text-teal-300 border-teal-500/20",
    subtitle: "Цифровая трансформация локального бизнеса",
    stats: "Заявки x3.5",
    statsColor: "bg-blue-500/20 text-blue-300 border-blue-500/20",
    description: "70% заказов переведены в онлайн. ТОП-3 в локальном поиске Google.",
    span: "",
    href: "/case-studies/propradlo",
  },
  {
    number: "03",
    title: "Segway Tours",
    image: "/images/case-studies/segway.png",
    category: "SEO + Ads",
    categoryColor: "bg-amber-500/20 text-amber-300 border-amber-500/20",
    subtitle: "Комплексный маркетинг в конкурентной нише",
    stats: "+240% Трафик",
    statsIcon: "trending",
    statsColor: "bg-green-500/20 text-green-400 border-green-500/20",
    description: "Рост прямых продаж на 60% и снижение зависимости от агрегаторов.",
    span: "",
    href: "/case-studies/segway-tours-budapest",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 px-4 bg-ha-bg-soft relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4 md:mb-6 backdrop-blur-sm">
              <span className="text-sm font-medium text-gray-300">💼 Избранные кейсы</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 px-4 md:px-0">
              Результаты, которыми <br />
              <span className="text-white">мы гордимся</span>
            </h2>
          </div>
          <div className="hidden md:block" /> {/* Spacer instead of button */}
        </div>

        <div className="flex flex-col gap-6 md:grid md:grid-cols-3 md:grid-rows-2 md:gap-6 md:auto-rows-fr">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 8, opacity: 0.9 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.05, duration: 0.3, ease: "easeOut" }}
              className={`group relative overflow-hidden rounded-3xl bg-transparent border border-white/10 hover:border-white/20 transition-all duration-300 min-h-[400px] w-full isolate ${project.span}`}
            >
              <Link href={project.href || "#"} className="block w-full h-[400px] md:h-full relative">
                {/* Background Image with Zoom Effect */}
                <div className="absolute inset-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 2}
                  />
                  {/* Subtle Gradient for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80" />
                </div>

                {/* Number Watermark */}
                <div className="text-6xl md:text-8xl font-bold text-white/5 absolute top-6 right-6 select-none pointer-events-none z-10">
                  {project.number}
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-20">
                  <div className="flex justify-between items-start">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${project.categoryColor} backdrop-blur-md`}>
                      {project.category}
                    </span>
                  </div>

                  <div className="transform transition-transform duration-300 md:group-hover:-translate-y-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3 max-w-md">
                      {project.subtitle}
                    </p>

                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium border ${project.statsColor} backdrop-blur-md mb-3`}>
                      {project.statsIcon === "trending" && <TrendingUp className="w-4 h-4" />}
                      {project.stats}
                    </div>

                    {project.description && (
                      <p className="text-gray-400 text-sm mb-4 max-w-md md:group-hover:text-gray-200 transition-colors hidden md:block">
                        {project.description}
                      </p>
                    )}

                    <span className="inline-flex items-center gap-1 text-sm text-white font-medium hover:text-blue-300 transition-colors">
                      Смотреть кейс →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
