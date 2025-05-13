import React, { useContext, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { CartContext } from '../contexts/CartContext';
import CookieCard from '../components/CookieCard';
import { cookies } from '../data/cookies';
import '../styles/pages/Products.css';

const Products = () => {
  const { theme } = useContext(ThemeContext);
  const { addToCart } = useContext(CartContext);
  const [filter, setFilter] = useState('all');

  const filteredCookies = filter === 'all' 
    ? cookies 
    : cookies.filter(cookie => cookie.category === filter);

  return (
    <section id="products" className={`products ${theme === 'dark' ? 'dark' : 'light'}`}>
      <div className="products-container">
        <h2>Our Delicious Cookies</h2>

        <div className="filter-buttons">
          {['all', 'classic', 'specialty', 'seasonal'].map(cat => (
            <button
              key={cat}
              className={filter === cat ? 'active' : ''}
              onClick={() => setFilter(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="cookies-grid">
          {filteredCookies.map(cookie => (
            <CookieCard
              key={cookie.id}
              cookie={cookie}
              onAddToCart={() => addToCart(cookie)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
