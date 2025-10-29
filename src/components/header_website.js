import React from 'react';
import { Link } from 'react-router-dom';
import './header_website.css';
import logo from '../assets/logo.png';

const HeaderWebsite = () => {
  return (
    <header className="header-website">
      <div className="logo-container">
        <Link to="/"><img src={logo} alt="EasyHome Logo" className="logo" /></Link>
      </div>
      <div className="search-container">
        <input type="text" placeholder="Rechercher..." />
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/login">Connexion</Link></li>
          <li><Link to="/register">Créer un compte</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderWebsite;
