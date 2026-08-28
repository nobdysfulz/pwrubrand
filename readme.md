# Power Unit Coaching — Design System

Power Unit Coaching LLC is a real estate agent training company (founded 2018, "1000's helped", 90,000+ content subscribers). It sells a production *system*, not motivation, and every surface of the brand argues that point.

**Products represented in this system**

| Product | What it is | Price |
|---|---|---|
| **PWRU University** | On-demand agent training platform built on the 6-pillar PULSE Method™ | $49/mo |
| **PULSEIntel PRO** | AI daily-execution platform: action plans, role-play simulator, CMA generator, Twin Matching Technology ℗ | $99/mo |
| **BPS (Brokerage Performance Suite)** | White-label training platform brokers license, brand, and deploy to a full roster | from $19/mo per agent |
| **Voru Leadership Metrics** · **DTMCON (Do The Most Conference)** | Leadership analytics product and the annual live event | — |

## Sources used

- `uploads/PWRU Logo Black.png`, `uploads/PWRU Logo White.png` — the primary wordmark artwork (copied to `assets/`).
- `uploads/6-PILLAR FRAMEWORK BOOK COVER.pdf.png` — the workbook cover, the single richest sample of the print/collateral system (copied to `assets/`).
- **https://powerunitcoaching.com** — home, `/training-programs/university/`, `/training-programs/pulseintel/`, `/training-programs/teams-brokers/`, `/pricing/`. Read as rendered pages; the WordPress theme CSS was **not** readable, so all numeric values here are reconstructed from the rendered site and the supplied artwork, then codified. Treat them as a proposal, not a transcription.
- No Figma file, codebase, or brand-guidelines PDF was provided.

---

## CONTENT FUNDAMENTALS

**Voice: a practitioner talking to a working agent.** Blunt, unsentimental, faintly impatient with the industry. It always names the problem before selling the fix.

- **Person.** "You" for the reader, "we/our" for the company, never "I". Products are named as actors: *"PULSEIntel PRO builds your daily plan."*
- **Sentence rhythm.** Short declaratives, often fragments, frequently in threes. *"It's not a motivation problem. It's a system problem."* / *"You license it. You brand it."*
- **The core rhetorical move** — negate, then assert: *"Most real estate coaching gives you content and calls it training. Power Unit Coaching gives you a production system."* Nearly every section opens this way. Reuse it; don't invent a softer framing.
- **Headlines.** Sentence-shaped and long, not slogans: *"A Real Estate Training Platform Built for How the Business Actually Works."* Title Case on marketing headlines, sentence case in body.
- **Numbers do the persuading.** 3+ closings a month · 90,000+ subscribers · up to 12 tools replaced · $49 / $99 / $19 · since 2018. Use real ones; never round them up.
- **Objections are quoted verbatim** and answered: *"My agents won't use it."* Keep the quotation marks.
- **CTAs** are imperative and short, ALL CAPS in buttons: TRY 7-DAYS FREE · GET STARTED · MORE INFO · Book a demo · Contact Us Now.
- **Casing.** Buttons, eyebrows, badges, and pillar titles are UPPERCASE. Headlines Title Case. Body sentence case.
- **No emoji. Ever.** No exclamation marks outside quoted testimonials. No "unlock your potential" coaching-speak — the brand actively positions against it.
- **Testimonials** are attributed first name + last initial plus brokerage ("Paula A., LPT Realty") and always carry a number.
- **Trademark discipline.** PULSE Method™, Twin Matching Technology ℗ Patent Pending. Keep the marks.

Words to use: system, framework, execution, production, pipeline, roster, structured, repeatable, deploy, blueprint. Words to avoid: journey, hustle harder, game-changer, unlock, empower (as a verb), synergy.

## VISUAL FOUNDATIONS

**Color.** One saturated brand gradient against near-black and paper white. Magenta `#b3297a` is the primary; violet `#4f1e86` is the other end of the brand gradient and rarely appears flat. Charcoal `#131313`/`#2B2B2B` carries footers, featured cards, and the workbook's top bar. Everything else is greyscale. Status colors exist for product UI only and never appear in marketing. Two background colors per composition maximum — white or `#F7F7F8`, plus one ink or gradient section.

**The gradient is the brand.** `linear-gradient(135deg,#C44490,#b3297a 42%,#4f1e86)`. It appears as: the shield/bolt in the mark, a 4px rule across the top of cards, a full-width CTA band, icon tiles, the fill of oversized stat numerals (`background-clip:text`), and — in print — a diagonal band angled ~7° carrying ghosted value words at ~18% white. Never as a page background behind body copy.

**Type.** Display is a heavy geometric grotesque (Montserrat 800/900 substituted, see caveat) at tight `-0.02/-0.04em` tracking; body is Barlow 400/500 at 1.5–1.65 leading. Eyebrows are 12px uppercase Montserrat 700 at `0.14em`, always magenta. Numerals are the loudest thing on any page — 40–56px, weight 900, often gradient-filled. Mono (IBM Plex Mono) only for dashboard data and token names.

**Spacing & layout.** 4px base scale; 1200px container, 40px page gutter, 24px grid gutter, 96px section padding (64px tight), 760px measure for prose. Three-up card grids are the default section shape. Sticky top nav; nothing else is fixed.

