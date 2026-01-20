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

// Unified divider to separate sections consistently
const SectionDivider = () => (
    <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/15 to-transparent border-t border-white/5" />
);

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
    {
        name: "Make / n8n",
        label: "Связка сервисов",
        helper: "Автоматически передаём данные между сайтом, CRM, почтой и мессенджерами.",
        icon: Workflow,
    },
    {
        name: "OpenAI API",
        label: "AI для рутины",
        helper: "Ответы, анализ и классификация заявок — там, где это реально экономит время.",
        icon: Bot,
    },
    {
        name: "Python",
        label: "Скрипты и логика",
        helper: "Когда нужно нестандартно: проверки, расчёты, интеграции и обработка данных.",
        icon: CodePython,
    },
    {
        name: "Airtable",
        label: "База данных",
        helper: "Храним заявки и статусы в порядке — чтобы всё было видно и можно было развивать.",
        icon: Database,
    },
];

const commonAutomations = [
    { text: "Заявка с сайта → Telegram/WhatsApp → таблица/CRM", note: "ни одна заявка не теряется" },
    { text: "Автоответ в WhatsApp → сбор контакта", note: "клиент получает ответ сразу" },
    { text: "Запись/бронь → напоминание за 24 часа", note: "меньше неявок" },
    { text: "Счёт/квитанция → отправка клиенту → статус “оплачено”", note: "меньше ручной проверки" },
    { text: "Еженедельный отчёт: лиды/расход/выручка на email", note: "понятно, что происходит" },
    { text: "Уведомления команде: “новая заявка”, “просрочено”, “отменено”", note: "все знают, что делать" },
];

