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

  // ---- FAQ answer rendering -------------------------------------------------
  // Answers in src/_data/faq.json are authored with two markdown constructs:
  // [label](/path) links and "* " bullet lines. Nothing in this build ever
  // parsed them, and the faq macro escaped the string, so 96 links across 67
  // entries rendered to clients as literal "[label](/path)".
  //
  // These two filters are deliberately narrow rather than a markdown-it
  // dependency: the answers use exactly those two constructs, the build has no
  // runtime dependencies at all today, and a parser that emits arbitrary HTML
  // is a much larger surface than this needs.
  //
  // They come as a PAIR, and that is the point. faqRich renders the visible
  // answer; faqPlain produces the same words with the link syntax reduced to
  // its label. SCHEMA.md requires the FAQPage JSON-LD to mirror the visible
  // text exactly, so the macro renders one through each and the two stay in
  // word-for-word agreement by construction.

  const escapeHtml = (s) =>
    String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");

  // Internal paths and https only. Escaping happens BEFORE link conversion, so
  // authored content cannot introduce markup, and this guard means it cannot
  // introduce a javascript: or data: href either.
  const SAFE_HREF = /^(?:\/[^\s"']*|https:\/\/[^\s"']+)$/;
  const MD_LINK = /\[([^\]\n]+)\]\(([^)\s]+)\)/g;

  const linkify = (escaped) =>
    escaped.replace(MD_LINK, (whole, label, href) =>
      SAFE_HREF.test(href) ? `<a href="${href}">${label}</a>` : whole
    );

  // Paragraphs split on the literal \n the data uses. Runs of "* " lines
  // collapse into a single <ul> so the insurer-question list reads as a list.
  eleventyConfig.addFilter("faqRich", (answer) => {
    const lines = String(answer || "").split("\n").filter((l) => l.trim() !== "");
    const out = [];
    let list = null;
    for (const line of lines) {
      const bullet = /^\*\s+(.*)$/.exec(line.trim());
      if (bullet) {
        list = list || [];
        list.push(`<li>${linkify(escapeHtml(bullet[1]))}</li>`);
        continue;
      }
      if (list) {
        out.push(`<ul>${list.join("")}</ul>`);
        list = null;
      }
      out.push(`<p>${linkify(escapeHtml(line))}</p>`);
    }
    if (list) out.push(`<ul>${list.join("")}</ul>`);
    return out.join("");
  });

  // The same words, as plain text, for the JSON-LD. Link syntax reduces to its
  // label and bullet markers drop, so the schema string matches what a reader
  // sees. Not HTML-escaped: it is fed through | dump into a JSON string.
  eleventyConfig.addFilter("faqPlain", (answer) =>
    String(answer || "")
      .replace(MD_LINK, (whole, label, href) => (SAFE_HREF.test(href) ? label : whole))
      .split("\n")
      .map((l) => l.trim().replace(/^\*\s+/, ""))
      .filter((l) => l !== "")
      .join(" ")
  );

  // ---- Crisis resource numbers ----------------------------------------------
  // Every entry in site.crisisResources already carried an `action` (tel:/sms:)
  // and an `actionLabel`, and neither branch of support-resources.njk ever
  // rendered them, so the numbers were plain text. Someone in distress on a
  // phone had to transcribe a crisis number instead of tapping it. This is the
  // one component where that cost is highest.
  //
  // Wraps the first occurrence of the label inside the detail, so the number
  // stays inline where it already reads and nothing is duplicated or appended.
  // Escapes first, and only tel: and sms: schemes are allowed through.
  // The single-paragraph sibling of faqRich, for copy that already sits inside a
  // <p> and so must not be wrapped in one (featureRow tiles). Same escape-then-
  // linkify pair, same SAFE_HREF guard, so authored copy can carry a link without
  // any component putting raw authored HTML through | safe. Escaping runs first,
  // so the only markup that can reach the page is an anchor this filter built.
  eleventyConfig.addFilter("inlineRich", (text) =>
    linkify(escapeHtml(String(text || "")))
  );

  // Build-time guard on the /faq catch-all bucket.
  //
  // The catch-all exists so a faq.json entry whose tags match no category can
  // never silently vanish from the page. That safety net worked, and then quietly
  // became the problem: it reached 21 of 108 entries, the largest section on the
  // page, without anyone noticing. The net was never meant to be load-bearing.
  //
  // THRESHOLD, 5. Not arbitrary: the smallest genuine categories on the page are
  // "Cost and insurance" and "Telehealth" at 4 entries each. Once the remainder
  // bucket is bigger than the smallest category anyone deliberately named, it has
  // stopped being a remainder and become a category nobody got around to naming.
  // That is the line worth being told about.
  //
  // It takes the orphan ENTRIES from the template rather than recomputing the
  // partition here, so this cannot drift out of step with the logic it checks.
  // It warns and returns "", so it never fails a build or renders anything: a
  // taxonomy drift should be visible, not blocking.
  eleventyConfig.addFilter("warnOnCatchAll", (orphans) => {
    const LIMIT = 5;
    const list = Array.isArray(orphans) ? orphans : [];
    if (list.length <= LIMIT) return "";

    const counts = new Map();
    for (const e of list) {
      for (const t of e.tags || []) counts.set(t, (counts.get(t) || 0) + 1);
    }
    const ranked = [...counts.entries()].sort((a, b) => b[1] - a[1]);

    console.warn(
      `\n[faq] CATCH-ALL IS OVERSIZED: ${list.length} entries fell through to ` +
      `"Other questions" (threshold ${LIMIT}).`
    );
    console.warn(
      `[faq] Every entry below carries a tag that no category in faq.njk lists, ` +
      `so the fix is usually to add the tag to a category's tags array, or to add ` +
      `a category. Tags, most common first:`
    );
    for (const [tag, n] of ranked) {
      console.warn(`[faq]    ${String(n).padStart(3)}x  ${tag}`);
    }
    console.warn(
      `[faq] Section ids on /faq are public URLs. Prefer additive changes, and if ` +
      `a category is renamed keep the old id as an extra anchor.\n`
    );
    return "";
  });

  eleventyConfig.addFilter("crisisAction", (detail, resource) => {
    const text = escapeHtml(detail);
    const action = resource && resource.action;
    const label = resource && resource.actionLabel;
    if (!action || !label || !/^(?:tel:|sms:)[0-9+#*,;-]+$/.test(action)) return text;
    const needle = escapeHtml(label);
    const at = text.indexOf(needle);
    if (at === -1) return text;
    return (
      text.slice(0, at) +
      `<a class="support-resources__tel" href="${action}">${needle}</a>` +
      text.slice(at + needle.length)
    );
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
