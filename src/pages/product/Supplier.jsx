import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axiosInstance';
import { Modal, Button } from 'react-bootstrap';

const Supplier = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [currentSupplier, setCurrentSupplier] = useState({ id: null, name: '', contact_name: '', email: '', phone: '', address_id: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    fetchSuppliers();
  }, []);

  const fetchSuppliers = async () => {
    try {
      const response = await axiosInstance.get('/suppliers');
      setSuppliers(response.data);
    } catch (error) {
      console.error("Error fetching suppliers:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentSupplier((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveSupplier = async () => {
    try {
      if (currentSupplier.id) {
        await axiosInstance.put(`/suppliers/${currentSupplier.id}`, currentSupplier);
      } else {
        await axiosInstance.post('/suppliers', currentSupplier);
      }
      fetchSuppliers();
      resetModal();
    } catch (error) {
      console.error("Error saving supplier:", error);
    }
  };

  const handleDeleteSupplier = async () => {
    try {
      await axiosInstance.delete(`/suppliers/${currentSupplier.id}`);
      fetchSuppliers();
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error("Error deleting supplier:", error);
    }
  };

  const openEditModal = (supplier) => {
    setCurrentSupplier(supplier);
    setIsModalOpen(true);
  };

  const openCreateModal = () => {
    setCurrentSupplier({ id: null, name: '', contact_name: '', email: '', phone: '', address_id: '' });
    setIsModalOpen(true);
  };

  const resetModal = () => {
    setCurrentSupplier({ id: null, name: '', contact_name: '', email: '', phone: '', address_id: '' });
    setIsModalOpen(false);
  };

  return (
    <div className='mt-5 pt-5 container'>
      <button onClick={openCreateModal} className="px-4 py-2 bg-blue-500 text-white rounded">Create New Supplier</button>

      <table className="mt-4 w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Contact Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier) => (
            <tr key={supplier.id}>
              <td className="border p-2">{supplier.name}</td>
              <td className="border p-2">{supplier.contact_name}</td>
              <td className="border p-2">{supplier.email}</td>
              <td className="border p-2">{supplier.phone}</td>
              <td className="border p-2">
                {/* <button onClick={() => openEditModal(supplier)} className="px-2 py-1 bg-yellow-500 text-white rounded mr-2">Edit</button>
                <button onClick={() => { setCurrentSupplier(supplier); setIsDeleteModalOpen(true); }} className="px-2 py-1 bg-red-500 text-white rounded">Delete</button> */}
              </td>
            </tr>
          ))} 
        </tbody>
      </table>

      {/* Create/Edit Modal */}
      <Modal show={isModalOpen} onHide={resetModal}>
        <Modal.Header closeButton>
          <Modal.Title>{currentSupplier.id ? 'Edit Supplier' : 'Create Supplier'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" name="name" placeholder="Name" value={currentSupplier.name} onChange={handleInputChange} className="w-100 p-2 mb-2" />
          <input type="text" name="contact_name" placeholder="Contact Name" value={currentSupplier.contact_name} onChange={handleInputChange} className="w-100 p-2 mb-2" />
          <input type="email" name="email" placeholder="Email" value={currentSupplier.email} onChange={handleInputChange} className="w-100 p-2 mb-2" />
          <input type="text" name="phone" placeholder="Phone" value={currentSupplier.phone} onChange={handleInputChange} className="w-100 p-2" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={resetModal}>Cancel</Button>
          <Button variant="primary" onClick={handleSaveSupplier}>{currentSupplier.id ? 'Update' : 'Create'}</Button>
        </Modal.Footer>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal show={isDeleteModalOpen} onHide={() => setIsDeleteModalOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this supplier?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsDeleteModalOpen(false)}>Cancel</Button>
          <Button variant="danger" onClick={handleDeleteSupplier}>Delete</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Supplier;
