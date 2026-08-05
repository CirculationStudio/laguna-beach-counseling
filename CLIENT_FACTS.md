# CLIENT_FACTS.md

The single source of truth for facts about Laguna Beach Counseling. Any page copy, schema value, metadata, or claim must trace back to this file. If a fact is not here and not confirmed, do not publish it. When in doubt, leave a placeholder and flag it, never invent.

Source: LBC Client DNA (June 30, 2026) and approved brand materials. Fields marked CONFIRM are open with the client and must not be published as settled until resolved.

---

## The two hard rules for this practice

1. HIPAA is non-negotiable. Never publish anything that could identify a client. No testimonials with identifying detail until the written-authorization workflow is approved. No confirming or denying that any named person is a client. No diagnostic or treatment specifics tied to any individual.
2. Never a "therapy factory." Nothing on any surface may suggest clients are appointments processed through a high-volume system. Warm, experienced, genuinely invested, meaningful over transactional. See voice-tone.md.

---

## Identity

- Public / trade name: Laguna Beach Counseling (LBC)
- Legal name: Kathleen Wenger, LMFT, LPCC, operating as Laguna Beach Counseling. Entity structure (sole proprietor / LLC / professional corporation): CONFIRM.
- Founder and owner: Kathleen "Kay" Wenger, M.A., LMFT #38183, LPCC #1450. Sole owner.
- Year established: 2001.
- Type: outpatient psychotherapy group practice; associate-supervised model.
- Sister brand: Orange County Couples Counseling (OCCC), same ownership and team, separate Irvine-based brand and separate site. Keep the two from competing (see SITE_ARCHITECTURE.md de-cannibalization).
- Second office (shared with OCCC, "Orange County Airport Area"): 19772 MacArthur Blvd, Suite 260, Irvine, CA 92612. The primary LBC office and canonical NAP is the Laguna Beach address below.

---

## NAP (must be byte-identical everywhere: site, GBP, Yelp, directories)

- Address: 333 Third Street, Suite 6, Laguna Beach, CA 92651, United States
- Primary phone: (949) 357-3587
- Public email: Kay@LagunaBeachCounseling.com
- Website: https://www.lagunabeachcounseling.com
- Timezone: America/Los_Angeles (Pacific)
- GPS: approximately 33.5427, -117.7853. CONFIRM authoritative figure from the GBP / Maps embed before shipping schema `geo`.

