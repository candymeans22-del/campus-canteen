import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Icon from "./Icon";
import { useShop } from "../context/ShopContext";

function Navbar() {
  const { cartCount, query, setQuery } = useShop();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const onSearch = (value) => {
    setQuery(value);
    if (location.pathname !== "/") navigate("/");
  };

  const onKey = (e) => {
    if (e.key === "Enter") {
      navigate("/");
      setTimeout(() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" }), 60);
    }
  };

  const linkClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <header className="navbar">
      <Link to="/" className="brand">
        <span className="brand-mark"><Icon name="leaf" size={26} /></span>
        <span className="brand-text">
          <strong>Campus Canteen</strong>
          <small>Good Food &bull; Good Mood</small>
        </span>
      </Link>

      <nav className={open ? "nav-links open" : "nav-links"} aria-label="Main">
        <NavLink to="/" end className={linkClass} onClick={() => setOpen(false)}>Menu</NavLink>
        <NavLink to="/cart" className={linkClass} onClick={() => setOpen(false)}>Cart</NavLink>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </nav>

      <label className="search">
        <Icon name="search" size={18} />
        <input
          type="search"
          placeholder="Search food..."
          value={query}
          onChange={(e) => onSearch(e.target.value)}
          onKeyDown={onKey}
          aria-label="Search food"
        />
      </label>

      <Link to="/cart" className="icon-btn cart-btn" aria-label={`Open cart, ${cartCount} items`}>
        <Icon name="cart" size={28} />
        <span className="count">{cartCount}</span>
      </Link>

      <button className="icon-btn menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
        <Icon name="bars" size={26} />
      </button>
    </header>
  );
}

export default Navbar;
