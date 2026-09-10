import { useCallback, useEffect, useRef, useState } from 'react'
import { Logo } from './Logo'
import { intro, profile } from '../data/content'
import { prefersReducedMotion } from '../hooks'

/**
 * "Initialize Data Session" — a short, skippable boot sequence (~1.2 s).
 * Lines reveal one by one via CSS animation delays; the skip control works
 * from the first frame, Escape dismisses, and reduced-motion users get a
 * near-instant fade. Never blocks content: the page behind is live and the
 * overlay is the first thing dismissed.
 */
export function Intro({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(true)
  const [leaving, setLeaving] = useState(false)
  const skipRef = useRef<HTMLButtonElement>(null)

  const dismiss = useCallback(() => {
    onDone()
    if (prefersReducedMotion()) {
      setVisible(false)
      return
    }
    // Brief exit animation, then unmount.
    setLeaving(true)
    window.setTimeout(() => setVisible(false), 280)
  }, [onDone])

  useEffect(() => {
    const total = prefersReducedMotion() ? 150 : 1250
    const timer = window.setTimeout(dismiss, total)
    return () => window.clearTimeout(timer)
  }, [dismiss])

  useEffect(() => {
    if (!visible) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dismiss()
    }
    window.addEventListener('keydown', onKey)
    skipRef.current?.focus()
    return () => window.removeEventListener('keydown', onKey)
  }, [visible, dismiss])

  if (!visible) return null

  return (
    <div className={`intro${leaving ? ' intro--leaving' : ''}`} role="dialog" aria-modal="true" aria-label="Loading portfolio">
      <div className="intro__panel">
        <Logo size="md" />
        <p className="data-label">{profile.fullName}</p>
        <ul className="intro__lines mono">
          {intro.lines.map((line, i) => (
            <li key={line} style={{ '--i': i } as React.CSSProperties}>
              <span className="intro__line-text">{line}</span>
              <span className="intro__line-status" aria-hidden="true">OK</span>
            </li>
          ))}
        </ul>
        <button
          ref={skipRef}
          className="btn btn-secondary intro__skip"
          type="button"
          onClick={dismiss}
        >
          Skip intro
        </button>
      </div>
    </div>
  )
}
