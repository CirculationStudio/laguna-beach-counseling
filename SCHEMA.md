# Schema (Structured Data)

**Project:** Laguna Beach Counseling
**Last updated:** 2026-07-13
**Phase:** Phase 6 - Technical SEO and Structured Data

## Purpose

This document specifies which structured data (JSON-LD schema) each page template receives. This is critical for AI answer engines and search visibility.

## Schema Validation

All schema blocks must be validated at https://validator.schema.org/ before deployment.

## Schema by Page Template

[To be completed during Phase 6 after strategy handoff]

### Home Page

**Schema type:** LocalBusiness (or appropriate subtype)

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Laguna Beach Counseling",
  "description": "[Brief description]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Address]",
    "addressLocality": "Laguna Beach",
    "addressRegion": "CA",
    "postalCode": "[ZIP]",
    "addressCountry": "US"
  },
  "telephone": "[Phone]",
  "url": "[Website URL]",
  "sameAs": [
    "[Google Business Profile URL]",
    "[Other verified profiles]"
  ]
}
```

[Refine with actual data during implementation]

### About Page

**Schema type:** AboutPage (consider adding Person schema for practitioners)

[Define during Phase 6]

### Services Pages

**Schema type:** Service

[Define individual service schemas during Phase 6]

### Contact Page

**Schema type:** ContactPage

[Define during Phase 6]

### Blog Posts (if blog module enabled)

**Schema type:** Article or BlogPosting

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "[Post title]",
  "author": {
    "@type": "Person",
    "name": "[Author name]"
  },
  "datePublished": "[ISO date]",
  "dateModified": "[ISO date]",
  "description": "[Meta description]"
}
```

### FAQ Page (if applicable)

**Schema type:** FAQPage

**CRITICAL:** FAQPage schema must match the visible FAQ on the page exactly. This is business-critical for AI answer visibility.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Question text exactly as shown on page]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Answer text exactly as shown on page]"
      }
    }
  ]
}
```

## Answer Engine Module (if applicable)

If the site has booking, ordering, or transactional capabilities for agent actions:

- [ ] Create `agents.md` in `.well-known/` directory
- [ ] Define what the business offers
- [ ] List key pages for agents
- [ ] Set rules for agent behavior (confirm with human before transacting, use live pricing, etc.)

## UCP Manifest (if agent commerce applies)

If applicable for agent discovery:

- [ ] Create `/.well-known/ucp/manifest.json` (UCP spec version 2026-01)
- [ ] Ensure manifest points to real working endpoint (signpost to nothing gets business dropped from agent results)

## Notes

Schema is how clients get found in AI answers. It must not regress. Every schema block must be validated and tested before deployment.
