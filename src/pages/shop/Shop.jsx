


















































// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { Offcanvas } from 'bootstrap';
// import Filter from './mini-component/Filter';
// import Pagination from './mini-component/Pagination';
// import CustomSelect from './mini-component/CustomSelect';
// import QuickAdd from './mini-component/QuickAdd';
// import QuickView from './mini-component/QuickView';
// import Compare from './mini-component/Compare';

// function Shop() {
//     const filterOffcanvasRef = useRef(null);

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

//     const [gridLayout, setGridLayout] = useState('w-1/2');

//     useEffect(() => {
//         const handleResize = () => {
//             if (window.innerWidth >= 1280) {
//                 setGridLayout('w-1/6');
//             } else if (window.innerWidth >= 1024) {
//                 setGridLayout('w-1/4');
//             } else if (window.innerWidth >= 768) {
//                 setGridLayout('w-1/3');
//             } else {
//                 setGridLayout('w-1/2');
//             }
//         };

//         handleResize();
//         window.addEventListener('resize', handleResize);

//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     const toggleFilterOffcanvas = () => {
//         const bsOffcanvas = Offcanvas.getInstance(filterOffcanvasRef.current) || new Offcanvas(filterOffcanvasRef.current);
//         bsOffcanvas.toggle();
//     };

//     return (
//         <>
//             <section className="flat-spacing-2">
//                 <div className="container">
//                     <div className="tf-shop-control grid-3 align-items-center">
//                         <div className="tf-control-filter">
//                             <button onClick={toggleFilterOffcanvas} className="tf-btn-filter">
//                                 <span className="icon icon-filter"></span>
//                                 <span className="text">Filter</span>
//                             </button>
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

//                     <div className="grid-layout wrapper-shop">
//                         <div className={`flex flex-wrap`}>







//                             <div className={`card-product ${gridLayout} p-2`}>
//                                 <div className="card-product-wrapper">
//                                     <Link to="/product-details" className="product-img">
//                                         <img className="lazyload img-product" src="assets/images/products/dark-blue.jpg" alt="image-product" />
//                                         <img className="lazyload img-hover" src="assets/images/products/dark-blue.jpg" alt="image-product" />
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

//                                 <div class="card-product-info">
//                                     <Link to="/product-details" className="title link">Ribbed Tank Top</Link>
//                                     <span class="price">$16.95</span>
//                                     <ul class="list-color-product">
//                                         <li class="list-color-item color-swatch active">
//                                             <span class="tooltip">light-green</span>
//                                             <span class="swatch-value bg-[#67c678]"></span>

//                                         </li>


//                                     </ul>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>

//                     <Pagination />
//                 </div>
//             </section>

//             {/* Direct Offcanvas Component */}
//             <Filter ref={filterOffcanvasRef} />

//             <QuickAdd />
//             <QuickView />
//             <Compare />
//         </>
//     );
// }

// export default Shop;



















// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { Offcanvas } from 'bootstrap';
// import axiosInstance from '../../axiosInstance';
// import Filter from './mini-component/Filter';
// import Pagination from './mini-component/Pagination';
// import CustomSelect from './mini-component/CustomSelect';
// import QuickAdd from './mini-component/QuickAdd';
// import QuickView from './mini-component/QuickView';
// import Compare from './mini-component/Compare';

// function Shop() {
//     const filterOffcanvasRef = useRef(null);
//     const [products, setProducts] = useState([]);
//     const [error, setError] = useState(null);
//     const [gridLayout, setGridLayout] = useState('w-1/2');

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const response = await axiosInstance.get('/products');
//                 setProducts(response.data);
//             } catch (error) {
//                 setError('Failed to fetch products.');
//                 console.error('Error fetching products:', error);
//             }
//         };

//         fetchProducts();
//     }, []);

//     useEffect(() => {
//         const handleResize = () => {
//             if (window.innerWidth >= 1280) {
//                 setGridLayout('w-1/6');
//             } else if (window.innerWidth >= 1024) {
//                 setGridLayout('w-1/4');
//             } else if (window.innerWidth >= 768) {
//                 setGridLayout('w-1/3');
//             } else {
//                 setGridLayout('w-1/2');
//             }
//         };

//         handleResize();
//         window.addEventListener('resize', handleResize);

//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     const toggleFilterOffcanvas = () => {
//         const bsOffcanvas = Offcanvas.getInstance(filterOffcanvasRef.current) || new Offcanvas(filterOffcanvasRef.current);
//         bsOffcanvas.toggle();
//     };

