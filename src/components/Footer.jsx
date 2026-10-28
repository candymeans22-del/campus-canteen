import { Link } from "react-router-dom";
import Icon from "./Icon";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-brand">
        <span className="brand-mark"><Icon name="leaf" size={26} /></span>
        <div>
          <strong>Campus Canteen</strong>
          <small>Good Food &bull; Good Mood</small>
          <small className="copyright">&copy; {new Date().getFullYear()} Campus Canteen. All rights reserved.</small>
        </div>
      </div>

      <div className="footer-hours">
        <Icon name="clock" size={30} />
        <div>
          <strong>Opening Hours</strong>
          <p>Mon - Fri : 8:00 AM - 8:00 PM</p>
          <p>Sat - Sun : 9:00 AM - 6:00 PM</p>
        </div>
      </div>

      <nav className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/">Menu</Link>
        <Link to="/cart">Cart</Link>
        <a href="#contact">Contact</a>
      </nav>

      <div className="socials">
        <a href="#contact" aria-label="Facebook"><Icon name="facebook" size={20} /></a>
        <a href="#contact" aria-label="Instagram"><Icon name="instagram" size={20} /></a>
        <a href="#contact" aria-label="X"><Icon name="x" size={18} /></a>
      </div>

      <p className="hand-note footer-note">Eat Well<br />Study Well</p>
    </footer>
  );
}

export default Footer;

