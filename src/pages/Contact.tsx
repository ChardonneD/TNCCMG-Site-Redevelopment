import './Contact.css'

export default function Contact() {
  return (
    <>
      <section className="section page-hero">
        <p className="section__eyebrow">Reach Out</p>
        <h1>Contact Us</h1>
        <p className="page-hero__sub">
          Questions about volunteering, programs, or garden projects? We'd love to hear from you.
        </p>
      </section>

      <section className="section contact-layout">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <div className="contact-item">
            <span>📧</span>
            <div>
              <p className="contact-item__label">Email</p>
              <a href="mailto:tnccmg@example.com">tnccmg@example.com</a>
            </div>
          </div>
          <div className="contact-item">
            <span>📞</span>
            <div>
              <p className="contact-item__label">Phone</p>
              <a href="tel:+16155551234">(615) 555-1234</a>
            </div>
          </div>
          <div className="contact-item">
            <span>📍</span>
            <div>
              <p className="contact-item__label">Mailing Address</p>
              <p>Cheatham County Extension Office<br />Ashland City, TN 37015</p>
            </div>
          </div>
          <div className="contact-item">
            <span>🕐</span>
            <div>
              <p className="contact-item__label">Meetings</p>
              <p>Second Tuesday of each month<br />Cheatham County Extension Office</p>
            </div>
          </div>
        </div>

        <div className="contact-form-wrap">
          <h2>Send a Message</h2>
          <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            className="contact-form"
          >
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" placeholder="Your name" required />

            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" placeholder="your@email.com" required />

            <label htmlFor="subject">Subject</label>
            <input id="subject" type="text" name="subject" placeholder="What is this about?" />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} placeholder="Your message..." required />

            <button type="submit" className="btn btn--primary">Send Message</button>
          </form>
        </div>
      </section>
    </>
  )
}
