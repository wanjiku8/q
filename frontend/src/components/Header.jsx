import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/WhatsApp_Image_2025-01-28_at_4.10.08_AM-removebg-preview.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        {/* LOGO */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={logo}
              alt="Queer Kenya Logo"
              width="154"
              height="154"
              style={{ borderRadius: '8px', marginRight: '18px', marginLeft: '-14px' }}
            />
            <div>
              <h1 style={{ margin: 0, fontSize: '22px', fontWeight: 600, color: '#111827' }}>Queer Kenya</h1>
              <p style={{ margin: 0, fontSize: '14px', color: '#6b7280' }}>Empowering Our Community</p>
            </div>
          </div>
        </Link>

        {/* NAVIGATION OR HAMBURGER */}
        {isMobile ? (
          <>
            <button onClick={toggleMenu} style={hamburgerButton}>
              <div style={burger}></div>
              <div style={burger}></div>
              <div style={burger}></div>
            </button>
          </>
        ) : (
          <nav style={navStyle}>
            <Link to="/" style={navLink}>Home</Link>
            <Link to="/about" style={navLink}>About</Link>
            <Link to="/events" style={navLink}>Events</Link>
            <Link to="/team" style={navLink}>Team</Link>
            <Link to="/resources" style={navLink}>Resources</Link>
            <Link to="/join-us" style={navLink}>Get Involved</Link>
            <Link to="/contact" style={ctaButton}>Support Us</Link>
          </nav>
        )}
      </div>

      {/* MOBILE NAV MENU */}
      {isMobile && isMenuOpen && (
        <div style={mobileMenu}>
          <Link to="/" onClick={toggleMenu} style={mobileLink}>Home</Link>
          <Link to="/about" onClick={toggleMenu} style={mobileLink}>About</Link>
          <Link to="/events" onClick={toggleMenu} style={mobileLink}>Events</Link>
          <Link to="/team" onClick={toggleMenu} style={mobileLink}>Team</Link>
          <Link to="/resources" onClick={toggleMenu} style={mobileLink}>Resources</Link>
          <Link to="/join-us" onClick={toggleMenu} style={mobileLink}>Get Involved</Link>
          <Link to="/contact" onClick={toggleMenu} style={mobileCTA}>Support Us</Link>
        </div>
      )}
    </header>
  );
};

// Styles
const headerStyle = {
  backgroundColor: '#f8f6f7',
  borderBottom: '1px solid #e2e8f0',
  padding: '12px 24px',
  fontFamily: 'Segoe UI, sans-serif',
  boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
};

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: '1280px',
  margin: '0 auto',
  flexWrap: 'wrap',
};

const navStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  flexWrap: 'wrap',
};

const navLink = {
  textDecoration: 'none',
  color: '#374151',
  fontSize: '16px',
  fontWeight: '500',
  padding: '8px 4px',
  transition: 'color 0.3s',
};

const ctaButton = {
  textDecoration: 'none',
  backgroundColor: '#4B0082',
  color: '#fff',
  padding: '8px 16px',
  borderRadius: '6px',
  fontWeight: '600',
  transition: 'background-color 0.3s',
};

const burger = {
  width: '25px',
  height: '3px',
  backgroundColor: '#111827',
  margin: '4px 0',
  borderRadius: '2px',
};

const hamburgerButton = {
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
};

const mobileMenu = {
  backgroundColor: '#f9fafb',
  padding: '12px',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  marginTop: '10px',
};

const mobileLink = {
  textDecoration: 'none',
  color: '#1f2937',
  fontSize: '18px',
  fontWeight: 500,
};

const mobileCTA = {
  ...mobileLink,
  backgroundColor: '#f97316',
  color: '#fff',
  padding: '10px',
  borderRadius: '6px',
  textAlign: 'center',
};

export default Header;
