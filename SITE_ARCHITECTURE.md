# SITE_ARCHITECTURE.md

The strategy handoff to Dev. This is the contract the build is measured against: every page, its URL, its one target keyword and intent, its conversion goal, and how the pages link to each other. Source of truth is the approved LBC Sitemap and SEO Strategy (Circulation Studio, June 2026) and the LBC Client DNA (June 30, 2026).

Client: Laguna Beach Counseling (LBC)
Sister brand: Orange County Couples Counseling (OCCC), separate repo and build. See "De-cannibalization" below.
Tier: Standard. Attributes: blog (yes), booking (embed, no PHI), answer engine (yes), PWA (no), bilingual (no, English only, so no hreflang). Provenance: agency AI-assisted, so voice-tone.md applies. Jurisdiction: US (California). Build profile: performance-first.

---

## URL and slug conventions

- Lowercase, hyphenated, no accents, no trailing slash decisions left to the build (pick one and enforce with a redirect).
- Section landing pages are real pages, not just parents: /about, /therapy, /specialties each render content, not a bare index.
- Keep high-value existing URLs identical where they already rank. Everything that changes gets a 301 in `_redirects` (see Migration).
- One canonical host: www.lagunabeachcounseling.com. Apex redirects to www.

---

## The organizing idea

Two kinds of pages, because that is how people actually search:

1. Who we help (audience pages, under /therapy): individuals, couples, families, teens, children, seniors.
2. What people are struggling with (problem pages, under /specialties): anxiety, depression, grief, life transitions, infidelity, conflict resolution, neurodiversity, faith-based.

One page, one job. A person searching couples work lands on a page entirely about couples work, not a catch-all. Depth beats breadth.

---

## The sitemap

Status key: Keep (exists, carries over), Reworked (exists, restructured), New (net-new page), Sign-off (needs a client decision before it ships).

### Core

| URL | Status | Target keyword (primary) | Intent | Conversion goal |
|---|---|---|---|---|
| `/` | Keep | therapist Laguna Beach | Navigational / commercial | Free fit call (primary), route to the right service page |
| `/about` | Reworked | about Laguna Beach Counseling | Informational / trust | Build trust, route to Kay + team, push to fit call |
| `/about/kay-wenger` | Reworked | Kay Wenger LMFT | Branded authority | Establish Kay as entity, push to fit call |
| `/about/our-team` | Reworked | counseling team Laguna Beach | Trust / fit-match | Route each visitor to the right associate, fit call |
| `/about/our-approach` | Reworked | our therapy approach | Informational | Explain the model ("relationships heal people"), fit call |

### Who we help (`/therapy`)

