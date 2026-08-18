import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <p className="footer__name">🌿 TN Cheatham County Master Gardeners</p>
          <p className="footer__tagline">Growing community through education and service.</p>
        </div>
        <nav className="footer__nav" aria-label="Footer navigation">
          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>
          <Link to="/board">Executive Board</Link>
          <Link to="/community">Community</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="footer__contact">
          <p>
            <a href="mailto:tnccmg@example.com">tnccmg@example.com</a>
          </p>
          <p>
            <a href="tel:+16155551234">(615) 555-1234</a>
          </p>
        </div>
      </div>
      <p className="footer__copy">© {new Date().getFullYear()} TNCCMG. All rights reserved.</p>
    </footer>
  )
}
