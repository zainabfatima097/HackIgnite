// components/Timeline.jsx
import React from 'react';

const Timeline = () => {
  const timelineEvents = [
    {
      id: 1,
      title: "Registration Opens",
      date: "September 15, 2025",
      description: "Register individually or as a team of up to 4 members.",
      icon: "calendar-day"
    },
    {
      id: 2,
      title: "Hackathon Begins",
      date: "October 20, 2025 - 9:00 AM",
      description: "Kickoff ceremony, team formation, and idea pitching.",
      icon: "hourglass-start"
    },
    {
      id: 3,
      title: "Coding Phase",
      date: "October 20-21, 2025",
      description: "24 hours of intense coding, with mentorship and workshops.",
      icon: "laptop-code"
    },
    {
      id: 4,
      title: "Project Submission & Judging",
      date: "October 21, 2025 - 10:00 AM",
      description: "Submit your projects and present to judges.",
      icon: "trophy"
    },
    {
      id: 5,
      title: "Winner Announcement",
      date: "October 21, 2025 - 4:00 PM",
      description: "Closing ceremony and prize distribution.",
      icon: "award"
    }
  ];

  return (
    <section id="timeline" className="timeline">
      <div className="container">
        <h2 className="section-title">Event <span className="section-title-accent">Timeline</span></h2>
        <p className="section-subtitle">Mark your calendars for these important dates</p>
        
        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {timelineEvents.map((event, index) => (
            <div key={event.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <div className="timeline-icon">
                  <i className={`fas fa-${event.icon}`}></i>
                </div>
                <div className="timeline-details">
                  <h3 className="timeline-title">{event.title}</h3>
                  <div className="timeline-date">{event.date}</div>
                  <p className="timeline-description">{event.description}</p>
                </div>
                <div className="timeline-marker"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;