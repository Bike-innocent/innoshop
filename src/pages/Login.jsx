
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axiosInstance from '../axiosInstance';

// import Title from '../components/Title';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing icons for show/hide password

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState('');
  const navigate = useNavigate();

  const validateAuthToken = async (token) => {
    try {
      const response = await axiosInstance.get('/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.status === 200;
    } catch (error) {
      return false; // If an error occurs, assume the token is invalid
    }
  };

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');

    if (authToken) {
      validateAuthToken(authToken).then((isValid) => {
        if (isValid) {
          const previousPath = sessionStorage.getItem('previousPath') || '/';
          sessionStorage.removeItem('previousPath');
          navigate(previousPath);
        } else {
          localStorage.removeItem('authToken');
          navigate('/login');
        }
      });
    }

    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Clear previous errors
      setErrors({});
      setGeneralError('');

      const response = await axiosInstance.post('/mylogin', { email, password });
      
      localStorage.setItem('authToken', response.data.access_token);

      setTimeout(() => {
        const previousPath = sessionStorage.getItem('previousPath') || '/';
        sessionStorage.removeItem('previousPath');
        navigate(previousPath);
      }, 100);

    } catch (error) {
      console.error('Login error:', error);

      if (error.response && error.response.status === 401) {
        setGeneralError('Invalid email or password.');
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-[120px] mb-[120px] shadow-md p-4">
      {/* <Title title={`Login`} /> */}
     
 
      {/* Manual login form */}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
         
          className="border p-2 mt-2 w-full"
        />
        {errors.email && <p className="text-red-600">{errors.email[0]}</p>}

      
        <div className="relative mt-2">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
           
            className="border p-2 w-full pr-10" // Add padding for the icon
          />
         
        </div>
        {errors.password && <p className="text-red-600">{errors.password[0]}</p>}

       

        <button type="submit" className=" bg-black text-white py-2 px-4 rounded mt-2 hover:bg-blue-600 text-end">
          Login
        </button>
       

        {/* Display general error if exists */}
        {generalError && <p className="text-red-600 mt-2">{generalError}</p>}
      </form>

      
    </div>
  );
}

export default Login;
