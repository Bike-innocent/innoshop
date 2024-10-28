                                   
// import React, { useState, useEffect } from 'react';

// import Filter from './mini-component/Filter';
// import Pagination from './mini-component/Pagination';
// import CustomSelect from './mini-component/CustomSelect';
// import QuickAdd from './mini-component/QuickAdd';
// import QuickView from './mini-component/QuickView';
// import Compare from './mini-component/Compare';
// import { Link } from 'react-router-dom';


// function Wishlist() {
//     useEffect(() => {
//         window.scrollTo(0, 0); // Scroll to the top of the page
//       }, []);

//     // State to manage the grid layout
//     const [gridLayout, setGridLayout] = useState('w-1/2'); // Default to 2 columns (50% width per item)

//     // Handle resizing of the screen to apply default grid settings based on screen size
//     useEffect(() => {
//         const handleResize = () => {
//             if (window.innerWidth >= 1280) {
//                 setGridLayout('w-1/6'); // Extra-large screens, 6 columns
//             } else if (window.innerWidth >= 1024) {
//                 setGridLayout('w-1/4'); // Large screens, 4 columns
//             } else if (window.innerWidth >= 768) {
//                 setGridLayout('w-1/3'); // Medium screens, 3 columns
//             } else {
//                 setGridLayout('w-1/2'); // Small screens, 2 columns
//             }
//         };

//         // Call the function on component mount and on window resize
//         handleResize();
//         window.addEventListener('resize', handleResize);

