export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <h2>Master Gardeners of Cheatham County</h2>
          <p>Serving our community through education, volunteerism, and garden stewardship.</p>
        </div>
        <div>
          <h3>Contact</h3>
          <p>
            Email: <a href="mailto:info@tnccmg.org">info@tnccmg.org</a>
          </p>
          <p>
            Phone: <a href="tel:+16155550193">(615) 555-0193</a>
          </p>
        </div>
        <div>
          <h3>Resources</h3>
          <p>
            <a
              href="https://cheatham.tennessee.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              UT Extension Cheatham County
            </a>
          </p>
          <p>
            <a
              href="https://www.tnstate.edu/extension/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TSU Extension
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
