# Phase 07 — QA Summary (internal, not part of the public UI)

Date: 2026-09-11. Scope: full review of the Phase 01–06 implementation (React 18 + Vite 6 + TypeScript).

## Issues found and fixed

### Human copy
1. **Unsupported metric removed** — the About metrics row claimed "200+ Hours of training". This figure appears nowhere in the CV or the content model. Replaced with a supported third metric ("2 Practice builds", matching the two CV-documented practice projects).
2. **Provenance-style copy rewritten** — the Projects intro read "Built and documented end-to-end. Every project is personal work — no production or deployment claims." That is audit language, not human copy. Rewritten to: "Three personal projects I built and documented while training — each one followed from raw data to finished output."
3. **System-style contact eyebrow** — `// 06 CONTACT` violated the no-`//`-labels rule. Changed to `06 — Contact`, consistent with the other section eyebrows (01–05).
4. **Duplicate honesty suffix** — education timeline entries rendered " — Education" after the organization even though the type chip already said "Education". Now the qualifier only appears when it adds information (e.g. "— Traineeship (practicum)").

### Accessibility
5. **Invalid CSS** — a stray `}` in `src/styles/motion.css` (after the hero portrait rule) created a broken rule at parse level. Removed.
6. All other checks passed as implemented in earlier phases and were verified live: skip link; single h1 (the name) with ordered h2/h3; semantic landmarks (banner, navigation, main, regions, contentinfo); accurate alt text on portrait, logo, and all three project previews; visible `:focus-visible` ring site-wide; modal focus trap + Escape + overlay close + focus restoration (verified in browser: focus returns to the "View details" button); intro dialog Escape/skip; `aria-pressed` skill toggles with a polite live status region (verified: "POSTGRESQL — used in DataFlow Monitor, BusinessInsights Hub"); `role="img"` pipeline diagram with visible static text equivalent; sr-only text equivalents for the hero diagram, about flow, and animated counters; reduced-motion honored in CSS (global override + explicit fallbacks) and JS (intro, reveals, counters); no hover-only content; no accordions exist on the site, so accordion ARIA is N/A.

### Security
7. Grep-audited for secrets, `dangerouslySetInnerHTML`, `eval`, env exposure, `javascript:` URLs, iframes, analytics: **clean — nothing found.** External links (GitHub, LinkedIn) all use `target="_blank" rel="noopener noreferrer"`. Email is `mailto:`. CV download is a same-origin `download` link. Phone number from the CV is deliberately not published. Non-applicable checks: unsafe iframe usage, debug endpoints, client-side env vars (none exist).

### Performance
8. **~5.3 MB of project PNGs → WebP** — the three preview images (2.4 MB, 1.4 MB, 1.4 MB) were converted to WebP q82 (138 KB, 41 KB, 42 KB ≈ **221 KB total, −96 %**). Originals remain untouched in `project_*/preview.png`; the heavy PNGs were removed from `public/projects/` and `content.ts` now references `.webp`.
9. **Duplicated stylesheet block removed** — `src/styles/sections.css` contained a ~16 KB verbatim duplicate of its second half (header/hero/about/timeline/projects/contact rules). Deduplicated; the compiled CSS dropped accordingly.
10. Verified already in place: intrinsic `width`/`height` on all images (no CLS), `loading="lazy"` on below-the-fold project previews, high fetch priority on the hero portrait, lazy-loaded route-free bundle (198 KB JS / 65 KB gzip, 42 KB CSS / 10 KB gzip), self-hosted variable fonts, transform/opacity-only animations, no canvas/3D.

## Runtime verification (Chromium, production build via `vite preview`)
- Zero console errors or warnings from the site (the only captured warning, `[RUM] ArmsEventBridge`, is emitted by the in-app browser host, not the page). No React `fetchPriority` warning.
- Modal open → Escape close → focus restoration tested and passing.
- No horizontal overflow at 320 px or 375 px viewports.
- Desktop full-page and header/hero screenshots reviewed; layout, contrast, and imagery render correctly.

## Checks and commands
- `npm run build` — pass (tsc + vite, 1.2 s).
- `npm run lint` — pass, no findings.
- `npm audit` — 0 vulnerabilities.
- Not applicable: `npm run test` (no test script exists in this project).

## Remaining known items
- None blocking. Certification names/dates come from the owner-reviewed edit recorded in the Phase 02 content model (they supersede the older CV certificate list); no "verified" badges are shown since no credential IDs exist.
