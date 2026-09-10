import { useEffect, useRef, useState } from 'react'
import { about } from '../data/content'
import { prefersReducedMotion } from '../hooks'

const METRICS = [
  { value: 200, suffix: '+', label: 'Hours of training' },
  { value: 3, suffix: '', label: 'Certifications' },
  { value: 3, suffix: '', label: 'Data projects' },
]

/** Counts 0 → target with an eased rAF animation once `run` turns true. */
function useCounter(target: number, run: boolean) {
  const [display, setDisplay] = useState(0)
  useEffect(() => {
    if (!run) return
    if (prefersReducedMotion()) {
      setDisplay(target)
      return
    }
    const duration = 1200
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(Math.round(eased * target))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [run, target])
  return display
}

function Metric({ value, suffix, label, run }: { value: number; suffix: string; label: string; run: boolean }) {
  const display = useCounter(value, run)
  return (
    <div className="about__metric">
      {/* Screen readers get the final value immediately; the animated number stays presentational. */}
      <p className="about__metric-value mono">
        <span className="sr-only">{value}{suffix} {label}</span>
        <span aria-hidden="true">{display}{suffix}</span>
      </p>
      <p className="about__metric-label" aria-hidden="true">{label}</p>
    </div>
  )
}

/** Scroll-triggered key metrics: counts up once the block enters the viewport. */
function AboutMetrics() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReducedMotion()) {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="about__metrics" ref={ref} data-reveal>
      {METRICS.map((m) => (
        <Metric key={m.label} {...m} run={visible} />
      ))}
    </div>
  )
}

export function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="container">
        <p className="data-label section__eyebrow">01 — Engineer profile</p>
        <h2 id="about-title">About</h2>

        <div className="about__split" data-reveal>
          <article className="card about__panel">
            <h3>The person</h3>
            <p>{about.humanParagraph}</p>
          </article>
          <article className="card about__panel">
            <h3>The engineering focus</h3>
            <p>{about.engineeringParagraph}</p>
          </article>
        </div>

        <figure className="about__flow" role="group" aria-labelledby="about-flow-label" data-reveal>
          <figcaption id="about-flow-label" className="data-label">
            How the work flows
          </figcaption>
          <ol className="about__flow-steps">
            {about.flow.map((step) => (
              <li key={step} className="about__flow-step mono">
                {step}
              </li>
            ))}
          </ol>
          <p className="sr-only">{about.flowText}</p>
        </figure>

        <ul className="about__tags" aria-label="Focus areas" data-reveal>
          {about.evidenceTags.map((tag) => (
            <li key={tag} className="chip">
              {tag}
            </li>
          ))}
        </ul>

        <AboutMetrics />
      </div>
    </section>
  )
}
