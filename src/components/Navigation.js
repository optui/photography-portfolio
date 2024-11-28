import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setIsOpen(prev => !prev);

  const links = [
    { to: '/', label: 'Lorem Ipsum' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="nav">
      <Link to="/" className="logo">{links[0].label}</Link>

      <ul className={`menu ${isOpen ? 'active' : ''}`}>
        {links.slice(1).map(({ to, label }) => (
          <li key={to}>
            <Link to={to}>{label}</Link>
          </li>
        ))}
      </ul>

      <button className={`hamburger ${isOpen ? 'open' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle Navigation Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Navigation;
