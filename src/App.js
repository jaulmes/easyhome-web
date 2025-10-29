import React from 'react';
import './App.css';
import HeaderWebsite from './components/header_website';
import HomeWebsite from './components/home_website';
import HowItWorksWebsite from './components/how_it_works_website';
import RecentAnnouncementsWebsite from './components/recent_announcements_website';
import WhyChooseEasyHomeWebsite from './components/why_choose_easyhome_website';
import TestimonialsWebsite from './components/testimonials_website';
import CallToActionWebsite from './components/call_to_action_website';
import FooterWebsite from './components/footer_website';

function App() {
  return (
    <div className="App">
      <HeaderWebsite />
      <HomeWebsite />
      <HowItWorksWebsite />
      <RecentAnnouncementsWebsite />
      <WhyChooseEasyHomeWebsite />
      <TestimonialsWebsite />
      <CallToActionWebsite />
      <FooterWebsite />
    </div>
  );
}

export default App;
