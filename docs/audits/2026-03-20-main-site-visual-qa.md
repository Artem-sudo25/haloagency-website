# Main Site Visual QA

*Date: 2026-03-20*

## Scope
- Reviewed main-site routes only. `/lp/*` remained out of scope.
- Desktop review size: `1440x900`
- Mobile review size: `390x844`
- Screenshots saved in:
  `/Users/artemhorvatsky/Documents/dev/haloagency-website/docs/audits/screenshots/2026-03-20-main-site-qa`
- Review target routes:
  - `/`
  - `/about`
  - `/contact`
  - `/ads`
  - `/ads/google-ads`
  - `/ads/meta-ads`
  - `/web`
  - `/web/landing-pages`
  - `/web/business-websites`
  - `/web/ecommerce`

## Overall Read
- The main-site structure now looks coherent. Homepage, hubs, detail pages, and contact all read like part of one system instead of a stitched brochure.
- `/contact` is currently the cleanest route visually and structurally.
- Child service pages under `/ads/*` and `/web/*` are much more stable than the hubs. Their hierarchy is clearer, and the cards/FAQ/final CTA pattern is consistent on desktop and mobile.
- The biggest QA caveat is the reveal-animation system on long pages. It makes lower sections hard to verify in static full-page capture and can delay perceived content on scroll-heavy routes.

## Findings

### 1. Reveal timing on long pages was too aggressive
**Severity:** High  
**Routes affected:** `/ads`, `/web`, and any section using `CSSScrollAnimation` or `CSSStagger`

What showed up in QA:
- Long hub pages produced large blank bands in full-page screenshot capture because offscreen sections were still waiting on intersection.
- That same setup can cause late pop-in on real browsing, especially on fast scrolls or if intersection timing is inconsistent.

What was fixed:
- Earlier reveal threshold and less aggressive root margin
- Reduced-motion / unsupported-browser fallback to visible content
- Timed fallback so sections do not remain hidden indefinitely if intersection never fires

Code:
- [css-scroll-animation.tsx](/Users/artemhorvatsky/Documents/dev/haloagency-website/components/ui/css-scroll-animation.tsx)

Status: fixed in this pass

### 2. Homepage mobile compression materially improved the route
**Severity:** Low  
**Routes affected:** `/`

What showed up in QA:
- The original mobile homepage was readable, but the mid-page became long quickly because several sections stacked large card groups with generous spacing.
- After the mobile compression pass, the route is still substantial, but it no longer feels obviously oversized for a homepage with this amount of proof and routing content.
- Full-page mobile capture height dropped from `15072px` to `11499px`, which is roughly a `24%` reduction.

What changed:
- Tighter mobile spacing in the hero, services, projects, about, process, growth-plan, and final CTA sections
- Smaller card density and text rhythm in the middle third of the page
- Fewer non-essential mobile pills/cards shown at once in `Services`, `Projects`, and `Process`

Recommendation:
- Leave the homepage alone for now unless a live mobile browser pass shows a specific interaction issue.

Status: fixed in this pass

### 3. Hub pages still need one true live-browser scroll pass before final signoff
**Severity:** Medium  
**Routes affected:** `/ads`, `/web`

What showed up in QA:
- After the animation fix, the routes are technically safer, but static capture is still not a perfect representation of scroll-triggered content lower on the page.
- The process sections on the hubs should still be sanity-checked in a normal browser session with actual scrolling before treating them as final-final.

Recommendation:
- Manual browser pass on desktop + mobile for:
  - first paint
  - scroll into process section
  - scroll into proof/final CTA
  - CTA/button hover/tap states

Status: backlog

### 4. Contact page is ready enough for ongoing use
**Severity:** Low  
**Routes affected:** `/contact`

What showed up in QA:
- Clear hero
- Form remains accessible on mobile
- Supporting route cards make sense
- Good balance between reassurance and action

Recommendation:
- Keep as baseline for the rest of the site’s visual polish.

Status: acceptable

### 5. Service detail pages are visually stronger than the hubs
**Severity:** Low  
**Routes affected:** `/ads/google-ads`, `/ads/meta-ads`, `/web/landing-pages`, `/web/business-websites`, `/web/ecommerce`

What showed up in QA:
- Better section rhythm
- Cleaner hierarchy
- FAQ grids hold up on mobile
- Final CTA sections read clearly

Recommendation:
- Reuse these routes as the standard when polishing `/tracking`, `/automation`, `/packages`, and `/case-studies`.

Status: acceptable

## Changes Shipped During This QA Pass
- Improved reveal timing and fallback behavior in:
  - [css-scroll-animation.tsx](/Users/artemhorvatsky/Documents/dev/haloagency-website/components/ui/css-scroll-animation.tsx)
