// src/components/Footer.js
import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import '../styles/components/Footer.css';

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`footer ${theme}`}>
      <div className="footer-content">
        <div className="footer-logo">Sweet Delights</div>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/special-offers">Special Offers</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-note">
          &copy; {new Date().getFullYear()} Sweet Delights. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
