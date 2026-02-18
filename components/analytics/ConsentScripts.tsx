"use client";

import { Suspense, useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { getConsentPreferences, updateGTMConsent } from "@/lib/consent";

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

  // Listen for consent changes (localStorage updates from cookie banner)
  useEffect(() => {
    function checkConsent() {
      const prefs = getConsentPreferences();
      if (prefs) {
        setAnalyticsConsent(prefs.analytics);
        setMarketingConsent(prefs.marketing);
        // Sync stored consent to GTM on every page load
        updateGTMConsent(prefs);
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

  // SPA route change tracking for Hotjar
  useEffect(() => {
    if (!analyticsConsent) return;

    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");

    // Notify Hotjar/Contentsquare of SPA navigation
    if (typeof window !== "undefined" && (window as any).hj) {
      (window as any).hj("stateChange", url);
    }
  }, [pathname, searchParams, analyticsConsent]);

  // SPA route change tracking for Meta Pixel
  useEffect(() => {
    if (!marketingConsent) return;

    // Track PageView on route change for Meta Pixel
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "PageView");
    }
  }, [pathname, searchParams, marketingConsent]);

  return (
    <>
      {/* Hotjar / Contentsquare - only loads when analytics consent granted */}
      {analyticsConsent && (
        <Script
          src="https://t.contentsquare.net/uxa/4e2ca2b8d17a0.js"
          strategy="afterInteractive"
        />
      )}

      {/* Meta Pixel - only loads when marketing consent granted */}
      {marketingConsent && (
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '2213571369171089');
              fbq('track', 'PageView');
            `,
          }}
        />
      )}
    </>
  );
}
