# Component coverage audit

A mapping of the SITE_ARCHITECTURE.md page briefs against the 12 components that exist today,
so we build the remaining gaps against real pages instead of speculating. Planning only, no
code. Constraints carried through: reuse and extend before adding, gold stays in the CTA band,
components stay parameterized macros.

## What exists today (the 12)

Foundation (`src/_includes/components/ui.njk`): `button` (primary / ghost / text), `eyebrow`,
`section` wrapper (tone + width), `icon` (10-icon set). Helper: `arrow`.

Sections (`src/_includes/components/sections.njk`): `hero` (+ photo variant), `lead`,
`pointCards`, `pullQuote`, `faq` (+ `faqSchema`), `ctaBand`, `featureRow`, `rateTable`.

Also present and reusable: `support-resources.njk` (the 911 / 988 / Crisis Text / SAMHSA block,
already built) and the shared `header` / `footer` / mega menu.

---

## 1. Page-type inventory

| Type | Pages | Count |
|---|---|---|
| A. Homepage | `/` | 1 |
| B. Section landing | `/therapy`, `/specialties` | 2 |
| C. Therapy audience | `/therapy/{individuals,couples,families,teens,children,seniors}` | 6 |
| D. Specialty | `/specialties/{anxiety,depression,grief,life-transitions,infidelity,conflict-resolution,neurodiversity,faith-based,addiction-recovery}` | 9 |
| E. Signature service | `/beach-therapy`, `/couples-intensive`, `/discernment-counseling`, `/telehealth` | 4 |
| F. About overview | `/about` | 1 |
| G. About-person | `/about/kay-wenger` | 1 |
| H. Team | `/about/our-team` | 1 |
| I. Approach | `/about/our-approach` | 1 |
| J. Fees | `/fees` | 1 |
| K. FAQ | `/faq` | 1 |
| L. Get started (conversion) | `/get-started` | 1 |
| M. Contact | `/contact` | 1 |
| N. Blog index | `/blog` | 1 |
| O. Blog post | `/blog/*` template | 1 |
| P. Legal / utility | `/privacy-policy`, `/thank-you` | 2 |
| Q. Testimonials (ON HOLD) | `/testimonials` | 1 |

Type D (specialty) and type C (audience) are 15 of the roughly 30 pages, so their recipe drives
almost everything. Build for them first and most of the site falls out.

---

## 2 and 3. Per-type recipe and coverage

Legend: COVERED (name the component) · EXTEND (existing component needs a param or variant) ·
GAP (net-new). Every type ends on `ctaBand` and most open on `hero`, both COVERED, so those are
noted once here and omitted from the rows below unless notable.

### A. Homepage
| Block (from brief) | Coverage |
|---|---|
| Warm hero, approved intro copy | COVERED `hero` |
| Three-tier proof (credentials, category-of-one, operations) as warmth | COVERED `featureRow` |
| Beach Therapy teaser card | GAP `promoCallout` |
| "Who we help" grid to `/therapy/*` | EXTEND `pointCards` (linkable cards) |
| "What people struggle with" grid to `/specialties/*` | EXTEND `pointCards` (linkable cards) |
| Team teaser to `/about/our-team` | GAP `teamGrid` (compact variant) |
| Out-of-network + Superbill line | COVERED `lead` |
| Gold CTA band | COVERED `ctaBand` |

### B. Section landing (`/therapy`, `/specialties`)
| Block | Coverage |
|---|---|
| Hero + short intro | COVERED `hero`, `lead` |
| Grid of child pages with short descriptions | EXTEND `pointCards` (linkable cards) |
| CTA | COVERED `ctaBand` |

### C. Therapy audience (6 pages)
| Block | Coverage |
|---|---|
| Who this is for | COVERED `lead` |
| What to expect / how the work looks | COVERED `pointCards` |
| Specialties handled (links out) | EXTEND `pointCards` (linkable) or `button` list |
| Beach Therapy as an option | GAP `promoCallout` |
| The team / who you will work with | GAP `teamGrid` (or `promoCallout` to `/about/our-team`) |
| Kay pull-quote | COVERED `pullQuote` |
| CTA | COVERED `ctaBand` |

### D. Specialty (9 pages, anxiety is the template)
| Block | Coverage |
|---|---|
| Reframe / lead (acknowledge, reframe, hope) | COVERED `lead` |
| What is happening underneath | COVERED `pointCards` |
| What the work looks like | COVERED `pointCards` |
| Sub-topics (anxiety: panic, phobias, social) | COVERED `pointCards` or `lead` per section |
| Beach Therapy as an option | GAP `promoCallout` |
| Related audience page link (anxiety to individuals) | EXTEND `pointCards` (linkable) or `button` |
| Pull-quote | COVERED `pullQuote` |
| FAQ block (anxiety, plus others) | COVERED `faq` + `faqSchema` |
| Support-resources (depression, grief, telehealth, anxiety) | COVERED `support-resources.njk` |
| CTA | COVERED `ctaBand` |

