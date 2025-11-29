"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useContactModal } from "@/context/contact-modal-context";
import { CountUp } from "@/components/animated/CountUp";

export default function Hero() {
  const { open: openContactModal } = useContactModal();

  return (
    <section className="relative min-h-[75vh] md:min-h-[60vh] lg:min-h-[65vh] flex items-center justify-center overflow-hidden pt-24 md:pt-20 pb-8 md:pb-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-ha-bg z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 sm:px-4 relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left lg:col-span-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4 md:mb-6 backdrop-blur-sm">
            <span className="text-sm font-medium text-gray-300">
              🚀 Digital Agency of the Future
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold mb-4 md:mb-6 leading-[1.1] tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x">
              Технический маркетинг для бизнеса в Чехии
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Современные сайты за 3-7 дней, server-side tracking с точностью
            70-85%, реклама на данных. Быстро, прозрачно, измеримо.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 md:mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-blue-500/25"
              asChild
            >
              <Link href="/#projects">Посмотреть кейсы ↓</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full backdrop-blur-sm"
            >
              <Link href="/#pricing">Узнать цены →</Link>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex items-center justify-center lg:justify-start gap-6 md:gap-8 text-gray-500 text-sm uppercase tracking-wider">
            <div className="font-semibold">GOOGLE</div>
            <div className="font-semibold">META</div>
            <div className="font-semibold">NEXT.JS</div>
            <div className="font-semibold">WOOCOMMERCE</div>
          </div>
        </motion.div>

        {/* Right Visual - Animated Metric Cards */}
        <div className="relative h-[600px] w-full hidden lg:block lg:col-span-2">
          {/* ... existing visual code ... */}
          {/* I'm keeping the visual code as is, just updating the imports and button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* Glowing Orbs */}
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
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute top-[8%] right-[2%] bg-ha-card-dark/90 backdrop-blur-md border border-ha-border-dark p-5 rounded-2xl shadow-2xl w-52"
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
                <motion.div
                  className="mt-3 h-1.5 bg-slate-800 rounded-full overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                    initial={{ width: 0 }}
                    animate={{ width: "85%" }}
                    transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                  />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="absolute top-[42%] right-[30%] bg-ha-card-dark/90 backdrop-blur-md border border-ha-border-dark p-5 rounded-2xl shadow-2xl w-48"
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
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="absolute bottom-[8%] right-[55%] bg-ha-card-dark/90 backdrop-blur-md border border-ha-border-dark p-5 rounded-2xl shadow-2xl w-44"
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
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
