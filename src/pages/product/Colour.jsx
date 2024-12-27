import React, { useState, useEffect } from 'react';
import axios from '../../axiosInstance';
import { Modal, Button } from 'react-bootstrap';
import { SketchPicker } from 'react-color';

const Colour = () => {
  const [colours, setColours] = useState([]);
  const [currentColour, setCurrentColour] = useState({ id: null, name: '', hex_code: '#000000' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    fetchColours();
  }, []);

  const fetchColours = async () => {
    try {
      const response = await axios.get('/colours');
      setColours(response.data);
    } catch (error) {
      console.error('Error fetching colours:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentColour({ ...currentColour, [name]: value });
  };

  const handleColorChange = (color) => {
    setCurrentColour({ ...currentColour, hex_code: color.hex });
  };

  const handleSaveColour = async () => {
    try {
      if (currentColour.id) {
        await axios.put(`/colours/${currentColour.id}`, currentColour);
      } else {
        await axios.post('/colours', currentColour);
      }
      fetchColours();
      resetModal();
    } catch (error) {
      console.error('Error saving colour:', error);
    }
  };

  const handleDeleteColour = async () => {
    try {
      await axios.delete(`/colours/${currentColour.id}`);
      fetchColours();
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error('Error deleting colour:', error);
    }
  };

  const openEditModal = (colour) => {
    setCurrentColour(colour);
    setIsModalOpen(true);
  };

  const openCreateModal = () => {
    setCurrentColour({ id: null, name: '', hex_code: '#000000' });
    setIsModalOpen(true);
  };

  const resetModal = () => {
    setCurrentColour({ id: null, name: '', hex_code: '#000000' });
    setIsModalOpen(false);
  };

  return (
    <div className='mt-5 pt-5 container'>
      <button onClick={openCreateModal} className="px-4 py-2 bg-blue-500 text-white rounded">Create New Colour</button>

      <table className="mt-4 w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Color</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {colours.map((colour) => (
            <tr key={colour.id}>
              <td className="border p-2">{colour.name}</td>
              <td className="border p-2">
                <div
                  className="w-6 h-6"
                  style={{ backgroundColor: colour.hex_code }}
                />  <p>{colour.hex_code} </p>
              </td>
              <td className="border p-2">
                <button
                  onClick={() => openEditModal(colour)}
                  className="px-2 py-1 bg-yellow-500 text-white rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => { setCurrentColour(colour); setIsDeleteModalOpen(true); }}
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
          <Modal.Title>{currentColour.id ? 'Edit Colour' : 'Create Colour'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            name="name"
            className="w-100 p-2 border border-gray-300 rounded mb-2"
            placeholder="Name"
            value={currentColour.name}
            onChange={handleInputChange}
          />
          <SketchPicker
            color={currentColour.hex_code}
            onChangeComplete={handleColorChange}
            className="w-full"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={resetModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveColour}>
            {currentColour.id ? 'Update' : 'Create'}
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal show={isDeleteModalOpen} onHide={() => setIsDeleteModalOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this colour?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsDeleteModalOpen(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteColour}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Colour;
