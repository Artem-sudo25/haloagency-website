"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Rocket, Smartphone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SpotlightHero } from "@/components/ui/spotlight";
import { useContactModal } from "@/context/contact-modal-context";

export default function WebDevelopmentPage() {
  const { open } = useContactModal();
  return (
    <main className="min-h-screen bg-ha-bg pt-20 overflow-hidden">
      {/* Hero Section */}
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

      {/* Intro Section */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <p className="text-2xl md:text-3xl font-medium text-slate-200 leading-relaxed">
            "В 2026 году ваш сайт — это ваша цифровая штаб-квартира. Это не
            просто брошюра, это ваш{" "}
            <span className="text-blue-400">лучший продавец</span>, работающий
            24/7. Скорость, доверие и мобильная версия определяют, купит клиент
            или уйдет."
          </p>
        </div>
      </section>

      {/* Tech Stack - Glassmorphism */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Next.js 14", label: "Framework", icon: Globe },
              { name: "TypeScript", label: "Reliability", icon: Code2 },
              { name: "Tailwind CSS", label: "Styling", icon: Rocket },
              { name: "Framer Motion", label: "Animations", icon: Smartphone },
            ].map((tech) => (
              <div
                key={tech.name}
                className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    <tech.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-slate-500">{tech.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Build - Bento Grid */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
            Что мы разрабатываем
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
            {/* Landing Page - Large Card */}
            <div className="md:col-span-2 p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Rocket className="w-48 h-48" />
              </div>
              <div className="relative z-10 h-full flex flex-col">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Landing Page
                </h3>
                <p className="text-slate-400 text-lg mb-8 max-w-md">
                  Идеально для запуска продукта или услуги. Высокая конверсия,
                  формы захвата и продающая структура.
                </p>
                <div className="mt-auto flex items-end justify-between">
                  <div>
                    <div className="text-3xl font-bold text-blue-400">
                      от 8,000 CZK
                    </div>
                    <div className="text-slate-500">3-5 дней</div>
                  </div>
                  <div className="flex gap-2">
                    {["Адаптив", "SEO", "Формы"].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-white/5 text-sm text-slate-300 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Corporate Site */}
            <div className="p-8 rounded-3xl bg-slate-900 border border-white/10 relative overflow-hidden group hover:border-blue-500/30 transition-colors">
              <div className="relative z-10 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Корпоративный
                </h3>
                <p className="text-slate-400 mb-6">
                  Многостраничный сайт для компании. Блог, услуги, о нас.
                </p>
                <div className="mt-auto">
                  <div className="text-2xl font-bold text-white mb-1">
                    от 15,000 CZK
                  </div>
                  <div className="text-slate-500 text-sm">1-2 недели</div>
                </div>
              </div>
            </div>

            {/* E-commerce */}
            <div className="p-8 rounded-3xl bg-slate-900 border border-white/10 relative overflow-hidden group hover:border-blue-500/30 transition-colors">
              <div className="relative z-10 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-4">
                  E-commerce
                </h3>
                <p className="text-slate-400 mb-6">
                  Полноценный интернет-магазин с корзиной и оплатой.
                </p>
                <div className="mt-auto">
                  <div className="text-2xl font-bold text-white mb-1">
                    от 50,000 CZK
                  </div>
                  <div className="text-slate-500 text-sm">3-4 недели</div>
                </div>
              </div>
            </div>

            {/* Custom Dev - Wide */}
            <div className="md:col-span-2 p-8 rounded-3xl bg-blue-600 border border-blue-500 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Индивидуальная разработка
                  </h3>
                  <p className="text-blue-100">
                    Сложные веб-приложения, SaaS, личные кабинеты.
                  </p>
                </div>
                <Button
                  onClick={() => open({ service: "web" })}
                  className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-8"
                >
                  Обсудить задачу
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Готовы начать?
          </h2>
          <p className="text-xl text-slate-400 mb-10">
            Запустим ваш проект в кратчайшие сроки с гарантией качества.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => open({ service: "web" })}
              className="rounded-full px-10 h-14 text-lg bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-500/20"
            >
              Начать проект
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

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
