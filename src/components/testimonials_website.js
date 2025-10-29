import React from 'react';
import './testimonials_website.css';

const TestimonialsWebsite = () => {
  return (
    <section className="testimonials-website fade-in-section">
      <h2>Témoignages</h2>
      <div className="testimonials-container">
        <div className="testimonial-card">
          <p>"EasyHome m'a aidé à trouver la maison de mes rêves en un temps record. Je recommande vivement cette plateforme."</p>
          <h4>- Marie, Yaoundé</h4>
        </div>
        <div className="testimonial-card">
          <p>"J'ai trouvé un appartement incroyable grâce à EasyHome. L'interface est simple et efficace."</p>
          <h4>- Jean, Douala</h4>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsWebsite;
