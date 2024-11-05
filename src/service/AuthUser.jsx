// hooks/useAuthUser.js
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../axiosInstance';

const fetchUser = async () => {
    const response = await axiosInstance.get('/user');
    return response.data;  
};

export const AuthUser = () => {
    // Check if the user is authenticated and has a valid token
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    const token = localStorage.getItem('authToken');

    return useQuery({
        queryKey: ['authUser'],
        queryFn: fetchUser,
        enabled: isAuthenticated && !!token, // Only fetch if authenticated and token exists
        staleTime: 60000, // Cache for 1 minute
        retry: 1,         // Retry once on failure
    });
};
