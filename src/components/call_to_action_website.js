import React from 'react';
import './call_to_action_website.css';

const CallToActionWebsite = () => {
  return (
    <section className="call-to-action-website fade-in-section">
      <h2>Prêt à trouver votre nouvelle maison ?</h2>
      <div className="cta-buttons">
        <a href="#login" className="cta-button">Se connecter</a>
        <a href="#signup" className="cta-button">Créer un compte</a>
      </div>
    </section>
  );
};

export default CallToActionWebsite;
