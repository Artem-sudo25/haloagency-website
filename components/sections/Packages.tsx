import {
  ArrowRight,
  Check,
  ClipboardList,
  Crown,
  Layers,
  MessageSquare,
  Rocket,
  ShoppingCart,
  Users,
  Zap,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";

const packageConfigs = [
  {
    key: "0" as const,
    href: "/packages/site",
    highlight: false,
    icon: Rocket,
    iconBg: "bg-[#06D6A0]",
    featuresCount: 6,
    relatedLinksHrefs: ["/web/landing-pages", "/web/business-websites"],
  },
  {
    key: "1" as const,
    href: "/packages/leads",
    highlight: true,
    icon: Zap,
    iconBg: "bg-[#FF3366]",
    featuresCount: 5,
    relatedLinksHrefs: ["/ads/google-ads", "/ads/meta-ads", "/tracking"],
  },
  {
    key: "2" as const,
    href: "/packages/ecommerce",
    highlight: false,
    icon: ShoppingCart,
    iconBg: "bg-[#FFD166]",
    featuresCount: 6,
    relatedLinksHrefs: ["/web/ecommerce", "/tracking", "/ads"],
  },
  {
    key: "3" as const,
    href: "/contact",
    highlight: false,
    icon: Crown,
    iconBg: "bg-[#B19CD9]",
    featuresCount: 6,
    relatedLinksHrefs: ["/automation", "/tracking", "/contact"],
  },
];

const whyIcons = [Layers, Users, Zap];
const processIcons = [MessageSquare, ClipboardList, Rocket];

export default async function Packages() {
  const t = await getTranslations("packages");

  return (
    <div className="flex flex-col">
      {/* Package Cards */}
      <section id="pricing" className="px-6 py-8 md:py-12">
        <div className="mx-auto grid max-w-[1200px] gap-6 lg:grid-cols-4">
          {packageConfigs.map((pkg) => {
            const badge = pkg.key === "1" ? t(`items.${pkg.key}.badge`) : null;
            return (
              <div
                key={pkg.key}
                className={`relative flex h-full flex-col rounded-3xl border-2 border-[#1A1A1A] p-8 transition-all ${
                  pkg.highlight
                    ? "bg-[#1A1A1A] text-white shadow-[8px_8px_0px_0px_#FF3366]"
                    : "bg-white text-[#1A1A1A] shadow-[8px_8px_0px_0px_#1A1A1A]"
                }`}
              >
                {badge && (
                  <div className="absolute -top-4 right-4 rotate-3 border-2 border-[#1A1A1A] bg-[#FF3366] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-[4px_4px_0px_0px_#1A1A1A]">
                    {badge}
                  </div>
                )}

                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl border-2 border-[#1A1A1A] text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] ${pkg.iconBg}`}
                >
                  <pkg.icon className="h-6 w-6" />
                </div>

                <h3
                  className="mb-1 text-2xl font-bold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t(`items.${pkg.key}.title`)}
                </h3>
                <p
                  className={`mb-4 text-sm ${pkg.highlight ? "text-white/60" : "text-[#1A1A1A]/60"}`}
                >
                  {t(`items.${pkg.key}.subtitle`)}
                </p>

                <div
                  className={`mb-6 border-b pb-6 ${pkg.highlight ? "border-white/10" : "border-[#1A1A1A]/10"}`}
                >
                  <p
                    className={`text-sm ${pkg.highlight ? "text-white/60" : "text-[#1A1A1A]/60"}`}
                  >
                    {t("items.0.priceSetup") !== undefined && (
                      <>
                        {t("priceSetupLabel")}{" "}
                        <span
                          className={`font-bold ${pkg.highlight ? "text-white" : "text-[#1A1A1A]"}`}
                        >
                          {t(`items.${pkg.key}.priceSetup`)}
                        </span>
                      </>
                    )}
                  </p>
                  <p
                    className={`mt-1 text-sm ${pkg.highlight ? "text-white/60" : "text-[#1A1A1A]/60"}`}
                  >
                    {t("priceMonthlyLabel")}{" "}
                    <span
                      className={`font-bold ${pkg.highlight ? "text-white" : "text-[#1A1A1A]"}`}
                    >
                      {t(`items.${pkg.key}.priceMonthly`)}
                    </span>
                  </p>
                  {pkg.key === "1" && (
                    <p
                      className={`mt-2 text-xs ${pkg.highlight ? "text-white/40" : "text-[#1A1A1A]/40"}`}
                    >
                      {t(`items.${pkg.key}.priceNote`)}
                    </p>
                  )}
                </div>

                <p
                  className={`mb-6 text-sm leading-relaxed ${pkg.highlight ? "text-white/75" : "text-[#1A1A1A]/70"}`}
                >
                  {t(`items.${pkg.key}.description`)}
                </p>

                <ul className="flex flex-1 flex-col gap-3 text-sm">
                  {Array.from({ length: pkg.featuresCount }, (_, i) => (
                    <li
                      key={t(`items.${pkg.key}.features.${i}`)}
                      className="flex items-start gap-2"
                    >
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#FF3366]" />
                      <span>{t(`items.${pkg.key}.features.${i}`)}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {pkg.relatedLinksHrefs.map((href, i) => (
                    <Link
                      key={href}
                      href={href}
                      className={`rounded-full border-2 border-[#1A1A1A] px-3 py-1 text-xs font-bold ${
                        pkg.highlight
                          ? "bg-white text-[#1A1A1A]"
                          : "bg-[#F5F5F7] text-[#1A1A1A]"
                      }`}
                    >
                      {t(`items.${pkg.key}.relatedLinks.${i}`)}
                    </Link>
                  ))}
                </div>

                <Link
                  href={pkg.href}
                  data-cta-track="true"
                  data-cta-name={t(`items.${pkg.key}.cta`)}
                  data-cta-location="packages_grid"
                  data-cta-category={pkg.highlight ? "primary" : "package"}
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#1A1A1A] px-5 py-3 text-sm font-bold transition-all ${
                    pkg.highlight
                      ? "bg-[#FF3366] text-white shadow-[4px_4px_0px_0px_#FFFFFF] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#FFFFFF]"
                      : "bg-white text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A]"
                  }`}
                >
                  {t(`items.${pkg.key}.cta`)}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why a Package */}
      <section className="border-y-2 border-[#1A1A1A] bg-[#1A1A1A] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12 text-center">
            <h2
              className="mb-4 text-3xl font-extrabold text-white md:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("whyPackage.title")}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[0, 1, 2].map((i) => {
              const Icon = whyIcons[i];
              return (
                <div
                  key={t(`whyPackage.items.${i}.title`)}
                  className="rounded-3xl border-2 border-white/15 bg-white/5 p-8"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border-2 border-white/20 bg-[#FF3366]">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-white">
                    {t(`whyPackage.items.${i}.title`)}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60">
                    {t(`whyPackage.items.${i}.text`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12 text-center">
            <h2
              className="mb-4 text-3xl font-extrabold text-[#1A1A1A] md:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("process.title")}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[#1A1A1A]/60">
              {t("process.subtitle")}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[0, 1, 2].map((i) => {
              const Icon = processIcons[i];
              const num = String(i + 1).padStart(2, "0");
              return (
                <div
                  key={t(`process.steps.${i}.title`)}
                  className="relative rounded-3xl border-2 border-[#1A1A1A] bg-white p-8 shadow-[8px_8px_0px_0px_#1A1A1A]"
                >
                  <div className="mb-5 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-[#1A1A1A] bg-[#06D6A0] shadow-[4px_4px_0px_0px_#1A1A1A]">
                      <Icon className="h-5 w-5 text-[#1A1A1A]" />
                    </div>
                    <span
                      className="text-4xl font-extrabold text-[#1A1A1A]/10"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {num}
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-[#1A1A1A]">
                    {t(`process.steps.${i}.title`)}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-[#1A1A1A]/65">
                    {t(`process.steps.${i}.description`)}
                  </p>
                  <div className="inline-flex rounded-full border-2 border-[#1A1A1A] bg-[#F5F5F7] px-3 py-1 text-xs font-bold text-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A]">
                    {t(`process.steps.${i}.time`)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Proof Point */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border-2 border-[#1A1A1A] bg-[#FFD166] p-8 shadow-[8px_8px_0px_0px_#1A1A1A] md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <div className="mb-4 text-sm font-bold uppercase tracking-[0.15em] text-[#1A1A1A]/50">
                  {t("proofPoint.eyebrow")}
                </div>
                <h3
                  className="mb-4 text-2xl font-extrabold text-[#1A1A1A] md:text-3xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t("proofPoint.title")}
                </h3>
                <p className="text-base leading-relaxed text-[#1A1A1A]/70">
                  {t("proofPoint.description")}
                </p>
                <Link
                  href="/case-studies/nejablonky"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#1A1A1A] transition-colors hover:text-[#FF3366]"
                >
                  {t("proofPoint.cta")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="flex flex-col items-center rounded-2xl border-2 border-[#1A1A1A] bg-white px-8 py-6 shadow-[4px_4px_0px_0px_#1A1A1A]">
                <div className="text-xs font-bold uppercase tracking-wide text-[#1A1A1A]/50">
                  {t("proofPoint.roasLabel")}
                </div>
                <div
                  className="text-5xl font-extrabold text-[#1A1A1A]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  5.6
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2
              className="mb-4 text-3xl font-extrabold text-[#1A1A1A] md:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("faq.title")}
            </h2>
          </div>

          <div className="space-y-6">
            {[0, 1, 2].map((i) => (
              <div
                key={t(`faq.items.${i}.question`)}
                className="rounded-3xl border-2 border-[#1A1A1A] bg-white p-8 shadow-[8px_8px_0px_0px_#1A1A1A]"
              >
                <h3 className="mb-3 text-lg font-bold text-[#1A1A1A]">
                  {t(`faq.items.${i}.question`)}
                </h3>
                <p className="text-sm leading-relaxed text-[#1A1A1A]/65">
                  {t(`faq.items.${i}.answer`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2
            className="mb-6 text-3xl font-extrabold text-[#1A1A1A] md:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t("bottomCta.title")}
          </h2>
          <p className="mb-10 text-lg text-[#1A1A1A]/60">
            {t("bottomCta.subtitle")}
          </p>
          <Link
            href="/contact"
            data-cta-track="true"
            data-cta-name={t("bottomCta.cta")}
            data-cta-location="packages_bottom_cta"
            data-cta-category="primary"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#1A1A1A] bg-[#FF3366] px-10 py-4 text-lg font-bold text-white shadow-[4px_4px_0px_0px_#1A1A1A] transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A]"
          >
            {t("bottomCta.cta")}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
