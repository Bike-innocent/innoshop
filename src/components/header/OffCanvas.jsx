// import React from 'react'
// import { Link } from 'react-router-dom'

// function OffCanvas() {
//     return (
//         <div>

//             <div class="offcanvas offcanvas-start canvas-mb" id="mobileMenu">
//                 <span class="icon-close icon-close-popup" data-bs-dismiss="offcanvas" aria-label="Close"></span>
//                 <div class="mb-canvas-content">
//                     <div class="mb-body">
//                         <ul class="nav-ul-mb" id="wrapper-menu-navigation">
                          
//                             <li className="nav-mb-item">
//                                 <Link to="/" class="collapsed mb-menu-link current" data-bs-toggle="collapse" aria-expanded="true" aria-controls="dropdown-menu-one">
//                                     Home
//                                 </Link>
//                             </li>
//                             <li className="nav-mb-item">
//                                 <Link to="/shop" class="collapsed mb-menu-link current" data-bs-toggle="collapse" aria-expanded="true" aria-controls="dropdown-menu-one">
//                                     Shop
//                                 </Link>
//                             </li>
//                             <li className="nav-mb-item">
//                                 <Link to="/about-us" class="collapsed mb-menu-link current" data-bs-toggle="collapse" aria-expanded="true" aria-controls="dropdown-menu-one">
//                                     About Us
//                                 </Link>
//                             </li>
//                             <li className="nav-mb-item">
//                                 <Link to="/contact-us" class="collapsed mb-menu-link current" data-bs-toggle="collapse" aria-expanded="true" aria-controls="dropdown-menu-one">
//                                     Contact Us
//                                 </Link>
//                             </li>
//                             <li className="nav-mb-item">
//                                 <Link to="/our-store" class="collapsed mb-menu-link current" data-bs-toggle="collapse" aria-expanded="true" aria-controls="dropdown-menu-one">
//                                     Our Store
//                                 </Link>
//                             </li>
//                             <li className="nav-mb-item">
//                                 <Link to="/faq" class="collapsed mb-menu-link current" data-bs-toggle="collapse" aria-expanded="true" aria-controls="dropdown-menu-one">
//                                     FAQ
//                                 </Link>
//                             </li>


//                         </ul>



//                         <div class="mb-other-content">
//                             <div class="flex group-icon">
//                                 <a href="wishlist.html" class="site-nav-icon"><i class="icon icon-heart"></i>Wishlist</a>
//                                 <a href="home-search.html" class="site-nav-icon"><i class="icon icon-search"></i>Search</a>
//                             </div>
//                             <div class="mb-notice">
//                                 <a href="contact-1.html" class="text-need">Need help ?</a>
//                             </div>
//                             <ul class="mb-info">
//                                 <li>Address: 1234 Fashion Street, Suite 567, <br /> New York, NY 10001</li>
//                                 <li>Email: <b>info@fashionshop.com</b></li>
//                                 <li>Phone: <b>(212) 555-1234</b></li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div class="mb-bottom">
//                         <a href="login.html" class="site-nav-icon"><i class="icon icon-account"></i>Login</a>
//                         <div>
//                             innoshop 2024
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default OffCanvas








import React, { useRef, useEffect } from 'react';
import { , useNavigate } from 'react-router-dom';
import { Offcanvas } from 'bootstrap'; // Import Bootstrap JS API

function OffCanvas() {
  const offcanvasRef = useRef(null); // Reference for the off-canvas element
  const navigate = useNavigate();    // React Router navigation

  useEffect(() => {
    // Initialize the Offcanvas instance on mount
    const offcanvasElement = offcanvasRef.current;
    const bsOffcanvas = new Offcanvas(offcanvasElement);
    return () => {
      bsOffcanvas.dispose();  // Clean up on unmount
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
        <span className="icon-close icon-close-popup" data-bs-dismiss="offcanvas" aria-label="Close"></span>
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
                <a href="wishlist.html" className="site-nav-icon">
                  <i className="icon icon-heart"></i> Wishlist
                </a>
                <a href="home-search.html" className="site-nav-icon">
                  <i className="icon icon-search"></i> Search
                </a>
              </div>
              <div className="mb-notice">
                <a href="contact-1.html" className="text-need">Need help?</a>
              </div>
              <ul className="mb-info">
                <li>Address: 1234 Fashion Street, Suite 567, <br /> New York, NY 10001</li>
                <li>Email: <b>info@fashionshop.com</b></li>
                <li>Phone: <b>(212) 555-1234</b></li>
              </ul>
            </div>
          </div>

          <div className="mb-bottom">
            <a href="login.html" className="site-nav-icon">
              <i className="icon icon-account"></i> Login
            </a>
            <div>innoshop 2024</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OffCanvas;
