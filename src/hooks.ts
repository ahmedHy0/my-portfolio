import { useEffect } from 'react'

export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Scroll-reveal engine. Every major section (and every [data-reveal] group)
 * starts fully hidden via the `.scroll-reveal` class and is revealed by an
 * IntersectionObserver once it enters the visible window (bottom rootMargin
 * of -100px so the 1.2s transition plays clearly inside the viewport).
 * Revealed elements are unobserved — one-shot, no re-hiding on scroll-back.
 * Reduced-motion users get all content visible immediately.
 */
export function useRevealObserver() {
  useEffect(() => {
    // React effects run after DOM insertion; still guard for completeness.
    if (document.readyState === 'loading') return
    const els = Array.from(document.querySelectorAll<HTMLElement>('main section, [data-reveal]'))
    if (els.length === 0) return

    if (prefersReducedMotion()) {
      els.forEach((el) => el.classList.add('scroll-reveal', 'is-visible'))
      return
    }

    els.forEach((el) => el.classList.add('scroll-reveal'))
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { root: null, rootMargin: '0px 0px -100px 0px', threshold: 0.1 },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

/** Locks body scroll while a dialog is open (restores the previous value). */
export function useScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [locked])
}
