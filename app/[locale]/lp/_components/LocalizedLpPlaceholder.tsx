import { Link } from "@/i18n/routing";

type LocalizedLpPlaceholderProps = {
  title: string;
  description: string;
};

export default function LocalizedLpPlaceholder({
  title,
  description,
}: LocalizedLpPlaceholderProps) {
  return (
    <main className="min-h-screen bg-[#F5F5F7] pt-24 pb-20 px-4">
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#d1d5db 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <section className="relative z-10 mx-auto max-w-4xl rounded-[32px] border-2 border-[#1A1A1A] bg-white p-8 shadow-[8px_8px_0px_0px_#1A1A1A] md:p-12">
        <div className="inline-flex rounded-full border-2 border-[#1A1A1A] bg-[#FFD166] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A]">
          Česká verze se dokončuje
        </div>

        <h1
          className="mt-6 text-4xl font-extrabold leading-[1.05] text-[#1A1A1A] md:text-6xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg font-medium leading-relaxed text-[#1A1A1A]/75">
          {description}
        </p>

        <div className="mt-8 rounded-3xl border-2 border-[#1A1A1A] bg-[#F5F5F7] p-6 shadow-[5px_5px_0px_0px_#1A1A1A]">
          <p className="text-base font-semibold leading-relaxed text-[#1A1A1A]/80">
            Nechceme na české verzi webu nechávat ruskou verzi stránky, proto tu
            teď místo ní najdete krátkou českou variantu. Pokud to spěchá,
            navážeme rovnou konkrétním dalším krokem.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/contact"
            data-cta-track="true"
            data-cta-name="Probrat zadání"
            data-cta-location="lp_placeholder"
            data-cta-category="primary"
            className="inline-flex w-fit rounded-2xl border-2 border-[#1A1A1A] bg-[#FF3366] px-6 py-3 text-sm font-bold text-white shadow-[4px_4px_0px_0px_#1A1A1A] transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A]"
          >
            Probrat zadání
          </Link>
          <Link
            href="/growth-plan"
            data-cta-track="true"
            data-cta-name="Nejdřív krátký rozbor"
            data-cta-location="lp_placeholder"
            data-cta-category="secondary"
            className="inline-flex w-fit rounded-2xl border-2 border-[#1A1A1A] bg-white px-6 py-3 text-sm font-bold text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A]"
          >
            Nejprve krátký rozbor
          </Link>
        </div>
      </section>
    </main>
  );
}
