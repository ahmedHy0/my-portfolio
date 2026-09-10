# Data Engineer Portfolio — Design System and Logo Addendum

## Important Asset Update

The `Assets` folder also contains the personal brand logo. Treat the logo as a primary brand asset, not as an optional decorative image.

Before implementation:

1. Locate the logo file inside `Assets`.
2. Inspect its dimensions, format, transparency, colors, and visual shape.
3. Preserve the original logo file.
4. Do not recolor or distort it destructively.
5. Use the logo as the source of truth for the final visual identity.
6. Extract or harmonize the website accent colors with the logo instead of placing the logo on an unrelated palette.
7. If the logo has a light and dark variant, choose the variant with the best contrast for each surface.
8. If the logo is not suitable for a small favicon, create a simplified favicon/monogram derived from the same logo language. Do not invent an unrelated icon.

Do not place the logo inside a noisy animation or hide it behind an unnecessary intro effect. It should remain recognizable.

---

# Project Experience Flow

The portfolio should tell one coherent story from the first second to the final CTA. The visitor should understand the person, the engineering focus, and the project evidence without needing to decode a complicated dashboard.

## Stage 1 — Initialize the Data Session

Purpose: establish the world and visual language quickly.

Visual behavior:

- A brief data-stream initialization.
- A few restrained pipeline lines and nodes.
- The logo appears first or is used as the central identity marker.
- Short status lines may appear, but they must be visitor-facing and not imply a real connection to infrastructure.

Suggested sequence:

```text
PROFILE STREAM: READY
ENGINEERING CONTEXT: LOADED
PROJECT PIPELINES: INDEXED
PUBLIC PORTFOLIO: OPEN
```

Keep this under approximately 0.8–1.5 seconds and provide `Skip intro` immediately.

## Stage 2 — Hero: The Engineer Behind the Pipeline

Purpose: communicate identity, role, focus, and next action.

Composition:

- Logo and name establish the brand.
- Portrait introduces the person.
- Main heading states the accurate Data Engineer role or target role.
- A visual pipeline connects the human identity to engineering concepts.
- Primary CTA goes to projects.
- Secondary CTA downloads the CV.
- Optional contact CTA goes to the real email/contact channel.

The Hero should answer these questions within a few seconds:

```text
Who is this?
What does he do?
What does he work with?
Where can I inspect his work?
```

Hero motion:

- Logo fade/scale-in: subtle and fast.
- Data-line drawing: one controlled reveal.
- Pipeline nodes activate in a logical order.
- Portrait receives a restrained gradient or scan treatment.
- CTA hover uses a small data-packet or line movement.

Do not use a long typewriter effect for the main paragraph.

## Stage 3 — About: From Human Context to Engineering Focus

Purpose: make the person memorable before showing a technology list.

Layout:

- Short human profile.
- Engineering focus.
- A simple flow such as:

```text
OBSERVE → MODEL → BUILD → DELIVER
```

- Small evidence tags connected to real CV content.

Motion:

- Text enters as readable blocks.
- The flow line draws once.
- Tags activate gently when they enter the viewport.

## Stage 4 — Skills: The Data Stack

Purpose: organize technologies so they feel like a system, not a random list.

Recommended group order:

```text
LANGUAGES
DATA STORAGE
ETL / ELT
ORCHESTRATION
CLOUD / INFRASTRUCTURE
DATA QUALITY
ANALYTICS / BI
DEVELOPER TOOLS
```

Only use groups supported by the CV and project files. If a group has no real content, omit it.

Interaction:

- Selecting a group highlights its node and related projects.
- On mobile, use accordions or stacked cards.
- Do not use fake proficiency percentages.

## Stage 5 — Background / Education / Experience

Purpose: show progression and credibility.

Use the terminology that matches the CV:

- `Experience` if real employment is documented.
- `Education` for academic background.
- `Training` for courses and learning.
- `Journey` only if it genuinely improves clarity.

Present the content as a data-lineage timeline:

```text
FOUNDATION → LEARNING → PRACTICE → PROJECTS → NEXT OPPORTUNITY
```

Do not label training as employment.

## Stage 6 — Certifications

Purpose: show validated learning without exaggeration.

Use an archive/grid/list that prioritizes:

- Name.
- Issuer.
- Date.
- Real verification link if available.

Use simple status words only when truthful:

```text
CONFIRMED
PENDING
VERIFICATION LINK
```

Do not expose internal source notes or AI/provenance language.

## Stage 7 — Projects: Pipeline Case Studies

Purpose: provide proof of practical work.

Each project should be presented as an understandable engineering story:

```text
PROBLEM → DATA INPUT → TRANSFORMATION → STORAGE / OUTPUT → RESULT
```

For each project:

1. Show the real project name from its `about` file.
2. Use the actual screenshot or image from the project folder.
3. Show technologies only when documented.
4. Explain what was built in concise language.
5. Show a pipeline/architecture visual if the source material supports it.
6. Provide the real source/demo link.
7. Label prototypes, personal projects, and training projects honestly.

The project modal/detail view should feel like a technical case study, not a fake live dashboard.

## Stage 8 — Optional Pipeline Replay

Only include this if the project files provide enough truthful information.

Use sample data and label it clearly:

```text
INTERACTIVE PIPELINE DEMONSTRATION — SAMPLE DATA
```

Flow:

```text
INPUT → VALIDATION → TRANSFORMATION → STORAGE → OUTPUT
```

