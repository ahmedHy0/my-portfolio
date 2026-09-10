import type { ComponentType } from 'react'
import { hero } from '../data/content'
import {
  PythonIcon,
  PostgresqlIcon,
  DockerIcon,
  GitIcon,
  SparkIcon,
  GithubIcon,
  SqlIcon,
  CloudIcon,
  LayersIcon,
} from './BrandIcons'

const FLOW_NODES = [
  'Python',
  'Git',
  'Docker',
  'Cloud',
  'PostgreSQL',
  'SQL',
  'Apache Spark',
  'GitHub',
  'Data stack',
] as const

const CONNECTORS: Array<{
  Icon: ComponentType
  side: 'in' | 'out'
  top: string
}> = [
  // Lines originate at each capsule's inner edge and stop at the photo frame.
  { Icon: PythonIcon, side: 'in', top: '8%' },
  { Icon: GitIcon, side: 'in', top: '30%' },
  { Icon: DockerIcon, side: 'in', top: '52%' },
  { Icon: CloudIcon, side: 'in', top: '74%' },
  { Icon: PostgresqlIcon, side: 'out', top: '10%' },
  { Icon: SqlIcon, side: 'out', top: '30%' },
  { Icon: SparkIcon, side: 'out', top: '50%' },
  { Icon: GithubIcon, side: 'out', top: '70%' },
  { Icon: LayersIcon, side: 'out', top: '88%' },
]

/**
 * Hero. Pipeline paths draw once and nodes activate in sequence when
 * `active` flips (after the intro session finishes or is skipped). The
 * composition is fully readable without animation — `.is-active` only
 * triggers one-shot transform/opacity/stroke animations.
 */
export function Hero({ active }: { active: boolean }) {
  return (
    <section className={`hero${active ? ' hero--active' : ''}`} id="top" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="data-label hero__eyebrow">{hero.eyebrow}</p>
          <h1 id="hero-title" className="hero__title">
            {hero.name}
          </h1>
          <p className="hero__role">
            {hero.roleLine}
            <span className="hero__role-qualifier"> — {hero.roleQualifier}</span>
          </p>
          <p className="hero__positioning">{hero.positioning}</p>

          <dl className="hero__meta">
            {hero.metadata.map((m) => (
              <div key={m.label} className="hero__meta-row">
                <dt className="data-label">{m.label}</dt>
                <dd>{m.value}</dd>
              </div>
            ))}
          </dl>

          <div className="hero__ctas">
            <a className="btn btn-primary" href={hero.ctas.primary.target}>
              {hero.ctas.primary.label}
            </a>
            <a className="btn btn-secondary" href="/cv.pdf" download>
              {hero.ctas.secondary.label}
            </a>
            <a className="btn btn-ghost" href={hero.ctas.tertiary.target}>
              {hero.ctas.tertiary.label}
            </a>
          </div>
        </div>

        <figure className="hero__portrait-frame">
          {CONNECTORS.map(({ Icon, side, top }, i) => (
            <span
              key={side + top}
              className={`hero__badge hero__badge--${side}`}
              style={{ top, '--i': i } as React.CSSProperties}
            >
              <Icon />
            </span>
          ))}
          <img
            className="hero__portrait"
            src={hero.portrait.src}
            alt={hero.portrait.alt}
            width={hero.portrait.width}
            height={hero.portrait.height}
            fetchPriority="high"
          />
        </figure>
      </div>

      <p className="sr-only">
        Diagram: the technologies and data systems connected to the engineer —
        {FLOW_NODES.join(', ')}.
      </p>
    </section>
  )
}
