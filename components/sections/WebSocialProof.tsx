"use client";

import { MessageSquare, Star } from "lucide-react";
import { useTranslations } from "next-intl";
import { CSSScrollAnimation, CSSStagger, CSSStaggerItem } from "@/components/ui/css-scroll-animation";

const testimonialConfigs = [
  { key: "0" as const, rating: 5, avatar: "MK", color: "bg-[#FF3366]" },
  { key: "1" as const, rating: 5, avatar: "АС", color: "bg-[#06D6A0]" },
  { key: "2" as const, rating: 5, avatar: "ПН", color: "bg-[#FFD166]" },
];

export default function WebSocialProof() {
  const t = useTranslations("webSocialProof");

  return (
    <section className="py-16 md:py-24 bg-white relative border-y-2 border-[#1A1A1A] overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-[#FF3366]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-[#06D6A0]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <CSSScrollAnimation className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-[#FFD166] border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] mb-6">
            <MessageSquare className="w-5 h-5 text-[#1A1A1A]" />
            <span className="text-sm font-bold text-[#1A1A1A]">{t("eyebrow")}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            {t("title")}
          </h2>
          <p className="text-[#1A1A1A]/70 font-medium text-lg md:text-xl max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </CSSScrollAnimation>

        <CSSStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialConfigs.map((tc, index) => (
            <CSSStaggerItem key={tc.key} index={index}>
              <div className="h-full bg-[#F5F5F7] p-8 rounded-3xl border-2 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#1A1A1A] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_#1A1A1A] transition-all flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl border-2 border-[#1A1A1A] ${tc.color} shadow-[4px_4px_0px_0px_#1A1A1A] flex items-center justify-center flex-shrink-0`}>
                    <span className="text-lg font-extrabold text-white">
                      {tc.avatar}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-extrabold text-xl text-[#1A1A1A]">
                      {t(`testimonials.${tc.key}.name`)}
                    </h3>
                    <p className="text-[#1A1A1A]/60 font-medium">
                      {t(`testimonials.${tc.key}.company`)}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: tc.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-[#FF3366] fill-[#FF3366]"
                    />
                  ))}
                </div>

                <p className="text-[#1A1A1A] font-bold text-lg leading-relaxed flex-grow">
                  &ldquo;{t(`testimonials.${tc.key}.message`)}&rdquo;
                </p>
              </div>
            </CSSStaggerItem>
          ))}
        </CSSStagger>
      </div>
    </section>
  );
}
