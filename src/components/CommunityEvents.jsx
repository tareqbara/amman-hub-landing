import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const CommunityEvents = () => {
  const events = [
    { id: 1, title: 'Live Art Battle: The Hidden Amman', date: 'Oct 24, 2026', location: 'Darat al Funun', image: '/insget.net_instagram_6a2ab92d119c3.jpg' },
    { id: 2, title: 'Creator Workshop: Digital Illustration', date: 'Nov 05, 2026', location: 'Weibdeh Hub', image: '/insget.net_instagram_6a2ab93321dbb.jpg' }
  ];

  return (
    <section id="events" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2>Community & Events</h2>
          <p style={{ color: 'var(--color-text-muted)' }}>Join the movement and connect with creators in person.</p>
        </div>
        
        <div className="grid grid-cols-2">
          {events.map((event, index) => (
            <div key={event.id} className={`glass-panel animate-fade-in delay-${(index + 1) * 100}`} style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <div style={{ width: '120px', height: '120px', borderRadius: '0.5rem', overflow: 'hidden', flexShrink: 0 }}>
                <img src={event.image} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{event.title}</h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                  <Calendar size={16} color="var(--color-primary-light)" /> {event.date}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                  <MapPin size={16} color="var(--color-primary-light)" /> {event.location}
                </div>
                <button className="btn btn-outline" style={{ padding: '0.4rem 1rem', fontSize: '0.85rem' }}>Get Tickets</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityEvents;
