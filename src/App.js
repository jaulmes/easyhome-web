import React from 'react';
import './App.css';
import HeaderWebsite from './components/header_website';
import ContentWebsite from './components/content_website';
import FooterWebsite from './components/footer_website';

function App() {
  return (
    <div className="App">
      <HeaderWebsite />
      <ContentWebsite />
      <FooterWebsite />
    </div>
  );
}

export default App;
