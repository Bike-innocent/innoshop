




// import React, { createContext, useState, useEffect } from 'react';
// import { useQueryClient } from '@tanstack/react-query';
// import axiosInstance from '../axiosInstance';

// // Create context
// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null); // Local user state
//   const [loading, setLoading] = useState(true); // Loading state
//   const queryClient = useQueryClient(); // React Query client

//   // Fetch authenticated user
//   const fetchUser = async () => {
//     try {
//       const response = await axiosInstance.get('/user');
//       setUser(response.data); // Update user state
//     } catch (error) {
//       logout(); // Logout on error
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   // Automatically fetch user if token exists
//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       fetchUser();
//     } else {
//       setLoading(false); // No token, no loading
//     }
//   }, []);

//   // Login
//   const login = async (data) => {
//     try {
//       const response = await axiosInstance.post('/login', data);
//       localStorage.setItem('token', response.data.access_token); // Save token
//       setUser(response.data.user); // Set user immediately
//       queryClient.invalidateQueries(['user']); // Refetch user in background
//     } catch (error) {
//       throw error.response.data.message;
//     }
//   };

  
  

//   // Register
//   const register = async (data) => {
//     try {
//       const response = await axiosInstance.post('/register', data);
//       localStorage.setItem('token', response.data.access_token); // Save token
//       setUser(response.data.user); // Set user immediately
//       queryClient.invalidateQueries(['user']); // Refetch user in background
//     } catch (error) {
//       throw error.response.data.message;
//     }
//   };

//   // Logout
//   const logout = async () => {
//     try {
//       await axiosInstance.post('/logout'); // Call logout API
//     } catch (error) {
//       console.error('Logout failed:', error);
//     } finally {
//       localStorage.removeItem('token'); // Remove token
//       setUser(null); // Clear user state immediately
//       queryClient.clear(); // Clear all cached data
//     }
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         loading,
//         login,
//         register,
//         logout,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };




import React, { createContext } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '../axiosInstance';

// Create context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const queryClient = useQueryClient(); // React Query client

  // Fetch user API
  const fetchUser = async () => {
    const response = await axiosInstance.get('/user');
    return response.data; // Return user data
  };

  // Use React Query to fetch and cache user data
  const {
    data: user,
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: ['user'], // Cache key
    queryFn: fetchUser, // Fetch function
    enabled: !!localStorage.getItem('token'), // Only fetch if token exists
    staleTime: 10 * 60 * 1000, // Cache data for 10 minutes (600,000ms)
    retry: 1, // Retry once if the request fails
    onError: () => logout(), // Logout if fetching fails
  });

  // Login
  const login = async (data) => {
    try {
      const response = await axiosInstance.post('/login', data);
      localStorage.setItem('token', response.data.access_token); // Save token
      queryClient.invalidateQueries(['user']); // Invalidate cache and refetch
    } catch (error) {
      throw error.response.data.message;
    }
  };

  // Register
  const register = async (data) => {
    try {
      const response = await axiosInstance.post('/register', data);
      localStorage.setItem('token', response.data.access_token); // Save token
      queryClient.invalidateQueries(['user']); // Invalidate cache and refetch
    } catch (error) {
      throw error.response.data.message;
    }
  };

  // Logout
  const logout = async () => {
    try {
      await axiosInstance.post('/logout'); // Call logout API
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      localStorage.removeItem('token'); // Remove token
      queryClient.removeQueries(['user']); // Remove user from cache
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
