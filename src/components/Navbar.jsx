import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">TraceMe.AI</div>
        <ul className="nav-links">
          <li><Link to="/report">Report Your Loving</Link></li>
          <li><Link to="/FindPerson">Find Person</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li className="dropdown">
            Create Profile
            <ul className="dropdown-menu">
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Signup</Link></li>
            </ul>
          </li>
        </ul>
      </nav>

      {/* Marquee */}
      <div className="marque-container">
        <p className="marquee">
          Welcome to TraceMe! A platform dedicated to finding missing persons. Please report cases or search for loved ones!
        </p>
      </div>
    </>
  );
};

export default Navbar;