//         // Clean up event listener on component unmount
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     return (
//         <>
//             <section className="flat-spacing-2">
//                 <div className="container">
//                     <div className="tf-shop-control grid-3 align-items-center">
//                         <div className="tf-control-filter">
//                             <Link to="#filterShop" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="tf-btn-filter">
//                                 <span className="icon icon-filter"></span>
//                                 <span className="text">Filter</span>
//                             </Link>
//                         </div>

//                         {/* Layout switcher for grid */}
//                         <ul className="tf-control-layout d-flex justify-content-center">
//                             <li className={`tf-view-layout-switch sw-layout-2 ${gridLayout === 'w-1/2' ? 'active' : ''}`} onClick={() => setGridLayout('w-1/2')}>
//                                 <div className="item">
//                                     <span className="icon icon-grid-2"></span>
//                                 </div>
//                             </li>
//                             <li className={`tf-view-layout-switch sw-layout-3 ${gridLayout === 'w-1/3' ? 'active' : ''}`} onClick={() => setGridLayout('w-1/3')}>
//                                 <div className="item">
//                                     <span className="icon icon-grid-3"></span>
//                                 </div>
//                             </li>
//                             <li className={`tf-view-layout-switch sw-layout-4 ${gridLayout === 'w-1/4' ? 'active' : ''}`} onClick={() => setGridLayout('w-1/4')}>
//                                 <div className="item">
//                                     <span className="icon icon-grid-4"></span>
//                                 </div>
//                             </li>
//                             <li className={`tf-view-layout-switch sw-layout-5 ${gridLayout === 'w-1/5' ? 'active' : ''}`} onClick={() => setGridLayout('w-1/5')}>
//                                 <div className="item">
//                                     <span className="icon icon-grid-5"></span>
//                                 </div>
//                             </li>
//                             <li className={`tf-view-layout-switch sw-layout-6 ${gridLayout === 'w-1/6' ? 'active' : ''}`} onClick={() => setGridLayout('w-1/6')}>
//                                 <div className="item">
//                                     <span className="icon icon-grid-6"></span>
//                                 </div>
//                             </li>
//                         </ul>

//                         <CustomSelect />

//                     </div>

//                     {/* Product Grid */}
//                     <div className="grid-layout wrapper-shop">
//                         <div className={`flex flex-wrap `}>
//                             {/* Example Product Card */}
//                             <div className={`card-product ${gridLayout} p-2`}>
//                                 <div className="card-product-wrapper">
//                                     <Link to="/product-details" className="product-img">
//                                         <img className="lazyload img-product" data-src="assets/images/products/orange-1.jpg" src="assets/images/products/orange-1.jpg" alt="image-product" />
//                                         <img className="lazyload img-hover" data-src="assets/images/products/white-1.jpg" src="assets/images/products/white-1.jpg" alt="image-product" />
//                                     </Link>
//                                     <div className="list-product-btn">
//                                         <Link to="#quick_add" data-bs-toggle="modal" className="box-icon bg_white quick-add tf-btn-loading">
//                                             <span className="icon icon-bag"></span>
//                                             <span className="tooltip">Quick Add</span>
//                                         </Link>
//                                         <Link to="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
//                                             <span className="icon icon-heart"></span>
//                                             <span className="tooltip">Add to Wishlist</span>
//                                             <span className="icon icon-delete"></span>
//                                         </Link>
//                                         <Link to="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
//                                             <span className="icon icon-compare"></span>
//                                             <span className="tooltip">Add to Compare</span>
//                                             <span className="icon icon-check"></span>
//                                         </Link>
//                                         <Link to="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
//                                             <span className="icon icon-view"></span>
//                                             <span className="tooltip">Quick View</span>
//                                         </Link>
//                                     </div>
//                                 </div>
//                                 <div className="card-product-info">
//                                     <Link to="/product-details" className="title link">Ribbed Tank Top</Link>
//                                     <span className="price">$16.95</span>
//                                 </div>
//                             </div>








//                             <div className={`card-product ${gridLayout} p-2`}>
//                                 <div className="card-product-wrapper">
//                                     <Link to="/product-details" className="product-img">
//                                         <img className="lazyload img-product" data-src="assets/images/products/dark-blue.jpg" src="assets/images/products/dark-blue.jpg" alt="image-product" />
//                                         <img className="lazyload img-hover" data-src="assets/images/products/white-1.jpg" src="assets/images/products/white-1.jpg" alt="image-product" />
//                                     </Link>
//                                     <div className="list-product-btn">
//                                         <Link to="#quick_add" data-bs-toggle="modal" className="box-icon bg_white quick-add tf-btn-loading">
//                                             <span className="icon icon-bag"></span>
//                                             <span className="tooltip">Quick Add</span>
//                                         </Link>
//                                         <Link to="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
//                                             <span className="icon icon-heart"></span>
//                                             <span className="tooltip">Add to Wishlist</span>
//                                             <span className="icon icon-delete"></span>
//                                         </Link>
//                                         <Link to="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
//                                             <span className="icon icon-compare"></span>
//                                             <span className="tooltip">Add to Compare</span>
//                                             <span className="icon icon-check"></span>
//                                         </Link>
//                                         <Link to="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
//                                             <span className="icon icon-view"></span>
//                                             <span className="tooltip">Quick View</span>
//                                         </Link>
//                                     </div>
//                                 </div>
//                                 <div className="card-product-info">
//                                     <Link to="/product-details" className="title link">Ribbed Tank Top</Link>
//                                     <span className="price">$16.95</span>
//                                 </div>
//                             </div>
//                             <div className={`card-product ${gridLayout} p-2`}>
//                                 <div className="card-product-wrapper">
//                                     <Link to="/product-details" className="product-img">
//                                         <img className="lazyload img-product" data-src="assets/images/products/orange-1.jpg" src="assets/images/products/orange-1.jpg" alt="image-product" />
//                                         <img className="lazyload img-hover" data-src="assets/images/products/white-1.jpg" src="assets/images/products/white-1.jpg" alt="image-product" />
//                                     </Link>
//                                     <div className="list-product-btn">
//                                         <Link to="#quick_add" data-bs-toggle="modal" className="box-icon bg_white quick-add tf-btn-loading">
//                                             <span className="icon icon-bag"></span>
//                                             <span className="tooltip">Quick Add</span>
//                                         </Link>
//                                         <Link to="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
//                                             <span className="icon icon-heart"></span>
//                                             <span className="tooltip">Add to Wishlist</span>
//                                             <span className="icon icon-delete"></span>
//                                         </Link>
//                                         <Link to="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
//                                             <span className="icon icon-compare"></span>
//                                             <span className="tooltip">Add to Compare</span>
//                                             <span className="icon icon-check"></span>
//                                         </Link>
//                                         <Link to="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
//                                             <span className="icon icon-view"></span>
//                                             <span className="tooltip">Quick View</span>
//                                         </Link>
//                                     </div>
//                                 </div>
//                                 <div className="card-product-info">
//                                     <Link to="/product-details" className="title link">Ribbed Tank Top</Link>
//                                     <span className="price">$16.95</span>
//                                 </div>
//                             </div>

//                             <div className={`card-product ${gridLayout} p-2`}>
//                                 <div className="card-product-wrapper">
//                                     <Link to="/product-details" className="product-img">
//                                         <img className="lazyload img-product" data-src="assets/images/products/black-3.jpg" src="assets/images/products/black-3.jpg" alt="image-product" />
//                                         <img className="lazyload img-hover" data-src="assets/images/products/white-1.jpg" src="assets/images/products/white-1.jpg" alt="image-product" />
//                                     </Link>
//                                     <div className="list-product-btn">
//                                         <Link to="#quick_add" data-bs-toggle="modal" className="box-icon bg_white quick-add tf-btn-loading">
//                                             <span className="icon icon-bag"></span>
//                                             <span className="tooltip">Quick Add</span>
//                                         </Link>
//                                         <Link to="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
//                                             <span className="icon icon-heart"></span>
//                                             <span className="tooltip">Add to Wishlist</span>
//                                             <span className="icon icon-delete"></span>
//                                         </Link>
//                                         <Link to="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
//                                             <span className="icon icon-compare"></span>
//                                             <span className="tooltip">Add to Compare</span>
//                                             <span className="icon icon-check"></span>
//                                         </Link>
//                                         <Link to="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
//                                             <span className="icon icon-view"></span>
//                                             <span className="tooltip">Quick View</span>
//                                         </Link>
//                                     </div>
//                                 </div>
//                                 <div className="card-product-info">
//                                     <Link to="/product-details" className="title link">Ribbed Tank Top</Link>
//                                     <span className="price">$16.95</span>
//                                 </div>
//                             </div>

//                             <div className={`card-product ${gridLayout} p-2`}>
//                                 <div className="card-product-wrapper">
//                                     <Link to="/product-details" className="product-img">
//                                         <img className="lazyload img-product" data-src="assets/images/products/white-1.jpg" src="assets/images/products/white-1.jpg" alt="image-product" />
//                                         <img className="lazyload img-hover" data-src="assets/images/products/white-1.jpg" src="assets/images/products/white-1.jpg" alt="image-product" />
//                                     </Link>
//                                     <div className="list-product-btn">
//                                         <Link to="#quick_add" data-bs-toggle="modal" className="box-icon bg_white quick-add tf-btn-loading">
//                                             <span className="icon icon-bag"></span>
//                                             <span className="tooltip">Quick Add</span>
//                                         </Link>
//                                         <Link to="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
//                                             <span className="icon icon-heart"></span>
//                                             <span className="tooltip">Add to Wishlist</span>
//                                             <span className="icon icon-delete"></span>
//                                         </Link>
//                                         <Link to="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
//                                             <span className="icon icon-compare"></span>
//                                             <span className="tooltip">Add to Compare</span>
//                                             <span className="icon icon-check"></span>
//                                         </Link>
//                                         <Link to="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
//                                             <span className="icon icon-view"></span>
//                                             <span className="tooltip">Quick View</span>
//                                         </Link>
//                                     </div>
//                                 </div>
//                                 <div className="card-product-info">
//                                     <Link to="/product-details" className="title link">Ribbed Tank Top</Link>
//                                     <span className="price">$16.95</span>
//                                 </div>
//                             </div>

//                             <div className={`card-product ${gridLayout} p-2`}>
//                                 <div className="card-product-wrapper">
//                                     <Link to="/product-details" className="product-img">
//                                         <img className="lazyload img-product" data-src="assets/images/products/light-grey.jpg" src="assets/images/products/light-grey.jpg" alt="image-product" />
//                                         <img className="lazyload img-hover" data-src="assets/images/products/white-1.jpg" src="assets/images/products/white-1.jpg" alt="image-product" />
//                                     </Link>
//                                     <div className="list-product-btn">
//                                         <Link to="#quick_add" data-bs-toggle="modal" className="box-icon bg_white quick-add tf-btn-loading">
//                                             <span className="icon icon-bag"></span>
//                                             <span className="tooltip">Quick Add</span>
//                                         </Link>
//                                         <Link to="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
//                                             <span className="icon icon-heart"></span>
//                                             <span className="tooltip">Add to Wishlist</span>
//                                             <span className="icon icon-delete"></span>
//                                         </Link>
//                                         <Link to="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
//                                             <span className="icon icon-compare"></span>
//                                             <span className="tooltip">Add to Compare</span>
//                                             <span className="icon icon-check"></span>
//                                         </Link>
//                                         <Link to="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
//                                             <span className="icon icon-view"></span>
//                                             <span className="tooltip">Quick View</span>
//                                         </Link>
//                                     </div>
//                                 </div>
//                                 <div className="card-product-info">
//                                     <Link to="/product-details" className="title link">Ribbed Tank Top</Link>
//                                     <span className="price">$16.95</span>
//                                 </div>
//                             </div>

//                             <div className={`card-product ${gridLayout} p-2`}>
//                                 <div className="card-product-wrapper">
//                                     <Link to="/product-details" className="product-img">
//                                         <img className="lazyload img-product" data-src="assets/images/products/dark-blue.jpg" src="assets/images/products/dark-blue.jpg" alt="image-product" />
//                                         <img className="lazyload img-hover" data-src="assets/images/products/white-1.jpg" src="assets/images/products/white-1.jpg" alt="image-product" />
//                                     </Link>
//                                     <div className="list-product-btn">
//                                         <Link to="#quick_add" data-bs-toggle="modal" className="box-icon bg_white quick-add tf-btn-loading">
//                                             <span className="icon icon-bag"></span>
//                                             <span className="tooltip">Quick Add</span>
//                                         </Link>
//                                         <Link to="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
//                                             <span className="icon icon-heart"></span>
//                                             <span className="tooltip">Add to Wishlist</span>
//                                             <span className="icon icon-delete"></span>
//                                         </Link>
//                                         <Link to="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
//                                             <span className="icon icon-compare"></span>
//                                             <span className="tooltip">Add to Compare</span>
//                                             <span className="icon icon-check"></span>
//                                         </Link>
//                                         <Link to="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
//                                             <span className="icon icon-view"></span>
//                                             <span className="tooltip">Quick View</span>
//                                         </Link>
//                                     </div>
//                                 </div>
//                                 <div className="card-product-info">
//                                     <Link to="/product-details" className="title link">Ribbed Tank Top</Link>
//                                     <span className="price">$16.95</span>
//                                 </div>
//                             </div>
//                             {/* Additional product cards here */}
//                         </div>
//                     </div>

//                     <Pagination />
//                 </div>
//             </section>

//             <Filter />
//             <QuickAdd/>
//             <QuickView/>
//             <Compare/>
         
//         </>
//     );
// }

// export default Wishlist;











import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Offcanvas } from 'bootstrap';
import Filter from './mini-component/Filter';
import Pagination from './mini-component/Pagination';
import CustomSelect from './mini-component/CustomSelect';
import QuickAdd from './mini-component/QuickAdd';
import QuickView from './mini-component/QuickView';
import Compare from './mini-component/Compare';

