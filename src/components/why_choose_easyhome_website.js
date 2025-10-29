import React from 'react';
import './why_choose_easyhome_website.css';

const WhyChooseEasyHomeWebsite = () => {
  return (
    <section className="why-choose-easyhome-website fade-in-section">
      <h2>Pourquoi choisir EasyHome</h2>
      <div className="features-container">
        <div className="feature">
          <h3>Vaste choix de propriétés</h3>
          <p>Des milliers d'annonces de location vérifiées à travers le Cameroun.</p>
        </div>
        <div className="feature">
          <h3>Recherche simplifiée</h3>
          <p>Filtres de recherche avancés pour trouver le logement qui vous convient.</p>
        </div>
        <div className="feature">
          <h3>Contact direct</h3>
          <p>Prenez contact directement avec les propriétaires ou les agences immobilières.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseEasyHomeWebsite;
