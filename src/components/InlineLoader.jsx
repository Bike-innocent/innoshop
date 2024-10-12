import React from 'react';
import './InlineLoader.css'; // Import CSS for inline loader

const InlineLoader = ({ color = '#3B82F6', loading = true }) => {
  if (!loading) return null; // If not loading, don't render anything

  return (
    <div className="inline-loader">
      <div
        className="inline-primary-loading"
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
};

export default InlineLoader;
