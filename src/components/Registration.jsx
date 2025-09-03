// components/Registration.jsx
import React, { useState } from 'react';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    team: 'solo',
    teamName: '',
    teamMembers: '',
    track: '',
    experience: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Registration submitted successfully!');
  };

  return (
    <section id="register" className="registration">
      <div className="container">
        <h2 className="section-title">Register for <span className="section-title-accent">HackIgnite</span></h2>
        <p className="section-subtitle">Join the innovation revolution. Limited spots available!</p>
        
        <div className="registration-content">
          <div className="registration-info">
            <div className="info-card">
              <h3>Why Register?</h3>
              <ul>
                <li><i className="fas fa-trophy"></i> Chance to win exciting prizes</li>
                <li><i className="fas fa-users"></i> Network with industry experts</li>
                <li><i className="fas fa-code"></i> Enhance your coding skills</li>
                <li><i className="fas fa-certificate"></i> Get participation certificate</li>
                <li><i className="fas fa-utensils"></i> Free meals and snacks</li>
                <li><i className="fas fa-tshirt"></i> Cool hackathon swag</li>
              </ul>
            </div>
            
            <div className="stats-card">
              <h3>Registration Stats</h3>
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">327</div>
                  <div className="stat-label">Registered</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">150</div>
                  <div className="stat-label">Spots Left</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">7</div>
                  <div className="stat-label">Days Left</div>
                </div>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '68%'}}></div>
              </div>
              <div className="progress-text">68% filled</div>
            </div>
          </div>
          
          <div className="registration-form-container">
            <form className="registration-form" onSubmit={handleSubmit}>
              <div className="form-header">
                <h3>Registration Form</h3>
                <p>Fill in your details to secure your spot</p>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="experience">Experience Level *</label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select your experience</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label>Participation Type *</label>
                <div className="radio-group">
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="team"
                      value="solo"
                      checked={formData.team === 'solo'}
                      onChange={handleInputChange}
                    />
                    <span className="radio-checkmark"></span>
                    Solo Participant
                  </label>
                  
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="team"
                      value="team"
                      checked={formData.team === 'team'}
                      onChange={handleInputChange}
                    />
                    <span className="radio-checkmark"></span>
                    Team Registration
                  </label>
                </div>
              </div>
              
              {formData.team === 'team' && (
                <>
                  <div className="form-group">
                    <label htmlFor="teamName">Team Name</label>
                    <input
                      type="text"
                      id="teamName"
                      name="teamName"
                      value={formData.teamName}
                      onChange={handleInputChange}
                      placeholder="Enter your team name"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="teamMembers">Team Members (comma separated)</label>
                    <input
                      type="text"
                      id="teamMembers"
                      name="teamMembers"
                      value={formData.teamMembers}
                      onChange={handleInputChange}
                      placeholder="Member1, Member2, Member3"
                    />
                  </div>
                </>
              )}
              
              <div className="form-group">
                <label htmlFor="track">Preferred Track</label>
                <select
                  id="track"
                  name="track"
                  value={formData.track}
                  onChange={handleInputChange}
                >
                  <option value="">Select a track (optional)</option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile Development</option>
                  <option value="ai">AI & Machine Learning</option>
                  <option value="iot">IoT & Hardware</option>
                  <option value="blockchain">Blockchain</option>
                </select>
              </div>
              
              <button type="submit" className="submit-btn">
                Register Now <i className="fas fa-arrow-right"></i>
              </button>
              
              <p className="form-footer">
                By registering, you agree to our <a href="#terms">Terms & Conditions</a> and <a href="#privacy">Privacy Policy</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;