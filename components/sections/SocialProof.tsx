"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { end: 55, suffix: "+", label: "ПРОЕКТОВ", highlight: false },
  { end: 250, suffix: "%", label: "СРЕДНИЙ РОСТ", highlight: true },
  { end: 9, suffix: "+", label: "ЛЕТ ОПЫТА", highlight: false },
];

function useCountUp(end: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const steps = 40;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      const progress = current / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));

      if (current >= steps) {
        clearInterval(timer);
        setCount(end);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [started, end, duration]);

  return { count, ref };
}

export default function SocialProof() {
  return (
    <section className="px-5 py-6 md:px-6 md:py-8">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 divide-y-2 divide-[#1A1A1A]/10 rounded-2xl border-2 border-[#1A1A1A] bg-white shadow-[6px_6px_0px_0px_#1A1A1A] sm:grid-cols-3 sm:divide-x-2 sm:divide-y-0">
          {stats.map((stat) => {
            const { count, ref } = useCountUp(stat.end);
            return (
              <div
                key={stat.label}
                ref={ref}
                className="flex flex-col items-center gap-1 px-6 py-6 md:gap-2 md:px-10 md:py-8"
              >
                <span
                  className={`text-4xl font-extrabold tracking-tight md:text-6xl ${stat.highlight ? "text-[#FF3366]" : "text-[#1A1A1A]"}`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {stat.highlight && (
                    <span className="relative">
                      <span className="relative z-10">
                        {count}
                        {stat.suffix}
                      </span>
                      <span className="absolute -inset-x-2 bottom-0 top-1/3 -z-0 bg-[#B3D4FC]/40" />
                    </span>
                  )}
                  {!stat.highlight && (
                    <>
                      {count}
                      {stat.suffix}
                    </>
                  )}
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#1A1A1A]/50 md:text-sm md:tracking-[0.2em]">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
