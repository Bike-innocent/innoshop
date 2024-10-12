// src/components/NotFound.jsx
import React from 'react';
// import Title from '../components/Title';

const NotFound = () => {

  return (
    <div className="flex items-center justify-center py-[150px] ">
      {/* <Title title={`404 - Not Found`} /> */}
      <div className="bg-gray-50 p-8 mt-20 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Not Found</h1>
        <p className="text-lg text-gray-700 mb-6">
          The page you are looking for does not exist.
        </p>
       
      </div>
    </div>
  );
};

export default NotFound;
