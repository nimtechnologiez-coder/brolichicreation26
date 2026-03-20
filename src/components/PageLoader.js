import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './PageLoader.css';


const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600); // Slightly longer to appreciate the animation

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className={`page-loader-custom ${isLoading ? 'active' : ''}`}>
      <div className="loader-circle-container">
        <div className="ring-outer"></div>
        <div className="ring-inner"></div>
        <div className="loading-text">Loading...</div>
      </div>
    </div>
  );
};

export default PageLoader;
