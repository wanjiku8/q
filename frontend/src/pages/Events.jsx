import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const Events = () => {
  const [filter, setFilter] = useState('all');
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  
  const events = [
    {
      id: 4,
      title: "International Day Against Homophobia",
      date: "May 17, 2025",
      time: "All Day",
      location: "Various Locations",
      description: "Community events and awareness campaigns throughout Kenya to combat homophobia and discrimination. Includes panel discussions, film screenings, and solidarity marches in major cities.",
      image: "https://img.freepik.com/free-photo/broken-heart-concept_23-2151260999.jpg",
      type: "past"
    },
    {
      id: 5,
      title: "Queer Film Festival",
      date: "April 5-7, 2025",
      time: "Various Times",
      location: "Alliance Française, Nairobi",
      description: "A showcase of films highlighting LGBTQ+ stories, experiences, and perspectives from Africa and around the world. Includes Q&A sessions with filmmakers and actors.",
      image: "https://img.freepik.com/free-photo/illustration-breast-cancer-awareness-month-digital-art-style_23-2151827724.jpg",
      type: "past"
    },
    {
      id: 6,
      title: "Community Fundraising Gala",
      date: "March 28, 2025",
      time: "7:00 PM - 11:00 PM",
      location: "Radisson Blu Hotel, Nairobi",
      description: "An elegant evening to raise funds for Queer Kenya's community support programs. Features live entertainment, silent auction, and keynote speech by prominent LGBTQ+ activist.",
      image: "https://img.freepik.com/free-photo/international-women-s-day-celebration-equal-right-digital-art-style_23-2151368425.jpg",
      type: "past"
    }
  ];

  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(event => event.type === filter);

  // Responsive styles
  const heroStyles = {
    background: 'linear-gradient(135deg, #4c0585, #9B87F5)',
    color: 'white',
    padding: isMobile ? '3rem 1rem' : '4rem 2rem',
    textAlign: 'left'
  };

  const filterContainerStyles = {
    padding: isMobile ? '2rem 1rem' : '3rem 2rem',
    backgroundColor: 'white',
    borderBottom: '1px solid #eee',
    display: 'flex',
    justifyContent: isMobile ? 'center' : 'left',
    flexWrap: 'wrap',
    gap: '0.5rem'
  };

  const filterButtonStyles = (isActive) => ({
    padding: isMobile ? '0.5rem 1rem' : '0.75rem 1.5rem',
    borderRadius: '0.5rem',
    border: 'none',
    backgroundColor: isActive ? '#9B87F5' : '#f9f5ff',
    color: isActive ? 'white' : '#1A1F2C',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    fontSize: isMobile ? '0.875rem' : '1rem'
  });

  const eventsGridStyles = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: isMobile ? '1.5rem' : '2rem'
  };

  return (
    <main>
      {/* Hero Section */}
      <section style={heroStyles}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: isMobile ? '1.8rem' : '2.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            lineHeight: '1.1',
            fontFamily: "'Poppins', sans-serif"
          }}>Events</h1>
          <p style={{
            fontSize: isMobile ? '1rem' : '1.1rem',
            maxWidth: '1280px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Browse our community gatherings, workshops, and advocacy events.
          </p>
        </div>
      </section>

      {/* Events Filter */}
      <section style={filterContainerStyles}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <button 
              onClick={() => setFilter('all')}
              style={filterButtonStyles(filter === 'all')}
            >
              All Events
            </button>
            <button 
              onClick={() => setFilter('upcoming')}
              style={filterButtonStyles(filter === 'upcoming')}
            >
              Upcoming
            </button>
            <button 
              onClick={() => setFilter('past')}
              style={filterButtonStyles(filter === 'past')}
            >
              Past Events
            </button>
          </div>
        </div>
      </section>

      {/* Events Listing */}
      <section style={{
        padding: isMobile ? '2rem 1rem' : '4rem 2rem',
        backgroundColor: '#f9f9f9'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {filter !== 'all' && (
            <h2 style={{
              fontSize: isMobile ? '1.5rem' : '2rem',
              fontWeight: 'bold',
              marginBottom: '2rem',
              textAlign: 'center',
              color: '#1A1F2C'
            }}>
              {filter === 'upcoming' ? 'Upcoming Events' : 'Past Events'}
            </h2>
          )}
          
          <div style={eventsGridStyles}>
            {filteredEvents.map(event => (
              <EventCard key={event.id} event={event} isMobile={isMobile} />
            ))}
          </div>
          
          {filteredEvents.length === 0 && (
            <NoEventsMessage filter={filter} setFilter={setFilter} isMobile={isMobile} />
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection isMobile={isMobile} />
    </main>
  );
};

const EventCard = ({ event, isMobile }) => (
  <div style={{
    backgroundColor: 'white',
    borderRadius: '1rem',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    ':hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 15px rgba(0,0,0,0.1)'
    }
  }}>
    <img 
      src={event.image} 
      alt={event.title}
      style={{
        width: '100%',
        height: isMobile ? '180px' : '200px',
        objectFit: 'cover'
      }}
    />
    <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{
          backgroundColor: event.type === 'upcoming' ? '#9B87F5' : '#D6BCFA',
          color: 'white',
          fontSize: '0.875rem',
          padding: '0.25rem 0.75rem',
          borderRadius: '9999px',
          fontWeight: '500'
        }}>
          {event.type === 'upcoming' ? 'Upcoming' : 'Past'}
        </span>
        <span style={{ fontSize: '0.875rem', color: '#666' }}>{event.date}</span>
      </div>
      <h3 style={{ 
        fontSize: isMobile ? '1.25rem' : '1.5rem',
        fontWeight: 'bold', 
        marginBottom: '0.75rem', 
        color: '#1A1F2C' 
      }}>
        {event.title}
      </h3>
      <EventDetail icon="time" text={event.time} />
      <EventDetail icon="location" text={event.location} />
      <p style={{ 
        color: '#555', 
        lineHeight: '1.6', 
        marginBottom: '1.5rem', 
        flex: 1,
        fontSize: isMobile ? '0.875rem' : '1rem'
      }}>
        {event.description}
      </p>
      {event.type === 'upcoming' ? (
        <button style={primaryButtonStyles}>
          Register to Attend
        </button>
      ) : (
        <button style={secondaryButtonStyles}>
          View Event Photos
        </button>
      )}
    </div>
  </div>
);

const EventDetail = ({ icon, text }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
    {icon === 'time' ? (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#9B87F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 6V12L16 14" stroke="#9B87F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ) : (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#9B87F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#9B87F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )}
    <span style={{ color: '#555', fontSize: '0.875rem' }}>{text}</span>
  </div>
);

const NoEventsMessage = ({ filter, setFilter, isMobile }) => (
  <div style={{
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: 'white',
    borderRadius: '1rem',
    marginBottom: '2rem'
  }}>
    <h3 style={{
      fontSize: isMobile ? '1.25rem' : '1.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: '#1A1F2C'
    }}>
      No events found
    </h3>
    <p style={{ 
      color: '#555', 
      marginBottom: '1.5rem',
      fontSize: isMobile ? '0.875rem' : '1rem'
    }}>
      {filter === 'upcoming' 
        ? 'There are currently no upcoming events scheduled. Check back later!' 
        : 'There are currently no past events to display.'}
    </p>
    <button 
      onClick={() => setFilter('all')}
      style={primaryButtonStyles}
    >
      View All Events
    </button>
  </div>
);

const NewsletterSection = ({ isMobile }) => (
  <section style={{
    padding: isMobile ? '3rem 1rem' : '4rem 2rem',
    backgroundColor: '#9B87F5',
    color: 'white',
    textAlign: 'center'
  }}>
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{
        fontSize: isMobile ? '1.8rem' : '2rem',
        fontWeight: 'bold',
        marginBottom: '1.5rem'
      }}>Never Miss an Event</h2>
      <p style={{
        fontSize: isMobile ? '1rem' : '1.1rem',
        marginBottom: '2rem',
        lineHeight: '1.6'
      }}>
        Subscribe to our newsletter to stay updated on upcoming events, community initiatives, and more.
      </p>
      <form style={{
        display: 'flex',
        maxWidth: '500px',
        margin: '0 auto',
        gap: '1rem',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <input 
          type="email" 
          placeholder="Your email address"
          required
          style={{
            flex: '1',
            minWidth: isMobile ? '100%' : '250px',
            padding: '0.75rem',
            borderRadius: '0.5rem',
            border: 'none',
            fontSize: '1rem'
          }}
        />
        <button 
          type="submit"
          style={{
            backgroundColor: '#1A1F2C',
            color: 'white',
            fontWeight: '600',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.5rem',
            border: 'none',
            cursor: 'pointer',
            width: isMobile ? '100%' : 'auto'
          }}
        >
          Subscribe
        </button>
      </form>
    </div>
  </section>
);

const primaryButtonStyles = {
  backgroundColor: '#9B87F5',
  color: 'white',
  fontWeight: '600',
  padding: '0.75rem',
  borderRadius: '0.5rem',
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.2s',
  marginTop: 'auto',
  ':hover': {
    backgroundColor: '#7d5fed'
  }
};

const secondaryButtonStyles = {
  backgroundColor: 'transparent',
  color: '#9B87F5',
  fontWeight: '600',
  padding: '0.75rem',
  borderRadius: '0.5rem',
  border: '1px solid #9B87F5',
  cursor: 'pointer',
  transition: 'background-color 0.2s',
  marginTop: 'auto',
  ':hover': {
    backgroundColor: '#f3f0ff'
  }
};

export default Events;