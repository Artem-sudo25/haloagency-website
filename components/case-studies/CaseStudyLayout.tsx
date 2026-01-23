"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useContactModalActions } from "@/context/contact-modal-context";
import { Badge } from "@/components/ui/badge";

interface StatProps {
    label: string;
    value: string;
    subtext?: string;
}

interface CaseStudyLayoutProps {
    title: string;
    subtitle: string;
    tags: string[];
    mainStats: StatProps[];
    challenge: {
        title: string;
        description: string;
        points: string[];
    };
    solution: {
        title: string;
        description: string;
        technologies: string[];
        features: string[];
    };
    results: {
        title: string;
        description: string;
        stats: StatProps[];
    };
    visualColorClass: string; // e.g. "text-blue-500" or "bg-blue-500"
    heroImage: string;
    cta?: {
        title?: string;
        text?: string;
    }
}

export default function CaseStudyLayout({
    title,
    subtitle,
    tags,
    mainStats,
    challenge,
    solution,
    results,

    visualColorClass,
    heroImage,
    cta,
}: CaseStudyLayoutProps) {
    const { open: openContactModal } = useContactModalActions();

    return (
        <main className="min-h-screen bg-ha-bg pt-20 overflow-hidden">
            {/* 1. Hero Section */}
            <section className="relative py-20 md:py-32 px-4 border-b border-white/5 overflow-hidden">
                {/* Background Glow */}
                <div className={`absolute top-0 right-0 w-[500px] h-[500px] opacity-20 blur-[120px] rounded-full pointer-events-none ${visualColorClass.replace('text-', 'bg-')}`} />

                <div className="container mx-auto max-w-6xl relative z-10">
                    <Link href="/#projects" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Назад к проектам
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Text Column */}
                        <div>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {tags.map((tag, i) => (
                                    <Badge key={i} variant="secondary" className="bg-white/5 hover:bg-white/10 text-slate-300 border-white/10">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                {title}
                            </h1>
                            <p className="text-xl text-slate-400 max-w-xl leading-relaxed mb-8">
                                {subtitle}
                            </p>

                            <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
                                {mainStats.slice(0, 2).map((stat, i) => ( // Show top 2 stats in hero
                                    <div key={i}>
                                        <div className={`text-3xl font-bold mb-1 ${visualColorClass}`}>
                                            {stat.value}
                                        </div>
                                        <div className="text-sm text-slate-500 uppercase tracking-wider font-medium">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Image Column */}
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900/50 aspect-[4/3] group">
                                <div className={`absolute inset-0 bg-gradient-to-tr ${visualColorClass.replace('text-', 'from-').replace('500', '500/10')} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={heroImage}
                                    alt={`${title} mockup`}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 -z-10 animate-pulse" />
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-white/5 backdrop-blur-md rounded-full border border-white/10 -z-10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Challenge Section */}
            <section className="py-16 md:py-24 px-4 bg-ha-bg-soft/50">
                <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-12 md:gap-24 items-start">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
                            <span className="text-xs font-bold text-red-400 uppercase tracking-wider">Проблема</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            {challenge.title}
                        </h2>
                        <p className="text-lg text-slate-400 leading-relaxed mb-8">
                            {challenge.description}
                        </p>
                    </div>
                    <div className="bg-ha-card-dark border border-ha-border-dark rounded-2xl p-8">
                        <h3 className="text-lg font-semibold text-white mb-6">Ключевые сложности</h3>
                        <ul className="space-y-4">
                            {challenge.points.map((point, i) => (
                                <li key={i} className="flex gap-3 items-start text-slate-300">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500/50 flex-shrink-0" />
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* 3. Solution Section */}
            <section className="py-16 md:py-24 px-4 relative overflow-hidden">
                {/* Background Glow */}
                <div className={`absolute top-1/4 right-0 w-[500px] h-[500px] opacity-10 blur-[120px] rounded-full pointer-events-none ${visualColorClass.replace('text-', 'bg-')}`} />

                <div className="container mx-auto max-w-5xl">
                    <div className="mb-16">
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6`}>
                            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Решение</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 max-w-2xl">
                            {solution.title}
                        </h2>
                        <p className="text-lg text-slate-400 leading-relaxed max-w-3xl">
                            {solution.description}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {/* Tech Stack */}
                        <div className="bg-ha-card-dark border border-ha-border-dark rounded-2xl p-8">
                            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                                Технологии
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {solution.technologies.map((tech, i) => (
                                    <Badge key={i} variant="outline" className="border-white/10 text-slate-300">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* Key Features / Steps */}
                        <div className="bg-ha-card-dark border border-ha-border-dark rounded-2xl p-8">
                            <h3 className="text-lg font-semibold text-white mb-6">Что мы сделали</h3>
                            <ul className="space-y-4">
                                {solution.features.map((feature, i) => (
                                    <li key={i} className="flex gap-3 items-start text-slate-300">
                                        <CheckCircle2 className={`w-5 h-5 mt-0.5 ${visualColorClass}`} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Placeholder for Analytics/Ads Images */}
                    <div className="bg-slate-900/50 border border-white/10 rounded-3xl aspect-video md:aspect-[21/9] flex flex-col items-center justify-center p-8 text-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
                        <div className="relative z-10 p-6 bg-slate-950/80 backdrop-blur-sm rounded-xl border border-white/10 shadow-2xl">
                            <TrendingUp className={`w-12 h-12 mb-4 mx-auto ${visualColorClass}`} />
                            <p className="text-slate-400 mb-2">Место для скриншота аналитики или графика</p>
                            <p className="text-xs text-slate-600 uppercase tracking-wider">Real Data Visualization</p>
                        </div>
                    </div>

                </div>
            </section>

            {/* 4. Results Section */}
            <section className="py-16 md:py-24 px-4 bg-ha-bg-soft/30 border-t border-white/5">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                                <span className="text-xs font-bold text-green-400 uppercase tracking-wider">Результат</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                {results.title}
                            </h2>
                            <p className="text-lg text-slate-400 leading-relaxed mb-8">
                                {results.description}
                            </p>
                        </div>

                        {/* Result Cards */}
                        <div className="grid grid-cols-1 gap-4">
                            {results.stats.map((stat, i) => (
                                <div key={i} className={`bg-ha-card-dark border border-ha-border-dark p-6 rounded-xl flex items-center ${stat.label ? 'justify-between' : 'justify-start'}`}>
                                    {stat.label && <span className="text-slate-400 font-medium">{stat.label}</span>}
                                    <span className={`${stat.label ? 'text-2xl text-right' : 'text-lg text-left'} font-bold ${visualColorClass}`}>{stat.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. CTA Section */}
            <section className="py-24 px-4 text-center">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{cta?.title || "Готовы повторить успех?"}</h2>
                    <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                        {cta?.text || "Давайте обсудим вашу задачу. Мы погрузимся в ваш бизнес так же глубоко, как в этом кейсе."}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            onClick={() => openContactModal()}
                            className="rounded-full px-10 h-14 text-lg bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-500/20"
                        >
                            Обсудить проект
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            asChild
                            className="rounded-full px-10 h-14 text-lg border-white/10 bg-white/5 text-white hover:bg-white/10"
                        >
                            <Link href="/#projects">Другие кейсы</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
