












import React, { useState, useEffect } from 'react';

import Filter from './mini-component/Filter';
import Pagination from './mini-component/Pagination';
import CustomSelect from './mini-component/CustomSelect';
import QuickAdd from './mini-component/QuickAdd';
import QuickView from './mini-component/QuickView';
import Compare from './mini-component/Compare';


function Wishlist() {
    // State to manage the grid layout
    const [gridLayout, setGridLayout] = useState('w-1/2'); // Default to 2 columns (50% width per item)

    // Handle resizing of the screen to apply default grid settings based on screen size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280) {
                setGridLayout('w-1/6'); // Extra-large screens, 6 columns
            } else if (window.innerWidth >= 1024) {
                setGridLayout('w-1/4'); // Large screens, 4 columns
            } else if (window.innerWidth >= 768) {
                setGridLayout('w-1/3'); // Medium screens, 3 columns
            } else {
                setGridLayout('w-1/2'); // Small screens, 2 columns
            }
        };

        // Call the function on component mount and on window resize
        handleResize();
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <section className="flat-spacing-2">
                <div className="container">
                    <div className="tf-shop-control grid-3 align-items-center">
                        <div className="tf-control-filter">
                            <a href="#filterShop" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="tf-btn-filter">
                                <span className="icon icon-filter"></span>
                                <span className="text">Filter</span>
                            </a>
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

                    {/* Product Grid */}
                    <div className="grid-layout wrapper-shop">
                        <div className={`flex flex-wrap `}>
                            {/* Example Product Card */}
                            <div className={`card-product ${gridLayout} p-2`}>
                                <div className="card-product-wrapper">
                                    <a href="product-detail.html" className="product-img">
                                        <img className="lazyload img-product" data-src="assets/images/products/orange-1.jpg" src="assets/images/products/orange-1.jpg" alt="image-product" />
                                        <img className="lazyload img-hover" data-src="assets/images/products/white-1.jpg" src="assets/images/products/white-1.jpg" alt="image-product" />
                                    </a>
                                    <div className="list-product-btn">
                                        <a href="#quick_add" data-bs-toggle="modal" className="box-icon bg_white quick-add tf-btn-loading">
                                            <span className="icon icon-bag"></span>
                                            <span className="tooltip">Quick Add</span>
                                        </a>
                                        <a href="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                                            <span className="icon icon-heart"></span>
                                            <span className="tooltip">Add to Wishlist</span>
                                            <span className="icon icon-delete"></span>
                                        </a>
                                        <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                                            <span className="icon icon-compare"></span>
                                            <span className="tooltip">Add to Compare</span>
                                            <span className="icon icon-check"></span>
                                        </a>
                                        <a href="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                                            <span className="icon icon-view"></span>
                                            <span className="tooltip">Quick View</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="card-product-info">
                                    <a href="product-detail.html" className="title link">Ribbed Tank Top</a>
                                    <span className="price">$16.95</span>
                                </div>
                            </div>








                            <div className={`card-product ${gridLayout} p-2`}>
                                <div className="card-product-wrapper">
                                    <a href="product-detail.html" className="product-img">
                                        <img className="lazyload img-product" data-src="assets/images/products/orange-1.jpg" src="assets/images/products/orange-1.jpg" alt="image-product" />
                                        <img className="lazyload img-hover" data-src="assets/images/products/white-1.jpg" src="assets/images/products/white-1.jpg" alt="image-product" />
                                    </a>
                                    <div className="list-product-btn">
                                        <a href="#quick_add" data-bs-toggle="modal" className="box-icon bg_white quick-add tf-btn-loading">
                                            <span className="icon icon-bag"></span>
                                            <span className="tooltip">Quick Add</span>
                                        </a>
                                        <a href="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                                            <span className="icon icon-heart"></span>
                                            <span className="tooltip">Add to Wishlist</span>
                                            <span className="icon icon-delete"></span>
                                        </a>
                                        <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                                            <span className="icon icon-compare"></span>
                                            <span className="tooltip">Add to Compare</span>
                                            <span className="icon icon-check"></span>
                                        </a>
                                        <a href="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                                            <span className="icon icon-view"></span>
                                            <span className="tooltip">Quick View</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="card-product-info">
                                    <a href="product-detail.html" className="title link">Ribbed Tank Top</a>
                                    <span className="price">$16.95</span>
                                </div>
                            </div>
                            <div className={`card-product ${gridLayout} p-2`}>
                                <div className="card-product-wrapper">
                                    <a href="product-detail.html" className="product-img">
                                        <img className="lazyload img-product" data-src="assets/images/products/orange-1.jpg" src="assets/images/products/orange-1.jpg" alt="image-product" />
                                        <img className="lazyload img-hover" data-src="assets/images/products/white-1.jpg" src="assets/images/products/white-1.jpg" alt="image-product" />
                                    </a>
                                    <div className="list-product-btn">
                                        <a href="#quick_add" data-bs-toggle="modal" className="box-icon bg_white quick-add tf-btn-loading">
                                            <span className="icon icon-bag"></span>
                                            <span className="tooltip">Quick Add</span>
                                        </a>
                                        <a href="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                                            <span className="icon icon-heart"></span>
                                            <span className="tooltip">Add to Wishlist</span>
                                            <span className="icon icon-delete"></span>
                                        </a>
                                        <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                                            <span className="icon icon-compare"></span>
                                            <span className="tooltip">Add to Compare</span>
                                            <span className="icon icon-check"></span>
                                        </a>
                                        <a href="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                                            <span className="icon icon-view"></span>
                                            <span className="tooltip">Quick View</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="card-product-info">
                                    <a href="product-detail.html" className="title link">Ribbed Tank Top</a>
                                    <span className="price">$16.95</span>
                                </div>
                            </div>

                            <div className={`card-product ${gridLayout} p-2`}>
                                <div className="card-product-wrapper">
                                    <a href="product-detail.html" className="product-img">
                                        <img className="lazyload img-product" data-src="assets/images/products/orange-1.jpg" src="assets/images/products/orange-1.jpg" alt="image-product" />
                                        <img className="lazyload img-hover" data-src="assets/images/products/white-1.jpg" src="assets/images/products/white-1.jpg" alt="image-product" />
                                    </a>
                                    <div className="list-product-btn">
                                        <a href="#quick_add" data-bs-toggle="modal" className="box-icon bg_white quick-add tf-btn-loading">
                                            <span className="icon icon-bag"></span>
                                            <span className="tooltip">Quick Add</span>
                                        </a>
                                        <a href="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                                            <span className="icon icon-heart"></span>
                                            <span className="tooltip">Add to Wishlist</span>
                                            <span className="icon icon-delete"></span>
                                        </a>
                                        <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                                            <span className="icon icon-compare"></span>
                                            <span className="tooltip">Add to Compare</span>
                                            <span className="icon icon-check"></span>
                                        </a>
                                        <a href="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                                            <span className="icon icon-view"></span>
                                            <span className="tooltip">Quick View</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="card-product-info">
                                    <a href="product-detail.html" className="title link">Ribbed Tank Top</a>
                                    <span className="price">$16.95</span>
                                </div>
                            </div>

                            <div className={`card-product ${gridLayout} p-2`}>
                                <div className="card-product-wrapper">
                                    <a href="product-detail.html" className="product-img">
                                        <img className="lazyload img-product" data-src="assets/images/products/orange-1.jpg" src="assets/images/products/orange-1.jpg" alt="image-product" />
                                        <img className="lazyload img-hover" data-src="assets/images/products/white-1.jpg" src="assets/images/products/white-1.jpg" alt="image-product" />
                                    </a>
                                    <div className="list-product-btn">
                                        <a href="#quick_add" data-bs-toggle="modal" className="box-icon bg_white quick-add tf-btn-loading">
                                            <span className="icon icon-bag"></span>
                                            <span className="tooltip">Quick Add</span>
                                        </a>
                                        <a href="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                                            <span className="icon icon-heart"></span>
                                            <span className="tooltip">Add to Wishlist</span>
                                            <span className="icon icon-delete"></span>
                                        </a>
                                        <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                                            <span className="icon icon-compare"></span>
                                            <span className="tooltip">Add to Compare</span>
                                            <span className="icon icon-check"></span>
                                        </a>
                                        <a href="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                                            <span className="icon icon-view"></span>
                                            <span className="tooltip">Quick View</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="card-product-info">
                                    <a href="product-detail.html" className="title link">Ribbed Tank Top</a>
                                    <span className="price">$16.95</span>
                                </div>
                            </div>

                            <div className={`card-product ${gridLayout} p-2`}>
                                <div className="card-product-wrapper">
                                    <a href="product-detail.html" className="product-img">
                                        <img className="lazyload img-product" data-src="assets/images/products/orange-1.jpg" src="assets/images/products/orange-1.jpg" alt="image-product" />
                                        <img className="lazyload img-hover" data-src="assets/images/products/white-1.jpg" src="assets/images/products/white-1.jpg" alt="image-product" />
                                    </a>
                                    <div className="list-product-btn">
                                        <a href="#quick_add" data-bs-toggle="modal" className="box-icon bg_white quick-add tf-btn-loading">
                                            <span className="icon icon-bag"></span>
                                            <span className="tooltip">Quick Add</span>
                                        </a>
                                        <a href="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                                            <span className="icon icon-heart"></span>
                                            <span className="tooltip">Add to Wishlist</span>
                                            <span className="icon icon-delete"></span>
                                        </a>
                                        <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                                            <span className="icon icon-compare"></span>
                                            <span className="tooltip">Add to Compare</span>
                                            <span className="icon icon-check"></span>
                                        </a>
                                        <a href="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                                            <span className="icon icon-view"></span>
                                            <span className="tooltip">Quick View</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="card-product-info">
                                    <a href="product-detail.html" className="title link">Ribbed Tank Top</a>
                                    <span className="price">$16.95</span>
                                </div>
                            </div>

                            <div className={`card-product ${gridLayout} p-2`}>
                                <div className="card-product-wrapper">
                                    <a href="product-detail.html" className="product-img">
                                        <img className="lazyload img-product" data-src="assets/images/products/orange-1.jpg" src="assets/images/products/orange-1.jpg" alt="image-product" />
                                        <img className="lazyload img-hover" data-src="assets/images/products/white-1.jpg" src="assets/images/products/white-1.jpg" alt="image-product" />
                                    </a>
                                    <div className="list-product-btn">
                                        <a href="#quick_add" data-bs-toggle="modal" className="box-icon bg_white quick-add tf-btn-loading">
                                            <span className="icon icon-bag"></span>
                                            <span className="tooltip">Quick Add</span>
                                        </a>
                                        <a href="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                                            <span className="icon icon-heart"></span>
                                            <span className="tooltip">Add to Wishlist</span>
                                            <span className="icon icon-delete"></span>
                                        </a>
                                        <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                                            <span className="icon icon-compare"></span>
                                            <span className="tooltip">Add to Compare</span>
                                            <span className="icon icon-check"></span>
                                        </a>
                                        <a href="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                                            <span className="icon icon-view"></span>
                                            <span className="tooltip">Quick View</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="card-product-info">
                                    <a href="product-detail.html" className="title link">Ribbed Tank Top</a>
                                    <span className="price">$16.95</span>
                                </div>
                            </div>
                            {/* Additional product cards here */}
                        </div>
                    </div>

                    <Pagination />
                </div>
            </section>

            <Filter />
            <QuickAdd/>
            <QuickView/>
            <Compare/>
         
        </>
    );
}

export default Wishlist;
