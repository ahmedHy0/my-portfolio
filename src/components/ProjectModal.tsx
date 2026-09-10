import { useEffect, useRef, useState } from 'react'
import type { Project } from '../data/content'
import { useScrollLock } from '../hooks'

const CLOSE_MS = 350

/**
 * Accessible project case-study dialog. The modal expands out of the card's
 * own thumbnail on open (translate + scale from the thumbnail's position) and
 * shrinks back into it on close before unmounting. Focus is trapped while
 * open, Escape / X / overlay close all animate out, and focus returns to the
 * opener. The pipeline flow animates with CSS only — an illustrative,
 * controlled sequence, never presented as live execution; the static text
 * equivalent stays visible at all times.
 */
export function ProjectModal({
  project,
  origin,
  onClose,
}: {
  project: Project
  origin: DOMRect
  onClose: () => void
}) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const [closing, setClosing] = useState(false)

  const requestClose = () => setClosing(true)

  useEffect(() => {
    if (!closing) return
    const t = window.setTimeout(onClose, CLOSE_MS)
    return () => window.clearTimeout(t)
  }, [closing, onClose])

  useScrollLock(true)

  useEffect(() => {
    // Restore focus to whatever opened the dialog when it unmounts.
    const opener = document.activeElement as HTMLElement | null
    const dialog = dialogRef.current
    const focusables = () =>
      Array.from(
        dialog?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      )
    focusables()[0]?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        requestClose()
        return
      }
      if (e.key !== 'Tab') return
      const items = focusables()
      if (items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      opener?.focus()
    }
  }, [])

  // Expand origin: offset from the screen center and scale relative to the
  // modal width, so the thumbnail appears to grow into the centered dialog.
  const dx = origin.left + origin.width / 2 - window.innerWidth / 2
  const dy = origin.top + origin.height / 2 - window.innerHeight / 2
  const scale = Math.min(origin.width / 680, 1)

  return (
    <div
      className="modal-overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) requestClose()
      }}
    >
      <div
        ref={dialogRef}
        className={`modal project-modal${closing ? ' is-closing' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        style={
          {
            '--modal-dx': `${dx}px`,
            '--modal-dy': `${dy}px`,
            '--modal-scale': scale,
          } as React.CSSProperties
        }
      >
        <button className="modal__close" type="button" onClick={requestClose} aria-label="Close project details">
          ✕
        </button>

        <p className="data-label">Pipeline case study</p>
        <h3 id="project-modal-title" className="project-modal__title">
          {project.title}
          {project.titleSuffix && <span className="project__title-suffix"> — {project.titleSuffix}</span>}
        </h3>

        <div className="project__chips">
          <span className="chip chip--accent">{project.projectType}</span>
          <span className="chip">{project.category}</span>
        </div>

        <img
          className="project-modal__media"
          src={project.preview.src}
          alt={project.preview.alt}
          width={project.preview.width}
          height={project.preview.height}
        />

        <p className="project-modal__purpose">{project.purpose}</p>

        <section aria-label="Pipeline stages">
          <p className="data-label">Pipeline flow — illustrative, not a live system</p>
          <div className="pipeline" role="img" aria-label={`Pipeline stages: ${project.pipelineStages.join(' → ')}`}>
            <ol className="pipeline__stages">
              {project.pipelineStages.map((stage, i) => (
                <li key={stage} className="pipeline__stage" style={{ '--stage': i } as React.CSSProperties}>
                  <span className="pipeline__node" aria-hidden="true" />
                  <span className="pipeline__label mono">{stage}</span>
                </li>
              ))}
            </ol>
          </div>
          <p className="project-modal__pipeline-text mono">{project.pipelineText}</p>
        </section>

        <section aria-label="Highlights">
          <p className="data-label">Highlights</p>
          <ul className="project__highlights">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </section>

        <section aria-label="Technologies">
          <p className="data-label">Technologies</p>
          <div className="project__tech">
            {project.technologies.map((tech) => (
              <div key={tech.group} className="project__tech-group">
                <p className="data-label">{tech.group}</p>
                <ul className="project__tech-items">
                  {tech.items.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {project.links.length > 0 && (
          <div className="project__links">
            {project.links.map((link) => (
              <a
                key={link.label + link.href}
                className="btn btn-secondary"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
