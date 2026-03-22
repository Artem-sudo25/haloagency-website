"use client";

import { useEffect } from "react";
import { trackCtaClick } from "@/lib/site-tracking";

const CTA_SELECTOR = "[data-cta-track='true']";

export function CtaTrackingListener() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) {
        return;
      }

      const target = event.target.closest<HTMLElement>(CTA_SELECTOR);
      if (!target) {
        return;
      }

      trackCtaClick({
        name: target.dataset.ctaName || target.textContent?.trim() || "cta",
        location: target.dataset.ctaLocation || window.location.pathname,
        category: target.dataset.ctaCategory,
        href: target.getAttribute("href") || target.dataset.ctaHref || "",
      });
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
