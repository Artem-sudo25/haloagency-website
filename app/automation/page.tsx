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
    Check,
    XCircle,
    CheckCircle2,
    Target,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useContactModalActions } from "@/context/contact-modal-context";

// Custom Python Icon
function CodePython(props: any) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z" />
            <path d="M10 8h4v8" />
        </svg>
    );
}

// Data Definitions
const techStack = [
    { name: "Make / n8n", label: "Связка сервисов", helper: "Автоматически передаём данные между сайтом, CRM, почтой и мессенджерами.", icon: Workflow, bg: "bg-[#FFD166]" },
    { name: "OpenAI API", label: "AI для рутины", helper: "Ответы, анализ и классификация заявок — там, где это реально экономит время.", icon: Bot, bg: "bg-[#06D6A0]" },
    { name: "Python", label: "Скрипты и логика", helper: "Когда нужно нестандартно: проверки, расчёты, интеграции и обработка данных.", icon: CodePython, bg: "bg-[#B19CD9]" },
    { name: "Airtable", label: "База данных", helper: "Храним заявки и статусы в порядке — чтобы всё было видно и можно было развивать.", icon: Database, bg: "bg-[#A2D2FF]" },
];

const commonAutomations = [
    { text: "Заявка с сайта → Telegram/WhatsApp → таблица/CRM", note: "ни одна заявка не теряется" },
    { text: "Автоответ в WhatsApp → сбор контакта", note: "клиент получает ответ сразу" },
    { text: "Запись/бронь → напоминание за 24 часа", note: "меньше неявок" },
    { text: "Счёт/квитанция → отправка клиенту → статус \u00ABоплачено\u00BB", note: "меньше ручной проверки" },
    { text: "Еженедельный отчёт: лиды/расход/выручка на email", note: "понятно, что происходит" },
];

const services = [
    {
        id: "chatbots", title: "AI Ассистенты",
        description: "Автоответы, обработка заявок и запись клиентов 24/7 — чтобы вы не теряли клиентов, даже когда заняты.",
        included: ["Сценарии ответов под ваш бизнес (RU/CZ/EN)", "Интеграция с WhatsApp/Telegram/сайтом", "Передача контакта в таблицу или CRM", "Фильтр: спам / нецелевые / срочные", "Логи + короткая инструкция для команды"],
        price: "от 15,000 CZK", time: "1-2 недели", icon: <Bot className="w-6 h-6 text-[#1A1A1A]" />, bg: "bg-[#A2D2FF]", iconBg: "bg-white",
    },
    {
        id: "crm", title: "CRM Интеграции",
        description: "Чтобы ни одна заявка не потерялась: лиды попадают в таблицу/CRM, команда получает уведомления, статусы обновляются автоматически.",
        included: ["Заявка → таблица/CRM (Pipedrive/HubSpot/и др.)", "Уведомления в Telegram или Email", "Статусы: новая / в работе / закрыта", "Дедупликация (убираем повторы)", "Мини-отчёт: сколько заявок и откуда"],
        price: "от 10,000 CZK", time: "3-5 дней", icon: <Database className="w-6 h-6 text-white" />, bg: "bg-[#FF3366]", iconBg: "bg-[#1A1A1A]", textColor: "text-white",
    },
    {
        id: "parsing", title: "Парсинг и Данные",
        description: "Автосбор данных и отчёты без ручной рутины: собираем, приводим в порядок, обновляем по расписанию.",
        included: ["Сбор данных по расписанию (сайты/таблицы/API)", "Очистка и структура данных \u00ABв порядок\u00BB", "Обогащение данных (по задаче)", "Еженедельный отчёт на email", "Логи + защита от ошибок/падений"],
        price: "от 20,000 CZK", time: "2-3 недели", icon: <Zap className="w-6 h-6 text-[#1A1A1A]" />, bg: "bg-[#FFD166]", iconBg: "bg-white",
    },
];

