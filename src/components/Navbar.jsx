// components/Navbar.jsx
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <i className="fas fa-fire"></i>
          <span>Hack<span className="logo-accent">Ignite</span></span>
        </div>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#timeline" className="nav-link">Timeline</a>
          <a href="#register" className="nav-link">Register</a>
          <a href="#prizes" className="nav-link">Prizes</a>
          <a href="#faq" className="nav-link">FAQ</a>
          <button className="nav-register-btn">Register <i className="fas fa-arrow-right"></i></button>
        </div>

        <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;