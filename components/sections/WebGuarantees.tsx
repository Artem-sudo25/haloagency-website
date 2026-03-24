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
import { useTranslations } from "next-intl";
import { CSSScrollAnimation, CSSStagger, CSSStaggerItem } from "@/components/ui/css-scroll-animation";

const guaranteeIcons = [Calendar, RefreshCcw, LifeBuoy, FileCheck];
const clauses = ["§1", "§2", "§3", "§4"];
const trustBadgeIcons = [Shield, BadgeCheck, HeartHandshake];

export default function WebGuarantees() {
  const t = useTranslations("webGuarantees");

  return (
    <section className="py-16 md:py-24 bg-[#F5F5F7] border-y-2 border-[#1A1A1A] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#06D6A0]/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <CSSScrollAnimation className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#06D6A0] border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] mb-6">
            <Shield className="w-5 h-5 text-[#1A1A1A]" />
            <span className="text-sm font-bold text-[#1A1A1A] uppercase tracking-wider">{t("eyebrow")}</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-[#1A1A1A] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            {t("title")}
          </h2>

          <p className="text-[#1A1A1A]/80 font-medium text-xl md:text-2xl max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </CSSScrollAnimation>

        <CSSStagger className="flex flex-wrap justify-center gap-4 mb-16">
          {[0, 1, 2].map((i) => {
            const Icon = trustBadgeIcons[i];
            return (
              <CSSStaggerItem key={i} index={i}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A]">
                  <Icon className="w-5 h-5 text-[#FF3366]" />
                  <span className="text-base font-bold text-[#1A1A1A]">{t(`trustBadges.${i}`)}</span>
                </div>
              </CSSStaggerItem>
            );
          })}
        </CSSStagger>

        <CSSStagger className="grid md:grid-cols-2 gap-6">
          {[0, 1, 2, 3].map((i) => {
            const Icon = guaranteeIcons[i];
            return (
              <CSSStaggerItem key={i} index={i}>
                <div className="group relative p-8 rounded-3xl bg-white border-2 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#1A1A1A] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_#1A1A1A] transition-all duration-300 h-full">
                  <div className="absolute top-6 right-6 text-3xl font-extrabold text-[#1A1A1A]/20" style={{ fontFamily: 'var(--font-display)' }}>
                    {clauses[i]}
                  </div>

                  <div className="w-16 h-16 rounded-2xl bg-[#06D6A0] border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] flex items-center justify-center mb-6 z-10 relative">
                    <Icon className="w-8 h-8 text-[#1A1A1A]" />
                  </div>

                  <h3 className="text-2xl font-extrabold text-[#1A1A1A] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                    {t(`items.${i}.title`)}
                  </h3>

                  <p className="text-[#1A1A1A]/80 font-medium text-lg leading-relaxed mb-6">
                    {t(`items.${i}.description`)}
                  </p>

                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FFD166] border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] text-sm font-bold tracking-wider text-[#1A1A1A]">
                    <BadgeCheck className="w-5 h-5" />
                    {t(`items.${i}.seal`)}
                  </div>
                </div>
              </CSSStaggerItem>
            );
          })}
        </CSSStagger>

        <CSSScrollAnimation delay={0.3} className="mt-16 text-center text-lg font-bold text-[#1A1A1A]/80 bg-white border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] p-4 rounded-2xl mx-auto max-w-2xl">
          {t("bottomNote")}
        </CSSScrollAnimation>
      </div>
    </section>
  );
}