const automationFaqs = [
    { q: "Это не слишком сложно для моего бизнеса?", a: "Нет. Вам не нужно разбираться в AI, API или автоматизациях. Мы сами проектируем логику, а вы просто пользуетесь результатом." },
    { q: "Это заменяет сотрудников?", a: "Нет. Автоматизация убирает рутину: ответы, перенос данных, напоминания. Люди остаются заниматься клиентами и продажами." },
    { q: "А если у меня мало заявок — имеет ли смысл?", a: "Да, особенно в этом случае. Когда заявок немного, каждая потерянная — больно." },
    { q: "Это работает с WhatsApp, Telegram и email?", a: "Да. Мы часто строим автоматизации именно вокруг WhatsApp и Telegram — это самый популярный сценарий у бизнеса в Чехии." },
    { q: "Сколько времени занимает внедрение?", a: "Обычно от нескольких дней до 2–3 недель, в зависимости от количества сценариев и интеграций." },
    { q: "Можно ли начать с малого и расширяться?", a: "Да, и так мы рекомендуем делать. Сначала — один процесс, потом добавляются отчеты, напоминания, AI-ответы и другое." },
    { q: "Это безопасно?", a: "Да. Мы используем проверенные инструменты и не храним лишние данные. Доступы и данные всегда остаются под вашим контролем." },
    { q: "А если я не знаю, что именно автоматизировать?", a: "Это нормально. Вы описываете, где сейчас больно или неудобно, а мы предлагаем конкретные сценарии под ваш бизнес." },
];

