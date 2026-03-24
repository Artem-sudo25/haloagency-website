"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { cn } from "@/lib/utils";

type LocaleSwitcherProps = {
  className?: string;
};

export function LocaleSwitcher({ className }: LocaleSwitcherProps) {
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
      className={cn(
        "rounded-lg border border-[#1A1A1A]/10 px-2 py-1 text-sm font-bold text-[#1A1A1A]/70 transition-colors hover:border-[#FF3366]/30 hover:text-[#FF3366]",
        className,
      )}
      aria-label={ariaLabel}
    >
      {label}
    </button>
  );
}
