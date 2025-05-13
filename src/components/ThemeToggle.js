import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  
  return (
    <div className="theme-toggle">
      <button 
        onClick={toggleDarkMode} 
        className={`toggle-button ${darkMode ? 'dark' : 'light'}`}
        aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
      >
        {darkMode ? (
          <svg className="sun-icon" viewBox="0 0 24 24" width="24" height="24">
            <path d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-15a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1zm0 15a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1zm9-9a1 1 0 0 1-1 1h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1zM5 12a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1zm12.95 3.536l.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 1.414-1.414zm-11.314-7.071l-.707-.707a1 1 0 0 1 1.414-1.414l.707.707a1 1 0 0 1-1.414 1.414zm9.9 7.071a1 1 0 0 1 0 1.414l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0zM6.343 8.464a1 1 0 0 1 0-1.414l.707-.707a1 1 0 0 1 1.414 1.414l-.707.707a1 1 0 0 1-1.414 0z" />
          </svg>
        ) : (
          <svg className="moon-icon" viewBox="0 0 24 24" width="24" height="24">
            <path d="M10 4a9 9 0 0 1 9 9c0 3.1-1.56 5.831-3.95 7.452A6.998 6.998 0 0 0 12 17a7 7 0 0 0-7-7c0-1.53.459-2.98 1.24-4.083A8.975 8.975 0 0 1 10 4z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;