import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axiosInstance from '../../../axiosInstance';
import Arrow from './Arrow';

function AuthNav({toggleOffCanvas}) {
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Function to fetch user info based on token
    const fetchUser = async () => {
        try {
            const response = await axiosInstance.get('/user'); // Token is handled by axiosInstance
            const user = response.data;

            // Check if user has admin role
            const adminRole = user.roles.some(role => role.name === 'admin');
            setIsAdmin(adminRole);
        } catch (error) {
            console.error('Error fetching user:', error);
            setIsAdmin(false); // Assume not admin if there's an error
        } finally {
            setLoading(false); // Set loading to false after fetch completes
        }
    };

    // Trigger fetching user data when token is available or changes
    useEffect(() => {
        const authToken = localStorage.getItem('authToken'); // Check if token is available

        if (authToken) {
            fetchUser(); // Fetch user details if token is found
        } else {
            setLoading(false); // No token, no need to load user data
        }

        // Listen for changes in localStorage (token updates)
        const handleStorageChange = () => {
            const newToken = localStorage.getItem('authToken');
            if (newToken) {
                fetchUser(); // Fetch user immediately if token is set
            } else {
                setIsAdmin(false); // If token is removed, hide admin UI
            }
        };

        window.addEventListener('storage', handleStorageChange); // Add event listener for storage changes

        return () => {
            window.removeEventListener('storage', handleStorageChange); // Cleanup event listener
        };
    }, []);

    // Function to handle logout
    const handleLogout = async () => {
        try {
            await axiosInstance.post('/logout'); // Token is handled by axiosInstance
            console.log('Logout successful');

            // Clear user-related data from localStorage after the request
            localStorage.removeItem('authToken');
            setIsAdmin(false); // Immediately hide the admin UI

            // Redirect the user to the home page or login page
            navigate('/');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    if (loading) {
        return <div className='text-white'>Loading...</div>; // You can replace this with a proper loader
    }

    return (
        <ul>
            {isAdmin && (
                <>
                    <li className="border-b border-border-white py-4 group">
                      
                        <Link
                            to="/create-project"
                            onClick={toggleOffCanvas}
                        
                            className="text-white text-xl font-bold font-Syne leading-none flex flex-wrap items-center justify-between hover:text-orange transition duration-300"
                        >
                           Add Project
                            <Arrow />
                        </Link>
                    </li>
                    <li className="border-b border-border-white py-4 group">
                        
                        <Link
                            to="/create-blog"
                            onClick={toggleOffCanvas}
                        
                            className="text-white text-xl font-bold font-Syne leading-none flex flex-wrap items-center justify-between hover:text-orange transition duration-300"
                        >
                             Add Blog
                            <Arrow />
                        </Link>
                    </li>
                    <li className="border-b border-border-white py-4 group">
                        <button
                            onClick={handleLogout}
                            
                            className="text-white text-xl font-bold font-Syne leading-none flex flex-wrap items-center justify-between hover:text-orange transition duration-300"
                        >
                            Logout

                        </button>
                    </li>
                </>
            )}
        </ul>
    );
}

export default AuthNav;
