import model from '../../content/content-model.json'

/**
 * Typed view over the Phase 02 content model — the single source of truth
 * for all public copy. Fields prefixed with `_` in the JSON are build-time
 * metadata and are deliberately not re-exported here.
 */

export const profile = {
  fullName: model.profile.full_name,
  shortName: model.profile.short_name,
  roleLine: model.profile.role_line,
  roleQualifier: model.profile.role_qualifier,
  location: model.profile.location,
  availability: model.profile.availability,
}

export const hero = {
  eyebrow: model.hero.eyebrow,
  name: model.hero.name,
  roleLine: model.hero.role_line,
  roleQualifier: model.hero.role_qualifier,
  positioning: model.hero.positioning_statement,
  metadata: model.hero.metadata,
  ctas: model.hero.ctas,
  portrait: { src: '/profile.jpg', alt: model.hero.portrait.alt, width: 400, height: 400 },
}

export const intro = {
  lines: model.intro.lines.map((line) => line.text),
}

export const about = {
  humanParagraph: model.about.human_paragraph,
  engineeringParagraph: model.about.engineering_paragraph,
  flow: model.about.flow_diagram.steps,
  flowText: model.about.flow_diagram.text_equivalent,
  evidenceTags: model.about.evidence_tags,
}

export const skillGroups = model.skills.groups
export const spokenLanguages = model.skills.spoken_languages

export const background = {
  timeline: model.background.entries,
  practiceProjects: model.background.practice_projects,
  activities: model.background.activities,
}

export const certifications = model.certifications

export type ProjectLink = { label: string; href: string }

export type Project = {
  id: string
  title: string
  titleSuffix?: string
  category: string
  projectType: string
  oneLiner: string
  purpose: string
  technologies: Array<{ group: string; items: string[] }>
  primaryTech: string[]
  highlights: string[]
  pipelineStages: string[]
  pipelineText: string
  links: ProjectLink[]
  preview: { src: string; alt: string; width: number; height: number }
}

/** Project 1 has a verified repository; projects 2–3 link to the GitHub profile. */
function projectLinks(
  repository: string | null,
  profileFallback: string | undefined,
): ProjectLink[] {
  if (repository) return [{ label: 'View source', href: repository }]
  if (profileFallback) return [{ label: 'GitHub profile', href: profileFallback }]
  return []
}

export const projects: Project[] = model.projects.map((p) => ({
  id: p.id,
  title: p.title,
  titleSuffix: p.title_suffix,
  category: p.category,
  projectType: p.project_type,
  oneLiner: p.one_liner,
  purpose: p.purpose,
  technologies: p.technologies,
  // 4-5 core tools shown as pills on the card; the full stack lives in the modal.
  primaryTech: {
    'smartphone-specification-analysis': ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Jupyter'],
    'dataflow-monitor': ['Python', 'FastAPI', 'Apache Airflow', 'Apache Kafka', 'Docker'],
    'businessinsights-hub': ['Apache Airflow', 'dbt', 'Python', 'PostgreSQL', 'Docker'],
  }[p.id] ?? p.technologies.flatMap((t) => t.items).slice(0, 5),
  highlights: p.highlights,
  pipelineStages: p.pipeline.stages,
  pipelineText: p.pipeline.text_equivalent,
  links: projectLinks(p.links.repository, p.links.github_profile_fallback),
  preview: {
    src: `/projects/${p.id === 'smartphone-specification-analysis' ? 'smartphone-spec-analysis' : p.id}.webp`,
    alt: p.preview.alt,
    width: p.preview.dimensions === '1672x941' ? 1672 : 1344,
    height: p.preview.dimensions === '1672x941' ? 941 : 768,
  },
}))

export const contact = {
  heading: model.contact.heading,
  subtitle: model.contact.subtitle,
  statement: model.contact.statement,
  location: model.contact.location,
  links: model.contact.links.map((l) => ({
    label: l.label,
    display: l.display,
    href: l.href === 'asset:cv' ? '/cv.pdf' : l.href,
    external: !l.href.startsWith('mailto:'),
    download: l.href === 'asset:cv',
  })),
}

export const navItems = model.information_architecture.page_sections
  .filter((s) => s.in_nav)
  .map((s) => ({ id: s.id, label: s.nav_label }))