| URL | Status | Target keyword (primary) | Intent | Conversion goal |
|---|---|---|---|---|
| `/therapy/individuals` | Reworked | individual therapy Laguna Beach | Commercial | Fit call. GROWTH PRIORITY page, see note below |
| `/therapy/couples` | Reworked | couples therapy Laguna Beach | Commercial | Fit call. Premarital content merges in here |
| `/therapy/families` | Reworked | family therapy Laguna Beach | Commercial | Fit call |
| `/therapy/teens` | Reworked | teen therapist Laguna Beach | Commercial | Fit call. Mother-and-daughter lives here as a section, not its own URL |
| `/therapy/children` | Reworked | child therapist Laguna Beach | Commercial | Fit call. GROWTH PRIORITY (Rozy's specialty) |
| `/therapy/seniors` | Reworked | senior counseling Laguna Beach | Commercial | Fit call. Kay's Susi Q authority anchors this page |

### What people struggle with (`/specialties`)

| URL | Status | Target keyword (primary) | Intent | Conversion goal |
|---|---|---|---|---|
| `/specialties/anxiety` | New | anxiety therapist Laguna Beach | Commercial | Fit call. GROWTH PRIORITY. First specialty page in queue |
| `/specialties/depression` | New | depression therapist Laguna Beach | Commercial | Fit call. GROWTH PRIORITY |
| `/specialties/grief` | New | grief counseling Laguna Beach | Commercial | Fit call. Links to seniors + Susi Q |
| `/specialties/life-transitions` | New | life transition counseling | Commercial | Fit call |
| `/specialties/infidelity` | New | infidelity counseling Laguna Beach | Commercial | Fit call. Top presenting issue; links to couples + intensives |
| `/specialties/conflict-resolution` | New | conflict resolution counseling | Commercial | Fit call; links to couples |
| `/specialties/neurodiversity` | New | neurodivergent therapy Laguna Beach | Commercial | Fit call (ADHD and autism-affirming) |
| `/specialties/faith-based` | New | faith-based counseling Laguna Beach | Commercial | Fit call. Replaces old "Christian Counseling," broadened |
| `/specialties/addiction-recovery` | New | addiction counseling Laguna Beach | Commercial | Fit call. Carries over the old `/addictionandrecovery` page. CONFIRM which clinician covers this (was Austin, departing) |

### Signature services (the differentiators)

| URL | Status | Target keyword (primary) | Intent | Conversion goal |
|---|---|---|---|---|
| `/beach-therapy` | Keep | beach therapy Laguna Beach | Commercial / category-of-one | Fit call. HIGHEST internal-link priority, the defensible differentiator |
| `/sand-castle-therapy` | New | play therapy Laguna Beach | Commercial / category-of-one | Fit call. The children's counterpart to Beach Therapy; supports the `/therapy/children` growth priority |
| `/couples-intensive` | New | couples intensive Orange County | Commercial | Contact for intensive; links to couples + infidelity |
| `/discernment-counseling` | Reworked | discernment counseling Laguna Beach | Commercial | Fit call; links to couples |
| `/telehealth` | Reworked | online therapy California | Commercial | Fit call; statewide-CA framing |

### Practical and conversion

| URL | Status | Target keyword (primary) | Intent | Conversion goal |
|---|---|---|---|---|
| `/fees` | Reworked | therapy cost Laguna Beach | Commercial / objection | Explain out-of-network + Superbill; push to fit call. Redirect any old `/rates` here |
| `/faq` | New | what to expect first therapy session | Informational | Answer objections; FAQPage schema; push to fit call |
| `/testimonials` | Sign-off | Laguna Beach Counseling reviews | Trust | HOLD until HIPAA-compliant written-authorization workflow is confirmed. Do not build with identifying client content |
| `/blog` | New | (hundreds of long-tail over time) | Informational | Capture editorial search; internal-link to service pages |
| `/get-started` | Reworked | book therapy appointment Laguna Beach | Transactional | THE conversion page. Embeds the free "Get to Know Us" Calendly. Replaces old `/appointment` |
| `/contact` | Keep | contact Laguna Beach Counseling | Navigational | Form + NAP + map; LocalBusiness schema lives here |
| `/privacy-policy` | Keep | (utility) | Utility | Required; doubly important for a therapy practice |
| `/thank-you` | Keep | (utility) | Utility | Form/booking confirmation state |

### Retiring, and why

- `/search` and `/services-provided`: website plumbing the new structure replaces.
- `/premarital`: folds into `/therapy/couples` as a section (301).
- `/mother-and-daughter-help`: becomes a section inside `/therapy/teens` (301).
- `/christian-counseling`: becomes the broader `/specialties/faith-based` (301).

No content is lost. Each piece moves to where it belongs. Write a 301 for every retired or moved URL.

---

## The primary conversion path

Every page's CTA points to the same place: the free 15 to 20 minute "Get to Know Us" call, booked through the Calendly embed on `/get-started` (calendly.com/lbc-occc/30min). This is warmer than a hard "book an appointment" and lowers the barrier for someone who is nervous.

Brand constraint (firm): one gold CTA per viewport, maximum. The gold is reserved for the single most important action in view.

Secondary CTA where appropriate: phone (949-357-3587) and the "Be Seen Within 24 Hours" access promise.

---

## Internal linking (priority pages and the link map)

Priority pages (the ones other pages should link toward, in rough order):

1. `/beach-therapy` (category-of-one; link from homepage, about, couples, anxiety, telehealth-adjacent copy)
2. `/get-started` (every page)
3. `/therapy/couples` and `/specialties/infidelity` (heavy inbound couples demand from OCCC referrals)
4. Growth-priority individual pages: `/therapy/individuals`, `/therapy/children`, `/specialties/anxiety`, `/specialties/depression`
5. `/about/kay-wenger` (entity authority; link from every service page's "who you'll work with" area)

Cross-link rules:
- Every `/specialties/*` page links to the matching `/therapy/*` audience page and vice versa (anxiety links to individuals; infidelity links to couples and to couples-intensive; grief links to seniors).
- `/therapy/seniors` and `/specialties/grief` both link to the Kay / Susi Q community story on `/about/kay-wenger`.
- `/beach-therapy` links out to the audience pages that most use it (couples, anxiety, individuals) so the differentiator threads through the site.
- Blog posts link down into the relevant service page (editorial supports commercial, not the other way around).

---

## The growth-priority note (weight content toward this)

OCCC feeds LBC a steady stream of couples referrals, so the couples calendar runs full. LBC's deliberate growth focus is INDIVIDUAL clients: children (Rozy's specialty), and adults with depression and anxiety. Weight new content, internal linking emphasis, and future ad landing pages toward `/therapy/individuals`, `/therapy/children`, `/specialties/anxiety`, and `/specialties/depression`. This is a strategic emphasis, not a rigid quota. Couples pages still matter; they just are not the capacity bottleneck.

---

## Entity establishment (feeds SCHEMA.md)

Consistent NAP everywhere (see CLIENT_FACTS.md for the canonical values). `sameAs` links to the real profiles: Google Business Profile, Yelp, Facebook, Instagram, Kay's LinkedIn, Psychology Today, and the NRMFT profile. The goal is for search and AI systems to recognize LBC as a real, rooted local entity, which is increasingly what decides who gets cited. Kay's authenticity (three decades in this specific community, Susi Q, NRMFT, Pepperdine) is the asset a competitor and a machine cannot fake, so encode it as structured data, not just prose.

---

## De-cannibalization with OCCC (do not let the two sites compete)

Both brands share ownership and team but must not fight each other for the same queries.

- LBC owns: Laguna-local intent, Beach Therapy, senior counseling, and the growth-priority individual work.
- OCCC owns: county-wide and statewide couples intent, telehealth-led positioning, and Discernment Counseling depth.

Where a query genuinely overlaps (for example "couples counseling Laguna Beach"), LBC takes it because of the local signal. When linking between the two sites, use distinct UTM tags and keep each brand's canonical on its own domain.

---

## SEO baseline and findings (GSC, 12 months to July 2026)

Captured from Google Search Console for the current TherapySites site. This is the pre-rebuild baseline; capture it again after launch to detect any redirect damage. Numbers are directional (GSC anonymizes many queries).

Topline: about 1,339 clicks and about 129,500 impressions over 12 months. Small but real, and the shape tells the story: the site earns impressions but ranks poorly, so it rarely gets the click. Non-branded queries pull roughly 61,000 impressions but only about 154 clicks (a CTR near 0.25 percent), because most non-branded rankings sit on page two or worse. That gap is the entire opportunity: the rebuild's job is to convert existing impressions into clicks by improving position and CTR, not to chase brand-new topics.

Branded vs non-branded: among captured queries, roughly 60 percent of clicks are branded (people already searching "laguna beach counseling," "kay wenger"). Winning more non-branded search is the growth lever.

Top pages to protect in migration (by clicks; redirect these with extra care and watch them post-launch):
- `/` homepage, about 630 clicks.
- `/aboutme` (to `/about/kay-wenger`), 146 clicks. Kay's page is a top performer; preserve the equity.
- `/meetthestaff/christy-hill`, 123 clicks, and `/meetthestaff/natasha-gaffaney`, 51 clicks at a strong position (about 9). See the associate-bio note below.
- `/discernmentcounseling` (to `/discernment-counseling`), 72 clicks, about 10,400 impressions. A genuine LBC asset (see the de-cannibalization note).
- `/beach-therapy`, 46 clicks but about 12,500 impressions at position ~16. The single biggest on-page opportunity: category-of-one, huge impression volume, stuck on page two. Improving this page's position is the highest-yield SEO move on the site. URL stays identical, so equity carries.
- `/senior-counseling` (to `/therapy/seniors`), 38 clicks, about 5,600 impressions at position ~36 (page four). Big latent demand, terrible position.
- `/griefcounseling` (to `/specialties/grief`), 22 clicks, about 6,900 impressions at position ~30.
- `/blog/1399501-the-benefits-of-therapy-for-children`, 24 clicks at position ~10. A specific ranking blog URL. Preserve or 301 it precisely, do not let it 404. Children content ranking well aligns with the individual-client growth priority.

Ranking opportunities the data surfaced (build these pages to capture existing impressions):
- Panic, phobia, and social-anxiety terms: about 6,628 impressions across 76 queries, and zero clicks, all ranking around position 15 to 18. This is the largest untapped cluster on the site, and it maps directly to `/specialties/anxiety` (a growth priority). The anxiety page should explicitly cover panic attacks, phobias, and social anxiety as sections and secondary keywords.
- Premarital cluster: about 3,880 impressions across 42 queries (premarital counseling, plus orange county / irvine / california / near me variants). Premarital is being folded into the couples page, but it carries real ranking equity, so give it a strong, keyword-rich section (and see the flag below on whether it earns its own URL).
- Discernment cluster: about 6,314 impressions. Strong for LBC despite the strategy naming OCCC the discernment owner.
- "Young adults" (for example "therapy for young adults laguna beach"): about 767 impressions, zero clicks. A young-adult angle on the teens and individuals pages.
- Neighboring-geo and "near me" variants recur throughout (Newport Beach, Irvine, Laguna Hills, Dana Point). Add these as secondary keywords on the relevant pages rather than as new URLs.

Three decisions the data suggests revisiting (not overriding your earlier calls, just flagging what the numbers say):
1. Per-associate bio pages. The associate bios collectively pull roughly 200 clicks a year, about 15 percent of all site clicks, and Natasha's ranks at position ~9. The earlier "cards only, redirect all to `/about/our-team`" decision would forfeit that traffic. Worth reconsidering per-associate pages for the retained therapists (Natasha, Rozy), while still redirecting the departing ones (Christy, Austin). At minimum the 301s are in place so nothing 404s.
2. Premarital as its own URL. Given the ranking equity, a dedicated `/therapy/premarital-counseling` (or a specialty page) may capture more than a folded-in section. Test against the "depth beats breadth" principle.
3. Discernment de-cannibalization. The strategy assigns discernment to OCCC, but LBC's page has real, established equity (72 clicks, 6,300+ impressions). LBC should keep and strengthen its discernment page rather than cede the term; coordinate so the two brands do not fight for it.

Note on Irene Alvarez de Schwartz: she currently has a live, indexed bio (`/meetthestaff/irene-alvarez-de-schwartz`, about 10 clicks), which confirms she is presently public on the site even though her status is marked unconfirmed in CLIENT_FACTS.md. Confirm before deciding whether to carry a bio forward.

---

## Migration map (this is a rebuild, preserve the SEO)

The current site runs on TherapySites at www.lagunabeachcounseling.com. Below is the complete live URL inventory (captured from the site's own `/sitemap` page, July 2026) mapped to the new structure. Every old URL that changes needs a 301 in `src/_redirects`, or its ranking drops. Re-verify against the raw sitemap.xml or a Screaming Frog crawl before launch in case the HTML sitemap omits any orphan pages.

Note: the current Irvine office address is 19772 MacArthur Blvd, Suite 260, Irvine, CA 92612 (the shared/OCCC office; the primary LBC office is 333 Third Street, Suite 6). See CLIENT_FACTS.md.

### Redirect table (old URL to new URL)

| Old URL | New URL | Type |
|---|---|---|
| `/` | `/` | Keep |
| `/services-provided` | `/therapy` | 301 (plumbing, retire) |
| `/OnlineCounselingandTherapy` | `/telehealth` | 301 |
| `/christiancounseling` | `/specialties/faith-based` | 301 |
| `/depression` | `/specialties/depression` | 301 |
| `/anxiety` | `/specialties/anxiety` | 301 |
| `/premaritalcounseling` | `/therapy/couples` | 301 (premarital section) |
| `/couplestherapy` | `/therapy/couples` | 301 |
| `/discernmentcounseling` | `/discernment-counseling` | 301 |
| `/child-therapy` | `/therapy/children` | 301 |
| `/teencounseling` | `/therapy/teens` | 301 |
| `/griefcounseling` | `/specialties/grief` | 301 |
| `/family-counseling` | `/therapy/families` | 301 |
| `/parenting-support` | `/therapy/families` | 301 (parenting section) |
| `/work-and-career-issues` | `/specialties/life-transitions` | 301 |
| `/stress-management` | `/specialties/anxiety` | 301 |
| `/conflictresolution` | `/specialties/conflict-resolution` | 301 |
| `/addictionandrecovery` | `/specialties/addiction-recovery` | 301 (new page, confirm clinician coverage) |
| `/senior-counseling` | `/therapy/seniors` | 301 |
| `/beach-therapy` | `/beach-therapy` | Keep identical (highest-value URL, do not change) |
| `/mother-and-daughter-help` | `/therapy/teens` | 301 (section) |
| `/meetthestaff` | `/about/our-team` | 301 |
| `/aboutme` | `/about/kay-wenger` | 301 |
| `/meetthestaff/christy-hill` | `/about/our-team` | 301 |
| `/meetthestaff/natasha-gaffaney` | `/about/our-team` | 301 |
| `/meetthestaff/austin-whitman` | `/about/our-team` | 301 |
| `/meetthestaff/rozy-pishvaiy` | `/about/our-team` | 301 |
| `/testimonials` | `/testimonials` | Keep URL (page ON HOLD, see brief) |
| `/ratesinsurance` | `/fees` | 301 |
| `/appointment` | `/get-started` | 301 |
| `/contact` | `/contact` | Keep |
| `/forms` | `/forms` | Keep (BBS complaint notice must survive the migration) |
| `/faqs` | `/faq` | 301 (note plural to singular) |
| `/blog` | `/blog` | Keep (preserve individual post URLs where possible) |
| `/sitemap` | `/` | 301 (the XML sitemap replaces this HTML page) |

### Net-new pages (no old URL, nothing to redirect)

`/about`, `/about/our-approach`, `/therapy` (landing), `/therapy/individuals`, `/specialties` (landing), `/specialties/infidelity`, `/specialties/neurodiversity`, `/couples-intensive`, `/sand-castle-therapy`.

### Decisions the crawl surfaced (resolve before writing `_redirects`)

These were live, indexed pages the new architecture did not account for. Status as of July 2026:

1. RESOLVED: `/addictionandrecovery` gets a new home at `/specialties/addiction-recovery` (added to the sitemap and briefs above). Still CONFIRM which clinician covers substance-use work before naming anyone, since this was Austin's area and he is departing.
2. RESOLVED: `/forms` is KEPT at the same URL rather than folded into `/get-started`. It was not optional: the page carries the Board of Behavioral Sciences complaint notice that California mental health counselors must give clients under AB 630 (Chapter 229, Statutes of 2019), so it had to survive the migration. The intake step also stays cleanly separate from the free-call conversion page, which was the earlier recommendation.
3. RESOLVED: `/parenting-support`, `/work-and-career-issues`, and `/stress-management` are consolidated into their parent pages (families, life-transitions, anxiety). The 301s preserve link equity; they stop being standalone ranking targets, which is the intended "depth beats breadth" tradeoff.
4. RESOLVED: no per-associate bio pages for now. All associate bio URLs 301 to `/about/our-team`, which carries a card per therapist. Kay keeps her own page at `/about/kay-wenger`. Per-associate pages can be added later if entity SEO calls for it.

### DNS and launch safety (non-negotiable)

- Before touching DNS, export and inventory every existing record. The domain carries Kay's email (MX), and almost certainly SPF, DKIM, and DMARC. Preserve every record that is not the website. Breaking email on launch day is the one unforgivable error.
- After launch, watch GSC coverage and the 404 report for the first weeks and fix any missed redirect. Monitor rankings on the high-value URLs (beach-therapy, couples, senior-counseling, discernment) for dips that signal a broken redirect.
- Preserve specific ranking blog URLs. At least one blog post ranks and pulls clicks: `/blog/1399501-the-benefits-of-therapy-for-children` (about 24 clicks, position ~10). Map every existing blog post URL to its new URL and 301 it; do not let ranking posts 404.
- Grep `src/_data/faq.json` for `"status": "draft"` and confirm no matches. Every FAQ entry is authored as draft until reviewed and flipped to `"status": "approved"`; none should still read draft at real launch, since this file feeds the `/faq` page, every per-page FAQ section pulled by tag, and FAQPage schema. Run: `grep -c '"status": "draft"' src/_data/faq.json` (expect `0`).

---

## Per-page content briefs

The build spec for each page: a draft H1, a title and meta description, the section outline, the proof points and Kay pull-quotes that fit, internal links, the schema type (details in SCHEMA.md), and any do-not-claim flags. H1s and metas are drafts in Kay's voice, refine against voice-tone.md; every factual claim traces to CLIENT_FACTS.md. Titles aim for about 60 characters, metas for about 155.

Global rules for every page: one gold CTA per viewport (the free "Get to Know Us" call to /get-started). No em dashes. Run the voice mechanics (a question, a metaphor in abstract paragraphs, a lightness pass, the banned-word scan). Never claim an unconfirmed modality (Gottman, EFT, EMDR, IFS, Imago). Any statistic must trace to CONTENT_EVIDENCE.md and be re-confirmed before publishing. Crisis-adjacent pages (telehealth, depression, anxiety, grief) and the footer carry the shared support-resources block from CONTENT_EVIDENCE.md.

### Core

**`/` Homepage** (Keep)
- H1: "Navigating Life's Waves Together" (brand tagline as H1, or a warmer variant: "You're here because something needs to shift.")
- Title: Therapist in Laguna Beach | Laguna Beach Counseling
- Meta: A warm, experienced Laguna Beach therapy practice for individuals, couples, and families. Signature Beach Therapy on the coast. Free 15-minute call.
- Purpose: front door; introduce practice, team, and Beach Therapy; route to the fit call.
- Sections: warm hero with the approved homepage intro copy (see voice-tone.md pre-approved sample); the three-tier proof (credential stack, category-of-one services, operational excellence) rendered as warmth, not a brag; Beach Therapy teaser card; "who we help" grid linking to /therapy/*; "what people struggle with" grid linking to /specialties/*; team teaser linking to /about/our-team; out-of-network + Superbill line; the gold CTA band.
- Proof/voice: pull-quote "We're not serving a market. We're serving our neighbors." Approved homepage intro is ready to deploy.
- Internal links: /beach-therapy, /get-started, /about/kay-wenger, top /therapy and /specialties pages.
- Schema: MedicalBusiness reference + WebSite.
- Flags: keep the credential proof warm; the therapy-factory guardrail is most at risk on the homepage.

**`/about`** (Reworked)
- H1: The practice behind the coastline.
- Title: About Laguna Beach Counseling | Kay Wenger, LMFT
- Meta: Founded by Kay Wenger, LMFT, LPCC, to put excellent clinical care and genuine warmth side by side. Meet the practice and our approach.
- Purpose: trust and routing to Kay, team, and approach.
- Sections: the founding narrative (Kay left academia to build a place where care and warmth coexist); links to the three children; the "not a therapy factory" ethos stated as a promise, not a slogan.
- Proof/voice: "A place where excellent clinical care and genuine human warmth could exist side by side." "The quality of the work matters more than the scale of the business."
- Internal links: /about/kay-wenger, /about/our-team, /about/our-approach, /get-started.
- Schema: AboutPage.

**`/about/kay-wenger`** (Reworked, strongest entity page)
- H1: Kay Wenger, LMFT, LPCC
- Title: Kay Wenger, LMFT | Founder, Laguna Beach Counseling
- Meta: 30 years in therapy rooms, NRMFT co-founder, Pepperdine educator, and clinical supervisor at the Susi Q. Meet the founder of Laguna Beach Counseling.
- Purpose: establish Kay as a real, rooted entity; convert on authority + warmth.
- Sections: the "why I started the practice" long-form sample; experience arc (30 years clinical, Pepperdine training role, NRMFT, MFT Consortium); the Susi Q origin story (approved, including her father); clinical philosophy ("techniques don't heal people, relationships do"); local rootedness; CTA.
- Proof/voice: use the approved long-form samples verbatim (convert em dashes). Canonical lines: "Techniques don't heal people. Relationships do." "Curiosity will take you farther than certainty."
- Internal links: every service page's "who you'll work with" area links here; links out to /therapy/seniors and /beach-therapy.
- Schema: Person (jobTitle, credentials, worksFor, sameAs to LinkedIn/PT/NRMFT).
- Flags: credentials must read as warmth and perspective, not a wall of letters.

**`/about/our-team`** (Reworked)
- H1: The team you'll actually work with.
- Title: Our Therapists | Laguna Beach Counseling
- Meta: A Pepperdine-trained team, personally supervised by Kay Wenger. Find the right fit for what you're navigating.
- Purpose: fit-matching; route each visitor to the right associate.
- Sections: intro on the fit-match philosophy; a team-member card per active associate (name, credential, specialties, "book with"); note the supervised-by-Kay standard.
- Proof/voice: "I've built a team I genuinely trust."
- Internal links: each specialty a therapist covers; /get-started.
- Schema: Person per associate (supervisor = Kay where accurate).
- Flags: publish only CONFIRMED credentials. Austin and Christy are transitioning out in 2026, keep their treatment provisional and do not commission permanent photography for them yet. Do not publish Irene until status is confirmed.

**`/about/our-approach`** (Reworked)
- H1: How the work actually works.
- Title: Our Approach to Therapy | Laguna Beach Counseling
- Meta: Insight and movement, together. How a Pepperdine-trained, Kay-supervised team helps people feel understood and actually change.
- Purpose: explain the model in plain language.
- Sections: relationships-heal-people philosophy; understood AND challenged; solution-focused + integrative, tailored to the person; supervision model.
- Proof/voice: "Good therapy needs both, insight and movement." "Understood and challenged."
- Internal links: /about/kay-wenger, /therapy/individuals, /get-started.
- Schema: AboutPage.
- Flags: describe approaches generically; only name CONFIRMED modalities.

### Who we help (`/therapy`)

**`/therapy` (section landing)** (New)
- H1: Therapy in Laguna Beach, by who you are.
- Title: Therapy Services in Laguna Beach | Laguna Beach Counseling
- Meta: Individual, couples, family, teen, child and senior therapy in Laguna Beach and by telehealth across California. Find your starting point, then book a free call.
- Target keyword (primary): therapy services Laguna Beach. Deliberately BROAD. Every named cluster in the SEO baseline (panic and phobia, premarital, senior, grief) is assigned to a child page, so this page must not compete with its own children.
- Purpose: routing. Get a visitor to the right audience page fast, and make the WHO / WHAT split legible so they know which of the two sections they want.
- Sections: hero, a short intro naming the organizing idea, a linkable grid of the six children, pill links across to `/specialties` and the practical pages, the gold CTA band. Nothing else: depth belongs to the children.
- Internal links: all six `/therapy/*` children, `/specialties`, `/beach-therapy`, `/telehealth`, `/fees`, `/get-started`.
- Schema: `ItemList` + `BreadcrumbList`. NOT `Service`; that belongs to the children.
- Flags: the grid is generated from nav.json children filtered on `published`, never hand-typed, so it cannot link an unbuilt page. Card order weights the growth priorities (individuals, children) first.

**`/therapy/individuals`** (Reworked, GROWTH PRIORITY)
- H1: Individual therapy in Laguna Beach.
- Title: Individual Therapy Laguna Beach | Laguna Beach Counseling
- Meta: One-on-one therapy for anxiety, depression, and life transitions, in Laguna Beach or statewide by telehealth. Free 15-minute call to start.
- Purpose: convert individual-seekers; a growth priority for LBC.
- Sections: who this is for (the "knowing better but stuck" pattern); what to expect; specialties handled (anxiety, depression, transitions); Beach Therapy as an option; the team; CTA.
- Proof/voice: the "knowing better but not making it stick" sample; "You're not stuck because something's wrong with you."
- Internal links: /specialties/anxiety, /specialties/depression, /specialties/life-transitions, /beach-therapy, /get-started.
- Schema: Service.

**`/therapy/couples`** (Reworked, premarital merges in)
- H1: Couples and marriage therapy in Laguna Beach.
- Title: Couples Therapy & Marriage Counseling Laguna Beach
- Meta: Pro-commitment couples work from the co-founder of the National Registry of Marriage Friendly Therapists. Premarital, conflict, and reconnection.
- Purpose: convert couples; house premarital as a section.
- Sections: the pro-commitment stance; who's a good fit / not a fit; presenting issues (disconnection, repeated arguments, trust); premarital section; discernment and intensives as pathways; NRMFT credibility.
- Proof/voice: "I'm pro-commitment, but I'm not attached to a particular outcome." "Therapy works best when both people are willing to look at the relationship as a system, not as a courtroom."
- Internal links: /discernment-counseling, /couples-intensive, /specialties/infidelity, /specialties/conflict-resolution, /get-started.
- Schema: Service.
- Flags: no pathologizing one partner. Do not claim Gottman/EFT/Imago as practice methods. The premarital section carries real ranking equity (about 3,880 impressions in GSC, including orange county / irvine / california / near me variants), so make it keyword-rich; see the SEO baseline flag on whether premarital earns its own URL.

**`/therapy/families`** (Reworked)
- H1: Family therapy in Laguna Beach.
- Title: Family Therapy & Counseling Laguna Beach
- Meta: Family counseling and parenting support for the hard seasons, in Laguna Beach or by telehealth across California.
- Sections: who it helps; common family dynamics; parenting support; how family work differs; CTA.
- Internal links: /therapy/teens, /therapy/children, /get-started.
- Schema: Service.

**`/therapy/teens`** (Reworked, mother-daughter as a section)
- H1: Teen and adolescent therapy in Laguna Beach.
- Title: Teen Therapist Laguna Beach | Adolescent Counseling
- Meta: Support for teens navigating anxiety, identity, and the pressures of coastal-community life. A low-pressure way in.
- Sections: who it helps; parenting an affluent-community teen; the mother-and-daughter section (folded in, not its own URL); the Men's Support Group as a low-threshold entry for young men; CTA.
- Internal links: /therapy/families, /specialties/anxiety, /get-started.
- Schema: Service.
- Flags: age-appropriate framing; the associate leading teen work is transitioning out in 2026, keep practitioner references soft.

**`/therapy/children`** (Reworked, GROWTH PRIORITY)
- H1: Child therapy in Laguna Beach.
- Title: Child Therapist Laguna Beach | Counseling for Kids
- Meta: Warm, developmentally-attuned counseling for children, in Laguna Beach or by telehealth. Find the right fit with a free call.
- Purpose: growth priority; Rozy's specialty.
- Sections: who it helps; how child work looks; supporting parents alongside the child; CTA.
- Internal links: /therapy/families, /get-started.
- Schema: Service.

**`/therapy/seniors`** (Reworked, Susi Q authority anchors this)
- H1: Senior counseling in Laguna Beach.
- Title: Senior Counseling Laguna Beach | Therapy for Older Adults
- Meta: Therapy for grief, retirement transitions, and later-life change, from the founder of the Susi Q senior mental-health program.
- Purpose: convert seniors and their adult children; lean on Kay's decade-plus Susi Q role.
- Sections: who it helps (grief, retirement identity, caregiving, isolation); the Susi Q story and programs as trust proof; in-person option for the tech-anxious; CTA.
- Proof/voice: the Susi Q origin story; local-rootedness sample.
- Internal links: /specialties/grief, /about/kay-wenger, /get-started.
- Schema: Service.

### What people struggle with (`/specialties`)

**`/specialties` (section landing)** (New)
- H1: Counseling specialties in Laguna Beach.
- Title: Counseling Specialties in Laguna Beach | Laguna Beach Counseling
- Meta: Anxiety, depression, grief, life transitions, infidelity, conflict, neurodiversity, faith-based and addiction counseling in Laguna Beach. Start with a free call.
- Target keyword (primary): counseling specialties Laguna Beach. Deliberately BROAD, for the same de-cannibalization reason as `/therapy`. The panic, phobia and social-anxiety cluster is the largest untapped opportunity on the site and belongs to `/specialties/anxiety`, not here.
- Purpose: routing. Name the struggle plainly, then hand off to the child page that carries it.
- Sections: hero, a short intro, a linkable grid of the nine children, pill links across to `/therapy` and the practical pages, the gold CTA band.
- Internal links: all nine `/specialties/*` children, `/therapy`, `/beach-therapy`, `/telehealth`, `/fees`, `/get-started`.
- Schema: `ItemList` + `BreadcrumbList`. NOT `Service`.
- Flags: links the three crisis-adjacent children (anxiety, depression, grief) but is not itself on the crisis-adjacent list, so it carries no support block; each of those children carries its own, and the footer block is sitewide. Card order weights anxiety and depression first.

**`/specialties/anxiety`** (New, GROWTH PRIORITY, first in queue)
- H1: Anxiety therapy in Laguna Beach.
- Title: Anxiety Therapist Laguna Beach | Anxiety Counseling
- Meta: Anxiety isn't a character flaw, it's a nervous system doing its job. Practical, warm help in Laguna Beach or by telehealth.
- Purpose: top growth-priority specialty; first specialty page to build.
- Sections: the anxiety-loop reframe (see the approved social sample as a starting register); what's happening underneath; what the work looks like; Beach Therapy as an option for anxiety; CTA. Include dedicated sections for panic attacks, phobias, and social anxiety.
- Secondary keywords (from GSC, about 6,600 untapped impressions): panic disorder therapist, phobia treatment, social phobia therapy, panic attacks, plus "near me" and neighboring-city variants. The old site ranks around position 15 to 18 for these with zero clicks; this page should capture them.
- Proof/voice: "That's not a character flaw. That's just how the nervous system works." "That's usually where we start."
- Internal links: /therapy/individuals, /beach-therapy, /get-started.
- Schema: Service. Consider an FAQ block (with matching FAQPage schema).

**`/specialties/depression`** (New, GROWTH PRIORITY)
- H1: Depression therapy in Laguna Beach.
- Title: Depression Therapist Laguna Beach | Depression Counseling
- Meta: When the effort you're already putting in isn't shifting things. Warm, practical depression counseling in Laguna Beach or by telehealth.
- Sections: acknowledge-reframe-hope arc; what depression can look like day to day; the work; CTA.
- Proof/voice: "If it were easy, you'd have figured it out already."
- Internal links: /therapy/individuals, /get-started.
- Schema: Service.
- Flags: no outcome guarantees; sensitive framing. Carries the support-resources block. Prevalence figures, if used, come from CONTENT_EVIDENCE.md and must be confirmed current.

**`/specialties/grief`** (New)
- H1: Grief and loss counseling in Laguna Beach.
- Title: Grief Counseling Laguna Beach | Loss & Bereavement
- Meta: Support for loss, in its many forms. Grief counseling from a practice with deep roots in senior and end-of-life community work.
- Sections: the many shapes of grief; there's no timeline; the work; Susi Q grief-group credibility; CTA.
- Internal links: /therapy/seniors, /about/kay-wenger, /get-started.
- Schema: Service.

**`/specialties/life-transitions`** (New)
- H1: Life transition counseling.
- Title: Life Transition Counseling | Laguna Beach Counseling
- Meta: Career shifts, empty nests, retirement, identity change. Steady support for the seasons that rearrange everything.
- Sections: what counts as a transition; why they destabilize; the work; CTA.
- Internal links: /therapy/individuals, /therapy/seniors, /get-started.
- Schema: Service.

**`/specialties/infidelity`** (New, top presenting issue)
- H1: Infidelity and affair recovery.
- Title: Infidelity Counseling Laguna Beach | Affair Recovery
- Meta: Rebuilding trust after betrayal is possible, and it's hard. Structured, non-blaming affair-recovery work for couples.
- Sections: what recovery actually involves; not a courtroom; the path (individual + couples); intensives as an accelerant; CTA.
- Proof/voice: "not as a courtroom" framing.
- Internal links: /therapy/couples, /couples-intensive, /get-started.
- Schema: Service.
- Flags: never assign blame to one partner.

**`/specialties/conflict-resolution`** (New)
- H1: Conflict and communication help for couples.
- Title: Conflict Resolution Counseling | Couples Communication
- Meta: When you keep having the same fight. Help changing the pattern underneath the argument, not just the argument.
- Sections: the repeated-argument pattern; what's underneath; the work; CTA.
- Internal links: /therapy/couples, /get-started.
- Schema: Service.

**`/specialties/neurodiversity`** (New)
- H1: Neurodivergent-affirming therapy in Laguna Beach.
- Title: Neurodivergent Therapy Laguna Beach | ADHD & Autism-Affirming
- Meta: ADHD and autism-affirming counseling that works with how your mind is wired, not against it.
- Sections: affirming stance; who it helps; the work; CTA.
- Internal links: /therapy/individuals, /get-started.
- Schema: Service.
- Flags: confirm which associate holds this specialty before naming anyone.

**`/specialties/faith-based`** (New, replaces Christian Counseling)
- H1: Faith-based counseling in Laguna Beach.
- Title: Faith-Based Counseling Laguna Beach | Christian Counseling
- Meta: Counseling that honors your faith as part of the work. Warm, respectful, integrated care for individuals and couples.
- Sections: what faith-integrated care means here; who it's for; welcoming framing (broadened from Christian counseling); CTA.
- Internal links: /therapy/couples, /therapy/individuals, /get-started.
- Schema: Service.
- Flags: welcoming and non-exclusive tone; faith-based couples are a stated priority.

**`/specialties/addiction-recovery`** (New, carries over the old page)
- H1: Addiction and recovery counseling in Laguna Beach.
- Title: Addiction Counseling Laguna Beach | Recovery Support
- Meta: Compassionate, non-judgmental support for addiction and recovery, for the person struggling and for the people who love them.
- Sections: who it helps (the person in it, and family/co-dependency); a non-shaming stance; how the work supports recovery alongside other care; when higher levels of care are the right call; CTA.
- Internal links: /therapy/individuals, /therapy/families, /get-started.
- Schema: Service.
- Flags: CONFIRM which clinician covers substance-use work before naming anyone (this was Austin's area, and he is departing in 2026). This page is a carryover to preserve the ranking of the old `/addictionandrecovery` URL; do not overstate scope. Make clear the practice supports recovery, it is not a detox or treatment facility.

### Signature services

**`/beach-therapy`** (Keep, category-of-one, highest link priority)
- H1: Beach Therapy.
- Title: Beach Therapy Laguna Beach | Walk and Talk Therapy
- Meta: Private walk-and-talk therapy on the Laguna coastline. Sometimes the environment matters. A category of one, steps from the Pacific.
- Purpose: the defensible differentiator; convert and thread through the whole site.
- Sections: the origin story (an observation, not a marketing idea); why walking side by side changes the conversation; who it's for; what to expect (what to wear, privacy, weather); how to start; CTA.
- Proof/voice: use the approved Beach Therapy origin sample verbatim (convert em dashes). "The beach isn't replacing therapy. It's creating conditions that let therapy happen differently." "Sometimes the environment matters."
- Evidence: the blue-space research in CONTENT_EVIDENCE.md is the strongest on the site (the 120-minutes finding, coastal outperforming other settings). Use it to give the page credibility, framed as research context, not a promise.
- Internal links: linked from homepage, about, couples, anxiety, individuals; links to /get-started.
- Schema: Service.
- Flags: confirm any liability/insurance note before the SEO push (Open Question 10).

**`/sand-castle-therapy`** (New, category-of-one, supports the children growth priority)
- H1: Sand Castle Therapy™.
- Title: Sand Castle Therapy Laguna Beach | Play Therapy for Kids
- Meta: A nature-based play therapy model for children, built on the sand in Laguna Beach. Building resilience, one sand castle at a time.
- Purpose: give the trademarked children's model its own home; convert parents; feed the `/therapy/children` growth priority. The children's variant of the Beach Therapy philosophy, not a duplicate of it.
- Sections: what the model is; Kay on developing it; the Six Pillars (Build, Create, Explore, Repair, Grow, Take Home) as a numbered sequence; what makes it different from an office; who it helps; who delivers it and when; CTA.
- Proof/voice: the tagline "Building resilience, one sand castle at a time." Kay's voice on why a castle is the right size for a child's hardest feelings.
- Internal links: /therapy/children, /beach-therapy, /get-started.
- Schema: Service + BreadcrumbList + FAQPage.
- Flags: the trademark is UNREGISTERED, so ™ only, never ®, and only on first prominent use per section (not in the title tag or meta). Trauma is deliberately absent from who-it-helps (unconfirmed EMDR / TF-CBT training, see CLIENT_FACTS.md). The internal roadmap material (book, workbook, manual, certification, CE, research study, TEDx) never appears on this page. Rozy is named by first name with her AMFT credential, no license number.

**`/couples-intensive`** (New)
- H1: Couples Intensives.
- Title: Couples Intensive Orange County | One-Day Marriage Intensive
- Meta: A focused 4 to 8 hour day with Kay Wenger for couples who want to move further, faster than weekly sessions allow.
- Sections: what an intensive is; who it's for (including affair recovery); the day's shape; how to inquire; CTA.
- Internal links: /therapy/couples, /specialties/infidelity, /discernment-counseling.
- Schema: Service with price range once confirmed.
- Flags: publish a price range if approved (Open item).

**`/discernment-counseling`** (Reworked)
- H1: Discernment counseling.
- Title: Discernment Counseling Laguna Beach | Should We Divorce?
- Meta: For couples on the brink, one leaning out, one leaning in. Short-term clarity before big decisions. Pro-commitment, not pro-pressure.
- Sections: what discernment counseling is (and isn't); the three paths; who it fits; who it doesn't; CTA.
- Proof/voice: pro-commitment stance sample.
- Internal links: /therapy/couples, /couples-intensive, /get-started.
- Schema: Service.
- Flags: honor that separation is sometimes the right outcome; no pressure framing.

**`/telehealth`** (Reworked)
- H1: Online therapy across California.
- Title: Online Therapy California | Telehealth Counseling
- Meta: Secure, HIPAA-compliant therapy for any California resident. The same team and care, from wherever you are in the state.
- Sections: who it's for; how it works; the CA-only licensing note; same team, same care; CTA.
- Internal links: /about/our-team, /get-started.
- Schema: Service (online delivery; areaServed = California).
- Flags: frame around CA permanent payment-parity, not a growth-trajectory stat (see CONTENT_EVIDENCE.md). State licensing limits service to CA residents. Carries the support-resources block.

### Practical and conversion

**`/fees`** (Reworked)
- H1: Fees and insurance.
- Title: Therapy Cost Laguna Beach | Out-of-Network & Superbills
- Meta: We're out-of-network by design: longer sessions, real confidentiality, no diagnostic label required. Superbills provided for PPO reimbursement.
- Purpose: handle the money objection with the out-of-network reasoning.
- Sections: the canonical out-of-network positioning line; the four reasons (session length, confidentiality, clinical autonomy, time on care not paperwork); the rate cards (associates and Kay); Superbill explanation; sliding-scale-on-request note; cancellation policy; CTA.
- Internal links: /faq, /get-started.
- Schema: Service with PriceSpecification.
- Flags: never imply insurance is billed directly. Redirect any old /rates here.

**`/forms`** (Keep, same URL)
- H1: Forms for your first session.
- Title: New Client Forms | Laguna Beach Counseling
- Meta: Intake, consent, and authorization forms for new clients at Laguna Beach Counseling, plus the Board of Behavioral Sciences complaint notice required of California mental health counselors.
- Target keyword: none. A utility page, not an SEO surface.
- Purpose: give new clients their paperwork before the first session, and carry the legally required BBS complaint notice.
- Sections: intro; the five client forms as links; a line explaining the Authorization to Disclose form is for coordinating care with another provider; an alternative-format offer for anyone who cannot use PDFs; the BBS notice reproduced verbatim with its printable PDF; the CTA band.
- Internal links: /get-started (the CTA).
- Schema: BreadcrumbList only.
- Flags: the BBS notice is a LEGAL DISCLOSURE reproduced verbatim from the practice's own PDF, statutory parentheses included. Do not paraphrase or repunctuate it. PDFs live in src/documents and are served from our own origin via Eleventy passthrough, never the marketing CDN. The old "download Adobe Acrobat Reader" link is deliberately not carried over. OPEN FOR KAY: lbc-consent-form.pdf states a fee of $160 individual per 50 minutes and $200 couple/family per 80 minutes, which matches neither the published rate card on /fees nor CLIENT_FACTS.md, and no 80-minute tier exists.

**`/accessibility`** (New)
- H1: Accessibility at Laguna Beach Counseling.
- Title: Accessibility Statement | Laguna Beach Counseling
- Meta: Our accessibility target is WCAG 2.2 Level AA. What we have built, what is still outstanding, and how to tell us if something on this site gets in your way.
- Target keyword: none. This page is not an SEO surface and should not compete for anything.
- Purpose: a good-faith accessibility statement. Say what the site actually does, admit what it does not, and give a real person to contact.
- Sections: the WCAG 2.2 AA target stated as a target; what has been built; known limitations, honest and verified against the codebase rather than assumed; how to report a barrier, with the phone and email from site.json; a dated review note.
- Internal links: /get-started (the CTA). Outbound to the W3C WCAG 2.2 spec.
- Schema: BreadcrumbList only.
- Flags: NEVER claim legal compliance, certification, an audit, or that the site is fully accessible. No accessibility overlay, and the page states why (DESIGN_SYSTEM forbids them). The review date is hardcoded, not generated, so the page cannot claim a review it did not have. Linked from the footer legal strip via site.json footerLinks, not nav.json.

**`/faq`** (New)
- H1: Questions people ask before reaching out.
- Title: FAQ | What to Expect | Laguna Beach Counseling
- Meta: What a first session is like, whether you take insurance, how Beach Therapy works, and what happens if therapy didn't help before.
- Purpose: answer objections; FAQPage schema; funnel to the fit call.
- Sections (each a Q&A): What's the first session like? Do you take insurance? What is Beach Therapy? What if I've tried therapy before and it didn't help? How do I know who to see? Do you offer evenings/weekends? Telehealth? How fast can I be seen?
- Proof/voice: "When someone tells me therapy didn't help, I don't assume they were resistant. Usually it just wasn't the right fit."
- Internal links: /fees, /beach-therapy, /get-started.
- Schema: FAQPage, must match visible Q&A exactly.

**`/testimonials`** (Sign-off, ON HOLD)
- Do not build with identifying client content. Hold until the HIPAA-compliant written-authorization workflow is approved (Open Question 6). Placeholder page only, or omit from nav until cleared.

**`/blog`** (New)
- H1: Notes from the practice.
- Title: Blog | Laguna Beach Counseling
- Meta: Warm, practical writing on anxiety, relationships, coastal living, and the seasons of later life, from Kay and the team.
- Sections: post index with categories drawn from the content themes (Living in Laguna, Couples & Marriage, Beach Therapy explainers, Senior Wellness, Teen & Family).
- Internal links: each post links down into the relevant service page.
- Schema: Blog index; Article/BlogPosting per post.

**`/get-started`** (Reworked, THE conversion page)
- H1: Let's start with a conversation.
- Title: Book a Free Consultation | Laguna Beach Counseling
- Meta: Book a free 15 to 20 minute "Get to Know Us" call. No pressure, just a chance to see if we're the right fit for what you're navigating.
- Purpose: the primary conversion; embeds Calendly.
- Sections: warm framing of the free call; what to expect on it; the Calendly embed (calendly.com/lbc-occc/30min); the out-of-network line so fees aren't a surprise; the 24-hour access note; phone alternative.
- Proof/voice: "There's a way through this." "Ready when you are."
- Internal links: /fees, /faq.
- Schema: Service or ContactPoint. No PHI.

**`/contact`** (Keep, canonical NAP page)
- H1: Contact us.
- Title: Contact | Laguna Beach Counseling | 333 Third Street
- Meta: 333 Third Street, Suite 6, Laguna Beach, CA. Call (949) 357-3587 or book a free consultation online.
- Sections: NAP block; map embed; contact form (Turnstile spam protection, success state); hours (once resolved); parking note (once confirmed); CTA.
- Internal links: /get-started.
- Schema: full MedicalBusiness record + PostalAddress + geo + hasMap.
- Flags: hours are FLAGGED (site vs. Yelp), resolve before publishing. Office exterior photo still a placeholder.

**`/privacy-policy`** and **`/thank-you`** (Keep, utility)
- Privacy policy: required, doubly important for a therapy practice. Legal text supplied/reviewed by the client's counsel; we build the page.
- Thank-you: form and booking confirmation state.

---

## Open items that affect architecture

- `/testimonials` stays on hold until the HIPAA-compliant testimonial-authorization workflow is approved (DNA Open Question 6).
- Geo-target priority beyond Laguna Beach (Newport, Dana Point, Aliso Viejo) is not finalized; it shapes local references but not the URL structure (DNA Open Question 8).
- Business hours discrepancy (site vs. Yelp) must be resolved before the LocalBusiness schema and `/contact` ship (DNA Open Question 1). See CLIENT_FACTS.md.
