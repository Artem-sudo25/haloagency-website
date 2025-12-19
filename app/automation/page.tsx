"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Bot,
    Cpu,
    Database,
    Link as LinkIcon,
    MessageSquare,
    Sparkles,
    Workflow,
    Zap,
    Mail,
} from "lucide-react";
import Link from "next/link";
import FAQ from "@/components/sections/FAQ";
import { Button } from "@/components/ui/button";
import { SpotlightHero } from "@/components/ui/spotlight";
import { useContactModal } from "@/context/contact-modal-context";

// Custom Python Icon
function CodePython(props: any) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z" />
            <path d="M10 8h4v8" />
        </svg>
    );
}

// Data Definitions
const techStack = [
    { name: "Make / n8n", label: "Orchestration", icon: Workflow },
    { name: "OpenAI API", label: "Intelligence", icon: Bot },
    { name: "Python", label: "Scripting", icon: CodePython },
    { name: "AirTable", label: "Database", icon: Database },
];

const services = [
    {
        id: "chatbots",
        title: "AI Ассистенты",
        description:
            "Умные чат-боты для поддержки 24/7. Обработка заявок, ответы на вопросы и запись клиентов.",
        price: "от 15,000 CZK",
        time: "1-2 недели",
        icon: <Bot className="w-6 h-6" />,
        colSpan: false,
        gradient: "from-blue-500/20 to-cyan-500/20",
        border: "group-hover:border-blue-500/50",
        text: "group-hover:text-blue-400",
        bg: "bg-blue-500/10",
    },
    {
        id: "crm",
        title: "CRM Интеграции",
        description:
            "Автоматическая передача лидов, уведомления в Telegram, синхронизация баз данных.",
        price: "от 10,000 CZK",
        time: "3-5 дней",
        icon: <Database className="w-6 h-6" />,
        colSpan: false,
        gradient: "from-purple-500/20 to-pink-500/20",
        border: "group-hover:border-purple-500/50",
        text: "group-hover:text-purple-400",
        bg: "bg-purple-500/10",
    },
    {
        id: "parsing",
        title: "Парсинг и Данные",
        description:
            "Сбор данных с сайтов конкурентов, обогащение лидов, автоматическая отчетность.",
        price: "от 20,000 CZK",
        time: "2-3 недели",
        icon: <Zap className="w-6 h-6" />,
        colSpan: false,
        gradient: "from-emerald-500/20 to-green-500/20",
        border: "group-hover:border-emerald-500/50",
        text: "group-hover:text-emerald-400",
        bg: "bg-emerald-500/10",
    },
];

