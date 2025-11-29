"use client";

import { useEffect } from "react";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Globe,
  Layout,
  Rocket,
  ShoppingCart,
  Smartphone,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import FAQ from "@/components/sections/FAQ";
import WebProjectForm from "@/components/sections/WebProjectForm";
import { Button } from "@/components/ui/button";
import { SpotlightHero } from "@/components/ui/spotlight";
import { useContactModal } from "@/context/contact-modal-context";

// Data Definitions
const techStack = [
  { name: "Next.js 14", label: "Framework", icon: Globe },
  { name: "TypeScript", label: "Reliability", icon: Code2 },
  { name: "Tailwind CSS", label: "Styling", icon: Rocket },
  { name: "Framer Motion", label: "Animations", icon: Smartphone },
];

const services = [
  {
    id: "landing",
    title: "Landing Page",
    description:
      "Идеально для запуска продукта или услуги. Высокая конверсия, формы захвата и продающая структура.",
    price: "от 8,000 CZK",
    time: "3-5 дней",
    icon: <Rocket className="w-6 h-6" />,
    colSpan: false,
    gradient: "from-blue-500/20 to-cyan-500/20",
    border: "group-hover:border-blue-500/50",
    text: "group-hover:text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    id: "corporate",
    title: "Корпоративный",
    description: "Многостраничный сайт для компании. Блог, услуги, о нас.",
    price: "от 15,000 CZK",
    time: "1-2 недели",
    icon: <Layout className="w-6 h-6" />,
    colSpan: false,
    gradient: "from-purple-500/20 to-pink-500/20",
    border: "group-hover:border-purple-500/50",
    text: "group-hover:text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    description: "Полноценный интернет-магазин с корзиной и оплатой.",
    price: "от 50,000 CZK",
    time: "3-4 недели",
    icon: <ShoppingCart className="w-6 h-6" />,
    colSpan: false,
    gradient: "from-emerald-500/20 to-green-500/20",
    border: "group-hover:border-emerald-500/50",
    text: "group-hover:text-emerald-400",
    bg: "bg-emerald-500/10",
  },
];

// Simple typewriter effect component
function Typewriter({ text }: { text: string }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
    >
      {text}|
    </motion.span>
  );
}