**Backgrounds.** Photography is real (agents at desks, laptops, notebooks), desaturated to near-greyscale so the gradient is the only color in frame. Full-bleed hero photo under a left-weighted dark scrim (`rgba(13,13,13,.92)` → `rgba(79,30,134,.45)`). No illustration, no repeating pattern, no noise/grain texture, no stock 3D. The only graphic motifs are the angled gradient band, the corner chevron, the 4px gradient rule, and the ghosted word wall.

**Cards.** White, 16px radius, 1px `#DEDEDE` hairline, `0 2px 6px rgba(13,13,13,.08)`. Optional 4px gradient rule flush to the top edge — that, not a colored left border, is the brand's accent. Featured/pricing cards invert to the ink gradient. No glassmorphism except the translucent nav over a hero (`blur(14px)`, `rgba(13,13,13,.72)`) — the only place transparency and blur are used.

**Radii.** 4 / 8 / 12 / 16 / 20 / pill. Buttons are the exception: **hard 90° corners, zero radius, always.** Badges, tags, and avatars are fully pill/round; containers are 12–20px; inputs 8px.

**Shadows.** Soft, neutral, low-opacity, straight down. `xs` for resting rows, `sm` for cards, `md/lg` on hover and modals. The one colored shadow is `0 12px 28px rgba(179,41,122,.28)` under a primary CTA. No inner shadows.

**Motion.** Fast and flat — no bounce, no spring, no parallax. 120ms for color/border changes, 200ms for card lift and accordion, 340ms for on-scroll section fades. Easing `cubic-bezier(.2,.7,.3,1)`.

**Hover.** Solid buttons darken one ramp step (500→600); outline buttons invert to filled; cards lift `translateY(-3px)` and go to `shadow-lg`; text links shift magenta→violet and underline; nav items grow a 2px magenta underline. **Press.** `translateY(1px) scale(.99)` plus the 700 ramp step — position, not color, communicates the press. **Focus.** `0 0 0 3px rgba(179,41,122,.32)`, never a browser outline.

**Contrast rule.** Magenta on white passes for large display type and buttons but not for 14px body — body copy is always ink, never magenta.

## ICONOGRAPHY

The brand ships **no icon set**. The only real vector assets are the PWRU wordmark (with its shield-and-bolt glyph) and the workbook's chevron shapes; the live site leans on photography and numerals instead of icons.

**Substitution (flagged):** this system uses **Lucide** from CDN (`unpkg.com/lucide-static@0.469.0/icons/<name>.svg`) via the `Icon` component — 2px stroke, rounded caps, geometric, which matches the wordmark's construction better than filled or duotone sets. Icons are masked so they take `currentColor` or the brand gradient. Common slugs in use: `zap`, `check`, `arrow-right`, `graduation-cap`, `brain-circuit`, `building-2`, `trophy`, `bar-chart-3`, `calendar-check`.

Rules: line icons only, never filled; 16/20/24px; either flat magenta or white-on-gradient tile (46px, 12px radius); never larger than 24px inline with text. **No emoji anywhere.** Unicode glyphs are used only for the trademark marks (™, ℗, ©) and the accordion's +/– controls. Never hand-draw a replacement for the PWRU mark.

## COMPONENTS

`components/core/` — **Button**, **Logo**, **Icon**, **Badge**, **Tag**, **Card**, **Input**, **Checkbox**, **Accordion**
`components/marketing/` — **SectionHeading**, **FeatureCard**, **PillarCard**, **PricingCard**, **TestimonialCard**, **StatBlock**, **CTABanner**, **SiteHeader**, **SiteFooter**

Each has a sibling `.d.ts` (props contract) and `.prompt.md` (what/when + usage).

**Intentional additions.** No source enumerated a component inventory, so this set was derived from the surfaces the live site actually renders. Two are additions rather than observations: **Icon** (a wrapper for the substituted Lucide set — the brand has no glyph library) and **Checkbox** (needed for the broker demo form, which exists on the site as an embedded third-party form we could not read).

## INDEX

- `styles.css` — the single entry point consumers link. `@import`s only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radii.css`, `shadows.css`, `motion.css`, `base.css`
- `assets/` — `pwru-logo-black.png`, `pwru-logo-white.png`, `6-pillar-framework-book-cover.png`
- `components/core/`, `components/marketing/` — the 18 components above, plus their card HTML
- `guidelines/` — 15 specimen cards (Colors, Type, Spacing, Brand) rendered in the Design System tab
- `ui_kits/marketing-site/` — click-through recreation of powerunitcoaching.com (Home, PWRU University, BPS/Brokers, Blog). See its own README.
- `thumbnail.html` — homepage tile
- `SKILL.md` — Agent Skills wrapper

## CAVEATS

1. **Fonts are substituted.** No binaries were supplied and the site's CSS was unreadable. Montserrat (display) and Barlow (body) are Google Fonts stand-ins. Send the real font files and this becomes exact.
2. **Numeric values are reconstructed**, not lifted from source CSS.
3. **UI kit images are hotlinked** from the live WordPress uploads directory and will not render offline.
4. **No logged-in product UI** (PWRU University LMS, PULSEIntel PRO dashboard, BPS admin) is included — those screens are behind auth and were deliberately not invented.
