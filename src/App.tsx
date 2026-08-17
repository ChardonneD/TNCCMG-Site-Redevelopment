import './App.css'

const highlights = [
  'Hands-on horticulture education rooted in University of Tennessee Extension outreach.',
  'Volunteer service that supports school gardens, pollinator habitats, and community learning.',
  'A simple, fast React foundation ready for ongoing content updates and Vercel deployment.',
]

const focusAreas = [
  {
    title: 'Gardening Education',
    description:
      'Share timely resources about vegetables, ornamentals, composting, and sustainable growing practices for Cheatham County residents.',
  },
  {
    title: 'Community Projects',
    description:
      'Highlight demonstration gardens, beautification efforts, and outreach programs that connect neighbors through gardening.',
  },
  {
    title: 'Volunteer Opportunities',
    description:
      'Invite prospective members to learn, serve, and support local events alongside Master Gardeners in training and active service.',
  },
]

const siteSections = [
  'Seasonal gardening tips and upcoming programs',
  'Volunteer stories and local impact updates',
  'Simple calls to action for learning and community involvement',
]

function App() {
  return (
    <div className="page-shell">
      <header className="hero">
        <div className="hero__content">
          <p className="eyebrow">Master Gardeners of Cheatham County, Tennessee</p>
          <h1>Growing a modern home for local gardening education and community service.</h1>
          <p className="hero__summary">
            This site reconstruction establishes a React-based foundation for the Tennessee
            Master Gardeners of Cheatham County with a clean experience that deploys quickly on
            Vercel.
          </p>
          <div className="hero__actions">
            <a href="#mission">Explore the mission</a>
            <a href="#focus" className="hero__actions-secondary">
              View focus areas
            </a>
          </div>
        </div>
        <aside className="hero__panel" aria-label="Project highlights">
          <h2>What this launch site provides</h2>
          <ul>
            {highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </aside>
      </header>

      <main>
        <section id="mission" className="section">
          <div className="section__heading">
            <p className="section__eyebrow">Mission</p>
            <h2>Support Cheatham County gardeners with trusted knowledge and visible local impact.</h2>
          </div>
          <p className="section__body">
            The reconstructed site is designed to introduce the organization, spotlight programs,
            and make it easier to expand with event announcements, member resources, and volunteer
            updates over time.
          </p>
        </section>

        <section id="focus" className="section section--cards">
          <div className="section__heading">
            <p className="section__eyebrow">Focus areas</p>
            <h2>Built around the work a county Master Gardener group needs to share most often.</h2>
          </div>
          <div className="card-grid">
            {focusAreas.map((area) => (
              <article key={area.title} className="card">
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--checklist">
          <div className="section__heading">
            <p className="section__eyebrow">Launch-ready structure</p>
            <h2>A practical single-page starting point for future content growth.</h2>
          </div>
          <ul className="checklist">
            {siteSections.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>TNCCMG Site Redevelopment</p>
        <p>React + Vite setup prepared for fast Vercel hosting.</p>
      </footer>
    </div>
  )
}

export default App
