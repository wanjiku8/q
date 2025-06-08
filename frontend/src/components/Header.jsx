import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/qkenya.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path) => location.pathname === path;

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        {/* Logo */}
        <Link to="/" style={logoWrapper}>
          <img src={logo} alt="Queer Kenya Logo" style={logoStyle} />
          <div>
            <h1 style={titleStyle}>Queer Kenya</h1>
            <p style={subtitleStyle}>Empowering Our Community</p>
          </div>
        </Link>

        {/* Navigation or Hamburger */}
        {isMobile ? (
          <button onClick={toggleMenu} style={hamburgerButton}>
            <div style={burger}></div>
            <div style={burger}></div>
            <div style={burger}></div>
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

      {/* Mobile Dropdown Menu with animation */}
      <div
        style={{
          ...mobileMenu,
          maxHeight: isMobile && isMenuOpen ? '500px' : '0px',
          padding: isMobile && isMenuOpen ? '12px' : '0px 12px',
        }}
      >
        {navLinks.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            onClick={toggleMenu}
            style={{
              ...mobileLink,
              ...(isActive(to) ? activeLink : {}),
            }}
          >
            {label}
          </Link>
        ))}
        <Link to="/contact" onClick={toggleMenu} style={mobileCTA}>Contact Us</Link>
      </div>
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

// --- Styles ---

const headerStyle = {
  backgroundColor: '#fff',
  borderBottom: '1px solid #e5e7eb',
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

const logoWrapper = {
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
};

const logoStyle = {
  width: '140px',
  height: '120px',
  borderRadius: '8px',
  marginRight: '19px',
  marginLeft:'-13px'
};

const titleStyle = {
  margin: 0,
  fontSize: '20px',
  fontWeight: 600,
  color: '#111827',
};

const subtitleStyle = {
  margin: 0,
  fontSize: '14px',
  color: '#6b7280',
};

const navStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '22px',
};

const navLink = {
  position: 'relative',
  textDecoration: 'none',
  color: '#374151',
  fontSize: '16px',
  fontWeight: 500,
  padding: '6px 0',
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
  padding: '10px 18px',
  borderRadius: '8px',
  fontWeight: 600,
  transition: 'background 0.3s',
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
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  overflow: 'hidden',
  transition: 'all 0.4s ease-in-out',
};

const mobileLink = {
  textDecoration: 'none',
  color: '#1f2937',
  fontSize: '18px',
  fontWeight: 500,
  padding: '8px 0',
};

const mobileCTA = {
  ...mobileLink,
  backgroundColor: '#4B0082',
  color: '#fff',
  padding: '10px',
  borderRadius: '6px',
  textAlign: 'center',
};

export default Header;
