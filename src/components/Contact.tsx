import { useEffect, useRef, useState, type ReactNode } from 'react'
import { contact } from '../data/content'

const CARD_ICONS: Record<string, ReactNode> = {
  Email: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  ),
  'Download CV': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  ),
}

const COPY_ICON = (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="14" height="14" x="8" y="8" rx="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </svg>
)

/**
 * Contact / Open to Opportunities. The email row includes a copy action with
 * a truthful, temporary success state ("Copied") — it only reports an actual
 * clipboard write, and falls back to a "select the address" message when the
 * clipboard API is unavailable.
 */
export function Contact() {
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'failed'>('idle')
  const timerRef = useRef<number>()

  useEffect(() => () => window.clearTimeout(timerRef.current), [])

  const email = contact.links.find((l) => l.href.startsWith('mailto:'))?.display
  const github = contact.links.find((l) => l.href.includes('github.com'))
  const cvLink = contact.links.find((l) => l.download)

  const copyEmail = async () => {
    if (!email) return
    let ok = false
    try {
      await navigator.clipboard.writeText(email)
      ok = true
    } catch {
      ok = false
    }
    setCopyState(ok ? 'copied' : 'failed')
    window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => setCopyState('idle'), 2400)
  }

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact__split" data-reveal>
          <div className="contact__intro">
            <p className="data-label section__eyebrow">06 — Contact</p>
            <h2 id="contact-title" className="contact__heading">{contact.heading}</h2>
            {contact.subtitle && (
              <p className="contact__subtitle">
                <span className="contact__subtitle-dot" aria-hidden="true">•</span> {contact.subtitle}
              </p>
            )}
            <p className="contact__statement">{contact.statement}</p>

            <div className="contact__actions">
              {email && (
                <a className="btn btn-primary" href={`mailto:${email}`}>Contact me</a>
              )}
              {cvLink && (
                <a className="btn btn-secondary" href={cvLink.href} download>Download CV</a>
              )}
              {github && (
                <a
                  className="btn btn-secondary"
                  href={github.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View GitHub
                </a>
              )}
            </div>
          </div>

          <div className="contact__cards">
            <ul className="contact__links">
              {contact.links.map((link) => (
                <li key={link.label} className="contact__row">
                  <a
                    className="contact__link"
                    href={link.href}
                    {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    {...(link.download ? { download: true } : {})}
                  >
                    <span className="contact__link-text">
                      <span className="contact__link-label data-label">{link.label}</span>
                      <span className="contact__link-value">{link.display}</span>
                    </span>
                    <span className="contact__link-icon" aria-hidden="true">
                      {CARD_ICONS[link.label]}
                    </span>
                  </a>
                  {link.href.startsWith('mailto:') && (
                    <button
                      type="button"
                      className={`btn btn-secondary contact__copy${copyState === 'copied' ? ' contact__copy--done' : ''}`}
                      onClick={copyEmail}
                    >
                      {COPY_ICON}
                      {copyState === 'copied' ? 'Copied ✓' : copyState === 'failed' ? 'Copy failed' : 'Copy email'}
                    </button>
                  )}
                </li>
              ))}
            </ul>
            <p className="sr-only" role="status" aria-live="polite">
              {copyState === 'copied' ? 'Email address copied to clipboard' : ''}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
