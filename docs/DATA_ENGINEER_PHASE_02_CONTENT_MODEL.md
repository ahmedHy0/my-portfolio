# Phase 02 — Content Model and Information Architecture

## Objective

Turn the audited CV, logo, portrait, project descriptions, and links into a clean structured content model before styling the interface.

## Required Sections

Use only sections supported by the source material:

1. Intro / Initialize Data Session
2. Hero / Data Engineer Identity
3. About
4. Skills / Data Stack
5. Experience, Education, Training, or Background
6. Certifications
7. Projects
8. Optional Pipeline Replay or Architecture Walkthrough
9. Contact / Open to Opportunities

Do not invent an Experience section if the CV only documents education or training.

## Content Modeling Rules

Create structured data for:

- Profile and role.
- Hero statement.
- About paragraph.
- Skills grouped by real categories.
- Background timeline.
- Certifications.
- Three projects.
- Contact links.
- Logo and image assets.

Each project must include:

- Actual title from its `about` file.
- Short purpose.
- Technologies documented in source material.
- Real links.
- Available screenshot/preview.
- Honest project type: personal, academic, training, prototype, or other when known.

## Copy Quality

Remove AI-style filler, exaggerated claims, generic marketing language, and unsupported metrics. Use direct human wording. Do not expose folder names such as `project_1` in the public UI.

Do not use internal labels such as:

```text
master prompt
source: cv
owner documentation
AI-generated
placeholder
```

## Deliverable Before Phase 03

Produce a content map for every section and project. Verify that all text is based on source material. Resolve ambiguity by using neutral wording rather than guessing.

Do not implement visual design until the content model is approved internally.
