"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Maximize2, X } from "lucide-react";
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
    visualColorClass: string;
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

    // Map visualColorClass to a neo-brutalist accent color background
    const getAccentBg = (colorClass: string) => {
        if (colorClass.includes('blue')) return 'bg-[#118AB2]';
        if (colorClass.includes('teal')) return 'bg-[#06D6A0]';
        if (colorClass.includes('amber')) return 'bg-[#FFD166]';
        return 'bg-[#FF3366]';
    }
    const accentBg = getAccentBg(visualColorClass);

    return (
        <main className="min-h-screen bg-[#F5F5F7] pt-20 overflow-hidden">
            {/* 1. Hero Section */}
            <section className="relative py-16 md:py-20 md:py-32 px-4 border-b-2 border-[#1A1A1A] overflow-hidden">
                <div className="container mx-auto max-w-6xl relative z-10">
                    <Link href="/case-studies" className="inline-flex items-center gap-2 text-[#1A1A1A] font-bold hover:text-[#FF3366] mb-8 transition-colors underline decoration-2 underline-offset-4">
                        <ArrowLeft className="w-4 h-4" />
                        Назад к кейсам
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Text Column */}
                        <div>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {tags.map((tag, i) => (
                                    <span key={i} className="text-xs px-3 py-1 rounded-md border-2 border-[#1A1A1A] bg-white text-[#1A1A1A] font-bold shadow-[2px_2px_0px_0px_#1A1A1A]">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-[#1A1A1A] mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                                {title}
                            </h1>
                            <p className="text-xl text-[#1A1A1A]/80 font-medium max-w-xl leading-relaxed mb-8">
                                {subtitle}
                            </p>

                            <div className="grid grid-cols-2 gap-6 border-t-2 border-[#1A1A1A] pt-8">
                                {mainStats.slice(0, 2).map((stat, i) => (
                                    <div key={i}>
                                        <div className="text-4xl font-extrabold mb-1 text-[#1A1A1A]" style={{ fontFamily: 'var(--font-display)' }}>
                                            {stat.value}
                                        </div>
                                        <div className="text-sm text-[#1A1A1A]/60 uppercase tracking-wider font-bold">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Image Column */}
                        <div className="relative">
                            <div className="relative rounded-3xl overflow-hidden border-2 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#1A1A1A] bg-white aspect-[4/3] group">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={heroImage}
                                    alt={`${title} mockup`}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            {/* Decorative Elements */}
                            <div className={`absolute -bottom-6 -right-6 w-24 h-24 ${accentBg} rounded-2xl border-2 border-[#1A1A1A] -z-10 shadow-[4px_4px_0px_0px_#1A1A1A]`} />
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#B19CD9] rounded-full border-2 border-[#1A1A1A] -z-10 shadow-[4px_4px_0px_0px_#1A1A1A]" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Challenge Section */}
            <section className="py-16 md:py-24 px-4 bg-white border-b-2 border-[#1A1A1A]">
                <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 md:gap-24 items-start">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FF3366] border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] mb-6">
                            <span className="text-sm font-bold text-white uppercase tracking-wider">Проблема</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#1A1A1A] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                            {challenge.title}
                        </h2>
                        <p className="text-lg text-[#1A1A1A]/80 font-medium leading-relaxed mb-8">
                            {challenge.description}
                        </p>
                    </div>
                    <div className="bg-[#FFD166] border-2 border-[#1A1A1A] rounded-3xl p-8 shadow-[8px_8px_0px_0px_#1A1A1A]">
                        <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6">Ключевые сложности</h3>
                        <ul className="space-y-4">
                            {challenge.points.map((point, i) => (
                                <li key={i} className="flex gap-3 items-start text-[#1A1A1A] font-medium">
                                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1A1A1A] flex-shrink-0" />
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* 3. Solution Section */}
            <section className="py-16 md:py-24 px-4 relative overflow-hidden bg-[#F5F5F7]">
                <div className="container mx-auto max-w-6xl">
                    <div className="mb-16">
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl ${accentBg} border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] mb-6`}>
                            <span className={`text-sm font-bold ${accentBg === 'bg-[#118AB2]' ? 'text-white' : 'text-[#1A1A1A]'} uppercase tracking-wider`}>Решение</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#1A1A1A] mb-6 max-w-3xl" style={{ fontFamily: 'var(--font-display)' }}>
                            {solution.title}
                        </h2>
                        <p className="text-lg text-[#1A1A1A]/80 font-medium leading-relaxed max-w-3xl">
                            {solution.description}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {/* Tech Stack */}
                        <div className="bg-white border-2 border-[#1A1A1A] rounded-3xl p-8 shadow-[6px_6px_0px_0px_#1A1A1A]">
                            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6 flex items-center gap-2">
                                Технологии
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {solution.technologies.map((tech, i) => (
                                    <span key={i} className="text-sm px-4 py-2 rounded-md border-2 border-[#1A1A1A] bg-[#F5F5F7] text-[#1A1A1A] font-bold shadow-[2px_2px_0px_0px_#1A1A1A]">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Key Features / Steps */}
                        <div className="bg-white border-2 border-[#1A1A1A] rounded-3xl p-8 shadow-[6px_6px_0px_0px_#1A1A1A]">
                            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6">Что мы сделали</h3>
                            <ul className="space-y-4">
                                {solution.features.map((feature, i) => (
                                    <li key={i} className="flex gap-3 items-start text-[#1A1A1A] font-medium">
                                        <CheckCircle2 className={`w-6 h-6 mt-0.5 text-[#06D6A0]`} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Analytics/Ads Images or Placeholder */}
                    {(mobileImage || analyticsImage) && (
                        <div className="relative w-full rounded-3xl overflow-hidden bg-white border-2 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#1A1A1A] group">
                            {mobileImage ? (
                                <div className="p-8 md:p-12">
                                    <div className={`flex flex-col lg:flex-row gap-12 items-center justify-center relative z-10 ${imageContext ? 'lg:justify-between' : ''}`}>
                                        <div
                                            onClick={() => setIsLightboxOpen(true)}
                                            className="relative flex-shrink-0 cursor-zoom-in group/image max-w-[280px] md:max-w-xs lg:max-w-md w-full"
                                        >
                                            <div className="relative rounded-2xl overflow-hidden border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] bg-white transition-transform duration-500 group-hover/image:-translate-y-1 group-hover/image:-translate-x-1 group-hover/image:shadow-[6px_6px_0px_0px_#1A1A1A]">
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img
                                                    src={mobileImage}
                                                    alt="Search Result"
                                                    className="w-full h-auto block border-2 border-[#1A1A1A] rounded-xl"
                                                />
                                                <div className="absolute inset-0 bg-[#1A1A1A]/0 group-hover/image:bg-[#1A1A1A]/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover/image:opacity-100">
                                                    <div className="bg-white border-2 border-[#1A1A1A] p-3 rounded-xl text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] transform translate-y-4 group-hover/image:translate-y-0 transition-transform duration-300">
                                                        <Maximize2 className="w-6 h-6" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {imageContext && (
                                            <div className="bg-[#B19CD9] border-2 border-[#1A1A1A] p-8 rounded-3xl max-w-lg relative overflow-hidden shadow-[6px_6px_0px_0px_#1A1A1A]">
                                                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">{imageContext.title}</h3>
                                                <p className="text-[#1A1A1A] font-medium leading-relaxed mb-6">
                                                    {imageContext.description}
                                                </p>
                                                {imageContext.items && (
                                                    <ul className="space-y-3">
                                                        {imageContext.items.map((item, i) => (
                                                            <li key={i} className="flex gap-3 items-start text-sm text-[#1A1A1A] font-bold">
                                                                <div className={`mt-1.5 w-2 h-2 rounded-full bg-[#1A1A1A] flex-shrink-0`} />
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
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    onClick={() => setIsLightboxOpen(false)}
                                                    className="absolute inset-0 bg-[#1A1A1A]/90 backdrop-blur-sm"
                                                />

                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.95 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.95 }}
                                                    className="relative z-10 max-h-[90vh] max-w-[90vw] overflow-hidden rounded-2xl shadow-2xl border-2 border-white"
                                                >
                                                    <button
                                                        onClick={() => setIsLightboxOpen(false)}
                                                        className="absolute top-4 right-4 p-2 bg-white hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[4px_4px_0px_0px_#1A1A1A] border-2 border-[#1A1A1A] text-[#1A1A1A] rounded-xl transition-all z-20"
                                                    >
                                                        <X className="w-5 h-5" />
                                                    </button>
                                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                                    <img
                                                        src={mobileImage}
                                                        alt="Full view"
                                                        className="max-h-[90vh] w-auto object-contain bg-white rounded-xl"
                                                        onClick={(e) => e.stopPropagation()}
                                                    />
                                                </motion.div>
                                            </div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <div className="p-4 md:p-8 lg:p-12 relative">
                                    {/* Browser Window Container */}
                                    <div className="relative rounded-2xl overflow-hidden border-2 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#1A1A1A] bg-white">
                                        {/* Browser Header/Chrome */}
                                        <div className="h-10 bg-[#F5F5F7] border-b-2 border-[#1A1A1A] flex items-center px-4 gap-2">
                                            <div className="w-3 h-3 rounded-full border-2 border-[#1A1A1A] bg-red-400" />
                                            <div className="w-3 h-3 rounded-full border-2 border-[#1A1A1A] bg-yellow-400" />
                                            <div className="w-3 h-3 rounded-full border-2 border-[#1A1A1A] bg-green-400" />
                                        </div>

                                        {/* Image */}
                                        <div className="relative bg-white border-t-0 p-4">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={analyticsImage}
                                                alt="Analytics Dashboard"
                                                className="w-full h-auto block rounded-xl border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </section>

            {/* 4. Results Section */}
            <section className="py-16 md:py-24 px-4 bg-white border-y-2 border-[#1A1A1A]">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#06D6A0] border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] mb-6">
                                <span className="text-sm font-bold text-[#1A1A1A] uppercase tracking-wider">Результат</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1A1A1A] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                                {results.title}
                            </h2>
                            <p className="text-lg text-[#1A1A1A]/80 font-medium leading-relaxed mb-8">
                                {results.description}
                            </p>
                        </div>

                        {/* Result Cards */}
                        <div className="grid grid-cols-1 gap-4">
                            {results.stats.map((stat, i) => (
                                <div key={i} className={`bg-white border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] p-6 rounded-2xl flex items-center ${stat.label ? 'justify-between' : 'justify-start'}`}>
                                    {stat.label && <span className="text-[#1A1A1A]/80 font-bold">{stat.label}</span>}
                                    <span className={`${stat.label ? 'text-4xl text-right' : 'text-xl text-left'} font-extrabold text-[#1A1A1A]`} style={{ fontFamily: 'var(--font-display)' }}>{stat.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. CTA Section */}
            <section className="py-16 md:py-24 px-4 text-center">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-6" style={{ fontFamily: 'var(--font-display)' }}>{cta?.title || "Готовы повторить успех?"}</h2>
                    <p className="text-xl text-[#1A1A1A]/80 font-medium mb-10 max-w-2xl mx-auto">
                        {cta?.text || "Давайте обсудим вашу задачу. Мы погрузимся в ваш бизнес так же глубоко, как в этом кейсе."}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            onClick={() => openContactModal()}
                            className="rounded-xl px-10 h-14 text-lg bg-[#FF3366] hover:bg-[#FF3366] text-white font-bold border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-y-[1px] active:translate-x-[1px] active:shadow-[0px_0px_0px_0px_#1A1A1A] transition-all"
                        >
                            Обсудить проект
                        </Button>
                        <Button
                            asChild
                            className="rounded-xl px-10 h-14 text-lg bg-white hover:bg-white text-[#1A1A1A] font-bold border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-y-[1px] active:translate-x-[1px] active:shadow-[0px_0px_0px_0px_#1A1A1A] transition-all"
                        >
                            <Link href="/case-studies">Другие кейсы</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
