import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { nav, site } from '../data/site'
import { useScrolled } from './Motion'

export function Logo() {
  return (
    <Link to="/" className="logo" aria-label="Jake Tay, home">
      <span className="logo-mark" aria-hidden="true">JT</span>
      <span className="logo-name">Jake Tay</span>
    </Link>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled()
  const { pathname } = useLocation()

  // close the menu whenever the route changes
  useEffect(() => setOpen(false), [pathname])

  // lock scroll + esc to close while the phone menu is up
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="wrap header-inner">
        <Logo />
        <nav className="main-nav" aria-label="Main">
          <ul>
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className="nav-link">{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <a className="btn btn-primary btn-sm header-cta" href={`mailto:${site.email}`}>Email me</a>
        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="phone-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="menu-bars" aria-hidden="true" />
        </button>
      </div>

      <div id="phone-menu" className={`phone-menu${open ? ' is-open' : ''}`} hidden={!open}>
        <nav className="wrap" aria-label="Main, phone">
          <ul>
            <li><NavLink to="/" end className="phone-link">Home</NavLink></li>
            {nav.map((item) => (
              <li key={item.to}><NavLink to={item.to} className="phone-link">{item.label}</NavLink></li>
            ))}
          </ul>
          <a className="btn btn-primary btn-block" href={`mailto:${site.email}`}>Email me</a>
        </nav>
      </div>
    </header>
  )
}
