
// import React from 'react';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Main from './layouts/Main';
// import Index from './pages/home/Index.jsx';
// import Login from './pages/Auth/Login.jsx';
// import NotFound from './pages/NotFound.jsx';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import Shop from './pages/shop/Shop.jsx';
// import AboutUs from './pages/about/AboutUs.jsx';
// import ContactUs from './pages/contact/ContactUs.jsx';
// import CheckOut from './pages/check-out/CheckOut.jsx';
// import ViewCart from './pages/view-cart/ViewCart.jsx';
// import OurStore from './pages/our-store/OurStore.jsx';
// import Faq from './pages/faq/Faq.jsx';
// import Compare from './pages/compare/Compare.jsx';
// import Wishlist from './pages/wishlist/Wishlist.jsx';
// import DeliveryAndReturns from './pages/DeliveryAndReturns.jsx';
// import TermsAndCondition from './pages/TermsAndCondition.jsx';
// import PrivacyAndPolicy from './pages/PrivacyAndPolicy.jsx';
// import Register from './pages/Auth/Register.jsx';
// import Account from './pages/account/Account.jsx';
// import Orders from './pages/account/Orders.jsx';
// import OffCanvasComponent from './pages/OffCanvasComponent.jsx';
// import Address from './pages/account/Address.jsx';

// import ForgetPassword from './pages/auth/ForgetPassword.jsx';
// import Products from './pages/Products.jsx';
// // import ProductDetials from './pages/ProductDetials.jsx';
// import ProductDetails from './pages/product-details/ProductDetials.jsx';
// import SkeletonLoader from './pages/shop/mini-component/SkeletonLoader.jsx';
// import Dashboard from './pages/dashboard/Dashboard.jsx';
//  import ProductCategory from './pages/product-category/ProductCategory.jsx';


// // Define the router
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Main/>,
//     children: [
//       { path: '/', element: <Index /> },
//       { path: '/login', element: <Login /> },
//       { path: '/forget-password', element: <ForgetPassword /> },
//       { path: '/register', element: <Register /> },
//       { path: '/not-found', element: <NotFound /> },
//       { path: '*', element: <NotFound /> },
//       { path: '/shop', element: < Shop/> },
//       { path: '/account', element: < Account/> },
//       { path: '/about-us', element: < AboutUs/> },
//       { path: '/contact-us', element: < ContactUs/> },
//       { path: '/check-out', element: < CheckOut/> },
//       { path: '/view-cart', element: < ViewCart/> },
//       { path: '/our-store', element: < OurStore/> },
//       { path: '/faq', element: < Faq/> },
//       { path: '/compare', element: < Compare/> },
//       { path: '/wishlist', element: < Wishlist/> },
//       { path: '/orders', element: < Orders/> },
//       { path: '/address', element: < Address/> },
//       { path: '/privacy-policy', element: < PrivacyAndPolicy/> },
//       { path: '/terms-and-condition', element: < TermsAndCondition/> },
//       { path: '/delivery-return', element: < DeliveryAndReturns/> },
//       // { path: '/product-details', element: < ProductDetials/> },
//       { path: '/product/:slug', element: < ProductDetails/> },
//       { path: '/offcanvas', element: < OffCanvasComponent/> },
//       { path: '/products', element: < Products/> },
//       { path: '/dashboard', element: < Dashboard/> },
//       { path: '/product-category', element: < ProductCategory/> },
//       { path: '/s', element: < SkeletonLoader/> },
       
      
    
//     ],

    

    
//   },
 
// ]);

// const queryClient = new QueryClient();

// function App() {
//     return (
//       <QueryClientProvider client={queryClient}>
//             <RouterProvider router={router} />
//        </QueryClientProvider>
        
//     );
// }

// export default App;



// src/App.js
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import DashboardLayout from './layouts/DashboardLayout';
import Index from './pages/home/Index.jsx';
import Login from './pages/Auth/Login.jsx';
import NotFound from './pages/NotFound.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Shop from './pages/shop/Shop.jsx';
import AboutUs from './pages/about/AboutUs.jsx';
import ContactUs from './pages/contact/ContactUs.jsx';
import CheckOut from './pages/check-out/CheckOut.jsx';
import ViewCart from './pages/view-cart/ViewCart.jsx';
import OurStore from './pages/our-store/OurStore.jsx';
import Faq from './pages/faq/Faq.jsx';
import Compare from './pages/compare/Compare.jsx';
import Wishlist from './pages/wishlist/Wishlist.jsx';
import DeliveryAndReturns from './pages/DeliveryAndReturns.jsx';
import TermsAndCondition from './pages/TermsAndCondition.jsx';
import PrivacyAndPolicy from './pages/PrivacyAndPolicy.jsx';
import Register from './pages/Auth/Register.jsx';
import Account from './pages/account/Account.jsx';
import Orders from './pages/account/Orders.jsx';
import OffCanvasComponent from './pages/OffCanvasComponent.jsx';
import Address from './pages/account/Address.jsx';
import ForgetPassword from './pages/auth/ForgetPassword.jsx';
import Products from './pages/Products.jsx';
import ProductDetails from './pages/product/product-details/ProductDetials.jsx';
import SkeletonLoader from './pages/shop/mini-component/SkeletonLoader.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import ProductCategory from './pages/product/product-category/ProductCategory.jsx';
import Brand from './pages/product/Brand.jsx';
import Colour from './pages/product/Colour.jsx';
import Size from './pages/product/Size.jsx';
import Supplier from './pages/product/Supplier.jsx';
import CreateProduct from './pages/product/CreateProduct.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      { path: '/', element: <Index /> },
      { path: '/login', element: <Login /> },
      { path: '/forget-password', element: <ForgetPassword /> },
      { path: '/register', element: <Register /> },
      { path: '/not-found', element: <NotFound /> },
      { path: '*', element: <NotFound /> },
      { path: '/shop', element: <Shop /> },
      { path: '/account', element: <Account /> },
      { path: '/about-us', element: <AboutUs /> },
      { path: '/contact-us', element: <ContactUs /> },
      { path: '/check-out', element: <CheckOut /> },
      { path: '/view-cart', element: <ViewCart /> },
      { path: '/our-store', element: <OurStore /> },
      { path: '/faq', element: <Faq /> },
      { path: '/compare', element: <Compare /> },
      { path: '/wishlist', element: <Wishlist /> },
      { path: '/orders', element: <Orders /> },
      { path: '/address', element: <Address /> },
      { path: '/privacy-policy', element: <PrivacyAndPolicy /> },
      { path: '/terms-and-condition', element: <TermsAndCondition /> },
      { path: '/delivery-return', element: <DeliveryAndReturns /> },
      { path: '/product/:slug', element: <ProductDetails /> },
      { path: '/offcanvas', element: <OffCanvasComponent /> },
      { path: '/products', element: <Products /> },
      { path: '/s', element: <SkeletonLoader /> },

      // Dashboard Route
      {
        path: '/dashboard',
        element: <DashboardLayout />, // Use DashboardLayout for dashboard-related pages
        children: [
          { index: true, element: <Dashboard /> }, // Default to Dashboard component
          { path: 'product-category', element: <ProductCategory /> }, // Nested under Dashboard
          { path: 'brand', element: <Brand /> }, // Nested under Dashboard
          { path: 'colour', element: <Colour /> }, // Nested under Dashboard
          { path: 'size', element: <Size /> }, // Nested under Dashboard
          { path: 'supplier', element: <Supplier /> }, // Nested under Dashboard
          { path: 'create-product', element: <CreateProduct /> }, // Nested under Dashboard
        ],
      },
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
