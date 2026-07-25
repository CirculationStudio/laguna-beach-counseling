# Claude Instructions

**Project:** Laguna Beach Counseling
**Last updated:** 2026-07-14
**For:** Claude Code and Chad (autonomous agent)

## North Star

Laguna Beach Counseling is a premium, out-of-network therapy practice in Laguna Beach, built on Kay Wenger's 30-plus years of clinical experience and a category-of-one signature offering, Beach Therapy. We help people who are struggling feel genuinely understood, then take one low-pressure step: a free call. Every page should make the right person think "these are the people who get it," and move them toward booking, never feeling like an appointment processed by a factory. Warm, direct, real. The growth priority is individuals.

## Purpose

This file contains the rules, standards, and brand constraints that all AI agents must follow when working on this project. This ensures consistency, maintains brand integrity, and prevents generic/machine-generated aesthetics. It is the brand-and-content half wired into the technical half; read it before generating or editing any page so generated pages stay on-brand instead of drifting to the generic center.

The project in one line: Laguna Beach Counseling (LBC) is a premium, out-of-network psychotherapy group practice in Laguna Beach, CA, founded and led by Kay Wenger, LMFT, LPCC. Standard tier build on the Circulation Studio stack (Eleventy v3, Tailwind v4, GitHub, Cloudflare). Attributes: blog, Answer Engine (llms.txt), external Calendly booking (no PHI on-site), English only, performance-first.

## Reference documents (priority order when they conflict)

1. `CLIENT_FACTS.md`: the source of truth for every fact about the business. If a fact is not in it and not confirmed, do not publish it. Never invent a name, number, credential, statistic, or hour.
2. `CONTENT_EVIDENCE.md`: the citable-evidence layer for page copy and blog (research stats with sources, usage class, verification status). Every statistic must trace here and be re-confirmed against its primary source before publishing. Never publish anything in its "Do not publish" list.
3. `voice-tone.md`: how everything is written.
4. `DESIGN_SYSTEM.md`: how everything looks, including the Forbidden Patterns.
5. `SITE_ARCHITECTURE.md` and `SCHEMA.md`: what pages exist, their URLs and keywords, their per-page briefs, and their structured data.

`AEO.md` covers the answer-engine build (llms.txt spec and AEO content principles). `ARCHITECTURE.md` covers the technical scaffold (Eleventy v3 + Tailwind v4 `@theme` setup, build/start commands, file structure, Cloudflare config).

## Two hard client rules that override everything

1. **HIPAA.** Never publish content that could identify a client. No identifying testimonials until the authorization workflow is approved (the `/testimonials` page is on hold). Never confirm or deny that a named person is a client. No diagnostic or treatment specifics about any individual.
2. **Never a "therapy factory."** No surface may read as a high-volume operation processing appointments. Every generated page must pass this test: warm, experienced, genuinely invested, meaningful over transactional. If a draft could read as impersonal, high-volume, or credential-flexing, revise it.

## House Rules (apply to every task)

- **No em dashes anywhere.** Site, content, docs, code comments. Use commas, periods, parentheses. Hard rule.
- **Commits are surgical.** Never `git add -A`. Stage the specific files a change touches.
- **One thing at a time:** plan it, do it, check it, then move on.
- **Verify web builds locally** (`npm run build` and `npm start`), spot-check, and use the Cloudflare preview URL every branch gets.
- **Back-end changes deploy before front-end** on anything touching both.

## Page Build Workflow

Imperative. This runs on every page build.

**BEFORE building any page, READ:**

- `voice-tone.md` (brand voice and the mandatory writing mechanics)
- this page's brief in `SITE_ARCHITECTURE.md` (its target keyword, section plan, and its specified INTERNAL LINKS)
- Read the brief's exact title, meta description, H1, target keyword, internal links, and schema-type fields as literal requirements to satisfy, not just inspiration for the page's general direction.
- `CONTENT_EVIDENCE.md` (citable verified facts, and the do-not-publish list)
- `CLIENT_FACTS.md` (business facts, confirmed vs unconfirmed)
- `DESIGN_SYSTEM.md` Forbidden Patterns
- `faq.json` (the approved answer engine) for this page's relevant FAQs. NOTE: `faq.json` is pending; until it exists, FAQs must be drawn from an approved source or clearly flagged as draft-pending-Kay-approval, never invented as fact.

**WHILE building:**

