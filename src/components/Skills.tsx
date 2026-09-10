import { useMemo, useState } from 'react'
import { skillGroups, projects } from '../data/content'

/**
 * Skills / Data Stack. Every technology is a toggle button (keyboard and touch
 * equal to hover): selecting it highlights the matching items and reveals the
 * projects where the technology appears. Hover alone never carries information.
 */
export function Skills() {
  const [selected, setSelected] = useState<string | null>(null)

  const projectsUsing = useMemo(() => {
    if (!selected) return []
    return projects.filter((p) => p.technologies.some((t) => t.items.includes(selected)))
  }, [selected])

  const toggle = (item: string) => setSelected((cur) => (cur === item ? null : item))

  return (
    <section className="section skills" id="stack" aria-labelledby="stack-title">
      <div className="container">
        <p className="data-label section__eyebrow">04 — Skills</p>
        <h2 id="stack-title">Skills</h2>
        <p className="section__intro">
          Core tools and technologies I use for pipeline and warehouse work. Select any technology
          to see where it appears in my projects.
        </p>

        <div className="skills__grid" data-reveal>
          {skillGroups.map((group) => (
            <article key={group.id} className="card skill-group">
              <h3 className="skill-group__title">{group.label}</h3>
              <ul className="skill-group__items">
                {group.items.map((item) => {
                  const isSelected = selected === item
                  return (
                    <li key={item} className="skill-group__item">
                      <button
                        type="button"
                        className="skill-chip"
                        aria-pressed={isSelected}
                        onClick={() => toggle(item)}
                      >
                        {item}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </article>
          ))}
        </div>

        <div className="skills__selected" role="status" aria-live="polite">
          {selected && (
            <p className="skills__selected-line">
              <span className="data-label">{selected}</span>
              {projectsUsing.length > 0 ? (
                <>
                  {' — used in '}
                  {projectsUsing.map((p, i) => (
                    <span key={p.id}>
                      {i > 0 && ', '}
                      <a className="skills__selected-link" href={`#${p.id}`}>{p.title}</a>
                    </span>
                  ))}
                </>
              ) : (
                ' — part of my toolkit; not used in the featured projects'
              )}
            </p>
          )}
        </div>

      </div>
    </section>
  )
}
