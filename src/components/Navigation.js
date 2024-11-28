import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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

  const links = [
    { to: '/', label: 'Lorem Ipsum' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="h-[10vh] flex justify-between items-center bg-darker relative z-10 px-6 shadow-md">
      <Link to="/" className="text-xl font-semibold text-white px-4 py-2 rounded transition-colors duration-200 hover:bg-white/10">
        {links[0].label}
      </Link>

      <ul className={`flex list-none gap-4 m-0 p-0 transition-all duration-300 md:flex
        ${isOpen ? 'flex-col absolute top-full left-0 w-full bg-darker/95 p-4 shadow-lg' : 'hidden md:flex'}`}>
        {links.slice(1).map(({ to, label }) => (
          <li key={to}>
            <Link 
              to={to}
              className="px-4 py-2 font-semibold text-white rounded transition-colors duration-200 hover:bg-white/10"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <button 
        className="md:hidden p-2 rounded hover:bg-white/10"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Navigation Menu"
      >
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </button>
    </nav>
  );
};

export default Navigation;
