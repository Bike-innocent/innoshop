// import React, { createContext, useState, useEffect, useContext } from 'react';
// import { useQuery, useQueryClient } from '@tanstack/react-query';
// import axiosInstance from '../axiosInstance';
// import { AuthContext } from './AuthContext';

// // Create Cart Context
// export const CartContext = createContext();

// // Cart Provider
// export const CartProvider = ({ children }) => {
//   const { user } = useContext(AuthContext); // Get user from AuthContext
//   const queryClient = useQueryClient();
//   const [localCart, setLocalCart] = useState([]);

//   // Fetch cart data if user is authenticated
//   const { data: cart, isLoading } = useQuery({
//     queryKey: ['cart'],
//     queryFn: async () => {
//       if (user) {
//         const response = await axiosInstance.get('/cart'); // Fetch cart for logged-in user
//         return response.data.cart;
//       }
//       return [];
//     },
//     enabled: !!user, // Only fetch if user is authenticated
//     staleTime: 300000, // Cache for 5 minutes
//   });

//   // Fetch cart from localStorage if user is not authenticated
//   useEffect(() => {
//     if (!user) {
//       const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
//       setLocalCart(savedCart);
//     }
//   }, [user]);

//   // Update cart in localStorage for guest users
//   const updateLocalCart = (updatedCart) => {
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//     setLocalCart(updatedCart);
//   };

//   // Add item to cart
//   const addToCart = async (product) => {
//     if (user) {
//       // Add to cart for authenticated user
//       await axiosInstance.post('/cart', { product_id: product.id, quantity: 1 });
//       queryClient.invalidateQueries(['cart']); // Refetch cart data
//     } else {
//       // Add to localStorage for guest user
//       const updatedCart = [...localCart, product];
//       updateLocalCart(updatedCart);
//     }
//   };

//   // Remove item from cart
//   const removeFromCart = async (productId) => {
//     if (user) {
//       // Remove item for authenticated user
//       await axiosInstance.delete(`/cart/${productId}`);
//       queryClient.invalidateQueries(['cart']);
//     } else {
//       // Remove item for guest user
//       const updatedCart = localCart.filter((item) => item.id !== productId);
//       updateLocalCart(updatedCart);
//     }
//   };

 

//   return (
//     <CartContext.Provider
//       value={{
//         cart: user ? cart || [] : localCart, // Provide cart based on authentication
//         addToCart,
//         removeFromCart,
//         isLoading,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Custom hook to use CartContext
// export const useCart = () => useContext(CartContext);



















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
  const [localCart, setLocalCart] = useState([]); // Local cart for guests
  const [cart, setCart] = useState([]); // Unified cart for both users and guests

  // Fetch cart from API if user is authenticated
  const { data: apiCart, isLoading } = useQuery({
    queryKey: ['cart'],
    queryFn: async () => {
      const response = await axiosInstance.get('/cart');
      return response.data || []; 
     
    },
    enabled: !!user, // Only fetch if user is authenticated
    staleTime: 300000, // Cache for 5 minutes
  });
  

  useEffect(() => {
    if (user && apiCart !== undefined) {
        // Wait until apiCart is loaded and then setCart
        setCart(apiCart || []);
    } else {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setLocalCart(savedCart);
        setCart(savedCart);
    }
}, [user, apiCart]); // Trigger updates if user or apiCart changes

  // // Sync API cart or localStorage cart
  // useEffect(() => {
  //   if (user) {
  //     // Set API cart for authenticated users
  //     setCart(apiCart || []);
  //   } else {
  //     // Fallback to localStorage cart for guests
  //     const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
  //     setLocalCart(savedCart);
  //     setCart(savedCart);
  //   }
  // }, [user, apiCart]); // Sync on user or API cart change

  // Update localStorage for guest users
  const updateLocalCart = (updatedCart) => {
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setLocalCart(updatedCart);
    setCart(updatedCart); // Update unified cart
  };

  // Add item to cart
  const addToCart = async (product) => {
    if (user) {
      // Add item to API cart for authenticated user
      await axiosInstance.post('/cart', { product_id: product.id, quantity: 1 });
      queryClient.invalidateQueries(['cart']); // Refetch API cart
    } else {
      // Add item to localStorage for guest user
      const updatedCart = [...localCart, { ...product, quantity: 1 }];
      updateLocalCart(updatedCart);
    }
  };

  // Remove item from cart
  const removeFromCart = async (productId) => {
    if (user) {
      // Remove item from API cart for authenticated user
      await axiosInstance.delete(`/cart/${productId}`);
      queryClient.invalidateQueries(['cart']);
    } else {
      // Remove item from localStorage for guest user
      const updatedCart = localCart.filter((item) => item.id !== productId);
      updateLocalCart(updatedCart);
    }
  };

  // Update item quantity
  const updateQuantity = async (productId, action) => {
    if (user) {
      // Update quantity in API for authenticated user
      await axiosInstance.patch(`/cart/${productId}`, {
        action: action === 'increment' ? 'increase' : 'decrease',
      });
      queryClient.invalidateQueries(['cart']);
    } else {
      // Update quantity in localStorage for guest user
      const updatedCart = localCart.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity:
                action === 'increment'
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item
      );
      updateLocalCart(updatedCart);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        isLoading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use CartContext
export const useCart = () => useContext(CartContext);