//     return (
//         <>
//             <section className="flat-spacing-2">
//                 <div className="container">
//                     <div className="tf-shop-control grid-3 align-items-center">
//                         <div className="tf-control-filter">
//                             <button onClick={toggleFilterOffcanvas} className="tf-btn-filter">
//                                 <span className="icon icon-filter"></span>
//                                 <span className="text">Filter</span>
//                             </button>
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

//                     {error && <p className="text-red-500">{error}</p>}
//                     <div className="grid-layout wrapper-shop">
//                         <div className={`flex flex-wrap`}>
//                             {products.map((product) => (
//                                 <div key={product.id} className={`card-product ${gridLayout} p-2`}>
//                                     <div className="card-product-wrapper">
//                                         <Link to={`/product/${product.slug}`} className="product-img">
//                                             {/* Display primary image */}
//                                             <img className="lazyload img-product" src={product.primary_image?.image_path} alt={product.name} />
//                                             <img className="lazyload img-hover" src={product.primary_image?.image_path} alt={product.name} />
//                                         </Link>
//                                         <div className="list-product-btn">
//                                             <Link to="#quick_add" data-bs-toggle="modal" className="box-icon bg_white quick-add tf-btn-loading">
//                                                 <span className="icon icon-bag"></span>
//                                                 <span className="tooltip">Quick Add</span>
//                                             </Link>
//                                             <Link to="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
//                                                 <span className="icon icon-heart"></span>
//                                                 <span className="tooltip">Add to Wishlist</span>
//                                                 <span className="icon icon-delete"></span>
//                                             </Link>
//                                             <Link to="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
//                                                 <span className="icon icon-compare"></span>
//                                                 <span className="tooltip">Add to Compare</span>
//                                                 <span className="icon icon-check"></span>
//                                             </Link>
//                                             <Link to="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
//                                                 <span className="icon icon-view"></span>
//                                                 <span className="tooltip">Quick View</span>
//                                             </Link>
//                                         </div>
//                                     </div>

//                                     <div className="card-product-info">
//                                         <Link to={`/product/${product.slug}`} className="title link">{product.name}</Link>
//                                         <span className="price">${product.price}</span>
//                                         <ul className="list-color-product">
//                                             <li className="list-color-item color-swatch active">
//                                                 <span className="tooltip">{product.colour?.name}</span>
//                                                 <span className="swatch-value" style={{ backgroundColor: product.colour?.hex_code }}></span>
//                                             </li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     <Pagination />
//                 </div>
//             </section>

//             {/* Direct Offcanvas Component */}
//             <Filter ref={filterOffcanvasRef} />

//             <QuickAdd />
//             <QuickView />
//             <Compare />
//         </>
//     );
// }

// export default Shop;
















import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Offcanvas } from 'bootstrap';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../../axiosInstance';
import Filter from './mini-component/Filter';
import Pagination from './mini-component/Pagination';
import CustomSelect from './mini-component/CustomSelect';
import QuickAdd from './mini-component/QuickAdd';
import QuickView from './mini-component/QuickView';
import Compare from './mini-component/Compare';
import SkeletonLoader from './mini-component/SkeletonLoader';

function Shop() {
    const filterOffcanvasRef = useRef(null);
    const [gridLayout, setGridLayout] = useState('w-1/2');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const fetchProducts = async () => {
        const response = await axiosInstance.get('/products');
        return response.data;
    };

    // Use React Query's useQuery hook
    const { data: products, isLoading, isError, error } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
        refetchOnWindowFocus: false, // Optional: prevent refetching when window regains focus
    });

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



                    {/* Display SkeletonLoader if loading; otherwise, display products */}
                    <div className="grid-layout wrapper-shop">
                        {isLoading ? (
                            <SkeletonLoader />
                        ) : (
                            <div className="flex flex-wrap">
                                {products.map((product) => (
                                    <div key={product.id} className={`card-product ${gridLayout} p-2`}>
                                        <div className="card-product-wrapper">
                                            <Link to={`/product/${product.slug}`} className="product-img">
                                            
                                                <img className="lazyload img-product" src={product.primary_image?.image_path} alt={product.name} />
                                                <img className="lazyload img-hover" src={product.primary_image?.image_path} alt={product.name} />
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
                                            <Link to={`/product/${product.slug}`} className="title link">{product.name}</Link>
                                            <span className="price">${product.price}</span>
                                            <ul className="list-color-product">
                                                <li className="list-color-item color-swatch active">
                                                    <span className="tooltip">{product.colour?.name}</span>
                                                    <span className="swatch-value" style={{ backgroundColor: product.colour?.hex_code }}></span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
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

export default Shop;

