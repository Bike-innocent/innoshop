import { useQuery } from "@tanstack/react-query";
import axios from "../axiosInstance";

const useCart = () => {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

    const fetchCart = async () => {
        if (isAuthenticated) {
            const response = await axios.get("/cart");
            return response.data; // Cart data from the server
        } else {
            return JSON.parse(localStorage.getItem("cart")) || [];
        }
    };

    // React Query: Fetch Cart Data
    const { data: cart = [], isLoading, isError } = useQuery({
        queryKey: ["cart", isAuthenticated],
        queryFn: fetchCart,
        staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    });

    return { cart, isLoading, isError };
};

export default useCart;
