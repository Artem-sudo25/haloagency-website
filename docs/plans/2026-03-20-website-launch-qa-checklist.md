# HaloAgency Website Launch QA Checklist

Date: 2026-03-20

Related sources:

- [Website Restructure PRD](/Users/artemhorvatsky/Documents/dev/haloagency-website/docs/plans/2026-03-20-website-restructure-prd.md)
- [Website Restructure Backlog](/Users/artemhorvatsky/Documents/dev/haloagency-website/docs/plans/2026-03-20-website-restructure-backlog.md)
- [Website Content Migration Matrix](/Users/artemhorvatsky/Documents/dev/haloagency-website/docs/plans/2026-03-20-website-content-migration-matrix.md)

## 1. Purpose

This checklist is the launch gate for the restructure.

No page or rollout phase should be considered complete unless it passes the relevant checks below.

## 2. Severity Model

- `Blocker`: must be fixed before merge or launch
- `High`: should be fixed before launch
- `Medium`: can ship only if explicitly accepted and scheduled

## 3. PR-Level QA

Use this checklist in every page or route PR.

### Page role and scope

- [ ] The page matches the role defined in the PRD
- [ ] The page is not trying to do multiple conflicting jobs
- [ ] The page uses only the content needed for that role
- [ ] No obvious homepage-brochure sprawl has been recreated on a service page

### CTA hierarchy

- [ ] One clear primary CTA is visible above the fold
- [ ] No more than one secondary CTA is competing with the primary CTA
- [ ] CTA copy matches the page intent
- [ ] CTA links or actions work

### Internal linking

- [ ] Links to related service pages exist where relevant
- [ ] Links to relevant case studies exist where relevant
- [ ] Links to `/contact` exist where appropriate
- [ ] Footer and header links point to the correct final routes
- [ ] No broken internal links remain

### Proof and trust

- [ ] Claims are supported by visible proof or clearly framed as positioning
- [ ] Case-study snippets match actual case content
- [ ] Pricing claims are current
- [ ] No outdated promotions remain
- [ ] Contact information is consistent

### Copy quality

- [ ] No placeholder copy remains
- [ ] No duplicate paid-LP copy was pasted into an SEO page without adaptation
- [ ] Language is clear and commercial, not vague or hype-heavy
- [ ] Audience and offer are clear within 5 seconds

## 4. Route-Level QA

### Routing and structure

- [ ] Route path matches the target information architecture
- [ ] Old route behavior is preserved or redirect decisions are documented
- [ ] Breadcrumb logic is defined if applicable
- [ ] Navigation exposes the route correctly

### Metadata and SEO

- [ ] Route has unique title
- [ ] Route has unique description
- [ ] Route metadata matches page intent
- [ ] Canonical behavior is correct if custom canonicals are used
- [ ] Sitemap includes the route if it should be indexed
- [ ] Sitemap excludes the route if it should not be indexed
- [ ] Robots setting is correct
- [ ] Only `/lp/*` routes remain noindex unless explicitly intended otherwise

### Performance and rendering

- [ ] Page loads without runtime errors
- [ ] No obvious layout shift in hero or major sections
- [ ] Images are correctly optimized and rendered
- [ ] Buttons, forms, and mobile nav are usable

## 5. Form And Conversion QA

### Forms

- [ ] Form renders correctly on desktop
- [ ] Form renders correctly on mobile
- [ ] Required fields are clearly indicated
- [ ] Validation states are readable
- [ ] Success state is clear
- [ ] Error state is clear
- [ ] Submission actually reaches the backend endpoint

### Consent and legal

- [ ] Consent checkbox exists where required
- [ ] Consent link points to `/privacy-policy`
- [ ] No form links to dead `/privacy`
- [ ] Legal wording is consistent across forms

### CTA flow

- [ ] Primary CTA matches the page family
- [ ] CTA destination is appropriate for traffic type
- [ ] Service pages do not rely only on modals if a dedicated route is needed
- [ ] Paid LPs keep a focused conversion flow

## 6. Analytics QA

### Events

- [ ] Primary CTA click is tracked
- [ ] Form submit is tracked
- [ ] Form success is tracked if implemented
- [ ] Event names are consistent with the page family
- [ ] No duplicate firing occurs

