


// import React, { useState } from 'react';
// import { FiX, FiCamera } from 'react-icons/fi';

// const EditProductImage = ({ images, setImages }) => {
//     const handleImageUpload = (e) => {
//         const files = Array.from(e.target.files);

//         const newImages = files.map((file) => ({
//             file,
//             url: URL.createObjectURL(file),
//             isPrimary: images.length === 0, // Set first uploaded image as primary
//         }));

//         setImages([...images, ...newImages]);
//     };

    // const handleRemoveImage = (index) => {
    //     const updatedImages = [...images];
    //     updatedImages.splice(index, 1);
    //     setImages(updatedImages);
    // };


//     const handlePrimaryChange = (index) => {
//         setImages(
//             images.map((img, idx) => ({
//                 ...img,
//                 isPrimary: idx === index,
//             }))
//         );
//     };

//     return (
//         <div className="space-y-4">
//             <label className="block text-sm font-medium">Upload Images:</label>
//             <input
//                 type="file"
//                 multiple
//                 onChange={handleImageUpload}
//                 className="mb-4"
//             />

//             <div className="flex space-x-4 overflow-x-auto">
//                 {images.map((image, index) => (
//                     <div
//                         key={index}
//                         className={`relative border ${image.isPrimary ? 'border-blue-500' : 'border-gray-300'
//                             } p-1 rounded-lg`}
//                     >
//                         {/* Display uploaded images */}
//                         <img
//                             src={image.url}
//                             alt={`Product-${index}`}
//                             className="w-32 h-32 object-cover rounded"
//                         />
//                         <button
//                             className="absolute top-0 right-0 bg-red-500 p-1 rounded-full text-white"
//                             onClick={() => handleRemoveImage(index)}
//                         >
//                             <FiX />
//                         </button>
//                         {image.isPrimary && (
//                             <span className="absolute bottom-0 left-0 bg-blue-600 text-white text-xs rounded px-1">
//                                 Primary
//                             </span>
//                         )}
//                         <button


//                             // Continue for the primary button
//                             onClick={() => handlePrimaryChange(index)}
//                             className="bg-blue-500 p-1 rounded-full text-white">
//                             <FiCamera />
//                         </button>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default EditProductImage;







import React from "react";
import { FaTrash } from "react-icons/fa";

const EditProductImage = ({ images, setImages, setDeletedImages }) => {

  const handleRemoveImage = (index, image) => {
    // Check if the image has an `id` (exists in the database)
    if (image.id) {
      setDeletedImages((prev) => [...prev, image.id]);
    }
    // Remove the image from the state
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-4">Current Images</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={image.id || index} className="relative">
            <img
                src={image.image_path || URL.createObjectURL(image.file)}
              alt="Product"
              className="w-full max-h-80 object-cover rounded"
            />
            {image.is_primary === 1 && (
              <span className="absolute bottom-0 left-0 bg-blue-600 text-white text-xs rounded px-1">
                Primary
              </span>
            )}
            <button
              type="button"
              onClick={() => handleRemoveImage(index, image)}
              className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full shadow hover:bg-red-600"
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditProductImage;







