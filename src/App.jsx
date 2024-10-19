
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Index from './pages/home/Index.jsx';
import Login from './pages/Login.jsx';
import NotFound from './pages/NotFound.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Shop from './pages/shop/Shop.jsx';
import ProductDetials from './pages/product-details/ProductDetials.jsx';


// Define the router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    children: [
      { path: '/', element: <Index /> },
   
      { path: '/login', element: <Login /> },
      { path: '/not-found', element: <NotFound /> },
      { path: '*', element: <NotFound /> },
      { path: '/shop', element: < Shop/> },

      { path: '/product-details', element: < ProductDetials/> },
       
      
    
    ],
  },
 
]);

const queryClient = new QueryClient();

function App() {
    return (
      <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            </QueryClientProvider>
        
    );
}

export default App;
