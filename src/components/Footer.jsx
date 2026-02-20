import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* LEFT */}
        <div className="footer-col">
          <img src={logo} alt="EagleFlo" className="footer-logo" />
          <p className="footer-desc">
            Trusted by businesses worldwide to amplify their digital presence
            through innovative, data-driven marketing strategies.
          </p>

          <div className="footer-contact">
            <div>✉ contact@eagleflo.com</div>
            <div>☎ +1 (555) 123-4567</div>
          </div>
        </div>

        {/* CENTER */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="footer-col">
          <h4>Connect With Us</h4>
          <div className="footer-social">
            <a href="#">in</a>
            <a href="#">𝕏</a>
            <a href="#">f</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 EagleFlo. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
