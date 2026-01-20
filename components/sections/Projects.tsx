"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight, TrendingUp, Layers, Globe } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const projects = [
  {
    number: "01",
    title: "Nejbalonky.cz",
    visualType: "growth", // Data / Growth / E-commerce
    visualColor: "text-blue-500",
    category: "E-commerce",
    categoryColor: "bg-blue-500/20 text-blue-300 border-blue-500/20",
    subtitle: "E-commerce для party supplies с интеграцией 1C",
    stats: "+140% конверсий",
    statsIcon: "trending",
    statsColor: "bg-green-500/20 text-green-400 border-green-500/20",
    description: "Server-side tracking восстановил 38% потерянных конверсий",
    tech: ["Next.js", "WooCommerce", "Server-side tracking"],
    gradient: "from-blue-950 to-indigo-950",
    span: "md:col-span-2 md:row-span-2",
    href: "/case-studies/nejablonky",
  },
  {
    number: "02",
    title: "ProPradlo.cz",
    visualType: "system", // Product / System / Web App
    visualColor: "text-teal-500",
    category: "Web App",
    categoryColor: "bg-teal-500/20 text-teal-300 border-teal-500/20",
    subtitle: "Landing + маркетинг для прачечной",
    stats: "Real-time бронирование",
    statsColor: "bg-blue-500/20 text-blue-300 border-blue-500/20",
    gradient: "from-teal-950 to-cyan-950",
    span: "",
    href: "/case-studies/propradlo",
  },
  {
    number: "03",
    title: "Segway Tours Budapest",
    visualType: "scale", // Marketing / SEO / Scale
    visualColor: "text-amber-500",
    category: "SEO + Ads",
    categoryColor: "bg-amber-500/20 text-amber-300 border-amber-500/20",
    subtitle: "SEO + реклама для туризма",
    stats: "+240% органика",
    statsIcon: "trending",
    statsColor: "bg-green-500/20 text-green-400 border-green-500/20",
    gradient: "from-amber-950 to-orange-950",
    span: "",
    href: "/case-studies/segway-tours-budapest",
  },
];

const AbstractVisual = ({ type, colorClass }: { type: string, colorClass: string }) => {
  // Theme: Data / Growth (Nejbalonky)
  if (type === "growth") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />

        {/* Animated Graph Line */}
        <svg className="absolute inset-0 w-full h-full opacity-60" preserveAspectRatio="none">
          <defs>
            <linearGradient id="growthGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="currentColor" className="text-blue-500" stopOpacity="0.2" />
              <stop offset="50%" stopColor="currentColor" className="text-purple-500" stopOpacity="0.8" />
              <stop offset="100%" stopColor="currentColor" className="text-pink-500" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="growthFill" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="currentColor" className="text-blue-500" stopOpacity="0.1" />
              <stop offset="100%" stopColor="currentColor" className="text-blue-500" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d="M -10 250 C 100 250, 200 150, 400 120 S 600 50, 900 20"
            fill="none"
            stroke="url(#growthGradient)"
            strokeWidth="3"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          <motion.path
            d="M -10 250 C 100 250, 200 150, 400 120 S 600 50, 900 20 L 900 400 L -10 400 Z"
            fill="url(#growthFill)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </svg>

        {/* Floating Data Points */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={cn("absolute w-2 h-2 rounded-full", colorClass)}
              style={{
                top: `${30 + i * 15}%`,
                left: `${60 + i * 15}%`,
                background: 'currentColor',
                boxShadow: '0 0 10px currentColor'
              }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.8 }}
              viewport={{ once: true }}
              transition={{ delay: 1 + i * 0.2, duration: 0.5 }}
            />
          ))}
        </div>
      </div>
    );
  }

  // Theme: Product / System (ProPradlo)
  if (type === "system") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Glass Planes */}
        <div className="absolute inset-0 flex items-center justify-center perspective-1000">
          <motion.div
            className="w-48 h-32 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-sm transform rotate-6 skew-y-6 shadow-2xl"
            style={{ position: 'absolute', top: '20%', right: '10%' }}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            className="w-48 h-32 rounded-xl bg-gradient-to-tr from-white/10 to-transparent border border-white/10 backdrop-blur-sm transform -rotate-3 skew-y-3 z-10 shadow-2xl"
            style={{ position: 'absolute', top: '40%', right: '25%' }}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Mock UI lines */}
            <div className="p-4 space-y-2">
              <div className="w-1/3 h-2 rounded-full bg-white/20" />
              <div className="w-2/3 h-2 rounded-full bg-white/10" />
              <div className="w-1/2 h-2 rounded-full bg-white/10" />
            </div>
          </motion.div>
        </div>

        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-30">
          <motion.line
            x1="30%" y1="70%" x2="70%" y2="40%"
            stroke="currentColor"
            className={colorClass}
            strokeWidth="1"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5 }}
          />
        </svg>
      </div>
    );
  }

  // Theme: Marketing / Scale (Segway)
  if (type === "scale") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
        {/* Expanding Radar Rings */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className={cn("absolute rounded-full border opacity-20", colorClass)}
            style={{ width: `${(i + 1) * 80}px`, height: `${(i + 1) * 80}px`, border: '1px solid currentColor' }}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.2 - (i * 0.05) }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: i * 0.2 }}
          />
        ))}

        {/* Central Glow/Globe */}
        <div className={cn("relative z-10 p-4 rounded-full bg-gradient-to-br from-white/10 to-transparent border border-white/10 shadow-[0_0_30px_rgba(255,165,0,0.2)]", colorClass)}>
          <Globe className="w-8 h-8 opacity-80 text-orange-200" />
        </div>

        {/* Particles representing reach */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <motion.div
            key={i}
            className={cn("absolute w-1 h-1 rounded-full", colorClass)}
            style={{ background: 'currentColor' }}
            initial={{ x: 0, y: 0, opacity: 0 }}
            whileInView={{
              x: Math.cos(angle * Math.PI / 180) * 80,
              y: Math.sin(angle * Math.PI / 180) * 80,
              opacity: 0.6
            }}
            transition={{ duration: 2, delay: 0.5 + i * 0.1 }}
          />
        ))}
      </div>
    );
  }

  return null;
};

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

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 md:auto-rows-fr">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 8, opacity: 0.9 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.05, duration: 0.3, ease: "easeOut" }}
              className={`group relative overflow-hidden rounded-3xl bg-slate-900 border border-white/10 hover:border-white/20 transition-all duration-300 min-h-[300px] ${project.span}`}
            >
              {/* Abstract Visual Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />

              <AbstractVisual type={project.visualType} colorClass={project.visualColor} />

              {/* Noise Texture for Texture */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

              {/* Number Watermark */}
              <div className="text-6xl md:text-8xl font-bold text-white/5 absolute bottom-4 right-4 rotate-0 select-none pointer-events-none z-0">
                {project.number}
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10 pointer-events-none">
                <div className="flex justify-between items-start pointer-events-auto">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${project.categoryColor} backdrop-blur-md`}>
                    {project.category}
                  </span>
                </div>

                <div className="pointer-events-auto">
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
                    <p className="text-gray-400 text-sm mb-4 max-w-md group-hover:text-gray-300 transition-colors">
                      {project.description}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {/* Tech stack or tags if needed */}
                  </div>

                  <Link href={project.href || "#"} className="inline-flex items-center gap-1 text-sm text-white hover:text-blue-300 transition-colors">
                    Смотреть кейс →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
