import React from 'react';
import './how_it_works_website.css';

const HowItWorksWebsite = () => {
  return (
    <section className="how-it-works-website fade-in-section">
      <h2>Comment ça marche</h2>
      <div className="steps">
        <div className="step">
          <h3>1. Cherchez & Découvrez</h3>
          <p>Parcourez des milliers d'annonces de location vérifiées avec des filtres de recherche avancés pour trouver le logement qui vous convient.</p>
        </div>
        <div className="step">
          <h3>2. Connectez & Visitez</h3>
          <p>Prenez contact directement avec les propriétaires ou les agences immobilières pour organiser des visites et poser vos questions.</p>
        </div>
        <div className="step">
          <h3>3. Sécurisez votre maison</h3>
          <p>Signez votre bail en toute sécurité et préparez-vous à emménager dans votre nouvelle maison en toute tranquillité.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksWebsite;
