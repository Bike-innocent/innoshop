import React, { useEffect } from 'react';
import { Offcanvas } from 'bootstrap';

function MainOffCanvas({ offcanvasRef, closeOffcanvasAndNavigate }) {
  useEffect(() => {
    const bsOffcanvas = new Offcanvas(offcanvasRef.current);
    return () => bsOffcanvas.dispose();
  }, [offcanvasRef]);

  return (




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
              Shop
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
        </ul>

        {/* Additional Content */}
        <div className="mt-4">
          <div className="flex items-center space-x-4 mb-4">
            <a  onClick={() => closeOffcanvasAndNavigate("/wishlist")} className="site-nav-icon">
              <i className="icon icon-heart"></i> Wishlist
            </a>
          </div>
          <div className="mb-notice mb-4">
            <a onClick={() => closeOffcanvasAndNavigate("/contact-us")} className="text-need">Need help?</a>
          </div>
          <ul className="mb-info space-y-2">
            <li>Address: 1234 Fashion Street, Suite 567, New York, NY 10001</li>
            <li>Email: <b>info@fashionshop.com</b></li>
            <li>Phone: <b>(212) 555-1234</b></li>
          </ul>
        </div>
      </div>

      {/* Fixed Footer Section */}
      <div className="p-4 bg-white border-t shadow-sm border-gray-300 sticky bottom-0">
        <a onClick={() => closeOffcanvasAndNavigate("/login")}  className="site-nav-icon">
          <i className="icon icon-account"></i> Login
        </a>
        <div className="text-sm mt-2">© Innoshop 2024</div>
      </div>
    </div>




    
  );
}

export default MainOffCanvas;
