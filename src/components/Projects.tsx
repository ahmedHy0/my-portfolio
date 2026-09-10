import { useState } from 'react'
import { projects, type Project } from '../data/content'
import { ProjectModal } from './ProjectModal'

type OpenState = { project: Project; origin: DOMRect } | null

/**
 * Projects / Pipeline case studies. Cards carry the summary; full details open
 * in an accessible modal (focus trap, Escape, overlay close, focus restore).
 * "View details" is a real button — no hover-only disclosure.
 */
export function Projects() {
  // The origin rect lets the modal expand out of the card's own thumbnail
  // and shrink back into it on close.
  const [open, setOpen] = useState<OpenState>(null)

  const openFrom = (project: Project, card: HTMLElement | null) => {
    const img = card?.querySelector('img')
    setOpen({ project, origin: img?.getBoundingClientRect() ?? card?.getBoundingClientRect() ?? new DOMRect() })
  }

  // Whole card opens the case study; clicks on links/buttons inside keep their own behavior.
  const openFromCard = (project: Project) => (e: React.MouseEvent<HTMLElement>) => {
    if ((e.target as HTMLElement).closest('a, button')) return
    openFrom(project, e.currentTarget)
  }

  return (
    <section className="section projects" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <p className="data-label section__eyebrow">05 — Pipeline case studies</p>
        <h2 id="projects-title">Projects</h2>
        <p className="section__intro">
          Three personal projects I built and documented while training — each one followed from
          raw data to finished output.
        </p>

        <div className="projects__grid" data-reveal>
          {projects.map((project) => (
            <article
              key={project.id}
              className="card card--interactive project"
              id={project.id}
              onClick={openFromCard(project)}
            >
              <div className="project__body">
                <div className="project__chips">
                  <span className="chip chip--accent">{project.projectType}</span>
                  <span className="chip">{project.category}</span>
                </div>
                <h3 className="project__title">
                  <button type="button" className="project__title-btn" onClick={(e) => openFrom(project, e.currentTarget.closest('.project'))} aria-haspopup="dialog">
                    {project.title}
                    {project.titleSuffix && (
                      <span className="project__title-suffix"> — {project.titleSuffix}</span>
                    )}
                  </button>
                </h3>
                <p className="project__one-liner">{project.oneLiner}</p>

                <ul className="project__stack" aria-label="Core technologies">
                  {project.primaryTech.map((t) => (
                    <li key={t} className="project__stack-pill">
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="project__actions">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={(e) => openFrom(project, e.currentTarget.closest('.project'))}
                    aria-haspopup="dialog"
                  >
                    View details
                  </button>
                  {project.links[0] && (
                    <a
                      className="btn btn-secondary"
                      href={project.links[0].href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.links[0].label}
                    </a>
                  )}
                </div>
              </div>

              <button
                type="button"
                className="project__media"
                onClick={(e) => openFrom(project, e.currentTarget)}
                aria-haspopup="dialog"
                aria-label={`View details: ${project.title}`}
              >
                <img
                  src={project.preview.src}
                  alt={project.preview.alt}
                  width={project.preview.width}
                  height={project.preview.height}
                  loading="lazy"
                />
              </button>
            </article>
          ))}
        </div>
      </div>

      {open && (
        <ProjectModal
          project={open.project}
          origin={open.origin}
          onClose={() => setOpen(null)}
        />
      )}
    </section>
  )
}