export default function WebDevelopmentPage() {
  const { open } = useContactModal();

  const openModal = (service: string) => {
    open({ service });
  };

  // Prevent browser scroll restoration and ensure page starts at top
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Disable automatic scroll restoration
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      // Scroll to top on mount
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <main className="min-h-screen bg-ha-bg pt-20 overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative py-20 md:py-32 px-4">
        <SpotlightHero />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8"
              >
                <Code2 className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-300 tracking-wide uppercase">
                  Web Development
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
              >
                Сайты, которые <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                  продают за вас
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-slate-400 mb-10 max-w-xl leading-relaxed"
              >
                Разрабатываем на Next.js. Это значит: мгновенная загрузка,
                идеальное SEO и удобство для мобильных пользователей.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  size="lg"
                  onClick={() => open({ service: "web" })}
                  className="rounded-full px-8 bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/25 h-12"
                >
                  Заказать сайт
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 border-white/10 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm h-12"
                  asChild
                >
                  <Link href="/#packages">Цены и сроки</Link>
                </Button>
              </motion.div>
            </div>

            {/* Hero Graphic: 3D Code Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-30 animate-pulse" />
              <div className="relative bg-[#0f172a] border border-slate-800 rounded-xl shadow-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-slate-900/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                  </div>
                  <div className="text-xs text-slate-500 font-mono ml-2">
                    page.tsx
                  </div>
                </div>
                <div className="p-6 font-mono text-sm leading-relaxed">
                  <div className="text-purple-400">
                    export default function{" "}
                    <span className="text-blue-400">Hero</span>() {"{"}
                  </div>
                  <div className="pl-4 text-slate-300">return (</div>
                  <div className="pl-8 text-slate-300">
                    &lt;<span className="text-red-400">section</span> className=
                    <span className="text-green-400">"relative"</span>&gt;
                  </div>
                  <div className="pl-12 text-slate-300">
                    &lt;<span className="text-red-400">h1</span>&gt;
                  </div>
                  <div className="pl-16 text-white">
                    <Typewriter text="Высокопроизводительный Веб" />
                  </div>
                  <div className="pl-12 text-slate-300">
                    &lt;/<span className="text-red-400">h1</span>&gt;
                  </div>
                  <div className="pl-12 text-slate-300">
                    &lt;<span className="text-red-400">Button</span>&gt;
                  </div>
                  <div className="pl-16 text-white">Start Project</div>
                  <div className="pl-12 text-slate-300">
                    &lt;/<span className="text-red-400">Button</span>&gt;
                  </div>
                  <div className="pl-8 text-slate-300">
                    &lt;/<span className="text-red-400">section</span>&gt;
                  </div>
                  <div className="pl-4 text-slate-300">);</div>
                  <div className="text-purple-400">{"}"}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Services (What we develop) */}
      <section className="py-20 bg-ha-bg-soft">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Что мы разрабатываем
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              От простых лендингов до сложных экосистем. Мы создаем решения,
              которые приносят прибыль.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {services.map((service) => (
              <div
                key={service.id}
                className={`group p-8 rounded-3xl bg-slate-900/50 border border-white/10 backdrop-blur-sm transition-all duration-500 flex flex-col relative overflow-hidden ${service.border}`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10 h-full flex flex-col">
                  <div
                    className={`mb-6 inline-flex p-3 rounded-xl ${service.bg} text-white group-hover:scale-110 transition-transform duration-300 w-fit`}
                  >
                    {service.icon}
                  </div>

                  <h3
                    className={`text-2xl font-bold text-white mb-3 ${service.text} transition-colors`}
                  >
                    {service.title}
                  </h3>
                  <p className="text-slate-400 mb-6 flex-grow">
                    {service.description}
                  </p>

                  <div className="pt-6 border-t border-white/5 mt-auto">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg font-bold text-white">
                        {service.price}
                      </span>
                      <span className="text-sm text-slate-500">
                        {service.time}
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      className={`w-full justify-between text-white hover:text-white ${service.bg} hover:opacity-90 group-hover:translate-x-1 transition-all p-0 px-4`}
                      onClick={() => openModal(service.title)}
                    >
                      Заказать <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={() => openModal("Индивидуальное решение")}
              className="text-slate-400 hover:text-blue-400 transition-colors border-b border-transparent hover:border-blue-400 pb-0.5"
            >
              Не нашли нужный формат? Обсудить индивидуальное решение →
            </button>
          </div>
        </div>
      </section>

      {/* 3. Lead Gen Form - Enhanced */}
      <section className="py-24 px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-transparent" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto max-w-4xl relative z-10">
          {/* Section header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">
                Бесплатный концепт за 48 часов
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Получите персональное демо вашего сайта
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-lg max-w-2xl mx-auto"
            >
              Нейросеть под присмотром арт-директора создаст концепт специально для вас
            </motion.p>
          </div>

          {/* Form wrapper with glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-white/10 p-8 md:p-12 shadow-2xl"
          >
            {/* Gradient border glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-50 blur-xl -z-10" />

            <WebProjectForm />
          </motion.div>
        </div>
      </section>

      {/* 4. Tech Stack */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Технологический стек
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Используем современные инструменты для максимальной
              производительности и масштабируемости.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-6 rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    <tech.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-slate-500">{tech.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <FAQ />

      {/* 6. CTA */}
      <section className="py-24 px-4 bg-ha-bg-soft border-t border-ha-border-dark">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Готовы начать проект?
          </h2>
          <p className="text-xl text-slate-400 mb-10">
            Оставьте заявку, и мы подготовим для вас персональное предложение и
            стратегию развития.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => openModal("Обсудить проект")}
              className="rounded-full px-10 h-14 text-lg bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-500/20"
            >
              Обсудить проект
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
