// src/pages/Products.js
import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { CartContext } from '../contexts/CartContext';
import CookieCard from '../components/CookieCard';
import '../styles/pages/Products.css';
import { jwt } from '../data/token'


const Products = () => {
  const { theme } = useContext(ThemeContext);
  const { addToCart } = useContext(CartContext);

  const [cookies, setCookies] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchCookies = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/cookies', {
          headers: {
            'Authorization': `Bearer ${jwt}`
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setCookies(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCookies();
  },);
  


  const filteredCookies = filter === 'all'
    ? cookies
    : cookies.filter(cookie => cookie.category === filter);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error: {error}</p>;

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
