// components/FAQ.jsx
import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqCategories = [
    {
      title: "General Questions",
      icon: "question-circle",
      questions: [
        {
          question: "What is HackIgnite?",
          answer: "HackIgnite is a 24-hour hackathon organized by our college that brings together students, developers, and innovators to build creative solutions to real-world problems. It's a platform to learn, collaborate, and showcase your technical skills."
        },
        {
          question: "Who can participate?",
          answer: "The hackathon is open to all college students. Whether you're a beginner or an experienced developer, everyone is welcome! You can participate individually or in teams of up to 4 members."
        },
        {
          question: "Do I need to pay to participate?",
          answer: "No, HackIgnite is completely free for all participants. We provide meals, snacks, and swag throughout the event at no cost."
        },
        {
          question: "What if I don't have a team?",
          answer: "No worries! We'll have team formation sessions at the beginning of the event. You can also participate as an individual and we'll help you find teammates with complementary skills."
        }
      ]
    },
    {
      title: "Registration & Application",
      icon: "clipboard-list",
      questions: [
        {
          question: "How do I register for HackIgnite?",
          answer: "You can register by clicking the 'Register Now' button on our website. Fill out the application form with your details, skills, and any previous experience. We'll review applications and send confirmations within a week."
        },
        {
          question: "When does registration close?",
          answer: "Registration closes on October 10, 2023. However, we recommend registering early as spots are limited and we accept applications on a rolling basis."
        },
        {
          question: "What information do I need to apply?",
          answer: "You'll need to provide basic contact information, your educational background, technical skills, and any previous project experience. For team registration, you'll need details of all team members."
        },
        {
          question: "Can I change my application after submitting?",
          answer: "Yes, you can update your application until the registration deadline. Simply log in to your account and make the necessary changes."
        }
      ]
    },
    {
      title: "Event Details",
      icon: "calendar-alt",
      questions: [
        {
          question: "When and where will HackIgnite take place?",
          answer: "HackIgnite will be held on October 20-21, 2023 at our college campus. The exact venue details will be shared with selected participants via email one week before the event."
        },
        {
          question: "What is the schedule for the event?",
          answer: "The event kicks off at 9:00 AM on October 20 with an opening ceremony, followed by hacking sessions, workshops, and mentorship. Project submissions are due by 10:00 AM on October 21, with judging and awards ceremony concluding by 4:00 PM."
        },
        {
          question: "What should I bring to the event?",
          answer: "Bring your laptop, charger, any hardware you plan to use, valid student ID, and your enthusiasm! We'll provide food, drinks, snacks, and a comfortable working environment."
        },
        {
          question: "Will there be workshops or mentorship?",
          answer: "Yes! We'll have technical workshops throughout the event covering various technologies. Industry mentors will also be available to help you with your projects and provide guidance."
        }
      ]
    },
    {
      title: "Projects & Judging",
      icon: "code",
      questions: [
        {
          question: "What can I build during the hackathon?",
          answer: "You can build anything—web apps, mobile apps, hardware projects, AI/ML solutions, or anything else you're passionate about. Projects will be judged based on creativity, technical complexity, usability, and impact."
        },
        {
          question: "Do I need to have an idea before the event?",
          answer: "It's helpful to have some ideas, but not required. We'll have idea pitching sessions and problem statements from our sponsors to inspire you. Many participants come up with their best ideas during the hackathon!"
        },
        {
          question: "What are the judging criteria?",
          answer: "Projects are judged on four main criteria: innovation (25%), technical complexity (25%), design/UX (25%), and practicality/impact (25%). There are also special category prizes for specific achievements."
        },
        {
          question: "Can I work on a project I started before?",
          answer: "No, all projects must be started from scratch during the hackathon. You can plan and brainstorm ideas beforehand, but coding should only happen during the event period."
        }
      ]
    }
  ];

  return (
    <section id="faq" className="faq">
      <div className="container">
        <h2 className="section-title">Frequently Asked <span className="section-title-accent">Questions</span></h2>
        <p className="section-subtitle">Find answers to common questions about HackIgnite</p>
        
        <div className="faq-content">
          <div className="faq-categories">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="faq-category">
                <div className="category-header">
                  <div className="category-icon">
                    <i className={`fas fa-${category.icon}`}></i>
                  </div>
                  <h3>{category.title}</h3>
                </div>
                
                <div className="faq-list">
                  {category.questions.map((item, index) => (
                    <div 
                      key={index} 
                      className={`faq-item ${activeIndex === `${categoryIndex}-${index}` ? 'active' : ''}`}
                    >
                      <button 
                        className="faq-question"
                        onClick={() => toggleFAQ(`${categoryIndex}-${index}`)}
                      >
                        <span>{item.question}</span>
                        <i className={`fas fa-chevron-${activeIndex === `${categoryIndex}-${index}` ? 'up' : 'down'}`}></i>
                      </button>
                      
                      <div className="faq-answer">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="faq-sidebar">
            <div className="support-card">
              <div className="support-header">
                <i className="fas fa-headset"></i>
                <h3>Need More Help?</h3>
              </div>
              <p>Can't find the answer you're looking for? Our support team is here to help you!</p>
              
              <div className="support-options">
                <div className="support-option">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <h4>Email Us</h4>
                    <p>support@hackignite.com</p>
                  </div>
                </div>
                
                <div className="support-option">
                  <i className="fab fa-discord"></i>
                  <div>
                    <h4>Join Discord</h4>
                    <p>Get real-time help</p>
                  </div>
                </div>
                
                <div className="support-option">
                  <i className="fas fa-file-alt"></i>
                  <div>
                    <h4>Documentation</h4>
                    <p>Check our guide</p>
                  </div>
                </div>
              </div>
              
              <button className="support-button">
                Contact Support <i className="fas fa-arrow-right"></i>
              </button>
            </div>
            
            <div className="quick-links">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#register"><i className="fas fa-user-plus"></i> Registration Info</a></li>
                <li><a href="#timeline"><i className="fas fa-calendar"></i> Event Schedule</a></li>
                <li><a href="#prizes"><i className="fas fa-trophy"></i> Prizes & Judging</a></li>
                <li><a href="#rules"><i className="fas fa-book"></i> Code of Conduct</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;