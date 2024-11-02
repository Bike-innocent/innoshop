import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../axiosInstance';

function ProductDetails() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axiosInstance.get(`/products/${slug}`);
        setProduct(response.data);
      } catch (error) {
        setError('Failed to fetch product details.');
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [slug]);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!product) return <p>Loading...</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

      
      {/* Display additional images */}
      <div className="flex flex-wrap gap-4 mb-8">
        {product.images?.map((image) => (
          <img
            key={image.id}
            src={image.image_path}
            alt={`${product.name} - additional image`}
            className="w-32 h-32 object-cover rounded-lg"
          />
        ))}
      </div>

      <p className="text-gray-600 mb-2">Category: {product.category?.name}</p>
      <p className="text-gray-600 mb-2">Brand: {product.brand?.name || 'N/A'}</p>
      <p className="text-gray-600 mb-2">Color: {product.colour?.name} (Hex: {product.colour?.hex_code})</p>
      <p className="text-gray-600 mb-2">Size: {product.size?.name}</p>
      <p className="text-gray-600 mb-2">Price: ${product.price}</p>
      <p className="text-gray-600 mb-2">Stock: {product.stock_quantity}</p>
      <p className="text-gray-600 mb-2">Supplier: {product.supplier?.name || 'N/A'}</p>
      <p className="text-gray-600 mt-4">{product.description}</p>
    </div>
  );
}

export default ProductDetails;
