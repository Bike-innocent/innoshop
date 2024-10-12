
import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import axiosInstance from '../../../axiosInstance';
import { useNavigate } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react'; // Import Headless UI Dialog
import { Fragment } from 'react';

const ProjectDropdown = ({ project }) => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false); // For dialog state
  const [deleting, setDeleting] = useState(false); // For showing a deleting state

  const handleEditClick = () => {
    navigate(`/project/edit/${project.slug}`);
  };

  // Function to fetch user info based on token
  const fetchUser = async () => {
    try {
      const response = await axiosInstance.get('/user');
      const user = response.data;

      const adminRole = user.roles.some((role) => role.name === 'admin');
      setIsAdmin(adminRole);
    } catch (error) {
      console.error('Error fetching user:', error);
      setIsAdmin(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');

    if (authToken) {
      fetchUser();
    } else {
      setLoading(false);
    }

    const handleStorageChange = () => {
      const newToken = localStorage.getItem('authToken');
      if (newToken) {
        fetchUser();
      } else {
        setIsAdmin(false);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Function to handle delete request
  const handleDelete = async () => {
    setDeleting(true);
    try {
      await axiosInstance.delete(`/projects/${project.slug}`);
     
    } catch (error) {
      console.error('Error deleting project:', error);
    } finally {
      setDeleting(false);
      setIsDialogOpen(false); // Close the dialog after deletion
    }
  };

  if (loading) {
    return null;
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <button className="text-gray-700 hover:text-gray-900 ">
            <BsThreeDotsVertical size={24} />
          </button>
        </DropdownTrigger>
        <DropdownMenu className='bg-white rounded-lg '>
          <DropdownItem key="edit" onClick={handleEditClick} textValue="edit">
            <div className="flex items-center hover:bg-gray-200 p-1 rounded">Edit</div>
          </DropdownItem>
          <DropdownItem key="delete" onClick={() => setIsDialogOpen(true)} textValue="delete">
            <div className="flex items-center hover:bg-gray-200 p-1 rounded">Delete</div>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      {/* Delete Confirmation Dialog */}
      <Transition appear show={isDialogOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setIsDialogOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    Confirm Deletion
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Are you sure you want to delete the project "{project.name}"? This action cannot be undone.
                    </p>
                  </div>

                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 mr-2"
                      onClick={() => setIsDialogOpen(false)}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className={`inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-500 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 ${
                        deleting ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                      onClick={handleDelete}
                      disabled={deleting}
                    >
                      {deleting ? 'Deleting...' : 'Delete'}
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ProjectDropdown;
