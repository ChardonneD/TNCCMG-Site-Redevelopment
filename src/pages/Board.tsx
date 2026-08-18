import './Board.css'

const boardMembers = [
  {
    name: 'Jane Smith',
    title: 'President',
    bio: 'Jane has been a Master Gardener for over 10 years and leads our monthly education programs and county outreach initiatives.',
    initials: 'JS',
  },
  {
    name: 'Robert Johnson',
    title: 'Vice President',
    bio: 'Robert coordinates volunteer workdays and manages relationships with local schools and community gardens throughout Cheatham County.',
    initials: 'RJ',
  },
  {
    name: 'Mary Williams',
    title: 'Secretary',
    bio: 'Mary maintains meeting records, coordinates communications, and helps new members navigate the Master Gardener program.',
    initials: 'MW',
  },
  {
    name: 'David Brown',
    title: 'Treasurer',
    bio: 'David oversees the organization\'s finances, manages the plant sale fundraiser, and reports on budget and expenditures.',
    initials: 'DB',
  },
  {
    name: 'Susan Davis',
    title: 'Education Chair',
    bio: 'Susan develops and delivers educational programming for the public, coordinates speaker events, and manages the library resources.',
    initials: 'SD',
  },
  {
    name: 'Michael Miller',
    title: 'Community Projects Chair',
    bio: 'Michael leads the Courthouse Garden, Turkey Junction, and other demonstration garden projects across the county.',
    initials: 'MM',
  },
]

export default function Board() {
  return (
    <>
      <section className="section page-hero">
        <p className="section__eyebrow">Leadership</p>
        <h1>Executive Board &amp; Committees</h1>
        <p className="page-hero__sub">
          Meet the dedicated Master Gardeners who lead TNCCMG programs and community initiatives.
        </p>
      </section>

      <section className="section">
        <div className="board-grid">
          {boardMembers.map((member) => (
            <article key={member.name} className="board-card">
              <div className="board-card__avatar" aria-hidden="true">
                {member.initials}
              </div>
              <div className="board-card__body">
                <h2>{member.name}</h2>
                <p className="board-card__title">{member.title}</p>
                <p className="board-card__bio">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
