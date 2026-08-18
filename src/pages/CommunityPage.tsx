const countyLinks = [
  { name: 'Kingston Springs Community', href: 'https://www.kingstonsprings-tn.gov/' },
  { name: 'Ashland City Community', href: 'https://www.ashlandcitytn.gov/' },
]

const featuredProjects = [
  {
    name: 'Turkey Junction',
    update:
      'Pollinator bed expansion is underway with new native perennials and educational signage planned this season.',
  },
  {
    name: 'Courthouse Garden',
    update:
      'Volunteers refreshed beds, added seasonal color, and launched a maintenance rotation for sustained care.',
  },
]

export function CommunityPage() {
  return (
    <div className="page">
      <section className="content-section">
        <h1>Community</h1>
        <p>
          Explore intern training resources, neighboring county community pages, and featured local
          projects supported by TNCCMG volunteers.
        </p>
      </section>

      <section className="content-section cards-section">
        <h2>Intern training links</h2>
        <div className="card-grid">
          <article className="card">
            <h3>UT Master Gardener Training</h3>
            <p>Access University of Tennessee Extension training resources for intern development.</p>
            <a
              href="https://mastergardener.tennessee.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open UT training
            </a>
          </article>
          <article className="card">
            <h3>TSU Extension Programs</h3>
            <p>Review Tennessee State University Extension program pages and educational tools.</p>
            <a
              href="https://www.tnstate.edu/extension/programs.aspx"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open TSU training
            </a>
          </article>
        </div>
      </section>

      <section className="content-section">
        <h2>Surrounding county community pages</h2>
        <ul className="resource-links">
          {countyLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="content-section cards-section">
        <h2>Featured projects</h2>
        <div className="card-grid">
          {featuredProjects.map((project) => (
            <article key={project.name} className="card card--project">
              <h3>{project.name}</h3>
              <p>{project.update}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
