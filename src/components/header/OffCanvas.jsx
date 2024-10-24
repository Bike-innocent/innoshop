
import React, { useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Offcanvas } from 'bootstrap';

function OffCanvas() {
  const offcanvasRef = useRef(null);
  const navigate = useNavigate();    

  useEffect(() => {
    // Initialize the Offcanvas instance on mount
    const offcanvasElement = offcanvasRef.current;
    const bsOffcanvas = new Offcanvas(offcanvasElement);
    return () => {
      bsOffcanvas.dispose();  
    };
  }, []);

  // Function to close the off-canvas when a link is clicked and navigate
  const closeOffcanvasAndNavigate = (to) => {
    const offcanvasElement = offcanvasRef.current;
    const bsOffcanvas = Offcanvas.getInstance(offcanvasElement);
    if (bsOffcanvas) {
      bsOffcanvas.hide();  // Hide the off-canvas using Bootstrap's API
      navigate(to);        // Programmatically navigate to the desired route
    }
  };

  return (
    <div>
      {/* Off-canvas */}
      <div className="offcanvas offcanvas-start canvas-mb" id="mobileMenu" ref={offcanvasRef}>
        <div className="flex mt-3 ml-[100px]">
          <span className="icon-close icon-close-popup" data-bs-dismiss="offcanvas" aria-label="Close"></span>
          <span className="text-3xl font-bold">Innoshop</span>
        </div>


        <div className="mb-canvas-content">
          <div className="mb-body">
            <ul className="nav-ul-mb" id="wrapper-menu-navigation">
              <li className="nav-mb-item">
                <a onClick={() => closeOffcanvasAndNavigate("/")} className="collapsed mb-menu-link current" data-bs-dismiss="offcanvas" aria-label="Close">
                  Home
                </a>
              </li>
              <li className="nav-mb-item">
                <a onClick={() => closeOffcanvasAndNavigate("/shop")} className="collapsed mb-menu-link current" data-bs-dismiss="offcanvas" aria-label="Close">
                  Shop
                </a>
              </li>
              <li className="nav-mb-item">
                <a onClick={() => closeOffcanvasAndNavigate("/about-us")} className="collapsed mb-menu-link current" data-bs-dismiss="offcanvas" aria-label="Close">
                  About Us
                </a>
              </li>
              <li className="nav-mb-item">
                <a onClick={() => closeOffcanvasAndNavigate("/contact-us")} className="collapsed mb-menu-link current" data-bs-dismiss="offcanvas" aria-label="Close">
                  Contact Us
                </a>
              </li>
              <li className="nav-mb-item">
                <a onClick={() => closeOffcanvasAndNavigate("/our-store")} className="collapsed mb-menu-link current" data-bs-dismiss="offcanvas" aria-label="Close">
                  Our Store
                </a>
              </li>
              <li className="nav-mb-item">
                <a onClick={() => closeOffcanvasAndNavigate("/faq")} className="collapsed mb-menu-link current" data-bs-dismiss="offcanvas" aria-label="Close">
                  FAQ
                </a>
              </li>
            </ul>

            <div className="mb-other-content">
              <div className="flex group-icon">
                <Link to="/wishlist" className="site-nav-icon">
                  <i className="icon icon-heart"></i> Wishlist
                </Link>
                {/* <a href="home-search.html" className="site-nav-icon">
                  <i className="icon icon-search"></i> Search
                </a> */}
              </div>
              <div className="mb-notice">
                <Link to="/contact-us" className="text-need">Need help?</Link>
              </div>
              <ul className="mb-info">
                <li>Address: 1234 Fashion Street, Suite 567, <br /> New York, NY 10001</li>
                <li>Email: <b>info@fashionshop.com</b></li>
                <li>Phone: <b>(212) 555-1234</b></li>
              </ul>
            </div>
          </div>

          <div className="mb-bottom">
            <Link to="/login" className="site-nav-icon">
              <i className="icon icon-account"></i> Login
            </Link>
            <div>innoshop 2024</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OffCanvas;




