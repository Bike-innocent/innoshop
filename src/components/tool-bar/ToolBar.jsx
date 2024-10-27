
// import React from 'react'
// import { Link } from 'react-router-dom';
// function ToolBar() {
//     return (
//         <>
//             {/* <!-- gotop --> */}
//             <div class="progress-wrap">
//                 <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
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
//             {/* <!-- /gotop --> */}

//             {/* <!-- toolbar-bottom --> */}
//             <div class="tf-toolbar-bottom type-1150">
//                 <div class="toolbar-item active">
//                     <a href="#toolbarShopmb" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft">
//                         <div class="toolbar-icon">
//                             <i class="icon-shop"></i>
//                         </div>
//                         <div class="toolbar-label">Shop</div>
//                     </a>
//                 </div>

//                 <div class="toolbar-item">
//                     <a href="#canvasSearch" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft">
//                         <div class="toolbar-icon">
//                             <i class="icon-search"></i>
//                         </div>
//                         <div class="toolbar-label">Search</div>
//                     </a>
//                 </div>
//                 <div class="toolbar-item">
//                     <a href="#login" data-bs-toggle="modal">
//                         <div class="toolbar-icon">
//                             <i class="icon-account"></i>
//                         </div>
//                         <div class="toolbar-label">Account</div>
//                     </a>
//                 </div>
//                 <div class="toolbar-item">
//                     <Link to="/wishlist">
//                         <div class="toolbar-icon">
//                             <i class="icon-heart"></i>
//                             <div class="toolbar-count">0</div>
//                         </div>
//                         <div class="toolbar-label">Wishlist</div>
//                     </Link>
//                 </div>
//                 <div class="toolbar-item">
//                     <a href="#shoppingCart" data-bs-toggle="modal">
//                         <div class="toolbar-icon">
//                             <i class="icon-bag"></i>
//                             <div class="toolbar-count">1</div>
//                         </div>
//                         <div class="toolbar-label">Cart</div>
//                     </a>
//                 </div>
//             </div>
            

//         </>
//     )
// }

// export default ToolBar












import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Offcanvas } from 'bootstrap';
import SearchOffCanvas from '../header/SearchOffCanvas';

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
                            <i className="icon-shop"></i>
                        </div>
                        <div className="toolbar-label">Shop</div>
                        </Link>
                </div>

                <div className="toolbar-item  ">
                    <a >

                  
                    <div onClick={toggleSearchOffcanvas} aria-controls="offcanvasLeft" className="toolbar-icon text-lg">
                        <i className="icon-search"></i>
                    </div>
                    <div className="toolbar-label">Search</div>
                    </a>
                </div>
                
                <div className="toolbar-item">
                    <a href="#login" data-bs-toggle="modal">
                        <div className="toolbar-icon">
                            <i className="icon-account"></i>
                        </div>
                        <div className="toolbar-label">Account</div>
                    </a>
                </div>
                
                <div className="toolbar-item">
                    <Link to="/wishlist">
                        <div className="toolbar-icon">
                            <i className="icon-heart"></i>
                            <div className="toolbar-count">0</div>
                        </div>
                        <div className="toolbar-label">Wishlist</div>
                    </Link>
                </div>
                
                <div className="toolbar-item">
                    <a href="#shoppingCart" data-bs-toggle="modal">
                        <div className="toolbar-icon">
                            <i className="icon-bag"></i>
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
