import React from 'react';
import './home_website.css';

const HomeWebsite = () => {
  return (
    <div className="home-website">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Trouvez votre prochaine maison, sans effort.</h1>
          <p>Les meilleures annonces de location au Cameroun, rien que pour vous.</p>
          <div className="search-bar">
            <input type="text" placeholder="Rechercher par ville, quartier, ou code postal" />
            <button>Rechercher</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeWebsite;