const services = [
    {
        id: "chatbots",
        title: "AI Ассистенты",
        description:
            "Автоответы, обработка заявок и запись клиентов 24/7 — чтобы вы не теряли клиентов, даже когда заняты.",
        included: [
            "Сценарии ответов под ваш бизнес (RU/CZ/EN)",
            "Интеграция с WhatsApp/Telegram/сайтом",
            "Передача контакта в таблицу или CRM",
            "Фильтр: спам / нецелевые / срочные",
            "Логи + короткая инструкция для команды",
        ],
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
            "Чтобы ни одна заявка не потерялась: лиды попадают в таблицу/CRM, команда получает уведомления, статусы обновляются автоматически.",
        included: [
            "Заявка → таблица/CRM (Pipedrive/HubSpot/и др.)",
            "Уведомления в Telegram или Email",
            "Статусы: новая / в работе / закрыта",
            "Дедупликация (убираем повторы)",
            "Мини-отчёт: сколько заявок и откуда",
        ],
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
            "Автосбор данных и отчёты без ручной рутины: собираем, приводим в порядок, обновляем по расписанию.",
        included: [
            "Сбор данных по расписанию (сайты/таблицы/API)",
            "Очистка и структура данных “в порядок”",
            "Обогащение данных (по задаче)",
            "Еженедельный отчёт на email",
            "Логи + защита от ошибок/падений",
        ],
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

const automationFaqs = [
    {
        question: "Это не слишком сложно для моего бизнеса?",
        answer:
            "Нет. Вам не нужно разбираться в AI, API или автоматизациях. Мы сами проектируем логику, а вы просто пользуетесь результатом.",
    },
    {
        question: "Это заменяет сотрудников?",
        answer:
            "Нет. Автоматизация убирает рутину: ответы, перенос данных, напоминания. Люди остаются заниматься клиентами и продажами, а не копипастой.",
    },
    {
        question: "А если у меня мало заявок — имеет ли смысл?",
        answer:
            "Да, особенно в этом случае. Когда заявок немного, каждая потерянная — больно. Автоматизация помогает не терять даже единичные обращения.",
    },
    {
        question: "Это работает с WhatsApp, Telegram и email?",
        answer:
            "Да. Мы часто строим автоматизации именно вокруг WhatsApp и Telegram — это самый популярный сценарий у бизнеса в Чехии.",
    },
    {
        question: "Сколько времени занимает внедрение?",
        answer:
            "Обычно от нескольких дней до 2–3 недель, в зависимости от количества сценариев и интеграций.",
    },
    {
        question: "Можно ли начать с малого и расширяться?",
        answer:
            "Да, и так мы рекомендуем делать. Сначала — один процесс (например, заявки), потом добавляются отчеты, напоминания, AI-ответы и другое.",
    },
    {
        question: "Это безопасно?",
        answer:
            "Да. Мы используем проверенные инструменты и не храним лишние данные. Доступы и данные всегда остаются под вашим контролем.",
    },
    {
        question: "А если я не знаю, что именно автоматизировать?",
        answer:
            "Это нормально. Вы описываете, где сейчас больно или неудобно, а мы предлагаем конкретные сценарии под ваш бизнес.",
    },
];

export default function AutomationPage() {
    const { open } = useContactModal();

    const openModal = (packageName: string, price?: string, time?: string) => {
        open({
            service: "package",
            package_name: `Автоматизация: ${packageName}`,
            message: `Интересует услуга: ${packageName}${price ? `\nСтоимость: ${price}` : ''}${time ? `\nСроки: ${time}` : ''}\n\n`
        });
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
                                Внедряем AI и автоматизацию, чтобы заявки обрабатывались быстрее, клиенты не терялись, а рутина исчезла из вашего дня.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <Button
                                    size="lg"
                                    onClick={() => openModal("Automation General", undefined, undefined)}
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
                                    <Link href="#services">Цены</Link>
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
                                                Обработка заявок
                                            </div>
                                            <div className="text-xs text-slate-400">
                                                В работе • 24/7
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-xs text-green-400 font-medium">
                                            Активно
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
                                            title: "Новая заявка",
                                            sub: "Форма на сайте",
                                            color: "text-blue-400",
                                            bg: "bg-blue-500/10",
                                            border: "border-blue-500/20",
                                        },
                                        {
                                            icon: Database,
                                            title: "Обогащение данных",
                                            sub: "Clearbit API",
                                            color: "text-orange-400",
                                            bg: "bg-orange-500/10",
                                            border: "border-orange-500/20",
                                        },
                                        {
                                            icon: Bot,
                                            title: "AI-анализ",
                                            sub: "OpenAI GPT-4",
                                            color: "text-purple-400",
                                            bg: "bg-purple-500/10",
                                            border: "border-purple-500/20",
                                        },
                                        {
                                            icon: Mail,
                                            title: "Отправка предложения",
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
                                            Экономия времени
                                        </div>
                                        <div className="text-lg font-bold text-white">
                                            42h{" "}
                                            <span className="text-xs font-normal text-slate-500">
                                                / нед
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-3 rounded-lg bg-white/5">
                                        <div className="text-xs text-slate-400 mb-1">
                                            Экономия денег
                                        </div>
                                        <div className="text-lg font-bold text-white">
                                            $2,400{" "}
                                            <span className="text-xs font-normal text-slate-500">
                                                / мес
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <SectionDivider />

            {/* 1.5 Intro */}
            <section className="py-16 px-4 bg-ha-bg">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Автоматизация — это не про «роботов».
                            <br />
                            Это про меньше хаоса и больше контроля.
                        </h2>
                        <p className="text-slate-400 text-lg max-w-3xl mx-auto">
                            Большинство бизнесов в Чехии теряют клиентов и время не из-за
                            плохих услуг, а из-за ручной рутины и человеческого фактора.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        <div className="rounded-3xl bg-slate-900/40 border border-white/10 backdrop-blur-sm p-6">
                            <div className="text-sm font-semibold text-rose-300 mb-4">
                                ❌ Что обычно происходит
                            </div>
                            <ul className="space-y-3 text-sm text-slate-300">
                                <li className="flex gap-2">
                                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-rose-400/60 shrink-0" />
                                    <span>Заявки теряются в WhatsApp, почте или формах</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-rose-400/60 shrink-0" />
                                    <span>Клиент ждёт ответ — и уходит к конкуренту</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-rose-400/60 shrink-0" />
                                    <span>Рутина съедает время владельца и команды</span>
                                </li>
                            </ul>
                        </div>

                        <div className="rounded-3xl bg-slate-900/40 border border-white/10 backdrop-blur-sm p-6">
                            <div className="text-sm font-semibold text-emerald-300 mb-4">
                                ✅ Что делает автоматизация
                            </div>
                            <ul className="space-y-3 text-sm text-slate-300">
                                <li className="flex gap-2">
                                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400/60 shrink-0" />
                                    <span>Каждая заявка фиксируется и не теряется</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400/60 shrink-0" />
                                    <span>Клиент получает ответ сразу, 24/7</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400/60 shrink-0" />
                                    <span>
                                        Вы видите, что происходит в бизнесе, а не «где-то там»
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="rounded-3xl bg-slate-900/40 border border-white/10 backdrop-blur-sm p-6">
                            <div className="text-sm font-semibold text-amber-300 mb-4">
                                🎯 Для чего это бизнесу
                            </div>
                            <ul className="space-y-3 text-sm text-slate-300">
                                <li className="flex gap-2">
                                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-400/60 shrink-0" />
                                    <span>Больше заявок → без увеличения штата</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-400/60 shrink-0" />
                                    <span>Быстрее обработка → выше конверсия</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-400/60 shrink-0" />
                                    <span>Меньше ручной работы → меньше ошибок</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <Button
                            size="lg"
                            variant="outline"
                            className="rounded-full px-8 border-white/10 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm h-12"
                            asChild
                        >
                            <Link href="#services">Посмотреть примеры автоматизаций</Link>
                        </Button>
                        <p className="text-xs text-slate-500 text-center max-w-2xl">
                            Мы не автоматизируем «всё подряд». Только те процессы, которые
                            реально экономят время или деньги.
                        </p>
                    </div>
                </div>
            </section>

            <SectionDivider />

            {/* 2. Tech Stack */}
            <section className="py-24 px-4 bg-ha-bg">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Инструменты автоматизации
                        </h2>
                        <p className="text-slate-400 text-lg max-w-3xl mx-auto">
                            Вам не нужно разбираться в Make, API или скриптах. Мы выбираем
                            подход под задачу и отвечаем за стабильную работу и поддержку.
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
                                    <p className="text-sm text-slate-400 font-medium">
                                        {tech.label}
                                    </p>
                                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                                        {tech.helper}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <SectionDivider />

            {/* 3. Services (What we automate) */}
            <section id="services" className="py-20 bg-ha-bg-soft">
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

                    <div className="overflow-x-auto scrollbar-hide md:grid md:grid-cols-3 gap-6 mb-12 snap-x snap-mandatory scroll-pl-4">
                        <div className="flex md:contents gap-4 px-4 md:px-0 pb-2">
                            {services.map((service) => (
                                <div
                                    key={service.id}
                                    className={`flex-shrink-0 w-[80vw] sm:w-[50vw] md:w-auto snap-start group p-8 rounded-3xl bg-slate-900/50 border border-white/10 backdrop-blur-sm transition-all duration-500 flex flex-col relative overflow-hidden ${service.border}`}
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
                                        <p className="text-slate-400 mb-4 flex-grow">
                                            {service.description}
                                        </p>

                                        <div className="mb-6">
                                            <div className="text-sm font-semibold text-slate-200 mb-3">
                                                Что входит:
                                            </div>
                                            <ul className="space-y-2 text-sm text-slate-400">
                                                {service.included?.map((line) => (
                                                    <li key={line} className="flex gap-2">
                                                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/25 shrink-0" />
                                                        <span className="leading-relaxed">{line}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

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
                                                onClick={() => openModal(service.title, service.price, service.time)}
                                            >
                                                Заказать <ArrowRight className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <SectionDivider />

            {/* 4. Lead Magnet: Plan */}
            <section className="py-20 bg-ha-bg">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Получите план автоматизации под ваш бизнес (в Чехии)
                        </h2>
                        <p className="text-slate-400 text-lg max-w-3xl mx-auto">
                            Опишите, что у вас происходит сейчас — мы подскажем 1–2
                            автоматизации, которые дадут максимум эффекта и сколько это будет
                            стоить.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        {/* Examples */}
                        <div className="rounded-3xl bg-slate-900/40 border border-white/10 backdrop-blur-sm p-8">
                            <div className="text-sm font-semibold text-slate-200 mb-5">
                                Примеры, которые чаще всего внедряют
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {commonAutomations.slice(0, 5).map((item) => (
                                    <div
                                        key={item.text}
                                        className="group rounded-full border border-white/10 bg-slate-900/40 backdrop-blur-sm px-4 py-2 hover:border-purple-500/30 hover:bg-white/5 transition-colors"
                                        title={item.note}
                                    >
                                        <span className="text-sm md:text-base text-slate-200">
                                            {item.text}
                                        </span>
                                        <span className="ml-2 text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
                                            • {item.note}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 text-sm text-slate-500 leading-relaxed">
                                Если не уверены, что именно автоматизировать — это нормально.
                                Мы зададим несколько вопросов и предложим самый простой старт.
                            </div>
                        </div>

                        {/* Form */}
                        <div className="rounded-3xl bg-slate-900/50 border border-white/10 backdrop-blur-sm p-8">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                                    <Sparkles className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-lg font-bold text-white">
                                        План автоматизации
                                    </div>
                                    <div className="text-sm text-slate-400">
                                        Ответим обычно в течение 24 часов
                                    </div>
                                </div>
                            </div>

                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    const form = e.currentTarget;
                                    const data = new FormData(form);
                                    const name = String(data.get("name") || "").trim();
                                    const contact = String(data.get("contact") || "").trim();
                                    const site = String(data.get("site") || "").trim();
                                    const details = String(data.get("details") || "").trim();

                                    open({
                                        service: "automation",
                                        message: `Запрос: План автоматизации\nИмя: ${name || "—"}\nКонтакт: ${contact || "—"}\nСайт: ${site || "—"}\nЗадача: ${details || "—"}`,
                                    });

                                    form.reset();
                                }}
                                className="space-y-4"
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm text-slate-300">Имя</label>
                                        <input
                                            name="name"
                                            type="text"
                                            className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                                            placeholder="Иван"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm text-slate-300">
                                            Телефон или Telegram/WhatsApp
                                        </label>
                                        <input
                                            name="contact"
                                            type="text"
                                            required
                                            className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                                            placeholder="+420… / @username"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm text-slate-300">
                                        Сайт (необязательно)
                                    </label>
                                    <input
                                        name="site"
                                        type="url"
                                        className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                                        placeholder="https://example.cz"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm text-slate-300">
                                        Что хотите автоматизировать?
                                    </label>
                                    <textarea
                                        name="details"
                                        rows={4}
                                        className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                                        placeholder="Например: заявки с сайта → Telegram, автоответ в WhatsApp, напоминания о записи…"
                                    />
                                </div>

                                <label className="flex items-start gap-3 text-sm text-slate-400">
                                    <input
                                        name="consent"
                                        type="checkbox"
                                        required
                                        className="mt-1 h-4 w-4 rounded border-white/20 bg-white/5"
                                    />
                                    <span>
                                        Согласен с{" "}
                                        <Link
                                            href="/privacy-policy"
                                            className="text-slate-200 hover:text-white underline underline-offset-4"
                                        >
                                            политикой конфиденциальности
                                        </Link>
                                        .
                                    </span>
                                </label>

                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full rounded-full h-12 bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/20"
                                >
                                    Получить план автоматизации{" "}
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>

                                <div className="text-xs text-slate-500 text-center">
                                    Без спама. Обычно отвечаем в течение 24 часов.
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <SectionDivider />

            {/* 5. FAQ */}
            <FAQ
                items={automationFaqs}
                eyebrow="FAQ по автоматизации"
                title="Частые вопросы об автоматизации"
            />

            <SectionDivider />

            {/* 6. CTA */}
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
                            onClick={() => openModal("Консультация по автоматизации", undefined, undefined)}
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
