





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
import ProductList from './pages/product/ProductList.jsx';
import EditProduct from './pages/product/EditProduct.jsx';
import CustomerOrders from './pages/product/order/CustomerOrders.jsx';
import AllUser from './pages/all-user/AllUser.jsx';
import UserAddress from './pages/all-user/UserAddress.jsx';
import AccountLayout from './layouts/AccountLayout.jsx';
import RequireAuth from './context/RequireAuth.jsx';

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
     
      { path: '/about-us', element: <AboutUs /> },
      { path: '/contact-us', element: <ContactUs /> },
      { path: '/check-out', element: <RequireAuth> <CheckOut /> </RequireAuth>},
      { path: '/view-cart', element: <ViewCart /> },
      { path: '/our-store', element: <OurStore /> },
      { path: '/faq', element: <Faq /> },
      { path: '/compare', element: <Compare /> },
      { path: '/wishlist', element: <Wishlist /> },
    
      { path: '/privacy-policy', element: <PrivacyAndPolicy /> },
      { path: '/terms-and-condition', element: <TermsAndCondition /> },
      { path: '/delivery-return', element: <DeliveryAndReturns /> },
      { path: '/product/:slug', element: <ProductDetails /> },
      { path: '/offcanvas', element: <OffCanvasComponent /> },
      { path: '/products', element: <Products /> },
      { path: '/aaayreyy', element: <SkeletonLoader /> },

      // Dashboard Route
      {
        path: '/dashboard',
        element: <DashboardLayout />, // Use DashboardLayout for dashboard-related pages
        children: [
          { index: true, element: <Dashboard /> }, // Default to Dashboard component
          { path: 'product-category', element: <ProductCategory /> }, 
          { path: 'brand', element: <Brand /> }, 
          { path: 'customer-orders', element: <CustomerOrders/> }, 
          { path: 'colour', element: <Colour /> }, 
          { path: 'size', element: <Size /> }, 
          { path: 'supplier', element: <Supplier /> }, 
          { path: 'create-product', element: <CreateProduct /> }, 
          { path: 'product-list', element: <ProductList/> }, 
          { path: 'edit-product/:slug', element: <EditProduct/> }, 
          { path: 'all-users', element: <AllUser/> }, 
          { path: 'user-addresses', element: <UserAddress/> }, 
       
        ],
      },

    ],
  },



  {
    path: '/account',
    element: 
     <RequireAuth>
      <AccountLayout />
     </RequireAuth>,
    
    children: [

      { path: '', element: <Account /> },
      { path: 'orders', element: <Orders /> },
      { path: 'address', element: <Address /> },

    ],
  },




]);

const queryClient = new QueryClient();

function App() {
  return (
    <>

    
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      
    </QueryClientProvider>
    </>
   
    
  );
}

export default App;
































// // src/App.js
// import React from 'react';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { AuthProvider } from 'react-auth-kit';
// // import RequireAuth from '@auth-kit/react-router/RequireAuth';
// import { RequireAuth } from '@auth-kit/react-router';


// // Layouts
// import Main from './layouts/Main';
// import DashboardLayout from './layouts/DashboardLayout';
// import AccountLayout from './layouts/AccountLayout';

// // Pages
// import Index from './pages/home/Index.jsx';
// import Login from './pages/Auth/Login.jsx';
// import Register from './pages/Auth/Register.jsx';
// import ForgetPassword from './pages/auth/ForgetPassword.jsx';
// import NotFound from './pages/NotFound.jsx';
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
// import Products from './pages/Products.jsx';
// import ProductDetails from './pages/product/product-details/ProductDetials.jsx';
// import SkeletonLoader from './pages/shop/mini-component/SkeletonLoader.jsx';
// import OffCanvasComponent from './pages/OffCanvasComponent.jsx';

// // Account Pages
// import Account from './pages/account/Account.jsx';
// import Orders from './pages/account/Orders.jsx';
// import Address from './pages/account/Address.jsx';

