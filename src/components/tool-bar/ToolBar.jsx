



// import React, { useEffect, useRef, useState } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { Offcanvas } from "bootstrap";
// import SearchOffCanvas from "../header/SearchOffCanvas";
// import { FiSearch, FiUser, FiHeart, FiShoppingBag } from "react-icons/fi";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { useQuery } from "@tanstack/react-query";
// import axios from "../../axiosInstance";

// function ToolBar() {
//     const searchOffcanvasRef = useRef(null);
//     const navigate = useNavigate();
//     const location = useLocation();
//     const [activeItem, setActiveItem] = useState("shop");

//     // Function to check user authentication
//     const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

//     // Fetch Cart Function
//     const fetchCart = async () => {
//         if (isAuthenticated) {
//             const response = await axios.get("/cart");
//             return response.data; // Cart data from the server
//         } else {
//             // Return cart from localStorage
//             return JSON.parse(localStorage.getItem("cart")) || [];
//         }
//     };

//     // React Query: Fetch Cart Data
//     const { data: cart = [] } = useQuery({
//         queryKey: ["cart", isAuthenticated],
//         queryFn: fetchCart,
//         staleTime: 1000 * 60 * 5, // Cache for 5 minutes
//     });

//     useEffect(() => {
//         // Set active item based on the current route
//         const currentPath = location.pathname;
//         if (currentPath.includes("/shop")) setActiveItem("shop");
//         else if (currentPath.includes("/account")) setActiveItem("account");
//         else if (currentPath.includes("/wishlist")) setActiveItem("wishlist");
//         else if (currentPath.includes("/view-cart")) setActiveItem("cart");
//         else setActiveItem("");
//     }, [location]);

//     const toggleSearchOffcanvas = () => {
//         const bsOffcanvas =
//             Offcanvas.getInstance(searchOffcanvasRef.current) ||
//             new Offcanvas(searchOffcanvasRef.current);
//         bsOffcanvas.toggle();
//     };

//     const closeOffcanvasAndNavigate = (to) => {
//         const bsOffcanvasSearch = Offcanvas.getInstance(searchOffcanvasRef.current);
//         if (bsOffcanvasSearch) bsOffcanvasSearch.hide();
//         navigate(to);
//     };

//     return (
//         <>
//             {/* toolbar-bottom */}
//             <div className="tf-toolbar-bottom type-1150">
//                 <div className={`toolbar-item ${activeItem === "shop" ? "active" : ""}`}>
//                     <Link to="/shop">
//                         <div className="toolbar-icon">
//                             <FiShoppingBag className="text-xl" />
//                         </div>
//                         <div className="toolbar-label">Shop</div>
//                     </Link>
//                 </div>

//                 <div className="toolbar-item">
//                     <a>
//                         <div
//                             onClick={toggleSearchOffcanvas}
//                             aria-controls="offcanvasLeft"
//                             className="toolbar-icon text-lg"
//                         >
//                             <FiSearch className="text-xl" />
//                         </div>
//                         <div className="toolbar-label">Search</div>
//                     </a>
//                 </div>

//                 <div className={`toolbar-item ${activeItem === "account" ? "active" : ""}`}>
//                     <Link to="/account">
//                         <div className="toolbar-icon">
//                             <FiUser className="text-xl" />
//                         </div>
//                         <div className="toolbar-label">Account</div>
//                     </Link>
//                 </div>

//                 <div className={`toolbar-item ${activeItem === "wishlist" ? "active" : ""}`}>
//                     <Link to="/wishlist">
//                         <div className="toolbar-icon">
//                             <FiHeart className="text-xl" />
//                             {/* <div className="toolbar-count">0</div> */}
//                         </div>
//                         <div className="toolbar-label">Wishlist</div>
//                     </Link>
//                 </div>

//                 <div className={`toolbar-item ${activeItem === "cart" ? "active" : ""}`}>
//                     <Link to="/view-cart">


//                     <div className="toolbar-icon">
//                         <AiOutlineShoppingCart className="text-xl" />
                       
//                         {cart.length > 0 && (
//                             <div className="toolbar-count">{cart.length}</div>
//                         )}
//                     </div>

                     
//                         <div className="toolbar-label">Cart</div>
//                     </Link>
//                 </div>
//             </div>

//             {/* Include Search OffCanvas */}
//             <SearchOffCanvas
//                 offcanvasRef={searchOffcanvasRef}
//                 closeOffcanvasAndNavigate={closeOffcanvasAndNavigate}
//             />
//         </>
//     );
// }

// export default ToolBar;



import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Offcanvas } from "bootstrap";
import SearchOffCanvas from "../header/SearchOffCanvas";
import { FiSearch, FiUser, FiHeart, FiShoppingBag } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import useCart from "../../hooks/useCart"; // Import the custom useCart hook

function ToolBar() {
    const searchOffcanvasRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();
    const [activeItem, setActiveItem] = useState("shop");

    const { cart } = useCart(); // Use the custom hook to fetch cart data

    useEffect(() => {
        // Set active item based on the current route
        const currentPath = location.pathname;
        if (currentPath.includes("/shop")) setActiveItem("shop");
        else if (currentPath.includes("/account")) setActiveItem("account");
        else if (currentPath.includes("/wishlist")) setActiveItem("wishlist");
        else if (currentPath.includes("/view-cart")) setActiveItem("cart");
        else setActiveItem("");
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
                        <div
                            onClick={toggleSearchOffcanvas}
                            aria-controls="offcanvasLeft"
                            className="toolbar-icon text-lg"
                        >
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
                             {/* <div className="toolbar-count">0</div> */}
                            
                        </div>
                        <div className="toolbar-label">Wishlist</div>
                    </Link>
                </div>

                <div className={`toolbar-item ${activeItem === "cart" ? "active" : ""}`}>
                    <Link to="/view-cart">
                        <div className="toolbar-icon">
                            <AiOutlineShoppingCart className="text-xl" />
                            {cart.length > 0 && (
                                <div className="toolbar-count">{cart.length}</div>
                            )}
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