- Before composing a page from raw components, check whether a matching page template exists in `src/_includes/layouts/` (reframe-led, story-led, practical-led; mapping table in COMPONENT_COVERAGE.md) and use it; compose directly from the library only if no template fits.
- Look up the page's assigned template in COMPONENT_COVERAGE.md's mapping table. If that row is flagged "TODO: confirm against brief," read the page's SITE_ARCHITECTURE.md brief and confirm the best-fit template before drafting, rather than defaulting to the table's guess.
- Compose from existing components; never hand-build markup a component covers. New blocks go in the component library, not inline.
- Add the internal links specified in this page's `SITE_ARCHITECTURE.md` brief.
- Voice matches `voice-tone.md` and runs its mechanics (a question, a metaphor in abstract paragraphs, lightness, banned-word scan including "simply").
- Any statistic traces to `CONTENT_EVIDENCE.md`; nothing from the do-not-publish list.
- Facts from data (`site.json` / `nav.json`), never hardcoded.
- Schema: page-specific only (Service, BreadcrumbList, FAQPage). Reference the site-wide business entity by `@id`; do not redefine MedicalBusiness per page.

**AFTER building, run this itemized self-check (all must pass before the page is done):**

Brief fidelity (the SITE_ARCHITECTURE.md brief's fields are a spec to satisfy exactly, not inspiration; this is what let /about/our-team ship with paraphrased title/meta/H1 and missing links and schema):

- Title tag matches the brief's specified title for this page exactly, not a close paraphrase. If it deviates, state why in a code comment.
- Meta description matches the brief's specified copy exactly, or a code comment states why it deviates.
- H1 matches the brief's specified H1 exactly. Voice and warmth can still shape supporting copy, but the H1 itself hits the brief's wording, since that is the primary on-page and SEO signal.
- Every internal link the brief specifies is present and points to a real, built page. If the brief calls for a link to a page that does not exist yet, that link is either omitted with a code comment explaining why (page not built yet) or included as plain text with no href, never silently dropped without a trace.
- Every schema type the brief specifies, or that the page's content type implies (for example Person schema for any page listing named individuals with credentials), is present. A missing specified schema type is a build failure, not an optional nice-to-have. Schema is generated from the same data as the visible content, references the site-wide business entity by `@id`, and does not redefine MedicalBusiness per page.
- The page's stated conversion goal and intent (from SITE_ARCHITECTURE.md's table) are served structurally, not just rhetorically. If the goal is "route to the right X," there are actual links or mechanisms doing that routing, not just prose implying it will happen after a call.

Everything else:

- Serves the North Star
- FAQs come from the approved source (or are flagged draft), not invented
- Any stats are cited and cleared
- Exactly one H1, ordered headings
- Alt text on every meaningful image
- One gold CTA per viewport
- No em dashes anywhere
- WCAG 2.2 AA (visible focus, keyboard operable, reduced-motion respected)

## Hard Rules (Never Break These)

### Universal constraints

- **NO em dashes anywhere** (use commas, periods, parentheses)
- **NO banned filler phrases** (full list and rationale in `voice-tone.md`):
  - "transform," "unlock," "breakthrough," "manifest," "revolutionary," "game-changer," "guaranteed"
  - "holistic," "leverage," "optimize," "cutting-edge," "ever-evolving," "deep dive"
  - "it's important to note," "in today's fast-paced world," and the easily-missed "simply"
- **NO unauthorized changes** to client-supplied copy without approval
- **NO AI-generated imagery** posing as real photography where authenticity is claimed
- **NO accessibility overlays** (they raise legal risk, not lower it)

### Code and development standards

- Always reference ARCHITECTURE.md for technical decisions
- Follow the file structure defined in the repo root
- Use semantic HTML for agent-readability
- Build for editability: separate content from layout using clean `_data` files
- Never hardcode markup that a component covers
- Accessibility is built in from the start (WCAG 2.2 AA minimum)
- Commits are surgical: never `git add -A`
- URLs: lowercase, hyphenated, no accents in slugs

### Brand constraints (from DESIGN_SYSTEM.md)

Mirrors the Forbidden Patterns section of DESIGN_SYSTEM.md.

#### Typography

- **Approved fonts:** DM Serif Display (display / headings, the emotional voice), Manrope (body, UI, form labels, button text, navigation)
- **BANNED:** Inter as a UI font. Noto Serif or Manjari (superseded by DM Serif Display). Any generic default.

