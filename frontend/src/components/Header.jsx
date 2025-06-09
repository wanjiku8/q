import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/qkenya.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setIsMenuOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path) => location.pathname === path;

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        {/* Logo - Only show text on desktop */}
        <Link to="/" style={logoWrapper}>
          <img src={logo} alt="Queer Kenya Logo" style={logoStyle} />
          {!isMobile && (
            <div style={logoTextContainer}>
              <h1 style={titleStyle}>Queer Kenya</h1>
              <p style={subtitleStyle}>Empowering Our Community</p>
            </div>
          )}
        </Link>

        {/* Navigation or Hamburger */}
        {isMobile ? (
          <button onClick={toggleMenu} style={hamburgerButton}>
            <div style={{ ...burger, transform: isMenuOpen ? 'rotate(-45deg) translate(-5px, 6px)' : '' }}></div>
            <div style={{ ...burger, opacity: isMenuOpen ? 0 : 1 }}></div>
            <div style={{ ...burger, transform: isMenuOpen ? 'rotate(45deg) translate(-5px, -6px)' : '' }}></div>
          </button>
        ) : (
          <nav style={navStyle}>
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                style={{
                  ...navLink,
                  ...(isActive(to) ? activeLink : {}),
                }}
              >
                {label}
              </Link>
            ))}
            <Link to="/contact" style={ctaButton}>Contact Us</Link>
          </nav>
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobile && (
        <div
          style={{
            ...mobileMenu,
            height: isMenuOpen ? 'auto' : 0,
            padding: isMenuOpen ? '1rem' : '0 1rem',
            opacity: isMenuOpen ? 1 : 0,
          }}
        >
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={toggleMenu}
              style={{
                ...mobileLink,
                ...(isActive(to) ? activeMobileLink : {}),
              }}
            >
              {label}
            </Link>
          ))}
          <Link 
            to="/contact" 
            onClick={toggleMenu} 
            style={mobileCTA}
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
};

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/events', label: 'Events' },
  { to: '/team', label: 'Team' },
  { to: '/resources', label: 'Resources' },
  { to: '/join-us', label: 'Get Involved' },
];

// Styles
const headerStyle = {
  backgroundColor: '#fff',
  borderBottom: '1px solid #e5e7eb',
  padding: '1rem',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
};

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: '1280px',
  margin: '0 auto',
  width: '100%',
};

const logoWrapper = {
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
};

const logoStyle = {
  width: '150px',
  height: '150px',
  borderRadius: '8px',
  marginLeft:'-16px',
  marginRight: '1rem',
};

const logoTextContainer = {
  display: 'flex',
  flexDirection: 'column',
};

const titleStyle = {
  margin: 0,
  fontSize: '1.25rem',
  fontWeight: 600,
  color: '#111827',
};

const subtitleStyle = {
  margin: 0,
  fontSize: '0.875rem',
  color: '#6b7280',
};

const navStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',
};

const navLink = {
  color: '#374151',
  textDecoration: 'none',
  fontSize: '1rem',
  fontWeight: 500,
  padding: '0.5rem 0',
  position: 'relative',
  transition: 'color 0.3s',
};

const activeLink = {
  color: '#4B0082',
  borderBottom: '3px solid #4B0082',
};

const ctaButton = {
  backgroundColor: '#4B0082',
  color: '#fff',
  textDecoration: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '8px',
  fontWeight: 600,
  transition: 'background-color 0.3s',
};

const hamburgerButton = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '0.5rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const burger = {
  width: '25px',
  height: '3px',
  backgroundColor: '#111827',
  margin: '3px 0',
  borderRadius: '2px',
  transition: 'all 0.3s ease',
};

const mobileMenu = {
  backgroundColor: '#f9fafb',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  width: '100%',
  maxWidth: '1280px',
  margin: '0 auto',
};

const mobileLink = {
  color: '#1f2937',
  textDecoration: 'none',
  fontSize: '1rem',
  fontWeight: 500,
  padding: '0.75rem 1rem',
  borderRadius: '4px',
  transition: 'background-color 0.3s',
};

const activeMobileLink = {
  color: '#4B0082',
  backgroundColor: '#EDE9FE',
};

const mobileCTA = {
  ...mobileLink,
  backgroundColor: '#4B0082',
  color: '#fff',
  textAlign: 'center',
  marginTop: '0.5rem',
};

export default Header;