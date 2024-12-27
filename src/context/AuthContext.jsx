




// import React, { createContext, useState } from 'react';
// import { useQuery, useQueryClient } from '@tanstack/react-query';
// import axiosInstance from '../axiosInstance';

// // Create context
// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null); // Local user state
//   const queryClient = useQueryClient(); // React Query client

//   // Fetch the authenticated user with React Query
//   const { data, isLoading } = useQuery({
//     queryKey: ['user'], // Query key
//     queryFn: async () => {
//       const response = await axiosInstance.get('/user'); // Fetch user data
//       return response.data; // Return user info
//     },
//     staleTime: 600000, // Cache for 10 minutes
//     retry: 1, // Retry once if it fails
//     onSuccess: (data) => {
//       setUser(data); // Update user state
      
//     },
//     onError: () => logout(), // Auto logout if fetching fails
//   });

  // // Login
  // const login = async (data) => {
  //   try {
  //     const response = await axiosInstance.post('/login', data);
  //     localStorage.setItem('token', response.data.access_token);
     
  //     setUser(response.data.user); // Update local user state
  //     queryClient.invalidateQueries(['user']); // Refetch user data
  //   } catch (error) {
  //     throw error.response.data.message;
  //   }
  // };

//   // Register
//   const register = async (data) => {
//     try {
//       const response = await axiosInstance.post('/register', data);
//       localStorage.setItem('token', response.data.access_token);
    
//       setUser(response.data.user); // Update user
//       queryClient.invalidateQueries(['user']); // Refetch user data
//     } catch (error) {
//       throw error.response.data.message;
//     }
//   };

//   // Logout
//   const logout = async () => {
//     try {
//       await axiosInstance.post('/logout');
//       localStorage.removeItem('token'); // Clear token
    
//       setUser(null); // Clear user state
//       queryClient.removeQueries(['user']); // Clear user cache
//     } catch (error) {
//       console.error('Logout failed:', error);
//     }
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         user: user || data, // Provide user from state or cache
//         login,
//         register,
//         logout,
//         loading: isLoading, // Loading state
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };





import React, { createContext, useState, useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import axiosInstance from '../axiosInstance';

// Create context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Local user state
  const [loading, setLoading] = useState(true); // Loading state
  const queryClient = useQueryClient(); // React Query client

  // Fetch authenticated user
  const fetchUser = async () => {
    try {
      const response = await axiosInstance.get('/user');
      setUser(response.data); // Update user state
    } catch (error) {
      logout(); // Logout on error
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Automatically fetch user if token exists
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchUser();
    } else {
      setLoading(false); // No token, no loading
    }
  }, []);

  // Login
  const login = async (data) => {
    try {
      const response = await axiosInstance.post('/login', data);
      localStorage.setItem('token', response.data.access_token); // Save token
      setUser(response.data.user); // Set user immediately
      queryClient.invalidateQueries(['user']); // Refetch user in background
    } catch (error) {
      throw error.response.data.message;
    }
  };

  
  

  // Register
  const register = async (data) => {
    try {
      const response = await axiosInstance.post('/register', data);
      localStorage.setItem('token', response.data.access_token); // Save token
      setUser(response.data.user); // Set user immediately
      queryClient.invalidateQueries(['user']); // Refetch user in background
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
      setUser(null); // Clear user state immediately
      queryClient.clear(); // Clear all cached data
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
