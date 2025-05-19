import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import '../styles/pages/Home.css';

import heroImg from '../assets/images/hero.jpg';
import c1 from '../assets/images/c1.jpg';
import c2 from '../assets/images/c2.jpg';
import c3 from '../assets/images/c3.jpg';

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`home ${theme}`}>
      {/* Hero Section */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImg})` }} 
      >
        <div className="hero-content">
          <h1>Welcome to Our Cookie Store</h1>
          <p>Delicious homemade cookies, made with love.</p>
          <a href="#products" className="hero-button">
            Explore Our Cookies
          </a>
        </div>
      </section>

      {/* Quick Order Section */}
      <section className="quick-order mobile-only">
        <h2>Quick Order</h2>
        <div className="quick-order-grid">
          <div className="quick-item">
            <img src={c1} alt="Classic Chocolate Chip" />
            <p>Classic Chip</p>
            <button className="quick-add">+</button>
          </div>
          <div className="quick-item">
            <img src={c2} alt="Double Chocolate" />
            <p>Double Choc</p>
            <button className="quick-add">+</button>
          </div>
          <div className="quick-item">
            <img src={c3} alt="Oatmeal Raisin" />
            <p>Oatmeal</p>
            <button className="quick-add">+</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
