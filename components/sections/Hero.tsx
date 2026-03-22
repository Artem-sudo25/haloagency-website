import Link from "next/link";

const quickRoutes = [
  { label: "Сайты", href: "/web" },
  { label: "Реклама", href: "/ads" },
  { label: "Аналитика", href: "/tracking" },
  { label: "Автоматизация", href: "/automation" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] px-5 pb-6 pt-24 md:min-h-0 md:px-6 md:pb-10 md:pt-28">
      <div className="mx-auto flex w-full max-w-[1200px] flex-1 flex-col justify-center">
        <div className="flex flex-col items-center gap-8 py-4 text-center md:gap-10 md:py-8">
          <h1
            className="relative max-w-5xl font-[var(--font-display)] text-[2.75rem] font-extrabold leading-[1.05] tracking-tight text-[#1A1A1A] sm:text-5xl md:text-7xl lg:text-8xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Сайты, реклама
            <br />и{" "}
            <span className="relative inline-block z-10">
              аналитика
              <svg
                aria-hidden="true"
                className="absolute -bottom-2 left-0 h-4 w-full text-[#FF3366] -z-10"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 100 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 10 Q 50 20 100 10"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="4"
                />
              </svg>
            </span>
            <br />
            для роста бизнеса.
          </h1>

          <p className="max-w-3xl text-base font-bold leading-relaxed text-[#1A1A1A] md:text-2xl">
            Помогаем бизнесу в Чехии получать больше заявок и продаж: делаем
            сайты, запускаем Google Ads и Meta Ads, настраиваем аналитику и
            автоматизацию так, чтобы всё работало вместе.
          </p>

          <div className="mt-2 flex flex-col items-center justify-center gap-4 sm:mt-4 sm:flex-row sm:gap-6">
            <Link
              href="/contact"
              data-cta-track="true"
              data-cta-name="Обсудить проект"
              data-cta-location="home_hero"
              data-cta-category="primary"
              className="rounded-2xl border-2 border-[#1A1A1A] bg-[#FF3366] px-8 py-4 text-base font-bold text-white shadow-[4px_4px_0px_0px_#1A1A1A] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-x-1 active:translate-y-1 active:shadow-[0px_0px_0px_0px_#1A1A1A] md:px-10 md:py-5 md:text-lg"
            >
              Обсудить проект
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {quickRoutes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                data-cta-track="true"
                data-cta-name={route.label}
                data-cta-location="home_quick_routes"
                data-cta-category="routing"
                className="rounded-full border-2 border-[#1A1A1A] bg-white px-3 py-1.5 text-xs font-bold text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A] sm:px-4 sm:py-2 sm:text-sm"
              >
                {route.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
