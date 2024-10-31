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
//             await axiosInstance.post('/register', {
//                 name: formData.name,
//                 email: formData.email,
//                 password: formData.password,
//                 password_confirmation: formData.confirmPassword // Add this field for backend validation
//             });

            
//             navigate('/');
//         } catch (err) {
//             setError(err.response?.data?.message || "Registration failed. Please try again.");
//         }
//     };

//     return (
//         <>
//             <section className="flat-spacing-10">
//                 <div className="container">
//                     <div className="form-register-wrap">
//                         <div className="flat-title align-items-start gap-0 mb_30 px-0">
//                             <h5 className="mb_18">Register</h5>
//                             <p className="text_black-2">
//                                 Sign up for early Sale access plus tailored new arrivals, trends and promotions.
//                                 To opt out, click unsubscribe in our emails.
//                             </p>
//                         </div>
//                         <div>
//                             <form onSubmit={handleSubmit} acceptCharset="utf-8" data-mailchimp="true">
//                                 {error && <p className="error-message">{error}</p>}
                                
//                                 <div className="tf-field style-1 mb_15">
//                                     <input
//                                         className="tf-field-input tf-input"
//                                         placeholder=" "
//                                         type="text"
//                                         id="name"
//                                         name="name"
//                                         value={formData.name}
//                                         onChange={handleChange}
//                                     />
//                                     <label className="tf-field-label fw-4 text_black-2" htmlFor="name">Name</label>
//                                 </div>

//                                 <div className="tf-field style-1 mb_15">
//                                     <input
//                                         className="tf-field-input tf-input"
//                                         placeholder=" "
//                                         type="email"
//                                         id="email"
//                                         name="email"
//                                         value={formData.email}
//                                         onChange={handleChange}
//                                     />
//                                     <label className="tf-field-label fw-4 text_black-2" htmlFor="email">Email *</label>
//                                 </div>

//                                 <div className="tf-field style-1 mb_30">
//                                     <input
//                                         className="tf-field-input tf-input"
//                                         placeholder=" "
//                                         type="password"
//                                         id="password"
//                                         name="password"
//                                         value={formData.password}
//                                         onChange={handleChange}
//                                     />
//                                     <label className="tf-field-label fw-4 text_black-2" htmlFor="password">Password *</label>
//                                 </div>

//                                 <div className="tf-field style-1 mb_30">
//                                     <input
//                                         className="tf-field-input tf-input"
//                                         placeholder=" "
//                                         type="password"
//                                         id="confirmPassword"
//                                         name="confirmPassword"
//                                         value={formData.confirmPassword}
//                                         onChange={handleChange}
//                                     />
//                                     <label className="tf-field-label fw-4 text_black-2" htmlFor="confirmPassword">Confirm Password *</label>
//                                 </div>

//                                 <div className="mb_20">
//                                     <button
//                                         type="submit"
//                                         className="tf-btn w-100 radius-3 btn-fill animate-hover-btn justify-content-center"
//                                     >
//                                         Register
//                                     </button>
//                                 </div>

//                                 <div className="text-center">
//                                     <Link to="/login" className="tf-btn btn-line">
//                                         Already have an account? Log in here<i className="icon icon-arrow1-top-left"></i>
//                                     </Link>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }

// export default Register;














import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../../axiosInstance';

function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const response = await axiosInstance.post('/register', {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                password_confirmation: formData.confirmPassword
            });

            // Save the auth token to local storage
            if (response.data?.access_token) {
                localStorage.setItem('authToken', response.data.access_token);
                navigate('/');
            } else {
                setError("Registration succeeded but no token returned.");
            }
        } catch (err) {
            setError(err.response?.data?.message || "Registration failed. Please try again.");
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
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                />
                                <label className="tf-field-label fw-4 text_black-2" htmlFor="confirmPassword">Confirm Password *</label>
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
