"use client";

import { 
  BadgeCheck, 
  Calendar,
  FileCheck,
  HeartHandshake,
  LifeBuoy,
  RefreshCcw,
  Shield,
} from "lucide-react";
import { CSSScrollAnimation, CSSStagger, CSSStaggerItem } from "@/components/ui/css-scroll-animation";

const guarantees = [
  {
    id: "deadline",
    icon: Calendar,
    title: "Сроки зафиксированы",
    clause: "§1",
    description: "Дедлайн прописан в договоре. Если не укладываемся — скидка 10% за каждую неделю задержки.",
    seal: "ПОДТВЕРЖДЕНО",
  },
  {
    id: "revisions",
    icon: RefreshCcw,
    title: "Бесплатные правки",
    clause: "§2",
    description: "До 3 раундов правок включено в стоимость. Без скрытых доплат и «это не входило».",
    seal: "ВКЛЮЧЕНО",
  },
  {
    id: "support",
    icon: LifeBuoy,
    title: "30 дней поддержки",
    clause: "§3",
    description: "После запуска — месяц бесплатной технической поддержки. Баги, вопросы, мелкие доработки.",
    seal: "ГАРАНТИРОВАНО",
  },
  {
    id: "ownership",
    icon: FileCheck,
    title: "Код — ваш",
    clause: "§4",
    description: "Полная передача исходников и прав. Никакой привязки к агентству. Хотите уйти — уходите с кодом.",
    seal: "ПОЛНЫЕ ПРАВА",
  },
];

const trustBadges = [
  { icon: Shield, label: "NDA по запросу" },
  { icon: BadgeCheck, label: "Договор оферты" },
  { icon: HeartHandshake, label: "Прозрачные условия" },
];

function GuaranteeCard({ guarantee, index }: { guarantee: typeof guarantees[0]; index: number }) {
  return (
    <CSSStaggerItem index={index}>
      <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-blue-500/5 via-slate-900/50 to-slate-900/50 border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 h-full">
        {/* Clause Number - Document Style */}
        <div className="absolute top-4 right-4 text-xl font-serif font-bold text-blue-400/30">
          {guarantee.clause}
        </div>

        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-5 group-hover:bg-blue-500/15 group-hover:border-blue-500/30 transition-all duration-300">
          <guarantee.icon className="w-6 h-6" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors">
          {guarantee.title}
        </h3>
        
        <p className="text-slate-400 text-sm leading-relaxed mb-5">
          {guarantee.description}
        </p>

        {/* Seal Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs font-bold tracking-wider text-blue-300">
          <BadgeCheck className="w-3.5 h-3.5" />
          {guarantee.seal}
        </div>
      </div>
    </CSSStaggerItem>
  );
}

export default function WebGuarantees() {
  return (
    <section className="py-24 bg-ha-bg relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        {/* Header */}
        <CSSScrollAnimation className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Shield className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">Гарантии</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Гарантии в договоре
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Не просто обещания — юридически закреплённые обязательства
          </p>
        </CSSScrollAnimation>

        {/* Trust Badges Row */}
        <CSSStagger className="flex flex-wrap justify-center gap-4 mb-12">
          {trustBadges.map((badge, index) => (
            <CSSStaggerItem key={badge.label} index={index}>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/5 border border-blue-500/10">
                <badge.icon className="w-4 h-4 text-blue-400/60" />
                <span className="text-sm text-slate-400">{badge.label}</span>
              </div>
            </CSSStaggerItem>
          ))}
        </CSSStagger>

        {/* Guarantees Grid */}
        <CSSStagger className="grid md:grid-cols-2 gap-6">
          {guarantees.map((guarantee, index) => (
            <GuaranteeCard key={guarantee.id} guarantee={guarantee} index={index} />
          ))}
        </CSSStagger>

        {/* Bottom Note - Plain text */}
        <CSSScrollAnimation delay={0.3} className="mt-12 text-center text-sm text-slate-500">
          Все условия обсуждаются индивидуально и фиксируются до начала работ
        </CSSScrollAnimation>
      </div>
    </section>
  );
}
