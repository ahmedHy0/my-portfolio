# DATA ENGINEER PORTFOLIO — MASTER BUILD PROMPT

## Mission

You are a senior product designer, creative frontend engineer, motion designer, accessibility specialist, and production QA engineer.

Build a complete, premium, highly distinctive **Data Engineer Portfolio** from the existing project folder and its provided assets.

The final website must feel like a real, high-end data platform interface combined with a personal professional portfolio. It must be visually exceptional, technically polished, responsive, accessible, fast, honest, and free from unfinished or AI-generated-looking content.

The quality target is intentionally extreme: **contest-level, memorable, cinematic, and refined**. However, do not confuse “more effects” with better design. Every visual effect must support hierarchy, data storytelling, navigation, or interaction.

The final result should feel like:

> **A living data infrastructure map that tells the story of the engineer behind the pipelines.**

Do not build a generic dashboard template, a neon hacker website, a random 3D experiment, or a collection of disconnected animations.

---

# 1. Existing Folder Structure

The project folder currently contains approximately:

```text
project-root/
├── Assets/
│   ├── CV file
│   └── personal portrait
├── project_1/
│   └── about
├── project_2/
│   └── about
└── project_3/
    └── about
```

Before writing code:

1. Inspect the complete repository tree.
2. Locate the exact CV filename and file type.
3. Locate and inspect the personal image.
4. Inspect every file inside `project_1`, `project_2`, and `project_3`.
5. Read every `about` file and extract:
   - Project name.
   - Project purpose.
   - Technologies.
   - Data sources.
   - Pipeline or architecture details.
   - Results or outcomes.
   - Repository/demo links.
   - Any screenshots or visual assets.
6. Do not invent missing details.
7. If the `about` file is incomplete, use honest neutral wording instead of fabricating metrics or production claims.
8. Preserve the original assets and do not overwrite them.

The project folders are the source of truth for the portfolio project content.

---

# 2. Important Content Rules

The public website must sound human, specific, and credible.

Do not use:

- Generic AI-generated phrases.
- Empty claims such as “passionate about data” without evidence.
- “Cutting-edge,” “seamless,” “revolutionary,” “robust solution,” or “leveraging innovative technologies” unless genuinely justified.
- Fake years of experience.
- Fake users, rows, data volumes, latency numbers, uptime, cost savings, or performance benchmarks.
- Fake enterprise clients.
- Fake certification details.
- Fake live dashboards.
- Fake real-time data.
- Fake production-readiness claims.
- Internal prompt language.
- Source/provenance notes visible to visitors.
- Placeholder copy.
- Debug labels.
- Excessive “AI” terminology.

Use the CV and project `about` files to write concise, natural, first-person or third-person copy consistent with the real person’s background.

If a project is a personal, academic, or training project, label it honestly as such where relevant.

---

# 3. Design Concept

## Core Concept: DATA FLOW / OBSERVABILITY PORTFOLIO

The portfolio should feel like a sophisticated data system with a human operator behind it.

Visual metaphors may include:

- Data streams.
- Pipeline nodes.
- Warehouse layers.
- Schema relationships.
- Lineage paths.
- Event timelines.
- Query results.
- Batch and streaming states.
- Observability signals.
- Data quality indicators.
- Architecture maps.

These metaphors must remain readable and restrained. Do not make the visitor decode the entire site like a game.

## Visual Personality

Create an original design system based on:

- Deep graphite / midnight backgrounds.
- Electric aqua and glacier blue for data flow.
- Emerald or mint for healthy pipeline states.
- Warm amber for warnings and data-quality attention.
- Coral/red only for errors or failed pipeline states.
- Violet or indigo for warehouse / intelligence layers.
- Soft white and blue-gray for readable content.

Suggested token direction:

