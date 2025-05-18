// src/App.js
import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import { ThemeContext, ThemeProvider } from './contexts/ThemeContext';
import { CartProvider } from './contexts/CartContext';

// Global styles
import './styles/reset.css';
import './index.css';
import './App.css';

// Component & Page CSS
import './styles/components/Header.css';
import './styles/components/Footer.css';
import './styles/components/Cart.css';
import './styles/components/CookieCard.css';
import './styles/pages/Home.css';
import './styles/pages/Products.css';
import './styles/pages/SpecialOffers.css';
import './styles/pages/About.css';
import './styles/pages/Contact.css';

// Components & Pages
import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import SpecialOffers from './pages/SpecialOffers';
import Contact from './pages/Contact';
import Cart from './components/Cart'; // ✅ Make sure this is a valid component

function AppContent() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <div className="container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/special-offers" element={<SpecialOffers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} /> {/* ✅ Make sure Cart is a function */}
          </Routes>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
