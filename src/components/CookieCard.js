import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { ThemeContext } from '../contexts/ThemeContext';
import imageMap from '../assets/imageMap'; 
import '../styles/components/CookieCard.css';

const CookieCard = ({ cookie }) => {
  const { addToCart } = useContext(CartContext);
  const { theme } = useContext(ThemeContext);

  const handleAddToCart = () => {
    addToCart(cookie);
  };

  const imageSrc = imageMap[cookie.image] || '';

  return (
    <div className={`cookie-card ${theme}`}>
      <div className="cookie-image">
        <img src={imageSrc} alt={cookie.name} />
      </div>
      <div className="cookie-info">
        <h3>{cookie.name}</h3>
        <p className="cookie-description">{cookie.description}</p>
        <p className="cookie-price">${cookie.price.toFixed(2)}</p>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default CookieCard;
