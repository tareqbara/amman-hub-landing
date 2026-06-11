import React from 'react';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ borderTop: '1px solid var(--color-glass-border)', padding: '4rem 0 2rem 0', marginTop: '2rem' }}>
      <div className="container">
        <div className="grid grid-cols-2" style={{ marginBottom: '3rem' }}>
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Amman Hub</h2>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '300px' }}>
              The Artistic Capital of the MENA Region. Bridging creators and community.
            </p>
          </div>
          <div>
            <h4 style={{ marginBottom: '1rem' }}>Join the Newsletter</h4>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input 
                type="email" 
                placeholder="Your email address" 
                style={{ 
                  flex: 1, 
                  padding: '0.75rem 1rem', 
                  borderRadius: '0.5rem', 
                  border: '1px solid var(--color-glass-border)', 
                  background: 'rgba(255,255,255,0.05)', 
                  color: 'white',
                  outline: 'none'
                }} 
              />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
            &copy; {new Date().getFullYear()} Amman Hub. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <a href="#" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Instagram</a>
            <a href="#" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Twitter</a>
            <a href="#" style={{ color: 'var(--color-text-muted)' }}><Mail size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
