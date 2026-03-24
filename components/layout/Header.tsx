"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { LocaleSwitcher } from "@/components/ui/LocaleSwitcher";

type HeaderMode = "default" | "lp";
type TrafficSource = "meta" | "google" | "other";

interface HeaderProps {
  mode?: HeaderMode;
  trafficSource?: TrafficSource;
}

type DropdownSection = {
  title: string;
  items: {
    name: string;
    href: string;
  }[];
};

type NavLink = {
  name: string;
  href?: string;
  dropdownSections?: DropdownSection[];
};

export default function Header({
  mode = "default",
  trafficSource = "other",
}: HeaderProps) {
  const t = useTranslations("header");
  const tCommon = useTranslations("common");
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedLink, setMobileExpandedLink] = useState<string | null>(
    null,
  );
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeDropdownTimeoutRef = useRef<number | null>(null);
  const languageLabel = locale === "cs" ? "Jazyk" : "Язык";

  const navLinks: NavLink[] = [
    {
      name: t("nav.services"),
      dropdownSections: [
        {
          title: t("dropdown.ads.title"),
          items: [
            { name: t("dropdown.ads.items.ads"), href: "/ads" },
            { name: t("dropdown.ads.items.googleAds"), href: "/ads/google-ads" },
            { name: t("dropdown.ads.items.metaAds"), href: "/ads/meta-ads" },
          ],
        },
        {
          title: t("dropdown.web.title"),
          items: [
            { name: t("dropdown.web.items.websites"), href: "/web" },
            { name: t("dropdown.web.items.landingPages"), href: "/web/landing-pages" },
            { name: t("dropdown.web.items.businessWebsites"), href: "/web/business-websites" },
            { name: t("dropdown.web.items.ecommerce"), href: "/web/ecommerce" },
          ],
        },
        {
          title: t("dropdown.system.title"),
          items: [
            { name: t("dropdown.system.items.analyticsAndData"), href: "/tracking" },
            { name: t("dropdown.system.items.automation"), href: "/automation" },
          ],
        },
      ],
    },
    { name: t("nav.caseStudies"), href: "/case-studies" },
    { name: t("nav.packages"), href: "/packages" },
    { name: t("nav.aboutUs"), href: "/about" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (closeDropdownTimeoutRef.current) {
        window.clearTimeout(closeDropdownTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) {
      setMobileExpandedLink(null);
    }
  }, [mobileMenuOpen]);

  const clearDropdownCloseTimeout = () => {
    if (closeDropdownTimeoutRef.current) {
      window.clearTimeout(closeDropdownTimeoutRef.current);
      closeDropdownTimeoutRef.current = null;
    }
  };

  const openDropdown = (name: string) => {
    clearDropdownCloseTimeout();
    setActiveDropdown(name);
  };

  const scheduleDropdownClose = (name?: string) => {
    clearDropdownCloseTimeout();
    closeDropdownTimeoutRef.current = window.setTimeout(() => {
      setActiveDropdown((current) => {
        if (!name) {
          return null;
        }

        return current === name ? null : current;
      });
      closeDropdownTimeoutRef.current = null;
    }, 120);
  };

  if (mode === "lp") {
    const sourceLabel =
      trafficSource === "meta"
        ? "Meta Ads"
        : trafficSource === "google"
          ? "Google Ads"
          : null;

    const ctaLabel =
      trafficSource === "google"
        ? tCommon("cta.getPlanLaunch")
        : tCommon("cta.bookFree");

    return (
      <header className="fixed left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:right-auto md:w-[calc(100%-3rem)] md:max-w-6xl z-[9999] top-3 bg-white/80 backdrop-blur-xl shadow-sm py-3 rounded-2xl border border-[#1A1A1A]/5">
        <div className="w-full px-5 md:px-8 flex items-center justify-between gap-3">
          <Link href="/" className="flex-shrink-0 relative flex items-center">
            <span
              className="text-2xl font-extrabold tracking-tighter text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              HALO<span className="text-[#FF3366]">AGENCY</span>
            </span>
          </Link>

          <div className="flex items-center gap-2">
            {sourceLabel && (
              <span className="hidden md:inline-flex text-xs font-medium text-[#FF3366] bg-[#FF3366]/10 border border-[#FF3366]/20 rounded-full px-3 py-1">
                {sourceLabel}
              </span>
            )}
            <LocaleSwitcher />
            <Button
              asChild
              className="rounded-full bg-[#FF3366] hover:bg-[#FF3366]/90 text-white px-4 md:px-6 h-10 text-sm font-bold"
            >
              <Link href="#audit-form">{ctaLabel}</Link>
            </Button>
          </div>
        </div>
      </header>
    );
  }

  return (
    <>
      <header
        className={`fixed left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:right-auto md:w-[calc(100%-3rem)] md:max-w-6xl z-[9999] transition-all duration-300 rounded-2xl border-2 ${
          scrolled || mobileMenuOpen
            ? "top-3 bg-white border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] py-3"
            : "top-4 bg-white/90 backdrop-blur-lg shadow-[4px_4px_0px_0px_#1A1A1A] border-[#1A1A1A] py-4"
        }`}
      >
        <div className="w-full px-5 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 relative flex items-center">
            <span
              className="text-2xl font-extrabold tracking-tighter text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              HALO<span className="text-[#FF3366]">AGENCY</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isDropdownOpen = activeDropdown === link.name;

              return (
                <div key={link.name} className="relative">
                  {link.href ? (
                    <Link
                      href={link.href}
                      className="text-sm font-semibold text-[#1A1A1A]/80 hover:text-[#FF3366] transition-colors flex items-center gap-1"
                    >
                      {link.name}
                      {link.dropdownSections && (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      className="text-sm font-semibold text-[#1A1A1A]/80 hover:text-[#FF3366] transition-colors flex items-center gap-1"
                      aria-haspopup="true"
                      aria-expanded={isDropdownOpen}
                      onMouseEnter={() => openDropdown(link.name)}
                      onMouseLeave={() => scheduleDropdownClose(link.name)}
                      onFocus={() => openDropdown(link.name)}
                      onClick={() =>
                        setActiveDropdown((current) =>
                          current === link.name ? null : link.name,
                        )
                      }
                    >
                      {link.name}
                      {link.dropdownSections && (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  )}

                  {/* Dropdown */}
                  {link.dropdownSections && (
                    <div
                      role="menu"
                      aria-label={link.name}
                      onMouseEnter={() => openDropdown(link.name)}
                      onMouseLeave={() => scheduleDropdownClose(link.name)}
                      onFocusCapture={() => openDropdown(link.name)}
                      onBlurCapture={(event) => {
                        const nextTarget = event.relatedTarget;

                        if (
                          !(nextTarget instanceof Node) ||
                          !event.currentTarget.contains(nextTarget)
                        ) {
                          scheduleDropdownClose(link.name);
                        }
                      }}
                      className={`absolute top-full left-0 w-[320px] pt-2 transition-all duration-200 ${
                        isDropdownOpen
                          ? "translate-y-0 pointer-events-auto visible opacity-100"
                          : "translate-y-2 pointer-events-none invisible opacity-0"
                      }`}
                    >
                      <div className="bg-white border-2 border-[#1A1A1A] rounded-xl shadow-[4px_4px_0px_0px_#1A1A1A] overflow-hidden">
                        {link.dropdownSections.map((section) => (
                          <div
                            key={section.title}
                            className="border-b border-[#1A1A1A]/10 last:border-b-0"
                          >
                            <div className="px-4 pt-4 pb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/45">
                              {section.title}
                            </div>
                            {section.items.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="block px-4 py-3 text-sm font-bold text-[#1A1A1A] hover:bg-[#FFD166] transition-colors"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <LocaleSwitcher />
            <Button
              asChild
              className="bg-white hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-white border-2 border-[#1A1A1A] font-bold rounded-xl px-6 shadow-[2px_2px_0px_0px_#1A1A1A] hover:-translate-y-[1px] hover:-translate-x-[1px] hover:shadow-[4px_4px_0px_0px_#1A1A1A] active:translate-y-[1px] active:translate-x-[1px] active:shadow-[0px_0px_0px_0px_#1A1A1A] transition-all"
            >
              <Link
                href="/contact"
                data-cta-track="true"
                data-cta-name={t("cta")}
                data-cta-location="header_desktop"
                data-cta-category="primary"
              >
                {t("cta")}
              </Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            className="md:hidden text-[#1A1A1A] p-2 flex-shrink-0 bg-white rounded-lg border-2 border-[#1A1A1A] hover:bg-[#FFD166] transition-all shadow-[2px_2px_0px_0px_#1A1A1A] active:translate-y-[1px] active:translate-x-[1px] active:shadow-[0px_0px_0px_0px_#1A1A1A]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-0 z-[9997] bg-black/20 backdrop-blur-sm md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="fixed left-4 right-4 top-[84px] bottom-4 z-[9998] flex flex-col overflow-hidden rounded-[28px] border-2 border-[#1A1A1A] bg-white p-4 shadow-[6px_6px_0px_0px_#1A1A1A] md:hidden"
            >
              <div className="mb-3 flex items-center justify-between rounded-2xl border-2 border-[#1A1A1A] bg-[#F5F5F7] px-4 py-3">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/45">
                  {languageLabel}
                </span>
                <LocaleSwitcher className="rounded-xl border-2 border-[#1A1A1A] bg-white px-3 py-1.5 text-sm font-extrabold text-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] hover:bg-[#FFD166] hover:text-[#1A1A1A]" />
              </div>

              <nav className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto overscroll-contain pr-1">
                {navLinks.map((link) => (
                  <div
                    key={link.name}
                    className="rounded-2xl border border-[#1A1A1A]/10 bg-[#F5F5F7] px-4 py-3"
                  >
                    {link.href && !link.dropdownSections ? (
                      <Link
                        href={link.href}
                        className="block text-base font-bold text-[#1A1A1A]"
                        onClick={() =>
                          !link.dropdownSections && setMobileMenuOpen(false)
                        }
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <button
                        type="button"
                        className="flex w-full items-center justify-between gap-3 text-left text-base font-bold text-[#1A1A1A]"
                        onClick={() =>
                          setMobileExpandedLink((current) =>
                            current === link.name ? null : link.name,
                          )
                        }
                        aria-expanded={mobileExpandedLink === link.name}
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          className={`h-5 w-5 flex-shrink-0 transition-transform ${
                            mobileExpandedLink === link.name
                              ? "rotate-180"
                              : "rotate-0"
                          }`}
                        />
                      </button>
                    )}

                    <AnimatePresence initial={false}>
                      {link.dropdownSections &&
                        mobileExpandedLink === link.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="ml-1 mt-3 flex flex-col gap-3 border-l-2 border-[#FF3366]/20 pl-4">
                              {link.dropdownSections.map((section) => (
                                <div
                                  key={section.title}
                                  className="flex flex-col gap-1"
                                >
                                  <div className="pt-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/40">
                                    {section.title}
                                  </div>
                                  {section.items.map((item) => (
                                    <Link
                                      key={item.name}
                                      href={item.href}
                                      className="block py-1.5 text-sm font-semibold text-[#1A1A1A]/70 transition-colors hover:text-[#FF3366]"
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      {item.name}
                                    </Link>
                                  ))}
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>

              <div className="mt-4">
                <Button
                  asChild
                  size="lg"
                  className="w-full rounded-xl border-2 border-[#1A1A1A] bg-white font-bold text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] hover:bg-[#1A1A1A] hover:text-white hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[0px_0px_0px_0px_#1A1A1A]"
                >
                  <Link
                    href="/contact"
                    data-cta-track="true"
                    data-cta-name={t("cta")}
                    data-cta-location="header_mobile"
                    data-cta-category="primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t("cta")}
                  </Link>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
