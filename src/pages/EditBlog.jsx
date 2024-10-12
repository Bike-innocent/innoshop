import React, { useState, useEffect } from 'react';
import axiosInstance from '../axiosInstance';
import { useNavigate, useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function EditBlog() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Form state
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState(''); // Updated to description
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});
  const [processing, setProcessing] = useState(false);

  // Fetch blog details when editing
  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await axiosInstance.get(`/blogs/${slug}`);
        const blogData = response.data;

        // Update form state with fetched data
        setTitle(blogData.title || '');
        setDescription(blogData.description || ''); // Updated to description
        setCategory(blogData.category || '');
      } catch (err) {
        console.error('Error fetching blog details:', err);
        setErrors({ general: 'Failed to load blog details.' });
      }
    };

    fetchBlogDetails();
  }, [slug]);

  // Handle input change for regular text fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'title') setTitle(value);
    else if (name === 'category') setCategory(value);
  };

  // Handle file change for image input
  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Handle content change for ReactQuill
  const handleDescriptionChange = (value) => { // Updated to handle description
    setDescription(value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    setErrors({});

    const formDataToSend = new FormData();
    formDataToSend.append('_method', 'PUT'); // Laravel requires PUT method for updates
    formDataToSend.append('title', title);
    formDataToSend.append('description', description); // Updated to description
    formDataToSend.append('category', category);

    if (image) {
      formDataToSend.append('image', image);
    }

    try {
      await axiosInstance.post(`/blogs/${slug}`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate('/blogs', { state: { success: 'Blog updated successfully.' } });
    } catch (err) {
      if (err.response && err.response.data.errors) {
        setErrors(err.response.data.errors);
      } else {
        setErrors({ general: 'Failed to update the blog. Please try again.' });
      }
    } finally {
      setProcessing(false);
    }
  };

  return (
    <section className="px-4 lg:px-16 bg-gray-100 py-[100px]">
      <div className="max-w-4xl mx-auto bg-white  p-2 md:p-5 lg:p-8  rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-8 text-center">Edit Blog</h2>

        {errors.general && <div className="text-red-500 mb-4">{errors.general}</div>}

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Title */}
            <div className="col-span-1 md:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-700">Blog Title</label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={handleInputChange}
                required
                className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Blog Title"
              />
            </div>

            {/* Category */}
            <div className="col-span-1 md:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-700">Category</label>
              <input
                type="text"
                name="category"
                value={category}
                onChange={handleInputChange}
                className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Blog Category"
              />
            </div>

            {/* Image Upload */}
            <div className="col-span-1 md:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-700">Blog Image</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleFileChange}
                className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Description (React Quill Editor) */}
            {/* 6hXY(P~8Z4Bk */}
            <div className="col-span-1 md:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-700">Description</label>
              <div className="quill-container focus-within:border-gray-600 focus-within:shadow-outline">
                <ReactQuill
                  value={description} // Updated to description
                  onChange={handleDescriptionChange} // Updated to handle description
                  className="overflow-x-auto block w-full  border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 quill-editor"
                  modules={{
                    toolbar: [
                      ['bold', 'italic', 'underline'], // Bold, Italic, Underline
                      ['link'], // Link
                    ],
                  }}
                  formats={['bold', 'italic', 'underline', 'link']}
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={processing}
            className="mt-8 w-full bg-indigo-600 text-white py-3 rounded-lg shadow-lg hover:bg-indigo-700 "
          >
            {processing ? 'Updating Blog...' : 'Update Blog'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default EditBlog;
