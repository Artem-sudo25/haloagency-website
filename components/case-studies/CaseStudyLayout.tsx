"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle2, TrendingUp, Maximize2, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
    imageContext?: {
        title: string;
        description: string;
        items?: string[];
    };
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
    analyticsImage,
    mobileImage,
    imageContext,
    cta,
}: CaseStudyLayoutProps & { analyticsImage?: string; mobileImage?: string }) {
    const { open: openContactModal } = useContactModalActions();
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

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

                    {/* Analytics/Ads Images or Placeholder */}
                    {(mobileImage || analyticsImage) && (
                        <div className="relative w-full rounded-3xl overflow-hidden bg-slate-900/50 border border-white/10 group">
                            {mobileImage ? (
                                <div className="p-8 md:p-12">
                                    {/* Flex container for Desktop Layout */}
                                    <div className={`flex flex-col lg:flex-row gap-12 items-center justify-center relative z-10 ${imageContext ? 'lg:justify-between' : ''}`}>

                                        {/* Clean Vertical Card (Trigger) */}
                                        <div
                                            onClick={() => setIsLightboxOpen(true)}
                                            className="relative flex-shrink-0 cursor-zoom-in group/image max-w-[280px] md:max-w-xs lg:max-w-md w-full"
                                        >
                                            {/* Background Glow */}
                                            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] opacity-20 blur-[100px] ${visualColorClass.replace('text-', 'bg-')}`} />

                                            {/* Image Container */}
                                            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-white transition-transform duration-500 group-hover/image:scale-[1.02]">
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img
                                                    src={mobileImage}
                                                    alt="Search Result"
                                                    className="w-full h-auto block"
                                                />

                                                {/* Hover Overlay */}
                                                <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover/image:opacity-100">
                                                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-full text-white shadow-xl transform translate-y-4 group-hover/image:translate-y-0 transition-transform duration-300">
                                                        <Maximize2 className="w-6 h-6" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Context Card (if provided) */}
                                        {imageContext && (
                                            <div className="bg-ha-card-dark/80 backdrop-blur-md border border-white/10 p-8 rounded-2xl max-w-lg relative overflow-hidden">
                                                <div className={`absolute top-0 right-0 w-32 h-32 opacity-10 blur-[60px] rounded-full pointer-events-none ${visualColorClass.replace('text-', 'bg-')}`} />

                                                <h3 className="text-xl font-bold text-white mb-4">{imageContext.title}</h3>
                                                <p className="text-slate-300 leading-relaxed mb-6">
                                                    {imageContext.description}
                                                </p>

                                                {imageContext.items && (
                                                    <ul className="space-y-3">
                                                        {imageContext.items.map((item, i) => (
                                                            <li key={i} className="flex gap-3 items-start text-sm text-slate-400">
                                                                <div className={`mt-1.5 w-1.5 h-1.5 rounded-full ${visualColorClass.replace('text-', 'bg-')}`} />
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        )}
                                    </div>

                                    {/* Lightbox Modal */}
                                    <AnimatePresence>
                                        {isLightboxOpen && (
                                            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                                                {/* Backdrop */}
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    onClick={() => setIsLightboxOpen(false)}
                                                    className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                                                />

                                                {/* Modal Content */}
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.95 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.95 }}
                                                    className="relative z-10 max-h-[90vh] max-w-[90vw] overflow-hidden rounded-lg shadow-2xl"
                                                >
                                                    <button
                                                        onClick={() => setIsLightboxOpen(false)}
                                                        className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors backdrop-blur-md z-20"
                                                    >
                                                        <X className="w-5 h-5" />
                                                    </button>
                                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                                    <img
                                                        src={mobileImage}
                                                        alt="Full view"
                                                        className="max-h-[90vh] w-auto object-contain bg-white rounded-lg"
                                                        onClick={(e) => e.stopPropagation()}
                                                    />
                                                </motion.div>
                                            </div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <div className="p-4 md:p-8 lg:p-12 relative">
                                    {/* Background Gradient Effect */}
                                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 opacity-20 blur-[80px] rounded-full pointer-events-none ${visualColorClass.replace('text-', 'bg-')}`} />

                                    {/* Browser Window Container */}
                                    <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-[#1e293b]">
                                        {/* Browser Header/Chrome */}
                                        <div className="h-8 bg-slate-900/80 backdrop-blur-md border-b border-white/5 flex items-center px-4 gap-2">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                                        </div>

                                        {/* Image */}
                                        <div className="relative bg-white"> {/* Ensure white bg for screenshot if it has transparency */}
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={analyticsImage}
                                                alt="Analytics Dashboard"
                                                className="w-full h-auto block"
                                            />
                                            {/* Subtle Shine/Glass Effect over image */}
                                            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none mix-blend-overlay" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
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
