import React from "react";
import logo from "../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Rezwan.dev Logo" />
      </div>

      <ul className="nav-links">
        <li>Home</li> {/* scroll to top */}
        <li>About</li> {/* About section on same page */}
        <li>Skills</li>
        <li>Projects</li>
        <li>Experience</li>
        <li>Achievements</li>
        <li>Contact</li>
      </ul>

      <div className="navbar-social">
        <a href="https://www.facebook.com/BlackNinja.ARz17/">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.behance.net/myutso"><i className="fab fa-behance"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com/__unpredictable.exe__/"><i className="fab fa-instagram"></i></a>
        <a href="https://www.linkedin.com/in/rezwan-ahmed-77ab35204/"><i className="fab fa-linkedin-in"></i></a>
        <a href="https://github.com/rezwan52"><i className="fab fa-github"></i></a>
      </div>

      <div className="nav-icons">
        <span className="icon">☀</span>
        <span className="icon search">🔍</span>
      </div>
    </nav>
  );
}

export default Navbar;
