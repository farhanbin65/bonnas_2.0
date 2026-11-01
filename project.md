# Bonna's 2.0 — Project Guidelines

## What this is
A second, visually distinct site for Bonna's restaurant, living at `2.bonnas.co.uk`.
Traffic source: Facebook (posts/ads), not Google search.
The main `bonnas.co.uk` site stays as-is and keeps doing SEO/Google traffic — this
site is deliberately **not** trying to rank on Google, so we have creative freedom
on structure/content without worrying about keyword cannibalization.

## Non-negotiables

### 1. Make it invisible to Google
This site must never appear in Google search results. Two things, both required:

**robots.txt** (at site root):
```
User-agent: *
Disallow: /
```

**Meta tag** on every page's `<head>`:
```html
<meta name="robots" content="noindex, nofollow">
```
If using React Helmet / Astro, this must be present on every route, not just home.

### 2. Keep it light
Even though it's not for SEO, page weight still affects:
- Visitor experience coming from Facebook (people bounce fast on slow pages)
- Facebook's own distribution of your posts/ads (they factor in landing page speed)

Guidelines:
- Images: compressed WebP where possible, max ~200KB per image, use responsive
  `srcset` via Sanity's image CDN (see below) rather than one giant PNG
- Avoid heavy animation libraries unless there's a real payoff — Lottie/GSAP are
  fine in moderation, don't load a whole library for one hover effect
- Lazy-load anything below the fold (images, embedded maps, etc.)
- Target: total page weight under ~1.5MB, Lighthouse performance score 85+

### 3. Brand consistency, visual freedom
Must stay recognizably Bonna's:
- Same logo (asset provided)
- 100% halal messaging where relevant
- Collection point: E2 0RB (Roman Road) — if location is mentioned anywhere

Everything else — layout, color palette, typography, page structure, tone — is open.
This should feel like a *different experience* from the main site, not a reskin.
Think: more casual, more visual, more "follow us" energy, since Facebook is the
funnel it's designed around.

## Tech / content setup

- **CMS**: Sanity — same Sanity project as the main site, but a separate dataset
  (`bonnas2`) so content is isolated from the main site's blog/menu data. You'll
  get Editor access scoped to that dataset.
- **Images**: pull everything through Sanity's image pipeline (`@sanity/image-url`)
  rather than hotlinking or hardcoding files — gives automatic resizing/format
  conversion for free.
- **Deployment**: Vercel, pointed at `2.bonnas.co.uk` subdomain.
- **Framework**: your call — React/Vite is fine; Astro is worth considering if
  you want near-zero JS by default (faster loads, still supports React components
  for interactive bits like a contact form or WhatsApp button).

## Out of scope for this site
- SEO metadata (meta descriptions, JSON-LD schema, sitemap) — not needed, this
  site is noindexed
- Blog / content pipeline — that lives on the main site only
- Online ordering logic — orders still go through WhatsApp exactly like the main
  site; this site just needs a clear WhatsApp CTA

## Questions during build
Ping [contact] directly rather than guessing on anything brand-related (logo
usage, claims about halal certification, pricing, menu items) — those need to
match what's accurate for the business.