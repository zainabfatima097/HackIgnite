// components/Footer.jsx
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home", icon: "home" },
    { name: "About", href: "#about", icon: "info-circle" },
    { name: "Timeline", href: "#timeline", icon: "calendar" },
    { name: "Register", href: "#register", icon: "user-plus" },
    { name: "Prizes", href: "#prizes", icon: "trophy" },
    { name: "FAQs", href: "#faq", icon: "question-circle" }
  ];

  const resources = [
    { name: "Code of Conduct", href: "#code-of-conduct", icon: "book" },
    { name: "Participant Guide", href: "#guide", icon: "book-open" },
    { name: "Judging Criteria", href: "#judging", icon: "clipboard-check" },
    { name: "Submission Guidelines", href: "#submission", icon: "cloud-upload-alt" }
  ];

  const socialLinks = [
    { name: "Instagram", href: "#", icon: "instagram", color: "#E4405F" },
    { name: "LinkedIn", href: "#", icon: "linkedin", color: "#0077B5" }
  ];

  const contactInfo = [
    { icon: "envelope", text: "hello@hackignite.com", href: "mailto:hello@hackignite.com" },
    { icon: "map-marker-alt", text: "College Campus, City, State", href: "#" },
    { icon: "phone", text: "+1 (555) 123-4567", href: "tel:+15551234567" }
  ];

  const sponsors = [
    { name: "Google Cloud", logo: "google" },
    { name: "AWS", logo: "aws" },
    { name: "Microsoft", logo: "microsoft" }
  ];

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            {/* Brand Section */}
            <div className="footer-brand">
              <div className="footer-logo">
                <i className="fas fa-fire"></i>
                <span>Hack<span className="logo-accent">Ignite</span></span>
              </div>
              <p className="footer-description">
                Igniting innovation and creativity through technology. Join us for an unforgettable hackathon experience.
              </p>
              
              <div className="footer-social">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="social-link"
                    aria-label={social.name}
                    style={{ backgroundColor: social.color }}
                  >
                    <i className={`fab fa-${social.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-links">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-list">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>
                      <i className={`fas fa-${link.icon}`}></i>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="footer-links">
              <h3 className="footer-title">Resources</h3>
              <ul className="footer-list">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <a href={resource.href}>
                      <i className={`fas fa-${resource.icon}`}></i>
                      {resource.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-contact">
              <h3 className="footer-title">Get In Touch</h3>
              <div className="contact-info">
                {contactInfo.map((contact, index) => (
                  <a key={index} href={contact.href} className="contact-item">
                    <i className={`fas fa-${contact.icon}`}></i>
                    <span>{contact.text}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Sponsors Section */}
          <div className="footer-sponsors">
            <h3 className="sponsors-title">Supported by</h3>
            <div className="sponsors-grid">
              {sponsors.map((sponsor, index) => (
                <div key={index} className="sponsor-item">
                  <i className={`fab fa-${sponsor.logo}`}></i>
                  <span>{sponsor.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; {currentYear} HackIgnite. All rights reserved.</p>
            </div>
            
            <div className="legal-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookie Policy</a>
            </div>
            
            <div className="back-to-top">
              <a href="#home">
                <i className="fas fa-arrow-up"></i>
                Back to Top
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;