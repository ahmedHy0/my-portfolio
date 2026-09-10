import { Logo } from './Logo'
import { navItems, profile } from '../data/content'

export function Footer() {
  const goToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="site-footer">
      <div className="container site-footer__row">
        <Logo size="sm" />
        <nav aria-label="Footer">
          <ul className="site-footer__nav">
            {navItems.map((item) => (
              <li key={item.id}>
                <a className="site-footer__link" href={`#${item.id}`}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="site-footer__meta mono">
          © {new Date().getFullYear()} {profile.fullName} · {profile.location}
        </p>
        <button type="button" className="back-to-top" onClick={goToTop}>
          Go to the top
        </button>
      </div>
    </footer>
  )
}
