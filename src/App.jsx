import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import UpcomingDrops from './components/UpcomingDrops';
import CommunityEvents from './components/CommunityEvents';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="app-container">
      <nav style={{ padding: '1.5rem 0', position: 'absolute', width: '100%', top: 0, zIndex: 50, background: 'transparent' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', zIndex: 60 }}>
            <span className="text-gradient" style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-serif)', letterSpacing: '1px', whiteSpace: 'nowrap' }}>
              Amman Hub
            </span>
          </a>
          
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', zIndex: 60 }}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          
          <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <a href="#about" onClick={() => setIsMenuOpen(false)} style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, transition: 'color 0.3s ease' }} onMouseOver={(e) => e.target.style.color = 'var(--color-accent)'} onMouseOut={(e) => e.target.style.color = 'white'}>About</a>
            <a href="#drops" onClick={() => setIsMenuOpen(false)} style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, transition: 'color 0.3s ease' }} onMouseOver={(e) => e.target.style.color = 'var(--color-accent)'} onMouseOut={(e) => e.target.style.color = 'white'}>Drops</a>
            <a href="#events" onClick={() => setIsMenuOpen(false)} style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, transition: 'color 0.3s ease' }} onMouseOver={(e) => e.target.style.color = 'var(--color-accent)'} onMouseOut={(e) => e.target.style.color = 'white'}>Events</a>
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