```css
--bg-0: #05080d;
--bg-1: #0a111b;
--bg-2: #101c29;
--surface: rgba(16, 28, 41, 0.78);
--aqua: #42e8e0;
--cyan: #55c7ff;
--mint: #83f7c0;
--amber: #ffc857;
--coral: #ff6b6b;
--violet: #9b8cff;
--text-0: #f4f8fb;
--text-1: #c4d1dc;
--text-2: #8294a6;
--line: rgba(150, 190, 215, 0.16);
```

You may improve these values, but establish a consistent token system and do not scatter random colors across components.

## Typography

Use a sophisticated type pairing:

- Display font: modern grotesk or precise editorial sans-serif.
- Body: highly readable variable sans-serif.
- Data labels: restrained monospace or tabular font.

Use monospace for small metadata, schema labels, timestamps, query snippets, and pipeline states—not for long paragraphs.

## Background System

Build a layered background with:

- Very subtle grid or graph paper.
- Fine data-line paths.
- Sparse animated particles or flow points.
- Light noise texture if performance permits.
- Soft gradient glows around active data nodes.
- Section-specific data motifs.

The background must never reduce text contrast or make the site feel noisy.

---

# 4. Information Architecture

Use a clear, recruiter-friendly structure. You may improve names, but preserve the meaning:

1. Intro / Initialize Data Session
2. Hero / Data Engineer Identity
3. About / Engineer Profile
4. Skills / Data Stack
5. Experience or Education
6. Certifications
7. Projects / Pipeline Case Studies
8. Data Architecture Playground or Pipeline Replay
9. Contact / Open to Opportunities

If the CV does not contain real employment experience, do not invent an Experience section. Use `Education`, `Training`, `Background`, or `Journey` based on the actual content.

The main navigation must remain simple and obvious.

Suggested labels:

```text
ABOUT
STACK
BACKGROUND
CERTIFICATIONS
PROJECTS
CONTACT
```

Avoid using too many abstract labels that make the website difficult to understand.

---

# 5. Required Page Experience

## Phase 1 — Data Session Intro

Create a short, skippable intro inspired by a data pipeline initialization:

```text
> initializing profile stream .......... OK
> loading engineering context .......... OK
> indexing project pipelines ........... OK
> opening public portfolio ............. READY
```

Rules:

- Maximum duration: approximately 0.8–1.5 seconds.
- A visible `Skip intro` control must work immediately.
- Never block content access.
- Reduced-motion mode should skip or almost instantly fade the intro.
- Do not pretend to connect to real infrastructure.
- Do not show fake live metrics.

Transition from the intro into the hero using a polished data-line reveal or mask animation.

## Phase 2 — Hero / Data Engineer Identity

The hero must answer immediately:

- Who is this person?
- What kind of data engineer is he?
- What does he work with?
- What should the visitor do next?

Include:

- Full name.
- Accurate role or target role from the CV.
- One specific positioning statement.
- Primary CTA: `View projects`.
- Secondary CTA: `Download CV`.
- Optional CTA: `Contact me`.
- Portrait from the provided Assets folder.
- A visual pipeline or lineage diagram that connects the portrait/profile to data systems.

Example visual metadata, only if truthful and useful:

```text
FOCUS
DATA ENGINEERING

STACK
PYTHON · SQL · CLOUD · ETL

STATUS
OPEN TO OPPORTUNITIES
```

Do not add fake values such as “10B rows processed” or “99.99% uptime.”

### Hero Motion

- Data paths draw themselves once.
- Nodes activate in sequence.
- The portrait may receive a restrained scan or gradient treatment.
- On hover/focus, nearby data nodes respond subtly.
- The title should reveal as a clear typographic composition, not as a slow typewriter paragraph.
- Avoid constant flashing, heavy chromatic aberration, or aggressive glitch.

## Phase 3 — About / Engineer Profile

Present a concise, human profile based on the CV.

Add a visual split between:

- Human background and working style.
- Engineering focus and data systems.

Potential evidence tags, only when supported by the CV:

```text
DATA MODELING
ETL / ELT
SQL
PYTHON
CLOUD
ORCHESTRATION
DATA QUALITY
ANALYTICS ENGINEERING
```