### E. Signature service (4 pages)
| Block | Coverage |
|---|---|
| Origin / what it is | COVERED `lead` |
| Why it works / who it is for | COVERED `pointCards` |
| Beach Therapy: what to expect (wear, privacy, weather); intensive: the day; discernment: the three paths; how to start | GAP `steps` (genuine sequences) or `pointCards` (unordered sets) |
| Research context (Beach Therapy blue-space) | COVERED `lead` or `pullQuote` |
| Telehealth CA-only note; same team | COVERED `featureRow` / `lead` |
| Support-resources (telehealth) | COVERED `support-resources.njk` |
| CTA | COVERED `ctaBand` |

### F. About overview
| Block | Coverage |
|---|---|
| Founding narrative | COVERED `lead` / `prose` |
| Links to Kay, team, approach | EXTEND `pointCards` (linkable) |
| Not-a-therapy-factory ethos | COVERED `pullQuote` |
| CTA | COVERED `ctaBand` |

### G. About-person (`/about/kay-wenger`)
| Block | Coverage |
|---|---|
| Why I started (long-form) | GAP `prose` (rich body) |
| Experience arc | COVERED `featureRow` or GAP `timeline` (only if a real timeline is wanted) |
| Susi Q origin story | COVERED `prose` / `lead` |
| Clinical philosophy quote | COVERED `pullQuote` |
| Portrait / bio header | EXTEND `hero` (portrait) or GAP `personHeader` |
| CTA | COVERED `ctaBand` |

### H. Team (`/about/our-team`)
| Block | Coverage |
|---|---|
| Fit-match intro | COVERED `lead` |
| Card per associate (photo, credential, specialties, book-with link) | GAP `teamGrid` |
| Supervised-by-Kay note | COVERED `lead` |
| CTA | COVERED `ctaBand` |

### I. Approach (`/about/our-approach`)
| Block | Coverage |
|---|---|
| Relationships-heal-people philosophy | COVERED `lead` / `prose` |
| Understood and challenged | COVERED `pointCards` (2-up) |
| Solution-focused, integrative, tailored | COVERED `featureRow` |
| Supervision model | COVERED `lead` |
| CTA | COVERED `ctaBand` |

### J. Fees
| Block | Coverage |
|---|---|
| Out-of-network positioning line | COVERED `lead` |
| The four reasons | COVERED `pointCards` or `featureRow` |
| Rate cards (associates and Kay) | COVERED `rateTable` |
| Superbill explanation | COVERED `lead` |
| Sliding scale / cancellation policy | COVERED `lead` |
| CTA | COVERED `ctaBand` |

Fees is fully covered by existing components.

### K. FAQ
| Block | Coverage |
|---|---|
| Q and A list | COVERED `faq` + `faqSchema` |
| CTA | COVERED `ctaBand` |

Fully covered.

### L. Get started (conversion)
| Block | Coverage |
|---|---|
| Warm framing of the free call | COVERED `hero` / `lead` |
| What to expect on the call | GAP `steps` or COVERED `pointCards` |
| Calendly embed | GAP `bookingEmbed` (one-off) |
| Out-of-network + 24-hour note | COVERED `lead` / `featureRow` |
| Phone alternative | COVERED `button` / `lead` |

### M. Contact
| Block | Coverage |
|---|---|
| NAP block | GAP `napBlock` (one-off, or reuse footer markup) |
| Map embed | GAP `mapEmbed` (one-off, likely inline) |
| Contact form (Turnstile, success state) | GAP `contactForm` (one-off) |
| Hours (once resolved), parking | COVERED `lead` |
| CTA | COVERED `ctaBand` |

### N. Blog index
| Block | Coverage |
|---|---|
| Post grid with categories | EXTEND `pointCards` (linkable) or GAP `postList` |
| Category filter | GAP (defer to blog phase) |

### O. Blog post
| Block | Coverage |
|---|---|
| Article body (headings, lists, links, quotes) | GAP `prose` |
| Pull-quotes within | COVERED `pullQuote` |
| CTA | COVERED `ctaBand` |

### P. Legal / utility
| Block | Coverage |
|---|---|
| Privacy: client-supplied legal text | GAP `prose` |
| Thank-you: message + button | COVERED `hero` / `lead` / `button` |

---

## 4. Consolidated new-component list (deduplicated)

Ranked by reuse. "Extend" items are not new components.

### Extend an existing component
- **`pointCards`, linkable variant.** Add an optional `href` (and arrow) per card, plus an
  optional section-level "view all" link. Turns the existing grid into the who-we-help,
  what-you-struggle-with, section-landing, related-links, about-index, and blog-index grids.
  HIGH reuse. This single extension removes the most gaps on the board.
- **`hero`, portrait variant (maybe).** Only if `/about/kay-wenger` wants a portrait beside the
  title. If not, skip. LOW, one page.

