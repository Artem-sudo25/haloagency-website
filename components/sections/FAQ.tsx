"use client";

import { Minus, Plus } from "lucide-react";
import { useState, type ReactNode } from "react";
import { useTranslations } from "next-intl";
import { CSSStagger, CSSStaggerItem } from "@/components/ui/css-scroll-animation";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  items?: FAQItem[];
  title?: ReactNode;
  eyebrow?: string;
  footer?: ReactNode;
};

export default function FAQ({
  items,
  title,
  eyebrow = "FAQ",
  footer,
}: FAQProps) {
  const t = useTranslations("faq");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = items ?? Array.from({ length: 10 }, (_, i) => ({
    question: t(`items.${i}.question`),
    answer: t(`items.${i}.answer`),
  }));

  const faqTitle = title ?? <>{t("title")}</>;

  return (
    <section id="faq" className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-4 mb-8">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            {faqTitle}
          </h2>
        </div>

        {/* FAQ Items */}
        <CSSStagger className="w-full max-w-3xl mx-auto flex flex-col gap-4">
          {faqItems.map((faq, index) => (
            <CSSStaggerItem key={index} index={index}>
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left bg-white p-6 rounded-2xl border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-y-1 active:translate-x-1 active:shadow-[0px_0px_0px_0px_#1A1A1A] transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg md:text-xl font-extrabold text-[#1A1A1A]" style={{ fontFamily: 'var(--font-display)' }}>
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#1A1A1A] flex items-center justify-center transition-all duration-300 mt-0.5 ${openIndex === index
                    ? "bg-[#FFD166] text-[#1A1A1A] rotate-180 shadow-[2px_2px_0px_0px_#1A1A1A]"
                    : "bg-[#F5F5F7] text-[#1A1A1A]"
                    }`}>
                    {openIndex === index ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </div>
                <div
                  className={`grid transition-all duration-300 ease-out ${openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="overflow-hidden">
                    <div className="pt-4 text-[#1A1A1A] font-medium leading-relaxed text-base">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </button>
            </CSSStaggerItem>
          ))}
        </CSSStagger>

        {footer ? <div className="mt-6 text-center">{footer}</div> : null}
      </div>
    </section>
  );
}
