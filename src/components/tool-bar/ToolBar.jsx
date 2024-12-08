










// import React, { useRef } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Offcanvas } from 'bootstrap';
// import SearchOffCanvas from '../header/SearchOffCanvas';

// function ToolBar() {
//     const searchOffcanvasRef = useRef(null);
//     const navigate = useNavigate();

//     const toggleSearchOffcanvas = () => {
//         const bsOffcanvas = Offcanvas.getInstance(searchOffcanvasRef.current) || new Offcanvas(searchOffcanvasRef.current);
//         bsOffcanvas.toggle();
//     };

//     const closeOffcanvasAndNavigate = (to) => {
//         const bsOffcanvasSearch = Offcanvas.getInstance(searchOffcanvasRef.current);
//         if (bsOffcanvasSearch) bsOffcanvasSearch.hide();
//         navigate(to);
//     };

//     return (
//         <>
//             {/* gotop */}
//             <div className="progress-wrap">
//                 <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
//                     <path
//                         d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
//                         style={{
//                             transition: "stroke-dashoffset 10ms linear 0s",
//                             strokeDasharray: "307.919, 307.919",
//                             strokeDashoffset: 286.138
//                         }}
//                     ></path>
//                 </svg>
//             </div>

//             {/* toolbar-bottom */}
//             <div className="tf-toolbar-bottom type-1150">
//                 <div className="toolbar-item active">
//                     <Link to="/shop">
//                         <div className="toolbar-icon">
//                             <i className="icon-shop"></i>
//                         </div>
//                         <div className="toolbar-label">Shop</div>
//                     </Link>
//                 </div>

//                 <div className="toolbar-item  ">
//                     <a >


//                         <div onClick={toggleSearchOffcanvas} aria-controls="offcanvasLeft" className="toolbar-icon text-lg">
//                             <i className="icon-search"></i>
//                         </div>
//                         <div className="toolbar-label">Search</div>
//                     </a>
//                 </div>

//                 <div className="toolbar-item">
//                     <Link to="/account">
//                         <div className="toolbar-icon">
//                             <i className="icon-account"></i>
//                         </div>
//                         <div className="toolbar-label">Account</div>
//                     </Link>
//                 </div>

//                 <div className="toolbar-item">
//                     <Link to="/wishlist">
//                         <div className="toolbar-icon">
//                             <i className="icon-heart"></i>
//                             <div className="toolbar-count">0</div>
//                         </div>
//                         <div className="toolbar-label">Wishlist</div>
//                     </Link>
//                 </div>

//                 <div className="toolbar-item">
//                     <a href="#shoppingCart" data-bs-toggle="modal">
//                         <div className="toolbar-icon">
//                             <i className="icon-bag"></i>
//                             <div className="toolbar-count">1</div>
//                         </div>
//                         <div className="toolbar-label">Cart</div>
//                     </a>
//                 </div>
//             </div>

//             {/* Include Search OffCanvas */}

//             <SearchOffCanvas offcanvasRef={searchOffcanvasRef} closeOffcanvasAndNavigate={closeOffcanvasAndNavigate} />
//         </>
//     );
// }

// export default ToolBar;








// import React, { useRef } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Offcanvas } from 'bootstrap';
// import SearchOffCanvas from '../header/SearchOffCanvas';
// import { FiSearch } from 'react-icons/fi';
// import { FiUser } from 'react-icons/fi';
// import { FiHeart } from 'react-icons/fi';
// import { AiOutlineShoppingCart } from 'react-icons/ai';

// function ToolBar() {
//     const searchOffcanvasRef = useRef(null);
//     const navigate = useNavigate();

//     const toggleSearchOffcanvas = () => {
//         const bsOffcanvas = Offcanvas.getInstance(searchOffcanvasRef.current) || new Offcanvas(searchOffcanvasRef.current);
//         bsOffcanvas.toggle();
//     };

//     const closeOffcanvasAndNavigate = (to) => {
//         const bsOffcanvasSearch = Offcanvas.getInstance(searchOffcanvasRef.current);
//         if (bsOffcanvasSearch) bsOffcanvasSearch.hide();
//         navigate(to);
//     };

//     return (
//         <>
//             {/* gotop */}
//             <div className="progress-wrap">
//                 <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
//                     <path
//                         d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
//                         style={{
//                             transition: "stroke-dashoffset 10ms linear 0s",
//                             strokeDasharray: "307.919, 307.919",
//                             strokeDashoffset: 286.138
//                         }}
//                     ></path>
//                 </svg>
//             </div>

