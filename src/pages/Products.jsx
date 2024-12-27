

import React, { useEffect, useState } from 'react';
import axiosInstance from '../axiosInstance';
import { Link } from 'react-router-dom';

function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get('/products');
        setProducts(response.data);
      } catch (error) {
        setError('Failed to fetch products.');
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Products</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
            <Link to={`/product/${product.slug}`}>
              {/* Product Primary Image */}
              <img
                src={product.primary_image?.image_path}
                alt={product.name}
                className="w-full max-h-[300px] object-cover rounded-lg mb-4"
              />
              {/* Product Details */}
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            </Link>
            
            
            <p className="text-gray-600">Color: {product.colour?.name} (Hex: {product.colour?.hex_code})</p>
          
            <p className="text-gray-600">Price: ${product.price}</p>
           
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
