import React, { useState } from 'react';

const Events = () => {
  const [filter, setFilter] = useState('all');
  
  const events = [
    {
      id: 1,
      title: "Pride Month Celebration",
      date: "June 15, 2025",
      time: "2:00 PM - 8:00 PM",
      location: "Uhuru Park, Nairobi",
      description: "Join us for a colorful celebration of pride with music, performances, and community speakers.",
      image: "https://img.freepik.com/free-photo/digital-art-international-women-s-day-celebration-women-s-rights_23-2151368461.jpg?uid=R99210820&ga=GA1.1.1338765476.1744701059&semt=ais_hybrid&w=740",
      type: "upcoming"
    },
    {
      id: 2,
      title: "LGBTQ+ Rights Workshop",
      date: "July 8, 2025",
      time: "10:00 AM - 1:00 PM",
      location: "Queer Kenya Community Center",
      description: "Learn about legal rights and protections for LGBTQ+ individuals in Kenya with expert speakers.",
      image: "https://img.freepik.com/free-photo/conceptual-digital-art-diversity-around-world_23-2151437574.jpg?uid=R99210820&ga=GA1.1.1338765476.1744701059&semt=ais_hybrid&w=740",
      type: "upcoming"
    },
    {
      id: 3,
      title: "Mental Health Support Group",
      date: "July 20, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Online (Zoom)",
      description: "A safe space for LGBTQ+ individuals to discuss mental health challenges and coping strategies.",
      image: "https://img.freepik.com/free-photo/international-kissing-day-celebration_23-2151185086.jpg?uid=R99210820&ga=GA1.1.1338765476.1744701059&semt=ais_hybrid&w=740",
      type: "upcoming"
    },
    {
      id: 4,
      title: "International Day Against Homophobia",
      date: "May 17, 2025",
      time: "All Day",
      location: "Various Locations",
      description: "Community events and awareness campaigns throughout Kenya to combat homophobia and discrimination.",
      image: "https://img.freepik.com/free-photo/broken-heart-concept_23-2151260999.jpg?uid=R99210820&ga=GA1.1.1338765476.1744701059&semt=ais_hybrid&w=740",
      type: "past"
    },
    {
      id: 5,
      title: "Queer Film Festival",
      date: "April 5-7, 2025",
      time: "Various Times",
      location: "Alliance Française, Nairobi",
      description: "A showcase of films highlighting LGBTQ+ stories, experiences, and perspectives.",
      image: "https://img.freepik.com/free-photo/illustration-breast-cancer-awareness-month-digital-art-style_23-2151827724.jpg?uid=R99210820&ga=GA1.1.1338765476.1744701059&semt=ais_hybrid&w=740",
      type: "past"
    },
    {
      id: 6,
      title: "Community Fundraising Gala",
      date: "March 28, 2025",
      time: "7:00 PM - 11:00 PM",
      location: "Radisson Blu Hotel, Nairobi",
      description: "An elegant evening to raise funds for Queer Kenya's community support programs.",
      image: "https://img.freepik.com/free-photo/international-women-s-day-celebration-equal-right-digital-art-style_23-2151368425.jpg?uid=R99210820&ga=GA1.1.1338765476.1744701059&semt=ais_hybrid&w=740",
      type: "past"
    }
  ];

  const filteredEvents = filter === 'all' ? events : events.filter(event => event.type === filter);

  return (
    <main>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #4c0585, #9B87F5)',
        color: 'white',
        padding: '2rem 1.5rem',
        textAlign: 'left'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto'
        }}>
          <h1 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '1.2rem',
            lineHeight: '1.1',
  fontFamily: "'Poppins', sans-serif"
          }}>Events</h1>
          <p style={{
            fontSize: '0.98rem',
            maxWidth: '1280px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Join us for community gatherings, workshops, celebrations, and advocacy events.
          </p>
        </div>
      </section>

      {/* Events Filter */}
      <section style={{
        padding: '5rem 3rem 5rem 3rem',
        backgroundColor: 'white',
        borderBottom: '1px solid #eee'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'left',
          gap: '1rem'
        }}>
          <button 
            onClick={() => setFilter('all')}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              border: 'none',
              backgroundColor: filter === 'all' ? '#9B87F5' : '#f9f5ff',
              color: filter === 'all' ? 'white' : '#1A1F2C',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
          >
            All Events
          </button>
          <button 
            onClick={() => setFilter('upcoming')}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              border: 'none',
              backgroundColor: filter === 'upcoming' ? '#9B87F5' : '#f9f5ff',
              color: filter === 'upcoming' ? 'white' : '#1A1F2C',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
          >
            Upcoming Events
          </button>
          <button 
            onClick={() => setFilter('past')}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              border: 'none',
              backgroundColor: filter === 'past' ? '#9B87F5' : '#f9f5ff',
              color: filter === 'past' ? 'white' : '#1A1F2C',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
          >
            Past Events
          </button>
        </div>
      </section>

      {/* Events Listing */}
      <section style={{
        padding: '4rem 2rem',
        backgroundColor: '#f9f9f9'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto'
        }}>
          {filter !== 'all' && (
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '2rem',
              textAlign: 'center',
              color: '#1A1F2C'
            }}>
              {filter === 'upcoming' ? 'Upcoming Events' : 'Past Events'}
            </h2>
          )}
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {filteredEvents.map(event => (
              <div 
                key={event.id} 
                style={{
                  backgroundColor: 'white',
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 15px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                }}
              >
                <img 
                  src={event.image} 
                  alt={event.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  padding: '1.5rem',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '0.5rem'
                  }}>
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
                    <span style={{
                      fontSize: '0.875rem',
                      color: '#666'
                    }}>
                      {event.date}
                    </span>
                  </div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    marginBottom: '0.75rem',
                    color: '#1A1F2C'
                  }}>
                    {event.title}
                  </h3>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.75rem'
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#9B87F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 6V12L16 14" stroke="#9B87F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span style={{ color: '#555' }}>{event.time}</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '1.5rem'
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#9B87F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#9B87F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span style={{ color: '#555' }}>{event.location}</span>
                  </div>
                  <p style={{
                    color: '#555',
                    lineHeight: '1.6',
                    marginBottom: '1.5rem',
                    flex: 1
                  }}>
                    {event.description}
                  </p>
                  {event.type === 'upcoming' && (
                    <button style={{
                      backgroundColor: '#9B87F5',
                      color: 'white',
                      fontWeight: '600',
                      padding: '0.75rem',
                      borderRadius: '0.5rem',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s',
                      marginTop: 'auto'
                    }}>
                      Register to Attend
                    </button>
                  )}
                  {event.type === 'past' && (
                    <button style={{
                      backgroundColor: 'transparent',
                      color: '#9B87F5',
                      fontWeight: '600',
                      padding: '0.75rem',
                      borderRadius: '0.5rem',
                      border: '1px solid #9B87F5',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s',
                      marginTop: 'auto'
                    }}>
                      View Event Photos
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {filteredEvents.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '3rem',
              backgroundColor: 'white',
              borderRadius: '1rem',
              marginBottom: '2rem'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: '#1A1F2C'
              }}>
                No events found
              </h3>
              <p style={{
                color: '#555',
                marginBottom: '2rem'
              }}>
                There are currently no {filter === 'upcoming' ? 'upcoming' : 'past'} events to display.
              </p>
              <button 
                onClick={() => setFilter('all')}
                style={{
                  backgroundColor: '#9B87F5',
                  color: 'white',
                  fontWeight: '600',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                View All Events
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section style={{
        padding: '4rem 2rem',
        backgroundColor: '#9B87F5',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem'
          }}>Never Miss an Event</h2>
          <p style={{
            fontSize: '1.1rem',
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
            flexWrap: 'wrap'
          }}>
            <input 
              type="email" 
              placeholder="Your email address"
              required
              style={{
                flex: '1',
                minWidth: '250px',
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
                cursor: 'pointer'
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Events;