"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  CheckCircle2, 
  Clock, 
  MessageSquare, 
  Sparkles,
  Star,
  TrendingUp,
  Zap
} from "lucide-react";
import { useEffect, useState, useRef } from "react";

// Activity feed items
const activityFeed = [
  {
    id: 1,
    type: "launch",
    project: "Nejbalonky.cz",
    message: "E-commerce запущен в продакшен",
    time: "2 дня назад",
    icon: Zap,
    color: "emerald",
  },
  {
    id: 2,
    type: "review",
    name: "Мартин К.",
    company: "ProPradlo",
    message: "Сайт работает быстрее конкурентов. Заявки выросли на 40%",
    rating: 5,
    avatar: "MK",
    time: "1 неделю назад",
  },
  {
    id: 3,
    type: "metric",
    project: "Segway Tours",
    metric: "PageSpeed",
    value: "98",
    change: "+23",
    time: "3 дня назад",
  },
  {
    id: 4,
    type: "review",
    name: "Анна С.",
    company: "Beauty Studio",
    message: "Наконец-то сайт, который не стыдно показать клиентам",
    rating: 5,
    avatar: "АС",
    time: "2 недели назад",
  },
  {
    id: 5,
    type: "launch",
    project: "CryptoTrading Pro",
    message: "Landing page готов к рекламе",
    time: "5 дней назад",
    icon: CheckCircle2,
    color: "blue",
  },
  {
    id: 6,
    type: "review",
    name: "Петр Н.",
    company: "LogiTrans",
    message: "Сделали за 10 дней то, что другие обещали за 2 месяца",
    rating: 5,
    avatar: "ПН",
    time: "3 недели назад",
  },
];

// Stats for the dashboard
const stats = [
  { 
    label: "Проектов",
    value: "50+",
    subtext: "запущено",
    icon: Sparkles,
    color: "blue",
  },
  { 
    label: "В срок",
    value: "100%",
    subtext: "delivery rate",
    icon: Clock,
    color: "emerald",
  },
  { 
    label: "PageSpeed",
    value: "95+",
    subtext: "средний балл",
    icon: TrendingUp,
    color: "purple",
  },
];

