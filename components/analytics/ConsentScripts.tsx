"use client";

import { useEffect, useRef, useState } from "react";
import { getConsentPreferences, updateGTMConsent } from "@/lib/consent";
import { initPosthog } from "@/lib/posthog-client";

const NAVIGATION_EVENT = "halo:navigation";

declare global {
  interface Window {
    __haloMetaPixelInitialized?: boolean;
    _fbq?: MetaPixel;
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
  const [analyticsConsent, setAnalyticsConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);
  const lastMarketingUrlRef = useRef<string | null>(null);

  useEffect(() => {
    function checkConsent() {
      const prefs = getConsentPreferences();

      if (prefs) {
        setAnalyticsConsent(prefs.analytics);
        setMarketingConsent(prefs.marketing);
        updateGTMConsent(prefs);
        return;
      }

      setAnalyticsConsent(true);
      setMarketingConsent(false);
    }

    function onStorage(event: StorageEvent) {
      if (event.key === "halo_cookie_consent") {
        checkConsent();
      }
    }

    function onConsentUpdate() {
      checkConsent();
    }

    checkConsent();
    window.addEventListener("storage", onStorage);
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

  useEffect(() => {
    if (!marketingConsent || typeof window === "undefined") {
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
  }, [marketingConsent]);

  useEffect(() => {
    if (!marketingConsent || typeof window === "undefined") {
      return;
    }

    if (typeof window === "undefined") {
      return;
    }

    const getCurrentUrl = () =>
      window.location.pathname + window.location.search;

    const trackPageView = () => {
      const currentUrl = getCurrentUrl();

      if (
        currentUrl !== lastMarketingUrlRef.current &&
        typeof window.fbq === "function"
      ) {
        lastMarketingUrlRef.current = currentUrl;
        window.fbq("track", "PageView");
      }
    };

    const dispatchNavigation = () => {
      window.dispatchEvent(new Event(NAVIGATION_EVENT));
    };

    const { history } = window;
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function pushState(...args) {
      const result = originalPushState.apply(this, args);
      dispatchNavigation();
      return result;
    };

    history.replaceState = function replaceState(...args) {
      const result = originalReplaceState.apply(this, args);
      dispatchNavigation();
      return result;
    };

    window.addEventListener("popstate", trackPageView);
    window.addEventListener(NAVIGATION_EVENT, trackPageView);
    trackPageView();

    return () => {
      history.pushState = originalPushState;
      history.replaceState = originalReplaceState;
      window.removeEventListener("popstate", trackPageView);
      window.removeEventListener(NAVIGATION_EVENT, trackPageView);
    };
  }, [marketingConsent]);

  return null;
}
