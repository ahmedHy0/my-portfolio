import { useEffect, useState } from 'react'
import { Logo } from './Logo'
import { navItems, profile } from '../data/content'

/**
 * Header with a scrollspy "signal": the nav link for the section currently in
 * view gets `aria-current="true"` and a moving accent underline. This is a
 * navigation-state indicator (where am I), not decoration; it works purely
 * from scroll position and degrades gracefully without JS.
 */
export function Header() {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null)
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        }
      },
      // A slim horizontal band around the upper third of the viewport —
      // the section crossing it becomes "current".
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  return (
    <header className="site-header">
      <div className="container site-header__row">
        <a className="site-header__brand" href="#top" aria-label={`${profile.shortName} — back to top`}>
          <Logo size="sm" withName />
        </a>
        <nav className="site-nav" aria-label="Primary">
          <ul className="site-nav__list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  className={`site-nav__link${activeId === item.id ? ' site-nav__link--active' : ''}`}
                  href={`#${item.id}`}
                  aria-current={activeId === item.id ? 'true' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
