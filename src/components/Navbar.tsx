import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/events', label: 'Events' },
  { to: '/executive-board', label: 'Executive Board & Committee' },
  { to: '/community', label: 'Community' },
  { to: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <NavLink to="/" className="site-brand" onClick={() => setIsOpen(false)}>
          TNCCMG
        </NavLink>

        <button
          type="button"
          className="menu-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`site-nav ${isOpen ? 'site-nav--open' : ''}`} aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? 'site-nav__link site-nav__link--active' : 'site-nav__link')}
              onClick={() => setIsOpen(false)}
              end={item.to === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
