import React from 'react';
import HomeWebsite from './home_website';
import HowItWorksWebsite from './how_it_works_website';
import RecentAnnouncementsWebsite from './recent_announcements_website';
import WhyChooseEasyHomeWebsite from './why_choose_easyhome_website';
import TestimonialsWebsite from './testimonials_website';
import CallToActionWebsite from './call_to_action_website';

const ContentWebsite = () => {
  return (
    <main>
      <HomeWebsite />
      <HowItWorksWebsite />
      <RecentAnnouncementsWebsite />
      <WhyChooseEasyHomeWebsite />
      <TestimonialsWebsite />
      <CallToActionWebsite />
    </main>
  );
};

export default ContentWebsite;
