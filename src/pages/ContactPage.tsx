export function ContactPage() {
  return (
    <div className="page">
      <section className="content-section">
        <h1>Contact</h1>
        <p>
          We'd love to hear from you about classes, volunteering, or partnership opportunities in
          Cheatham County.
        </p>
      </section>

      <section className="content-section cards-section">
        <div className="card-grid">
          <article className="card">
            <h2>Contact details</h2>
            <p>
              Email: <a href="mailto:info@tnccmg.org">info@tnccmg.org</a>
            </p>
            <p>
              Phone: <a href="tel:+16155550193">(615) 555-0193</a>
            </p>
            <p>Cheatham County Extension Office, Ashland City, TN</p>
          </article>

          <article className="card">
            <h2>Send a message</h2>
            <form action="https://formspree.io/f/xdklwnkk" method="POST" className="contact-form">
              <label>
                Name
                <input type="text" name="name" required />
              </label>
              <label>
                Email
                <input type="email" name="email" required />
              </label>
              <label>
                Message
                <textarea name="message" rows={5} required />
              </label>
              <button type="submit">Submit</button>
            </form>
          </article>
        </div>
      </section>
    </div>
  )
}
