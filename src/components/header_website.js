import React from 'react';
import './header_website.css';
import logo from '../logo.png';

const HeaderWebsite = () => {
  return (
    <header className="header-website">
      <div className="logo-container">
        <img src={logo} alt="EasyHome Logo" className="logo" />
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="#search">Recherche</a></li>
          <li><a href="#login">Connexion</a></li>
          <li><a href="#signup">Créer un compte</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderWebsite;
