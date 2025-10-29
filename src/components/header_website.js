import React from 'react';
import './header_website.css';
import logo from '../assets/logo.png';

const HeaderWebsite = () => {
  return (
    <header className="header-website">
      <div className="logo-container">
        <img src={logo} alt="EasyHome Logo" className="logo" />
      </div>
      <div className="search-container">
        <input type="text" placeholder="Rechercher..." />
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="#login">Connexion</a></li>
          <li><a href="#signup">Créer un compte</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderWebsite;
