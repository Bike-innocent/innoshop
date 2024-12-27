// import React from 'react'
// import { Link } from 'react-router-dom'

// function CanvasSearch() {
//   return (
//     <>
//       {/* <!-- canvasSearch --> */}
//       <div class="offcanvas offcanvas-end canvas-search" id="canvasSearch">
//         <div class="canvas-wrapper">
//           <header class="tf-search-head">
//             <div class="title fw-5">
//               Search our site
//               <div class="close">
//                 <span class="icon-close icon-close-popup" data-bs-dismiss="offcanvas" aria-label="Close"></span>
//               </div>
//             </div>
//             <div class="tf-search-sticky">
//               <form class="tf-mini-search-frm">
//                 <fieldset class="text">
//                   <input type="text" placeholder="Search" class="" name="text" tabindex="0" value="" aria-required="true" required="" />
//                 </fieldset>
//                 <button class="" type="submit"><i class="icon-search"></i></button>
//               </form>
//             </div>
//           </header>
//           <div class="canvas-body p-0">
//             <div class="tf-search-content">
//               <div class="tf-cart-hide-has-results">
//                 <div class="tf-col-quicklink">
//                   <div class="tf-search-content-title fw-5">Quick link</div>
//                   <ul class="tf-quicklink-list">
//                     <li class="tf-quicklink-item">
//                       <Link to="/shop" class="">Fashion</Link>
//                     </li>
//                     <li class="tf-quicklink-item">
//                       <Link to="/shop" class="">Men</Link>
//                     </li>
//                     <li class="tf-quicklink-item">
//                       <Link to="/shop" class="">Women</Link>
//                     </li>
//                     <li class="tf-quicklink-item">
//                       <Link to="/shop" class="">Accessories</Link>
//                     </li>
//                   </ul>
//                 </div>


//                 <div class="tf-col-content">
//                   <div class="tf-search-content-title fw-5">Need some inspiration?</div>
//                   <div class="tf-search-hidden-inner">
//                     <div class="tf-loop-item">
//                       <div class="image">
//                         <Link to="product-details">
//                           <img src="assets/images/products/white-3.jpg" alt="" />
//                         </Link>
//                       </div>
//                       <div class="content">
//                         <Link to="product-details">Cotton jersey top</Link>
//                         <div class="tf-product-info-price">
//                           <div class="compare-at-price">$10.00</div>
//                           <div class="price-on-sale fw-6">$8.00</div>
//                         </div>
//                       </div>
//                     </div>
//                     <div class="tf-loop-item">
//                       <div class="image">
//                         <Link to="product-details">
//                           <img src="assets/images/products/white-2.jpg" alt="" />
//                         </Link>
//                       </div>
//                       <div class="content">
//                         <Link to="product-details">Mini crossbody bag</Link>
//                         <div class="tf-product-info-price">
//                           <div class="price fw-6">$18.00</div>
//                         </div>
//                       </div>
//                     </div>
//                     <div class="tf-loop-item">
//                       <div class="image">
//                         <Link to="product-details">
//                           <img src="assets/images/products/white-1.jpg" alt="" />
//                         </Link>
//                       </div>
//                       <div class="content">
//                         <Link to="product-details">Oversized Printed T-shirt</Link>
//                         <div class="tf-product-info-price">
//                           <div class="price fw-6">$18.00</div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>


//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//     </>
//   )
// }

// export default CanvasSearch










import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Offcanvas } from 'bootstrap';

function SearchOffCanvas({ offcanvasRef, closeOffcanvasAndNavigate }) {

  useEffect(() => {
    const bsOffcanvas = new Offcanvas(offcanvasRef.current);
    return () => bsOffcanvas.dispose();
  }, [offcanvasRef]);

  return (
    <div
      className="offcanvas offcanvas-end canvas-search h-[100vh] flex flex-col"
      ref={offcanvasRef}

    >
      {/* Sticky Header Section with Close Icon */}
      <header className="flex justify-between items-center p-[13px] sticky top-0 z-10  ">
        <h2 className="text-xl font-semibold -mt-2">Search our site</h2>
        <button
          className="icon-close icon-close-popup  text-xl -mt-2"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >

        </button>
      </header>

      {/* Search Form */}
      <div className="p-4 shadow-sm border-b-2 border-gray-400 mb-3">
        <form className="tf-mini-search-frm flex ">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 p-2 w-full"
            required
          />

        </form>
      </div>

      {/* Quick Links and Inspiration Section */}
      <div className="flex-1 overflow-y-auto p-4 bg-white">
        <div className="tf-quicklink-section mb-4">
          <p className=" mb-2 text-lg">Quick Links</p>

          <ul className="space-y-2">
            {["Fashion", "Men", "Women", "Accessories"].map((item) => (
              <li key={item}>
                <Link
                  to="/shop"
                  onClick={() => closeOffcanvasAndNavigate('/shop')}
                  className=" hover:underline"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>


        <div class="tf-col-content">
          <div class="tf-search-content-title fw-5">Need some inspiration?</div>
          <div class="tf-search-hidden-inner">
            <div class="tf-loop-item">
              <div class="image">
                <Link to="product-details" onClick={() => closeOffcanvasAndNavigate('/product-details')}>
                  <img src="assets/images/products/white-3.jpg" alt="" />
                </Link>
              </div>
              <div class="content">
                <Link to="product-details" onClick={() => closeOffcanvasAndNavigate('/product-details')}>Cotton jersey top</Link>
                <div class="tf-product-info-price">
                  <div class="compare-at-price">$10.00</div>
                  <div class="price-on-sale fw-6">$8.00</div>
                </div>
              </div>
            </div>
            <div class="tf-loop-item">
              <div class="image">
                <Link to="product-details" onClick={() => closeOffcanvasAndNavigate('/product-details')}>
                  <img src="assets/images/products/white-2.jpg" alt="" />
                </Link>
              </div>
              <div class="content">
                <Link to="product-details " onClick={() => closeOffcanvasAndNavigate('/product-details')}>Mini crossbody bag</Link>
                <div class="tf-product-info-price">
                  <div class="price fw-6">$18.00</div>
                </div>
              </div>
            </div>
            <div class="tf-loop-item">
              <div class="image">
                <Link to="product-details" onClick={() => closeOffcanvasAndNavigate('/product-details')}>
                  <img src="assets/images/products/white-1.jpg" alt="" />
                </Link>
              </div>
              <div class="content">
                <Link to="product-details" onClick={() => closeOffcanvasAndNavigate('/product-details')}>Oversized Printed T-shirt</Link>
                <div class="tf-product-info-price">
                  <div class="price fw-6">$18.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        



      </div>


    </div>
  );
}

export default SearchOffCanvas;
