// import React from 'react';
// import { Link } from 'react-router-dom';

// const AccountLayout = ({ children, activePage }) => {
//   return (
//     <>
//       <style jsx>{`
//         @media (min-width: 1149px) {
//           .custom-lg\\:block {
//             display: block;
//           }
//           .custom-lg\\:w-1\\/5 {
//             width: 20%;
//           }
//           .custom-lg\\:w-4\\/5 {
//             width: 80%;
//           }
//           .custom-lg\\:ml-3 {
//             margin-left: 0.75rem;
//           }
//           .custom-lg\\:hidden {
//             display: none;
//           }
//         }
//       `}</style>

//       {/* Main Section */}
//       <section className="flat-spacing-11">
//         <div className="container">
//           <div className="flex">
//             {/* Sidebar Navigation */}
//             <div className="hidden custom-lg:block custom-lg:w-1/5">
//               <ul className="my-account-nav">
//                 <li>
//                 <Link to="/account" className={`my-account-nav-item ${activePage === 'dashboard' ? 'active' : ''}`}>Dashboard</Link>
//                 </li>
//                 <li>
//                   <Link to="/orders" className={`my-account-nav-item ${activePage === 'orders' ? 'active' : ''}`}>Orders</Link>
//                 </li>
//                 <li>
//                   <Link to="/addresses" className={`my-account-nav-item ${activePage === 'addresses' ? 'active' : ''}`}>Addresses</Link>
//                 </li>
//                 <li>
//                   <Link to="/account-details" className={`my-account-nav-item ${activePage === 'details' ? 'active' : ''}`}>Account Details</Link>
//                 </li>
//                 <li>
//                   <Link to="/wishlist" className={`my-account-nav-item ${activePage === 'wishlist' ? 'active' : ''}`}>Wishlist</Link>
//                 </li>
//                 <li>
//                   <Link to="/logout" className="my-account-nav-item">Logout</Link>
//                 </li>
//               </ul>
//             </div>

//             {/* Page Content */}
//             <div className="w-full custom-lg:w-4/5 custom-lg:ml-3">
//               {children}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Sidebar Toggle Button */}
//       <div className="btn-sidebar-style2 custom-lg:hidden">
//         <button data-bs-toggle="offcanvas" data-bs-target="#sidebarmobile" aria-controls="offcanvas">
//           <i className="icon icon-sidebar-2"></i>
//         </button>
//       </div>

//       {/* Off-canvas Sidebar */}
//       <div className="offcanvas offcanvas-start canvas-filter canvas-sidebar custom-lg:hidden" id="sidebarmobile">
//         <div className="canvas-wrapper">
//           <header className="canvas-header">
//             <span className="title p-3">Account</span>
//             <span className="icon-close icon-close-popup" data-bs-dismiss="offcanvas" aria-label="Close"></span>
//           </header>

//           <div className="canvas-body">
//             <ul className="my-account-nav">
//               <li><Link to="/account" className={`my-account-nav-item ${activePage === 'dashboard' ? 'active' : ''}`}>Dashboard</Link></li>
//               <li><Link to="/orders" className={`my-account-nav-item ${activePage === 'orders' ? 'active' : ''}`}>Orders</Link></li>
//               <li><Link to="/addresses" className={`my-account-nav-item ${activePage === 'addresses' ? 'active' : ''}`}>Addresses</Link></li>
//               <li><Link to="/account-details" className={`my-account-nav-item ${activePage === 'details' ? 'active' : ''}`}>Account Details</Link></li>
//               <li><Link to="/wishlist" className={`my-account-nav-item ${activePage === 'wishlist' ? 'active' : ''}`}>Wishlist</Link></li>
//               <li><Link to="/logout" className="my-account-nav-item">Logout</Link></li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AccountLayout;





import React, {  useEffect,useRef } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { Offcanvas } from 'bootstrap';

