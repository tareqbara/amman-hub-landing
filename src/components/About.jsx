import React from 'react';
import { Users, ShoppingBag } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="animate-fade-in">
          <h2>Bridging the Gap</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-muted)' }}>
            We turn Amman into a regional creative powerhouse by bridging the gap between highly talented artists and commercial success.
          </p>
        </div>
        
        <div className="grid grid-cols-2">
          <div className="glass-panel animate-fade-in delay-100">
            <div style={{ color: 'var(--color-primary-light)', marginBottom: '1rem' }}>
              <Users size={40} />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>The Creator Community</h3>
            <p style={{ color: 'var(--color-text-muted)' }}>
              A unifying network for local painters, fashion designers, and digital artists. Through workshops, live art contests, and shared spaces, we bring talent out of the shadows and foster collaboration.
            </p>
          </div>
          
          <div className="glass-panel animate-fade-in delay-200">
            <div style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>
              <ShoppingBag size={40} />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>The Commercial Engine</h3>
            <p style={{ color: 'var(--color-text-muted)' }}>
              A premium, curated storefront. We turn local talent into physical, collectible assets, selling limited-edition drops of art prints and bespoke streetwear to an audience craving authentic culture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
