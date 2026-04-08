"use client";

import { Cookie, Settings } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import {
  acceptAllCookies,
  hasConsented,
  saveConsentPreferences,
} from "@/lib/consent";
import { Button } from "./button";

export function CookieBanner() {
  const t = useTranslations("cookieBanner");
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    if (!hasConsented()) {
      const timer = setTimeout(() => setIsVisible(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    acceptAllCookies();
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    saveConsentPreferences(preferences);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-0 right-0 z-[9000] px-4 sm:bottom-6 sm:px-6">
      <div className="mx-auto max-w-2xl">
        {!showSettings ? (
          <div className="relative rounded-2xl border border-[#1A1A1A]/5 bg-white/90 shadow-lg overflow-hidden backdrop-blur-xl">
            <div className="p-5 sm:p-7">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
                <div className="hidden flex-shrink-0 sm:block">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF3366]/10">
                    <Cookie className="h-6 w-6 text-[#FF3366]" />
                  </div>
                </div>
                <div className="flex-grow text-center sm:text-left">
                  <p className="text-[15px] leading-relaxed text-[#1A1A1A]/80">
                    {t("message")}
                  </p>
                </div>
                <div className="flex w-full flex-shrink-0 gap-3 sm:w-auto">
                  <Button
                    onClick={handleAcceptAll}
                    className="flex-1 rounded-full bg-[#FF3366] px-6 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-[#FF3366]/90 sm:flex-none"
                  >
                    {t("acceptAll")}
                  </Button>
                  <Button
                    onClick={() => setShowSettings(true)}
                    variant="outline"
                    className="flex-1 rounded-full border-[#1A1A1A]/10 px-6 py-2.5 text-sm font-medium text-[#1A1A1A]/80 hover:bg-gray-50 sm:flex-none"
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    {t("customize")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative overflow-hidden rounded-2xl border border-[#1A1A1A]/5 bg-white/90 shadow-lg backdrop-blur-xl">
            <div className="p-6 sm:p-8">
              <h3
                className="mb-4 text-lg font-bold text-[#1A1A1A] sm:mb-6 sm:text-xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("settings.title")}
              </h3>

              <div className="mb-4 space-y-3 sm:mb-6 sm:space-y-4">
                <div className="flex items-start justify-between gap-3 rounded-xl border border-[#1A1A1A]/5 bg-gray-50 p-3 sm:gap-4 sm:p-4">
                  <div className="min-w-0 flex-grow">
                    <h4 className="mb-1 text-xs font-semibold text-[#1A1A1A] sm:text-sm">
                      {t("settings.necessary.title")}
                    </h4>
                    <p className="text-[10px] text-[#1A1A1A]/60 sm:text-xs">
                      {t("settings.necessary.description")}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="flex h-5 w-10 items-center rounded-full bg-green-100 px-1 sm:h-6 sm:w-12">
                      <div className="ml-auto h-3 w-3 rounded-full bg-green-500 sm:h-4 sm:w-4" />
                    </div>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-3 rounded-xl border border-[#1A1A1A]/5 bg-gray-50 p-3 sm:gap-4 sm:p-4">
                  <div className="min-w-0 flex-grow">
                    <h4 className="mb-1 text-xs font-semibold text-[#1A1A1A] sm:text-sm">
                      {t("settings.analytics.title")}
                    </h4>
                    <p className="text-[10px] text-[#1A1A1A]/60 sm:text-xs">
                      {t("settings.analytics.description")}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setPreferences((prev) => ({
                        ...prev,
                        analytics: !prev.analytics,
                      }))
                    }
                    className="flex-shrink-0"
                    aria-label="Toggle analytics cookies"
                  >
                    <div
                      className={`flex h-5 w-10 items-center rounded-full px-1 transition-colors sm:h-6 sm:w-12 ${
                        preferences.analytics
                          ? "bg-[#FF3366]/20"
                          : "bg-gray-200"
                      }`}
                    >
                      <div
                        className={`h-3 w-3 rounded-full transition-all sm:h-4 sm:w-4 ${
                          preferences.analytics
                            ? "ml-auto bg-[#FF3366]"
                            : "bg-gray-400"
                        }`}
                      />
                    </div>
                  </button>
                </div>

                <div className="flex items-start justify-between gap-3 rounded-xl border border-[#1A1A1A]/5 bg-gray-50 p-3 sm:gap-4 sm:p-4">
                  <div className="min-w-0 flex-grow">
                    <h4 className="mb-1 text-xs font-semibold text-[#1A1A1A] sm:text-sm">
                      {t("settings.marketing.title")}
                    </h4>
                    <p className="text-[10px] text-[#1A1A1A]/60 sm:text-xs">
                      {t("settings.marketing.description")}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setPreferences((prev) => ({
                        ...prev,
                        marketing: !prev.marketing,
                      }))
                    }
                    className="flex-shrink-0"
                    aria-label="Toggle marketing cookies"
                  >
                    <div
                      className={`flex h-5 w-10 items-center rounded-full px-1 transition-colors sm:h-6 sm:w-12 ${
                        preferences.marketing
                          ? "bg-[#FF3366]/20"
                          : "bg-gray-200"
                      }`}
                    >
                      <div
                        className={`h-3 w-3 rounded-full transition-all sm:h-4 sm:w-4 ${
                          preferences.marketing
                            ? "ml-auto bg-[#FF3366]"
                            : "bg-gray-400"
                        }`}
                      />
                    </div>
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
                <Button
                  onClick={handleSavePreferences}
                  className="flex-1 rounded-full bg-[#FF3366] px-4 py-2 text-xs font-bold text-white hover:bg-[#FF3366]/90 sm:px-6 sm:py-2.5 sm:text-sm"
                >
                  {t("settings.save")}
                </Button>
                <Button
                  onClick={() => setShowSettings(false)}
                  variant="outline"
                  className="rounded-full border-[#1A1A1A]/10 px-4 py-2 text-xs font-medium text-[#1A1A1A]/80 hover:bg-gray-50 sm:px-6 sm:py-2.5 sm:text-sm"
                >
                  {t("settings.back")}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
