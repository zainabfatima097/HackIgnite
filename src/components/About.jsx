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
              <img src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" 
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