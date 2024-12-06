










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







import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Offcanvas } from 'bootstrap';
import SearchOffCanvas from '../header/SearchOffCanvas';
import { FiSearch, FiUser, FiHeart, FiShoppingBag } from 'react-icons/fi';
import { AiOutlineShoppingCart } from 'react-icons/ai';

function ToolBar() {
    const searchOffcanvasRef = useRef(null);
    const navigate = useNavigate();

    const toggleSearchOffcanvas = () => {
        const bsOffcanvas = Offcanvas.getInstance(searchOffcanvasRef.current) || new Offcanvas(searchOffcanvasRef.current);
        bsOffcanvas.toggle();
    };

    const closeOffcanvasAndNavigate = (to) => {
        const bsOffcanvasSearch = Offcanvas.getInstance(searchOffcanvasRef.current);
        if (bsOffcanvasSearch) bsOffcanvasSearch.hide();
        navigate(to);
    };

    return (
        <>
            {/* gotop */}
            <div className="progress-wrap">
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path
                        d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                        style={{
                            transition: "stroke-dashoffset 10ms linear 0s",
                            strokeDasharray: "307.919, 307.919",
                            strokeDashoffset: 286.138
                        }}
                    ></path>
                </svg>
            </div>

            {/* toolbar-bottom */}
            <div className="tf-toolbar-bottom type-1150">
                <div className="toolbar-item active">
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

                <div className="toolbar-item">
                    <Link to="/account">
                        <div className="toolbar-icon">
                            <FiUser className="text-xl" />
                        </div>
                        <div className="toolbar-label">Account</div>
                    </Link>
                </div>

                <div className="toolbar-item">
                    <Link to="/wishlist">
                        <div className="toolbar-icon">
                            <FiHeart className="text-xl" />
                            <div className="toolbar-count">0</div>
                        </div>
                        <div className="toolbar-label">Wishlist</div>
                    </Link>
                </div>

                <div className="toolbar-item">
                    <a href="#shoppingCart" data-bs-toggle="modal">
                        <div className="toolbar-icon">
                            <AiOutlineShoppingCart className="text-xl" />
                            <div className="toolbar-count">1</div>
                        </div>
                        <div className="toolbar-label">Cart</div>
                    </a>
                </div>
            </div>

            {/* Include Search OffCanvas */}
            <SearchOffCanvas offcanvasRef={searchOffcanvasRef} closeOffcanvasAndNavigate={closeOffcanvasAndNavigate} />
        </>
    );
}

export default ToolBar;
 