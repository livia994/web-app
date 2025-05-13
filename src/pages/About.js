// src/pages/About.js
import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import '../styles/pages/About.css';

import bakeryImg from '../assets/images/bakery.jpg';
import team1 from '../assets/images/team1.jpg';
import team2 from '../assets/images/team2.jpg';
import team3 from '../assets/images/team3.jpg';

const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section id="about" className={`about ${theme === 'dark' ? 'dark' : 'light'}`}>
      <div className="about-container">
        <h2>Our Story</h2>

        <div className="about-content">
          <div className="about-image">
            <img src={bakeryImg} alt="Our Bakery" />
          </div>

          <div className="about-text">
            <p>
              Started in our family kitchen, Sweet Delights has been crafting delicious cookies for over a decade...
            </p>
            <p>
              Our passion for baking began when our founder, Sarah, started sharing her homemade cookies...
            </p>
            <p>
              We believe in quality ingredients, traditional baking methods, and a touch of innovation...
            </p>

            <h3>Our Values</h3>
            <ul>
              <li>Quality ingredients from local sources</li>
              <li>Sustainable practices and packaging</li>
              <li>Community involvement and support</li>
              <li>Continuous innovation while respecting tradition</li>
            </ul>
          </div>
        </div>

        <div className="team-section">
          <h3>Meet Our Team</h3>
          <div className="team-members">
            <div className="team-member">
              <img src={team1} alt="Sarah - Founder & Head Baker" />
              <h4>Sarah</h4>
              <p>Founder & Head Baker</p>
            </div>
            <div className="team-member">
              <img src={team2} alt="Mike - Master Chocolatier" />
              <h4>Mike</h4>
              <p>Master Chocolatier</p>
            </div>
            <div className="team-member">
              <img src={team3} alt="Emma - Creative Director" />
              <h4>Emma</h4>
              <p>Creative Director</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