### Attribution

- [ ] LP lead sources remain distinguishable
- [ ] Homepage, service pages, and contact page are distinguishable in analytics
- [ ] Route changes did not break source attribution
- [ ] GTM and tracking scripts still load correctly

### Manual verification

- [ ] Test at least one successful submission per form type
- [ ] Confirm expected analytics event in the browser
- [ ] Confirm expected backend payload shape where practical

## 7. SEO QA

### Commercial pages

- [ ] One primary intent keyword cluster per service page
- [ ] Heading structure is logical
- [ ] Primary page topic is not split across multiple conflicting sections
- [ ] Internal links support the cluster

### Informational pages

- [ ] Blog posts link to relevant service pages
- [ ] Blog posts link to relevant case studies where appropriate
- [ ] Blog posts do not read like thin sales pages

### Index hygiene

- [ ] No orphaned indexed pages remain in the old structure without a plan
- [ ] Old package pages are rewritten, redirected, or intentionally kept
- [ ] Missing or dead content links are removed before launch

## 8. Mobile QA

Check every major route on a narrow viewport.

- [ ] Hero content is readable without awkward overflow
- [ ] Primary CTA is visible and tappable
- [ ] Navigation opens and closes cleanly
- [ ] Cards do not overflow horizontally
- [ ] Forms are easy to complete
- [ ] Proof sections remain scannable
- [ ] Footer is readable and usable

## 9. Homepage QA

- [ ] Homepage acts as a route-and-trust page
- [ ] Homepage does not try to fully sell all services
- [ ] Homepage clearly segments visitors into the right paths
- [ ] Featured proof is present early
- [ ] Final CTA is clear

## 10. Service Page QA

- [ ] The page sells one service
- [ ] The hero states who it is for and what outcome it creates
- [ ] Included scope is clear
- [ ] Proof is relevant to the exact service
- [ ] FAQ addresses objections
- [ ] CTA is specific to the service

## 11. Paid LP QA

- [ ] Page remains noindex
- [ ] Header and footer stay removed
- [ ] Message match with the ad promise remains strong
- [ ] One offer and one form path remain dominant
- [ ] Trust path to about / case studies / homepage works if the user explores

## 12. Case Study QA

- [ ] Business type is clear
- [ ] Problem is clear
- [ ] Scope of work is clear
- [ ] Results are concrete
- [ ] CTA points to the relevant service or contact path
- [ ] Metrics are consistent with other proof references

## 13. Packages QA

- [ ] Packages support service decisions rather than replacing them
- [ ] Pricing is current
- [ ] Package scopes are understandable
- [ ] Package CTA path is correct
- [ ] No stale seasonal promotions remain

## 14. About / Trust QA

- [ ] About page increases trust rather than sounding inflated
- [ ] Founder story is practical and credible
- [ ] Contact and company details are coherent
- [ ] Legal and privacy destinations work

## 15. Pre-Launch Sweep

Run this before the main rollout goes live.

- [ ] Crawl all key routes manually
- [ ] Test every header and footer link
- [ ] Test every form once
- [ ] Review every primary CTA once
- [ ] Check sitemap output
- [ ] Check noindex behavior on `/lp/*`
- [ ] Confirm no dead blog or legal links remain
- [ ] Confirm package pages are current
- [ ] Confirm about, contact, and case studies support trust for paid visitors

## 16. Post-Launch 14-Day Checks

- [ ] Monitor form submissions daily
- [ ] Monitor analytics event volume for route changes
- [ ] Review top landing pages for bounce anomalies
- [ ] Review Search Console for indexing anomalies
- [ ] Review internal search or user feedback if available
- [ ] Log all issues into a stabilization backlog

## 17. Launch Signoff

Recommended signoff owners:

- Structure / implementation: Codex or engineering owner
- Copy / messaging: content owner
- Proof / pricing / legal: business owner
- CRO / UX: marketing owner
- SEO / analytics: growth owner

If one person is doing all of this with AI, they should still force themselves to review the site through these separate lenses before launch instead of signing off in one pass.
