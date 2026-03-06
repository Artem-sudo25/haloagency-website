"use client";

import Link from "next/link";
import { useContactModalActions } from "@/context/contact-modal-context";
import { CountUp } from "@/components/animated/CountUp";

export default function Hero() {
  const { open: openContactModal } = useContactModalActions();

  return (
    <section className="relative pt-28 pb-16 md:pb-24 px-6">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-16 md:gap-24">
        {/* Hero Content - Centered */}
        <div className="flex flex-col items-center justify-center text-center py-10 gap-10">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-[var(--font-display)] font-extrabold leading-[1.1] tracking-tight max-w-5xl text-[#1A1A1A] relative" style={{ fontFamily: 'var(--font-display)' }}>
            Весь{" "}
            <span className="relative inline-block z-10">
              маркетинг
              <svg className="absolute -bottom-2 left-0 w-full h-4 text-[#FF3366] -z-10" fill="none" preserveAspectRatio="none" viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeLinecap="round" strokeWidth="4" />
              </svg>
            </span>
            <br />под одной крышей.
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-2xl font-bold text-[#1A1A1A] max-w-2xl leading-relaxed">
            От сайта и аналитики до онлайн-рекламы и автоматизации процессов — один партнёр, одна ответственность.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-4">
            <Link
              href="/#projects"
              className="bg-[#FF3366] text-white px-10 py-5 rounded-2xl border-2 border-[#1A1A1A] text-lg font-bold shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-y-1 active:translate-x-1 active:shadow-[0px_0px_0px_0px_#1A1A1A] transition-all"
            >
              Посмотреть кейсы
            </Link>
            <Link
              href="/#pricing"
              className="text-[#1A1A1A] font-bold hover:text-[#FF3366] transition-colors text-lg border-b-2 border-[#1A1A1A] hover:border-[#FF3366]"
            >
              Узнать цены →
            </Link>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="w-full border-2 border-[#1A1A1A] rounded-xl bg-white shadow-[6px_6px_0px_0px_#1A1A1A] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2 divide-[#1A1A1A]">
            <div className="p-7 md:p-8 lg:p-10 flex flex-row md:flex-col items-center md:items-start justify-between md:justify-start gap-4 md:gap-2">
              <p className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A]" style={{ fontFamily: 'var(--font-display)' }}>
                <CountUp end={250} duration={2000} />+
              </p>
              <p className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A]/50">Проектов</p>
            </div>
            <div className="p-7 md:p-8 lg:p-10 flex flex-row md:flex-col items-center md:items-start justify-between md:justify-start gap-4 md:gap-2">
              <p className="text-4xl md:text-5xl font-extrabold text-[#FF3366]" style={{ fontFamily: 'var(--font-display)' }}>
                <CountUp end={400} duration={2000} />%
              </p>
              <p className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A]/50">Средний рост</p>
            </div>
            <div className="p-7 md:p-8 lg:p-10 flex flex-row md:flex-col items-center md:items-start justify-between md:justify-start gap-4 md:gap-2">
              <p className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A]" style={{ fontFamily: 'var(--font-display)' }}>
                <CountUp end={5} duration={1500} />+
              </p>
              <p className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A]/50">Лет опыта</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
