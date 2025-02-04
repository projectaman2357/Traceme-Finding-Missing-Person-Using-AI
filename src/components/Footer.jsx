import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [linksOpen, setLinksOpen] = useState(false);
  const [socialOpen, setSocialOpen] = useState(false);

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* About Us Section */}
        <div className="footer-section">
          <button className="menu-toggle" onClick={() => setAboutOpen(!aboutOpen)}>
            About Us <span>{aboutOpen ? "▲" : "▼"}</span>
          </button>
          {aboutOpen && (
            <div className="menu-content">
              <p>We are here to help you find your loved ones.</p>
            </div>
          )}
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <button className="menu-toggle" onClick={() => setLinksOpen(!linksOpen)}>
            Quick Links <span>{linksOpen ? "▲" : "▼"}</span>
          </button>
          {linksOpen && (
            <div className="menu-content">
              <ul>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
          )}
        </div>

        {/* Follow Us Section */}
        <div className="footer-section">
          <button className="menu-toggle" onClick={() => setSocialOpen(!socialOpen)}>
            Follow Us <span>{socialOpen ? "▲" : "▼"}</span>
          </button>
          {socialOpen && (
            <div className="menu-content social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          )}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
