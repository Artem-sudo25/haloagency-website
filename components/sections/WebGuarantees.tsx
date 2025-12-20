"use client";

import { motion } from "framer-motion";
import { 
  BadgeCheck, 
  Calendar,
  FileCheck,
  HeartHandshake,
  LifeBuoy,
  RefreshCcw,
  Shield,
  Sparkles,
} from "lucide-react";

const guarantees = [
  {
    id: "deadline",
    icon: Calendar,
    title: "Сроки зафиксированы",
    clause: "§1",
    description: "Дедлайн прописан в договоре. Если не укладываемся — скидка 10% за каждую неделю задержки.",
    seal: "VERIFIED",
    color: "blue",
  },
  {
    id: "revisions",
    icon: RefreshCcw,
    title: "Бесплатные правки",
    clause: "§2",
    description: "До 3 раундов правок включено в стоимость. Без скрытых доплат и «это не входило».",
    seal: "INCLUDED",
    color: "emerald",
  },
  {
    id: "support",
    icon: LifeBuoy,
    title: "30 дней поддержки",
    clause: "§3",
    description: "После запуска — месяц бесплатной технической поддержки. Баги, вопросы, мелкие доработки.",
    seal: "GUARANTEED",
    color: "purple",
  },
  {
    id: "ownership",
    icon: FileCheck,
    title: "Код — ваш",
    clause: "§4",
    description: "Полная передача исходников и прав. Никакой привязки к агентству. Хотите уйти — уходите с кодом.",
    seal: "FULL RIGHTS",
    color: "amber",
  },
];

const trustBadges = [
  { icon: Shield, label: "NDA по запросу" },
  { icon: BadgeCheck, label: "Договор оферты" },
  { icon: HeartHandshake, label: "Прозрачные условия" },
];

function GuaranteeCard({ guarantee, index }: { guarantee: typeof guarantees[0]; index: number }) {
  const colorClasses = {
    blue: {
      bg: "from-blue-500/10 via-blue-500/5 to-transparent",
      border: "border-blue-500/20 hover:border-blue-500/40",
      icon: "text-blue-400 bg-blue-500/20 border-blue-500/30",
      seal: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      clause: "text-blue-400/60",
    },
    emerald: {
      bg: "from-emerald-500/10 via-emerald-500/5 to-transparent",
      border: "border-emerald-500/20 hover:border-emerald-500/40",
      icon: "text-emerald-400 bg-emerald-500/20 border-emerald-500/30",
      seal: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
      clause: "text-emerald-400/60",
    },
    purple: {
      bg: "from-purple-500/10 via-purple-500/5 to-transparent",
      border: "border-purple-500/20 hover:border-purple-500/40",
      icon: "text-purple-400 bg-purple-500/20 border-purple-500/30",
      seal: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      clause: "text-purple-400/60",
    },
    amber: {
      bg: "from-amber-500/10 via-amber-500/5 to-transparent",
      border: "border-amber-500/20 hover:border-amber-500/40",
      icon: "text-amber-400 bg-amber-500/20 border-amber-500/30",
      seal: "bg-amber-500/20 text-amber-300 border-amber-500/30",
      clause: "text-amber-400/60",
    },
  };

  const colors = colorClasses[guarantee.color as keyof typeof colorClasses];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`
        group relative p-6 rounded-2xl 
        bg-gradient-to-br ${colors.bg}
        border ${colors.border}
        transition-all duration-500
        hover:shadow-lg hover:shadow-white/5
      `}
    >
      {/* Clause Number - Document Style */}
      <div className={`absolute top-4 right-4 text-xl font-serif font-bold ${colors.clause}`}>
        {guarantee.clause}
      </div>

      {/* Icon */}
      <div className={`
        w-12 h-12 rounded-xl ${colors.icon} border
        flex items-center justify-center mb-5
        group-hover:scale-110 transition-transform duration-300
      `}>
        <guarantee.icon className="w-6 h-6" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white/90 transition-colors">
        {guarantee.title}
      </h3>
      
      <p className="text-slate-400 text-sm leading-relaxed mb-5">
        {guarantee.description}
      </p>

      {/* Seal Badge */}
      <div className={`
        inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg
        ${colors.seal} border text-xs font-bold tracking-wider
      `}>
        <BadgeCheck className="w-3.5 h-3.5" />
        {guarantee.seal}
      </div>

      {/* Corner Decoration */}
      <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden rounded-br-2xl pointer-events-none">
        <div className={`
          absolute -bottom-8 -right-8 w-16 h-16 rotate-45
          bg-gradient-to-t ${colors.bg.split(" ")[0]} to-transparent
          opacity-50
        `} />
      </div>
    </motion.div>
  );
}

export default function WebGuarantees() {
  return (
    <section className="py-24 bg-ha-bg relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-emerald-500/5 rounded-full blur-[150px]" />
        
        {/* Legal Paper Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 31px,
              rgba(255,255,255,0.5) 31px,
              rgba(255,255,255,0.5) 32px
            )`,
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-slate-400 font-medium">Service Level Agreement</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Гарантии <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400">в договоре</span>
          </h2>
          
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Не просто обещания — юридически закреплённые обязательства
          </p>
        </motion.div>

        {/* Trust Badges Row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {trustBadges.map((badge, index) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-white/5"
            >
              <badge.icon className="w-4 h-4 text-slate-500" />
              <span className="text-sm text-slate-400">{badge.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Guarantees Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {guarantees.map((guarantee, index) => (
            <GuaranteeCard key={guarantee.id} guarantee={guarantee} index={index} />
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-slate-900/50 border border-white/5">
            <Sparkles className="w-5 h-5 text-blue-400" />
            <p className="text-slate-400 text-sm">
              Все условия обсуждаются индивидуально и фиксируются до начала работ
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

