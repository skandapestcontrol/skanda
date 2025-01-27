import React, { useState, useEffect } from 'react';
import './ScrollToTop.css'; // Add appropriate styles

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on the scroll position
  const handleScroll = () => {
    if (window.scrollY > 300) { // If the user scrolls down more than 300px, show the button
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll to the top
    });
  };

  // Listen for scroll events
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up the event listener
    };
  }, []);

  return (
    isVisible && (
      <div className="scroll-to-top" onClick={scrollToTop}>
        <span className="flaticon-right-arrow-4"></span>
      </div>
    )
  );
};

export default ScrollToTop;
