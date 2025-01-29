



import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../../../axiosInstance'; // Axios instance

function Address() {
  // State variables
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch user's addresses
  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await axiosInstance.get('/auth-user-addresses'); // Fetch data
        setAddresses(response.data); // Set data to state
      } catch (err) {
        setError('Failed to fetch addresses.');
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchAddresses();
  }, []);

  const handleDelete = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this address?');
    if (confirmDelete) {
      try {
        setLoading(true);
        await axiosInstance.delete(`/addresses/${id}`);
        navigate('/account/address'); // Redirect after deletion
      } catch (err) {
        setError('Failed to delete address. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  // Show loading spinner
  if (loading) {
    return <div>Loading...</div>;
  }

  // Show error message if fetching fails
  if (error) {
    return <div>Error: {error}</div>;
  }



  return (
    <>
      <section className="flat-spacing-11">
        <div className="container">
          <Link to="/account/create-address" className="tf-btn btn-fill animate-hover-btn">
            Create New Address
          </Link>

          <div className="row mt-4">
            <div className="col-12">
              {addresses.length === 0 ? (
                // Display 'No addresses' message
                <div className="account-address text-center">
                  <p>You have no saved addresses.</p>
                  <Link to="/account/create-address" className="tf-btn btn-fill animate-hover-btn">
                    Create an Address
                  </Link>
                </div>
              ) : (
                // Loop through addresses and display each one
                addresses.map((address) => (
                  <div key={address.id} className="account-address mb-4 p-3 border rounded">
                    <h6 className="mb-2">
                      {address.is_default ? 'Default' : 'Address'}
                    </h6>
                    <p>{address.name}</p>
                    <p>{address.address_line_1}</p>
                    {address.address_line_2 && <p>{address.address_line_2}</p>}
                    <p>{address.city}, {address.state}</p>
                    <p>{address.country}</p>
                    <p className="mb-10">Phone: {address.phone_number}</p>

                    <div className="d-flex gap-10">
                      <Link
                        to={`/account/edit-address/${address.id}`}
                        className="tf-btn btn-fill animate-hover-btn rounded-0 justify-content-center"
                      >
                        <span>Edit</span>
                      </Link>
                      <button
                        type="button"
                        className="btn-danger"
                        onClick={handleDelete}
                        disabled={loading}
                      >
                        {loading ? 'Deleting...' : 'Delete Address'}
                      </button>

                      {/* <button
                        className="tf-btn btn-outline animate-hover-btn rounded-0 justify-content-center"
                      >
                        <span>Delete</span>
                      </button> */}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Address;



