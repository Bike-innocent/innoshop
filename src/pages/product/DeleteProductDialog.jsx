import { Dialog } from '@headlessui/react';

const DeleteProductDialog = ({ isOpen, closeModal, confirmDelete, productName }) => {
  return (
    <Dialog open={isOpen} onClose={closeModal}>
      <div className="fixed inset-0 bg-gray-300 bg-opacity-30"></div>
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="bg-white p-6 rounded shadow-lg">
          <h2 className="text-lg font-bold">Confirm Delete</h2>
          <p>Are you sure you want to delete <b>{productName}</b>?</p>
          <div className="flex gap-4 mt-4">
            <button className="bg-red-500 text-white px-4 py-2" onClick={confirmDelete}>
              Delete
            </button>
            <button className="bg-gray-300 px-4 py-2" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default DeleteProductDialog;
