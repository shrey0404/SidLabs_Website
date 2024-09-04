// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/sidlogo.png";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰ {/* You can use an icon here */}
      </div>
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" className={path === "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={path === "/about" ? "active" : ""}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/projects" className={path === "/projects" ? "active" : ""}>
            Flagship Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" className={path === "/contact" ? "active" : ""}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