Use a small animated flow showing:

```text
SOURCE → TRANSFORM → STORE → SERVE
```

The diagram must have an accessible text equivalent.

## Phase 4 — Skills / Data Stack

Create a rich but readable stack section.

Group skills into relevant domains based on actual CV content, for example:

- Languages
- Databases
- ETL / ELT
- Orchestration
- Cloud & Infrastructure
- Analytics & BI
- Data Quality & Governance
- Developer Tools

Do not add technologies not present in the CV, project descriptions, or verifiable source material.

### Interaction

- Skill groups can expand into connected nodes or cards.
- Selecting a technology may show projects where it appears.
- Use graceful hover/focus behavior.
- On mobile, use accordions or clean cards instead of a dense network map.
- Do not show fake proficiency percentages.
- If skill levels are not documented, use category labels without invented ratings.

## Phase 5 — Background / Education / Experience

Use whichever content is supported by the CV.

Possible presentation:

- Data lineage timeline.
- Career / education checkpoints.
- Learning milestones.
- Training and professional development.

Each item should include:

- Date or period, if known.
- Organization or institution.
- Role, course, or qualification.
- One concise description.

Motion should reveal the timeline like a lineage path, but the full content must remain accessible without animation.

## Phase 6 — Certifications

Create a clean certification archive based only on the CV/assets.

For each certificate, show:

- Certificate name.
- Issuer.
- Date/year if available.
- Verification link or identifier only if actually provided.
- Honest status when relevant.

Use a professional card or expandable row system.

Do not use:

```text
owner documentation
master prompt
source: cv
no credential ID published
verified
```

unless a real verification state exists and the wording is accurate.

## Phase 7 — Projects / Pipeline Case Studies

This is the central portfolio section.

Read all three project folders and create one case study per project.

Each project card should include:

```text
PROJECT NAME
CATEGORY
ONE-LINE OUTCOME
TECHNOLOGIES
PROJECT PREVIEW
VIEW DETAILS
VIEW SOURCE
LIVE DEMO — only if a real demo exists
```

Do not display internal folder names such as `project_1` unless they are replaced with the actual project title.

### Project Details View

Use an accessible modal, drawer, or route with:

- Project context.
- Problem being solved.
- Data sources.
- Pipeline stages.
- Architecture diagram.
- Technologies.
- Data quality or reliability considerations if documented.
- Results or output if documented.
- Screenshots from the project folder.
- Repository/demo link.

### Pipeline Visualization

For each project, create a visual flow when the information supports it:

```text
INGEST → VALIDATE → TRANSFORM → STORE → SERVE
```

Or adapt it to the real project architecture.

Animate data packets using lightweight SVG/CSS transforms. Provide a static text version and do not fake real-time execution.

### Project Honesty

Never upgrade:

- Personal project into enterprise platform.
- Prototype into production system.
- Screenshot into live demo.
- A concept into a deployed service.
- A sample dataset into a real business outcome.

Use neutral labels such as `Personal project`, `Training project`, `Prototype`, or `Case study` when accurate.

## Phase 8 — Optional Pipeline Replay

If the project data supports it, create one small interactive demonstration:

1. Display a sample input.
2. Show validation or ingestion.
3. Show transformation.
4. Show storage/output.
5. Show a final data-quality or pipeline status.

Label it clearly as:

```text
INTERACTIVE DEMONSTRATION USING SAMPLE DATA
```

Do not pretend to connect to real databases or cloud services.

If this is not supported by the project information, create a static architecture walkthrough instead.

## Phase 9 — Contact / Open to Opportunities

End with a strong but natural professional CTA:

```text
OPEN TO OPPORTUNITIES
```

Use a paragraph based on the CV and actual target roles.

Include:

- Email.
- LinkedIn if available.
- GitHub if available.
- CV download.

Do not turn this into an invented consulting business unless the CV clearly supports that.

Avoid unnecessary UI labels such as:

