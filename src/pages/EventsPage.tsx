const events = [
  {
    name: 'Monthly Master Gardener Meeting',
    date: 'Third Tuesday each month, 6:00 PM',
    location: 'Cheatham County Extension Office',
  },
  {
    name: 'Courthouse Garden Volunteer Morning',
    date: 'Second Saturday each month, 8:00 AM',
    location: 'Cheatham County Courthouse Garden',
  },
  {
    name: 'Fall Vegetable Workshop',
    date: 'September 14, 2026, 10:00 AM',
    location: 'Ashland City Public Library',
  },
]

const meetingMinutes = [
  {
    label: 'April 2026 Meeting Minutes (PDF)',
    href: 'https://drive.google.com/',
  },
  {
    label: 'May 2026 Meeting Minutes (PDF)',
    href: 'https://drive.google.com/',
  },
  {
    label: 'June 2026 Meeting Minutes (PDF)',
    href: 'https://drive.google.com/',
  },
]

export function EventsPage() {
  return (
    <div className="page">
      <section className="content-section">
        <h1>Events</h1>
        <p>
          Stay connected with upcoming trainings, volunteer opportunities, and monthly Master
          Gardener meetings.
        </p>
      </section>

      <section className="content-section">
        <h2>Upcoming events</h2>
        <ul className="list">
          {events.map((event) => (
            <li key={event.name}>
              <h3>{event.name}</h3>
              <p>{event.date}</p>
              <p>{event.location}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="content-section">
        <h2>Calendar view</h2>
        <p>Use the embedded Google Calendar for the latest dates and updates.</p>
        <iframe
          title="TNCCMG events calendar"
          src="https://calendar.google.com/calendar/embed?src=en.usa%23holiday%40group.v.calendar.google.com&ctz=America%2FChicago"
          className="calendar-embed"
        />
      </section>

      <section className="content-section">
        <h2>Meeting minutes</h2>
        <ul className="resource-links">
          {meetingMinutes.map((minute) => (
            <li key={minute.label}>
              <a href={minute.href} target="_blank" rel="noopener noreferrer">
                {minute.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
