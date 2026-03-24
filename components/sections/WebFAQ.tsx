"use client";

import { Minus, Plus, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { CSSScrollAnimation, CSSStagger, CSSStaggerItem } from "@/components/ui/css-scroll-animation";

export default function WebFAQ() {
  const t = useTranslations("webFaq");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqAnswers: Record<number, React.ReactNode> = {
    0: (
      <>
        <p className="mb-3">{t("items.0.answer.intro")}</p>
        <p className="mb-2">{t("items.0.answer.clientsIntro")}</p>
        <ul className="list-disc list-inside mb-3 space-y-1 text-[#1A1A1A]/80">
          <li>{t("items.0.answer.clients.0")}</li>
          <li>{t("items.0.answer.clients.1")}</li>
          <li>{t("items.0.answer.clients.2")}</li>
        </ul>
        <p>{t("items.0.answer.outro")}</p>
      </>
    ),
    1: (
      <>
        <p className="mb-2">{t("items.1.answer.intro")}</p>
        <ul className="list-disc list-inside mb-3 space-y-1 text-[#1A1A1A]/80">
          <li>{t("items.1.answer.benefits.0")}</li>
          <li>{t("items.1.answer.benefits.1")}</li>
          <li>{t("items.1.answer.benefits.2")}</li>
        </ul>
        <p>{t("items.1.answer.outro")}</p>
      </>
    ),
    2: (
      <>
        <p className="mb-2">{t("items.2.answer.intro")}</p>
        <p className="mb-2">{t("items.2.answer.optionsIntro")}</p>
        <ul className="list-disc list-inside mb-3 space-y-1 text-[#1A1A1A]/80">
          <li>{t("items.2.answer.options.0")}</li>
          <li>{t("items.2.answer.options.1")}</li>
        </ul>
        <p>{t("items.2.answer.outro")}</p>
      </>
    ),
    3: (
      <>
        <p className="mb-2">{t("items.3.answer.intro")}</p>
        <p className="mb-2">{t("items.3.answer.optionsIntro")}</p>
        <ul className="list-disc list-inside mb-3 space-y-1 text-[#1A1A1A]/80">
          <li>{t("items.3.answer.options.0")}</li>
          <li>{t("items.3.answer.options.1")}</li>
        </ul>
        <p>{t("items.3.answer.outro")}</p>
      </>
    ),
    4: (
      <>
        <p className="mb-2">{t("items.4.answer.intro")}</p>
        <p className="mb-2">{t("items.4.answer.helpIntro")}</p>
        <ul className="list-disc list-inside mb-3 space-y-1 text-[#1A1A1A]/80">
          <li>{t("items.4.answer.help.0")}</li>
          <li>{t("items.4.answer.help.1")}</li>
          <li>{t("items.4.answer.help.2")}</li>
        </ul>
        <p>{t("items.4.answer.outro")}</p>
      </>
    ),
    5: (
      <>
        <p className="mb-2">{t("items.5.answer.intro")}</p>
        <ul className="list-disc list-inside mb-3 space-y-1 text-[#1A1A1A]/80">
          <li>{t("items.5.answer.points.0")}</li>
          <li>{t("items.5.answer.points.1")}</li>
          <li>{t("items.5.answer.points.2")}</li>
        </ul>
        <p>{t("items.5.answer.outro")}</p>
      </>
    ),
    6: (
      <>
        <p className="mb-2">{t("items.6.answer.intro")}</p>
        <p className="mb-2">{t("items.6.answer.timingIntro")}</p>
        <ul className="list-disc list-inside mb-3 space-y-1 text-[#1A1A1A]/80">
          <li>{t("items.6.answer.timings.0")}</li>
          <li>{t("items.6.answer.timings.1")}</li>
        </ul>
        <p>{t("items.6.answer.outro")}</p>
      </>
    ),
    7: (
      <>
        <p className="mb-2">{t("items.7.answer.intro")}</p>
        <p className="mb-2">{t("items.7.answer.pointsIntro")}</p>
        <ul className="list-disc list-inside mb-3 space-y-1 text-[#1A1A1A]/80">
          <li>{t("items.7.answer.points.0")}</li>
          <li>{t("items.7.answer.points.1")}</li>
          <li>{t("items.7.answer.points.2")}</li>
        </ul>
        <p>{t("items.7.answer.outro")}</p>
      </>
    ),
    8: (
      <>
        <p className="mb-2">{t("items.8.answer.p1")}</p>
        <p>{t("items.8.answer.p2")}</p>
      </>
    ),
  };

  return (
    <section id="faq" className="py-16 md:py-24 px-4 relative overflow-hidden bg-[#F5F5F7] border-y-2 border-[#1A1A1A]">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#118AB2]/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#06D6A0]/10 rounded-full blur-[100px]" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-[#06D6A0] border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] mb-6">
            <ShieldCheck className="w-5 h-5 text-[#1A1A1A]" />
            <span className="text-sm font-bold text-[#1A1A1A]">{t("eyebrow")}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#1A1A1A]" style={{ fontFamily: 'var(--font-display)' }}>
            {t("title")}<br className="hidden md:block" /> {t("titleLine2")}
          </h2>
        </div>

        <CSSStagger className="bg-white border-2 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#1A1A1A] rounded-3xl p-6 md:p-8">
          <div className="space-y-4">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <CSSStaggerItem key={i} index={i} className="group">
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className={`w-full text-left p-4 md:p-5 rounded-xl transition-all duration-300 border-2 border-[#1A1A1A] ${openIndex === i
                    ? "bg-[#06D6A0] shadow-[0px_0px_0px_0px_#1A1A1A] translate-y-[2px] translate-x-[2px]"
                    : "bg-white hover:bg-white shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A]"
                    }`}
                >
                  <div className="flex items-start justify-between gap-3 md:gap-4">
                    <span className="text-base md:text-lg font-bold text-[#1A1A1A]">
                      {t(`items.${i}.question`)}
                    </span>
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-xl border-2 border-[#1A1A1A] flex items-center justify-center transition-all duration-300 mt-1 shadow-[2px_2px_0px_0px_#1A1A1A] ${openIndex === i
                        ? "bg-[#FF3366] text-white rotate-180"
                        : "bg-white group-hover:bg-[#FFD166] text-[#1A1A1A]"
                        }`}
                    >
                      {openIndex === i ? (
                        <Minus className="w-5 h-5" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </div>
                  </div>
                  <div
                    className={`grid transition-all duration-300 ease-out ${openIndex === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pt-4 text-[#1A1A1A]/80 font-medium leading-relaxed text-base border-t-2 border-[#1A1A1A]/10 mt-4">
                        {faqAnswers[i]}
                      </div>
                    </div>
                  </div>
                </button>
              </CSSStaggerItem>
            ))}
          </div>
        </CSSStagger>
      </div>
    </section>
  );
}