//             {/* toolbar-bottom */}
//             <div className="tf-toolbar-bottom type-1150">
//                 <div className="toolbar-item active">
//                     <Link to="/shop">
//                         <div className="toolbar-icon">
//                             <FiSearch className="text-xl" />
//                         </div>
//                         <div className="toolbar-label">Shop</div>
//                     </Link>
//                 </div>

//                 <div className="toolbar-item">
//                     <a>
//                         <div onClick={toggleSearchOffcanvas} aria-controls="offcanvasLeft" className="toolbar-icon text-lg">
//                             <FiSearch className="text-xl" />
//                         </div>
//                         <div className="toolbar-label">Search</div>
//                     </a>
//                 </div>

//                 <div className="toolbar-item">
//                     <Link to="/account">
//                         <div className="toolbar-icon">
//                             <FiUser className="text-xl" />
//                         </div>
//                         <div className="toolbar-label">Account</div>
//                     </Link>
//                 </div>

//                 <div className="toolbar-item">
//                     <Link to="/wishlist">
//                         <div className="toolbar-icon">
//                             <FiHeart className="text-xl" />
//                             <div className="toolbar-count">0</div>
//                         </div>
//                         <div className="toolbar-label">Wishlist</div>
//                     </Link>
//                 </div>

//                 <div className="toolbar-item">
//                     <a href="#shoppingCart" data-bs-toggle="modal">
//                         <div className="toolbar-icon">
//                             <AiOutlineShoppingCart className="text-xl" />
//                             <div className="toolbar-count">1</div>
//                         </div>
//                         <div className="toolbar-label">Cart</div>
//                     </a>
//                 </div>
//             </div>

//             {/* Include Search OffCanvas */}
//             <SearchOffCanvas offcanvasRef={searchOffcanvasRef} closeOffcanvasAndNavigate={closeOffcanvasAndNavigate} />
//         </>
//     );
// }

// export default ToolBar;







// import React, { useRef } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Offcanvas } from 'bootstrap';
// import SearchOffCanvas from '../header/SearchOffCanvas';
// import { FiSearch, FiUser, FiHeart, FiShoppingBag } from 'react-icons/fi';
// import { AiOutlineShoppingCart } from 'react-icons/ai';

// function ToolBar() {
//     const searchOffcanvasRef = useRef(null);
//     const navigate = useNavigate();

//     const toggleSearchOffcanvas = () => {
//         const bsOffcanvas = Offcanvas.getInstance(searchOffcanvasRef.current) || new Offcanvas(searchOffcanvasRef.current);
//         bsOffcanvas.toggle();
//     };

//     const closeOffcanvasAndNavigate = (to) => {
//         const bsOffcanvasSearch = Offcanvas.getInstance(searchOffcanvasRef.current);
//         if (bsOffcanvasSearch) bsOffcanvasSearch.hide();
//         navigate(to);
//     };

//     return (
//         <>
//             {/* gotop */}
//             <div className="progress-wrap">
//                 <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
//                     <path
//                         d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
//                         style={{
//                             transition: "stroke-dashoffset 10ms linear 0s",
//                             strokeDasharray: "307.919, 307.919",
//                             strokeDashoffset: 286.138
//                         }}
//                     ></path>
//                 </svg>
//             </div>

//             {/* toolbar-bottom */}
//             <div className="tf-toolbar-bottom type-1150">
//                 <div className="toolbar-item active">
//                     <Link to="/shop">
//                         <div className="toolbar-icon">
//                             <FiShoppingBag className="text-xl" />
//                         </div>
//                         <div className="toolbar-label">Shop</div>
//                     </Link>
//                 </div>

// <div className="toolbar-item">
//     <a>
//         <div onClick={toggleSearchOffcanvas} aria-controls="offcanvasLeft" className="toolbar-icon text-lg">
//             <FiSearch className="text-xl" />
//         </div>
//         <div className="toolbar-label">Search</div>
//     </a>
// </div>

//                 <div className="toolbar-item">
//                     <Link to="/account">
//                         <div className="toolbar-icon">
//                             <FiUser className="text-xl" />
//                         </div>
//                         <div className="toolbar-label">Account</div>
//                     </Link>
//                 </div>

//                 <div className="toolbar-item">
//                     <Link to="/wishlist">
//                         <div className="toolbar-icon">
//                             <FiHeart className="text-xl" />
//                             <div className="toolbar-count">0</div>
//                         </div>
//                         <div className="toolbar-label">Wishlist</div>
//                     </Link>
//                 </div>

