import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HeaderWebsite from './components/header_website';
import ContentWebsite from './components/content_website';
import FooterWebsite from './components/footer_website';
import LoginWebsite from './components/login_website';
import RegisterWebsite from './components/register_website';

const Home = () => (
  <>
    <HeaderWebsite />
    <ContentWebsite />
    <FooterWebsite />
  </>
);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginWebsite />} />
        <Route path="/register" element={<RegisterWebsite />} />
      </Routes>
    </div>
  );
}

export default App;
