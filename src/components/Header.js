// src/components/Header.js
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { ThemeContext } from '../contexts/ThemeContext';
import '../styles/components/Header.css';

const Header = () => {
  const themeCtx = useContext(ThemeContext);
  const cartCtx = useContext(CartContext);

  const theme = themeCtx?.theme || 'light';
  const toggleTheme = themeCtx?.toggleTheme || (() => {});
  const cartItemCount = cartCtx?.cartItemCount || 0;

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`header ${theme}`}>
      <nav>
        <Link to="/" className="logo">Sweet Delights</Link>

        <div className="right-section">
          <button
            className={`theme-toggle ${theme}`}
            onClick={toggleTheme}
            aria-label="Toggle light/dark theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          <Link to="/cart" className="cart-icon">
            🛒 <span className="cart-count">{cartItemCount}</span>
          </Link>

          <div className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
            <div className="cookie-bite"></div>
          </div>
        </div>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link></li>
          <li><Link to="/special-offers" onClick={() => setMenuOpen(false)}>Special Offers</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
