"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Check,
  Code2,
  Database,
  Globe,
  Lock,
  Server,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Link from "next/link";
import TrackingAudit from "@/components/sections/TrackingAudit";
import { Button } from "@/components/ui/button";
import { SpotlightHero } from "@/components/ui/spotlight";
import { useContactModal } from "@/context/contact-modal-context";

export default function TrackingPage() {
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
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-8"
              >
                <BarChart3 className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium text-green-300 tracking-wide uppercase">
                  Advanced Analytics
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
              >
                Видеть <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                  каждую конверсию
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-slate-400 mb-10 max-w-xl leading-relaxed"
              >
                Server-side tracking и Meta CAPI. Мы восстанавливаем 20-40%
                данных, которые теряются из-за блокировщиков и iOS.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  size="lg"
                  onClick={() => open({ service: "tracking" })}
                  className="rounded-full px-8 bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-500/25 h-12"
                >
                  Настроить трекинг
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

            {/* Hero Graphic: Data Stream Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block h-[400px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/5 rounded-3xl border border-white/5 backdrop-blur-sm overflow-hidden">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />

                {/* Nodes */}
                <div className="absolute top-1/2 left-12 -translate-y-1/2 w-24 h-24 bg-slate-900 rounded-2xl border border-slate-700 flex flex-col items-center justify-center z-10 shadow-xl">
                  <Globe className="w-8 h-8 text-blue-400 mb-2" />
                  <span className="text-xs text-slate-400">Browser</span>
                </div>

                <div className="absolute top-1/2 right-12 -translate-y-1/2 w-24 h-24 bg-slate-900 rounded-2xl border border-green-500/50 flex flex-col items-center justify-center z-10 shadow-xl shadow-green-500/20">
                  <Server className="w-8 h-8 text-green-400 mb-2" />
                  <span className="text-xs text-green-400">Server</span>
                </div>

                {/* Connecting Line */}
                <div className="absolute top-1/2 left-36 right-36 h-0.5 bg-slate-800 -translate-y-1/2">
                  {/* Moving Particles */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={`particle-${i}`}
                      className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-green-400 rounded-full shadow-[0_0_10px_rgba(74,222,128,0.8)]"
                      animate={{
                        left: ["0%", "100%"],
                        opacity: [0, 1, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.6,
                        ease: "linear",
                      }}
                    />
                  ))}
                </div>

                {/* Shield Animation (Blocking) */}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center"
                  >
                    <Lock className="w-5 h-5 text-red-400" />
                  </motion.div>
                </div>

                {/* Bypass Animation (Curved Line) */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  aria-label="Data bypass animation"
                  role="img"
                >
                  <motion.path
                    d="M 150 200 Q 300 350 450 200"
                    fill="none"
                    stroke="#4ade80"
                    strokeWidth="2"
                    strokeDasharray="10 10"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.5 }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </svg>
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-xs text-green-400 font-mono bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
                  Обход блокировщиков...
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
            "Данные — это новая нефть. Без точного{" "}
            <span className="text-green-400">server-side трекинга</span> вы
            летите вслепую. Восстановите 30% данных, потерянных из-за
            блокировщиков, и дайте алгоритмам то, что им нужно для поиска
            клиентов."
          </p>
        </div>
      </section>

      {/* Tracking Audit */}
      <TrackingAudit />

      {/* The Problem - Glassmorphism Cards */}
      <section className="py-20 bg-ha-bg-soft">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Куда пропадают данные?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "iOS 14.5+",
                desc: "Блокирует трекинг по умолчанию. Минус 20-30% данных.",
                icon: Lock,
                color: "text-red-400",
                bg: "bg-red-500/10",
              },
              {
                title: "Ad Blockers",
                desc: "30-40% пользователей блокируют скрипты аналитики.",
                icon: Zap,
                color: "text-yellow-400",
                bg: "bg-yellow-500/10",
              },
              {
                title: "Cookies",
                desc: "Браузеры ограничивают срок жизни cookies до 7 дней.",
                icon: Server,
                color: "text-blue-400",
                bg: "bg-blue-500/10",
              },
              {
                title: "Ошибки",
                desc: "Неверная атрибуция и дублирование транзакций.",
                icon: BarChart3,
                color: "text-purple-400",
                bg: "bg-purple-500/10",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-4 ${item.color} group-hover:scale-110 transition-transform`}
                >
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution - Interactive List */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.1),transparent_70%)]" />
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Решение: Server-side Tracking
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Мы переносим сбор данных с браузера пользователя на ваш сервер.
              Это делает аналитику неуязвимой для блокировщиков.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Server-side GTM",
                desc: "Установка контейнера на облачный сервер (Stape.io).",
                icon: Database,
              },
              {
                title: "Meta CAPI (Facebook)",
                desc: "Передача событий (Purchase, Lead) напрямую в API Facebook.",
                icon: Zap,
              },
              {
                title: "Google Enhanced Conversions",
                desc: "Хеширование данных пользователей для точного матчинга.",
                icon: ShieldCheck,
              },
              {
                title: "Data Layer Validation",
                desc: "Проверка корректности данных на уровне кода сайта.",
                icon: Code2,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-6 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-green-500/30 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results - Bento Style */}
      <section className="py-20 bg-ha-bg-soft border-t border-ha-border-dark px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Что это дает?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-slate-900 border border-white/10 hover:border-green-500/30 transition-colors">
              <p className="text-4xl md:text-5xl font-bold text-green-500 mb-4">
                85%
              </p>
              <p className="text-slate-400">Точность данных вместо 60%</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-900 border border-white/10 hover:border-green-500/30 transition-colors">
              <p className="text-4xl md:text-5xl font-bold text-green-500 mb-4">
                +30%
              </p>
              <p className="text-slate-400">Больше отслеженных конверсий</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-900 border border-white/10 hover:border-green-500/30 transition-colors">
              <p className="text-4xl md:text-5xl font-bold text-green-500 mb-4">
                -20%
              </p>
              <p className="text-slate-400">Снижение стоимости лида (CPA)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5">
              <BarChart3 className="w-64 h-64" />
            </div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Стоимость настройки
                </h3>
                <p className="text-slate-400 mb-6">
                  Полный комплекс server-side отслеживания.
                </p>
                <div className="text-4xl font-bold text-white mb-2">
                  от 8,000 CZK
                </div>
                <p className="text-sm text-slate-500">Единоразовый платеж</p>
              </div>
              <div className="space-y-4">
                {[
                  "Настройка GTM Server-side",
                  "Meta CAPI + Google Enhanced",
                  "Настройка событий GA4",
                  "Верификация данных",
                ].map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-slate-300"
                  >
                    <Check className="w-5 h-5 text-green-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-ha-bg-soft border-t border-ha-border-dark">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Хватит терять данные
          </h2>
          <p className="text-xl text-slate-400 mb-10">
            Настроим аналитику, которой можно доверять.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => open({ service: "tracking" })}
              className="rounded-full px-10 h-14 text-lg bg-green-600 hover:bg-green-700 text-white shadow-xl shadow-green-500/20"
            >
              Настроить трекинг
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
