import './Events.css'

const upcomingEvents = [
  { date: 'Sep 9, 2026', title: 'Monthly Meeting', location: 'Cheatham County Extension Office', description: 'Regular monthly meeting open to all members and prospective members.' },
  { date: 'Sep 20, 2026', title: 'Fall Plant Sale', location: 'Ashland City Farmers Market', description: 'Annual plant sale fundraiser featuring perennials, herbs, and native plants.' },
  { date: 'Oct 7, 2026', title: 'Courthouse Garden Workday', location: 'Cheatham County Courthouse', description: 'Volunteer workday for fall cleanup and planting at the courthouse garden.' },
  { date: 'Oct 14, 2026', title: 'Monthly Meeting', location: 'Cheatham County Extension Office', description: 'Regular monthly meeting with guest speaker on composting.' },
]

const meetingMinutes = [
  { label: 'August 2026 Meeting Minutes', href: '#' },
  { label: 'July 2026 Meeting Minutes', href: '#' },
  { label: 'June 2026 Meeting Minutes', href: '#' },
  { label: 'May 2026 Meeting Minutes', href: '#' },
]

export default function Events() {
  return (
    <>
      <section className="section page-hero">
        <p className="section__eyebrow">Stay Connected</p>
        <h1>Events &amp; Meeting Minutes</h1>
        <p className="page-hero__sub">
          Find upcoming TNCCMG events, workshops, and access minutes from past meetings.
        </p>
      </section>

      <section className="section">
        <div className="section__heading">
          <p className="section__eyebrow">Upcoming Events</p>
          <h2>Mark Your Calendar</h2>
        </div>
        <div className="event-list">
          {upcomingEvents.map((ev) => (
            <article key={ev.title + ev.date} className="event-card">
              <div className="event-card__date">{ev.date}</div>
              <div className="event-card__body">
                <h3>{ev.title}</h3>
                <p className="event-card__location">📍 {ev.location}</p>
                <p>{ev.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section__heading">
          <p className="section__eyebrow">Records</p>
          <h2>Meeting Minutes</h2>
        </div>
        <ul className="minutes-list">
          {meetingMinutes.map((m) => (
            <li key={m.label}>
              <a href={m.href} className="minutes-link">
                📄 {m.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="minutes-note">Minutes are uploaded as PDF documents after each meeting.</p>
      </section>
    </>
  )
}