```text
system // portfolio
profile: public
primary channel: email
documents: cv.pdf
pdf // opens in new tab
```

Use direct labels:

```text
Email
LinkedIn
GitHub
Download CV
```

---

# 6. Motion and Transition System

The design should be full of refined motion, but never chaotic.

## Motion principles

- Motion communicates data flow, hierarchy, state, or navigation.
- Motion must not hide content.
- Motion must be consistent across the site.
- No autoplay audio.
- No endless distracting animations.
- No interaction should depend only on hover.
- Use `transform` and `opacity` where possible.
- Avoid animating layout-heavy properties.

## Motion tiers

```text
Micro-interactions: 120–220ms
Component reveals: 350–650ms
Major transitions: 650–1000ms maximum
```

Suggested easing:

```css
--ease-out: cubic-bezier(0.22, 1, 0.36, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
```

## Suggested signature interactions

- Hero data nodes activate when the page loads.
- Pipeline lines draw between sections.
- Scroll reveals follow the direction of data flow.
- Project cards emit a subtle lineage path toward their details.
- Architecture diagrams animate only when visible.
- Buttons show a small data-packet movement on hover/focus.
- Copy-email action displays a concise success state.
- Active navigation shows a moving signal indicator.

## Reduced motion

Implement a complete reduced-motion strategy:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Adapt this to the selected framework and ensure content remains visible.

---

# 7. Custom Cursor

A custom cursor is allowed on desktop only if it improves the experience.

Requirements:

- Disable on touch devices and small screens.
- Never block clicking or text selection.
- Maintain a visible native/focus state for keyboard users.
- Keep it lightweight.
- Use labels only on meaningful interactive elements, such as `Inspect`, `Open`, or `View source`.
- Do not turn the cursor into a distracting particle trail.

---

# 8. Latest Stable Technology Selection

Before implementation, inspect the current repository and choose the most appropriate **currently stable, well-supported framework and tooling** available in the environment.

Prefer a modern production stack such as:

- React with Vite and TypeScript for a client-side portfolio, or
- Next.js with TypeScript only if SSR/SEO/routing benefits justify the additional complexity.

Use the current stable versions available in the environment rather than blindly upgrading everything.

Preferred principles:

- TypeScript.
- Component-driven architecture.
- Data-driven content models.
- Modern CSS with tokens and responsive layout.
- Lightweight motion tooling or the project’s existing motion library.
- Semantic HTML.
- No unnecessary dependency explosion.

Do not migrate frameworks merely because a newer framework exists. A stable existing project may be safer and better.

---

# 9. Responsive and Accessibility Requirements

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

Required:

- No horizontal overflow.
- Mobile-first layout.
- Comfortable touch targets of at least 44×44px.
- No hover-only content.
- Project modals become readable full-screen sheets on mobile.
- Architecture diagrams become vertical or scrollable in a controlled way.
- Navigation remains simple.
- The name, role, projects, and CTA remain easy to find.
- Respect safe areas and browser zoom.
- No text clipping or overlapping labels.

Accessibility:

- Semantic landmarks.
- One meaningful `h1`.
- Ordered heading hierarchy.
- Accurate image alt text.
- Keyboard navigation.
- Visible focus states.
- Dialog focus trapping and restoration.
- Correct ARIA for accordions/tabs/dialogs.
- Color is not the only state indicator.
- Reduced motion.
- Content does not depend on JavaScript animation completion.

---

# 10. Performance and Security Requirements

Optimize for a fast portfolio:

- Use modern image formats where possible.
- Preserve image dimensions to avoid layout shift.
- Lazy-load below-the-fold images.
- Avoid excessive blur, filters, and large shadow layers.
- Keep animated backgrounds lightweight.
- Avoid giant canvas/3D systems unless strictly justified.
- Remove unused dependencies.
- Do not include secrets in the client bundle.
- Do not expose local filesystem paths.
- Use safe external links with appropriate `rel` attributes.
- Avoid unsafe HTML injection.
- Do not include analytics or external services without explicit configuration and privacy consideration.

