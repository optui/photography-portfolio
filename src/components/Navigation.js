import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavLink = React.memo(({ to, label, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to}
      onClick={onClick}
      className={`
        block px-4 py-2 text-white font-semibold rounded-md
        transition-all duration-300 ease-in-out
        hover:bg-white/10
        ${isActive ? 'bg-white/20' : ''}
        md:inline-block
      `}
    >
      {label}
    </Link>
  );
});

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const links = [
    { to: '/gallery', label: 'Gallery' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' }
  ];

  const handleLinkClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <nav className="h-16 bg-darker shadow-lg fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link 
          to="/" 
          className="py-2 px-3 text-white font-bold text-xl
                     hover:bg-white/10 rounded-md
                     transition-colors duration-200"
        >
          Home
        </Link>

        <ul className={`
          md:flex md:items-center md:gap-x-6
          ${isOpen 
            ? 'absolute top-16 left-0 w-full bg-darker/95 shadow-lg p-4 space-y-3 md:space-y-0' 
            : 'hidden md:flex'
          }
        `}>
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} label={label} onClick={handleLinkClick} />
            </li>
          ))}
        </ul>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 md:hidden rounded-md hover:bg-white/10
                     transition-colors duration-200"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-opacity duration-200 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
