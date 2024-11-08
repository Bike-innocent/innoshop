import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axiosInstance';
import { Modal, Button } from 'react-bootstrap';

const Size = () => {
  const [sizes, setSizes] = useState([]);
  const [currentSize, setCurrentSize] = useState({ id: null, name: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    fetchSizes();
  }, []);

  const fetchSizes = async () => {
    try {
      const response = await axiosInstance.get('/sizes');
      setSizes(response.data);
    } catch (error) {
      console.error('Error fetching sizes:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentSize((prevSize) => ({
      ...prevSize,
      [name]: value,
    }));
  };

  const handleSaveSize = async () => {
    try {
      if (currentSize.id) {
        await axiosInstance.put(`/sizes/${currentSize.id}`, currentSize);
      } else {
        await axiosInstance.post('/sizes', currentSize);
      }
      fetchSizes();
      resetModal();
    } catch (error) {
      console.error('Error saving size:', error);
    }
  };

  const handleDeleteSize = async () => {
    try {
      await axiosInstance.delete(`/sizes/${currentSize.id}`);
      fetchSizes();
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error('Error deleting size:', error);
    }
  };

  const openEditModal = (size) => {
    setCurrentSize(size);
    setIsModalOpen(true);
  };

  const openCreateModal = () => {
    setCurrentSize({ id: null, name: '' });
    setIsModalOpen(true);
  };

  const resetModal = () => {
    setCurrentSize({ id: null, name: '' });
    setIsModalOpen(false);
  };

  return (
    <div className='mt-5 pt-5 container'>
      <button onClick={openCreateModal} className='px-4 py-2 bg-blue-500 text-white rounded'>
        Create New Size
      </button>

      <table className='mt-4 w-full border-collapse'>
        <thead>
          <tr>
            <th className='border p-2'>Name</th>
            <th className='border p-2'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sizes.map((size) => (
            <tr key={size.id}>
              <td className='border p-2'>{size.name}</td>
              <td className='border p-2'>
                <button onClick={() => openEditModal(size)} className='px-2 py-1 bg-yellow-500 text-white rounded mr-2'>
                  Edit
                </button>
                <button onClick={() => { setCurrentSize(size); setIsDeleteModalOpen(true); }} className='px-2 py-1 bg-red-500 text-white rounded'>
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
          <Modal.Title>{currentSize.id ? 'Edit Size' : 'Create Size'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type='text'
            name='name'
            className='w-100 p-2 border border-gray-300 rounded'
            placeholder='Size Name'
            value={currentSize.name}
            onChange={handleInputChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={resetModal}>
            Cancel
          </Button>
          <Button variant='primary' onClick={handleSaveSize}>
            {currentSize.id ? 'Update' : 'Create'}
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal show={isDeleteModalOpen} onHide={() => setIsDeleteModalOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this size?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={() => setIsDeleteModalOpen(false)}>
            Cancel
          </Button>
          <Button variant='danger' onClick={handleDeleteSize}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Size;