This is a visual explanation, not a real connection to a production data platform.

## Stage 9 — Contact: Open to Opportunities

Purpose: convert interest into a professional next step.

Use:

```text
OPEN TO OPPORTUNITIES
```

Then a concise, CV-based statement and real contact links:

```text
EMAIL
LINKEDIN
GITHUB
DOWNLOAD CV
```

Avoid unnecessary system labels such as:

```text
system // portfolio
profile: public
primary channel: email
documents: cv.pdf
pdf // opens in new tab
```

---

# Color System

## Core Rule

The logo determines the exact brand direction. The palette below is the starting system for Data Engineering, but adjust the hue/saturation values to harmonize with the actual logo.

Use one dominant accent, one supporting accent, one health state, one warning state, and one intelligence/warehouse accent. Do not make every color equally bright.

## Recommended Palette

| Token | Hex | Meaning | Recommended use |
|---|---|---|---|
| `bg-0` | `#05080D` | Deep graphite | Main page background |
| `bg-1` | `#09121C` | Midnight blue | Sections and hero surfaces |
| `surface` | `#101D2A` | Elevated panel | Cards, modals, project sheets |
| `surface-soft` | `#142536` | Secondary panel | Nested cards and diagrams |
| `text-0` | `#F4F8FB` | Primary text | Headings and important copy |
| `text-1` | `#C4D1DC` | Secondary text | Paragraphs and descriptions |
| `text-2` | `#8294A6` | Muted text | Metadata and supporting labels |
| `aqua` | `#42E8E0` | Primary data flow | Brand accent, active nodes, main CTA |
| `cyan` | `#55C7FF` | Data movement | Links, lineages, active navigation |
| `mint` | `#83F7C0` | Healthy pipeline | Success, available, completed states |
| `amber` | `#FFC857` | Attention | Pending, warning, data-quality review |
| `coral` | `#FF6B6B` | Failure/error | Only genuine error or issue states |
| `violet` | `#9B8CFF` | Intelligence/warehouse | Analytics, architecture, deeper detail |

## Color Hierarchy

Use the palette approximately as follows:

```text
70% deep background and surfaces
20% text and neutral structure
7% primary aqua/cyan accents
2% mint or violet supporting accents
1% amber/coral only for meaningful states
```

Do not use coral/red as a general decorative color. It should mean something.

## Logo Color Guidance

### If the logo is aqua/cyan

Use:

- Aqua as the primary accent.
- Blue-cyan as the secondary flow color.
- Mint for healthy pipeline states.
- Violet only in deep architecture sections.

### If the logo is green/mint

Use:

- Mint as the brand accent.
- Aqua for data flow.
- Deep blue surfaces to keep the logo premium.
- Amber for warnings.

### If the logo is blue

Use:

- Cyan or glacier blue as the primary accent.
- Aqua for active flow.
- Mint for success.
- Violet for warehouse/intelligence layers.

### If the logo is monochrome white

Use:

- White logo on deep graphite surfaces.
- Aqua as the website interaction accent.
- Mint and amber only for states.
- Do not recolor the logo unless a real brand variant exists.

### If the logo contains multiple colors

Choose one dominant logo color for:

- Primary CTA.
- Active navigation.
- Section markers.
- Pipeline nodes.

Use the remaining logo colors sparingly as supporting accents. Do not reproduce every logo color in every section.

## Logo Placement

Use the logo in:

1. Header/navigation, with a readable brand name or accessible label.
2. Intro, as the identity anchor.
3. Footer, as a quiet closing mark.
4. Favicon, using a simplified mark if necessary.

Do not repeat a large logo in every section. Avoid stretching, cropping, or placing it on a low-contrast background.

## Gradient Guidance

Use gradients as controlled atmosphere, not as the main content:

```css
background: linear-gradient(135deg, rgba(66, 232, 224, 0.16), rgba(85, 199, 255, 0.04));
```

Possible logo-harmonized gradients:

```text
Aqua → Cyan: data flow
Cyan → Violet: architecture / intelligence
Mint → Aqua: healthy pipeline
Amber → Coral: warning/error only
```

Avoid rainbow gradients, saturated purple/pink defaults, and gradients behind long paragraphs.

---

# Logo and Favicon Requirements

- Use the provided logo as the brand source.
- Keep the original aspect ratio.
- Provide adequate clear space around it.
- Ensure WCAG-friendly contrast where possible.
- Use a simplified mark for favicon if the full logo is unreadable at small sizes.
- Verify favicon, browser tab, social preview, header, intro, and footer.
- Do not use a generic database icon or random AI-generated symbol as a replacement.
- Do not expose the source filename as visible UI text.

---

# Final Design QA Questions

Before declaring the project complete, answer these questions visually:

1. Does the logo feel like the source of the entire design system?
2. Can a recruiter understand the person and role within five seconds?
3. Does every animation communicate flow, state, hierarchy, or navigation?
4. Are the colors meaningful rather than decorative noise?
5. Do the projects look like evidence of engineering work, not fake dashboards?
6. Is the mobile layout as intentional as desktop?
7. Can a keyboard and reduced-motion user complete every task?
8. Does the final contact section feel natural and professional?
9. Is any text clearly an internal note, prompt artifact, placeholder, or AI-generated filler?
10. Is every public claim supported by the CV, assets, or project `about` files?

If any answer is no, fix it before final validation.
