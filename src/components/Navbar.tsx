import { useEffect, useState } from 'react'
import { useTheme } from '../theme'
import Button from './Button'

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand" aria-label="Lumen home">
          <span className="navbar__logo" aria-hidden="true">
            <svg viewBox="0 0 32 32" width="26" height="26"><rect width="32" height="32" rx="7" fill="#34D399"/><path d="M9 22V10l7 8 7-8v12" stroke="#052e1f" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          <span className="navbar__name">Lumen</span>
        </a>

        <nav className="navbar__nav" aria-label="Primary">
          {LINKS.map((l) => <a key={l.href} href={l.href} className="navbar__link">{l.label}</a>)}
        </nav>

        <div className="navbar__actions">
          <button className="theme-toggle" onClick={toggle} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
            {theme === 'light' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
            )}
          </button>
          <a href="#login" className="navbar__login">Login</a>
          <Button size="sm" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>Get Started</Button>
          <button className="hamburger" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={open}>
            <span className={`hamburger__bar ${open ? 'is-open' : ''}`} />
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${open ? 'is-open' : ''}`}>
        <nav aria-label="Mobile">
          {LINKS.map((l) => <a key={l.href} href={l.href} className="mobile-menu__link" onClick={() => setOpen(false)}>{l.label}</a>)}
          <a href="#login" className="mobile-menu__link" onClick={() => setOpen(false)}>Login</a>
          <Button fullWidth onClick={() => { setOpen(false); document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }) }}>Get Started</Button>
        </nav>
      </div>
    </header>
  )
}