import './Community.css'

const trainingLinks = [
  {
    label: 'UT Extension Master Gardener Training',
    href: 'https://extension.tennessee.edu/mastergardeners',
    icon: '🌻',
    desc: 'University of Tennessee Extension training resources and intern information.',
  },
  {
    label: 'TSU Extension Training Homepage',
    href: 'https://www.tnstate.edu/extension/mastergardeners.aspx',
    icon: '🌿',
    desc: 'Tennessee State University Extension Master Gardener training portal.',
  },
]

const countyLinks = [
  { label: 'Dickson County Master Gardeners', href: '#', icon: '🏡' },
  { label: 'Montgomery County Master Gardeners', href: '#', icon: '🏡' },
  { label: 'Robertson County Master Gardeners', href: '#', icon: '🏡' },
  { label: 'Williamson County Master Gardeners', href: '#', icon: '🏡' },
]

const projects = [
  {
    name: 'Courthouse Garden',
    tag: 'Ongoing',
    description:
      'A demonstration garden at the Cheatham County Courthouse featuring native plants, pollinator beds, and seasonal plantings. Open to the public year-round.',
    updates: [
      'Fall 2026 bulb planting completed in October.',
      'New pollinator signage installed – species identification guide available.',
    ],
  },
  {
    name: 'Turkey Junction Project',
    tag: 'Ongoing',
    description:
      'Community beautification and habitat restoration at Turkey Junction featuring rain gardens, native grasses, and wildflower meadows.',
    updates: [
      'Wildflower seed broadcast completed – spring bloom expected.',
      'Rain garden maintenance workday scheduled for March.',
    ],
  },
  {
    name: 'KS/AC School Garden',
    tag: 'Active',
    description:
      'A school garden program at Kingston Springs and Ashland City schools, providing hands-on gardening education for K–8 students.',
    updates: [
      'Fall vegetables planted with 4th grade classes.',
      'Composting station added to both campuses.',
    ],
  },
]

export default function Community() {
  return (
    <>
      <section className="section page-hero">
        <p className="section__eyebrow">Get Involved</p>
        <h1>Community Resources &amp; Projects</h1>
        <p className="page-hero__sub">
          Training resources for interns, links to surrounding county programs, and updates on
          local garden projects.
        </p>
      </section>

      <section className="section">
        <div className="section__heading">
          <p className="section__eyebrow">Intern Training</p>
          <h2>UT &amp; TSU Extension Resources</h2>
        </div>
        <div className="resource-grid">
          {trainingLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="resource-card"
            >
              <span className="resource-card__icon">{link.icon}</span>
              <div>
                <p className="resource-card__label">{link.label}</p>
                <p className="resource-card__desc">{link.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section__heading">
          <p className="section__eyebrow">Neighboring Counties</p>
          <h2>Surrounding County Master Gardener Programs</h2>
        </div>
        <div className="county-grid">
          {countyLinks.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="county-card"
            >
              <span>{c.icon}</span>
              <span>{c.label}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section__heading">
          <p className="section__eyebrow">Local Projects</p>
          <h2>Garden Projects &amp; Updates</h2>
        </div>
        <div className="project-list">
          {projects.map((p) => (
            <article key={p.name} className="project-card">
              <div className="project-card__header">
                <h3>{p.name}</h3>
                <span className="project-card__tag">{p.tag}</span>
              </div>
              <p>{p.description}</p>
              <ul className="project-card__updates">
                {p.updates.map((u) => (
                  <li key={u}>✅ {u}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
