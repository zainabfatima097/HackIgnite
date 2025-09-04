// components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About <span className="section-title-accent">HackIgnite</span></h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              HackIgnite is a 24-hour hackathon organized by Shadan Women's College of Engineering and Technology, Hyderabad, bringing together the most creative minds to build innovative solutions to real-world problems.
            </p>
            <p>
              Whether you're a beginner or an experienced hacker, HackIgnite provides the perfect platform to learn, collaborate, and create something amazing.
            </p>
            
            <div className="about-stats">
              <div className="about-stat">
                <div className="about-stat-number">10</div>
                <div className="about-stat-label">Hours of Coding</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-number">10+</div>
                <div className="about-stat-label">Technical Workshops</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-number">3</div>
                <div className="about-stat-label">Themed Tracks</div>
              </div>
            </div>
          </div>
          
          <div className="about-card">
            <div className="about-card-image">
              <img src="https://www.google.com/imgres?q=hackathon%20women%20images&imgurl=https%3A%2F%2Ftechnical.ly%2Fwp-content%2Fuploads%2F2013%2F03%2Fladyhacks.jpg&imgrefurl=https%3A%2F%2Ftechnical.ly%2Fdiversity-equity-inclusion%2Fladyhacks-7-projects-from-phillys-first-women-only-hackathon%2F&docid=Qe75MU7_VEijaM&tbnid=PbbdPQNO_icc4M&vet=12ahUKEwiWhdvmsr-PAxXgUGwGHXMJFDEQM3oECB8QAA..i&w=800&h=533&hcb=2&ved=2ahUKEwiWhdvmsr-PAxXgUGwGHXMJFDEQM3oECB8QAA" 
                   alt="Hackathon participants collaborating" />
            </div>
            <div className="about-card-content">
              <h3>Why Participate?</h3>
              <ul>
                <li><i className="fas fa-trophy"></i> Win exciting prizes and swag</li>
                <li><i className="fas fa-network-wired"></i> Network with industry professionals</li>
                <li><i className="fas fa-code"></i> Learn new technologies and skills</li>
                <li><i className="fas fa-users"></i> Build your portfolio with real projects</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;