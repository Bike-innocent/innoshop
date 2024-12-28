




import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Offcanvas } from 'bootstrap';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../../axiosInstance';
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineEye } from 'react-icons/ai';
import { HiOutlineArrowsExpand } from 'react-icons/hi';
import Filter from './mini-component/Filter';
import Pagination from './mini-component/Pagination';
import CustomSelect from './mini-component/CustomSelect';
import SkeletonLoader from './mini-component/SkeletonLoader';
import QuickAdd from '../../components/QuickAdd';
import QuickView from '../../components/QuickView';

function Shop() {
    const filterOffcanvasRef = useRef(null);
    const [gridLayout, setGridLayout] = useState('w-1/2');
    const [productForQuickView, setProductForQuickView] = useState(null); // For Quick View
    const [productForQuickAdd, setProductForQuickAdd] = useState(null); // For Quick Add
    const [isQuickAddOpen, setIsQuickAddOpen] = useState(false); // Modal control state
    const [isQuickViewOpen, setIsQuickViewOpen] = useState(false); // Modal control state

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const fetchProducts = async () => {
        const response = await axiosInstance.get('/products');
        return response.data;
    };

    const { data: products, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
    
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

    

    const handleQuickView = (product) => {
        setProductForQuickView(product);
        setIsQuickViewOpen(true); // Open Quick View modal
    };

    const closeQuickView = () => {
        setIsQuickViewOpen(false); // Close Quick View modal
    };


    const handleQuickAdd = (product) => {
        setProductForQuickAdd(product);
        setIsQuickAddOpen(true); // Open Quick Add modal
    };

    const closeQuickAdd = () => {
        setIsQuickAddOpen(false); // Close Quick Add modal
    };

    return (
        <>
            <section className="flat-spacing-2">
                
                
                <div className="container">


{/* 
                    <div className="tf-shop-control grid-3 align-items-center">
                        <div className="tf-control-filter">
                            <button onClick={toggleFilterOffcanvas} className="tf-btn-filter">
                                <span className="icon icon-filter"></span>
                                <span className="text">Filter</span>
                            </button>
                        </div>

                       
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
                    </div> */}





                    {/* Products */}
                    <div className="grid-layout wrapper-shop">
                        {isLoading ? (
                            <SkeletonLoader />
                        ) : (
                            <div className="flex flex-wrap">
                                {products.map((product) => (
                                    <div key={product.id} className={`card-product ${gridLayout} p-2`}>
                                        <div className="card-product-wrapper relative">
                                            {/* Product Image */}
                                            <Link to={`/product/${product.slug}`} className="product-img">

                                                <img className="lazyload img-product " src={product.primary_image?.image_path} alt={product.name} />
                                                <img className="lazyload img-hover" src={product.images[0]?.image_path || product.images[1]?.image_path} alt={product.name} />
                                            </Link>





                                            <div className="list-product-btn">
                                            {/* <a href="#quick_add" data-bs-toggle="modal" class="box-icon bg_white quick-add tf-btn-loading">
                                                                                    <span class="icon icon-bag"></span>
                                                                                    <span class="tooltip">Quick Add</span>
                                                                                </a> */}
                                                <button  onClick={() => handleQuickAdd(product)} className="box-icon bg_white quick-add tf-btn-loading">
                                                    <AiOutlineShoppingCart className="text-2xl" />
                                                    <span className="tooltip">Quick Add</span>
                                                </button>
                                               
                                                <button onClick={() => handleQuickView(product)} className="box-icon bg_white quickview tf-btn-loading">
                                                    <AiOutlineEye className="text-2xl" />
                                                    <span className="tooltip">Quick View</span>
                                                </button>
                                            </div>



                                        </div>

                                        {/* Product Info */}
                                        <div className="card-product-info">
                                            <Link to={`/product/${product.slug}`} className="title link">{product.name}</Link>
                                            <span className="price">₦{product.price}</span>
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

            {/* Offcanvas Filter */}
            <Filter ref={filterOffcanvasRef} />

            {/* Modals for Quick Add and Quick View */}
            <QuickAdd
                product={productForQuickAdd}
                isOpen={isQuickAddOpen}
                onClose={closeQuickAdd}
            />
            <QuickView product={productForQuickView}
             isOpen={isQuickViewOpen}
             onClose={closeQuickView} />
        </>
    );
}

export default Shop;
















