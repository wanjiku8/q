import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // In a real application, you would send this to your backend
      console.log(`Subscribing email: ${email}`);
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer style={{
      backgroundColor: '#1A1F2C',
      color: 'white',
      padding: '3rem 0'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          <div>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1rem'
              }}>
                <div style={{
  width: '40px',
  height: '40px',
  background: 'linear-gradient(135deg, #6a5acd, #1e90ff)',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden' // Ensures image stays within the circle
}}>
  <img
    src="https://media.licdn.com/dms/image/v2/D4D03AQF1nV0aDXpPMg/profile-displayphoto-shrink_100_100/B4DZSEGz7zHkAU-/0/1737383166742?e=1754524800&v=beta&t=7Zmh3Vvt0p0xJU7U3yLON372-N1XbdMjKTBBXyAaUvk"
    alt="Logo"
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }}
  />
</div>

                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: 'white',
                  margin: 0
                }}>Queer Kenya</h2>
              </div>
            </Link>
            <p style={{
              color: '#D6BCFA',
              lineHeight: '1.6',
              marginBottom: '1.5rem'
            }}>Empowering LGBTQ+ individuals through advocacy, support, and community building.</p>
            
            <div style={{
              display: 'flex',
              gap: '1rem'
            }}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#9B87F5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#9B87F5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28345C14.0247 3.6097 13.2884 4.19439 12.773 4.95372C12.2575 5.71305 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#9B87F5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4077 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5923C7.9604 11.7616 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.5 6.5H17.51" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 style={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              color: 'white'
            }}>Quick Links</h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <Link to="/" style={{
                  color: '#D6BCFA',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="#D6BCFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Home
                </Link>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <Link to="/about" style={{
                  color: '#D6BCFA',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="#D6BCFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  About Us
                </Link>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <Link to="/events" style={{
                  color: '#D6BCFA',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="#D6BCFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Events
                </Link>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <Link to="/team" style={{
                  color: '#D6BCFA',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="#D6BCFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Team
                </Link>
              </li>
              <li>
                <Link to="/contact" style={{
                  color: '#D6BCFA',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="#D6BCFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 style={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              color: 'white'
            }}>Newsletter</h3>
            <p style={{
              color: '#D6BCFA',
              lineHeight: '1.6',
              marginBottom: '1rem'
            }}>Stay updated on LGBTQ+ rights, events, and initiatives.</p>
            
            {isSubscribed ? (
              <div style={{
                backgroundColor: 'rgba(155, 135, 245, 0.2)',
                padding: '1rem',
                borderRadius: '0.5rem',
                color: 'white',
                marginTop: '1rem'
              }}>
                Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  style={{
                    padding: '0.75rem',
                    borderRadius: '0.5rem',
                    border: 'none',
                    fontSize: '1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: 'white'
                  }}
                />
                <button type="submit" style={{
                  backgroundColor: '#9B87F5',
                  color: 'white',
                  fontWeight: '600',
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}>
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
        
        <div style={{
          borderTop: '1px solid rgba(214, 188, 250, 0.2)',
          marginTop: '2rem',
          paddingTop: '2rem',
          textAlign: 'center',
          color: '#D6BCFA'
        }}>
          <p>© 2025 Queer Kenya. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;