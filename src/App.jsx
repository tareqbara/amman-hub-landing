import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import UpcomingDrops from './components/UpcomingDrops';
import CommunityEvents from './components/CommunityEvents';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <nav style={{ padding: '1.5rem 0', position: 'absolute', width: '100%', top: 0, zIndex: 10 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-serif)', letterSpacing: '1px' }}>
            Amman Hub
          </div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="#about" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem' }}>About</a>
            <a href="#drops" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem' }}>Drops</a>
            <a href="#events" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem' }}>Events</a>
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
