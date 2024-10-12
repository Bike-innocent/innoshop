// import React, { useState } from 'react';
// import axiosInstance from '../axiosInstance';
// import { useNavigate } from 'react-router-dom';
// import ReactQuill from 'react-quill'; // Import React Quill for text editor
// import 'react-quill/dist/quill.snow.css'; // Import Quill's styling

// function CreateBlog() {
//   const navigate = useNavigate();

//   // Form state
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '', // Description will be handled by ReactQuill
//     image: null, // For file upload
//     category: ''
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Handle input change for text fields
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   // Handle description change with React Quill
//   const handleEditorChange = (value) => {
//     setFormData({
//       ...formData,
//       description: value
//     });
//   };

//   // Handle file change for image input
//   const handleFileChange = (e) => {
//     setFormData({
//       ...formData,
//       image: e.target.files[0]
//     });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       const formDataToSend = new FormData();
//       Object.keys(formData).forEach((key) => {
//         formDataToSend.append(key, formData[key]);
//       });

//       // Post request to create the blog
//       await axiosInstance.post('/blogs', formDataToSend, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });

//       // Redirect to the blogs list after successful submission
//       navigate('/blogs');
//     } catch (err) {
//       console.error('Error creating blog:', err);
//       setError('Failed to create the blog. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };






import React, { useState, useEffect } from 'react';
import axiosInstance from '../axiosInstance';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill'; // Import React Quill for text editor
import 'react-quill/dist/quill.snow.css'; // Import Quill's styling

function CreateBlog() {
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    description: '', // Description will be handled by ReactQuill
    image: null, // For file upload
    category: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Check for authToken in local storage on component mount
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

      // Post request to create the blog
      await axiosInstance.post('/blogs', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // Redirect to the blogs list after successful submission
      navigate('/blogs');
    } catch (err) {
      console.error('Error creating blog:', err);
      setError('Failed to create the blog. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-4 lg:px-16 bg-gray-100 py-[100px]">
      <div className="max-w-4xl mx-auto bg-white p-2 md:p-5 lg:p-8  rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-8 text-center">Create New Blog</h2>

        {error && <div className="text-red-500 mb-4">{error}</div>}

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Title */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Blog Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Blog Title"
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
                placeholder="Blog Category"
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Blog Image</label>
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
                  placeholder="Write your blog description here..."
                  onChange={handleEditorChange}
                  className="overflow-x-auto block w-full  border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 quill-editor"
                  modules={{
                    toolbar: [
                      ['bold', 'italic', 'underline'], // Bold, Italic, Underline
                      ['link'] // Link
                    ]
                  }}
                  formats={['bold', 'italic', 'underline', 'link']}
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
              {loading ? 'Creating...' : 'Create Blog'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default CreateBlog;
