import { ArrowRight, BarChart3, Code2, Cog, Megaphone } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";

const serviceConfigs = [
  {
    icon: Code2,
    cardBg: "bg-[#FFD166]",
    key: "0" as const,
    href: "/web",
    quickLinks: [
      { key: "0" as const, href: "/web/landing-pages" },
      { key: "1" as const, href: "/web/business-websites" },
      { key: "2" as const, href: "/web/ecommerce" },
    ],
    offset: false,
  },
  {
    icon: Megaphone,
    cardBg: "bg-[#06D6A0]",
    key: "1" as const,
    href: "/ads",
    quickLinks: [
      { key: "0" as const, href: "/ads/google-ads" },
      { key: "1" as const, href: "/ads/meta-ads" },
      { key: "2" as const, href: "/ads" },
    ],
    offset: true,
  },
  {
    icon: BarChart3,
    cardBg: "bg-[#B19CD9]",
    key: "2" as const,
    href: "/tracking",
    quickLinks: [
      { key: "0" as const, href: "/tracking" },
      { key: "1" as const, href: "/packages/leads" },
      { key: "2" as const, href: "/case-studies" },
    ],
    offset: false,
  },
  {
    icon: Cog,
    cardBg: "bg-[#FFD166]",
    key: "3" as const,
    href: "/automation",
    quickLinks: [
      { key: "0" as const, href: "/automation" },
      { key: "1" as const, href: "/tracking" },
      { key: "2" as const, href: "/contact" },
    ],
    offset: true,
  },
];

export default async function Services() {
  const t = await getTranslations({ namespace: "services" });

  return (
    <section id="services" className="bg-white px-5 py-12 md:px-6 md:py-24">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 md:gap-12">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-3 text-center md:gap-4">
          <h2
            className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t("title")}
          </h2>
          <p className="mt-2 max-w-xl text-base text-[#1A1A1A]/70 md:mt-4 md:text-lg">
            {t("subtitle")}
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {serviceConfigs.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.href}
                className={`relative flex flex-col gap-4 overflow-hidden rounded-2xl border-2 border-[#1A1A1A] p-5 shadow-[6px_6px_0px_0px_#1A1A1A] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#1A1A1A] sm:p-6 md:gap-6 md:rounded-xl md:p-8 ${service.cardBg} ${service.offset ? "mt-0 lg:mt-8" : ""}`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#1A1A1A] bg-white text-[#1A1A1A] md:h-14 md:w-14`}
                >
                  <Icon className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <h3
                  className="text-xl font-bold text-[#1A1A1A] md:text-2xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t(`items.${service.key}.title`)}
                </h3>
                <p className="flex-grow text-[13px] font-medium leading-relaxed text-[#1A1A1A] md:text-sm">
                  {t(`items.${service.key}.description`)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.quickLinks.map((link, index) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`rounded-full border-2 border-[#1A1A1A] bg-white/80 px-3 py-1 text-xs font-bold text-[#1A1A1A] hover:bg-white ${index === 2 ? "hidden sm:inline-flex" : "inline-flex"}`}
                    >
                      {t(`items.${service.key}.quickLinks.${link.key}`)}
                    </Link>
                  ))}
                </div>
                <div className="mt-2 flex items-center justify-between border-t-2 border-[#1A1A1A]/20 pt-3 text-sm font-bold text-[#1A1A1A] md:mt-4 md:pt-4">
                  <Link href={service.href} className="hover:underline">
                    {t("learnMore")}
                  </Link>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
