import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";

export default async function About() {
  const t = await getTranslations("about");

  return (
    <section id="about" className="px-5 py-8 md:px-6 md:py-12">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col items-center gap-5 rounded-2xl border-2 border-[#1A1A1A] bg-white px-6 py-6 shadow-[6px_6px_0px_0px_#1A1A1A] sm:flex-row sm:gap-6 md:gap-8 md:px-10 md:py-8">
          <div className="relative h-20 w-20 flex-shrink-0 rounded-full border-2 border-[#1A1A1A] bg-[#FFD166] p-1.5 shadow-[3px_3px_0px_0px_#1A1A1A] md:h-24 md:w-24">
            <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-[#1A1A1A]">
              <Image
                src="/halo-foundr.jpg"
                alt={t("founderAlt")}
                fill
                className="object-cover"
                sizes="96px"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1 text-center sm:text-left">
            <p className="text-base font-bold text-[#1A1A1A] md:text-lg">
              {t("quote")}
            </p>
            <p className="text-sm text-[#1A1A1A]/60 md:text-base">
              {t("aiNote")}
            </p>
            <div className="mt-3 flex w-full flex-col items-start gap-3 sm:w-auto sm:flex-row sm:items-center">
              <Link
                href="/contact"
                data-cta-track="true"
                data-cta-name={t("cta")}
                data-cta-location="home_about_compact"
                data-cta-category="primary"
                className="inline-flex w-fit rounded-2xl border-2 border-[#1A1A1A] bg-[#FF3366] px-5 py-2.5 text-sm font-bold text-white shadow-[4px_4px_0px_0px_#1A1A1A] transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A]"
              >
                {t("cta")}
              </Link>
              <Link
                href="/about"
                data-cta-track="true"
                data-cta-name={t("readMore")}
                data-cta-location="home_about_compact"
                data-cta-category="secondary"
                className="text-sm font-bold text-[#1A1A1A] transition-colors hover:text-[#FF3366]"
              >
                {t("readMore")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