//                 <div className="toolbar-item">
//                     <Link to="/view-cart">
//                         <div className="toolbar-icon">
//                             <AiOutlineShoppingCart className="text-xl" />
//                             <div className="toolbar-count">1</div>
//                         </div>
//                         <div className="toolbar-label">Cart</div>
//                     </Link>
//                 </div>
//             </div>

//             {/* Include Search OffCanvas */}
//             <SearchOffCanvas offcanvasRef={searchOffcanvasRef} closeOffcanvasAndNavigate={closeOffcanvasAndNavigate} />
//         </>
//     );
// }

// export default ToolBar;










import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Offcanvas } from "bootstrap";
import SearchOffCanvas from "../header/SearchOffCanvas";
import { FiSearch, FiUser, FiHeart, FiShoppingBag } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";

function ToolBar() {
    const searchOffcanvasRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation(); // To get the current path
    const [cartCount, setCartCount] = useState(0);
    const [activeItem, setActiveItem] = useState("shop"); // Default active item

    // Function to get cart count
    const getCartCount = () => {
        const count = localStorage.getItem("cartCount") || 0;
        setCartCount(parseInt(count, 10));
    };

    useEffect(() => {
        getCartCount(); // Initialize cart count on load

        // Listen for cart updates
        window.addEventListener("cartUpdated", getCartCount);

        return () => {
            window.removeEventListener("cartUpdated", getCartCount);
        };
    }, []);

    useEffect(() => {
        // Set active item based on the current route
        const currentPath = location.pathname;
        if (currentPath.includes("/shop")) setActiveItem("shop");
        else if (currentPath.includes("/account")) setActiveItem("account");
        else if (currentPath.includes("/wishlist")) setActiveItem("wishlist");
        else if (currentPath.includes("/view-cart")) setActiveItem("cart");
        else setActiveItem(""); // Default case
    }, [location]);

    const toggleSearchOffcanvas = () => {
        const bsOffcanvas =
            Offcanvas.getInstance(searchOffcanvasRef.current) ||
            new Offcanvas(searchOffcanvasRef.current);
        bsOffcanvas.toggle();
    };

    const closeOffcanvasAndNavigate = (to) => {
        const bsOffcanvasSearch = Offcanvas.getInstance(searchOffcanvasRef.current);
        if (bsOffcanvasSearch) bsOffcanvasSearch.hide();
        navigate(to);
    };

    return (
        <>
            {/* toolbar-bottom */}
            <div className="tf-toolbar-bottom type-1150">
                <div className={`toolbar-item ${activeItem === "shop" ? "active" : ""}`}>
                    <Link to="/shop">
                        <div className="toolbar-icon">
                            <FiShoppingBag className="text-xl" />
                        </div>
                        <div className="toolbar-label">Shop</div>
                    </Link>
                </div>

                <div className="toolbar-item">
                    <a>
                        <div onClick={toggleSearchOffcanvas} aria-controls="offcanvasLeft" className="toolbar-icon text-lg">
                            <FiSearch className="text-xl" />
                        </div>
                        <div className="toolbar-label">Search</div>
                    </a>
                </div>



                <div className={`toolbar-item ${activeItem === "account" ? "active" : ""}`}>
                    <Link to="/account">
                        <div className="toolbar-icon">
                            <FiUser className="text-xl" />
                        </div>
                        <div className="toolbar-label">Account</div>
                    </Link>
                </div>

                <div className={`toolbar-item ${activeItem === "wishlist" ? "active" : ""}`}>
                    <Link to="/wishlist">
                        <div className="toolbar-icon">
                            <FiHeart className="text-xl" />
                            <div className="toolbar-count">0</div>
                        </div>
                        <div className="toolbar-label">Wishlist</div>
                    </Link>
                </div>

                <div className={`toolbar-item ${activeItem === "cart" ? "active" : ""}`}>
                    <Link to="/view-cart">
                        <div className="toolbar-icon">
                            <AiOutlineShoppingCart className="text-xl" />
                            <div className="toolbar-count">{cartCount}</div> {/* Dynamic Cart Count */}
                        </div>
                        <div className="toolbar-label">Cart</div>
                    </Link>
                </div>
            </div>

            {/* Include Search OffCanvas */}
            <SearchOffCanvas
                offcanvasRef={searchOffcanvasRef}
                closeOffcanvasAndNavigate={closeOffcanvasAndNavigate}
            />
        </>
    );
}

export default ToolBar;
