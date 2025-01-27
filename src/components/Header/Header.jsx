import React, { useState } from 'react';
import './Header.css'; // Add appropriate styles

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  // Toggle mobile menu visibility
  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <header className="main-header">
      <div className="auto-container">
        <div className="header-inner">
          {/* Logo Section */}
          <div className="logo-box_val">
            <a href="index.html" className="logo">
              <img src="assets/images/logo.png" alt="Skanda Pest Control" />
            </a>
          </div>

          {/* Navigation */}
          <div className={`nav-outer ${isNavVisible ? 'active' : ''}`}>
            {/* Mobile Navigation Toggler */}
            <div className="mobile-nav-toggler" onClick={toggleNav}>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </div>

            {/* Main Menu */}
            <nav className="main-menu">
              <ul className="navigation">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
