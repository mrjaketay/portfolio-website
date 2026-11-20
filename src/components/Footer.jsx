import { Link } from 'react-router-dom'
import { nav, site } from '../data/site'
import { Logo } from './Header'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>IT support, data operations and remote help from {site.location}. Working with teams in any time zone.</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="footer-head">Pages</h2>
          <ul>
            {nav.map((item) => (
              <li key={item.to}><Link className="text-link" to={item.to}>{item.label}</Link></li>
            ))}
            <li><Link className="text-link" to="/privacy">Privacy</Link></li>
          </ul>
        </nav>

        <div>
          <h2 className="footer-head">Find me</h2>
          <ul>
            <li><a className="text-link" href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><a className="text-link" href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a className="text-link" href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a className="text-link" href={site.cv} download>Download my CV</a></li>
          </ul>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <p>© {year} Jake Tay. All rights reserved.</p>
        <p>Replies within 24 hours.</p>
      </div>
    </footer>
  )
}