Other numbers (context, not for the main NAP): Kay direct 949-787-0944 (per Psychology Today); NRMFT general line 949-607-7493 (Kay's separate organization, a marketing touchpoint, not the clinical practice line).

---

## Hours (FLAGGED, do not ship schema hours until resolved)

- Per the website: Mon to Fri 8:00 AM to 9:00 PM; Sat and Sun 8:00 AM to 5:00 PM.
- Per Yelp: Mon to Fri 8:30 AM to 8:00 PM; Sat 9:00 AM to 3:00 PM; Sun closed.
- These conflict. CONFIRM the authoritative schedule with the client, then align site, GBP, and Yelp, and only then populate `openingHoursSpecification`.
- The "Be Seen Within 24 Hours" access promise is marketing copy, not a hours value. Keep it out of schema.

---

## The team (roster changing, plan content accordingly)

Publish only confirmed credentials. Do not attribute a modality or certification to a named associate unless it is confirmed below.

- Kathleen "Kay" Wenger, M.A. Founder and Clinical Supervisor. LMFT #38183, LPCC #1450. M.A. Clinical Psychology, Pepperdine (1992). Spent about 25 to 32 years at Pepperdine GSEP as Manager of M.A. Clinical Training and Professional Development (retired 2022). Co-Founder and CEO, National Registry of Marriage Friendly Therapists (NRMFT, 2005 to present). Founding Chair, MFT Consortium of Orange County (1994 to 2022). Clinical supervisor and founder of the "Heart to Heart" senior program at Susi Q / Laguna Beach Seniors (2010 to present). AAMFT and CAMFT clinical supervisor trained; family mediation via the Straus Institute; Critical Incident Stress Debriefing trained. Solution-focused, interactive, integrative.
- Christy Hill, M.A. Associate Therapist (Personal Growth and Anxiety). AMFT #139486, APCC #13876, supervised by Kay. DEPARTING: completing associate hours December 2026, transitioning out. Phone discrepancy unresolved (949-281-6763 on the LBC site vs. 949-990-5941 elsewhere); CONFIRM before publishing any number.
- Natasha Gaffaney, M.A. Associate Therapist (RN and Mental Health). AMFT #147477, supervised by Kay. Former RN and healthcare director. Strong fit for chronic illness, medical trauma, healthcare-worker burnout. Humanistic and existential.
- Austin Whitman, M.A. Associate Therapist (Teens and Young Adults). AMFT #145401, supervised by Kay. Leads the Men's Support Group. Person-Centered, CBT, DBT, ACT. DEPARTING: relocating to the Austin, TX area October 2026, transitioning out.
- Rozy Pishvaiy, M.A. Associate Therapist (Growth and Life Transitions). AMFT #151380, supervised by Kay. M.A. Marital and Family Therapy, Alliant International University. Children is a specialty (a growth-priority area for LBC).
- Irene Alvarez de Schwartz. AMFT (license number CONFIRM), supervised by Kay. Native Spanish speaker. STATUS UNCONFIRMED, may be active, transitioning, or affiliated only. Do not publish a bio until confirmed with the client.

Roster guidance: Austin and Christy are transitioning out in 2026. Their appearances in team sections are provisional. Do not over-invest in professional photography or permanent bio pages for departing associates until the replacement and licensure timeline is confirmed with Aylin.

Employee count for schema / GBP: approximately 6, but this is in flux; keep it soft.

---

## Modalities (strict: confirmed versus not confirmed)

CONFIRMED for this team (safe to use in copy):
Solution-Focused Therapy, CBT, DBT, ACT, Person-Centered / Humanistic, Existential, Discernment Counseling (Doherty model), Family Mediation, Critical Incident Stress Debriefing, walk-and-talk / outdoor work (Beach Therapy), faith-integrated counseling, and group work.

NOT YET CONFIRMED for this specific team (do NOT attribute to the practice or to any named associate):
Gottman Method, EFT, EMDR, IFS, Imago. These may appear only as general modality background in editorial content, never as a practice-specific or practitioner-specific claim. Per-clinician modality certifications must be verified before any SEO or service-page claim (DNA Open Question 3).

---

## Services

- Individuals, couples, families, teens, children, seniors.
- Signature: Beach Therapy (private walk-and-talk on the Laguna coastline; category-of-one, no direct local equivalent). Origin: an observation, not a marketing idea (see voice-tone.md pull-quotes).
- Signature: Sand Castle Therapy™ (nature-based play therapy for children on the Laguna sand). Tagline: "Building resilience, one sand castle at a time." Developed by Kathleen "Kay" Wenger, LMFT, LPCC, and Laguna Beach Counseling. Children use sand, imagination, storytelling, and therapeutic play at the beach to build emotional resilience, coping skills, confidence, communication, and stronger family relationships. The Six Pillars: Build (a castle, and trust with the therapist), Create (expressing thoughts and feelings through imagination), Explore (the therapist gently explores emotions, relationships, fears, strengths, hopes), Repair (waves and accidents become practice in coping, flexibility, resilience), Grow (skills practiced naturally through play, problem-solving, emotional coaching), Take Home (parents get simple strategies to keep building resilience at home). Delivered by Rozy Pishvaiy, AMFT, the practice's children specialist. Offered after school and on weekends. TRADEMARK STATUS: unregistered. Use the unregistered mark (™) only, never the registered symbol (®), until registration is confirmed. Presenting concerns confirmed for this model: anxiety, school avoidance, divorce, ADHD, grief, social anxiety, depression, self-esteem, emotional regulation. Trauma is NOT on that list on purpose; trauma-focused child work implies modality training (EMDR, TF-CBT) that is not confirmed for this team (see Modalities). Add it only if Kay confirms the credential. Source: client-supplied Sand Castle Therapy materials via Kay, August 2026. NOT FOR PUBLICATION (internal roadmap, do not put on any client-facing surface): the book, workbook, therapist manual, certification program, CE course, research study, and TEDx plans.
- Couples Intensives: 4 to 8 hour single-day formats with Kay. Pricing "contact for pricing" today; recommend publishing a range for transparency and SEO (CONFIRM range with client).
- Discernment Counseling: for couples deciding whether to work on the relationship or part. Pro-commitment, not attached to a particular outcome.
- Premarital counseling: folded into the couples page; an explicit growth priority.
- Telehealth: any California resident, HIPAA-compliant platform. State licensing prohibits serving clients located outside California.
- Addiction and recovery: the practice supports recovery (it is not a detox or treatment facility). A dedicated page carries over the old `/addictionandrecovery` URL. CONFIRM which clinician covers substance-use work before publishing any name; this was Austin Whitman's area, and he is departing in 2026.

---

## Insurance and rates

Posture: premium, out-of-network. Not paneled with any insurance. Superbills provided at every session for clients to submit for PPO out-of-network reimbursement.

Canonical positioning line (use in footer, FAQ, Calendly description, fee page): "Laguna Beach Counseling is an out-of-network practice. We do not bill insurance directly, which allows us to deliver full-length sessions, protect client confidentiality, and avoid the diagnostic labeling required by insurance reimbursement. We provide Superbills at every session for clients to submit to their PPO insurance for out-of-network reimbursement."

Price range attribute: $$$.
Payment accepted: cash, check, Venmo, Zelle, all major credit cards.
Cancellation: 24-hour notice or full session fee.

Rate card, associates (Christy, Natasha, Austin, Rozy):
50-min individual $160 / 50-min couples or family $180 / 75-min individual $235 / 75-min couples or family $265 / 90-min individual $275 / 90-min couples or family $315.

Rate card, Kay Wenger:
50-min individual $190 / 50-min couples or family $220 / 75-min individual $280 / 75-min couples or family $325 / 90-min individual $330 / 90-min couples or family $390.

Sliding scale: available on request, handled per therapist, not formally published.

---

## Booking and access

- Primary CTA everywhere: free 15 to 20 minute "Get to Know Us" call via Calendly (calendly.com/lbc-occc/30min).
- Full appointments scheduled with the therapist after the fit call.
- No walk-ins. Appointment recommended.
- "Be Seen Within 24 Hours" access promise (marketing copy).

---

## Service area and local targets

- Primary market: Laguna Beach.
- Secondary: Newport Beach, Irvine, Dana Point, Aliso Viejo, Corona del Mar, Laguna Niguel, South Laguna. (Priority ranking beyond Laguna Beach is CONFIRM, DNA Open Question 8.)
- Neighborhood targets: Three Arch Bay, Emerald Bay, Top of the World, South Laguna, North Laguna, Bluebird Canyon, Arch Beach Heights; 92651.
- Telehealth: statewide California only.

---

## The differentiators (the premium-pricing justification, three tiers)

1. Credential stack: NRMFT founder + Pepperdine educator (about 30 years) + 28+ years clinical + Pepperdine-trained team supervised by Kay + Susi Q community role.
2. Category-of-one services: Beach Therapy + Couples Intensives + Discernment Counseling.
3. Operational excellence: 24-hour response + free fit call + evening and weekend hours + statewide CA telehealth.

Use this three-tier structure whenever justifying premium pricing. Defend price on the credential and service stack; never apologize for it. But do not credential-flex so hard that warmth is lost (see the balancing note in voice-tone.md).

---

## Verified-versus-flagged data (research integrity, read before writing any statistic)

These are known traps. Do not repeat the unsubstantiated versions. The full citable-evidence layer, with sources and per-page usage, lives in CONTENT_EVIDENCE.md; this is the short guardrail summary.

- Orange County divorce-rate figures like "72%" or "60%" are unsubstantiated and must not be used. The appropriate, defensible local metric is the U.S. Census ACS "percent currently divorced." Use that framing.
- California does not report to the CDC's National Vital Statistics System. Any CA-specific divorce or marriage statistic sourced from NVSS is unavailable; do not imply otherwise.
- Two telehealth statistics in the research briefs were sourced secondhand and need primary-source confirmation before publication.
- FAIR Health reports conflate two different telehealth metrics (claim-line percent vs. patient percent). Never conflate them in copy.
- Frame the telehealth premise around California's permanent payment-parity policy, not a growth-trajectory claim.
- Orange County-specific utilization data does not exist in public sources. If a utilization claim is needed, the practice's own intake data is the more citable source.
- Laguna Beach demographic figures (median household income about $143,843; median age about 54; median home value roughly $2M) are 2024 ACS estimates. Cite as estimates.

---

## Community authority assets (real, local, underused)

- Susi Q / Laguna Beach Seniors: Kay is clinical supervisor. She founded the senior mental-health program in 2010 (out of her experience caring for her father, a story she approved for web use). Programs built since: Coffee Talk (2010, later renamed Heart to Heart around 2015), Feeling the Blues (individuals 55+), Women's, Men's, Death Cafe, Caregiver Support, and Grief and Loss groups. This is a major authority and content asset for senior counseling and grief pages.
- NRMFT: Kay is Co-Founder and CEO. A national couples-therapy authority credential almost no local competitor holds.
- Pepperdine GSEP: Kay trained the generation of MFTs now practicing across Orange County.

---

## Canonical social and directory URLs (for sameAs and citations)

- Google Business Profile: https://g.page/lagunabeachcounseling
- Yelp: https://www.yelp.com/biz/laguna-beach-counseling-laguna-beach-2
- Facebook: https://www.facebook.com/lagunabeachcounseling/
- Instagram: https://www.instagram.com/lagunabeachcounseling/
- LinkedIn (Kay): https://www.linkedin.com/in/kathleenwengerlmft/ (practice page CONFIRM)
- Psychology Today (Kay): https://www.psychologytoday.com/us/therapists/kathleen-kay-wenger-laguna-beach-ca/38172
- NRMFT (Kay): https://www.marriagefriendlytherapists.com/united-states/irvine/relationship-marriage-counseling/kathleen-wenger

Directories to audit/claim (not yet confirmed): TherapyDen, GoodTherapy, TherapyTribe, Zencare, Healthgrades, Inclusive Therapists.
Ratings for schema (`aggregateRating`): TBD, pull real totals from GBP and Yelp. Do not publish placeholder ratings.

---

## Who we're writing for (personas)

Three primary readers. Use them to shape tone, examples, and which proof points lead. Reading level is mixed across all three; write to be understood by all of them.

1. Coastal empty-nester couple (55 to 70, HHI $200K+, Laguna and the enclaves). Empty-nest and retirement identity shifts, intimacy eroded after 25+ years, "we've drifted." Searches: "marriage counseling Laguna Beach," "we've drifted apart therapy." Chooses LBC for Kay's tenure, the NRMFT credential, local rootedness, pro-commitment philosophy, and Beach Therapy as a lower-intimidation entry. Fears: that therapy is for "broken" people, that they'll be pushed toward divorce, impersonal corporate chains.
2. Anxious high-achiever (30 to 45, HHI $150K to $300K, tech/finance/creative/founders). Burnout, persistent anxiety, sleep trouble, relationship friction, career-pivot pressure; functional but exhausted. Searches: "anxiety therapist Laguna Beach," "burnout therapy," "walk and talk therapy near me." Chooses LBC for evening/weekend availability, Beach Therapy as a category of one, fit-matching, and warmth over clinical alternatives. Fears: being pathologized, therapists who don't get high-performing professional lives, long waits, impersonal intake.
3. Senior in transition (65 to 80+, often searched for by adult children). Grief and spousal loss, retirement identity, chronic illness, caregiver fatigue, isolation. Searches: "senior therapy Laguna Beach," "grief counseling," often via Susi Q, family doctor, or pastor. Chooses LBC because of Kay specifically, through her decade-plus Susi Q role; trust is pre-built. Fears: stigma ("I should handle this myself"), telehealth tech anxiety (mitigated by the in-person option), being talked down to by a young therapist.

Ideal-fit note (couples): a good fit is a couple that still cares even when exhausted or stuck, willing to be honest, take responsibility for their part, and stay engaged. It does not require both partners equally motivated at the start. Not a fit: someone wanting a therapist to declare a winner, prove one partner is the problem, or pressure the other to change; or a couple already firmly decided to end things and not seeking support navigating that.

Growth-priority reminder: OCCC keeps the couples calendar full, so LBC's deliberate growth focus is INDIVIDUALS, children (Rozy), and adults with depression and anxiety. Weight content and internal linking toward those.

---

## Competitors (how we differentiate, for copy that needs to know)

Never name competitors on the site. This is background so differentiation lands.

- Third Street Counseling (same street): strong on EMDR and neurofeedback, modern. Does not lead with couples or relationship work; no Beach Therapy; less community-rooted. We win on couples depth, Kay's NRMFT credential, Beach Therapy, and the Susi Q anchor.
- Dr. Carol Ummel Lindquist: doctoral authority, long tenure, EFT-aligned. Solo (limited capacity, no fit-match), dated site, minimal community presence. We win on team depth, fit-matching, warmth, accessibility. She is the "expert in the ivory tower"; LBC is the "expert next door" with a Pepperdine-trained team.
- Dr. Piper Walsh / South OC Counseling: SEO-savvy "areas of service" pages but not actually in Laguna Beach. We win by reinforcing true local presence (333 Third Street, Susi Q, NRMFT) against geo-spoofing service-area pages.
- Watch list: Couples Academy (intensive model), Therapy for Humans (distinctive couples voice).
- Market benchmark (TherapyTribe): the Laguna Beach therapist average is roughly $205 per session, with about 99% offering online sessions. Useful context for the fees page; cite as a market benchmark, not our own rate.

Competitive positioning statement (the one-line differentiator): Laguna Beach Counseling is the only Laguna-Beach-rooted couples-and-individual therapy practice founded by the co-founder and CEO of the National Registry of Marriage Friendly Therapists, with a Pepperdine-trained team Kay personally supervises, and a signature Beach Therapy offering steps from the Pacific.

---

## Messaging (taglines, themes, and what's off limits)

Primary tagline: Navigating Life's Waves Together.
Secondary: Where there is healing, there is hope.

Content themes (for the blog and social):
1. Living in Laguna mental wellness (walking routes, why coastal living helps anxiety, Susi Q senior mental health, how Laguna's pace supports healing).
2. Couples and marriage repair (NRMFT credibility, pro-commitment framing, empty-nest as a couple).
3. Beach Therapy explainers (what it is, who it's for, what to wear, what to expect; de-identified benefit stories).
4. Senior wellness (retirement identity, grief, caregiver fatigue, the Heart to Heart and Susi Q programs).
5. Teen and family (parenting in affluent coastal communities, teen anxiety and substance use).

Off-limits topics (hard): identifying testimonials without written authorization; outcome guarantees ("save your marriage in 6 weeks"); diagnostic claims in marketing; reviews that confirm a therapist-client relationship; pathologizing one partner in couples content; partisan political content; any clinical advice positioned as a substitute for individual care.

---

## Approved origin stories (cleared for web use by Kay, June 2026)

Use these as the narrative backbone of the pages noted. They are Kay's own words and carry no HIPAA exposure. Convert em dashes to commas or parentheses when placing on the site.

The Beach Therapy origin (for /beach-therapy): It did not begin as a marketing idea, it began as an observation. Working on the coast, Kay noticed something shifted when people stepped out of an office and into the natural world. Walking side by side along the shoreline changed the rhythm of the conversation. People felt less guarded, less stuck, more willing to be honest about what was actually going on. The ocean creates perspective; the steady waves and open horizon quiet the noise people carry. The beach does not replace therapy. It creates conditions that let therapy happen differently. Anchor line: "Sometimes the environment matters."

The Susi Q origin (for /about/kay-wenger and /therapy/seniors): The senior mental-health work started in 2010, when Kay's father came to live with her. Looking for resources for him, she found that most senior centers offered plenty to do (bingo, mahjong, social activities) but almost nothing in the way of meaningful groups where people could talk about what they were actually struggling with. Seniors might spend the whole day at a center with no space for the harder conversations. So Kay built one. She started with Coffee Talk (later renamed Heart to Heart), then added Feeling the Blues, a counseling program for individuals 55 and older, after members asked for individual time with a therapist. From there she added a new group roughly every two years: a Women's group, a Men's group, a Death Cafe, a Caregiver Support group, and a Grief and Loss group. Kay confirmed this story, including the detail about her father, can appear on the website; she noted that people gravitate to real stories.

---

## Open questions that block specific content (do not guess)

1. Authoritative business hours (site vs. Yelp).
2. Irene Alvarez de Schwartz status.
3. Per-associate modality certifications (Gottman, EMDR, EFT, IFS).
4. Spanish-language service availability through LBC vs. only Susi Q.
6. HIPAA-compliant testimonial workflow, or a decision to avoid testimonials entirely (blocks `/testimonials`).
7 / 13. Christy Hill authoritative phone number.
8. Geo-target priority ranking beyond Laguna Beach.
9. Legal entity structure.
10. Beach Therapy liability / insurance considerations before the SEO push.
15. Replacement and licensure timeline for departing associates (blocks final team page and photography).
