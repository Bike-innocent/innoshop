import React from 'react';
import './Loader.css'; // Import the CSS file if you want to keep the styles separate

const Loader = ({ color = '#3B82F6', loading = true }) => {
  if (!loading) return null; // If not loading, don't show the loader

  return (
    <div className="loader">
      <div
        className="jimu-primary-loading"
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
};

export default Loader;
