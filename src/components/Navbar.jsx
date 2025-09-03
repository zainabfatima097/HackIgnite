// components/Navbar.jsx
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* College Banner - Replace with your actual banner image */}
        <div className="college-banner.jpeg">
          <img 
            src="college-banner.jpeg" // Replace with your college banner path
            alt="College Name Banner"
            className="banner-image"
          />
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