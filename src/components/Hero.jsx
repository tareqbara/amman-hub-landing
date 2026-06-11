import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div className="grid grid-cols-2" style={{ alignItems: 'center' }}>
          <div className="animate-fade-in">
            <h1>The Artistic Capital of the <span className="text-gradient">MENA Region</span></h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--color-text-muted)' }}>
              Amman Hub is a premium movement bringing isolated creators out of the shadows and connecting them with a culture-craving audience.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#drops" className="btn btn-primary">
                Shop Limited Drops <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
              </a>
              <a href="#about" className="btn btn-outline">Explore the Hub</a>
            </div>
          </div>
          <div className="animate-fade-in delay-200" style={{ position: 'relative' }}>
            <div className="glass-panel" style={{ padding: '1rem', transform: 'rotate(2deg)' }}>
              <img 
                src="/insget.net_instagram_6a2ab9348fdcc.jpg" 
                alt="Amman Hub Hero" 
                style={{ width: '100%', borderRadius: '0.5rem', display: 'block' }}
              />
            </div>
            <div className="glass-panel" style={{ position: 'absolute', bottom: '-2rem', left: '-2rem', padding: '1rem', width: '200px', transform: 'rotate(-5deg)' }}>
              <p style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem' }}>Next Drop</p>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-accent)' }}>48:00:00</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