function Wishlist() {
    const filterOffcanvasRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [gridLayout, setGridLayout] = useState('w-1/2');

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280) {
                setGridLayout('w-1/6');
            } else if (window.innerWidth >= 1024) {
                setGridLayout('w-1/4');
            } else if (window.innerWidth >= 768) {
                setGridLayout('w-1/3');
            } else {
                setGridLayout('w-1/2');
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleFilterOffcanvas = () => {
        const bsOffcanvas = Offcanvas.getInstance(filterOffcanvasRef.current) || new Offcanvas(filterOffcanvasRef.current);
        bsOffcanvas.toggle();
    };

    return (
        <>
            <section className="flat-spacing-2">
                <div className="container">
                    <div className="tf-shop-control grid-3 align-items-center">
                        <div className="tf-control-filter">
                            <button onClick={toggleFilterOffcanvas} className="tf-btn-filter">
                                <span className="icon icon-filter"></span>
                                <span className="text">Filter</span>
                            </button>
                        </div>

                       {/* Layout switcher for grid */}
                       <ul className="tf-control-layout d-flex justify-content-center">
                            <li className={`tf-view-layout-switch sw-layout-2 ${gridLayout === 'w-1/2' ? 'active' : ''}`} onClick={() => setGridLayout('w-1/2')}>
                                <div className="item">
                                    <span className="icon icon-grid-2"></span>
                                </div>
                            </li>
                            <li className={`tf-view-layout-switch sw-layout-3 ${gridLayout === 'w-1/3' ? 'active' : ''}`} onClick={() => setGridLayout('w-1/3')}>
                                <div className="item">
                                    <span className="icon icon-grid-3"></span>
                                </div>
                            </li>
                            <li className={`tf-view-layout-switch sw-layout-4 ${gridLayout === 'w-1/4' ? 'active' : ''}`} onClick={() => setGridLayout('w-1/4')}>
                                <div className="item">
                                    <span className="icon icon-grid-4"></span>
                                </div>
                            </li>
                            <li className={`tf-view-layout-switch sw-layout-5 ${gridLayout === 'w-1/5' ? 'active' : ''}`} onClick={() => setGridLayout('w-1/5')}>
                                <div className="item">
                                    <span className="icon icon-grid-5"></span>
                                </div>
                            </li>
                            <li className={`tf-view-layout-switch sw-layout-6 ${gridLayout === 'w-1/6' ? 'active' : ''}`} onClick={() => setGridLayout('w-1/6')}>
                                <div className="item">
                                    <span className="icon icon-grid-6"></span>
                                </div>
                            </li>
                        </ul>

                        <CustomSelect />
                    </div>

                    <div className="grid-layout wrapper-shop">
                        <div className={`flex flex-wrap`}>

                           





                            <div className={`card-product ${gridLayout} p-2`}>
                                <div className="card-product-wrapper">
                                    <Link to="/product-details" className="product-img">
                                        <img className="lazyload img-product" data-src="assets/images/products/dark-blue.jpg" src="assets/images/products/dark-blue.jpg" alt="image-product" />
                                        <img className="lazyload img-hover" data-src="assets/images/products/white-1.jpg" src="assets/images/products/white-1.jpg" alt="image-product" />
                                    </Link>
                                    <div className="list-product-btn">
                                        <Link to="#quick_add" data-bs-toggle="modal" className="box-icon bg_white quick-add tf-btn-loading">
                                            <span className="icon icon-bag"></span>
                                            <span className="tooltip">Quick Add</span>
                                        </Link>
                                        <Link to="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                                            <span className="icon icon-heart"></span>
                                            <span className="tooltip">Add to Wishlist</span>
                                            <span className="icon icon-delete"></span>
                                        </Link>
                                        <Link to="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                                            <span className="icon icon-compare"></span>
                                            <span className="tooltip">Add to Compare</span>
                                            <span className="icon icon-check"></span>
                                        </Link>
                                        <Link to="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                                            <span className="icon icon-view"></span>
                                            <span className="tooltip">Quick View</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="card-product-info">
                                    <Link to="/product-details" className="title link">Ribbed Tank Top</Link>
                                    <span className="price">$16.95</span>
                                </div>
                            </div>
                            <div className={`card-product ${gridLayout} p-2`}>
                                <div className="card-product-wrapper">
                                    <Link to="/product-details" className="product-img">
                                        <img className="lazyload img-product" data-src="assets/images/products/orange-1.jpg" src="assets/images/products/orange-1.jpg" alt="image-product" />
                                        <img className="lazyload img-hover" data-src="assets/images/products/white-1.jpg" src="assets/images/products/white-1.jpg" alt="image-product" />
                                    </Link>
                                    <div className="list-product-btn">
                                        <Link to="#quick_add" data-bs-toggle="modal" className="box-icon bg_white quick-add tf-btn-loading">
                                            <span className="icon icon-bag"></span>
                                            <span className="tooltip">Quick Add</span>
                                        </Link>
                                        <Link to="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                                            <span className="icon icon-heart"></span>
                                            <span className="tooltip">Add to Wishlist</span>
                                            <span className="icon icon-delete"></span>
                                        </Link>
                                        <Link to="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                                            <span className="icon icon-compare"></span>
                                            <span className="tooltip">Add to Compare</span>
                                            <span className="icon icon-check"></span>
                                        </Link>
                                        <Link to="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                                            <span className="icon icon-view"></span>
                                            <span className="tooltip">Quick View</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="card-product-info">
                                    <Link to="/product-details" className="title link">Ribbed Tank Top</Link>
                                    <span className="price">$16.95</span>
                                </div>
                            </div>

                            <div className={`card-product ${gridLayout} p-2`}>
                                <div className="card-product-wrapper">
                                    <Link to="/product-details" className="product-img">
                                        <img className="lazyload img-product" data-src="assets/images/products/black-3.jpg" src="assets/images/products/black-3.jpg" alt="image-product" />
                                        <img className="lazyload img-hover" data-src="assets/images/products/white-1.jpg" src="assets/images/products/white-1.jpg" alt="image-product" />
                                    </Link>
                                    <div className="list-product-btn">
                                        <Link to="#quick_add" data-bs-toggle="modal" className="box-icon bg_white quick-add tf-btn-loading">
                                            <span className="icon icon-bag"></span>
                                            <span className="tooltip">Quick Add</span>
                                        </Link>
                                        <Link to="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                                            <span className="icon icon-heart"></span>
                                            <span className="tooltip">Add to Wishlist</span>
                                            <span className="icon icon-delete"></span>
                                        </Link>
                                        <Link to="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                                            <span className="icon icon-compare"></span>
                                            <span className="tooltip">Add to Compare</span>
                                            <span className="icon icon-check"></span>
                                        </Link>
                                        <Link to="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                                            <span className="icon icon-view"></span>
                                            <span className="tooltip">Quick View</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="card-product-info">
                                    <Link to="/product-details" className="title link">Ribbed Tank Top</Link>
                                    <span className="price">$16.95</span>
                                </div>
                            </div>

                            <div className={`card-product ${gridLayout} p-2`}>
                                <div className="card-product-wrapper">
                                    <Link to="/product-details" className="product-img">
                                        <img className="lazyload img-product" data-src="assets/images/products/white-1.jpg" src="assets/images/products/white-1.jpg" alt="image-product" />
                                        <img className="lazyload img-hover" data-src="assets/images/products/white-1.jpg" src="assets/images/products/white-1.jpg" alt="image-product" />
                                    </Link>
                                    <div className="list-product-btn">
                                        <Link to="#quick_add" data-bs-toggle="modal" className="box-icon bg_white quick-add tf-btn-loading">
                                            <span className="icon icon-bag"></span>
                                            <span className="tooltip">Quick Add</span>
                                        </Link>
                                        <Link to="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                                            <span className="icon icon-heart"></span>
                                            <span className="tooltip">Add to Wishlist</span>
                                            <span className="icon icon-delete"></span>
                                        </Link>
                                        <Link to="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                                            <span className="icon icon-compare"></span>
                                            <span className="tooltip">Add to Compare</span>
                                            <span className="icon icon-check"></span>
                                        </Link>
                                        <Link to="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                                            <span className="icon icon-view"></span>
                                            <span className="tooltip">Quick View</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="card-product-info">
                                    <Link to="/product-details" className="title link">Ribbed Tank Top</Link>
                                    <span className="price">$16.95</span>
                                </div>
                            </div>

                            <div className={`card-product ${gridLayout} p-2`}>
                                <div className="card-product-wrapper">
                                    <Link to="/product-details" className="product-img">
                                        <img className="lazyload img-product" data-src="assets/images/products/light-grey.jpg" src="assets/images/products/light-grey.jpg" alt="image-product" />
                                        <img className="lazyload img-hover" data-src="assets/images/products/white-1.jpg" src="assets/images/products/white-1.jpg" alt="image-product" />
                                    </Link>
                                    <div className="list-product-btn">
                                        <Link to="#quick_add" data-bs-toggle="modal" className="box-icon bg_white quick-add tf-btn-loading">
                                            <span className="icon icon-bag"></span>
                                            <span className="tooltip">Quick Add</span>
                                        </Link>
                                        <Link to="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                                            <span className="icon icon-heart"></span>
                                            <span className="tooltip">Add to Wishlist</span>
                                            <span className="icon icon-delete"></span>
                                        </Link>
                                        <Link to="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                                            <span className="icon icon-compare"></span>
                                            <span className="tooltip">Add to Compare</span>
                                            <span className="icon icon-check"></span>
                                        </Link>
                                        <Link to="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                                            <span className="icon icon-view"></span>
                                            <span className="tooltip">Quick View</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="card-product-info">
                                    <Link to="/product-details" className="title link">Ribbed Tank Top</Link>
                                    <span className="price">$16.95</span>
                                </div>
                            </div>

                            <div className={`card-product ${gridLayout} p-2`}>
                                <div className="card-product-wrapper">
                                    <Link to="/product-details" className="product-img">
                                        <img className="lazyload img-product" data-src="assets/images/products/dark-blue.jpg" src="assets/images/products/dark-blue.jpg" alt="image-product" />
                                        <img className="lazyload img-hover" data-src="assets/images/products/white-1.jpg" src="assets/images/products/white-1.jpg" alt="image-product" />
                                    </Link>
                                    <div className="list-product-btn">
                                        <Link to="#quick_add" data-bs-toggle="modal" className="box-icon bg_white quick-add tf-btn-loading">
                                            <span className="icon icon-bag"></span>
                                            <span className="tooltip">Quick Add</span>
                                        </Link>
                                        <Link to="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                                            <span className="icon icon-heart"></span>
                                            <span className="tooltip">Add to Wishlist</span>
                                            <span className="icon icon-delete"></span>
                                        </Link>
                                        <Link to="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                                            <span className="icon icon-compare"></span>
                                            <span className="tooltip">Add to Compare</span>
                                            <span className="icon icon-check"></span>
                                        </Link>
                                        <Link to="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                                            <span className="icon icon-view"></span>
                                            <span className="tooltip">Quick View</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="card-product-info">
                                    <Link to="/product-details" className="title link">Ribbed Tank Top</Link>
                                    <span className="price">$16.95</span>
                                </div>
                            </div>


                        </div>
                    </div>

                    <Pagination />
                </div>
            </section>

            {/* Direct Offcanvas Component */}
            <Filter ref={filterOffcanvasRef} />

            <QuickAdd />
            <QuickView />
            <Compare />
        </>
    );
}

export default Wishlist;



















