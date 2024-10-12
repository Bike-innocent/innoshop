import React, { useState, useEffect } from 'react';
import axiosInstance from '../axiosInstance';
import { useNavigate, useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function EditProject() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Form state
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [client, setClient] = useState('');
  const [tools, setTools] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [category, setCategory] = useState('');
  const [url, setUrl] = useState('');
  const [errors, setErrors] = useState({});
  const [processing, setProcessing] = useState(false);

  // Fetch project details when editing
  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await axiosInstance.get(`/projects/${slug}`);
        const projectData = response.data;

        // Update form state with fetched data
        setName(projectData.name || '');
        setDescription(projectData.description || '');
        setClient(projectData.client || '');
        setTools(projectData.tools || '');
        setStartDate(projectData.start_date || '');
        setEndDate(projectData.end_date || '');
        setCategory(projectData.category || '');
        setUrl(projectData.url || '');
      } catch (err) {
        console.error('Error fetching project details:', err);
        setErrors({ general: 'Failed to load project details.' });
      }
    };

    fetchProjectDetails();
  }, [slug]);

  // Handle input change for regular text fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    else if (name === 'client') setClient(value);
    else if (name === 'tools') setTools(value);
    else if (name === 'startDate') setStartDate(value);
    else if (name === 'endDate') setEndDate(value);
    else if (name === 'category') setCategory(value);
    else if (name === 'url') setUrl(value);
  };

  // Handle file change for image input
  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Handle description change for ReactQuill
  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    setErrors({});

    const formDataToSend = new FormData();
    formDataToSend.append('_method', 'PUT'); // Laravel requires PUT method for updates
    formDataToSend.append('name', name);
    formDataToSend.append('description', description);
    formDataToSend.append('client', client);
    formDataToSend.append('tools', tools);
    formDataToSend.append('start_date', startDate);
    formDataToSend.append('end_date', endDate);
    formDataToSend.append('category', category);
    formDataToSend.append('url', url);

    if (image) {
      formDataToSend.append('image', image);
    }

    try {
      await axiosInstance.post(`/projects/${slug}`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate('/projects', { state: { success: 'Project updated successfully.' } });
    } catch (err) {
      if (err.response && err.response.data.errors) {
        setErrors(err.response.data.errors);
      } else {
        setErrors({ general: 'Failed to update the project. Please try again.' });
      }
    } finally {
      setProcessing(false);
    }
  };

  return (
    <section className="px-4 lg:px-16 bg-gray-100 py-[100px]">
      <div className="max-w-4xl mx-auto bg-white  p-2 md:p-5 lg:p-8  rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-8 text-center">Edit Project</h2>

        {errors.general && <div className="text-red-500 mb-4">{errors.general}</div>}

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Project Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleInputChange}
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
                value={client}
                onChange={handleInputChange}
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
                value={category}
                onChange={handleInputChange}
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
                value={tools}
                onChange={handleInputChange}
                className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Tools Used"
              />
            </div>

            {/* Start Date */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={startDate}
                onChange={handleInputChange}
                className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* End Date */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">End Date</label>
              <input
                type="date"
                name="endDate"
                value={endDate}
                onChange={handleInputChange}
                className="block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* URL */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Project URL</label>
              <input
                type="url"
                name="url"
                value={url}
                onChange={handleInputChange}
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

            {/* Description (React Quill Editor) */}
            <div className="col-span-1 md:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-700">Description</label>
              <div className='quill-container focus-within:border-gray-600 focus-within:shadow-outline'>
              <ReactQuill
                value={description}
                onChange={handleDescriptionChange}
                className="overflow-x-auto block w-full  border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 quill-editor"
                modules={{
                  toolbar: [
                    ['bold', 'italic', 'underline','image','video'], 
                    ['link'], // Link
                  ],
                }}
                formats={['bold', 'italic', 'underline', 'link','image','video']}
              />
              </div>
             
            </div>
          </div>

          <button
            type="submit"
            disabled={processing}
            className="mt-8 w-full bg-indigo-600 text-white py-3 rounded-lg shadow-lg hover:bg-indigo-700 "
          >
            {processing ? 'Updating Project...' : 'Update Project'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default EditProject;
