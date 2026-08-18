import { Link } from 'react-router-dom'

export function HomePage() {
  return (
    <div className="page">
      <section className="hero-banner">
        <div className="hero-banner__content">
          <p className="eyebrow">Cheatham County, Tennessee</p>
          <h1>Growing knowledge, service, and community through gardening.</h1>
          <p>
            The Tennessee Master Gardeners of Cheatham County support local residents with trusted
            horticulture education, practical training, and projects that strengthen our shared
            spaces.
          </p>
          <div className="button-row">
            <Link to="/events" className="button-link">
              View upcoming events
            </Link>
            <a
              href="https://calendar.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="button-link button-link--secondary"
            >
              Open full calendar
            </a>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h2>Our mission</h2>
        <p>
          We connect research-based Extension guidance to everyday gardeners while supporting local
          schools, neighborhoods, and civic spaces with volunteer service.
        </p>
      </section>

      <section className="content-section cards-section">
        <h2>Extension partner resources</h2>
        <div className="card-grid">
          <article className="card">
            <h3>UT Extension</h3>
            <p>
              County-based horticulture education, publications, and workshops for home gardeners.
            </p>
            <a href="https://cheatham.tennessee.edu/" target="_blank" rel="noopener noreferrer">
              Visit UT Extension
            </a>
          </article>
          <article className="card">
            <h3>TSU Extension</h3>
            <p>
              Programs focused on urban agriculture, community health, and practical outreach.
            </p>
            <a
              href="https://www.tnstate.edu/extension/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit TSU Extension
            </a>
          </article>
        </div>
      </section>
    </div>
  )
}
