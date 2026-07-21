# Component coverage audit

A mapping of the SITE_ARCHITECTURE.md page briefs against the components that exist today,
so we build the remaining gaps against real pages instead of speculating. Constraints carried
through: reuse and extend before adding, components stay parameterized macros. Gold discipline
(finalized in the design lab): gold appears only on the CTA button (ctaBand, or a hero
carrying cta.gold as the viewport's single gold action), the numberedList digits, and the
pullQuote rule / tick. Every other accent is teal or sea-foam, including the wave eyebrow.

## What exists today

Foundation (`src/_includes/components/ui.njk`): `button` (primary / ghost / text; all pill
variants share identical metrics and differ only in fill and border), `eyebrow` (teal wave
mark, hidden on mobile), `section` wrapper (tone + width), `icon` (10-icon set). Helper:
`arrow`.

Sections (`src/_includes/components/sections.njk`), with the design-lab extraction landed:

1. `hero` `{ eyebrow?, title, titleEmphasis?, lead?, cta?{href,label,gold?}, secondaryCta?,
   image?{src,alt,sourceTag?}, video?{src,poster,posterAlt}, trust?[{label}],
   variant?: split | center, tone? }`. Default with image is the full-bleed photo under the
   directional sand veil; "split" frames the image beside the text; "center" is the text-only
   reframe hero. The video hero is a mockup only (see the macro comment) and is not
   production ready.
2. `lead` `{ text: string | string[], align?, tone? }`.
3. `pointCards` `{ eyebrow?, title?, columns?: 2|3, viewAll?, tone?,
   cardStyle?: default | center | overlay, cards: [{icon?, image?, eyebrow?, title, body,
   href?, linkLabel?}] }`. "center" is the icon-tile card (circular badge, teal hairline);
   "overlay" sets the title over the photo on a navy scrim.
4. `pullQuote` `{ quote, attribution?, italic?, variant?: inline | tick, foam?, tone? }`.
   "tick" is the centered editorial treatment with the gold tick; foam wraps it in the
   sea-foam wash panel.
5. `faq` `{ eyebrow?, title?, items: [{q,a}], id?, variant?: cards, tone? }` + `faqSchema`.
6. `ctaBand` `{ title, titleEmphasis?, text?, cta{href,label}, note?, watermark?, tagline?,
   variant?: center, tone: navy | sand }`. CONSTRAINT: the navy tone must never be the last
   section directly above the navy footer; use tone "sand" there.
7. `featureRow` `{ lead?, leadEmphasis?, items: [{icon,title,text}], variant?: inline,
   columns?: 3|4, tone? }`. "inline" with a serif lead on navy is the trust band.
8. `rateTable` `{ caption?, rows, footnote?, tone? }`.
9. `promoCallout` `{ eyebrow?, title, titleEmphasis?, body: string | string[], cta,
   image?, reverse?, imageWeight?: image, anchorLine?, pullQuote?, tone? }`. The asymmetric
   split with the flip and image-dominant variants.
10. `breadcrumbs(items)` + `breadcrumbSchema(items, baseUrl)`.
11. `serviceSchema(opts)`.
12. `founderNote` `{ eyebrow?, variant: founder | note, portrait{src,alt}, name?,
    nameEmphasis?, role?, quote?, quoteEmphasis?, body[], creds?[{strong,text}],
    statement?{text,cite}, sign?{name,role}, tone? }`. The Kay block; transparent-cutout
    portrait on a static sea-foam wash with a grounding shadow.
13. `numberedList` `{ eyebrow?, title?, titleEmphasis?, lead?, items: [{icon?, title, body}],
    tone? }`. Hairline rows with gold serif digits (a sanctioned gold accent).
14. `pillLinks` `{ eyebrow?, title?, titleEmphasis?, lead?, links: [{href,label,icon?}],
    tone? }`.
15. `definitionList` `{ eyebrow?, title?, titleEmphasis?, lead?, items: [{term, detail}],
    tone? }`.
16. `steps` `{ eyebrow?, title?, titleEmphasis?, lead?, steps: [{title, body}], tone? }`.
    Vertical numbered timeline; use only where order carries meaning.
17. `prose` `{ dropCap?, width?, tone? }` with a `{% call %}` body. Longform with the navy
    serif drop-cap.

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
| Beach Therapy teaser card | COVERED `promoCallout` |
| "Who we help" grid to `/therapy/*` | COVERED `pointCards` (linkable) |
| "What people struggle with" grid to `/specialties/*` | COVERED `pointCards` (linkable) |
| Team teaser to `/about/our-team` | GAP `teamGrid` (compact variant) |
| Out-of-network + Superbill line | COVERED `lead` |
| Gold CTA band | COVERED `ctaBand` |

### B. Section landing (`/therapy`, `/specialties`)
| Block | Coverage |
|---|---|
| Hero + short intro | COVERED `hero`, `lead` |
| Grid of child pages with short descriptions | COVERED `pointCards` (linkable) |
| CTA | COVERED `ctaBand` |

### C. Therapy audience (6 pages)
| Block | Coverage |
|---|---|
| Who this is for | COVERED `lead` |
| What to expect / how the work looks | COVERED `pointCards` |
| Specialties handled (links out) | COVERED `pillLinks` or `pointCards` (linkable) |
| Beach Therapy as an option | COVERED `promoCallout` |
| The team / who you will work with | GAP `teamGrid` (or COVERED `founderNote` for Kay, or `promoCallout` to `/about/our-team`) |
| Kay pull-quote | COVERED `pullQuote` |
| CTA | COVERED `ctaBand` |

### D. Specialty (9 pages, anxiety is the template)
| Block | Coverage |
|---|---|
| Reframe / lead (acknowledge, reframe, hope) | COVERED `lead` |
| What is happening underneath | COVERED `pointCards` |
| What the work looks like | COVERED `pointCards` |
| Sub-topics (anxiety: panic, phobias, social) | COVERED `numberedList` (the finalized SEO pattern) |
| Beach Therapy as an option | COVERED `promoCallout` (reverse + imageWeight + anchorLine) |
| Related audience page link (anxiety to individuals) | COVERED `pillLinks` |
| Pull-quote | COVERED `pullQuote` |
| FAQ block (anxiety, plus others) | COVERED `faq` + `faqSchema` |
| Support-resources (depression, grief, telehealth, anxiety) | COVERED `support-resources.njk` |
| CTA | COVERED `ctaBand` |

### E. Signature service (4 pages)
| Block | Coverage |
|---|---|
| Origin / what it is | COVERED `lead` |
| Why it works / who it is for | COVERED `pointCards` |
| Beach Therapy: what to expect (wear, privacy, weather); intensive: the day; discernment: the three paths; how to start | COVERED `steps` (sequences) or `pointCards` (unordered sets) |
| Research context (Beach Therapy blue-space) | COVERED `lead` or `pullQuote` |
| Telehealth CA-only note; same team | COVERED `featureRow` / `lead` |
| Support-resources (telehealth) | COVERED `support-resources.njk` |
| CTA | COVERED `ctaBand` |

### F. About overview
| Block | Coverage |
|---|---|
| Founding narrative | COVERED `lead` / `prose` |
| Links to Kay, team, approach | COVERED `pointCards` (linkable) |
| Not-a-therapy-factory ethos | COVERED `pullQuote` |
| CTA | COVERED `ctaBand` |

### G. About-person (`/about/kay-wenger`)
| Block | Coverage |
|---|---|
| Why I started (long-form) | COVERED `prose` (drop-cap longform) |
| Experience arc | COVERED `featureRow` or GAP `timeline` (only if a real timeline is wanted) |
| Susi Q origin story | COVERED `prose` / `lead` |
| Clinical philosophy quote | COVERED `pullQuote` |
| Portrait / bio header | COVERED `founderNote` (founder variant) |
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
| What to expect on the call | COVERED `steps` |
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
| Post grid with categories | COVERED `pointCards` (linkable) or GAP `postList` |
| Category filter | GAP (defer to blog phase) |

### O. Blog post
| Block | Coverage |
|---|---|
| Article body (headings, lists, links, quotes) | COVERED `prose` |
| Pull-quotes within | COVERED `pullQuote` |
| CTA | COVERED `ctaBand` |

### P. Legal / utility
| Block | Coverage |
|---|---|
| Privacy: client-supplied legal text | COVERED `prose` |
| Thank-you: message + button | COVERED `hero` / `lead` / `button` |

---

## 4. Consolidated new-component list (deduplicated)

Ranked by reuse. "Extend" items are not new components.

### Implemented (the design-lab extraction, plus earlier batches)
`pointCards` linkable + cardStyle variants, `promoCallout` (with flip, image-dominant ratio,
anchor line, and inline pull-quote), `steps`, `prose`, `founderNote`, `numberedList`,
`pillLinks`, `definitionList`, the `hero` split / center / video variants and gold-CTA
option, the `faq` cards variant, the `featureRow` inline trust band, the `ctaBand` centered
watermark composition with navy and sand tones, `breadcrumbs` + `breadcrumbSchema`, and
`serviceSchema`. All live in the code and demoed on `/components/`.

### Net-new, low reuse or one-off (still open)
- **`teamGrid`**: person cards (photo, name, credentials, specialties, book-with link).
  Purpose: `/about/our-team`, with a compact variant for the homepage team teaser. Params:
  `{ people: [{name, credential, specialties[], href, image?{src,alt}}], compact? }`.
  LOW-MEDIUM reuse (2 places). Respect the CLIENT_FACTS flags: publish confirmed credentials
  only, and no permanent photography for departing associates.
- **`napBlock`**: address, phone, email, hours. Purpose: `/contact` (and maybe `/get-started`).
  LOW reuse. Could reuse the footer NAP markup rather than a new macro.
- **`contactForm`**: the contact form with Turnstile and a success state. ONE-OFF (`/contact`).
- **`bookingEmbed`**: Calendly iframe wrapper. ONE-OFF (`/get-started`).
- **`mapEmbed`**: map iframe. ONE-OFF (`/contact`), likely just inline HTML, not a macro.
- **`postList`**: blog cards with date, excerpt, category. Only if the linkable `pointCards`
  does not suffice. DEFER to the blog phase.

### Separate track: schema partials (non-visual, from SCHEMA.md)
Not section components, but needed and macro-shaped. Implemented: `faqSchema`,
`breadcrumbSchema` (with the visible `breadcrumbs`), `serviceSchema`. Still needed:
`personSchema` (Kay and team) and the `MedicalBusiness` reference used on the homepage and
`/contact`. Build each alongside the page type that first needs it, keyed to CLIENT_FACTS.md
values.

---

## 5. Suggested build batches

Build against real pages, growth-priority first (individuals, children, anxiety, depression),
so nothing is speculative.

- **Batch 1, unlock specialty and audience pages. DONE.** `pointCards` linkable,
  `promoCallout`, `breadcrumbs` (+ `breadcrumbSchema`), `serviceSchema` are implemented.
  All 9 specialty pages and all 6 audience pages are componentized; `/specialties/anxiety`
  is the template.
- **Batch 2, signature services and about depth. DONE (components).** `steps`, `prose`,
  `founderNote`, `numberedList`, `pillLinks`, `definitionList`, and the hero / faq / ctaBand /
  featureRow / pullQuote variants are implemented via the design-lab extraction. Remaining
  from this batch: `personSchema` for Kay.
- **Batch 3, homepage and team.** Add `teamGrid` (plus its compact homepage teaser). The
  homepage otherwise reuses Batch 1 and 2 pieces, so it comes together here.
- **Batch 4, conversion and contact (one-offs, build lean on the page).** `bookingEmbed`,
  `napBlock`, `contactForm`, `mapEmbed`. Keep these minimal and page-local; do not generalize a
  one-off into a configurable component.
- **Batch 5, blog (later phase).** `prose` is built; add `postList` only if
  linkable `pointCards` is not enough. Defer until the blog is scheduled.

### Over-building watch list
- Do not add a separate `linkGrid`; extend `pointCards` instead.
- `mapEmbed`, `bookingEmbed`, `contactForm`, `napBlock` are one-offs. Prefer inline page markup
  over speculative macros; promote to a macro only if a second page actually needs it.
- Skip `timeline`; the portrait need is covered by `founderNote`.
- Do not pre-build `postList` before the blog phase.

### Net count
Seventeen visual section components are implemented (see "What exists today"), leaving
`teamGrid`, the four page-local one-offs, `personSchema`, and the `MedicalBusiness` record.
The library stays small and intentional for a focused practice; new variants extend existing
macros instead of adding parallel components.
