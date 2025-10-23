import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="dark-header">
      <Link to="/">
        <div className="dark-logo-text">TWYNETIC ORBIT</div>
      </Link>
      <nav className="dark-nav">
        <Link
          to="/"
          className={`dark-nav-link ${isActive('/') ? 'active' : ''}`}
        >
          Home
        </Link>
        <Link
          to="/technology"
          className={`dark-nav-link ${isActive('/technology') ? 'active' : ''}`}
        >
          Technology
        </Link>
        <Link
          to="/applications"
          className={`dark-nav-link ${isActive('/applications') ? 'active' : ''}`}
        >
          Applications
        </Link>
        <Link
          to="/contact"
          className={`dark-nav-link ${isActive('/contact') ? 'active' : ''}`}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;