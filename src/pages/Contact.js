// src/pages/Contact.js
import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import '../styles/pages/Contact.css';

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`contact ${theme}`}>
      <div className="contact-container">
        <h2>Contact Us</h2>

        <div className="contact-grid">
          {/* LEFT COLUMN: INFO */}
          <div className="contact-info">
            <div className="info-block">
              <i className="fas fa-map-marker-alt" />
              <div>
                <h3>Visit Us</h3>
                <p>123 Cookie Lane<br />Sweet City, SC 12345</p>
              </div>
            </div>

            <div className="info-block">
              <i className="fas fa-envelope" />
              <div>
                <h3>Email Us</h3>
                <p>info@sweetdelights.com<br />orders@sweetdelights.com</p>
              </div>
            </div>

            <div className="info-block">
              <i className="fas fa-phone" />
              <div>
                <h3>Call Us</h3>
                <p>(555) 123-4567<br />Mon–Fri: 9am–6pm</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: FORM */}
          <form className="contact-form">
            <label>Name</label>
            <input type="text" placeholder="Your name" />

            <label>Email</label>
            <input type="email" placeholder="Your email" />

            <label>Message</label>
            <textarea rows="5" placeholder="Your message..." />

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
