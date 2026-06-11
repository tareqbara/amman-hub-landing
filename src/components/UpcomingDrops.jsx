import React from 'react';

const UpcomingDrops = () => {
  const drops = [
    { id: 1, title: 'Black Iris Collection', type: 'Art Print', image: '/insget.net_instagram_6a2ab98277bfa.jpg' },
    { id: 2, title: 'Amman Streetwear V0.1', type: 'Hoodie', image: '/insget.net_instagram_6a2aba01ccc26.jpg' },
    { id: 3, title: 'Meet The Artist Series', type: 'Bespoke Accessory', image: '/insget.net_instagram_6a2ab9832ab41.jpg' },
  ];

  return (
    <section id="drops" className="section" style={{ backgroundColor: 'rgba(126, 34, 206, 0.05)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
          <div>
            <h2>The Storefront</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>Limited-edition drops from Amman's finest.</p>
          </div>
          <a href="#" style={{ color: 'var(--color-primary-light)', textDecoration: 'none', fontWeight: 600 }}>View All Drops &rarr;</a>
        </div>
        
        <div className="grid grid-cols-3">
          {drops.map((drop, index) => (
            <div key={drop.id} className={`glass-panel animate-fade-in delay-${(index + 1) * 100}`} style={{ padding: '1rem' }}>
              <div style={{ height: '300px', borderRadius: '0.5rem', overflow: 'hidden', marginBottom: '1rem' }}>
                <img src={drop.image} alt={drop.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.2rem' }}>{drop.type}</div>
                  <h4 style={{ margin: 0, fontSize: '1.2rem' }}>{drop.title}</h4>
                </div>
                <button className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Notify Me</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingDrops;
