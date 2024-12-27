import React, { createContext, useState, useEffect, useContext } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '../axiosInstance';
import { AuthContext } from './AuthContext';

// Create Cart Context
export const CartContext = createContext();

// Cart Provider
export const CartProvider = ({ children }) => {
  const { user } = useContext(AuthContext); // Get user from AuthContext
  const queryClient = useQueryClient();
  const [localCart, setLocalCart] = useState([]);

  // Fetch cart data if user is authenticated
  const { data: cart, isLoading } = useQuery({
    queryKey: ['cart'],
    queryFn: async () => {
      if (user) {
        const response = await axiosInstance.get('/cart'); // Fetch cart for logged-in user
        return response.data.cart;
      }
      return [];
    },
    enabled: !!user, // Only fetch if user is authenticated
    staleTime: 300000, // Cache for 5 minutes
  });

  // Fetch cart from localStorage if user is not authenticated
  useEffect(() => {
    if (!user) {
      const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
      setLocalCart(savedCart);
    }
  }, [user]);

  // Update cart in localStorage for guest users
  const updateLocalCart = (updatedCart) => {
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setLocalCart(updatedCart);
  };

  // Add item to cart
  const addToCart = async (product) => {
    if (user) {
      // Add to cart for authenticated user
      await axiosInstance.post('/cart', { product_id: product.id, quantity: 1 });
      queryClient.invalidateQueries(['cart']); // Refetch cart data
    } else {
      // Add to localStorage for guest user
      const updatedCart = [...localCart, product];
      updateLocalCart(updatedCart);
    }
  };

  // Remove item from cart
  const removeFromCart = async (productId) => {
    if (user) {
      // Remove item for authenticated user
      await axiosInstance.delete(`/cart/${productId}`);
      queryClient.invalidateQueries(['cart']);
    } else {
      // Remove item for guest user
      const updatedCart = localCart.filter((item) => item.id !== productId);
      updateLocalCart(updatedCart);
    }
  };

  // Clear entire cart
  const clearCart = async () => {
    if (user) {
      await axiosInstance.delete('/cart/clear'); // Clear cart API for logged-in user
      queryClient.invalidateQueries(['cart']);
    } else {
      updateLocalCart([]); // Clear localStorage cart
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart: user ? cart || [] : localCart, // Provide cart based on authentication
        addToCart,
        removeFromCart,
        clearCart,
        isLoading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use CartContext
export const useCart = () => useContext(CartContext);
