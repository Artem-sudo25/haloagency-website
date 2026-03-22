import type { LucideIcon } from "lucide-react";
import { Check, Globe, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import DemoForm from "@/components/sections/DemoForm";
import { Button } from "@/components/ui/button";

type InfoCard = {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
};

type FAQItem = {
  q: string;
  a: string;
};

type WebServicePageProps = {
  eyebrow: string;
  badge: string;
  title: string;
  description: string;
  chips: string[];
  proofs: string[];
  accentColor?: string;
  scenarioTitle: string;
  scenarioDescription: string;
  scenarioCards: InfoCard[];
  deliverableTitle: string;
  deliverableDescription: string;
  deliverableCards: InfoCard[];
  includedTitle: string;
  includedItems: string[];
  includedBonus?: string;
  priceLabel: string;
  priceValue: string;
  priceNote?: string;
  faqTitle: string;
  faqDescription: string;
  faqs: FAQItem[];
};

export default function WebServicePage({
  eyebrow,
  badge,
  title,
  description,
  chips,
  proofs,
  accentColor = "#FFD166",
  scenarioTitle,
  scenarioDescription,
  scenarioCards,
  deliverableTitle,
  deliverableDescription,
  deliverableCards,
  includedTitle,
  includedItems,
  includedBonus,
  priceLabel,
  priceValue,
  priceNote,
  faqTitle,
  faqDescription,
  faqs,
}: WebServicePageProps) {
  const breadcrumbItems = [
    { label: "Главная", href: "/" },
    { label: "Сайты", href: "/web" },
    { label: title },
  ];

  return (
    <main className="min-h-screen bg-[#F5F5F7] pt-20">
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#d1d5db 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10">
        {/* Hero */}
        <section className="px-4 py-10 md:py-28">
          <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <Breadcrumbs items={breadcrumbItems} />
              <div
                className="mb-8 inline-flex items-center gap-2 rounded-xl border-2 border-[#1A1A1A] px-4 py-2 shadow-[4px_4px_0px_0px_#1A1A1A]"
                style={{ backgroundColor: accentColor }}
              >
                <Globe className="h-4 w-4 text-[#1A1A1A]" />
                <span className="text-sm font-bold uppercase tracking-wide text-[#1A1A1A]">
                  {badge}
                </span>
              </div>

              <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/45">
                {eyebrow}
              </div>

              <h1
                className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-[#1A1A1A] md:text-7xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {title}
              </h1>

              <p className="mb-8 max-w-2xl text-xl leading-relaxed text-[#1A1A1A]/65">
                {description}
              </p>

              <div className="mb-8 flex flex-wrap gap-3">
                {chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border-2 border-[#1A1A1A] bg-white px-4 py-2 text-sm font-bold text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A]"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              <Button
                asChild
                size="lg"
                className="h-12 rounded-xl border-2 border-[#1A1A1A] bg-[#FF3366] px-8 font-bold text-white shadow-[4px_4px_0px_0px_#1A1A1A] transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] hover:bg-[#FF3366] hover:shadow-[6px_6px_0px_0px_#1A1A1A]"
              >
                <Link
                  href="/contact"
                  data-cta-track="true"
                  data-cta-name="Обсудить этот формат"
                  data-cta-location="web_service_hero"
                  data-cta-category="primary"
                >
                  Обсудить этот формат
                </Link>
              </Button>
            </div>

            <div className="rounded-3xl border-2 border-[#1A1A1A] bg-white p-8 shadow-[8px_8px_0px_0px_#1A1A1A]">
              <div
                className="mb-6 inline-flex items-center gap-2 rounded-xl border-2 border-[#1A1A1A] px-4 py-2 shadow-[4px_4px_0px_0px_#1A1A1A]"
                style={{ backgroundColor: accentColor }}
              >
                <ShieldCheck className="h-4 w-4 text-[#1A1A1A]" />
                <span className="text-sm font-bold uppercase tracking-wide text-[#1A1A1A]">
                  Что важно на старте
                </span>
              </div>
              <ul className="space-y-4">
                {proofs.map((proof) => (
                  <li key={proof} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#FF3366]" />
                    <span className="text-sm leading-relaxed text-[#1A1A1A]/75">
                      {proof}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Scenarios */}
        <section className="px-4 py-16 md:py-24">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              <h2
                className="mb-4 text-4xl font-extrabold text-[#1A1A1A] md:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {scenarioTitle}
              </h2>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#1A1A1A]/60">
                {scenarioDescription}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {scenarioCards.map((card, i) => (
                <div
                  key={card.title}
                  className="rounded-3xl border-2 border-[#1A1A1A] bg-white p-8 shadow-[8px_8px_0px_0px_#1A1A1A]"
                >
                  <div
                    className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A]"
                    style={{
                      backgroundColor:
                        i === 0
                          ? accentColor
                          : i === 1
                            ? "#F5F5F7"
                            : `${accentColor}80`,
                    }}
                  >
                    <card.icon className="h-5 w-5 text-[#1A1A1A]" />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-[#1A1A1A]">
                    {card.title}
                  </h3>
                  <div className="mb-4 text-sm font-bold uppercase tracking-wide text-[#1A1A1A]/45">
                    {card.subtitle}
                  </div>
                  <p className="text-sm leading-relaxed text-[#1A1A1A]/65">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section
          className="border-y-2 border-[#1A1A1A] px-4 py-16 md:py-24"
          style={{ backgroundColor: `${accentColor}15` }}
        >
          <div className="container mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              <h2
                className="mb-4 text-4xl font-extrabold text-[#1A1A1A] md:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {deliverableTitle}
              </h2>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#1A1A1A]/60">
                {deliverableDescription}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {deliverableCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-3xl border-2 border-[#1A1A1A] bg-white p-8 shadow-[8px_8px_0px_0px_#1A1A1A]"
                >
                  <div
                    className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A]"
                    style={{ backgroundColor: accentColor }}
                  >
                    <card.icon className="h-5 w-5 text-[#1A1A1A]" />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-[#1A1A1A]">
                    {card.title}
                  </h3>
                  <div className="mb-4 text-sm font-bold uppercase tracking-wide text-[#1A1A1A]/45">
                    {card.subtitle}
                  </div>
                  <p className="text-sm leading-relaxed text-[#1A1A1A]/65">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Included + Pricing */}
        <section className="px-4 py-16 md:py-24">
          <div className="container mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            {/* Included checklist */}
            <div className="rounded-3xl border-2 border-[#1A1A1A] bg-white p-8 shadow-[8px_8px_0px_0px_#1A1A1A] md:p-10">
              <h2
                className="mb-8 text-3xl font-extrabold text-[#1A1A1A] md:text-4xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {includedTitle}
              </h2>
              <ul className="space-y-5">
                {includedItems.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span
                      className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: accentColor }}
                    >
                      <Check className="h-3.5 w-3.5 text-[#1A1A1A]" />
                    </span>
                    <span className="text-base font-bold leading-snug text-[#1A1A1A] md:text-lg">
                      {item}
                    </span>
                  </li>
                ))}
                {includedBonus && (
                  <li className="flex items-start gap-4 border-t-2 border-dashed border-[#1A1A1A]/10 pt-5">
                    <span
                      className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#1A1A1A]"
                      style={{ backgroundColor: accentColor }}
                    >
                      <Check className="h-3.5 w-3.5 text-[#1A1A1A]" />
                    </span>
                    <span className="text-base font-bold leading-snug text-[#1A1A1A] md:text-lg">
                      {includedBonus}
                    </span>
                  </li>
                )}
              </ul>
            </div>

            {/* Pricing card */}
            <div
              className="rounded-3xl border-2 border-[#1A1A1A] p-8 shadow-[8px_8px_0px_0px_#1A1A1A] lg:sticky lg:top-28"
              style={{ backgroundColor: accentColor }}
            >
              <div className="mb-2 text-sm font-bold uppercase tracking-wide text-[#1A1A1A]/60">
                Ориентир по стоимости
              </div>
              <div className="mb-1 text-lg font-bold text-[#1A1A1A]">
                {priceLabel}
              </div>
              <div
                className="mb-4 text-5xl font-extrabold text-[#1A1A1A] md:text-6xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {priceValue}
              </div>
              {priceNote && (
                <p className="mb-6 text-sm leading-relaxed text-[#1A1A1A]/65">
                  {priceNote}
                </p>
              )}
              <Button
                asChild
                size="lg"
                className="h-12 w-full rounded-xl border-2 border-[#1A1A1A] bg-[#1A1A1A] px-8 font-bold text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] hover:bg-[#1A1A1A] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)]"
              >
                <Link
                  href="/contact"
                  data-cta-track="true"
                  data-cta-name="Обсудить проект"
                  data-cta-location="web_service_pricing"
                  data-cta-category="primary"
                >
                  Обсудить проект
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          className="border-y-2 border-[#1A1A1A] px-4 py-16 md:py-24"
          style={{ backgroundColor: `${accentColor}10` }}
        >
          <div className="container mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              <h2
                className="mb-4 text-4xl font-extrabold text-[#1A1A1A] md:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {faqTitle}
              </h2>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#1A1A1A]/60">
                {faqDescription}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {faqs.map((item) => (
                <div
                  key={item.q}
                  className="rounded-3xl border-2 border-[#1A1A1A] bg-white p-8 shadow-[8px_8px_0px_0px_#1A1A1A]"
                >
                  <h3 className="mb-4 text-xl font-bold text-[#1A1A1A]">
                    {item.q}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#1A1A1A]/65">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Form CTA */}
        <DemoForm
          source={`web_${badge.toLowerCase().replace(/\s+/g, "_")}`}
          accentColor={accentColor}
        />
      </div>
    </main>
  );
}
