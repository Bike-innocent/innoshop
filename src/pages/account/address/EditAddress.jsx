



import React, { useEffect, useState } from 'react';
import axiosInstance from '../../../axiosInstance'; // Axios instance
import { Switch } from '@nextui-org/react'; // Toggle switch component
import { useNavigate, useParams } from 'react-router-dom'; // Routing and params

function EditAddress() {
  const navigate = useNavigate(); // Navigation hook
  const { id } = useParams(); // Get address ID from the URL

  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    phone_number: '',
    address_line_1: '',
    address_line_2: '',
    city: '',
    state: '',
    postal_code: '',
    country: 'Nigeria', // Default country
    is_default: false, // Default value for switch
  });

  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch address data when component mounts
  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const response = await axiosInstance.get(`/addresses/${id}`); // Fetch address by ID
        setFormData(response.data); // Set form data with the fetched address
      } catch (err) {
        setError('Failed to load address data. Please try again.');
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchAddress();
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle toggle switch for default address
  const handleToggle = () => {
    setFormData({ ...formData, is_default: !formData.is_default });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
  
    console.log('Submitting Form Data:', formData); // Debugging form data
  
    try {
      await axiosInstance.put(`/addresses/${id}`, formData);
     
      navigate('/account/address'); // Redirect to the address list
    } catch (err) {
      console.error('Error:', err); // Log error
      setError('Failed to update address. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  

  // Show loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Show error if data fails to load
  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="tf-page-cart-item">
      <form className="form-checkout" onSubmit={handleSubmit}>
        <div className="box grid-2">
          <fieldset className="fieldset">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </fieldset>

          <fieldset className="box fieldset">
            <label htmlFor="phone_number">Phone Number</label>
            <input
              type="text"
              id="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              required
            />
          </fieldset>
        </div>

        <div className="box grid-2">
          <fieldset className="box fieldset">
            <label htmlFor="state">State</label>
            <select
              className="tf-select w-100"
              id="state"
              value={formData.state}
              onChange={handleChange}
              required
            >
              <option value="">Select State</option>
              <option value="Lagos">Lagos</option>
              <option value="Abuja">Abuja</option>
            </select>
          </fieldset>

          <fieldset className="box fieldset">
            <label htmlFor="city">City</label>
            <select
              className="tf-select w-100"
              id="city"
              value={formData.city}
              onChange={handleChange}
              required
            >
              <option value="">Select City</option>
              <option value="Ikeja">Ikeja</option>
              <option value="Maitama">Maitama</option>
            </select>
          </fieldset>
        </div>

        <div className="box grid-2">
          <fieldset className="box fieldset">
            <label htmlFor="address_line_1">Street Address</label>
            <input
              type="text"
              id="address_line_1"
              value={formData.address_line_1}
              onChange={handleChange}
              required
            />
          </fieldset>

          <fieldset className="box fieldset">
            <label htmlFor="address_line_2">Apartment/Building (optional)</label>
            <input
              type="text"
              id="address_line_2"
              value={formData.address_line_2}
              onChange={handleChange}
            />
          </fieldset>
        </div>

        <fieldset className="box fieldset">
          <label htmlFor="postal_code">Postal Code (optional)</label>
          <input
            type="text"
            id="postal_code"
            value={formData.postal_code}
            onChange={handleChange}
          />
        </fieldset>

        <fieldset className="box fieldset">
          <label htmlFor="country">Country</label>
          <select
            className="tf-select w-100"
            id="country"
            value={formData.country}
            onChange={handleChange}
            required
          >
            <option value="Nigeria">Nigeria</option>
          </select>
        </fieldset>

        <div className="box fieldset">
          <label>Set as Default Address</label>
          <Switch
            checked={formData.is_default}
            onChange={handleToggle}
            color="primary"
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="btn-primary" disabled={loading}>
          {loading ? 'Saving...' : 'Save Changes'}
        </button>
      </form>
    </div>
  );
}

export default EditAddress;
