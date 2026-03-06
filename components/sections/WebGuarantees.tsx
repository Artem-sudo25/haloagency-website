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
      <div className="group relative p-8 rounded-3xl bg-white border-2 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#1A1A1A] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_#1A1A1A] transition-all duration-300 h-full">
        {/* Clause Number - Document Style */}
        <div className="absolute top-6 right-6 text-3xl font-extrabold text-[#1A1A1A]/20" style={{ fontFamily: 'var(--font-display)' }}>
          {guarantee.clause}
        </div>

        {/* Icon */}
        <div className="w-16 h-16 rounded-2xl bg-[#06D6A0] border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] flex items-center justify-center mb-6 z-10 relative">
          <guarantee.icon className="w-8 h-8 text-[#1A1A1A]" />
        </div>

        {/* Content */}
        <h3 className="text-2xl font-extrabold text-[#1A1A1A] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
          {guarantee.title}
        </h3>

        <p className="text-[#1A1A1A]/80 font-medium text-lg leading-relaxed mb-6">
          {guarantee.description}
        </p>

        {/* Seal Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FFD166] border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] text-sm font-bold tracking-wider text-[#1A1A1A]">
          <BadgeCheck className="w-5 h-5" />
          {guarantee.seal}
        </div>
      </div>
    </CSSStaggerItem>
  );
}

export default function WebGuarantees() {
  return (
    <section className="py-16 md:py-24 bg-[#F5F5F7] border-y-2 border-[#1A1A1A] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#06D6A0]/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        {/* Header */}
        <CSSScrollAnimation className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#06D6A0] border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] mb-6">
            <Shield className="w-5 h-5 text-[#1A1A1A]" />
            <span className="text-sm font-bold text-[#1A1A1A] uppercase tracking-wider">Гарантии</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-[#1A1A1A] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Гарантии в договоре
          </h2>

          <p className="text-[#1A1A1A]/80 font-medium text-xl md:text-2xl max-w-2xl mx-auto">
            Не просто обещания — юридически закреплённые обязательства
          </p>
        </CSSScrollAnimation>

        {/* Trust Badges Row */}
        <CSSStagger className="flex flex-wrap justify-center gap-4 mb-16">
          {trustBadges.map((badge, index) => (
            <CSSStaggerItem key={badge.label} index={index}>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A]">
                <badge.icon className="w-5 h-5 text-[#FF3366]" />
                <span className="text-base font-bold text-[#1A1A1A]">{badge.label}</span>
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
        <CSSScrollAnimation delay={0.3} className="mt-16 text-center text-lg font-bold text-[#1A1A1A]/80 bg-white border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] p-4 rounded-2xl mx-auto max-w-2xl">
          Все условия обсуждаются индивидуально и фиксируются до начала работ
        </CSSScrollAnimation>
      </div>
    </section>
  );
}
