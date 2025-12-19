"use client";

import { motion } from "framer-motion";
import { Check, Megaphone, Target, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SpotlightHero } from "@/components/ui/spotlight";
import { useContactModal } from "@/context/contact-modal-context";

export default function AdsPage() {
  const { open } = useContactModal();
  return (
    <main className="min-h-screen bg-ha-bg pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-6 md:py-32 px-4">
        <SpotlightHero />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8"
              >
                <Megaphone className="w-4 h-4 text-orange-400" />
                <span className="text-sm font-medium text-orange-300 tracking-wide uppercase">
                  Performance Marketing
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
              >
                Реклама, которая <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                  окупается
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-slate-400 mb-10 max-w-xl leading-relaxed"
              >
                Google Ads и Meta Ads с правильным трекингом. Мы не просто
                приводим клики, мы приводим клиентов, которых можно посчитать.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  size="lg"
                  onClick={() => open({ service: "ads" })}
                  className="rounded-full px-8 bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/25 h-12"
                >
                  Запустить рекламу
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 border-white/10 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm h-12"
                  asChild
                >
                  <Link href="/packages/leads">Пакет "Лид-машина"</Link>
                </Button>
              </motion.div>
            </div>

            {/* Hero Graphic: Floating Ad Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block h-[400px]"
            >
              {/* Google Ads Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-10 left-10 w-64 bg-white rounded-xl shadow-2xl p-4 z-20"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    G
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">
                      Google Ads
                    </div>
                    <div className="text-[10px] text-slate-500">Sponsored</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-slate-100 rounded w-3/4" />
                  <div className="h-2 bg-slate-100 rounded w-full" />
                </div>
                <div className="mt-4 flex gap-2">
                  <div className="flex-1 bg-green-50 p-2 rounded">
                    <div className="text-[10px] text-green-600 font-bold">
                      +124%
                    </div>
                    <div className="text-[8px] text-green-600">ROAS</div>
                  </div>
                  <div className="flex-1 bg-blue-50 p-2 rounded">
                    <div className="text-[10px] text-blue-600 font-bold">
                      2.4%
                    </div>
                    <div className="text-[8px] text-blue-600">CTR</div>
                  </div>
                </div>
              </motion.div>

              {/* Meta Ads Card */}
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-20 right-10 w-64 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl p-4 z-10"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    f
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Meta Ads</div>
                    <div className="text-[10px] text-slate-400">Sponsored</div>
                  </div>
                </div>
                <div className="aspect-video bg-slate-800 rounded-lg mb-3 relative overflow-hidden">
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none bg-gradient-to-tr from-blue-500/20 to-purple-500/20"
                    aria-label="Bypass animation"
                  />
                  <TrendingUp className="absolute bottom-2 left-2 text-green-400 w-6 h-6" />
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-xs text-white font-bold">Sign Up</div>
                  <div className="px-3 py-1 bg-blue-600 text-white text-[10px] rounded-full">
                    Learn More
                  </div>
                </div>
              </motion.div>

              {/* Background Glow */}
              <div className="absolute inset-0 bg-orange-500/20 blur-3xl rounded-full -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <p className="text-2xl md:text-3xl font-medium text-slate-200 leading-relaxed">
            "Органический охват мертв. Чтобы масштабироваться в 2026 году, вам
            нужна точная,{" "}
            <span className="text-orange-400">платная реклама</span>. Мы не
            просто покупаем клики; мы покупаем клиентов, используя
            AI-таргетинг."
          </p>
        </div>
      </section>

      {/* Channels - Glassmorphism */}
      <section className="py-20 bg-ha-bg-soft">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Target className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Google Ads
                </h3>
                <ul className="space-y-3">
                  {[
                    "Поисковая реклама (Search)",
                    "Google Shopping (для e-commerce)",
                    "Ремаркетинг и Performance Max",
                    "YouTube реклама",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-slate-300"
                    >
                      <Check className="w-4 h-4 text-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="group bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Megaphone className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6">
                  <Megaphone className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Meta Ads (FB + Insta)
                </h3>
                <ul className="space-y-3">
                  {[
                    "Таргетинг по интересам и поведению",
                    "Lookalike аудитории (похожие)",
                    "Advantage+ автоматические кампании",
                    "Динамический ремаркетинг",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-slate-300"
                    >
                      <Check className="w-4 h-4 text-indigo-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Tracking Matters */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Почему важен правильный трекинг
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Без server-side tracking вы теряете 30-50% данных о конверсиях
              из-за блокировщиков и iOS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-500/5 border border-red-500/20 rounded-3xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2">
                <span className="text-2xl">❌</span> Стандартный setup
              </h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />
                  50-60% точность данных
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />
                  Блокируется iOS 14.5+
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />
                  Блокируется AdBlock
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />
                  Алгоритмы обучаются на неполных данных
                </li>
              </ul>
            </div>

            <div className="bg-green-500/5 border border-green-500/20 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <TrendingUp className="w-32 h-32 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center gap-2 relative z-10">
                <span className="text-2xl">✅</span> Наш подход (Server-side)
              </h3>
              <ul className="space-y-4 text-slate-300 relative z-10">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                  85-95% точность данных
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                  Обходит ограничения iOS
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                  Работает даже с AdBlock
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                  Максимальная эффективность рекламы
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-ha-bg-soft border-t border-ha-border-dark px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Стоимость услуг
          </h2>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 divide-y md:divide-y-0 md:divide-x divide-slate-700">
              <div className="px-4">
                <p className="text-sm text-slate-500 mb-2 uppercase tracking-wide">
                  Настройка
                </p>
                <p className="text-3xl font-bold text-white">10,000 CZK</p>
                <p className="text-xs text-slate-500 mt-2">Единоразово</p>
              </div>
              <div className="px-4 pt-8 md:pt-0">
                <p className="text-sm text-slate-500 mb-2 uppercase tracking-wide">
                  Ведение
                </p>
                <p className="text-3xl font-bold text-white">от 10,000 CZK</p>
                <p className="text-xs text-slate-500 mt-2">В месяц</p>
              </div>
              <div className="px-4 pt-8 md:pt-0">
                <p className="text-sm text-slate-500 mb-2 uppercase tracking-wide">
                  Бюджет
                </p>
                <p className="text-3xl font-bold text-white">15k+ CZK</p>
                <p className="text-xs text-slate-500 mt-2">Рекомендуемый</p>
              </div>
            </div>
            <div className="bg-blue-500/10 rounded-xl p-4 text-blue-300 text-sm inline-block">
              <Zap className="w-4 h-4 inline-block mr-2" />
              Включено в пакет "Лид-машина"
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Нужны клиенты?
          </h2>
          <p className="text-xl text-slate-400 mb-10">
            Запустим эффективную рекламу уже через 2 дня.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => open({ service: "ads" })}
              className="rounded-full px-10 h-14 text-lg bg-orange-500 hover:bg-orange-600 text-white shadow-xl shadow-orange-500/20"
            >
              Запустить рекламу
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
