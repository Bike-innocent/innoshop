// import React from 'react'


// function Address() {
//     return (
//         <>
            
//                 <section class="flat-spacing-11">
//                     <div class="container">
//                         <div class="row">

//                             <div class="col-12">
//                                 <div class=" account-address">
//                                     <div class="">
//                                     <p>this is the structure of the address, am working on the user logic for the full functionality</p>
//                                         <div>
//                                             <h6 class="mb_20">Default</h6>
//                                             <p>themesflat</p>
//                                             <p>1234 Fashion Street, Suite 567</p>
//                                             <p>New York</p>
//                                             <p>info@fashionshop.com</p>
//                                             <p class="mb_10">(212) 555-1234</p>
//                                             <div class="d-flex gap-10">
//                                                 <a href="#" class="tf-btn btn-fill animate-hover-btn rounded-0 justify-content-center">
//                                                     <span>Edit</span>
//                                                 </a>
//                                                 <a href="#" class="tf-btn btn-outline animate-hover-btn rounded-0 justify-content-center">
//                                                     <span>Delete</span>
//                                                 </a>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
           

//         </>
//     )
// }

// export default Address



















import React, { useState } from 'react';
import axiosInstance from '../../axiosInstance'; // Assuming you have this set up
import { Switch } from '@nextui-org/react'; // Import Switch component
import { useNavigate } from 'react-router-dom'; // Redirect after submission

function CreateAddress() {
  const navigate = useNavigate(); // Navigation hook

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
    is_default: false, // Default state for switch
  });

  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle switch toggle for default address
  const handleToggle = () => {
    setFormData({ ...formData, is_default: !formData.is_default });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Post data to the backend
      await axiosInstance.post('/addresses', formData);
      navigate('/account/address'); // Redirect after successful submission
    } catch (err) {
      setError('Failed to save address. Please try again.'); // Show error
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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
              <div className="select-custom">
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
              </div>
            </fieldset>

            <fieldset className="box fieldset">
              <label htmlFor="city">City</label>
              <div className="select-custom">
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
              </div>
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
            <label htmlFor="country">Country</label>
            <div className="select-custom">
              <select
                className="tf-select w-100"
                id="country"
                value={formData.country}
                onChange={handleChange}
                required
              >
                <option value="Nigeria">Nigeria</option>
              </select>
            </div>
          </fieldset>

          <fieldset className="box fieldset">
            <label htmlFor="postal_code">Postal Code (optional)</label>
            <input
              type="text"
              id="postal_code"
              value={formData.postal_code}
              onChange={handleChange}
            />
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
            {loading ? 'Saving...' : 'Save Address'}
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateAddress;
















// import React from 'react'

// function Address() {
//   return (
//     <>
      
//       <div class="tf-page-cart-item">
                        
//                         <form class="form-checkout">

                       

//                             <div class="box grid-2">
//                                 <fieldset class="fieldset">
//                                     <label for="name"> Name</label>
//                                     <input type="text" id="name"/>
//                                 </fieldset>

//                                 <fieldset class="box fieldset">
//                                     <label for="phone">Phone Number</label>
//                                     <input type="number" id="phone"/>
//                                 </fieldset>
                               
//                             </div>

//                         <div class="box grid-2">
//                             <fieldset class="box fieldset">
//                                 <label for="state">State</label>
//                                 <div class="select-custom">
//                                     <select class="tf-select w-100" id="state" >
                                       
//                                         <option value="Lagos" >Lagos</option>
//                                         <option value="Abuja" >Abuja</option> 
//                                     </select>
//                                 </div>
//                             </fieldset>
//                             <fieldset class="box fieldset">
//                                 <label for="city">City</label>
//                                 <div class="select-custom">
//                                     <select class="tf-select w-100" id="city" >
                                       
//                                         <option value="Austria" >Austria</option>
//                                         <option value="Belgium" >Belgium</option> 
//                                     </select>
//                                 </div>
//                             </fieldset>
                           
                           
//                         </div>

//                          <div class="box grid-2">
//                             <fieldset class="box fieldset">
//                                 <label for="address_line_1">Street Address</label>
//                                 <input type="text" id="address_line_1"/>
//                             </fieldset>

//                             <fieldset class="box fieldset">
//                                 <label for="address_line_2">Apartment/building (optional)</label>
//                                 <input type="text" id="address_line_2"/>
//                             </fieldset>
//                             </div>
//                             <fieldset class="box fieldset">
//                                 <label for="country">country</label>
//                                 <div class="select-custom">
//                                     <select class="tf-select w-100" id="country" >
                                       
                                        
//                                         <option value="Nigeria" >Nigeria</option> 
//                                     </select>
//                                 </div>
//                             </fieldset>
                           
                           
                           
//                         </form>
//                     </div>
//     </>
//   )
// }

// export default Address
