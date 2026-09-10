# Phase 01 — Repository, Asset, and Content Audit

## Objective

Audit the complete project before writing UI code. Do not begin visual implementation until the repository, CV, logo, portrait, project descriptions, links, and available screenshots are understood.

## Required Actions

1. Inspect the full project tree.
2. Identify the framework, package manager, entry point, scripts, build configuration, and deployment configuration.
3. Locate the `Assets` folder and inspect:
   - CV file and type.
   - Portrait image.
   - Logo file.
   - Any additional brand or project assets.
4. Read every file in `project_1`, `project_2`, and `project_3`.
5. Extract only documented facts:
   - Project title.
   - Purpose.
   - Technologies.
   - Data sources.
   - Pipeline stages.
   - Output/results.
   - Repository/demo links.
6. Record missing information instead of inventing it.
7. Run the existing app and inspect the current behavior.
8. Run available lint/build commands and record the baseline.
9. Check whether the logo is light/dark, transparent, monochrome, or multi-color.
10. Inspect image dimensions and formats.

## Deliverable Before Phase 02

Create an internal audit summary containing:

- Current framework/tooling.
- Existing scripts.
- Content inventory.
- Asset inventory.
- Project facts table.
- Real links found.
- Missing information.
- Baseline build/lint status.
- Risks and implementation recommendations.

Do not expose this audit summary in the public UI.

## Rules

- Do not invent content.
- Do not overwrite original assets.
- Do not delete files in this phase.
- Do not redesign in this phase.
- Fix only blockers that prevent inspection.

After completing this phase, review the audit and only then continue.

## Verification

Confirm that every fact shown later in the portfolio can be traced to the CV, provided assets, or project source files.