// // Dashboard Pages
// import Dashboard from './pages/dashboard/Dashboard.jsx';
// import ProductCategory from './pages/product/product-category/ProductCategory.jsx';
// import Brand from './pages/product/Brand.jsx';
// import Colour from './pages/product/Colour.jsx';
// import Size from './pages/product/Size.jsx';
// import Supplier from './pages/product/Supplier.jsx';
// import CreateProduct from './pages/product/CreateProduct.jsx';
// import ProductList from './pages/product/ProductList.jsx';
// import EditProduct from './pages/product/EditProduct.jsx';
// import CustomerOrders from './pages/product/order/CustomerOrders.jsx';
// import AllUser from './pages/all-user/AllUser.jsx';
// import UserAddress from './pages/all-user/UserAddress.jsx';

// // Create Routes
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Main />,
//     children: [
//       { path: '/', element: <Index /> },
//       { path: '/login', element: <Login /> },
//       { path: '/register', element: <Register /> },
//       { path: '/forget-password', element: <ForgetPassword /> },
//       { path: '/not-found', element: <NotFound /> },
//       { path: '*', element: <NotFound /> },
//       { path: '/shop', element: <Shop /> },
//       { path: '/about-us', element: <AboutUs /> },
//       { path: '/contact-us', element: <ContactUs /> },
//       { path: '/check-out', element: <CheckOut /> },
//       { path: '/view-cart', element: <ViewCart /> },
//       { path: '/our-store', element: <OurStore /> },
//       { path: '/faq', element: <Faq /> },
//       { path: '/compare', element: <Compare /> },
//       { path: '/wishlist', element: <Wishlist /> },
//       { path: '/privacy-policy', element: <PrivacyAndPolicy /> },
//       { path: '/terms-and-condition', element: <TermsAndCondition /> },
//       { path: '/delivery-return', element: <DeliveryAndReturns /> },
//       { path: '/product/:slug', element: <ProductDetails /> },
//       { path: '/offcanvas', element: <OffCanvasComponent /> },
//       { path: '/products', element: <Products /> },
//       { path: '/s', element: <SkeletonLoader /> },
//     ],
//   },





//   // Dashboard Routes (Protected)
//   {
//     path: '/dashboard',
//     element: (
//       <RequireAuth fallbackPath="/login">
//         <DashboardLayout />
//       </RequireAuth>
//     ),
//     children: [
//       { index: true, element: <Dashboard /> },
//       { path: 'product-category', element: <ProductCategory /> },
//       { path: 'brand', element: <Brand /> },
//       { path: 'colour', element: <Colour /> },
//       { path: 'size', element: <Size /> },
//       { path: 'supplier', element: <Supplier /> },
//       { path: 'create-product', element: <CreateProduct /> },
//       { path: 'product-list', element: <ProductList /> },
//       { path: 'edit-product/:slug', element: <EditProduct /> },
//       { path: 'customer-orders', element: <CustomerOrders /> },
//       { path: 'all-users', element: <AllUser /> },
//       { path: 'user-addresses', element: <UserAddress /> },
//     ],
//   },





//   // Account Routes (Protected)
//   {
//     path: '/account',
//     element: (
//       <RequireAuth fallbackPath="/login">
//         <AccountLayout />
//       </RequireAuth>
//     ),
//     children: [
//       { path: '', element: <Account /> },
//       { path: 'orders', element: <Orders /> },
//       { path: 'address', element: <Address /> },
//     ],
//   },
// ]);

// // Query Client
// const queryClient = new QueryClient();

// // App Component
// function App() {
//   return (
//     <AuthProvider
//       authName={'_auth'}
//       authType={'cookie'}
//       cookieDomain={window.location.hostname}
//       cookieSecure={window.location.protocol === 'https:'}
//     >
//       <QueryClientProvider client={queryClient}>
//         <RouterProvider router={router} />
//       </QueryClientProvider>
//     </AuthProvider>
//   );
// }

// export default App;
