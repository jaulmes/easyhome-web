import React from 'react';
import './recent_announcements_website.css';

const RecentAnnouncementsWebsite = () => {
  return (
    <section className="recent-announcements-website fade-in-section">
      <h2>Annonces récentes</h2>
      <div className="announcements-container">
        <div className="announcement-card">
          <img src="https://via.placeholder.com/300" alt="placeholder" />
          <h3>Appartement à louer</h3>
          <p>Yaoundé, Cameroun</p>
        </div>
        <div className="announcement-card">
          <img src="https://via.placeholder.com/300" alt="placeholder" />
          <h3>Maison à louer</h3>
          <p>Douala, Cameroun</p>
        </div>
        <div className="announcement-card">
          <img src="https://via.placeholder.com/300" alt="placeholder" />
          <h3>Studio à louer</h3>
          <p>Bafoussam, Cameroun</p>
        </div>
      </div>
    </section>
  );
};

export default RecentAnnouncementsWebsite;
