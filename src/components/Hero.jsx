// components/Hero.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    if (headingRef.current && subtitleRef.current && buttonsRef.current && statsRef.current) {
      const tl = gsap.timeline();
      
      tl.fromTo(headingRef.current, 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
      
      tl.fromTo(subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      );
      
      tl.fromTo(buttonsRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" },
        "-=0.3"
      );
      
      tl.fromTo(".stat-item",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", stagger: 0.1 },
        "-=0.2"
      );
    }
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="hero-gradient-overlay"></div>
      </div>
      
      <div className="hero-content">
        {/* Main Heading */}
        <h1 ref={headingRef} className="main-heading">
          Hack<span className="accent-text">Ignite</span>
        </h1>
        
        {/* Subtitle */}
        <p ref={subtitleRef} className="subtitle">
          Ignite your creativity, code the future. Join the annual hackathon at our college.
        </p>
        
        {/* Call-to-Action Buttons */}
        <div ref={buttonsRef} className="cta-buttons">
          <button 
            onClick={() => scrollToSection('registration')}
            className="primary-button"
          >
            Register Now
            <span className="button-icon">→</span>
          </button>
          <button 
            onClick={() => scrollToSection('timeline')}
            className="secondary-button"
          >
            View Timeline
          </button>
        </div>
        
        {/* Stats Grid */}
        <div ref={statsRef} className="stats-grid">
          {/* Original Stats */}
          <div className="stat-item">
            <div className="stat-card">
              <div className="stat-number">24</div>
              <div className="stat-label">Hours</div>
            </div>
          </div>
          
          <div className="stat-item">
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">Participants</div>
            </div>
          </div>
          
          <div className="stat-item">
            <div className="stat-card">
              <div className="stat-number">$10K+</div>
              <div className="stat-label">In Prizes</div>
            </div>
          </div>
          
          <div className="stat-item">
            <div className="stat-card">
              <div className="stat-number">30+</div>
              <div className="stat-label">Projects</div>
            </div>
          </div>
          
          <div className="stat-item">
            <div className="stat-card">
              <div className="stat-number">1:1</div>
              <div className="stat-label">Mentorship</div>
            </div>
          </div>
          
          <div className="stat-item">
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Fun</div>
            </div>
          </div>
        </div>
      </div>
      
      
    </section>
  );
};

export default Hero;