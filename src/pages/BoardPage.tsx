const boardMembers = [
  {
    name: 'Kathy Coggin',
    title: 'President',
    bio: 'Coordinates chapter initiatives and leads strategic planning for educational and service outreach.',
  },
  {
    name: 'Linda Foster',
    title: 'Vice President',
    bio: 'Supports program development and volunteer engagement across county projects and events.',
  },
  {
    name: 'Stephanie Walker',
    title: 'Secretary',
    bio: 'Maintains meeting records, chapter communications, and member updates.',
  },
  {
    name: 'Kim Baldinger',
    title: 'Treasurer',
    bio: 'Oversees financial reporting, budgeting, and stewardship of chapter resources.',
  },
  {
    name: 'Judy Vick',
    title: 'Member at Large',
    bio: 'Leads planning and execution for demonstration gardens and public beautification efforts.',
  },
  {
    name: 'Nick Waynick',
    title: 'Extension Agent Advisor',
    bio: 'Coordinates training sessions and extension-informed learning opportunities for members.',
  },
]

export function BoardPage() {
  return (
    <div className="page">
      <section className="content-section">
        <h1>Executive Board & Committee</h1>
        <p>
          Our leadership team guides TNCCMG programs, volunteer service, and educational outreach
          across Cheatham County.
        </p>
      </section>

      <section className="content-section cards-section">
        <div className="card-grid">
          {boardMembers.map((member) => (
            <article key={member.name} className="card card--board">
              <div className="member-avatar" aria-hidden="true">
                {member.name
                  .split(' ')
                  .map((segment) => segment[0])
                  .join('')}
              </div>
              <h2>{member.name}</h2>
              <p className="card__title">{member.title}</p>
              <p>{member.bio}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
