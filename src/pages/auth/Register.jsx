// import React, {  useEffect } from 'react';
// import {  Link } from 'react-router-dom';

// function Register() {
//     useEffect(() => {
//         window.scrollTo(0, 0); // Scroll to the top of the page
//       }, []);
//   return (
//     <>
      
//       <section class="flat-spacing-10">
//             <div class="container">
//                 <div class="form-register-wrap">
//                     <div class="flat-title align-items-start gap-0 mb_30 px-0">
//                         <h5 class="mb_18">Register</h5>
//                         <p class="text_black-2">Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click unsubscribe in our emails</p>
//                     </div>
//                     <div>
//                         <form class=""  accept-charset="utf-8" data-mailchimp="true">
                           
//                             <div class="tf-field style-1 mb_15">
//                                 <input class="tf-field-input tf-input" placeholder=" " type="text" id="property2" name="name"/>
//                                 <label class="tf-field-label fw-4 text_black-2" for="property2">Name</label>
//                             </div>
//                             <div class="tf-field style-1 mb_15">
//                                 <input class="tf-field-input tf-input" placeholder=" " type="email" id="property3" name="email"/>
//                                 <label class="tf-field-label fw-4 text_black-2" for="property3">Email *</label>
//                             </div>
//                             <div class="tf-field style-1 mb_30">
//                                 <input class="tf-field-input tf-input" placeholder=" " type="password" id="property4" name="password"/>
//                                 <label class="tf-field-label fw-4 text_black-2" for="property4">Password *</label>
//                             </div>
//                             <div class="tf-field style-1 mb_30">
//                                 <input class="tf-field-input tf-input" placeholder=" " type="password" id="property4" name="password"/>
//                                 <label class="tf-field-label fw-4 text_black-2" for="property4">Confirm Password *</label>
//                             </div>
//                             <div class="mb_20">
//                                 <button type="submit" class="tf-btn w-100 radius-3 btn-fill animate-hover-btn justify-content-center">Register</button>
//                             </div>
//                             <div class="text-center">
//                                 <Link to="/login" class="tf-btn btn-line">Already have an account? Log in here<i class="icon icon-arrow1-top-left"></i></Link>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     </>
//   )
// }

// export default Register





































// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axiosInstance from '../../axiosInstance';

// function Register() {
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         confirmPassword: ''
//     });
//     const [error, setError] = useState('');

//     useEffect(() => {
//         window.scrollTo(0, 0); // Scroll to the top of the page
//     }, []);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError('');

//         if (formData.password !== formData.confirmPassword) {
//             setError("Passwords do not match");
//             return;
//         }

//         try {
//             const response = await axiosInstance.post('/register', {
//                 name: formData.name,
//                 email: formData.email,
//                 password: formData.password,
//                 password_confirmation: formData.confirmPassword
//             });

//             // Save the auth token to local storage
//             if (response.data?.access_token) {
//                 localStorage.setItem('authToken', response.data.access_token);
//                 localStorage.setItem('isAuthenticated', 'true');
//                 navigate('/');
//             } else {
//                 setError("Registration succeeded but no token returned.");
//             }
//         } catch (err) {
//             setError(err.response?.data?.message || "Registration failed. Please try again.");
//         }
//     };

//     return (
//         <section className="flat-spacing-10">
//             <div className="container">
//                 <div className="form-register-wrap">
//                     <div className="flat-title align-items-start gap-0 mb_30 px-0">
//                         <h5 className="mb_18">Register</h5>
//                         <p className="text_black-2">
//                             Sign up for early Sale access plus tailored new arrivals, trends and promotions.
//                             To opt out, click unsubscribe in our emails.
//                         </p>
//                     </div>
//                     <div>
//                         <form onSubmit={handleSubmit} acceptCharset="utf-8" data-mailchimp="true">
//                             {error && <p className="error-message">{error}</p>}
                            
//                             <div className="tf-field style-1 mb_15">
//                                 <input
//                                     className="tf-field-input tf-input"
//                                     placeholder=" "
//                                     type="text"
//                                     id="name"
//                                     name="name"
//                                     value={formData.name}
//                                     onChange={handleChange}
//                                 />
//                                 <label className="tf-field-label fw-4 text_black-2" htmlFor="name">Name</label>
//                             </div>

//                             <div className="tf-field style-1 mb_15">
//                                 <input
//                                     className="tf-field-input tf-input"
//                                     placeholder=" "
//                                     type="email"
//                                     id="email"
//                                     name="email"
//                                     value={formData.email}
//                                     onChange={handleChange}
//                                 />
//                                 <label className="tf-field-label fw-4 text_black-2" htmlFor="email">Email *</label>
//                             </div>

//                             <div className="tf-field style-1 mb_30">
//                                 <input
//                                     className="tf-field-input tf-input"
//                                     placeholder=" "
//                                     type="password"
//                                     id="password"
//                                     name="password"
//                                     value={formData.password}
//                                     onChange={handleChange}
//                                 />
//                                 <label className="tf-field-label fw-4 text_black-2" htmlFor="password">Password *</label>
//                             </div>

//                             <div className="tf-field style-1 mb_30">
//                                 <input
//                                     className="tf-field-input tf-input"
//                                     placeholder=" "
//                                     type="password"
//                                     id="confirmPassword"
//                                     name="confirmPassword"
//                                     value={formData.confirmPassword}
//                                     onChange={handleChange}
//                                 />
//                                 <label className="tf-field-label fw-4 text_black-2" htmlFor="confirmPassword">Confirm Password *</label>
//                             </div>

