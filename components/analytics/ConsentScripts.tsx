"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { Suspense, useEffect, useState } from "react";
import { getConsentPreferences, updateGTMConsent } from "@/lib/consent";
import { initPosthog } from "@/lib/posthog-client";

declare global {
  interface Window {
    __haloMetaPixelInitialized?: boolean;
    _fbq?: MetaPixel;
    _uxa?: Array<[command: "trackPageview", url: string]>;
  }
}

type IdleHandle = number;
type MetaPixelArgs = Parameters<NonNullable<Window["fbq"]>>;
type MetaPixel = NonNullable<Window["fbq"]> & {
  callMethod?: (...args: MetaPixelArgs) => void;
  loaded?: boolean;
  push: (...args: MetaPixelArgs) => void;
  queue: MetaPixelArgs[];
  version?: string;
};

export function ConsentScripts() {
  return (
    <Suspense fallback={null}>
      <ConsentScriptsInner />
    </Suspense>
  );
}

/**
 * Loads analytics/marketing scripts only after consent is granted.
 * Also handles SPA route change tracking for Hotjar and Meta Pixel.
 */
function ConsentScriptsInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [analyticsConsent, setAnalyticsConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);
  const currentUrl =
    pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");

  // Listen for consent changes (localStorage updates from cookie banner)
  useEffect(() => {
    function checkConsent() {
      const prefs = getConsentPreferences();
      if (prefs) {
        setAnalyticsConsent(prefs.analytics);
        setMarketingConsent(prefs.marketing);
        // Sync stored consent to GTM on every page load
        updateGTMConsent(prefs);
      } else {
        // No stored choice yet — match GTM default (analytics_storage: granted)
        setAnalyticsConsent(true);
      }
    }

    // Check on mount
    checkConsent();

    // Re-check when localStorage changes (from cookie banner interaction)
    function onStorage(e: StorageEvent) {
      if (e.key === "halo_cookie_consent") {
        checkConsent();
      }
    }
    window.addEventListener("storage", onStorage);

    // Also listen for custom event dispatched from same tab
    function onConsentUpdate() {
      checkConsent();
    }
    window.addEventListener("consent-updated", onConsentUpdate);

    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("consent-updated", onConsentUpdate);
    };
  }, []);

  useEffect(() => {
    if (!analyticsConsent) {
      return;
    }

    const scheduleIdle =
      typeof window.requestIdleCallback === "function"
        ? window.requestIdleCallback.bind(window)
        : (callback: IdleRequestCallback): IdleHandle =>
            window.setTimeout(
              () =>
                callback({
                  didTimeout: false,
                  timeRemaining: () => 0,
                } as IdleDeadline),
              1200,
            );

    const cancelIdle =
      typeof window.cancelIdleCallback === "function"
        ? window.cancelIdleCallback.bind(window)
        : window.clearTimeout.bind(window);

    const handle = scheduleIdle(() => {
      void initPosthog();
    });

    return () => cancelIdle(handle);
  }, [analyticsConsent]);

  // SPA route change tracking for Contentsquare
  useEffect(() => {
    if (!analyticsConsent) return;

    // Notify Contentsquare of SPA navigation via _uxa API
    if (typeof window !== "undefined" && window._uxa) {
      window._uxa.push(["trackPageview", currentUrl]);
    }
  }, [analyticsConsent, currentUrl]);

  // SPA route change tracking for Meta Pixel
  useEffect(() => {
    if (!marketingConsent) return;

    if (typeof window === "undefined") {
      return;
    }

    if (typeof window.fbq !== "function") {
      const metaPixel = ((...args: MetaPixelArgs) => {
        if (typeof metaPixel.callMethod === "function") {
          metaPixel.callMethod(...args);
          return;
        }

        metaPixel.queue.push(args);
      }) as MetaPixel;

      metaPixel.push = metaPixel;
      metaPixel.loaded = true;
      metaPixel.queue = [];
      metaPixel.version = "2.0";

      window.fbq = metaPixel;
      window._fbq = metaPixel;

      const script = document.createElement("script");
      script.async = true;
      script.src = "https://connect.facebook.net/en_US/fbevents.js";
      document.head.appendChild(script);
    }

    if (!window.__haloMetaPixelInitialized) {
      window.fbq?.("init", "2213571369171089");
      window.__haloMetaPixelInitialized = true;
    }

    const pageViewUrl = currentUrl;

    // Track PageView on route change for Meta Pixel
    if (pageViewUrl && typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
  }, [marketingConsent, currentUrl]);

  return (
    <>
      {/* Hotjar / Contentsquare - only loads when analytics consent granted */}
      {analyticsConsent && (
        <Script
          id="contentsquare"
          src="https://t.contentsquare.net/uxa/4e2ca2b8d17a0.js"
          strategy="lazyOnload"
        />
      )}
      {/* Meta Pixel is initialized in an effect after consent is granted. */}
    </>
  );
}
