import React, { useState, useEffect } from 'react';
import axiosInstance from '../../../axiosInstance';
import { Modal, Button } from 'react-bootstrap';

const ProductCategory = () => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({ id: null, name: '', description: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axiosInstance.get('/product-categories');
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentCategory((prevCategory) => ({
      ...prevCategory,
      [name]: value
    }));
  };

  const handleSaveCategory = async () => {
    try {
      if (currentCategory.id) {
        await axiosInstance.put(`/product-categories/${currentCategory.id}`, currentCategory);
      } else {
        await axiosInstance.post('/product-categories', currentCategory);
      }
      fetchCategories();
      resetModal();
    } catch (error) {
      console.error("Error saving category:", error);
    }
  };

  const handleDeleteCategory = async () => {
    try {
      await axiosInstance.delete(`/product-categories/${currentCategory.id}`);
      fetchCategories();
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  const openEditModal = (category) => {
    setCurrentCategory(category);
    setIsModalOpen(true);
  };

  const openCreateModal = () => {
    setCurrentCategory({ id: null, name: '', description: '' });
    setIsModalOpen(true);
  };

  const resetModal = () => {
    setCurrentCategory({ id: null, name: '', description: '' });
    setIsModalOpen(false);
  };

  return (
    <div className='mt-5 pt-5 container'>
      <button onClick={openCreateModal} className="px-4 py-2 bg-blue-500 text-white rounded">Create New Category</button>

      <table className="mt-4 w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td className="border p-2">{category.name}</td>
              <td className="border p-2">{category.description}</td>
              <td className="border p-2">
                <button
                  onClick={() => openEditModal(category)}
                  className="px-2 py-1 bg-yellow-500 text-white rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => { setCurrentCategory(category); setIsDeleteModalOpen(true); }}
                  className="px-2 py-1 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Create/Edit Modal */}
      <Modal show={isModalOpen} onHide={resetModal}>
        <Modal.Header closeButton>
          <Modal.Title>{currentCategory.id ? 'Edit Category' : 'Create Category'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            name="name"
            className="w-100 p-2 border border-gray-300 rounded mb-2"
            placeholder="Name"
            value={currentCategory.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="description"
            className="w-100 p-2 border border-gray-300 rounded"
            placeholder="Description"
            value={currentCategory.description}
            onChange={handleInputChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={resetModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveCategory}>
            {currentCategory.id ? 'Update' : 'Create'}
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal show={isDeleteModalOpen} onHide={() => setIsDeleteModalOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this category?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsDeleteModalOpen(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteCategory}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProductCategory;
