// src/components/Cart.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { ThemeContext } from '../contexts/ThemeContext';
import '../styles/components/Cart.css';

const Cart = () => {
  const { cart, removeFromCart, addToCart, decreaseQuantity, clearCart, cartTotal } = useContext(CartContext);
  const { theme } = useContext(ThemeContext);

  if (cart.length === 0) {
    return (
      <div className={`empty-cart ${theme}`}>
        <h2>Your Cart is Empty</h2>
        <p>Looks like you haven't added any cookies to your cart yet.</p>
        <Link to="/products" className="continue-shopping">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className={`cart-container ${theme}`}>
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <div className="item-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="item-details">
              <h3>{item.name}</h3>
              <p className="item-price">${item.price.toFixed(2)}</p>
            </div>
            <div className="item-quantity">
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => addToCart(item)}>+</button>
            </div>
            <div className="item-total">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
            <button
              className="remove-item"
              onClick={() => removeFromCart(item.id)}
              aria-label="Remove item"
            >
              ×
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="cart-total">
          <span>Total:</span>
          <span>${cartTotal.toFixed(2)}</span>
        </div>
        <div className="cart-actions">
          <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
          <button className="checkout-btn">
            Proceed to Checkout
          </button>
        </div>
        <Link to="/products" className="continue-shopping">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Cart;