#### Colors

- **Approved palette:** navy `#003657` (primary), teal `#28a0c9` (links / interactive), sea-foam `#98c5d8` (calming surfaces), gold `#dfa108` (CTAs and tagline lockup only, rationed), plus sand neutrals (`#f0f0f0`, `#faf6ec`, `#ffffff`) and ink text tokens
- **BANNED:** generic purple-to-blue or indigo AI gradient, default indigo/violet primary
- **The gold rule:** one gold CTA per visible viewport, maximum. Gold stays under 2 percent of any surface. If two golds compete in one screen, the design is wrong.

#### Iconography

- **Approved icon system:** inline SVG only, drawn with intent
- **BANNED:** unmodified stock icons, default icons dropped in without intent, external icon CDNs or runtime icon libraries, emojis in any deliverable

#### Voice

Warm, direct, real. Use "I" for Kay's personal voice, "we" for the practice. Register targets: Esther Perel, Susan Johnson, John Gottman. See `voice-tone.md` for the full brand voice and the mandatory content mechanics.

## Forbidden Patterns (the anti-slop standard, from DESIGN_SYSTEM.md)

If a generated page shows any of these, it drifted and must be fixed:

- Em dashes.
- Inter as a UI font (use Manrope). Noto Serif or Manjari (use DM Serif Display). These are superseded.
- More than three corner radii (the system is pills, cards, inputs, nothing else).
- Generic purple-to-blue or indigo AI gradient. Any 2010s-style gradient on the CTA (use the layered gold treatment instead).
- Default indigo/violet primary. Primary is navy `#003657`; palette is coastal navy, teal `#28a0c9`, sea-foam `#98c5d8`, gold `#dfa108`.
- More than one gold element competing in a single viewport. One gold CTA per viewport, maximum.
- Stock default icons dropped in without intent. External icon CDNs loaded at runtime.
- Emojis in professional deliverables.
- Stock "therapy couch" or dim clinical imagery. AI-generated imagery posing as real photography.
- Serif used for functional UI, or sans used for the emotional headline moment.
- Banned filler copy (full list in voice-tone.md): "transform," "unlock," "breakthrough," "manifest," "revolutionary," "game-changer," "guaranteed," "holistic," "leverage," "optimize," "cutting-edge," "ever-evolving," "deep dive," "it's important to note," "in today's fast-paced world," and the easily-missed "simply."

## Content mechanics (run before shipping any copy)

From voice-tone.md, these are pass/fail:

1. At least one question per piece (two to three for anything longer than a caption).
2. Abstract Paragraph Check: any paragraph explaining an abstract idea has a question or a metaphor.
3. Lightness: read it aloud; it should not read like a somber pamphlet.
4. Banned-word scan (search for "simply" every time).
5. Every longer piece has at least one metaphor.

Voice in one line: warm, direct, real.

## Modality claims (strict)

Confirmed for this team and safe to use: Solution-Focused, CBT, DBT, ACT, Person-Centered / Humanistic, Existential, Discernment Counseling, Family Mediation, Critical Incident Stress Debriefing, walk-and-talk / Beach Therapy, faith-integrated counseling, group work.

NOT confirmed, do not attribute to the practice or any named associate: Gottman Method, EFT, EMDR, IFS, Imago. These may appear only as general editorial background, never as a practice or practitioner claim. See CLIENT_FACTS.md.

## Statistics (do not repeat unsubstantiated figures)

Every statistic traces to `CONTENT_EVIDENCE.md` and must be re-confirmed against its primary source and refreshed to the current year before publishing. Known traps (full list in that file and in CLIENT_FACTS.md): the "72%" / "60%" OC divorce rates (unsubstantiated; use Census ACS "percent currently divorced"), CA not reporting to CDC NVSS, and the FAIR Health claim-line vs. patient-telehealth metric conflation. Never present research averages as promises about a client's outcome.

## Crisis and support resources (safety)

Crisis-adjacent pages (telehealth, depression, anxiety, grief) and the site footer must carry the support-resources block from `CONTENT_EVIDENCE.md` (911, 988, Crisis Text Line, SAMHSA), built as one reusable component. Make clear the practice is not an emergency service. Confirm the resources are current at build time.

## Component Usage

[Document reusable components and their correct usage patterns after Phase 5]

### Heroes

