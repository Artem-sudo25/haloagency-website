"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight, LayoutGrid, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    number: "01",
    title: "Nejbalonky.cz",
    category: "E-commerce",
    categoryColor: "bg-blue-500/20 text-blue-400 border-blue-500/20",
    subtitle: "E-commerce для party supplies с интеграцией 1C",
    stats: "+140% конверсий",
    statsIcon: "trending",
    statsColor: "bg-green-500/20 text-green-400 border-green-500/20",
    description: "Server-side tracking восстановил 38% потерянных конверсий",
    tech: ["Next.js", "WooCommerce", "Stape"],
    gradient: "from-blue-900/50 to-purple-900/50",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    number: "02",
    title: "ProPradlo.cz",
    category: "Web App",
    categoryColor: "bg-teal-500/20 text-teal-400 border-teal-500/20",
    subtitle: "Landing + маркетинг для прачечной",
    stats: "Real-time бронирование",
    statsColor: "bg-blue-500/20 text-blue-400 border-blue-500/20",
    gradient: "from-teal-900/50 to-cyan-900/50",
    span: "",
  },
  {
    number: "03",
    title: "Segway Tours Budapest",
    category: "SEO + Ads",
    categoryColor: "bg-amber-500/20 text-amber-400 border-amber-500/20",
    subtitle: "SEO + реклама для туризма",
    stats: "+240% органика",
    statsIcon: "trending",
    statsColor: "bg-green-500/20 text-green-400 border-green-500/20",
    gradient: "from-amber-900/50 to-orange-900/50",
    span: "",
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                мы гордимся
              </span>
            </h2>
          </div>
          <Link href="/case-studies">
            <Button variant="outline" className="hidden md:flex rounded-full border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 gap-2">
              Все проекты <ArrowUpRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 md:auto-rows-fr">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-300 min-h-[300px] ${project.span}`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50 group-hover:opacity-70 transition-opacity duration-500`} />

              {/* Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${project.categoryColor} backdrop-blur-sm`}>
                    {project.category}
                  </span>
                </div>

                <div>
                  {/* Number Watermark */}
                  <div className="text-6xl md:text-8xl font-bold text-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
                    {project.number}
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3">
                      {project.subtitle}
                    </p>

                    {/* Metric Badge */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium border ${project.statsColor} backdrop-blur-sm mb-3`}>
                      {project.statsIcon === "trending" && <TrendingUp className="w-4 h-4" />}
                      {project.stats}
                    </div>

                    {project.description && (
                      <p className="text-gray-300 text-sm mb-3">
                        {project.description}
                      </p>
                    )}

                    {project.tech && project.tech.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="text-xs px-2 py-1 rounded-lg bg-white/10 text-gray-300 border border-white/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    <Link href="/case-studies" className="inline-flex items-center gap-1 text-sm text-white hover:text-blue-300 transition-colors mt-3">
                      Смотреть кейс →
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 md:hidden flex justify-center">
          <Link href="/case-studies" className="w-full">
            <Button variant="outline" className="rounded-full border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 w-full">
              Все кейсы
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
