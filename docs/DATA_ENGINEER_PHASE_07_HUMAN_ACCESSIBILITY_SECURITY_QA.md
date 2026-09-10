# Phase 07 — Human Polish, Accessibility, Security, and Performance QA

## Objective

Review the entire implementation as a recruiter, a real user, an accessibility user, and a frontend security reviewer.

## Human Copy Review

Remove:

- AI-sounding filler.
- Generic marketing language.
- Repeated abstract labels.
- Prompt/source/provenance notes.
- Folder names and debug terms.
- Unsupported metrics and claims.
- Placeholder text.
- Unnecessary system metadata.

The site must sound like a real Data Engineer, not an AI-generated template.

## Accessibility Review

Verify:

- Semantic landmarks.
- One meaningful h1.
- Heading hierarchy.
- Accurate alt text.
- Keyboard navigation.
- Visible focus.
- Accessible buttons/links.
- Dialog and accordion ARIA.
- Focus trap/restoration.
- Escape close.
- Reduced-motion mode.
- No hover-only content.
- Color is not the only state indicator.

## Security Review

Check for:

- Secrets/API keys in source or assets.
- Unsafe HTML rendering.
- Unsafe URL protocols.
- Unsafe external links.
- Exposed local paths.
- Debug endpoints or overlays.
- Unsafe iframe usage.
- Unnecessary external services.
- Client-side environment variable exposure.

Fix only actual issues and document non-applicable checks.

## Performance Review

Check:

- Image optimization.
- Intrinsic image dimensions.
- Lazy loading below-the-fold media.
- Excessive blur/filter/shadow.
- Animation performance.
- Bundle size and unnecessary dependencies.
- Layout shift.
- Console warnings/errors.

## Deliverable Before Phase 08

Create a factual QA summary. Do not expose it in the public UI. Fix every issue that can be fixed safely before final validation.
