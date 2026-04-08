"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const GrowthPlanMagnetForm = dynamic(() => import("./GrowthPlanMagnetForm"), {
  ssr: false,
  loading: () => <GrowthPlanMagnetFormSkeleton />,
});

export default function GrowthPlanMagnetFormLazy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (shouldLoad) {
      return;
    }

    const node = containerRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px 0px" },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <div ref={containerRef}>
      {shouldLoad ? <GrowthPlanMagnetForm /> : <GrowthPlanMagnetFormSkeleton />}
    </div>
  );
}

function GrowthPlanMagnetFormSkeleton() {
  return (
    <div className="flex flex-col gap-6" aria-hidden="true">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="h-[88px] rounded-xl border-2 border-[#1A1A1A] bg-white/70 shadow-[4px_4px_0px_0px_#1A1A1A]" />
        <div className="h-[88px] rounded-xl border-2 border-[#1A1A1A] bg-white/70 shadow-[4px_4px_0px_0px_#1A1A1A]" />
      </div>
      <div className="h-[88px] rounded-xl border-2 border-[#1A1A1A] bg-white/70 shadow-[4px_4px_0px_0px_#1A1A1A]" />
      <div className="h-[88px] rounded-xl border-2 border-[#1A1A1A] bg-white/70 shadow-[4px_4px_0px_0px_#1A1A1A]" />
      <div className="flex flex-wrap gap-2">
        {["slot-1", "slot-2", "slot-3", "slot-4", "slot-5"].map((slot) => (
          <div
            key={slot}
            className="h-11 w-28 rounded-xl border-2 border-[#1A1A1A] bg-white/70 shadow-[4px_4px_0px_0px_#1A1A1A]"
          />
        ))}
      </div>
      <div className="h-36 rounded-2xl border-2 border-[#1A1A1A] bg-white/70 shadow-[4px_4px_0px_0px_#1A1A1A]" />
      <div className="h-[88px] rounded-xl border-2 border-[#1A1A1A] bg-white/70 shadow-[4px_4px_0px_0px_#1A1A1A]" />
      <div className="h-16 rounded-2xl border-2 border-[#1A1A1A] bg-[#1A1A1A]/90 shadow-[4px_4px_0px_0px_#FFFFFF]" />
    </div>
  );
}
