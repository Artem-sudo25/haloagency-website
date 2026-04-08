import type { Metadata } from "next";
import { IBM_Plex_Sans, JetBrains_Mono, Syne } from "next/font/google";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { ConsentScripts } from "@/components/analytics/ConsentScripts";
import { CtaTrackingListener } from "@/components/analytics/CtaTrackingListener";
import { LayoutShell } from "@/components/layout/LayoutShell";
import { CookieBanner } from "@/components/ui/cookie-banner";
import { locales } from "@/i18n/config";
import { getScopedMessages } from "@/lib/i18n-messages";
import "../globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin", "cyrillic", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "cyrillic", "latin-ext"],
  display: "swap",
  preload: true,
  variable: "--font-mono",
});

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-display",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://haloagency.cz"),
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getScopedMessages([
    "common",
    "cookieBanner",
    "footer",
    "header",
  ]);
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        {/* GTM Consent Mode v2 - Initialize BEFORE GTM loads */}
        <Script id="gtm-consent-init" strategy="beforeInteractive">{`
          window.dataLayer = window.dataLayer || [];
          window.gtag = function(){dataLayer.push(arguments);};
          window.gtag('consent', 'default', {
            'analytics_storage': 'granted',
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'wait_for_update': 500
          });
        `}</Script>
        {/* HaloTrack Attribution Tracking */}
        {process.env.NEXT_PUBLIC_HALOTRACK_DOMAIN && (
          <Script
            src={`https://${process.env.NEXT_PUBLIC_HALOTRACK_DOMAIN}/t.js`}
            strategy="afterInteractive"
          />
        )}
      </head>
      <body
        className={`${ibmPlexSans.variable} ${jetbrainsMono.variable} ${syne.variable} font-sans bg-[#F5F5F7] text-[#1A1A1A] antialiased`}
        suppressHydrationWarning
      >
        {/* Google Tag Manager - Must be in body, immediately after opening tag */}
        {gtmId && (
          <>
            <Script
              id="gtm"
              strategy="afterInteractive"
            >{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`}</Script>
            {/* GTM noscript fallback */}
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
                title="Google Tag Manager"
              />
            </noscript>
          </>
        )}

        <NextIntlClientProvider locale={locale} messages={messages}>
          <LayoutShell>
            {children}
            <CookieBanner />
            <CtaTrackingListener />
            <ConsentScripts />
          </LayoutShell>
        </NextIntlClientProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
