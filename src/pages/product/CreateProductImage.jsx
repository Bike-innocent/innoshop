import React, { useState } from 'react';
import { FiX, FiCamera } from 'react-icons/fi';

const CreateProductImage = ({ images, setImages }) => {
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    const newImages = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
      isPrimary: images.length === 0, // Set first uploaded image as primary
    }));

    setImages([...images, ...newImages]);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

 
  const handlePrimaryChange = (index) => {
    setImages(
      images.map((img, idx) => ({
        ...img,
        isPrimary: idx === index,
      }))
    );
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium">Upload Images:</label>
      <input
        type="file"
        multiple
        onChange={handleImageUpload}
        className="mb-4"
      />

      <div className="flex space-x-4 overflow-x-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative border ${
              image.isPrimary ? 'border-blue-500' : 'border-gray-300'
            } p-1 rounded-lg`}
          >
            {/* Display uploaded images */}
            <img
              src={image.url}
              alt={`Product-${index}`}
              className="w-32 h-32 object-cover rounded"
            />
            <button
              className="absolute top-0 right-0 bg-red-500 p-1 rounded-full text-white"
              onClick={() => handleRemoveImage(index)}
            >
              <FiX />
            </button>
            {image.isPrimary && (
              <span className="absolute bottom-0 left-0 bg-blue-600 text-white text-xs rounded px-1">
                Primary
              </span>
            )}
            <button
              className="absolute bottom-0 right-0 p-1 text-gray-800"
              onClick={() => handlePrimaryChange(index)}
            >
              <FiCamera />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateProductImage;
