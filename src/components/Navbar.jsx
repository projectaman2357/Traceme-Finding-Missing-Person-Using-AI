import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Adjust path based on your structure
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for hamburger menu

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          {/* Logo */}
          <div className="logo">
            <img src={logo} alt="TraceMe Logo" className="logo-img" />
          </div>

          {/* Hamburger Icon */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* Navigation Links */}
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li><Link to="/report" onClick={() => setMenuOpen(false)}>Report Your Loving</Link></li>
            <li><Link to="/FindPerson" onClick={() => setMenuOpen(false)}>Find Person</Link></li>
            <li><Link to="/Contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            <li className="dropdown">
              Create Profile
              <ul className="dropdown-menu">
                <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
                <li><Link to="/signup" onClick={() => setMenuOpen(false)}>Signup</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>

      {/* Marquee */}
      <div className="marquee-container">
        <p className="marquee">
          Welcome to TraceMe! A platform dedicated to finding missing persons. Please report cases or search Your loved ones!
        </p>
      </div>
    </>
  );
};

export default Navbar;