export default function AutomationPage() {
    const { open } = useContactModalActions();

    const openModal = (packageName: string, price?: string, time?: string) => {
        const numericPrice = price ? parseInt(price.replace(/[^0-9]/g, "")) : 0;
        const leadValue = numericPrice > 0 ? numericPrice : 8000;
        open({
            service: "package",
            package_name: `Автоматизация: ${packageName}`,
            message: `Интересует услуга: ${packageName}${price ? `\nСтоимость: ${price}` : ''}${time ? `\nСроки: ${time}` : ''}\n\n`,
            value: leadValue,
            currency: "CZK"
        });
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            if ("scrollRestoration" in window.history) {
                window.history.scrollRestoration = "manual";
            }
            window.scrollTo(0, 0);
        }
    }, []);

    return (
        <main className="min-h-screen bg-[#F5F5F7] pt-20 overflow-hidden">
            {/* Dot grid background */}
            <div className="fixed inset-0 z-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

            <div className="relative z-10">
                {/* 1. Hero Section */}
                <section className="relative py-6 md:py-32 px-4">

                    <div className="container mx-auto max-w-7xl relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="text-left">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] mb-8"
                                >
                                    <Cpu className="w-4 h-4 text-[#FF3366]" />
                                    <span className="text-sm font-bold text-[#1A1A1A] tracking-wide uppercase">Automation & AI</span>
                                </motion.div>

                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    className="text-5xl md:text-7xl font-extrabold text-[#1A1A1A] mb-6 leading-tight tracking-tight"
                                    style={{ fontFamily: 'var(--font-display)' }}
                                >
                                    Бизнес на <br />
                                    <span className="relative inline-block z-10">
                                        автопилоте
                                        <svg className="absolute -bottom-2 left-0 w-full h-4 text-[#FF3366] -z-10" fill="none" preserveAspectRatio="none" viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeLinecap="round" strokeWidth="4" />
                                        </svg>
                                    </span>
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="text-xl text-[#1A1A1A]/60 mb-10 max-w-xl leading-relaxed"
                                >
                                    Внедряем AI и автоматизацию, чтобы заявки обрабатывались быстрее, клиенты не терялись, а рутина исчезла из вашего дня.
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
                                >
                                    <Button
                                        size="lg"
                                        onClick={() => openModal("Automation General", undefined, undefined)}
                                        className="rounded-xl px-8 bg-[#FF3366] hover:bg-[#FF3366] text-white font-bold border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-y-[1px] active:translate-x-[1px] active:shadow-[0px_0px_0px_0px_#1A1A1A] transition-all h-12"
                                    >
                                        Автоматизировать
                                    </Button>
                                    <Link href="#services" className="text-[#1A1A1A]/60 font-medium hover:text-[#FF3366] transition-colors text-base">
                                        Цены →
                                    </Link>
                                </motion.div>
                            </div>

                            {/* Hero Graphic: Automation Workflow UI */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                                className="relative hidden lg:block"
                            >
                                <div className="relative bg-white border-2 border-[#1A1A1A] rounded-3xl shadow-[8px_8px_0px_0px_#1A1A1A] p-6 overflow-hidden">
                                    {/* Header */}
                                    <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#1A1A1A]/5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-[#FF3366]/10 flex items-center justify-center">
                                                <Workflow className="w-5 h-5 text-[#FF3366]" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-[#1A1A1A]">Обработка заявок</div>
                                                <div className="text-xs text-[#1A1A1A]/40">В работе • 24/7</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                            <span className="text-xs text-green-600 font-medium">Активно</span>
                                        </div>
                                    </div>

                                    {/* Workflow Nodes */}
                                    <div className="relative space-y-4">
                                        <div className="absolute left-[27px] top-8 bottom-8 w-0.5 bg-[#1A1A1A]/10" />

                                        {[
                                            { icon: MessageSquare, title: "Новая заявка", sub: "Форма на сайте" },
                                            { icon: Database, title: "Обогащение данных", sub: "Clearbit API" },
                                            { icon: Bot, title: "AI-анализ", sub: "OpenAI GPT-4" },
                                            { icon: Mail, title: "Отправка предложения", sub: "Gmail SMTP" },
                                        ].map((node, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.5 + i * 0.2 }}
                                                className="relative z-10 flex items-center gap-4 p-3 rounded-xl bg-[#F5F5F7] border-2 border-[#1A1A1A] hover:-translate-y-[1px] hover:-translate-x-[1px] hover:shadow-[4px_4px_0px_0px_#1A1A1A] transition-all"
                                            >
                                                <div className="w-14 h-14 rounded-full bg-[#FF3366]/10 flex items-center justify-center shrink-0">
                                                    <node.icon className="w-6 h-6 text-[#FF3366]" />
                                                </div>
                                                <div className="flex-grow">
                                                    <div className="flex items-center justify-between mb-1">
                                                        <span className="font-medium text-[#1A1A1A]">{node.title}</span>
                                                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#1A1A1A]/5 text-[#1A1A1A]/40 font-mono">{100 + i * 50}ms</span>
                                                    </div>
                                                    <span className="text-xs text-[#1A1A1A]/40 block">{node.sub}</span>
                                                </div>
                                                <motion.div
                                                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                                                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                                                    className="w-2 h-2 rounded-full bg-green-500/50"
                                                />
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Automation Stats */}
                                    <div className="mt-6 pt-4 border-t border-[#1A1A1A]/5 grid grid-cols-2 gap-4">
                                        <div className="p-3 rounded-xl bg-[#F5F5F7]">
                                            <div className="text-xs text-[#1A1A1A]/40 mb-1">Экономия времени</div>
                                            <div className="text-lg font-bold text-[#1A1A1A]">42h <span className="text-xs font-normal text-[#1A1A1A]/40">/ нед</span></div>
                                        </div>
                                        <div className="p-3 rounded-xl bg-[#F5F5F7]">
                                            <div className="text-xs text-[#1A1A1A]/40 mb-1">Экономия денег</div>
                                            <div className="text-lg font-bold text-[#1A1A1A]">$2,400 <span className="text-xs font-normal text-[#1A1A1A]/40">/ мес</span></div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 1.5 Intro */}
                <section className="py-16 px-4">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                                Автоматизация — это не про «роботов».<br />
                                Это про меньше хаоса и больше контроля.
                            </h2>
                            <p className="text-[#1A1A1A]/60 text-lg max-w-3xl mx-auto">
                                Большинство бизнесов в Чехии теряют клиентов и время не из-за плохих услуг, а из-за ручной рутины и человеческого фактора.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                            <div className="rounded-2xl bg-white border-2 border-[#1A1A1A] shadow-[6px_6px_0px_0px_#1A1A1A] p-6 hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[10px_10px_0px_0px_#1A1A1A] transition-all">
                                <div className="flex items-center gap-2 text-sm font-bold text-[#1A1A1A] mb-4 bg-red-100 border-2 border-[#1A1A1A] px-3 py-2 rounded-xl w-fit shadow-[2px_2px_0px_0px_#1A1A1A]">
                                    <XCircle className="w-4 h-4 text-red-600" />
                                    Что обычно происходит
                                </div>
                                <ul className="space-y-3 text-sm text-[#1A1A1A]/70 font-medium tracking-tight">
                                    <li className="flex gap-3"><span className="mt-1.5 h-2 w-2 rounded-full border border-[#1A1A1A] bg-red-400 shrink-0" /><span>Заявки теряются в WhatsApp, почте или формах</span></li>
                                    <li className="flex gap-3"><span className="mt-1.5 h-2 w-2 rounded-full border border-[#1A1A1A] bg-red-400 shrink-0" /><span>Клиент ждёт ответ — и уходит к конкуренту</span></li>
                                    <li className="flex gap-3"><span className="mt-1.5 h-2 w-2 rounded-full border border-[#1A1A1A] bg-red-400 shrink-0" /><span>Рутина съедает время владельца и команды</span></li>
                                </ul>
                            </div>

                            <div className="rounded-2xl bg-[#06D6A0] border-2 border-[#1A1A1A] shadow-[6px_6px_0px_0px_#1A1A1A] p-6 hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[10px_10px_0px_0px_#1A1A1A] transition-all">
                                <div className="flex items-center gap-2 text-sm font-bold text-[#1A1A1A] mb-4 bg-white border-2 border-[#1A1A1A] px-3 py-2 rounded-xl w-fit shadow-[2px_2px_0px_0px_#1A1A1A]">
                                    <CheckCircle2 className="w-4 h-4 text-[#06D6A0]" />
                                    Что делает автоматизация
                                </div>
                                <ul className="space-y-3 text-sm text-[#1A1A1A]/80 font-bold tracking-tight">
                                    <li className="flex gap-3"><span className="mt-1.5 h-2 w-2 rounded-full border border-[#1A1A1A] bg-white shrink-0" /><span>Каждая заявка фиксируется и не теряется</span></li>
                                    <li className="flex gap-3"><span className="mt-1.5 h-2 w-2 rounded-full border border-[#1A1A1A] bg-white shrink-0" /><span>Клиент получает ответ сразу, 24/7</span></li>
                                    <li className="flex gap-3"><span className="mt-1.5 h-2 w-2 rounded-full border border-[#1A1A1A] bg-white shrink-0" /><span>Вы видите, что происходит в бизнесе</span></li>
                                </ul>
                            </div>

                            <div className="rounded-2xl bg-[#FFD166] border-2 border-[#1A1A1A] shadow-[6px_6px_0px_0px_#1A1A1A] p-6 hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[10px_10px_0px_0px_#1A1A1A] transition-all">
                                <div className="flex items-center gap-2 text-sm font-bold text-[#1A1A1A] mb-4 bg-white border-2 border-[#1A1A1A] px-3 py-2 rounded-xl w-fit shadow-[2px_2px_0px_0px_#1A1A1A]">
                                    <Target className="w-4 h-4 text-amber-500" />
                                    Для чего это бизнесу
                                </div>
                                <ul className="space-y-3 text-sm text-[#1A1A1A]/80 font-bold tracking-tight">
                                    <li className="flex gap-3"><span className="mt-1.5 h-2 w-2 rounded-full border border-[#1A1A1A] bg-white shrink-0" /><span>Больше заявок → без увеличения штата</span></li>
                                    <li className="flex gap-3"><span className="mt-1.5 h-2 w-2 rounded-full border border-[#1A1A1A] bg-white shrink-0" /><span>Быстрее обработка → выше конверсия</span></li>
                                    <li className="flex gap-3"><span className="mt-1.5 h-2 w-2 rounded-full border border-[#1A1A1A] bg-white shrink-0" /><span>Меньше ручной работы → меньше ошибок</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-4">
                            <Button
                                size="lg"
                                variant="outline"
                                className="rounded-xl px-8 border-2 border-[#1A1A1A] bg-white text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white h-12 font-bold shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-y-[1px] active:translate-x-[1px] active:shadow-[0px_0px_0px_0px_#1A1A1A] transition-all"
                                asChild
                            >
                                <Link href="#services">Посмотреть примеры автоматизаций</Link>
                            </Button>
                            <p className="text-xs text-[#1A1A1A]/40 text-center max-w-2xl">
                                Мы не автоматизируем «всё подряд». Только те процессы, которые реально экономят время или деньги.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 2. Tech Stack */}
                <section className="py-16 md:py-24 px-4">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                                Инструменты автоматизации
                            </h2>
                            <p className="text-[#1A1A1A]/60 text-lg max-w-3xl mx-auto">
                                Вам не нужно разбираться в Make, API или скриптах. Мы выбираем подход под задачу и отвечаем за стабильную работу и поддержку.
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
                                    className={`group relative p-6 rounded-2xl ${tech.bg} border-2 border-[#1A1A1A] transition-all duration-300 overflow-hidden shadow-[6px_6px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[10px_10px_0px_0px_#1A1A1A]`}
                                >
                                    <div className="relative z-10 flex flex-col items-center text-center">
                                        <div className="w-12 h-12 rounded-full border-2 border-[#1A1A1A] bg-white flex items-center justify-center mb-4 text-[#1A1A1A] group-hover:scale-110 transition-transform duration-300">
                                            <tech.icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-lg font-bold text-[#1A1A1A] mb-1">{tech.name}</h3>
                                        <p className="text-sm text-[#1A1A1A]/60 font-medium">{tech.label}</p>
                                        <p className="text-xs text-[#1A1A1A]/40 mt-2 leading-relaxed">{tech.helper}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. Services */}
                <section id="services" className="py-16 md:py-20">
                    <div className="container mx-auto max-w-6xl px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                                Что мы автоматизируем
                            </h2>
                            <p className="text-[#1A1A1A]/60 text-lg max-w-2xl mx-auto">
                                Убираем человеческий фактор там, где это возможно. Быстро, точно и без выходных.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            {services.map((service) => (
                                <div
                                    key={service.id}
                                    className={`group p-8 rounded-3xl ${service.bg} border-2 border-[#1A1A1A] transition-all duration-300 flex flex-col shadow-[8px_8px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[12px_12px_0px_0px_#1A1A1A]`}
                                >
                                    <div className={`mb-6 inline-flex p-3 rounded-full border-2 border-[#1A1A1A] ${service.iconBg} group-hover:scale-110 transition-transform duration-300 w-fit`}>
                                        {service.icon}
                                    </div>

                                    <h3 className={`text-2xl font-bold ${service.textColor || 'text-[#1A1A1A]'} mb-3`}>{service.title}</h3>
                                    <p className={`${service.textColor ? 'text-white/80' : 'text-[#1A1A1A]/70'} mb-4 flex-grow`}>{service.description}</p>

                                    <div className="mb-6">
                                        <div className={`text-sm font-bold ${service.textColor || 'text-[#1A1A1A]'} mb-3`}>Что входит:</div>
                                        <ul className={`space-y-2 text-sm ${service.textColor ? 'text-white/80' : 'text-[#1A1A1A]/70'}`}>
                                            {service.included?.map((line) => (
                                                <li key={line} className="flex gap-2">
                                                    <Check className={`w-4 h-4 ${service.textColor ? 'text-white' : 'text-[#FF3366]'} mt-0.5 shrink-0`} />
                                                    <span className="leading-relaxed">{line}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className={`pt-6 border-t ${service.textColor ? 'border-white/20' : 'border-[#1A1A1A]/20'} mt-auto`}>
                                        <div className="flex items-center justify-between mb-4">
                                            <span className={`text-lg font-bold ${service.textColor || 'text-[#1A1A1A]'}`}>{service.price}</span>
                                            <span className={`text-sm ${service.textColor ? 'text-white/60' : 'text-[#1A1A1A]/60'}`}>{service.time}</span>
                                        </div>
                                        <Button
                                            className="w-full justify-between rounded-xl border-2 border-[#1A1A1A] bg-white text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all px-4 font-bold shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-y-[2px] active:translate-x-[2px] active:shadow-[0px_0px_0px_0px_#1A1A1A]"
                                            onClick={() => openModal(service.title, service.price, service.time)}
                                        >
                                            Заказать <ArrowRight className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. Lead Magnet: Plan */}
                <section className="py-16 md:py-20">
                    <div className="container mx-auto max-w-6xl px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                                Получите план автоматизации под ваш бизнес (в Чехии)
                            </h2>
                            <p className="text-[#1A1A1A]/60 text-lg max-w-3xl mx-auto">
                                Опишите, что у вас происходит сейчас — мы подскажем 1–2 автоматизации, которые дадут максимум эффекта и сколько это будет стоить.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                            {/* Examples */}
                            <div className="rounded-3xl bg-white border-2 border-[#1A1A1A] p-8 shadow-[8px_8px_0px_0px_#1A1A1A]">
                                <div className="text-sm font-bold text-[#1A1A1A] mb-5">Примеры, которые чаще всего внедряют</div>
                                <div className="flex flex-wrap gap-3">
                                    {commonAutomations.map((item) => (
                                        <div
                                            key={item.text}
                                            className="group rounded-full border border-[#1A1A1A]/5 bg-[#F5F5F7] px-4 py-2 hover:border-[#FF3366]/30 hover:bg-[#FF3366]/5 transition-colors"
                                            title={item.note}
                                        >
                                            <span className="text-sm text-[#1A1A1A]/70">{item.text}</span>
                                            <span className="ml-2 text-xs text-[#1A1A1A]/40 group-hover:text-[#FF3366] transition-colors">• {item.note}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-6 text-sm text-[#1A1A1A]/40 leading-relaxed">
                                    Если не уверены, что именно автоматизировать — это нормально. Мы зададим несколько вопросов и предложим самый простой старт.
                                </div>
                            </div>

                            {/* Form */}
                            <div className="rounded-3xl bg-[#B19CD9] border-2 border-[#1A1A1A] p-8 shadow-[8px_8px_0px_0px_#1A1A1A]">
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="w-10 h-10 rounded-full bg-[#FF3366]/10 flex items-center justify-center text-[#FF3366]">
                                        <Sparkles className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-lg font-bold text-[#1A1A1A]">План автоматизации</div>
                                        <div className="text-sm text-[#1A1A1A]/40">Ответим обычно в течение 24 часов</div>
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
                                            <label className="text-sm font-bold text-[#1A1A1A]">Имя</label>
                                            <input name="name" type="text" className="mt-2 w-full rounded-xl bg-white border-2 border-[#1A1A1A] px-4 py-3 text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 focus:outline-none focus:shadow-[4px_4px_0px_0px_#FF3366] focus:-translate-y-[1px] focus:-translate-x-[1px] transition-all" placeholder="Иван" />
                                        </div>
                                        <div>
                                            <label className="text-sm font-bold text-[#1A1A1A]">Телефон или Telegram/WhatsApp</label>
                                            <input name="contact" type="text" required className="mt-2 w-full rounded-xl bg-white border-2 border-[#1A1A1A] px-4 py-3 text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 focus:outline-none focus:shadow-[4px_4px_0px_0px_#FF3366] focus:-translate-y-[1px] focus:-translate-x-[1px] transition-all" placeholder="+420… / @username" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-sm font-bold text-[#1A1A1A]">Сайт (необязательно)</label>
                                        <input name="site" type="url" className="mt-2 w-full rounded-xl bg-white border-2 border-[#1A1A1A] px-4 py-3 text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 focus:outline-none focus:shadow-[4px_4px_0px_0px_#FF3366] focus:-translate-y-[1px] focus:-translate-x-[1px] transition-all" placeholder="https://example.cz" />
                                    </div>

                                    <div>
                                        <label className="text-sm font-bold text-[#1A1A1A]">Что хотите автоматизировать?</label>
                                        <textarea name="details" rows={4} className="mt-2 w-full rounded-xl bg-white border-2 border-[#1A1A1A] px-4 py-3 text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 focus:outline-none focus:shadow-[4px_4px_0px_0px_#FF3366] focus:-translate-y-[1px] focus:-translate-x-[1px] transition-all" placeholder="Например: заявки с сайта → Telegram, автоответ в WhatsApp, напоминания о записи…" />
                                    </div>

                                    <label className="flex items-start gap-3 text-sm text-[#1A1A1A]/40">
                                        <input name="consent" type="checkbox" required className="mt-1 h-4 w-4 rounded border-[#1A1A1A]/10 bg-[#F5F5F7] accent-[#FF3366]" />
                                        <span>
                                            Согласен с{" "}
                                            <Link href="/privacy-policy" className="text-[#FF3366] hover:text-[#FF3366]/80 underline underline-offset-4">
                                                политикой конфиденциальности
                                            </Link>.
                                        </span>
                                    </label>

                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full rounded-xl h-12 bg-[#FF3366] hover:bg-[#FF3366] text-white font-bold border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-y-[1px] active:translate-x-[1px] active:shadow-[0px_0px_0px_0px_#1A1A1A] transition-all"
                                    >
                                        Получить план автоматизации <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>

                                    <div className="text-xs text-[#1A1A1A]/40 text-center">
                                        Без спама. Обычно отвечаем в течение 24 часов.
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. FAQ */}
                <section className="py-16 md:py-20 px-4">
                    <div className="container mx-auto max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                                Частые вопросы об автоматизации
                            </h2>
                        </div>
                        <div className="space-y-4">
                            {automationFaqs.map((item, index) => (
                                <details key={index} className="group rounded-2xl bg-white border-2 border-[#1A1A1A] transition-all overflow-hidden shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A]">
                                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none border-b-2 border-transparent group-open:border-[#1A1A1A]">
                                        <span className="text-[#1A1A1A] font-bold pr-4">{item.q}</span>
                                        <span className="text-[#1A1A1A] group-open:rotate-45 transition-transform text-xl font-extrabold">+</span>
                                    </summary>
                                    <div className="px-5 pb-5">
                                        <p className="text-[#1A1A1A]/60 leading-relaxed">{item.a}</p>
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 6. CTA */}
                <section className="py-16 md:py-24 px-4">
                    <div className="container mx-auto max-w-4xl text-center">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                            Готовы оптимизировать бизнес?
                        </h2>
                        <p className="text-xl text-[#1A1A1A]/60 mb-10">
                            Оставьте заявку на бесплатную консультацию. Найдем точки роста и сократим расходы.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                onClick={() => openModal("Консультация по автоматизации", undefined, undefined)}
                                className="rounded-xl px-10 h-14 text-lg bg-[#FF3366] hover:bg-[#FF3366] text-white font-bold border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-y-[1px] active:translate-x-[1px] active:shadow-[0px_0px_0px_0px_#1A1A1A] transition-all"
                            >
                                Получить консультацию
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
