// Eleventy v3 configuration for Laguna Beach Counseling.
// CSS is compiled separately by the Tailwind CLI into public/css/main.css
// (see package.json scripts), so Eleventy only handles templates and passthrough.

import { readFileSync } from "node:fs";

export default function (eleventyConfig) {
  // Static passthrough. Cloudflare Pages control files and static assets
  // are copied to the output root untouched.
  eleventyConfig.addPassthroughCopy({ "src/_headers": "_headers" });
  eleventyConfig.addPassthroughCopy({ "src/_redirects": "_redirects" });
  eleventyConfig.addPassthroughCopy({ "src/site.webmanifest": "site.webmanifest" });
  eleventyConfig.addPassthroughCopy({ "src/js": "js" });
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });
  // Client intake and consent PDFs. Deliberately served from our own domain
  // rather than the marketing asset CDN: these are therapy paperwork, not brand
  // imagery, and they belong on the practice's own origin.
  eleventyConfig.addPassthroughCopy({ "src/documents": "documents" });

  // Rerun the browser when the compiled stylesheet changes during `npm start`.
  eleventyConfig.addWatchTarget("public/css/main.css");

  // Current year, handy for the footer copyright without hardcoding a date.
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // The FAQ answer engine (src/_data/faq.json) is exposed globally as "faq"
  // by Eleventy's file based data cascade, which collides with the "faq"
  // front matter key every page template uses for its own FAQ section config
  // (eyebrow, title, tags, items). "faqEntries" is an unambiguous alias to the
  // same data, safe to reference from inside a layout regardless of what a
  // page's own front matter defines. See src/_includes/layouts/*.njk.
  eleventyConfig.addGlobalData("faqEntries", () => {
    return JSON.parse(readFileSync("src/_data/faq.json", "utf8"));
  });

  // resolveFaq(faqOpts, allEntries): resolves a page template's faq: block to
  // the { q, a } item array the faq / faqSchema macros expect. faqOpts.items,
  // when set, is used as-is (a literal list, unchanged behavior). Otherwise
  // faqOpts.tags pulls from src/_data/faq.json (the FAQ answer engine, passed
  // in as allEntries i.e. the faqEntries global): any entry sharing at least
  // one tag, in the file's own authored order, optionally capped at
  // faqOpts.limit. Does not filter on status: "draft" entries still render;
  // status is a pre-launch content gate (see the launch checklist in
  // SITE_ARCHITECTURE.md), not a runtime visibility rule.
  //
  // It DOES filter on `blocked`, which is a different thing from status. A
  // blocked entry carries a claim awaiting Kay's sign-off (the Christian
  // counseling claim strength, Beach Therapy scope, addiction-recovery
  // clinician naming, and the Susi Q credential wording). Those must not reach
  // a page, the same treatment as the CONTENT_EVIDENCE do-not-publish list.
  // Without this, importing an approved-but-blocked answer publishes it
  // immediately, which is exactly what happened on the first import pass.
  //
  // A single filter, not a template include, so there is no Nunjucks
  // include-scope pitfall: {% set %} inside an included file does not leak
  // back to the includer.
  eleventyConfig.addFilter("resolveFaq", (faqOpts, allEntries) => {
    if (!faqOpts) return [];
    if (faqOpts.items) return faqOpts.items;
    const tags = faqOpts.tags || [];
    let matched = (allEntries || [])
      .filter((e) => !e.blocked)
      .filter((e) => (e.tags || []).some((t) => tags.includes(t)));
    if (faqOpts.limit) matched = matched.slice(0, faqOpts.limit);
    return matched.map((e) => ({ q: e.question, a: e.answer }));
  });

  return {
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
      data: "_data",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"],
  };
}