### Net-new, high reuse
- **`promoCallout`** — one media cell (image or the sea-foam placeholder) plus eyebrow, serif
  heading, blurb, and a link, as a horizontal band. Purpose: "Beach Therapy as an option" on
  audience and specialty pages, and the homepage Beach Therapy teaser. Params:
  `{ eyebrow?, title, body, cta{href,label}, image?{src,alt}, reverse? }`. HIGH reuse
  (homepage, 6 audience, several specialties). Reuses the mega-menu feature-cell styling.
- **`steps`** — an ordered process list, marker plus title plus text, for genuine sequences
  only. Purpose: Beach Therapy how-to-start, the intensive day, get-started what-to-expect,
  discernment paths. Params: `{ eyebrow?, title?, steps: [{title, text}], tone? }`. MEDIUM reuse
  (4 to 5 pages). Note: use only where order carries meaning, not as decoration.
- **`prose`** — a rich-text body wrapper that styles h2 / h3 / p / ul / blockquote / links at a
  reading measure. Purpose: Kay long-form, blog posts, privacy policy, parts of about and
  approach. Params: `{ tone?, width? }` with `{% call %}` body. MEDIUM reuse (5-plus pages).

### Net-new, low reuse or one-off
- **`teamGrid`** — person cards (photo, name, credentials, specialties, book-with link).
  Purpose: `/about/our-team`, with a compact variant for the homepage team teaser. Params:
  `{ people: [{name, credential, specialties[], href, image?{src,alt}}], compact? }`.
  LOW-MEDIUM reuse (2 places). Respect the CLIENT_FACTS flags: publish confirmed credentials
  only, and no permanent photography for departing associates.
- **`napBlock`** — address, phone, email, hours. Purpose: `/contact` (and maybe `/get-started`).
  LOW reuse. Could reuse the footer NAP markup rather than a new macro.
- **`contactForm`** — the contact form with Turnstile and a success state. ONE-OFF (`/contact`).
- **`bookingEmbed`** — Calendly iframe wrapper. ONE-OFF (`/get-started`).
- **`mapEmbed`** — map iframe. ONE-OFF (`/contact`), likely just inline HTML, not a macro.
- **`postList`** — blog cards with date, excerpt, category. Only if the linkable `pointCards`
  does not suffice. DEFER to the blog phase.

### Separate track: schema partials (non-visual, from SCHEMA.md)
Not section components, but needed and macro-shaped. `faqSchema` exists. Still needed:
`breadcrumbSchema` (plus a visible `breadcrumbs` component, HIGH reuse on every child page),
`serviceSchema` (all `/therapy/*`, `/specialties/*`, signature services), `personSchema`
(Kay and team), and the `MedicalBusiness` reference used on the homepage and `/contact`. Build
each alongside the page type that first needs it, keyed to CLIENT_FACTS.md values.

---

## 5. Suggested build batches

Build against real pages, growth-priority first (individuals, children, anxiety, depression),
so nothing is speculative.

- **Batch 1, unlock specialty and audience pages (highest ROI).** Extend `pointCards`
  (linkable), add `promoCallout`, add `breadcrumbs` (+ `breadcrumbSchema`), add `serviceSchema`.
  With the existing 12, this fully covers all 9 specialty pages and all 6 audience pages, more
  than half the site. Ship `/specialties/anxiety` first as the template, then depression,
  individuals, children.
- **Batch 2, signature services and about depth.** Add `steps` and `prose`. Unlocks
  `/beach-therapy`, `/couples-intensive`, `/discernment-counseling`, `/telehealth`,
  `/about/kay-wenger`, `/about`, `/about/our-approach` (with `personSchema` for Kay).
- **Batch 3, homepage and team.** Add `teamGrid` (plus its compact homepage teaser). The
  homepage otherwise reuses Batch 1 and 2 pieces, so it comes together here.
- **Batch 4, conversion and contact (one-offs, build lean on the page).** `bookingEmbed`,
  `napBlock`, `contactForm`, `mapEmbed`. Keep these minimal and page-local; do not generalize a
  one-off into a configurable component.
- **Batch 5, blog (later phase).** `prose` is already built in Batch 2; add `postList` only if
  linkable `pointCards` is not enough. Defer until the blog is scheduled.

### Over-building watch list
- Do not add a separate `linkGrid`; extend `pointCards` instead.
- `mapEmbed`, `bookingEmbed`, `contactForm`, `napBlock` are one-offs. Prefer inline page markup
  over speculative macros; promote to a macro only if a second page actually needs it.
- Skip `timeline` and the hero portrait variant unless `/about/kay-wenger` genuinely calls for
  them once we draft it.
- Do not pre-build `postList` before the blog phase.

### Net count
Two extensions plus roughly five reusable new components (`promoCallout`, `steps`, `prose`,
`teamGrid`, `breadcrumbs`) plus four page-local one-offs, plus the schema partials. That keeps
the library around 17 to 18 visual components total, still small and intentional for a focused
practice.
