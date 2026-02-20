function Contact() {
  return (
    <section className="contact" id="Contact">
      <div className="contact-head">
        <h2>Let's Scale Your Business</h2>
        <p>Ready for results? Fill out the form or contact us directly.</p>
      </div>

      <div className="contact-grid">
        {/* LEFT CARD */}
        <div className="contact-left">
          <h3>Contact Information</h3>
          <p className="contact-left-sub">Reach out to our team directly.</p>

          <div className="contact-item">
            <div className="contact-ico phone">☎</div>
            <div>
              <div className="contact-item-title">Phone</div>
              <div className="contact-item-text">+1 (555) 123-4567</div>
              <div className="contact-item-muted">Mon-Fri 9am-6pm EST</div>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-ico email">✉</div>
            <div>
              <div className="contact-item-title">Email</div>
              <div className="contact-item-text">hello@eagleflo.com</div>
              <div className="contact-item-text">support@eagleflo.com</div>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-ico map">⌁</div>
            <div>
              <div className="contact-item-title">Headquarters</div>
              <div className="contact-item-text">100 Digital Way, Suite 400</div>
              <div className="contact-item-text">New York, NY 10001</div>
            </div>
          </div>

          <div className="contact-divider" />

          <div className="contact-follow">
            <div className="contact-follow-title">Follow Us</div>
            <div className="contact-social">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Twitter">𝕏</a>
              <a href="#" aria-label="LinkedIn">in</a>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form className="contact-right" onSubmit={(e) => e.preventDefault()}>
          <div className="form-grid">
            <div className="field">
              <label>Full Name *</label>
              <input placeholder="John Doe" required />
            </div>

            <div className="field">
              <label>Company Name</label>
              <input placeholder="Business Inc." />
            </div>

            <div className="field">
              <label>Email Address *</label>
              <input type="email" placeholder="john@example.com" required />
            </div>

            <div className="field">
              <label>Phone Number *</label>
              <input placeholder="+1 (555) 000-0000" required />
            </div>

            <div className="field">
              <label>Service of Interest *</label>
              <select required defaultValue="">
                <option value="" disabled>Select a service</option>
                <option>Paid Ads</option>
                <option>SEO</option>
                <option>Landing Pages</option>
                <option>Analytics</option>
              </select>
            </div>

            <div className="field">
              <label>Monthly Budget</label>
              <select defaultValue="">
                <option value="" disabled>Select a range</option>
                <option>$500 - $1,000</option>
                <option>$1,000 - $5,000</option>
                <option>$5,000+</option>
              </select>
            </div>

            <div className="field full">
              <label>Your Message *</label>
              <textarea placeholder="Tell us about your project goals..." required />
            </div>
          </div>

          <button className="send-btn" type="submit">
  Send Message
  <svg
    className="send-icon"
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
  >
    <path
      d="M22 2L11 13"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 2L15 22L11 13L2 9L22 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</button>

        </form>
      </div>
    </section>
  );
}

export default Contact;
