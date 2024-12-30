


import React, { useEffect, useState,useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../../axiosInstance';
import { AuthContext } from '../../contexts/AuthContext';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useContext(AuthContext);

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []);

   

    

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await login({ email, password });
        navigate('/'); // Redirect to dashboard
        await syncLocalCartToServer();
    
        // Clear local storage cart after syncing
        localStorage.removeItem('cart');
        localStorage.removeItem('cartCount');

       
      
      } catch (err) {
        setError(err); // Display error message
      }
    };

    
    // Function to Sync Local Cart to Server
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
                <div className="tf-grid-layout lg-col-2 tf-login-wrap">
                    <div className="tf-login-form">
                        <h5 className="mb_36">Log in</h5>
                        <form onSubmit={handleSubmit} acceptCharset="utf-8">
                            {error && <p className="error-message">{error}</p>}
                            
                            <div className="tf-field style-1 mb_15">
                                <input
                                    className="tf-field-input tf-input"
                                    type="email"
                                    name="email"
                                    value={email}
            onChange={(e) => setEmail(e.target.value)}
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
                                     value={password}
            onChange={(e) => setPassword(e.target.value)}
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
    );
}

export default Login;



































// import React, { useState, useContext } from 'react';

// import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../context/AuthContext';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await login({ email, password });
//       navigate('/'); // Redirect to dashboard
//     } catch (err) {
//       setError(err); // Display error message
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
      
//       <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
//         {error && <p className="text-red-500">{error}</p>}
//         <div className="mb-4">
//           <label>Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full p-2 border rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full p-2 border rounded"
//           />
//         </div>
//         <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
//           Login
//         </button>
//         <Link to="/register" className="tf-btn btn-line">Register<i className="icon icon-arrow1-top-left"></i></Link>
//       </form>
//     </div>
//   );
// };

// export default Login;















    // const handleLogin = async (e) => {
    //     e.preventDefault();
    //     setError('');
    
    //     try {
    //         const response = await axiosInstance.post('/login', {
    //             email: formData.email,
    //             password: formData.password,
    //         });
    
    //         // Save auth token and mark user as authenticated
    //         localStorage.setItem('authToken', response.data.access_token);
    //         localStorage.setItem('isAuthenticated', 'true');
    
    //         // Sync local cart to server after successful login
    //         await syncLocalCartToServer();
    
    //         // Clear local storage cart after syncing
    //         localStorage.removeItem('cart');
    //         localStorage.removeItem('cartCount');
    
    //         // Notify app of updated cart
    //         window.dispatchEvent(new Event('cartUpdated'));
    
    //         // Navigate to the desired page
    //         navigate('/');
    //     } catch (err) {
    //         setError(err.response?.data?.message || 'Login failed. Please try again.');
    //     }
    // };