- Tightened homepage mobile rhythm in:
  - [Hero.tsx](/Users/artemhorvatsky/Documents/dev/haloagency-website/components/sections/Hero.tsx)
  - [Services.tsx](/Users/artemhorvatsky/Documents/dev/haloagency-website/components/sections/Services.tsx)
  - [Projects.tsx](/Users/artemhorvatsky/Documents/dev/haloagency-website/components/sections/Projects.tsx)
  - [About.tsx](/Users/artemhorvatsky/Documents/dev/haloagency-website/components/sections/About.tsx)
  - [Process.tsx](/Users/artemhorvatsky/Documents/dev/haloagency-website/components/sections/Process.tsx)
  - [GrowthPlanMagnet.tsx](/Users/artemhorvatsky/Documents/dev/haloagency-website/components/sections/GrowthPlanMagnet.tsx)
  - [HomeFinalCta.tsx](/Users/artemhorvatsky/Documents/dev/haloagency-website/components/sections/HomeFinalCta.tsx)
- Removed scroll-reveal dependency from the hub content on:
  - [AdsPageClient.tsx](/Users/artemhorvatsky/Documents/dev/haloagency-website/app/ads/AdsPageClient.tsx)
  - [WebPageClient.tsx](/Users/artemhorvatsky/Documents/dev/haloagency-website/app/web/WebPageClient.tsx)
- Made the process sections render immediately on:
  - [AdsProcess.tsx](/Users/artemhorvatsky/Documents/dev/haloagency-website/components/sections/AdsProcess.tsx)
  - [WebProcess.tsx](/Users/artemhorvatsky/Documents/dev/haloagency-website/components/sections/WebProcess.tsx)
- Final copy hardening and visual sanity pass on:
  - [packages/leads/page.tsx](/Users/artemhorvatsky/Documents/dev/haloagency-website/app/packages/leads/page.tsx)

## Follow-up Pass
- Re-ran full-page desktop/mobile screenshots for `/ads`, `/web`, and `/packages/leads`.
- Latest captures are saved in:
  `/Users/artemhorvatsky/Documents/dev/haloagency-website/docs/audits/screenshots/2026-03-20-hub-live-pass`
- Result:
  - `/ads` and `/web` no longer show the large dead band in the middle of the page.
  - The hub pages now read as continuous decision pages in screenshots and are easier to QA.
  - `/packages/leads` is visually acceptable on desktop and mobile after the copy rewrite.

## Support Pass
- Reviewed desktop screenshots for:
  - `/tracking`
  - `/automation`
  - `/case-studies`
  - `/packages`
- Saved support-pass captures in:
  `/Users/artemhorvatsky/Documents/dev/haloagency-website/docs/audits/screenshots/2026-03-20-support-pass`
- Also ran a narrow-view above-the-fold pass with local Chrome for:
  - `/tracking`
  - `/automation`
  - `/case-studies`
  - `/packages`
  - `/packages/site`
  - `/packages/ecommerce`

What changed in this pass:
- Tightened hero scale and copy rhythm on:
  - [TrackingPageClient.tsx](/Users/artemhorvatsky/Documents/dev/haloagency-website/app/tracking/TrackingPageClient.tsx)
  - [AutomationPageClient.tsx](/Users/artemhorvatsky/Documents/dev/haloagency-website/app/automation/AutomationPageClient.tsx)
  - [CaseStudiesPageClient.tsx](/Users/artemhorvatsky/Documents/dev/haloagency-website/app/case-studies/CaseStudiesPageClient.tsx)
  - [packages/page.tsx](/Users/artemhorvatsky/Documents/dev/haloagency-website/app/packages/page.tsx)
- Rewrote the older package-detail copy on:
  - [site/page.tsx](/Users/artemhorvatsky/Documents/dev/haloagency-website/app/packages/site/page.tsx)
  - [ecommerce/page.tsx](/Users/artemhorvatsky/Documents/dev/haloagency-website/app/packages/ecommerce/page.tsx)

Result:
- `/tracking`, `/automation`, `/case-studies`, and `/packages` no longer feel oversized at the top on a narrow viewport.
- `/packages/site` and `/packages/ecommerce` now read like the rest of the rebuilt site instead of older template-era pages.
- The remaining work in this area is no longer structural. It is mostly final live-browser polish and any route-specific copy decisions you want to make later.

## Homepage About Follow-up
- Re-ran homepage screenshots after the About-section refactor with local Playwright capture.
- Saved latest captures in:
  - `/Users/artemhorvatsky/Documents/dev/haloagency-website/docs/audits/screenshots/2026-03-20-home-about-crop.png`
  - `/Users/artemhorvatsky/Documents/dev/haloagency-website/docs/audits/screenshots/2026-03-20-home-about-crop-mobile.png`

What changed:
- Replaced the oversized stacked portrait layout with a real two-column desktop layout.
- Reduced the portrait footprint on smaller screens so the image supports the section instead of taking it over.
- Tightened the headline rhythm and removed the forced line break that made the section feel heavier than it is.
- Added small trust cards under the portrait so the left column carries proof, not just a large image.

Result:
- Desktop: the section reads as a founder-trust block, not a second hero.
- Mobile: the portrait no longer dominates the viewport, and the copy/CTA remain visible in one scan.

## Suggested Next QA Slice
1. Run one real live-browser pass on:
   - `/tracking`
   - `/automation`
   - `/case-studies`
   - `/packages`
   - `/packages/site`
   - `/packages/ecommerce`
2. Then decide whether the next phase is:
   - `/blog` and cornerstone SEO pages
   - deeper case-study detail polishing
   - tracking/analytics verification across the rebuilt routes
