import heroBg from "../assets/hero.jpg";
import logo from "../assets/logo.png";

function Hero() {
  return (
    <section
      id="Hero"
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* overlays */}
      <div className="hero-overlay"></div>
      <div className="hero-glow"></div>
      <div className="hero-bottomfade"></div>

      <div className="hero-container">
        {/* glass logo card */}
        <div className="hero-logoCard">
          <img src={logo} alt="Eagleflo" />
        </div>

        {/* title */}
        <h1 className="hero-title">
          Digital Marketing <span>Excellence</span>
        </h1>

        <p className="hero-sub">
          Maximize your ROI with data-driven strategies, precision targeting, and
          scalable growth solutions designed for the modern digital landscape.
        </p>

        <a href="#Contact" className="hero-btn">
          Start Your Growth Journey <span>→</span>
        </a>
      </div>
    </section>
  );
}

export default Hero;