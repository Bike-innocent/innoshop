import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axiosInstance';
import { Modal, Button } from 'react-bootstrap';

const Brand = () => {
  const [brands, setBrands] = useState([]);
  const [currentBrand, setCurrentBrand] = useState({ id: null, name: '', description: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
    try {
      const response = await axiosInstance.get('/brands');
      setBrands(response.data);
    } catch (error) {
      console.error("Error fetching brands:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentBrand((prevBrand) => ({
      ...prevBrand,
      [name]: value
    }));
  };

  const handleSaveBrand = async () => {
    try {
      if (currentBrand.id) {
        await axiosInstance.put(`/brands/${currentBrand.id}`, currentBrand);
      } else {
        await axiosInstance.post('/brands', currentBrand);
      }
      fetchBrands();
      resetModal();
    } catch (error) {
      console.error("Error saving brand:", error);
    }
  };

  const handleDeleteBrand = async () => {
    try {
      await axiosInstance.delete(`/brands/${currentBrand.id}`);
      fetchBrands();
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error("Error deleting brand:", error);
    }
  };

  const openEditModal = (brand) => {
    setCurrentBrand(brand);
    setIsModalOpen(true);
  };

  const openCreateModal = () => {
    setCurrentBrand({ id: null, name: '', description: '' });
    setIsModalOpen(true);
  };

  const resetModal = () => {
    setCurrentBrand({ id: null, name: '', description: '' });
    setIsModalOpen(false);
  };

  return (
    <div className='mt-5 pt-5 container'>
      <button onClick={openCreateModal} className="px-4 py-2 bg-blue-500 text-white rounded">Create New Brand</button>

      <table className="mt-4 w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {brands.map((brand) => (
            <tr key={brand.id}>
              <td className="border p-2">{brand.name}</td>
              <td className="border p-2">{brand.description}</td>
              <td className="border p-2">
                <button
                  onClick={() => openEditModal(brand)}
                  className="px-2 py-1 bg-yellow-500 text-white rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => { setCurrentBrand(brand); setIsDeleteModalOpen(true); }}
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
          <Modal.Title>{currentBrand.id ? 'Edit Brand' : 'Create Brand'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            name="name"
            className="w-100 p-2 border border-gray-300 rounded mb-2"
            placeholder="Name"
            value={currentBrand.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="description"
            className="w-100 p-2 border border-gray-300 rounded"
            placeholder="Description"
            value={currentBrand.description}
            onChange={handleInputChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={resetModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveBrand}>
            {currentBrand.id ? 'Update' : 'Create'}
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal show={isDeleteModalOpen} onHide={() => setIsDeleteModalOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this brand?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsDeleteModalOpen(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteBrand}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Brand;
