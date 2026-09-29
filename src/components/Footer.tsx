const COLS = [
  { title: 'Product', links: ['Features', 'Pricing', 'Integrations', 'Changelog'] },
  { title: 'Company', links: ['About', 'Careers', 'Blog', 'Press'] },
  { title: 'Resources', links: ['Docs', 'Guides', 'API Reference', 'Community'] },
  { title: 'Legal', links: ['Privacy', 'Terms', 'Security', 'Cookies'] },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="#home" className="footer__logo">
              <svg viewBox="0 0 32 32" width="24" height="24"><rect width="32" height="32" rx="7" fill="#34D399"/><path d="M9 22V10l7 8 7-8v12" stroke="#052e1f" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <span>Lumen</span>
            </a>
            <p>Real-time product analytics that help modern teams ship with confidence.</p>
          </div>
          {COLS.map((col) => (
            <div className="footer__col" key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l) => <li key={l}><a href="#home" onClick={(e) => e.preventDefault()}>{l}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Lumen, Inc. All rights reserved.</p>
          <div className="footer__social">
            <a href="#home" aria-label="Twitter" onClick={(e) => e.preventDefault()}>𝕏</a>
            <a href="#home" aria-label="GitHub" onClick={(e) => e.preventDefault()}>⌥</a>
            <a href="#home" aria-label="LinkedIn" onClick={(e) => e.preventDefault()}>in</a>
          </div>
        </div>
      </div>
    </footer>
  )
}