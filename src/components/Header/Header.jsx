import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Header.scss';

const Header = ({ onThemeChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__container">
        <button className="header__menu-button" onClick={toggleMenu}>
          &#9776;
        </button>
        <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <Link to="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li className="header__nav-item">
              <Link to="/about" onClick={toggleMenu}>About</Link>
            </li>
            <li className="header__nav-item">
              <Link to="/projects" onClick={toggleMenu}>Projects</Link>
            </li>
            <li className="header__nav-item">
              <Link to="/contact" onClick={toggleMenu}>Contact</Link>
            </li>
          </ul>
        </nav>
        <ThemeToggle onThemeChange={onThemeChange} />
      </div>
    </header>
  );
};

export default Header;
