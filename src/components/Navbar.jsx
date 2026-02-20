import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial state set
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => (e) => {
    e.preventDefault();

    const el = document.getElementById(id);
    if (!el) return;

    const navOffset = 90; // adjust if navbar height differs
    const y = el.getBoundingClientRect().top + window.scrollY - navOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <nav className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="brand">
        <img className="brand-logo" src={logo} alt="Eagleflo logo" />
      </div>

      <div className="nav-links">
        <a href="#Hero" onClick={scrollToSection("Hero")}>Home</a>
        <a href="#Contact" onClick={scrollToSection("Contact")}>Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;