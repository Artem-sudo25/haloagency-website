import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { url, email } = await request.json();

    if (!url) {
      return NextResponse.json({ message: "URL is required" }, { status: 400 });
    }

    // 1. Fetch HTML of client website
    const html = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; HaloAuditBot/1.0; +https://haloagency.cz)",
      },
      next: { revalidate: 0 }, // Disable caching
    }).then((r) => r.text());

    // 2. Check for GA4 / GTM / Pixel
    const hasGA4 =
      html.includes("G-") || html.includes("googletagmanager.com/gtag/js");
    const hasGTM =
      html.includes("GTM-") || html.includes("googletagmanager.com/gtm.js");
    const hasPixel =
      html.includes("fbq(") || html.includes("connect.facebook.net");

    // 3. Check SEO basics
    const hasTitle = /<title>(.*?)<\/title>/i.test(html);
    const hasH1 = /<h1[^>]*>(.*?)<\/h1>/i.test(html);

    // 4. Check PageSpeed using Google API
    const apiKey = process.env.GOOGLE_PAGESPEED_API_KEY;
    const psiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
      url,
    )}&strategy=mobile&key=${apiKey}`;

    let speedScore = 0;
    let mobileScore = 0;

    try {
      const response = await fetch(psiUrl);
      const psi = await response.json();

      if (psi.error) {
        console.error("PageSpeed API returned error:", psi.error);
        // Fallback if API returns error (e.g. invalid key or quota)
        speedScore = 50;
        mobileScore = 50;
      } else if (psi.lighthouseResult) {
        speedScore = Math.round(
          psi.lighthouseResult.categories.performance.score * 100,
        );
        // Use Accessibility score as a proxy for Mobile Optimization (since Mobile Friendly is deprecated)
        // Fallback to viewport check if accessibility is missing
        mobileScore = psi.lighthouseResult.categories.accessibility
          ? Math.round(
              psi.lighthouseResult.categories.accessibility.score * 100,
            )
          : psi.lighthouseResult.audits["viewport"]?.score === 1
            ? 100
            : 50;
      } else {
        // No error but no result? Fallback.
        speedScore = 50;
        mobileScore = 50;
      }
    } catch (e) {
      console.error("PageSpeed API network error:", e);
      // Fallback if API fails
      speedScore = 50;
      mobileScore = 50;
    }

    // 6. Compute final score
    let score = 0;

    // Weighted scoring
    if (speedScore > 60) score += 25;
    if (mobileScore > 0) score += 25; // Viewport tag exists
    if (hasTitle && hasH1) score += 20;
    if (hasGA4 || hasGTM || hasPixel) score += 30;

    const conversionLoss = 100 - score;

    // 7. Send results to n8n webhook
    const webhookUrl = process.env.N8N_WEBHOOK_URL;

    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            url,
            email,
            score,
            conversionLoss,
            speedScore,
            mobileScore,
            seo: { hasTitle, hasH1 },
            analytics: { hasGA4, hasGTM, hasPixel },
            timestamp: new Date().toISOString(),
          }),
        });
      } catch (e) {
        console.error("Webhook error:", e);
      }
    }

    // 8. Return summary to frontend
    return NextResponse.json({
      success: true,
      score,
      conversionLoss,
      speedScore,
      mobileScore,
      seo: { hasTitle, hasH1 },
      analytics: { hasGA4, hasGTM, hasPixel },
    });
  } catch (error) {
    console.error("Audit error:", error);
    return NextResponse.json(
      { message: "Failed to analyze website" },
      { status: 500 },
    );
  }
}
