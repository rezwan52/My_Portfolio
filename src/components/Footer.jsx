import "./Footer.css";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="logo" className="footer-logo" />

      

      <ul className="footer-links">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Privacy Policy</li>
      </ul>

      <div className="footer-socials">
        <a href="https://www.facebook.com/BlackNinja.ARz17/"><i class="fab fa-facebook-f"></i></a>
  <a href="https://www.behance.net/myutso"><i class="fab fa-behance"></i></a>
  <a href="#"><i class="fab fa-twitter"></i></a>
  <a href="https://www.instagram.com/__unpredictable.exe__/"><i class="fab fa-instagram"></i></a>
  <a href="https://www.linkedin.com/in/rezwan-ahmed-77ab35204/"><i class="fab fa-linkedin-in"></i></a>
  <a href="https://github.com/rezwan52"><i class="fab fa-github"></i></a>
      </div>

      <p className="footer-copy">
        Designed & Developed by Rezwan Ahmed
      </p>
    </footer>
  );
}

export default Footer;
