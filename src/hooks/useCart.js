





// import { useQuery, useQueryClient } from "@tanstack/react-query";
// import axios from "../axiosInstance";

// const useCart = () => {
//     const queryClient = useQueryClient(); // React Query client
//     const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

//     const fetchCart = async () => {
//         if (isAuthenticated) {
//             const response = await axios.get("/cart");
//             return response.data; // Cart data from the server
//         } else {
//             return JSON.parse(localStorage.getItem("cart")) || [];
//         }
//     };

//     // React Query: Fetch Cart Data
//     const { data: cart = [], isLoading, isError } = useQuery({
//         queryKey: ["cart"], // Query key
//         queryFn: fetchCart, // Fetch function
//         staleTime: 1000 * 60 * 5, // Cache for 5 minutes
//         cacheTime: 1000 * 60 * 10, // Keep cache for 10 minutes even if unused
//         enabled: isAuthenticated, // Fetch only if authenticated
//     });

//     // Function to invalidate the cache
//     const invalidateCart = () => {
//         queryClient.invalidateQueries(["cart"]); // Invalidate cache
//     };

//     return { cart, isLoading, isError, invalidateCart };
// };

// export default useCart;








import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "../axiosInstance";
import { useContext } from "react";
import { AuthContext } from '../context/AuthContext'

const useCart = () => {
    const queryClient = useQueryClient();
    const { isAuthenticated } = useContext(AuthContext); // Use context for authentication state

    const fetchCart = async () => {
        if (isAuthenticated) {
            const response = await axios.get("/cart");
            return response.data; // Cart data from server
        } else {
            return JSON.parse(localStorage.getItem("cart")) || [];
        }
    }; 

    // React Query: Fetch Cart Data
    const { data: cart = [], isLoading, isError } = useQuery({
        queryKey: ["cart"], // Static query key
        queryFn: fetchCart, // Fetch function
        staleTime: 1000 * 60 * 5, // Cache for 5 minutes
        cacheTime: 1000 * 60 * 10, // Keep cache for 10 minutes
        enabled: isAuthenticated, // Only fetch if authenticated
        retry: false, // Disable retries to avoid 429 errors
    });

    // Function to invalidate cache on mutation
    const invalidateCart = () => {
        queryClient.invalidateQueries(["cart"]);
    };

    return { cart, isLoading, isError, invalidateCart };
};

export default useCart;
