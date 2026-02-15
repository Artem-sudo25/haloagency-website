"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useContactModalActions } from "@/context/contact-modal-context";
import { CountUp } from "@/components/animated/CountUp";
import { SpotlightHero } from "@/components/ui/spotlight";

export default function Hero() {
  const { open: openContactModal } = useContactModalActions();

  return (
    <section className="relative pt-36 pb-6 md:pb-32 px-4">
      <SpotlightHero />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="text-left">
            <h1
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              Весь маркетинг <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-400">
                под одной крышей
              </span>
            </h1>

            <p
              className="text-xl text-slate-400 mb-10 max-w-xl leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              От сайта и аналитики до онлайн рекламы и автоматизации процессов — один партнёр, одна ответственность.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Button
                size="lg"
                className="rounded-full px-8 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-500/25 h-12"
                asChild
              >
                <Link href="/#projects">Посмотреть кейсы ↓</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="rounded-full px-8 border-white/10 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm h-12"
              >
                <Link href="/#pricing">Узнать цены →</Link>
              </Button>
            </div>

            {/* Trust Badges - Desktop only */}
            <div
              className="hidden md:flex flex-wrap items-center justify-start gap-x-8 gap-y-4 text-gray-500 text-sm font-semibold uppercase tracking-wider mt-12 mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.35s" }}
            >
              <div>GOOGLE</div>
              <div>META</div>
              <div>NEXT.JS</div>
              <div>WOOCOMMERCE</div>
            </div>

            {/* Anchor Buttons */}
            <div
              className="flex flex-wrap gap-4 mt-8 animate-fade-in-up justify-center md:justify-start"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-400 hover:text-white p-0 h-auto font-normal hover:bg-transparent"
                asChild
              >
                <Link href="/#projects">Портфолио</Link>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-400 hover:text-white p-0 h-auto font-normal hover:bg-transparent"
                asChild
              >
                <Link href="/#process">Как мы работаем</Link>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-400 hover:text-white p-0 h-auto font-normal hover:bg-transparent"
                asChild
              >
                <Link href="/#faq">FAQ</Link>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-purple-400 hover:text-purple-300 p-0 h-auto font-normal hover:bg-transparent"
                asChild
              >
                <Link href="/#growth-plan" className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Бесплатный план роста
                </Link>
              </Button>
            </div>
          </div>

        {/* Right Column: Visual - Animated Metric Cards */}
        <div className="relative h-[600px] w-full hidden lg:block animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* Glowing Orbs - kept using framer-motion for complex continuous animation */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"
              />
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"
              />

              {/* Digital Lines (SVG) */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 600 600"
              >
                <motion.path
                  d="M100,300 Q250,100 400,300 T700,300"
                  fill="none"
                  stroke="url(#gradient1)"
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                <motion.path
                  d="M50,400 Q200,200 350,400 T650,400"
                  fill="none"
                  stroke="url(#gradient2)"
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.5 }}
                  transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
                />
                <defs>
                  <linearGradient
                    id="gradient1"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
                    <stop offset="50%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="gradient2"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#EC4899" stopOpacity="0" />
                    <stop offset="50%" stopColor="#EC4899" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Floating Metric Cards - Well Spaced for Readability */}
              <div
                className="absolute top-[8%] right-[2%] bg-ha-card-dark/90 backdrop-blur-md border border-ha-border-dark p-5 rounded-2xl shadow-2xl w-52 animate-fade-in-up"
                style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-slate-400 uppercase tracking-wider">
                    ПРОДАЖИ
                  </span>
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-green-500 -rotate-45" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-white mb-1">
                  +<CountUp end={145} duration={2000} />%
                </div>
                <div className="text-xs text-slate-500">Рост за квартал</div>

                {/* Progress bar */}
                <div className="mt-3 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-500 animate-progress-bar"
                    style={{ animationDelay: '0.8s', animationFillMode: 'both' }}
                  />
                </div>
              </div>

              <div
                className="absolute top-[42%] right-[30%] bg-ha-card-dark/90 backdrop-blur-md border border-ha-border-dark p-5 rounded-2xl shadow-2xl w-48 animate-fade-in-up"
                style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-slate-400 uppercase tracking-wider">
                    КОНВЕРСИИ
                  </span>
                  <Sparkles className="w-4 h-4 text-blue-400" />
                </div>
                <div className="text-4xl font-bold text-white mb-1">
                  +<CountUp end={87} duration={2000} />%
                </div>
                <div className="text-xs text-slate-500">Рост за квартал</div>
              </div>

              <div
                className="absolute bottom-[8%] right-[55%] bg-ha-card-dark/90 backdrop-blur-md border border-ha-border-dark p-5 rounded-2xl shadow-2xl w-44 animate-fade-in-up"
                style={{ animationDelay: '0.7s', animationFillMode: 'both' }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-slate-400 uppercase tracking-wider">
                    ROI
                  </span>
                  <div className="text-purple-400 text-xl font-bold">×</div>
                </div>
                <div className="text-4xl font-bold text-white mb-1">
                  <CountUp end={3.2} decimals={1} duration={2000} />x
                </div>
                <div className="text-xs text-slate-500">Окупаемость</div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
