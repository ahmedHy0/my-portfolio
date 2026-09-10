# Phase 08 — Final Release Validation and Repository Cleanup

## Objective

Perform the final launch check. The portfolio must be clean, complete, responsive, accessible, and buildable.

## Functional Checks

Verify:

- Intro skip.
- Header/navigation.
- Section scrolling.
- Browser back/forward behavior.
- CV download/open.
- Email.
- LinkedIn and GitHub.
- All three project links.
- Project modals/drawers/routes.
- Certification interactions.
- Copy-email feedback.
- Custom cursor fallback.
- Reduced-motion mode.

## Responsive Checks

Test at:

```text
320 × 800
375 × 812
390 × 844
414 × 896
768 × 1024
1024 × 768
1280 × 720
1440 × 900
```

Confirm no horizontal overflow, clipping, overlap, broken image, or double scrollbar.

## Repository Cleanup

Inspect `git status` and project references before deleting anything. Remove only files proven unused, temporary, duplicated, generated, debug-only, or unrelated. Preserve required source files, assets, package files, lockfiles, build/deployment configs, and test/lint configs.

Remove unnecessary prompt files and internal documents from the production project if they are not required by the build. Do not expose them in the deployed website.

## Final Commands

Run all available commands, including:

```bash
npm run build
npm run lint
npm run test
```

If a command does not exist, report that honestly. Run a package audit when available.

## Final Search

Search rendered UI and source for:

```text
master prompt
source: cv
owner documentation
AI-generated
placeholder
TODO
DEBUG
localhost
127.0.0.1
project_1
project_2
project_3
```

Remove obsolete visible matches. Do not expose internal notes.

## Final Report

Report:

1. Files changed.
2. Files deleted and why.
3. Assets integrated.
4. Sections completed.
5. Interactions and animations checked.
6. Responsive widths checked.
7. Accessibility result.
8. Security/performance result.
9. Build/lint/test result.
10. Links verified.
11. Assumptions.
12. Remaining issues.

Do not claim perfect or launch-ready unless the checks actually pass.
