import { Button } from "@/components/ui/button";
import { Check, BarChart3, Lock, Server, Zap } from "lucide-react";
import Link from "next/link";
import TrackingAudit from "@/components/sections/TrackingAudit";

export const metadata = {
  title: "Аналитика и Tracking - HaloAgency",
  description:
    "Server-side tracking + Meta CAPI. Восстанавливаем 20-40% потерянных данных. Точность 70-85%.",
};

export default function TrackingPage() {
  return (
    <main className="min-h-screen bg-ha-bg pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-ha-bg">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.1),transparent_50%)]" />
        </div>

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-8">
            <BarChart3 className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium text-green-300 tracking-wide uppercase">
              Advanced Analytics
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Видеть <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              каждую конверсию
            </span>
          </h1>

          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Server-side tracking и Meta CAPI. Мы восстанавливаем 20-40% данных,
            которые теряются из-за блокировщиков и iOS.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="rounded-full px-8 bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-500/25"
              asChild
            >
              <Link href="/#contact">Настроить трекинг</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800"
              asChild
            >
              <Link href="/packages/leads">Пакет "Лид-машина"</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tracking Audit */}
      <TrackingAudit />

      {/* The Problem */}
      <section className="py-20 border-y border-ha-border-dark bg-ha-bg-soft">
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
              },
              {
                title: "Ad Blockers",
                desc: "30-40% пользователей блокируют скрипты аналитики.",
                icon: Zap,
              },
              {
                title: "Cookies",
                desc: "Браузеры ограничивают срок жизни cookies до 7 дней.",
                icon: Server,
              },
              {
                title: "Ошибки",
                desc: "Неверная атрибуция и дублирование транзакций.",
                icon: BarChart3,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-ha-card-dark border border-ha-border-dark rounded-2xl p-6 hover:border-green-500/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center mb-4 text-slate-300">
                  <item.icon className="w-5 h-5" />
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

      {/* The Solution */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Решение: Server-side Tracking
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Мы переносим сбор данных с браузера пользователя на ваш сервер.
              Это делает аналитику неуязвимой для блокировщиков.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "Server-side GTM",
                desc: "Установка контейнера на облачный сервер (Stape.io).",
              },
              {
                title: "Meta CAPI (Facebook)",
                desc: "Передача событий (Purchase, Lead) напрямую в API Facebook.",
              },
              {
                title: "Google Enhanced Conversions",
                desc: "Хеширование данных пользователей для точного матчинга.",
              },
              {
                title: "Data Layer Validation",
                desc: "Проверка корректности данных на уровне кода сайта.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-6 p-6 rounded-2xl bg-ha-card-dark border border-ha-border-dark"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 font-bold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-ha-bg-soft border-t border-ha-border-dark px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Что это дает?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-ha-card-dark border border-ha-border-dark">
              <p className="text-4xl md:text-5xl font-bold text-green-500 mb-4">
                85%
              </p>
              <p className="text-slate-400">Точность данных вместо 60%</p>
            </div>
            <div className="p-8 rounded-3xl bg-ha-card-dark border border-ha-border-dark">
              <p className="text-4xl md:text-5xl font-bold text-green-500 mb-4">
                +30%
              </p>
              <p className="text-slate-400">Больше отслеженных конверсий</p>
            </div>
            <div className="p-8 rounded-3xl bg-ha-card-dark border border-ha-border-dark">
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
          <div className="bg-ha-card-dark border border-ha-border-dark rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Стоимость настройки
                </h3>
                <p className="text-slate-400 mb-6">
                  Полный комплекс server-side отслеживания.
                </p>
                <div className="text-4xl font-bold text-white mb-2">
                  8,000 CZK
                </div>
                <p className="text-sm text-slate-500">Единоразовый платеж</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-300">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Настройка GTM Server-side</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Meta CAPI + Google Enhanced</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Настройка событий GA4</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Верификация данных</span>
                </div>
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
              className="rounded-full px-10 h-14 text-lg bg-green-600 hover:bg-green-700 text-white shadow-xl shadow-green-500/20"
              asChild
            >
              <Link href="/#contact">Настроить трекинг</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
