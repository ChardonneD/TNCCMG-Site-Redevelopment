import { Link } from 'react-router-dom'
import './Home.css'

const highlights = [
  { icon: '🌱', title: 'Education', text: 'University of Tennessee Extension–backed horticulture resources for Cheatham County.' },
  { icon: '🤝', title: 'Community Service', text: 'School gardens, pollinator habitats, and beautification projects across the county.' },
  { icon: '📅', title: 'Events & Meetings', text: 'Monthly meetings, plant sales, workshops, and county-wide outreach programs.' },
]

export default function Home() {
  return (
    <>
      <section className="hero-home">
        <div className="hero-home__content">
          <p className="eyebrow">Master Gardeners of Cheatham County, Tennessee</p>
          <h1>Growing Community Through Education &amp; Service</h1>
          <p className="hero-home__summary">
            The Tennessee Cheatham County Master Gardeners (TNCCMG) bring trusted horticulture
            knowledge and volunteer service to the gardens, schools, and neighborhoods of Cheatham
            County.
          </p>
          <div className="hero-home__actions">
            <Link to="/events" className="btn btn--primary">View Events</Link>
            <Link to="/contact" className="btn btn--outline">Contact Us</Link>
          </div>
        </div>
      </section>

      <section className="section section--highlights">
        <div className="section__heading">
          <p className="section__eyebrow">What We Do</p>
          <h2>Rooted in Education. Grown Through Service.</h2>
        </div>
        <div className="card-grid">
          {highlights.map((h) => (
            <article key={h.title} className="card">
              <span className="card__icon" aria-hidden="true">{h.icon}</span>
              <h3>{h.title}</h3>
              <p>{h.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--links">
        <div className="section__heading">
          <p className="section__eyebrow">Resources</p>
          <h2>Helpful Links</h2>
        </div>
        <div className="link-row">
          <a
            href="https://extension.tennessee.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="ext-link-card"
          >
            <span>🌻</span>
            <span>UT Extension</span>
          </a>
          <a
            href="https://www.tnstate.edu/extension"
            target="_blank"
            rel="noopener noreferrer"
            className="ext-link-card"
          >
            <span>🌿</span>
            <span>TSU Extension</span>
          </a>
          <Link to="/events" className="ext-link-card">
            <span>📅</span>
            <span>Calendar of Events</span>
          </Link>
          <Link to="/community" className="ext-link-card">
            <span>🏘️</span>
            <span>Community Projects</span>
          </Link>
        </div>
      </section>
    </>
  )
}
