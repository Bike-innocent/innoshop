// import React from 'react'

// function ProfileOffCanvas() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default ProfileOffCanvas



import React, { useEffect } from 'react';
import { Offcanvas } from 'bootstrap';
import { AuthUser } from '../../service/AuthUser';

function ProfileOffCanvas({ offcanvasRef, closeOffcanvasAndNavigate }) {
  useEffect(() => {
    const bsOffcanvas = new Offcanvas(offcanvasRef.current);
    return () => bsOffcanvas.dispose();
  }, [offcanvasRef]);

  const { data: user, isLoading, isError } = AuthUser();

  return (
    <>








    




<div
className="offcanvas offcanvas-start canvas-mb h-[100vh] flex flex-col"

ref={offcanvasRef}
>
{/* Sticky Header Section with Close Icon */}
<div className="flex justify-between items-center shadow-sm p-[14px] bg-white sticky top-0 z-10 border-b border-gray-200">
  <span className="text-3xl ml-[90px] font-bold">Innoshop</span>
  <span
    className="icon-close icon-close-popup text-xl"
    data-bs-dismiss="offcanvas"
    aria-label="Close"
  >

  </span>
</div>

{/* Scrollable Middle Content */}
<div className="flex-1 overflow-y-auto p-3 bg-white">

  
  <ul className="nav-ul-mb space-y-1" id="wrapper-menu-navigation">
    <li className="nav-mb-item">
      <a
        onClick={() => closeOffcanvasAndNavigate("/")}
        className="collapsed mb-menu-link current"
      >
        Home
      </a>
    </li>
    <li className="nav-mb-item">
      <a
        onClick={() => closeOffcanvasAndNavigate("/shop")}
        className="collapsed mb-menu-link"
      >
        orders
      </a>
    </li>
    <li className="nav-mb-item">
      <a
        onClick={() => closeOffcanvasAndNavigate("/about-us")}
        className="collapsed mb-menu-link"
      >
        About Us
      </a>
    </li>
    <li className="nav-mb-item">
      <a
        onClick={() => closeOffcanvasAndNavigate("/contact-us")}
        className="collapsed mb-menu-link"
      >
        Contact Us
      </a>
    </li>
    <li className="nav-mb-item">
      <a
        onClick={() => closeOffcanvasAndNavigate("/our-store")}
        className="collapsed mb-menu-link"
      >
        Our Store
      </a>
    </li>
    <li className="nav-mb-item">
      <a
        onClick={() => closeOffcanvasAndNavigate("/faq")}
        className="collapsed mb-menu-link"
      >
        FAQ
      </a>
    </li>

    {/* Conditionally render for admin */}
    {user?.roles?.some(role => role.name === 'admin') && (
      // <li><Link to="/dashboard" className="item-link">Dashboard</Link></li>
      <li className="nav-mb-item">
        <a
          onClick={() => closeOffcanvasAndNavigate("/dashboard")}
          className="collapsed mb-menu-link"
        >
          Dashboard
        </a>
      </li>
    )}
  </ul>

 
</div>

{/* Fixed Footer Section */}
<div className="p-4 bg-white border-t shadow-sm border-gray-300 sticky bottom-0">
  <a onClick={() => closeOffcanvasAndNavigate("/login")} className="site-nav-icon">
    <i className="icon icon-account"></i> Login
  </a>
  <div className="text-sm mt-2">© Innoshop store <a href="https://chibuikeinnocent.tech" className='text-blue-500'>chibuike innocent</a> 2024</div>
</div>
</div>








        


















































    </>


  );
}

export default ProfileOffCanvas;


















    //   {/* Sidebar Toggle Button */}
    //   {/* <div className="btn-sidebar-style2 custom-lg:hidden">
    //   <button onClick={toggleAccountOffcanvas}>
    //     <i className="icon icon-sidebar-2"></i>
    //   </button>
    // </div> */}

    // {/* Off-canvas Sidebar */}
    // <div className="offcanvas offcanvas-start canvas-filter canvas-sidebar custom-lg:hidden"  ref={offcanvasRef} id="sidebarmobile">
    //   <div className="canvas-wrapper">
    //     <header className="canvas-header">
    //       <span className="title p-3">Account</span>
    //       <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    //     </header>

    //     <div className="canvas-body">
    //       <ul className="my-account-nav">
    //         <li>
    //           <a onClick={() => closeOffcanvasAndNavigate("/account")} className="my-account-nav-item">
    //             Dashboard
    //           </a>
    //         </li>
    //         <li>
    //           <a onClick={() => closeOffcanvasAndNavigate("/orders")} className="my-account-nav-item">
    //             Orders
    //           </a>
    //         </li>
    //         <li>
    //           <a onClick={() => closeOffcanvasAndNavigate("/address")} className="my-account-nav-item">
    //             Address
    //           </a>
    //         </li>
    //         {/* <li>
    //           <a onClick={() => closeOffcanvasAndNavigate("/account-details")} className={`my-account-nav-item ${activePage === 'details' ? 'active' : ''}`}>
    //             Account Details
    //           </a>
    //         </li> */}
    //         <li>
    //           <a onClick={() => closeOffcanvasAndNavigate("/wishlist")} className="my-account-nav-item">
    //             Wishlist
    //           </a>
    //         </li>
    //         {/* <li>
    //           <button onClick={handleCombinedClick}  className="my-account-nav-item">
    //             Logout
    //           </button>

    //         </li> */}
    //       </ul>
    //     </div>
    //   </div>
    // </div>
























