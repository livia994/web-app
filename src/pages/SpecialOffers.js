import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { CartContext } from '../contexts/CartContext';
import '../styles/pages/SpecialOffers.css';

import c4 from '../assets/images/c4.jpg';
import c5 from '../assets/images/c5.jpg';
import c10 from '../assets/images/c10.jpg';

const SpecialOffers = () => {
  const { theme } = useContext(ThemeContext);
  const { addToCart } = useContext(CartContext);

  const specialOffers = [
    {
      id: 'offer-1',
      title: 'Holiday Cookie Box',
      image: c4,
      description: 'Get 12 assorted cookies for the price of 10! The perfect gift for any occasion.',
      price: 29.99,
      type: 'box'
    },
    {
      id: 'offer-2',
      title: 'Monthly Subscription',
      image: c5,
      description: 'Fresh cookies delivered to your door every week. Choose your favorites or let us surprise you!',
      price: 19.99,
      type: 'subscription'
    },
    {
      id: 'offer-3',
      title: 'Cookie Party Pack',
      image: c10,
      description: '24 mini cookies perfect for parties and events. Available in classic and specialty flavors.',
      price: 34.99,
      type: 'pack'
    }
  ];

  return (
    <section id="special-offers" className={`special-offers ${theme === 'dark' ? 'dark' : 'light'}`}>
      <div className="special-offers-container">
        <h2>Special Offers</h2>

        <div className="offers-grid">
          {specialOffers.map(offer => (
            <div key={offer.id} className="offer-card">
              <div className="offer-image">
                <img src={offer.image} alt={offer.title} />
                {offer.type === 'subscription' && (
                  <span className="offer-badge">Popular</span>
                )}
              </div>
              <div className="offer-content">
                <h3>{offer.title}</h3>
                <p className="offer-description">{offer.description}</p>
                <p className="offer-price">${offer.price.toFixed(2)}</p>
                <button
                  className="order-button"
                  onClick={() =>
                    addToCart({
                      id: offer.id,
                      name: offer.title,
                      price: offer.price,
                      image: offer.image
                    })
                  }
                >
                  {offer.type === 'subscription' ? 'Subscribe' : 'Order Now'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="limited-time">
          <div className="limited-time-content">
            <h3>Limited Time Offer</h3>
            <p>Use code <strong>SWEET10</strong> for 10% off your first order!</p>
            <p className="expiry">Expires in: 7 days</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
