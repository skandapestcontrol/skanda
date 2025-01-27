import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Error.css';  // Make sure to import the corresponding CSS

const ErrorPage = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/'); // Navigate to home page
  };

  return (
    <div className="error-page">
      <div className="content-container">
        <h1 className="error-heading">Oops! Something went wrong.</h1>
        <p className="error-message">Our pest control team is working hard, but we couldn't find the page you're looking for.</p>

        <div className="rat-animation">
          <div className="rat"></div>
          <div className="sanitization">
            <div className="sanitizer"></div>
          </div>
        </div>

        <button className="home-button" onClick={goHome}>Go to Home</button>
      </div>
    </div>
  );
};

export default ErrorPage;
