

import axios from 'axios';

const axiosInstance = axios.create({
   //baseURL: 'http://localhost:8000/api', // Use the correct base URL
  baseURL: 'https://backend.chibuikeinnocent.tech/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0',
  },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  async (config) => {
    try {
      const xsrfTokenExists = document.cookie.includes('XSRF-TOKEN');

      // Fetch CSRF token if it doesn't exist
      if (!xsrfTokenExists && !config.url.includes('/sanctum/csrf-cookie')) {
        console.log('Fetching CSRF token...');
     //await axios.get('http://localhost:8000/sanctum/csrf-cookie', {
     await axios.get('https://backend.chibuikeinnocent.tech/sanctum/csrf-cookie', {
          withCredentials: true,
        });
      }

      // Add Authorization header if token exists
      const token = localStorage.getItem('authToken');
      if (token) {
        console.log('Authorization token found, adding to headers');
        config.headers.Authorization = `Bearer ${token}`;
      } else {
        console.log('No Authorization token found');
      } 
    } catch (error) {
      console.error('Error in request interceptor:', error);
      return Promise.reject(error);
    }

    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);



// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      const currentPath = window.location.pathname;
      console.log('Response error status:', error.response.status);
      console.log('Error response data:', error.response.data);

      // Handle 401 Unauthorized
      if (error.response.status === 401) {
        const errorMessage = error.response.data.message;

        // Only redirect if not on login/register pages and if it's not a CSRF token issue
        if (
          errorMessage !== 'Invalid credentials' &&
          currentPath !== '/login' &&
          currentPath !== '/register' &&
          !error.config.url.includes('/sanctum/csrf-cookie')
        ) {
          sessionStorage.setItem('previousPath', currentPath);
          window.location.href = '/';
        }
      } else if (error.response.status === 404) {
        window.location.href = '/not-found';
      }
    } else {
      console.error('Unexpected error:', error);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
