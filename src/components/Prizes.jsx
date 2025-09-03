// components/Prizes.jsx
import React from 'react';

const Prizes = () => {
  const prizeTracks = [
    {
      id: 1,
      title: "Overall Winners",
      description: "Grand prizes for the best projects across all tracks",
      prizes: [
        { position: "1st", amount: "Rs. 5,000/-", details: "Cash prize + mentorship" },
        { position: "2nd", amount: "Rs. 3,000/-", details: "Cash prize + swag kit" },
        { position: "3rd", amount: "Rs. 2,000/-", details: "Cash prize + certificates" }
      ],
      icon: "trophy",
      color: "#FFD700"
    },
    {
      id: 2,
      title: "AI/ML Track",
      description: "Best projects in Artificial Intelligence & Machine Learning",
      prizes: [
        { position: "1st", amount: "Rs. 2,500/-", details: "Cash prize + AWS credits" },
        { position: "2nd", amount: "Rs. 1,500/-", details: "Cash prize + API access" },
        { position: "3rd", amount: "Rs. 1,000/-", details: "Cash prize + resources" }
      ],
      icon: "robot",
      color: "#6366F1"
    },
    {
      id: 3,
      title: "Web Development",
      description: "Most innovative web applications and solutions",
      prizes: [
        { position: "1st", amount: "Rs. 2,500/-", details: "Cash prize + domain bundle" },
        { position: "2nd", amount: "Rs. 1,500/-", details: "Cash prize + hosting" },
        { position: "3rd", amount: "Rs. 1,000/-", details: "Cash prize + tools" }
      ],
      icon: "globe",
      color: "#EC4899"
    }
  ];

  const specialPrizes = [
    {
      title: "Best Design",
      prize: "Rs. 1,000/-",
      icon: "palette",
      color: "#10B981"
    },
    {
      title: "Most Innovative",
      prize: "Rs. 1,000/-",
      icon: "lightbulb",
      color: "#F59E0B"
    },
    {
      title: "People's Choice",
      prize: "Rs. 1,000/-",
      icon: "users",
      color: "#EF4444"
    },
    {
      title: "Best Beginner Project",
      prize: "Rs. 1,000/-",
      icon: "seedling",
      color: "#06B6D4"
    }
  ];

  const sponsors = [
    { name: "Google Cloud", tier: "Platinum", logo: "google" },
    { name: "AWS", tier: "Platinum", logo: "aws" },
    { name: "Microsoft", tier: "Gold", logo: "microsoft" },
  ];

  return (
    <section id="prizes" className="prizes">
      <div className="container">
        <h2 className="section-title">HackIgnite <span className="section-title-accent">Prizes</span></h2>
        <p className="section-subtitle">Win amazing prizes and opportunities worth over Rs. 30,000/-!</p>
        
        <div className="prizes-grid">
          {prizeTracks.map(track => (
            <div key={track.id} className="prize-track">
              <div className="track-header">
                <div className="track-icon" style={{ backgroundColor: `${track.color}20`, color: track.color }}>
                  <i className={`fas fa-${track.icon}`}></i>
                </div>
                <h3>{track.title}</h3>
                <p>{track.description}</p>
              </div>
              
              <div className="prize-levels">
                {track.prizes.map((prize, index) => (
                  <div key={index} className="prize-level">
                    <div className="position-badge" style={{ backgroundColor: track.color }}>
                      {prize.position}
                    </div>
                    <div className="prize-details">
                      <div className="prize-amount">{prize.amount}</div>
                      <div className="prize-info">{prize.details}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="special-prizes">
          <h3 className="special-title">Special Category Prizes</h3>
          <p className="special-subtitle">Additional opportunities to win</p>
          
          <div className="special-grid">
            {specialPrizes.map((prize, index) => (
              <div key={index} className="special-card">
                <div className="special-icon" style={{ color: prize.color }}>
                  <i className={`fas fa-${prize.icon}`}></i>
                </div>
                <h4>{prize.title}</h4>
                <div className="special-amount">{prize.prize}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="sponsors-section">
          <h3 className="sponsors-title">Supported by Our Sponsors</h3>
          <p className="sponsors-subtitle">Thanks to these amazing companies for making HackIgnite possible</p>
          
          <div className="sponsors-grid">
            {sponsors.map((sponsor, index) => (
              <div key={index} className={`sponsor-card ${sponsor.tier.toLowerCase()}`}>
                <div className="sponsor-icon">
                  <i className={`fab fa-${sponsor.logo}`}></i>
                </div>
                <div className="sponsor-info">
                  <h4>{sponsor.name}</h4>
                  <span className={`sponsor-tier ${sponsor.tier.toLowerCase()}`}>{sponsor.tier}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="prizes-footer">
          <div className="prizes-cta">
            <h3>Ready to Compete for These Amazing Prizes?</h3>
            <p>Register now and showcase your skills to win these incredible rewards</p>
            <button className="cta-button">
              Register Now <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;