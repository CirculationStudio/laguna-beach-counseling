# AEO.md

The answer-engine spec: how the site is made legible to AI answer engines (ChatGPT, Perplexity, Google AI surfaces) and agents. This is the mechanical half of AEO; the strategy half lives in SCHEMA.md (structured data), CONTENT_EVIDENCE.md (citable facts), and SITE_ARCHITECTURE.md (entity establishment and FAQ approach).

Framing from the roadmap: the structured knowledge layer is the most valuable thing the site produces, because it feeds every AI surface and map, not just the page. But llms.txt specifically is agent infrastructure, not an SEO lever. Ship it and measure nothing from it.

## llms.txt (build this, populate at launch)

- A single curated `llms.txt` file at the site root. One file, hand-curated, not generated per page.
- Do NOT generate per-page `.md` mirror files. They create duplicate-content risk and have no proven benefit. This is an explicit roadmap ban.
- Status as of mid-2026: AI search crawlers still mostly skip the file and Google says it is not a ranking signal, but Chrome Lighthouse now audits for its presence under Agentic Browsing, IDE and task agents fetch it routinely, and Shopify pushed it to every store by default. Ship it as infrastructure.
- What goes in it: a short plain-language description of the practice (who it is, what it offers, where), the key pages with a one-line description each (the service and specialty pages, About, Beach Therapy, fees, contact, get-started), the canonical contact and booking info, and the out-of-network posture. Pull all facts from CLIENT_FACTS.md. Keep it current with the sitemap.
- Timing: the file references finished pages, so it is populated near launch once the pages and their URLs exist. Write it after the sitemap is built, not before. (Reminder to Steve: this is the deferred item; do not let it slip past launch.)

## The entity layer (planned, not built)

`reference/ANSWER_ENGINE_ENTITY_FACTS.md` is a client-approved, machine-facing layer: 42
question-and-answer pairs of dry operational and credential facts, explicitly never shown on
the website. It is a different thing from `reference/FAQ_KNOWLEDGE_BASE.md`, which is the
customer-facing FAQ text that feeds `src/_data/faq.json`. Approved architecture, not yet built:

1. **Most of it belongs in structured data that already exists.** Identity, founder,
   credentials, address, phone, price range, payment methods, area served and languages map
   onto properties of the `MedicalBusiness` node on `/contact` and the `Person` node on
   `/about/kay-wenger`. Extend those nodes rather than inventing a new one.
2. **The guardrails belong in `llms.txt`.** "What the practice does not do" and the
   disambiguation from Orange County Couples Counseling have no clean schema property, and
   free prose is what `llms.txt` is for. A few added lines alongside the description, key
   pages, contact and out-of-network posture specified above.
3. **Nine items are flagged NEEDS CONFIRMATION and publish nowhere**, including business hours
   (the known site-versus-Yelp conflict), languages spoken, wheelchair access and parking, and
   which modalities may be attributed to the practice.

DO NOT emit `FAQPage` schema from this document. `SCHEMA.md` and this file both require
`FAQPage` to mirror visible page text exactly, and this content is by definition never visible.
Emitting it would be a direct violation and a documented penalty risk. That rules out the
most obvious-looking option, so it is written down here rather than rediscovered later.

## What this site does NOT need

- No `agents.md`. That file is for sites where an agent can act (booking, ordering, commerce). This site does not transact: booking is an external Calendly embed, there are no payments, and no PHI touches the repo. Skip it.
- No `/.well-known/` UCP or ACP agent-commerce manifests. Same reason. The roadmap rule is "no signpost without a working endpoint," and there is no transaction endpoint here. Publishing one would get the business dropped from agent results, so do not.

## AEO content principles (apply as pages are built)

- Answer-shaped content. Where a page answers a real question ("what is Beach Therapy," "do you take insurance," "what is a first session like"), state the answer plainly and early, in a self-contained paragraph an engine can lift. The FAQ page and the FAQ sections on service pages are the primary vehicle.
- FAQPage schema must match the visible FAQ exactly (see SCHEMA.md). Mismatched schema is a penalty risk and undermines citation.
- Entity clarity. Consistent NAP everywhere and a complete `sameAs` set (see SITE_ARCHITECTURE.md and SCHEMA.md) are what let an engine confirm the business is real and decide to cite it. Kay's authenticity (30 years in this community, Susi Q, NRMFT, Pepperdine) is the entity signal a competitor cannot fake; encode it as structured data, not just prose.
- Citable facts. When a page uses a statistic, it should be accurate and attributable (see CONTENT_EVIDENCE.md). Engines cite sources; vague or wrong numbers do not get cited and erode trust.
- Semantic, clean HTML. One H1, ordered headings, real lists and tables, no content trapped in scripts. This is the same discipline as accessibility, and it is what makes a page machine-readable.

## The measurement note

AI-referred traffic is small in volume but growing and tends to convert well. Over time, reporting should show citation share, not just ranking position. That is a Velu/Chad reporting concern, not a build task, but it is why the structured layer matters more each year.
