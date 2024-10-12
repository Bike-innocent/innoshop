

import React, { useState,useEffect } from 'react';
import axiosInstance from '../axiosInstance';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill'; // Import React Quill
import 'react-quill/dist/quill.snow.css'; // Import Quill's styling

function CreateProject() {
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    description: '', // Description will be handled by ReactQuill
    image: null, // For file upload
    client: '',
    tools: '',
    start_date: '',
    end_date: '',
    category: '',
    url: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      navigate('/'); // Redirect to home if token is not found
    }
  }, [navigate]);

  // Handle input change for text fields
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle description change with React Quill
  const handleEditorChange = (value) => {
    setFormData({
      ...formData,
      description: value
    });
  };

  // Handle file change for image input
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0]
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });

      // Post request to create the project
      await axiosInstance.post('/projects', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // Redirect to a success page or project list after submission
      navigate('/projects');
    } catch (err) {
      console.error('Error creating project:', err);
      setError('Failed to create the project. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-2 bg-gray-100 py-[100px]">
      <div className="max-w-4xl mx-auto bg-white p-2 md:p-5 lg:p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-8 text-center">Create New Project</h2>

        {error && <div className="text-red-500 mb-4">{error}</div>}

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Project Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Project Name"
              />
            </div>

            {/* Client */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Client</label>
              <input
                type="text"
                name="client"
                value={formData.client}
                onChange={handleChange}
                className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Client Name"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Project Category"
              />
            </div>

            {/* Tools */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Tools</label>
              <input
                type="text"
                name="tools"
                value={formData.tools}
                onChange={handleChange}
                className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Tools Used"
              />
            </div>

            {/* Start Date */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Start Date</label>
              <input
                type="date"
                name="start_date"
                value={formData.start_date}
                onChange={handleChange}
                className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* End Date */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">End Date</label>
              <input
                type="date"
                name="end_date"
                value={formData.end_date}
                onChange={handleChange}
                className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* URL */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Project URL</label>
              <input
                type="url"
                name="url"
                value={formData.url}
                onChange={handleChange}
                className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Live Project URL"
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Project Image</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleFileChange}
                className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Description (Full width with React Quill) */}
            <div className="col-span-1 md:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-700">Description</label>
              <div className="quill-container focus-within:border-gray-600 focus-within:shadow-outline">
                <ReactQuill
                  value={formData.description}
                  placeholder="Write your project description here..."
                  onChange={handleEditorChange}
                  className="overflow-x-auto block w-full  border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 quill-editor"
                  modules={{
                    toolbar: [
                      ['bold', 'italic', 'underline','image','video'],
                      ['link'] 
                    ]
                  }}
                  formats={['bold', 'italic', 'underline', 'link','image','video']}
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              disabled={loading}
              className="w-full p-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium"
            >
              {loading ? 'Creating...' : 'Create Project'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default CreateProject;


















