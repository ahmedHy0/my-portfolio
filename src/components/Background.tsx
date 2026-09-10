import { background } from '../data/content'

const kindLabel: Record<string, string> = {
  experience: 'Experience',
  education: 'Education',
}

export function Background() {
  return (
    <section className="section background" id="background" aria-labelledby="background-title">
      <div className="container">
        <p className="data-label section__eyebrow">02 — Background</p>
        <h2 id="background-title">Background</h2>
        <p className="section__intro">Training, academic work, and education — in order.</p>

        <ol className="timeline timeline--lineage" data-reveal>
          {background.timeline.map((entry) => (
            <li key={entry.id} className="timeline__item card">
              <p className="timeline__period mono">{entry.period}</p>
              <div className="timeline__body">
                <p className="chip timeline__type">{kindLabel[entry.kind] ?? entry.kind}</p>
                <h3 className="timeline__title">{entry.title}</h3>
                <p className="timeline__org">
                  {entry.organization}
                  {entry.honest_type && entry.honest_type !== kindLabel[entry.kind] && (
                    <span className="timeline__honesty"> — {entry.honest_type}</span>
                  )}
                </p>
                <p>{entry.description}</p>
                {'highlights' in entry && entry.highlights && (
                  <ul className="timeline__highlights">
                    {entry.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>

      </div>
    </section>
  )
}
