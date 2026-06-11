import React from 'react';

const Footer = () => {
  return (
    <footer style={{ borderTop: '1px solid var(--color-glass-border)', padding: '4rem 0 2rem 0', marginTop: '2rem' }}>
      <div className="container">
        <div className="footer-grid" style={{ marginBottom: '3rem' }}>
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Amman Hub</h2>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '300px' }}>
              The Artistic Capital of the MENA Region. Bridging creators and community.
            </p>
          </div>
          <div>
            <h4 style={{ marginBottom: '1rem' }}>Join the Newsletter</h4>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <input 
                type="email" 
                placeholder="Your email address" 
                style={{ 
                  flex: 1, 
                  minWidth: '200px',
                  padding: '0.75rem 1rem', 
                  borderRadius: '0.5rem', 
                  border: '1px solid var(--color-glass-border)', 
                  background: 'rgba(255,255,255,0.05)', 
                  color: 'white',
                  outline: 'none'
                }} 
              />
              <button className="btn btn-primary" style={{ flexShrink: 0 }}>Subscribe</button>
            </div>
          </div>
        </div>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', gap: '1rem' }}>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
            &copy; {new Date().getFullYear()} Amman Hub. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <a href="https://www.instagram.com/itsamman.hub/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-primary-light)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