// <div
// className="offcanvas offcanvas-start canvas-mb h-[100vh] flex flex-col"

// ref={offcanvasRef}
// >
// {/* Sticky Header Section with Close Icon */}
// <div className="flex justify-between items-center shadow-sm p-[14px] bg-white sticky top-0 z-10 border-b border-gray-200">
//   <span className="text-3xl ml-[90px] font-bold">Innoshop</span>
//   <span
//     className="icon-close icon-close-popup text-xl"
//     data-bs-dismiss="offcanvas"
//     aria-label="Close"
//   >

//   </span>
// </div>

// {/* Scrollable Middle Content */}
// <div className="flex-1 overflow-y-auto p-3 bg-white">

  
//   <ul className="nav-ul-mb space-y-1" id="wrapper-menu-navigation">
//     <li className="nav-mb-item">
//       <a
//         onClick={() => closeOffcanvasAndNavigate("/")}
//         className="collapsed mb-menu-link current"
//       >
//         Home
//       </a>
//     </li>
//     <li className="nav-mb-item">
//       <a
//         onClick={() => closeOffcanvasAndNavigate("/shop")}
//         className="collapsed mb-menu-link"
//       >
//         orders
//       </a>
//     </li>
//     <li className="nav-mb-item">
//       <a
//         onClick={() => closeOffcanvasAndNavigate("/about-us")}
//         className="collapsed mb-menu-link"
//       >
//         About Us
//       </a>
//     </li>
//     <li className="nav-mb-item">
//       <a
//         onClick={() => closeOffcanvasAndNavigate("/contact-us")}
//         className="collapsed mb-menu-link"
//       >
//         Contact Us
//       </a>
//     </li>
//     <li className="nav-mb-item">
//       <a
//         onClick={() => closeOffcanvasAndNavigate("/our-store")}
//         className="collapsed mb-menu-link"
//       >
//         Our Store
//       </a>
//     </li>
//     <li className="nav-mb-item">
//       <a
//         onClick={() => closeOffcanvasAndNavigate("/faq")}
//         className="collapsed mb-menu-link"
//       >
//         FAQ
//       </a>
//     </li>

//     {/* Conditionally render for admin */}
//     {user?.roles?.some(role => role.name === 'admin') && (
//       // <li><Link to="/dashboard" className="item-link">Dashboard</Link></li>
//       <li className="nav-mb-item">
//         <a
//           onClick={() => closeOffcanvasAndNavigate("/dashboard")}
//           className="collapsed mb-menu-link"
//         >
//           Dashboard
//         </a>
//       </li>
//     )}
//   </ul>

//   {/* Additional Content */}
//   <div className="mt-4">
//     <div className="flex items-center space-x-4 mb-4">
//       <a onClick={() => closeOffcanvasAndNavigate("/wishlist")} className="site-nav-icon">
//         <i className="icon icon-heart"></i> Wishlist
//       </a>
//     </div>
//     <div className="mb-notice mb-4">
//       <a onClick={() => closeOffcanvasAndNavigate("/contact-us")} className="text-need">Need help?</a>
//     </div>
//     <ul className="mb-info space-y-2">
//       <li>Address: 1234 Fashion Street, Suite 567, New York, NY 10001</li>
//       <li>Email: <b>info@example.com</b></li>
//       <li>Phone: <b>(+234)808 887 9523 </b></li>
//     </ul>
//   </div>
// </div>

// {/* Fixed Footer Section */}
// <div className="p-4 bg-white border-t shadow-sm border-gray-300 sticky bottom-0">
//   <a onClick={() => closeOffcanvasAndNavigate("/login")} className="site-nav-icon">
//     <i className="icon icon-account"></i> Login
//   </a>
//   <div className="text-sm mt-2">© Innoshop store <a href="https://chibuikeinnocent.tech" className='text-blue-500'>chibuike innocent</a> 2024</div>
// </div>
// </div>

