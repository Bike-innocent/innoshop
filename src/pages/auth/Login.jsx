// import React, {  useEffect } from 'react';
// import { Link } from 'react-router-dom';

// function Login() {
//     useEffect(() => {
//         window.scrollTo(0, 0); // Scroll to the top of the page
//       }, []);
//   return (
//     <>
      
//       <section class="flat-spacing-10">
//             <div class="container">
//                 <div class="tf-grid-layout lg-col-2 tf-login-wrap">
//                     <div class="tf-login-form">
                        
//                         <div >
//                             <h5 class="mb_36">Log in</h5>
//                             <div>
//                                 <form class="" id="login-form"  accept-charset="utf-8">
//                                     <div class="tf-field style-1 mb_15">
//                                         <input class="tf-field-input tf-input" placeholder="" type="email" id="property3" name="email"/>
//                                         <label class="tf-field-label fw-4 text_black-2" for="property3">Email *</label>
//                                     </div>
//                                     <div class="tf-field style-1 mb_30">
//                                         <input class="tf-field-input tf-input" placeholder="" type="password" id="property4" name="password"/>
//                                         <label class="tf-field-label fw-4 text_black-2" for="property4">Password *</label>
//                                     </div>
//                                     <div class="mb_20">
//                                     <Link to="/forget-password" class="tf-btn btn-line">Forgot your password?</Link>
//                                     </div>
//                                     <div class="">
//                                         <button type="submit" class="tf-btn w-100 radius-3 btn-fill animate-hover-btn justify-content-center">Log in</button>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="tf-login-content">
//                         <h5 class="mb_36">I'm new here</h5>
//                         <p class="mb_20">Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click unsubscribe in our emails.</p>
//                         <Link to="/register" class="tf-btn btn-line">Register<i class="icon icon-arrow1-top-left"></i></Link>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     </>
//   )
// }

// export default Login
















import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../../axiosInstance';

function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axiosInstance.post('/login', {
                email: formData.email,
                password: formData.password,
            });

            // Save auth token to localStorage
            localStorage.setItem('authToken', response.data.access_token);
            
            // Navigate to the desired page after login, e.g., dashboard
            navigate('/');
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed. Please try again.');
        }
    };

    return (
        <>
            <section className="flat-spacing-10">
                <div className="container">
                    <div className="tf-grid-layout lg-col-2 tf-login-wrap">
                        <div className="tf-login-form">
                            <h5 className="mb_36">Log in</h5>
                            <form onSubmit={handleLogin} acceptCharset="utf-8">
                                {error && <p className="error-message">{error}</p>}
                                
                                <div className="tf-field style-1 mb_15">
                                    <input
                                        className="tf-field-input tf-input"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder=""
                                    />
                                    <label className="tf-field-label fw-4 text_black-2" htmlFor="email">Email *</label>
                                </div>

                                <div className="tf-field style-1 mb_30">
                                    <input
                                        className="tf-field-input tf-input"
                                        type="password"
                                        name="password"
                                        placeholder=""
                                       
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                    <label className="tf-field-label fw-4 text_black-2" htmlFor="password">Password *</label>
                                </div>
                                

                                <div className="mb_20">
                                    <Link to="/forget-password" className="tf-btn btn-line">Forgot your password?</Link>
                                </div>

                                <div>
                                    <button type="submit" className="tf-btn w-100 radius-3 btn-fill animate-hover-btn justify-content-center">
                                        Log in
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="tf-login-content">
                            <h5 className="mb_36">I'm new here</h5>
                            <p className="mb_20">
                                Sign up for early Sale access plus tailored new arrivals, trends, and promotions. To opt out, click unsubscribe in our emails.
                            </p>
                            <Link to="/register" className="tf-btn btn-line">Register<i className="icon icon-arrow1-top-left"></i></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Login;