function ActivityItem({ item, index }: { item: typeof activityFeed[0]; index: number }) {
  if (item.type === "review") {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ delay: index * 0.1 }}
        className="group relative p-5 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-white/10 transition-all duration-300"
      >
        <div className="flex gap-4">
          {/* Avatar */}
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 border border-white/10 flex items-center justify-center flex-shrink-0">
            <span className="text-sm font-bold text-white/80">
              {item.avatar}
            </span>
          </div>
          
          <div className="flex-1 min-w-0">
            {/* Header */}
            <div className="flex items-center gap-2 mb-2">
              <span className="font-semibold text-white text-sm">
                {item.name}
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-xs text-slate-500">
                {item.company}
              </span>
            </div>
            
            {/* Message */}
            <p className="text-slate-300 text-sm leading-relaxed mb-3">
              "{item.message}"
            </p>
            
            {/* Footer */}
            <div className="flex items-center justify-between">
              <div className="flex gap-0.5">
                {Array.from({ length: item.rating || 0 }).map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-3.5 h-3.5 text-amber-400 fill-amber-400" 
                  />
                ))}
              </div>
              <span className="text-xs text-slate-600">{item.time}</span>
            </div>
          </div>
        </div>
        
        {/* Quote decoration */}
        <MessageSquare className="absolute top-4 right-4 w-5 h-5 text-white/5 group-hover:text-white/10 transition-colors" />
      </motion.div>
    );
  }

  if (item.type === "launch") {
    const IconComponent = item.icon || Zap;
    const colorClasses = {
      emerald: "from-emerald-500/20 to-emerald-500/5 border-emerald-500/30 text-emerald-400",
      blue: "from-blue-500/20 to-blue-500/5 border-blue-500/30 text-blue-400",
    };
    const colorClass = colorClasses[item.color as keyof typeof colorClasses] || colorClasses.blue;
    
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ delay: index * 0.1 }}
        className={`
          relative p-4 rounded-xl bg-gradient-to-r ${colorClass.split(" ").slice(0, 2).join(" ")}
          border ${colorClass.split(" ")[2]}
        `}
      >
        <div className="flex items-center gap-3">
          <div className={`
            w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center
          `}>
            <IconComponent className={`w-4 h-4 ${colorClass.split(" ")[3]}`} />
          </div>
          <div className="flex-1">
            <p className="text-white text-sm font-medium">{item.project}</p>
            <p className={`text-xs ${colorClass.split(" ")[3]}`}>{item.message}</p>
          </div>
          <span className="text-xs text-slate-500">{item.time}</span>
        </div>
      </motion.div>
    );
  }

  if (item.type === "metric") {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ delay: index * 0.1 }}
        className="relative p-4 rounded-xl bg-slate-900/60 border border-white/5"
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-purple-400" />
          </div>
          <div className="flex-1">
            <p className="text-white text-sm font-medium">{item.project}</p>
            <p className="text-xs text-slate-500">{item.metric} Score</p>
          </div>
          <div className="text-right">
            <span className="text-xl font-bold text-white">{item.value}</span>
            <span className="text-xs text-emerald-400 ml-1">{item.change}</span>
          </div>
        </div>
      </motion.div>
    );
  }

  return null;
}

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const targetValue = parseInt(stat.value) || 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate counter
          let start = 0;
          const duration = 1500;
          const increment = targetValue / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= targetValue) {
              setCount(targetValue);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [targetValue]);

  const colorClasses = {
    blue: "from-blue-500/20 to-blue-500/5 border-blue-500/20 text-blue-400",
    emerald: "from-emerald-500/20 to-emerald-500/5 border-emerald-500/20 text-emerald-400",
    purple: "from-purple-500/20 to-purple-500/5 border-purple-500/20 text-purple-400",
  };

  const colorClass = colorClasses[stat.color as keyof typeof colorClasses];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className={`
        relative p-6 rounded-2xl bg-gradient-to-br ${colorClass.split(" ").slice(0, 2).join(" ")}
        border ${colorClass.split(" ")[2]} group hover:scale-[1.02] transition-transform duration-300
      `}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`
          w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center
          group-hover:scale-110 transition-transform duration-300
        `}>
          <stat.icon className={`w-5 h-5 ${colorClass.split(" ")[3]}`} />
        </div>
        <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-white/40 transition-colors" />
      </div>
      
      <div className="space-y-1">
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold text-white">
            {stat.value.includes("+") ? count + "+" : stat.value.includes("%") ? count + "%" : count}
          </span>
        </div>
        <p className="text-sm text-slate-400">{stat.label}</p>
        <p className="text-xs text-slate-600">{stat.subtext}</p>
      </div>
    </motion.div>
  );
}

export default function WebSocialProof() {
  const [visibleItems, setVisibleItems] = useState(activityFeed.slice(0, 4));
  
  // Rotate activity feed items
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleItems(prev => {
        const currentFirstIndex = activityFeed.findIndex(item => item.id === prev[0].id);
        const nextIndex = (currentFirstIndex + 1) % activityFeed.length;
        const newItems = [];
        for (let i = 0; i < 4; i++) {
          newItems.push(activityFeed[(nextIndex + i) % activityFeed.length]);
        }
        return newItems;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-[#070c16] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-gradient-to-bl from-blue-500/5 via-purple-500/3 to-transparent rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-gradient-to-tr from-emerald-500/5 to-transparent rounded-full blur-[100px]" />
        
        {/* Dot Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
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
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-slate-400">Live Activity</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Что говорят клиенты
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Реальные отзывы и метрики от компаний, с которыми мы работали
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Stats Dashboard */}
          <div className="lg:col-span-1 space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-wider text-slate-500 font-medium mb-2 flex items-center gap-2"
            >
              <span className="w-8 h-px bg-slate-700" />
              Метрики
            </motion.div>
            
            {stats.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} />
            ))}
          </div>

          {/* Activity Feed */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-wider text-slate-500 font-medium mb-4 flex items-center gap-2"
            >
              <span className="w-8 h-px bg-slate-700" />
              Последняя активность
            </motion.div>

            <div className="space-y-3">
              <AnimatePresence mode="popLayout">
                {visibleItems.map((item, index) => (
                  <ActivityItem key={item.id} item={item} index={index} />
                ))}
              </AnimatePresence>
            </div>

            {/* Feed Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between"
            >
              <span className="text-xs text-slate-600">
                Обновляется в реальном времени
              </span>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-slate-500">Live</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