---

# 11. Required Multi-Phase Workflow

## Phase A — Repository Audit

- Inspect all files and folders.
- Read CV and all project `about` files.
- Inventory images and links.
- Identify current framework and scripts.
- Run the existing app.
- Record current build and lint status.

## Phase B — Content Model

Create structured data for:

- Profile.
- Navigation.
- Skills.
- Background / education / experience.
- Certifications.
- Projects.
- Contact links.

Keep content separate from presentation where practical.

## Phase C — Design System

Define:

- Color tokens.
- Typography.
- Spacing scale.
- Border/radius system.
- Motion tokens.
- Breakpoints.
- Data visualization styles.
- Focus and interaction states.

## Phase D — Implementation

Build section by section. After every major section:

1. Run the app.
2. Inspect the section visually.
3. Check responsive behavior.
4. Check keyboard behavior.
5. Check console warnings/errors.
6. Fix issues before continuing.

## Phase E — Motion and Interaction Pass

Add purposeful transitions only after static layout and content are correct.

Check:

- Fast scrolling.
- Repeated modal open/close.
- Refresh during animation.
- Back/forward navigation.
- Reduced-motion mode.
- Touch behavior.

## Phase F — Content and Human-Polish Pass

Read every visible line as a recruiter and as a real person.

Remove:

- AI-sounding filler.
- Repeated abstract labels.
- Internal notes.
- Prompt language.
- Unnecessary source labels.
- Unsupported claims.
- Placeholder content.

## Phase G — Final QA and Cleanup

Run:

```bash
npm run build
npm run lint
npm run test
```

Run any available package audit command.

Check:

- No console errors.
- No broken images.
- No broken links.
- No horizontal overflow.
- No unused imports.
- No accidental secrets.
- No temporary files in the production repository.
- No unnecessary Markdown or prompt files in the public app.

Do not delete project files blindly. Remove only files proven to be unused or temporary.

## Phase H — Final Visual Review

Inspect the full page at desktop and mobile sizes.

Review:

- First impression.
- Visual rhythm.
- Typography.
- Contrast.
- Section transitions.
- Project storytelling.
- Image cropping.
- Modal usability.
- Contact conversion.
- Overall uniqueness.

---

# 12. Acceptance Criteria

The project is complete only when:

- The portfolio is clearly for a real Data Engineer.
- The visual identity is original, premium, and data-specific.
- The site does not look like a generic dashboard or AI-generated template.
- All content comes from the CV, provided assets, or project `about` files.
- All three projects are presented as credible case studies.
- Images and CV are correctly integrated.
- The interface feels rich without becoming confusing.
- Animations and transitions are polished and purposeful.
- The custom cursor is restrained and disabled on touch devices.
- Mobile is as carefully designed as desktop.
- Accessibility requirements pass.
- The build and lint checks pass.
- No visible placeholder, debug, prompt, source-note, or internal metadata remains.
- No fake metrics, fake live data, or unsupported professional claims remain.
- The final CTA is clear and honest.

---

# 13. Final Agent Report

When complete, report:

1. Framework and tooling selected, with justification.
2. Files inspected and content sources used.
3. Files changed and created.
4. Assets integrated.
5. Sections implemented.
6. Interactions and animations implemented.
7. Responsive widths tested.
8. Accessibility checks completed.
9. Performance checks completed.
10. Build/lint/test results.
11. Links and project sources verified.
12. Any assumptions made because the CV or project files lacked information.
13. Any remaining issue.

Do not claim “perfect,” “production-ready,” “real-time,” or “enterprise-grade” unless the evidence and tests support it.

## Start Command

Start by auditing the repository and reading the CV, portrait, project folders, and `about` files. Do not begin visual implementation until the content inventory and technical audit are complete. Then execute the phases in order, reviewing the code after every major phase and fixing all discovered issues before proceeding.