export default function AutomationPage() {
    const { open } = useContactModal();

    const openModal = (service: string) => {
        open({ service: "automation", message: `Интересует услуга: ${service}` });
    };

    // Prevent browser scroll restoration and ensure page starts at top
    useEffect(() => {
        if (typeof window !== "undefined") {
            // Disable automatic scroll restoration
            if ("scrollRestoration" in window.history) {
                window.history.scrollRestoration = "manual";
            }
            // Scroll to top on mount
            window.scrollTo(0, 0);
        }
    }, []);

    return (
        <main className="min-h-screen bg-ha-bg pt-20 overflow-hidden">
            {/* 1. Hero Section */}
            <section className="relative py-6 md:py-32 px-4">
                <SpotlightHero />

                <div className="container mx-auto max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="text-left">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8"
                            >
                                <Cpu className="w-4 h-4 text-purple-400" />
                                <span className="text-sm font-medium text-purple-300 tracking-wide uppercase">
                                    Automation & AI
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
                            >
                                Бизнес на <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                                    автопилоте
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-xl text-slate-400 mb-10 max-w-xl leading-relaxed"
                            >
                                Внедряем AI и автоматизацию, чтобы вы забыли о рутине. Экономьте
                                до 40 часов в неделю на повторяющихся задачах.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <Button
                                    size="lg"
                                    onClick={() => openModal("Automation General")}
                                    className="rounded-full px-8 bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/25 h-12"
                                >
                                    Автоматизировать
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="rounded-full px-8 border-white/10 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm h-12"
                                    asChild
                                >
                                    <Link href="/#packages">Цены</Link>
                                </Button>
                            </motion.div>
                        </div>

                        {/* Hero Graphic: Automation Workflow UI */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="relative hidden lg:block"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl blur opacity-20 animate-pulse" />
                            <div className="relative bg-[#0f172a]/90 border border-slate-700/50 rounded-xl shadow-2xl p-6 backdrop-blur-xl overflow-hidden">
                                {/* Header */}
                                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                                            <Workflow className="w-5 h-5 text-purple-400" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-white">
                                                Lead Processing
                                            </div>
                                            <div className="text-xs text-slate-400">
                                                Running • 24/7
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-xs text-green-400 font-medium">
                                            Active
                                        </span>
                                    </div>
                                </div>

                                {/* Workflow Nodes */}
                                <div className="relative space-y-4">
                                    {/* Connecting Line */}
                                    <div className="absolute left-[27px] top-8 bottom-8 w-0.5 bg-slate-800" />
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{ height: "100%" }}
                                        transition={{
                                            duration: 2,
                                            ease: "linear",
                                            repeat: Infinity,
                                            repeatDelay: 1,
                                        }}
                                        className="absolute left-[27px] top-8 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 opacity-70 origin-top"
                                    />

                                    {[
                                        {
                                            icon: MessageSquare,
                                            title: "New Lead",
                                            sub: "Website Form",
                                            color: "text-blue-400",
                                            bg: "bg-blue-500/10",
                                            border: "border-blue-500/20",
                                        },
                                        {
                                            icon: Database,
                                            title: "Enrich Data",
                                            sub: "Clearbit API",
                                            color: "text-orange-400",
                                            bg: "bg-orange-500/10",
                                            border: "border-orange-500/20",
                                        },
                                        {
                                            icon: Bot,
                                            title: "AI Analysis",
                                            sub: "OpenAI GPT-4",
                                            color: "text-purple-400",
                                            bg: "bg-purple-500/10",
                                            border: "border-purple-500/20",
                                        },
                                        {
                                            icon: Mail,
                                            title: "Send Offer",
                                            sub: "Gmail SMTP",
                                            color: "text-green-400",
                                            bg: "bg-green-500/10",
                                            border: "border-green-500/20",
                                        },
                                    ].map((node, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.5 + i * 0.2 }}
                                            className="relative z-10 flex items-center gap-4 p-3 rounded-xl bg-slate-900/50 border border-white/5 hover:border-white/10 transition-colors"
                                        >
                                            <div
                                                className={`w-14 h-14 rounded-xl ${node.bg} ${node.border} border flex items-center justify-center shrink-0`}
                                            >
                                                <node.icon className={`w-6 h-6 ${node.color}`} />
                                            </div>
                                            <div className="flex-grow">
                                                <div className="flex items-center justify-between mb-1">
                                                    <span className="font-medium text-slate-200">
                                                        {node.title}
                                                    </span>
                                                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-slate-500 font-mono">
                                                        {100 + i * 50}ms
                                                    </span>
                                                </div>
                                                <span className="text-xs text-slate-500 block">
                                                    {node.sub}
                                                </span>
                                            </div>
                                            {/* Status indicator */}
                                            <motion.div
                                                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    delay: i * 0.5,
                                                }}
                                                className="w-2 h-2 rounded-full bg-green-500/50"
                                            />
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Automation Stats */}
                                <div className="mt-6 pt-4 border-t border-white/5 grid grid-cols-2 gap-4">
                                    <div className="p-3 rounded-lg bg-white/5">
                                        <div className="text-xs text-slate-400 mb-1">
                                            Time Saved
                                        </div>
                                        <div className="text-lg font-bold text-white">
                                            42h{" "}
                                            <span className="text-xs font-normal text-slate-500">
                                                / week
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-3 rounded-lg bg-white/5">
                                        <div className="text-xs text-slate-400 mb-1">
                                            Money Saved
                                        </div>
                                        <div className="text-lg font-bold text-white">
                                            $2,400{" "}
                                            <span className="text-xs font-normal text-slate-500">
                                                / mo
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. Services (What we automate) */}
            <section className="py-20 bg-ha-bg-soft">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Что мы автоматизируем
                        </h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            Убираем человеческий фактор там, где это возможно. Быстро, точно и
                            без выходных.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className={`group p-8 rounded-3xl bg-slate-900/50 border border-white/10 backdrop-blur-sm transition-all duration-500 flex flex-col relative overflow-hidden ${service.border}`}
                            >
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                                />

                                <div className="relative z-10 h-full flex flex-col">
                                    <div
                                        className={`mb-6 inline-flex p-3 rounded-xl ${service.bg} text-white group-hover:scale-110 transition-transform duration-300 w-fit`}
                                    >
                                        {service.icon}
                                    </div>

                                    <h3
                                        className={`text-2xl font-bold text-white mb-3 ${service.text} transition-colors`}
                                    >
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-400 mb-6 flex-grow">
                                        {service.description}
                                    </p>

                                    <div className="pt-6 border-t border-white/5 mt-auto">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-lg font-bold text-white">
                                                {service.price}
                                            </span>
                                            <span className="text-sm text-slate-500">
                                                {service.time}
                                            </span>
                                        </div>
                                        <Button
                                            variant="ghost"
                                            className={`w-full justify-between text-white hover:text-white ${service.bg} hover:opacity-90 group-hover:translate-x-1 transition-all p-0 px-4`}
                                            onClick={() => openModal(service.title)}
                                        >
                                            Заказать <ArrowRight className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Tech Stack */}
            <section className="py-24 px-4 bg-ha-bg">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Инструменты автоматизации
                        </h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            No-code, Low-code и кастомная разработка для решения любых задач.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {techStack.map((tech, i) => (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative p-6 rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-4 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                                        <tech.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                                        {tech.name}
                                    </h3>
                                    <p className="text-sm text-slate-500">{tech.label}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. FAQ */}
            <FAQ />

            {/* 5. CTA */}
            <section className="py-24 px-4 bg-ha-bg-soft border-t border-ha-border-dark">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Готовы оптимизировать бизнес?
                    </h2>
                    <p className="text-xl text-slate-400 mb-10">
                        Оставьте заявку на бесплатную консультацию. Найдем точки роста и
                        сократим расходы.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            onClick={() => openModal("Консультация по автоматизации")}
                            className="rounded-full px-10 h-14 text-lg bg-purple-600 hover:bg-purple-700 text-white shadow-xl shadow-purple-500/20"
                        >
                            Получить консультацию
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
