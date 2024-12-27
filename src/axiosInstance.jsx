
// import axios from 'axios';

// const axiosInstance = axios.create({
//   baseURL: 'http://localhost:8000/api',
//   //baseURL: 'https://api.chibuikeinnocent.tech/api',
//   withCredentials: true,
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json',
//     'Cache-Control': 'no-cache, no-store, must-revalidate',
//     'Pragma': 'no-cache',
//     'Expires': '0',
//   },
// });



// // Request Interceptor
// axiosInstance.interceptors.request.use(
//   async (config) => {
//     try {
//       const xsrfTokenExists = document.cookie.includes('XSRF-TOKEN');

//       // Fetch CSRF token if it doesn't exist
//       if (!xsrfTokenExists && !config.url.includes('/sanctum/csrf-cookie')) {
//         console.log('Fetching CSRF token...');
//       await axios.get('http://localhost:8000/sanctum/csrf-cookie', {
//         //await axios.get('https://api.chibuikeinnocent.tech/sanctum/csrf-cookie', {
//           withCredentials: true,
//         });
//       }

//       // Add Authorization header if token exists
//       const token = localStorage.getItem('authToken');
//       if (token) {
//         console.log('Authorization token found, adding to headers');
//         config.headers.Authorization = `Bearer ${token}`;
//       } else {
//         console.log('No Authorization token found');
//       }
//     } catch (error) {
//       console.error('Error in request interceptor:', error);
//       return Promise.reject(error);
//     }

//     return config;
//   },
//   (error) => {
//     console.error('Request error:', error);
//     return Promise.reject(error);
//   }
// );

// // Response Interceptor
// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     const currentPath = window.location.pathname;

//     if (error.response) {
//       console.log('Response error status:', error.response.status);
//       console.log('Error response data:', error.response.data);

//       // Handle 401 Unauthorized
//       if (error.response.status === 401) {
//         const errorMessage = error.response.data.message;

//         // Clear auth data and redirect if not on login/register and not a CSRF issue
//         if (
//           errorMessage !== 'Invalid credentials' &&
//           currentPath !== '/login' &&
//           currentPath !== '/register' &&
//           !error.config.url.includes('/sanctum/csrf-cookie')
//         ) {
//           console.log('401 Unauthorized - clearing auth data and redirecting');
//           // Clear authentication data
//           localStorage.removeItem('authToken');
//           localStorage.removeItem('isAuthenticated');
//           sessionStorage.setItem('previousPath', currentPath);

//           // Redirect to login page
//           window.location.href = '/login';
//         }
//       } else if (error.response.status === 404) {
//         // Redirect to custom 404 page
//         window.location.href = '/not-found';
//       }
//     } else {
//       console.error('Unexpected error:', error);
//     }

//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;
















import axios from 'axios';

// Create Axios instance
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api', // Replace with your Laravel API URL
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// Intercept requests to add the token
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // Retrieve token from local storage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