const AccountLayout = ({ children, activePage }) => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  const navigate = useNavigate();
  const accountOffcanvasRef = useRef(null);

  // Function to toggle the offcanvas
  const toggleAccountOffcanvas = () => {
    const bsOffcanvas = Offcanvas.getInstance(accountOffcanvasRef.current) || new Offcanvas(accountOffcanvasRef.current);
    bsOffcanvas.toggle();
  };

  // Function to hide the offcanvas and navigate to a new route
  const closeOffcanvasAndNavigate = (to) => {
    const bsOffcanvas = Offcanvas.getInstance(accountOffcanvasRef.current);
    if (bsOffcanvas) bsOffcanvas.hide();
    navigate(to);
  };

  return (
    <>
      <style jsx>{`
        @media (min-width: 1149px) {
          .custom-lg\\:block {
            display: block;
          }
          .custom-lg\\:w-1\\/5 {
            width: 20%;
          }
          .custom-lg\\:w-4\\/5 {
            width: 80%;
          }
          .custom-lg\\:ml-3 {
            margin-left: 0.75rem;
          }
          .custom-lg\\:hidden {
            display: none;
          }
        }
      `}</style>

      {/* Main Section */}
      <section className="flat-spacing-11 ">
        <div className="container">
          <div className="flex">
            {/* Sidebar Navigation */}
            <div className="hidden custom-lg:block custom-lg:w-1/5">
              <ul className="my-account-nav">
                <li>
                  <Link to="/account" className={`my-account-nav-item ${activePage === 'dashboard' ? 'active' : ''}`}>Dashboard</Link>
                </li>
                <li>
                  <Link to="/orders" className={`my-account-nav-item ${activePage === 'orders' ? 'active' : ''}`}>Orders</Link>
                </li>
                <li>
                  <Link to="/address" className={`my-account-nav-item ${activePage === 'address' ? 'active' : ''}`}>Address</Link>
                </li>
                {/* <li>
                  <Link to="/account-details" className={`my-account-nav-item ${activePage === 'details' ? 'active' : ''}`}>Account Details</Link>
                </li> */}
                <li>
                  <Link to="/wishlist" className={`my-account-nav-item ${activePage === 'wishlist' ? 'active' : ''}`}>Wishlist</Link>
                </li>
                <li>
                  <Link to="/logout" className="my-account-nav-item">Logout</Link>
                </li>
              </ul>
            </div>

            {/* Page Content */}
            <div className="w-full custom-lg:w-4/5 custom-lg:ml-3">
              {children}
            </div>
          </div>
        </div>
      </section>

      {/* Sidebar Toggle Button */}
      <div className="btn-sidebar-style2 custom-lg:hidden">
        <button onClick={toggleAccountOffcanvas}>
          <i className="icon icon-sidebar-2"></i>
        </button>
      </div>

      {/* Off-canvas Sidebar */}
      <div className="offcanvas offcanvas-start canvas-filter canvas-sidebar custom-lg:hidden" ref={accountOffcanvasRef} id="sidebarmobile">
        <div className="canvas-wrapper">
          <header className="canvas-header">
            <span className="title p-3">Account</span>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </header>

          <div className="canvas-body">
            <ul className="my-account-nav">
              <li>
                <a onClick={() => closeOffcanvasAndNavigate("/account")} className={`my-account-nav-item ${activePage === 'dashboard' ? 'active' : ''}`}>
                  Dashboard
                </a>
              </li>
              <li>
                <a onClick={() => closeOffcanvasAndNavigate("/orders")} className={`my-account-nav-item ${activePage === 'orders' ? 'active' : ''}`}>
                  Orders
                </a>
              </li>
              <li>
                <a onClick={() => closeOffcanvasAndNavigate("/address")} className={`my-account-nav-item ${activePage === 'address' ? 'active' : ''}`}>
                  Address
                </a>
              </li>
              {/* <li>
                <a onClick={() => closeOffcanvasAndNavigate("/account-details")} className={`my-account-nav-item ${activePage === 'details' ? 'active' : ''}`}>
                  Account Details
                </a>
              </li> */}
              <li>
                <a onClick={() => closeOffcanvasAndNavigate("/wishlist")} className={`my-account-nav-item ${activePage === 'wishlist' ? 'active' : ''}`}>
                  Wishlist
                </a>
              </li>
              <li>
                <a onClick={() => closeOffcanvasAndNavigate("/")} className="my-account-nav-item">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountLayout;
