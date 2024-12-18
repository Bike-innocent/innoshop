






import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../../axiosInstance';
import DeleteProductDialog from './DeleteProductDialog';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get('/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  // Delete product
  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/products/${id}`);
      setProducts(products.filter(product => product.id !== id));
      setDeleteDialogOpen(false);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="container mx-auto p-4 overflow-x-auto">
      <h1 className="text-2xl font-bold mb-4">Products List</h1>
      <table className="min-w-full bg-white border">
        <thead>
          <tr className="w-full bg-gray-100 text-left">
            <th className="p-4">#</th>
            <th className="p-4">Image</th>
            <th className="p-4">Name</th>
            <th className="p-4">Category</th>
            <th className="p-4">Price</th>
            <th className="p-4">Stock</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id} className="border-b">
              <td className="p-4">{index + 1}</td>
              <td className="p-4">
                <img
                 
                  src={product.primary_image?.image_path}
                  alt={product.name}
                  className="w-16 h-16 object-cover"
                />
              </td>
              <td className="p-4">{product.name}</td>
              <td className="p-4">{product.category?.name}</td>
              <td className="p-4">${product.price}</td>
              <td className="p-4">{product.stock_quantity}</td>
              <td className="p-4 flex gap-2">
                <Link to={`/product/${product.slug}`} className="text-blue-500">View</Link>
                <Link to={`/dashboard/edit-product/${product.slug}`} className="text-green-500">Edit</Link>
                <button
                  onClick={() => {
                    setSelectedProduct(product);
                    setDeleteDialogOpen(true);
                  }}
                  className="text-red-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {deleteDialogOpen && (
        <DeleteProductDialog
          isOpen={deleteDialogOpen}
          closeModal={() => setDeleteDialogOpen(false)}
          confirmDelete={() => handleDelete(selectedProduct.id)}
          productName={selectedProduct.name}
        />
      )}
    </div>
  );
};

export default ProductList;