//                             <div className="mb_20">
//                                 <button
//                                     type="submit"
//                                     className="tf-btn w-100 radius-3 btn-fill animate-hover-btn justify-content-center"
//                                 >
//                                     Register
//                                 </button>
//                             </div>

//                             <div className="text-center">
//                                 <Link to="/login" className="tf-btn btn-line">
//                                     Already have an account? Log in here<i className="icon icon-arrow1-top-left"></i>
//                                 </Link>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Register;





















import React, { useState, useContext,useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../../axiosInstance';

function Register() {
    

    const { register } = useContext(AuthContext);
    const [formData, setFormData] = useState({ name: '', email: '', password: '', password_confirmation: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []);



    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError('');
      try {
        await register(formData);
        navigate('/'); // Redirect after register
        await syncLocalCartToServer();
    
        // Clear local storage cart after syncing
        localStorage.removeItem('cart');
        localStorage.removeItem('cartCount');
      } catch (err) {
        setError(err);
      }
    };

    const syncLocalCartToServer = async () => {
        const localCart = JSON.parse(localStorage.getItem('cart')) || [];
    
        if (localCart.length > 0) {
            try {
                for (const item of localCart) {
                    await axiosInstance.post('/cart', {
                        product_id: item.id,
                        quantity: item.quantity,
                    });
                }
                console.log("Local cart synced successfully.");
            } catch (error) {
                console.error("Failed to sync cart to server:", error);
            }
        }
    };

   




    return (
        <section className="flat-spacing-10">
            <div className="container">
                <div className="form-register-wrap">
                    <div className="flat-title align-items-start gap-0 mb_30 px-0">
                        <h5 className="mb_18">Register</h5>
                        <p className="text_black-2">
                            Sign up for early Sale access plus tailored new arrivals, trends and promotions.
                            To opt out, click unsubscribe in our emails.
                        </p>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit} acceptCharset="utf-8" data-mailchimp="true">
                            {error && <p className="error-message">{error}</p>}
                            
                            <div className="tf-field style-1 mb_15">
                                <input
                                    className="tf-field-input tf-input"
                                    placeholder=" "
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <label className="tf-field-label fw-4 text_black-2" htmlFor="name">Name</label>
                            </div>

                            <div className="tf-field style-1 mb_15">
                                <input
                                    className="tf-field-input tf-input"
                                    placeholder=" "
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <label className="tf-field-label fw-4 text_black-2" htmlFor="email">Email *</label>
                            </div>

                            <div className="tf-field style-1 mb_30">
                                <input
                                    className="tf-field-input tf-input"
                                    placeholder=" "
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                <label className="tf-field-label fw-4 text_black-2" htmlFor="password">Password *</label>
                            </div>

                            <div className="tf-field style-1 mb_30">
                                <input
                                    className="tf-field-input tf-input"
                                    placeholder=" "
                                    type="password"
                                    id="password_confirmation"
                                    name="password_confirmation"
                                    value={formData.password_confirmation}
                                    onChange={handleChange}
                                />
                                <label className="tf-field-label fw-4 text_black-2" htmlFor="password_confirmation">Confirm Password *</label>
                            </div>

                            <div className="mb_20">
                                <button
                                    type="submit"
                                    className="tf-btn w-100 radius-3 btn-fill animate-hover-btn justify-content-center"
                                >
                                    Register
                                </button>
                            </div>

                            <div className="text-center">
                                <Link to="/login" className="tf-btn btn-line">
                                    Already have an account? Log in here<i className="icon icon-arrow1-top-left"></i>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;
















// import React, { useState, useContext } from 'react';
// import { AuthContext } from '../../context/AuthContext';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//   const { register } = useContext(AuthContext);
//   const [formData, setFormData] = useState({ name: '', email: '', password: '', password_confirmation: '' });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     try {
//       await register(formData);
//       navigate('/'); // Redirect after register
//     } catch (err) {
//       setError(err);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold mb-4">Register</h2>
//       {error && <p className="text-red-500 mb-4">{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <input
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//           className="w-full p-2 mb-4 border rounded"
//         />
//         <input
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full p-2 mb-4 border rounded"
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           className="w-full p-2 mb-4 border rounded"
//         />
//         <input
//           type="password"
//           name="password_confirmation"
//           placeholder="Confirm Password"
//           value={formData.password_confirmation}
//           onChange={handleChange}
//           className="w-full p-2 mb-4 border rounded"
//         />
//         <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">
//           Register
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Register;






















    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setError('');

    //     if (formData.password !== formData.confirmPassword) {
    //         setError("Passwords do not match");
    //         return;
    //     }

    //     try {
    //         const response = await axiosInstance.post('/register', {
    //             name: formData.name,
    //             email: formData.email,
    //             password: formData.password,
    //             password_confirmation: formData.confirmPassword
    //         });

    //         // Save the auth token to local storage
    //         if (response.data?.access_token) {
    //             localStorage.setItem('authToken', response.data.access_token);
    //             localStorage.setItem('isAuthenticated', 'true');
    //             navigate('/');
    //         } else {
    //             setError("Registration succeeded but no token returned.");
    //         }
    //     } catch (err) {
    //         setError(err.response?.data?.message || "Registration failed. Please try again.");
    //     }
    // };