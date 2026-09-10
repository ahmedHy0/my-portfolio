# Phase 05 — Motion, Transitions, and Interactive Data Flow

## Objective

Add refined, purposeful motion after the static layout is stable.

## Motion Language

Motion should communicate:

- Data flow.
- Lineage.
- State changes.
- Hierarchy.
- Navigation.
- Progressive disclosure.

Use these tiers:

```text
Micro-interactions: 120–220ms
Component reveals: 350–650ms
Major transitions: 650–1000ms maximum
```

Use transform/opacity where possible and avoid layout-heavy animation.

## Required Interactions

- Skippable data-session intro.
- Hero pipeline nodes activate once.
- Data lines draw when relevant sections enter view.
- Skill groups expand or highlight related projects.
- Certification rows/cards open accessibly.
- Project case studies open in accessible modal, drawer, or route.
- Pipeline diagram shows a controlled sample flow.
- Buttons have refined hover/focus states.
- Email copy interaction gives a truthful success state.
- Custom cursor, if used, is desktop-only and disabled on touch devices.

## Restrictions

Do not use:

- Long blocking intro.
- Constant flashing.
- Heavy particle fields.
- Auto-playing audio.
- Glitch everywhere.
- Fake real-time telemetry.
- Hover-only information.
- Random 3D/WebGL complexity.

## Accessibility

Implement reduced-motion behavior and ensure all content remains available if animations are interrupted or disabled.

Check modal focus trap, Escape close, focus restoration, keyboard navigation, touch behavior, and repeated open/close cycles.

## Deliverable Before Phase 06

Run the app and test fast scrolling, refresh during animation, repeated modal interactions, mobile touch, keyboard navigation, and reduced-motion mode. Fix all discovered issues before proceeding.
