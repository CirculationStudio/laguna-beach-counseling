# SCHEMA.md

The strategy handoff for structured data: which JSON-LD type each page template gets, and the entity data that feeds it. Dev implements from this and validates every block at validator.schema.org. Treat schema as business-critical: it is how the practice gets surfaced in AI answers and maps, so it must not regress.

Canonical entity values live in CLIENT_FACTS.md. This file says which type goes where; CLIENT_FACTS.md says what the values are. Do not duplicate values here; reference them.

---

## Site-wide

- `Organization` (or the more specific `MedicalBusiness`, see below) declared once, referenced by `@id` across pages so every page points at the same entity rather than redefining it.
- `BreadcrumbList` on every page below the top level (the `/therapy/*`, `/specialties/*`, and `/about/*` children especially).
- `WebSite` with the canonical URL.

Do NOT emit `aggregateRating` until real review totals are pulled from GBP and Yelp (both currently TBD in CLIENT_FACTS.md). Fabricated or placeholder ratings are a violation and a trust risk. Add it only once the numbers are real, and set a monthly refresh cadence.

---

## The business entity

Primary `@type`: `MedicalBusiness`, dual-typed with `ProfessionalService`.
`medicalSpecialty`: "Psychiatric" and "Family" (closest schema.org values for a psychotherapy practice).

Core properties (values from CLIENT_FACTS.md): `name`, `address` (PostalAddress), `telephone`, `email`, `url`, `priceRange` ($$$), `currenciesAccepted` (USD), `paymentAccepted`, `areaServed`, `hasMap`, `geo`, and `openingHoursSpecification`.

`sameAs` array (the entity signals, use the canonical URLs in CLIENT_FACTS.md): Google Business Profile, Yelp, Facebook, Instagram, Kay's LinkedIn, Psychology Today (Kay), and the NRMFT profile.

Two cautions:
- `openingHoursSpecification` must use the RESOLVED authoritative hours, not the current site-vs-Yelp discrepancy. Hold schema hours until CLIENT_FACTS.md hours are confirmed.
- The "Be Seen Within 24 Hours" access promise is marketing copy, not a schema hours value. Keep it in page copy, out of `openingHoursSpecification`.

`LocalBusiness` schema is anchored on `/contact` (the page carrying the map and NAP) and referenced on the homepage. Do not redefine the business on every page; reference the `@id`.

---

## Per-template schema

| Page / template | Schema type | Notes |
|---|---|---|
| `/` homepage | `MedicalBusiness` (reference `@id`) + `WebSite` | Anchor entity reference, not a redefinition |
| `/contact` | `MedicalBusiness` full record + `PostalAddress` + `geo` + `hasMap` | The canonical NAP page |
| `/therapy`, `/specialties` (section landings) | `ItemList` + `BreadcrumbList` | Hub pages, not services. `ItemList` enumerates the child pages so a machine can read what the section contains. Do NOT emit `Service` here; the children own that. Feed the list from the same nav.json-derived array that renders the visible grid so the two cannot drift |
| `/about` | `AboutPage` | Links to Person entities |
| `/about/kay-wenger` | `Person` | Kay's entity: name, jobTitle, credentials, `worksFor` the business, `sameAs` (her LinkedIn, Psychology Today, NRMFT). The strongest entity page on the site |
| `/about/our-team` | `Person` (one per associate) | Each associate: name, credential, `worksFor`, `supervisor` = Kay where accurate. Only publish confirmed credentials (see CLIENT_FACTS.md) |
| `/about/our-approach` | `AboutPage` | No special type needed beyond breadcrumb |
| `/therapy/*` (individuals, couples, families, teens, children, seniors) | `Service` | `serviceType`, `provider` = the business `@id`, `areaServed`. One Service per page |
| `/specialties/*` (anxiety, depression, grief, life-transitions, infidelity, conflict-resolution, neurodiversity, faith-based, addiction-recovery) | `Service` | Same pattern. `serviceType` = the specialty |
| `/beach-therapy` | `Service` | The category-of-one offering. Consider adding descriptive properties; do not invent a nonstandard type |
| `/couples-intensive` | `Service` | Include price range once published |
| `/discernment-counseling` | `Service` | |
| `/telehealth` | `Service` | `availableChannel` / online delivery; `areaServed` = California (state licensing limits it to CA residents) |
| `/fees` | `Service` with `offers` / `PriceSpecification` | Reflect the out-of-network posture accurately; do not imply insurance is billed directly |
| `/faq` | `FAQPage` | The `Question`/`Answer` pairs MUST match the visible on-page FAQ exactly. Mismatched FAQ schema is a known penalty risk |
| `/blog` index | `Blog` | |
| blog post template | `Article` (or `BlogPosting`) | `author` = the relevant Person, `publisher` = the business |
| `/testimonials` | HOLD | No `Review` schema until the HIPAA-compliant authorization workflow is approved. Do not build with identifying client content |
| `/get-started` | `Service` or `ContactPoint` | The booking page; no PHI in schema |
| `/privacy-policy`, `/thank-you` | none needed | Utility pages |

---

## FAQ and answer-engine notes

- Any FAQ content that appears on a service page (not just `/faq`) can carry `FAQPage` schema, but the schema must mirror the visible text word for word.
- This build takes the Answer Engine module: ship a single curated `llms.txt` at the root (see the roadmap). It is agent infrastructure, not an SEO lever. Do not generate per-page `.md` mirror files.
- No `agents.md` and no UCP/ACP manifests here: the site does not transact (no payments, no PHI, booking is an external Calendly embed). Agent commerce manifests apply only where an agent can actually complete a transaction on the site, which is not the case.

---

## Validation gate

- Validate every JSON-LD block at validator.schema.org before launch.
- Confirm the `FAQPage` blocks match visible content exactly.
- Confirm `sameAs` URLs all resolve.
- Confirm no `aggregateRating` or `Review` ships with placeholder or fabricated values.
- Re-validate after any content edit that touches a page carrying schema (a Chad audit job).
