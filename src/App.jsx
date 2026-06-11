import React from 'react';
import { Sparkles } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import UpcomingDrops from './components/UpcomingDrops';
import CommunityEvents from './components/CommunityEvents';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <nav style={{ padding: '1rem 0', position: 'fixed', width: '100%', top: 0, zIndex: 50, background: 'var(--color-glass-bg)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--color-glass-border)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <Sparkles size={24} color="var(--color-accent)" />
            <span className="text-gradient" style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-serif)', letterSpacing: '1px' }}>
              Amman Hub
            </span>
          </a>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="#about" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, transition: 'color 0.3s ease' }} onMouseOver={(e) => e.target.style.color = 'var(--color-accent)'} onMouseOut={(e) => e.target.style.color = 'white'}>About</a>
            <a href="#drops" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, transition: 'color 0.3s ease' }} onMouseOver={(e) => e.target.style.color = 'var(--color-accent)'} onMouseOut={(e) => e.target.style.color = 'white'}>Drops</a>
            <a href="#events" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, transition: 'color 0.3s ease' }} onMouseOver={(e) => e.target.style.color = 'var(--color-accent)'} onMouseOut={(e) => e.target.style.color = 'white'}>Events</a>
          </div>
        </div>
      </nav>
      
      <Hero />
      <About />
      <UpcomingDrops />
      <CommunityEvents />
      <Footer />
    </div>
  );
}

export default App;
