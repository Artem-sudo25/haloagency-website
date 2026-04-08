import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, buildMetadata, webPageJsonLd } from "@/lib/seo";

const signatureFont = Caveat({
  subsets: ["latin", "cyrillic"],
  weight: ["700"],
  display: "swap",
});

const testimonialAccents = [
  { accentClass: "bg-[#FF3366]" },
  { accentClass: "bg-[#FFD166]" },
  { accentClass: "bg-[#06D6A0]" },
  { accentClass: "bg-[#3B82F6]" },
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.about" });
  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path: "/about",
    locale,
    openGraphTitle: t("ogTitle"),
    openGraphDescription: t("ogDescription"),
  });
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "aboutPage" });
  const tb = await getTranslations({ locale, namespace: "breadcrumbs" });

  const breadcrumbItems = [
    { label: tb("home"), href: "/" },
    { label: tb("about"), href: "/about" },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(breadcrumbItems),
          webPageJsonLd({
            name: t("jsonLd.name"),
            description: t("jsonLd.description"),
            path: "/about",
            locale,
          }),
        ]}
      />
      <main className="min-h-screen bg-[#F5F5F7] pt-20">
        <div
          className="fixed inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#d1d5db 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10">
          <section className="px-6 py-12 md:py-24">
            <div className="mx-auto max-w-[1200px]">
              <Breadcrumbs items={breadcrumbItems} />

              <div className="grid grid-cols-1 gap-8 rounded-3xl border-2 border-[#1A1A1A] bg-white p-6 shadow-[8px_8px_0px_0px_#1A1A1A] md:grid-cols-[320px_minmax(0,1fr)] md:gap-10 md:p-10 lg:grid-cols-[360px_minmax(0,1fr)] lg:p-12">
                <div className="w-full max-w-[260px] justify-self-center sm:max-w-[300px] md:max-w-none md:justify-self-start">
                  <div className="relative aspect-[3/4] rounded-3xl border-2 border-[#1A1A1A] bg-[#FFD166] p-4 shadow-[6px_6px_0px_0px_#1A1A1A]">
                    <div className="relative h-full w-full overflow-hidden rounded-2xl border-2 border-[#1A1A1A]">
                      <Image
                        src="/halo-foundr.jpg"
                        alt={t("hero.founderAlt")}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 260px, (max-width: 1024px) 300px, 360px"
                        priority
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="inline-flex w-fit rounded-full border-2 border-[#1A1A1A] bg-[#FFD166] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A]">
                    {t("hero.badge")}
                  </div>

                  <h1
                    className="max-w-[820px] text-4xl font-extrabold leading-[1.1] text-[#1A1A1A] sm:text-5xl md:text-6xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {t("hero.titleLine1")}
                    <br />{t("hero.titleLine2")}
                  </h1>

                  <div className="max-w-[820px] space-y-4 text-base font-medium leading-relaxed text-[#1A1A1A]/75 md:text-lg">
                    <p>{t("hero.paragraph1")}</p>
                    <p>{t("hero.paragraph2")}</p>
                    <p>{t("hero.paragraph3")}</p>
                  </div>

                  <div className="pt-2">
                    <div
                      className={`${signatureFont.className} inline-block rotate-[-4deg] text-4xl leading-none text-[#1A1A1A] md:text-5xl`}
                    >
                      {t("hero.signature")}
                    </div>
                    <div className="mt-1 ml-1 h-0.5 w-24 rotate-[-3deg] rounded-full bg-[#FF3366]/70" />
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <Link
                      href="/contact"
                      data-cta-track="true"
                      data-cta-name={t("hero.ctaPrimary")}
                      data-cta-location="about_hero"
                      data-cta-category="primary"
                      className="inline-flex w-fit rounded-2xl border-2 border-[#1A1A1A] bg-[#FF3366] px-6 py-3 text-sm font-bold text-white shadow-[4px_4px_0px_0px_#1A1A1A] transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A]"
                    >
                      {t("hero.ctaPrimary")}
                    </Link>
                    <Link
                      href="/case-studies"
                      data-cta-track="true"
                      data-cta-name={t("hero.ctaSecondary")}
                      data-cta-location="about_hero"
                      data-cta-category="secondary"
                      className="text-sm font-bold text-[#1A1A1A] transition-colors hover:text-[#FF3366]"
                    >
                      {t("hero.ctaSecondary")}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="px-6 pb-12 md:pb-20">
            <div className="mx-auto grid max-w-[1200px] gap-6 md:grid-cols-2 xl:grid-cols-4">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="rounded-3xl border-2 border-[#1A1A1A] bg-white p-6 shadow-[6px_6px_0px_0px_#1A1A1A]"
                >
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/45">
                    {t(`teamCards.${i}.title`)}
                  </div>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-[#1A1A1A]/75">
                    {t(`teamCards.${i}.text`)}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="px-6 py-12 md:py-20">
            <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <div className="inline-flex w-fit rounded-full border-2 border-[#1A1A1A] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A]">
                  {t("principles.badge")}
                </div>
                <h2
                  className="mt-5 text-3xl font-extrabold leading-tight text-[#1A1A1A] sm:text-4xl md:text-5xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t("principles.title")}
                </h2>
              </div>

              <ul className="space-y-4">
                {[0, 1, 2, 3].map((i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 rounded-3xl border-2 border-[#1A1A1A] bg-white px-6 py-5 shadow-[6px_6px_0px_0px_#1A1A1A]"
                  >
                    <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#FF3366]" />
                    <span className="text-sm font-bold leading-relaxed text-[#1A1A1A]/80 md:text-base">
                      {t(`principles.items.${i}`)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="px-6 py-12 md:py-20">
            <div className="mx-auto max-w-[1200px]">
              <div className="mb-8">
                <div className="inline-flex w-fit rounded-full border-2 border-[#1A1A1A] bg-[#FFD166] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A]">
                  {t("decisionPoints.badge")}
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="rounded-3xl border-2 border-[#1A1A1A] bg-white p-6 shadow-[6px_6px_0px_0px_#1A1A1A]"
                  >
                    <h3
                      className="text-2xl font-extrabold text-[#1A1A1A]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {t(`decisionPoints.items.${i}.title`)}
                    </h3>
                    <p className="mt-4 text-sm font-medium leading-relaxed text-[#1A1A1A]/75">
                      {t(`decisionPoints.items.${i}.text`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="px-6 py-12 md:py-20">
            <div className="mx-auto max-w-[1200px]">
              <div className="max-w-[760px]">
                <div className="inline-flex w-fit rounded-full border-2 border-[#1A1A1A] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A]">
                  {t("testimonials.badge")}
                </div>
                <h2
                  className="mt-5 text-3xl font-extrabold leading-tight text-[#1A1A1A] sm:text-4xl md:text-5xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t("testimonials.title")}
                </h2>
                <p className="mt-4 max-w-[640px] text-base font-medium leading-relaxed text-[#1A1A1A]/70 md:text-lg">
                  {t("testimonials.subtitle")}
                </p>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {[0, 1, 2, 3].map((i) => (
                  <article
                    key={i}
                    className="flex h-full flex-col rounded-3xl border-2 border-[#1A1A1A] bg-white p-6 shadow-[6px_6px_0px_0px_#1A1A1A]"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="inline-flex rounded-full border-2 border-[#1A1A1A] bg-[#F5F5F7] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#1A1A1A]/75">
                        {t(`testimonials.items.${i}.focus`)}
                      </div>
                      <div
                        className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border-2 border-[#1A1A1A] text-sm font-extrabold text-white shadow-[4px_4px_0px_0px_#1A1A1A] ${testimonialAccents[i].accentClass}`}
                      >
                        {t(`testimonials.items.${i}.initial`)}
                      </div>
                    </div>

                    <p className="mt-5 flex-grow text-base font-bold leading-relaxed text-[#1A1A1A]/80">
                      &laquo;{t(`testimonials.items.${i}.quote`)}&raquo;
                    </p>

                    <div className="mt-6 border-t-2 border-dashed border-[#1A1A1A]/15 pt-4">
                      <div className="text-base font-extrabold text-[#1A1A1A]">
                        {t(`testimonials.items.${i}.author`)}
                      </div>
                      <div className="mt-1 text-sm font-medium text-[#1A1A1A]/60">
                        {t(`testimonials.items.${i}.details`)}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="px-6 py-12 md:py-20">
            <div className="mx-auto max-w-[960px] rounded-3xl border-2 border-[#1A1A1A] bg-[#1A1A1A] px-6 py-10 text-white shadow-[8px_8px_0px_0px_#FF3366] md:px-10 md:py-12">
              <h2
                className="text-3xl font-extrabold leading-tight md:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("finalCta.title")}
              </h2>
              <p className="mt-5 max-w-2xl text-base font-medium leading-relaxed text-white/75 md:text-lg">
                {t("finalCta.subtitle")}
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  data-cta-track="true"
                  data-cta-name={t("finalCta.ctaPrimary")}
                  data-cta-location="about_final_cta"
                  data-cta-category="primary"
                  className="inline-flex w-fit rounded-2xl border-2 border-[#1A1A1A] bg-[#FF3366] px-6 py-3 text-sm font-bold text-white shadow-[4px_4px_0px_0px_#FFFFFF] transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#FFFFFF]"
                >
                  {t("finalCta.ctaPrimary")}
                </Link>
                <Link
                  href="/growth-plan"
                  data-cta-track="true"
                  data-cta-name={t("finalCta.ctaSecondary")}
                  data-cta-location="about_final_cta"
                  data-cta-category="secondary"
                  className="text-sm font-bold text-white transition-colors hover:text-[#FFD166]"
                >
                  {t("finalCta.ctaSecondary")}
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
