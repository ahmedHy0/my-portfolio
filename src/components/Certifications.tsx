import { certifications } from '../data/content'

export function Certifications() {
  return (
    <section className="section certifications" id="certifications" aria-labelledby="certifications-title">
      <div className="container">
        <p className="data-label section__eyebrow">03 — Certifications</p>
        <h2 id="certifications-title">Certifications</h2>

        <ul className="certs" data-reveal>
          {certifications.map((cert) => (
            <li key={cert.name} className="cert card">
              <div>
                <h3 className="cert__name">{cert.name}</h3>
                <p className="cert__issuer">{cert.issuer}</p>
              </div>
              <p className="cert__date mono">{cert.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