[Guidelines]

### Cards

[Guidelines]

### Forms

[Guidelines]

### CTAs

[Guidelines]

## Content Guidelines

### If content provenance = client-supplied

- DO NOT rewrite client copy without explicit approval
- Editorial pass for obvious errors only, with changes confirmed back to client

### If content provenance = agency-AI

- Follow voice-tone.md for all copy generation
- Never invent claims, credentials, or facts that cannot be verified
- All generated copy must be reviewed before deployment

### All provenance types

- Legal, pricing, and claims content NEVER auto-generated or auto-edited
- Schema/structured data must match visible content exactly
- Alt text on every meaningful image, empty alt on decorative images

## SEO and Structured Data

- Title tag and meta description must be unique per page, keyword-aligned from SITE_ARCHITECTURE.md
- Implement JSON-LD schema exactly as specified in SCHEMA.md
- Validate all schema blocks at validator.schema.org
- FAQPage schema must match visible FAQ exactly (business-critical for AI answers)
- Schema must not regress (it's how clients get found in AI answers)
- Never emit `aggregateRating` or `Review` schema with placeholder or fabricated values

## Performance Standards

### Core Web Vitals targets (75th percentile)

- **LCP:** < 2.5s
- **INP:** < 200ms
- **CLS:** < 0.1

### Asset optimization

- Hero images: `loading="eager"` + `fetchpriority="high"` + preload
- Below-fold images: `loading="lazy"`
- All images: explicit width/height attributes (prevents layout shift)
- Target < 300KB per image
- Serve WebP/AVIF with fallback

### JavaScript discipline

- Keep scripts minimal
- Defer or async everything non-critical
- No long main-thread tasks
- No `transition: all` (causes INP issues)

## Build Workflow

For building a content page, follow the Page Build Workflow above; that BEFORE / WHILE / AFTER loop is authoritative for pages. This section is the general build loop for everything else.

1. Read all relevant documentation before making changes:
   - ARCHITECTURE.md for technical structure
   - DESIGN_SYSTEM.md for brand constraints
   - SITE_ARCHITECTURE.md for content strategy
   - SCHEMA.md for structured data requirements
   - voice-tone.md for copy guidelines (if applicable)

2. Make changes following all constraints above

3. Verify accessibility, performance, and brand compliance

4. Test build: `npm run build`

5. Check preview deployment before considering complete

## What Claude Code and Chad Should NOT Do

- Never generate or modify legal disclaimers, privacy policies, or terms without explicit instruction
- Never modify pricing information without verification
- Never claim credentials, certifications, or expertise not verified by client
- Never use stock photography where real/authentic imagery is required
- Never skip accessibility requirements to move faster
- Never compromise performance targets for visual effects

## What Claude Code and Chad SHOULD Do

- Proactively flag potential accessibility issues
- Suggest performance improvements when noticed
- Point out inconsistencies with DESIGN_SYSTEM.md constraints
- Recommend structured data opportunities aligned with SCHEMA.md
- Ensure all work is agent-readable (semantic HTML, clean structure)
- Build with the assumption that both humans and AI agents will consume the content

## When Unsure

Stop and flag it rather than guessing. A `TO BE CONFIRMED` placeholder with a note is correct; an invented fact is a failure. The open questions that block specific content are listed at the bottom of CLIENT_FACTS.md.

## Documentation References

- `CLIENT_FACTS.md`: business facts, confirmed vs unconfirmed.
- `CONTENT_EVIDENCE.md`: citable verified stats, and the do-not-publish list.
- `voice-tone.md`: how it reads (brand voice and writing mechanics).
- `DESIGN_SYSTEM.md`: how it looks (tokens, components, Forbidden Patterns).
- `SITE_ARCHITECTURE.md`: the pages, their target keywords, and their internal links.
- `SCHEMA.md`: structured data per page type.
- `AEO.md`: the answer-engine build (llms.txt spec and AEO principles).
- `COMPONENT_COVERAGE.md`: page recipes and the component coverage map.
- `reference/`: the approved finished design source (brand guidelines, Beach Therapy page).

## References

- See `.claude/README.md` for how different agents should use this file
- See `.claude/AUDIT_AGENT.md` for the quarterly audit checklist
- See all root-level .md files for detailed specifications

---

**Remember:** This site is built to be distinctive, accessible, performant, and agent-readable. Every choice should serve those goals.
