import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import ScopedNextIntlProvider from "@/components/i18n/ScopedNextIntlProvider";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import Contact from "@/components/sections/Contact";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, buildMetadata, webPageJsonLd } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.contact" });
  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path: "/contact",
    locale,
    openGraphTitle: t("ogTitle"),
    openGraphDescription: t("ogDescription"),
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "contactPage" });
  const tb = await getTranslations({ locale, namespace: "breadcrumbs" });

  const breadcrumbItems = [
    { label: tb("home"), href: "/" },
    { label: tb("contact"), href: "/contact" },
  ];

  const responseFacts = [
    { label: t("responseFacts.0.label"), value: t("responseFacts.0.value") },
    { label: t("responseFacts.1.label"), value: t("responseFacts.1.value") },
  ];

  const briefChecklist = [
    t("briefChecklist.0"),
    t("briefChecklist.1"),
    t("briefChecklist.2"),
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(breadcrumbItems),
          webPageJsonLd({
            name: t("jsonLd.name"),
            description: t("jsonLd.description"),
            path: "/contact",
            type: "ContactPage",
            locale,
          }),
        ]}
      />
      <main className="relative bg-[#F5F5F7] min-h-screen">
        <div
          className="fixed inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#d1d5db 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative z-10">
          <section className="px-5 pt-28 pb-12 md:px-6 md:pt-32 md:pb-16">
            <div className="mx-auto max-w-[1200px]">
              <Breadcrumbs items={breadcrumbItems} />

              <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-12">
                {/* Left: Info */}
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-5">
                    <div className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-[#1A1A1A] bg-white px-4 py-2 text-sm font-bold text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A]">
                      {t("badge")}
                    </div>
                    <h1
                      className="text-4xl font-extrabold tracking-tight text-[#1A1A1A] sm:text-5xl md:text-6xl"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {t("titleLine1")}
                      <br />
                      {t("titleLine2")}
                    </h1>
                    <p className="max-w-lg text-base font-medium leading-relaxed text-[#1A1A1A]/70 md:text-lg">
                      {t("subtitle")}
                    </p>
                  </div>

                  {/* Contact details */}
                  <ContactDetails
                    emailLabel={t("details.emailLabel")}
                    phoneLabel={t("details.phoneLabel")}
                    officeLabel={t("details.officeLabel")}
                    officeValue={t("details.officeValue")}
                    messengersLabel={t("details.messengersLabel")}
                  />

                  {/* Response facts */}
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {responseFacts.map((fact) => (
                      <div
                        key={fact.label}
                        className="rounded-2xl border-2 border-[#1A1A1A] bg-[#FFD166] px-5 py-4 shadow-[4px_4px_0px_0px_#1A1A1A]"
                      >
                        <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/50">
                          {fact.label}
                        </div>
                        <div className="mt-2 text-sm font-bold text-[#1A1A1A] md:text-base">
                          {fact.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Brief checklist */}
                  <div className="rounded-2xl border-2 border-[#1A1A1A] bg-white p-5 shadow-[4px_4px_0px_0px_#1A1A1A]">
                    <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/50">
                      {t("briefChecklistTitle")}
                    </div>
                    <ul className="mt-4 space-y-3">
                      {briefChecklist.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm font-medium text-[#1A1A1A]/70"
                        >
                          <span className="mt-1 h-2 w-2 rounded-full bg-[#FF3366]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right: Form */}
                <div className="lg:sticky lg:top-24">
                  <ScopedNextIntlProvider
                    namespaces={["common", "contact", "validation.contact"]}
                  >
                    <Contact />
                  </ScopedNextIntlProvider>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

function ContactDetails({
  emailLabel,
  phoneLabel,
  officeLabel,
  officeValue,
  messengersLabel,
}: {
  emailLabel: string;
  phoneLabel: string;
  officeLabel: string;
  officeValue: string;
  messengersLabel: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <a
        href="mailto:info@helloagency.cz"
        className="group flex items-center gap-4"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#1A1A1A] bg-[#FF3366]/10 text-[#FF3366]">
          <svg
            aria-hidden="true"
            className="h-4 w-4"
            fill="none"
            focusable="false"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]/40">
            {emailLabel}
          </div>
          <span className="font-medium transition-colors group-hover:text-[#FF3366]">
            info@helloagency.cz
          </span>
        </div>
      </a>
      <a href="tel:+420705729502" className="group flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#1A1A1A] bg-[#FF3366]/10 text-[#FF3366]">
          <svg
            aria-hidden="true"
            className="h-4 w-4"
            fill="none"
            focusable="false"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]/40">
            {phoneLabel}
          </div>
          <span className="font-medium transition-colors group-hover:text-[#FF3366]">
            +420 705 729 502
          </span>
        </div>
      </a>
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#1A1A1A] bg-[#FF3366]/10 text-[#FF3366]">
          <svg
            aria-hidden="true"
            className="h-4 w-4"
            fill="none"
            focusable="false"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]/40">
            {officeLabel}
          </div>
          <span className="font-medium">{officeValue}</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#1A1A1A] bg-[#FF3366]/10 text-[#FF3366]">
          <svg
            aria-hidden="true"
            className="h-4 w-4"
            fill="none"
            focusable="false"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]/40">
            {messengersLabel}
          </div>
          <div className="mt-0.5 flex items-center gap-3">
            <a
              href="https://wa.me/420705729502"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium transition-colors hover:text-[#FF3366]"
            >
              WhatsApp
            </a>
            <span className="text-[#1A1A1A]/30">·</span>
            <a
              href="https://t.me/+420705729502"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium transition-colors hover:text-[#FF3366]"
            >
              Telegram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
