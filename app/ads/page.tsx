import { Button } from "@/components/ui/button";
import { Check, Megaphone, Target, BarChart3, Zap } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Реклама Google Ads + Meta - HaloAgency",
  description: "Google Ads + Meta с правильным трекингом. Настройка за 2 дня, ведение от 8k/мес.",
};

export default function AdsPage() {
  return (
    <main className="min-h-screen bg-ha-bg pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-ha-bg">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(249,115,22,0.1),transparent_50%)]" />
        </div>

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8">
            <Megaphone className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-medium text-orange-300 tracking-wide uppercase">
              Performance Marketing
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Реклама, которая <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
              окупается
            </span>
          </h1>

          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Google Ads и Meta Ads с правильным трекингом. Мы не просто приводим клики, мы приводим клиентов, которых можно посчитать.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="rounded-full px-8 bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/25"
              asChild
            >
              <Link href="/#contact">Запустить рекламу</Link>
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

      {/* Channels */}
      <section className="py-20 border-y border-ha-border-dark bg-ha-bg-soft">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-ha-card-dark border border-ha-border-dark rounded-3xl p-8 hover:border-orange-500/30 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Google Ads</h3>
              <ul className="space-y-3">
                {[
                  "Поисковая реклама (Search)",
                  "Google Shopping (для e-commerce)",
                  "Ремаркетинг и Performance Max",
                  "YouTube реклама"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <Check className="w-4 h-4 text-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-ha-card-dark border border-ha-border-dark rounded-3xl p-8 hover:border-orange-500/30 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6">
                <Megaphone className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Meta Ads (FB + Insta)</h3>
              <ul className="space-y-3">
                {[
                  "Таргетинг по интересам и поведению",
                  "Lookalike аудитории (похожие)",
                  "Advantage+ автоматические кампании",
                  "Динамический ремаркетинг"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <Check className="w-4 h-4 text-indigo-500" />
                    {item}
                  </li>
                ))}
              </ul>
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
              Без server-side tracking вы теряете 30-50% данных о конверсиях из-за блокировщиков и iOS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-500/5 border border-red-500/20 rounded-3xl p-8">
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

            <div className="bg-green-500/5 border border-green-500/20 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center gap-2">
                <span className="text-2xl">✅</span> Наш подход (Server-side)
              </h3>
              <ul className="space-y-4 text-slate-300">
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
          <div className="bg-ha-card-dark border border-ha-border-dark rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 divide-y md:divide-y-0 md:divide-x divide-slate-800">
              <div className="px-4">
                <p className="text-sm text-slate-500 mb-2 uppercase tracking-wide">Настройка</p>
                <p className="text-3xl font-bold text-white">8,000 CZK</p>
                <p className="text-xs text-slate-500 mt-2">Единоразово</p>
              </div>
              <div className="px-4 pt-8 md:pt-0">
                <p className="text-sm text-slate-500 mb-2 uppercase tracking-wide">Ведение</p>
                <p className="text-3xl font-bold text-white">8,000 CZK</p>
                <p className="text-xs text-slate-500 mt-2">В месяц</p>
              </div>
              <div className="px-4 pt-8 md:pt-0">
                <p className="text-sm text-slate-500 mb-2 uppercase tracking-wide">Бюджет</p>
                <p className="text-3xl font-bold text-white">15k+ CZK</p>
                <p className="text-xs text-slate-500 mt-2">Рекомендуемый</p>
              </div>
            </div>
            <div className="bg-blue-500/10 rounded-xl p-4 text-blue-300 text-sm">
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
              className="rounded-full px-10 h-14 text-lg bg-orange-500 hover:bg-orange-600 text-white shadow-xl shadow-orange-500/20"
              asChild
            >
              <Link href="/#contact">Запустить рекламу</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
