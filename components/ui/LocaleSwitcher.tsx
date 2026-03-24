"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const otherLocale = locale === "ru" ? "cs" : "ru";
  const label = otherLocale === "cs" ? "CZ" : "RU";
  const ariaLabel =
    locale === "cs" ? "Přepnout do ruštiny" : "Переключить на чешский";

  return (
    <button
      type="button"
      onClick={() => router.replace(pathname, { locale: otherLocale })}
      className="text-sm font-bold text-[#1A1A1A]/70 hover:text-[#FF3366] transition-colors px-2 py-1 rounded-lg border border-[#1A1A1A]/10 hover:border-[#FF3366]/30"
      aria-label={ariaLabel}
    >
      {label}
    </button>
  );
}
