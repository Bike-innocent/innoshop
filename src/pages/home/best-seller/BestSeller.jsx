



// import React, { useRef, useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

// function BestSeller() {
//     const scrollContainerRef = useRef(null);
//     const [canScrollLeft, setCanScrollLeft] = useState(false);
//     const [canScrollRight, setCanScrollRight] = useState(true);

//     // Function to handle scroll based on screen size
//     const handleScroll = (direction) => {
//         const scrollContainer = scrollContainerRef.current;

//         // Calculate card width dynamically
//         const cardWidth = scrollContainer.querySelector('.card-product').offsetWidth;

//         // Set number of cards to scroll based on screen size
//         const screenWidth = window.innerWidth;
//         let cardsToScroll;

//         if (screenWidth >= 1024) {
//             cardsToScroll = 4; // Large screens: 4 cards
//         } else if (screenWidth >= 768) {
//             cardsToScroll = 3; // Medium screens: 3 cards
//         } else {
//             cardsToScroll = 2; // Small screens: 2 cards
//         }

//         // Scroll amount is the card width * number of cards to scroll
//         const scrollAmount = cardWidth * cardsToScroll;

//         // Scroll left or right based on direction
//         if (direction === 'left') {
//             scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
//         } else {
//             scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
//         }
//     };

//     // Function to update arrow visibility based on scroll position
//     const updateArrows = () => {
//         const scrollContainer = scrollContainerRef.current;

//         // Check if container is at the start
//         setCanScrollLeft(scrollContainer.scrollLeft > 0);

//         // Check if container is at the end
//         setCanScrollRight(
//             scrollContainer.scrollWidth - scrollContainer.scrollLeft !== scrollContainer.clientWidth
//         );
//     };

//     useEffect(() => {
//         const scrollContainer = scrollContainerRef.current;

//         // Attach the scroll event listener
//         scrollContainer.addEventListener('scroll', updateArrows);

//         // Initial check for arrow visibility
//         updateArrows();

//         return () => {
//             // Clean up event listener on component unmount
//             scrollContainer.removeEventListener('scroll', updateArrows);
//         };
//     }, []);

//     return (
//         <section className="flat-spacing-2 pt_0">
//             <div className="container">




//                 <div className="flat-title flex-row justify-content-between px-0">
//                     <span className="title wow fadeInUp" data-wow-delay="0s">Best Seller</span>

//                     <div className="box-sw-navigation">
//                         {/* Left (Previous) Arrow */}
//                         <div
//                             className={`nav-sw square nav-prev-slider nav-prev-product ${!canScrollLeft && 'opacity-50 cursor-not-allowed'}`}
//                             onClick={() => handleScroll('left')}
//                             style={{ pointerEvents: !canScrollLeft ? 'none' : 'auto' }}
//                         >
//                             <AiOutlineLeft className="text-2xl" />
//                         </div>

//                         {/* Right (Next) Arrow */}
//                         <div
//                             className={`nav-sw square nav-next-slider nav-next-product ${!canScrollRight && 'opacity-50 cursor-not-allowed'}`}
//                             onClick={() => handleScroll('right')}
//                             style={{ pointerEvents: !canScrollRight ? 'none' : 'auto' }}
//                         >
//                             <AiOutlineRight className="text-2xl" />
//                         </div>
//                     </div>
//                 </div>


//                 {/* Horizontal Scrollable Container */}
//                 <div
//                     className="flex space-x-4 overflow-x-auto no-scrollbar py-4"
//                     ref={scrollContainerRef}
//                 >
//                     {/* First Card */}
//                     <div className="flex-none w-1/2 md:w-1/3 lg:w-1/4 md:px-1">

//                         <div class="card-product style-2">
//                             <div class="card-product-wrapper">
//                                 <Link to="/product-details" class="product-img">
//                                     <img class="lazyload img-product" data-src="assets/images/products/light-grey.jpg" src="assets/images/products/light-grey.jpg" alt="image-product" />
//                                     <img class="lazyload img-hover" data-src="assets/images/products/white-1.jpg" src="assets/images/products/white-1.jpg" alt="image-product" />
//                                 </Link>
//                                 <div class="list-product-btn column-left">
//                                     <a href="javascript:void(0);" class="box-icon wishlist bg_white btn-icon-action">
//                                         <span class="icon icon-heart"></span>
//                                         <span class="tooltip">Add to Wishlist</span>
//                                         <span class="icon icon-delete"></span>
//                                     </a>
//                                     <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" class="box-icon bg_white compare btn-icon-action">
//                                         <span class="icon icon-compare"></span>
//                                         <span class="tooltip">Add to Compare</span>
//                                         <span class="icon icon-check"></span>
//                                     </a>
//                                 </div>
//                                 <div class="list-product-btn absolute-3">
//                                     <a href="#quick_add" data-bs-toggle="modal" class="box-icon quick-add style-2">
//                                         <span class="icon icon-bag"></span>
//                                         <span class="text">QUICK ADD</span>
//                                     </a>
//                                     <a href="#quick_view" data-bs-toggle="modal" class="box-icon quickview style-2">
//                                         <span class="icon icon-view"></span>
//                                         <span class="text">QUICK VIEW</span>
//                                     </a>
//                                 </div>
//                                 <div class="size-list style-2">
//                                     <span>S</span>
//                                     <span>M</span>
//                                     <span>L</span>
//                                     <span>XL</span>
//                                 </div>

//                             </div>
//                             <div class="card-product-info">
//                                 <Link href="/product-details" class="title link">Ribbed Tank Top</Link>
//                                 <span class="price">$16.95</span>
//                                 <ul class="list-color-product">
//                                     <li class="list-color-item color-swatch active">
//                                         <span class="tooltip">Orange</span>
//                                         <span class="swatch-value bg_orange-3"></span>
//                                         <img class="lazyload" data-src="assets/images/products/orange-1.jpg" src="assets/images/products/orange-1.jpg" alt="image-product" />
//                                     </li>
//                                     <li class="list-color-item color-swatch">
//                                         <span class="tooltip">Black</span>
//                                         <span class="swatch-value bg_dark"></span>
//                                         <img class="lazyload" data-src="assets/images/products/black-1.jpg" src="assets/images/products/black-1.jpg" alt="image-product" />
//                                     </li>
//                                     <li class="list-color-item color-swatch">
//                                         <span class="tooltip">White</span>
//                                         <span class="swatch-value bg_white"></span>
//                                         <img class="lazyload" data-src="assets/images/products/white-1.jpg" src="assets/images/products/white-1.jpg" alt="image-product" />
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>


//                     {/* Add more cards as needed */}
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default BestSeller;


















































// import React, { useRef, useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { AiOutlineHeart, AiFillHeart, AiOutlineShoppingCart, AiOutlineEye } from 'react-icons/ai';
// import { HiOutlineArrowsExpand } from 'react-icons/hi';
// import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
// import axiosInstance from '../../../axiosInstance';
// import QuickView from '../mini-component/QuickView';


// function BestSeller() {
//     const scrollContainerRef = useRef(null);
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [canScrollLeft, setCanScrollLeft] = useState(false);
//     const [canScrollRight, setCanScrollRight] = useState(true);
//     const [selectedProduct, setSelectedProduct] = useState(null); // State for the selected product


//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const response = await axiosInstance.get('/products');
//                 setProducts(response.data.slice(0, 10));
//             } catch (err) {
//                 setError('Failed to fetch products');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchProducts();
//     }, []);

//     const handleScroll = (direction) => {
//         const scrollContainer = scrollContainerRef.current;
//         const cardWidth = scrollContainer.querySelector('.card-product')?.offsetWidth || 0;
//         const screenWidth = window.innerWidth;
//         const cardsToScroll = screenWidth >= 1024 ? 4 : screenWidth >= 768 ? 3 : 2;
//         const scrollAmount = cardWidth * cardsToScroll;

//         scrollContainer.scrollBy({
//             left: direction === 'left' ? -scrollAmount : scrollAmount,
//             behavior: 'smooth',
//         });
//     };

//     const updateArrows = () => {
//         const scrollContainer = scrollContainerRef.current;
//         if (scrollContainer) {
//             const tolerance = 2;
//             setCanScrollLeft(scrollContainer.scrollLeft > tolerance);
//             setCanScrollRight(
//                 scrollContainer.scrollWidth - scrollContainer.scrollLeft - scrollContainer.clientWidth > tolerance
//             );
//         }
//     };

//     useEffect(() => {
//         const scrollContainer = scrollContainerRef.current;

//         const debounceUpdateArrows = () => {
//             clearTimeout(updateArrows.timer);
//             updateArrows.timer = setTimeout(updateArrows, 100);
//         };

//         if (scrollContainer) {
//             scrollContainer.addEventListener('scroll', debounceUpdateArrows);
//             updateArrows();
//         }

//         return () => {
//             if (scrollContainer) scrollContainer.removeEventListener('scroll', debounceUpdateArrows);
//         };
//     }, []);

// const handleQuickView = (product) => {
//     setSelectedProduct(product);
//     // Show the modal
//     const modal = new window.bootstrap.Modal(document.getElementById('quick_view'));
//     modal.show();
// };

//     return (
//         <section className="flat-spacing-2 pt_0">
//             <div className="container">
//                 <div className="flat-title flex-row justify-between px-0">
//                     <span className="title">Best Seller</span>
//                     <div className="flex space-x-2">
//                         <button
//                             className={`nav-sw nav-prev-product ${!canScrollLeft && 'opacity-50'}`}
//                             onClick={() => handleScroll('left')}
//                             disabled={!canScrollLeft}
//                         >
//                             <AiOutlineLeft className="text-2xl" />
//                         </button>
//                         <button
//                             className={`nav-sw nav-next-product ${!canScrollRight && 'opacity-50'}`}
//                             onClick={() => handleScroll('right')}
//                             disabled={!canScrollRight}
//                         >
//                             <AiOutlineRight className="text-2xl" />
//                         </button>
//                     </div>
//                 </div>

//                 {loading ? (
//                     <p>Loading products...</p>
//                 ) : error ? (
//                     <p className="text-red-500">{error}</p>
//                 ) : (
//                     <div className="flex space-x-4 overflow-x-auto no-scrollbar py-4" ref={scrollContainerRef}>
//                         {products.map((product) => (
//                             <div key={product.id} className="flex-none w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 md:px-1">
//                                 <div className="card-product style-2">
//                                     <div className="card-product-wrapper">
//                                         <Link to={`/product/${product.slug}`} className="product-img">
//                                             <img
//                                                 className="lazyload img-product"
//                                                 src={product.primary_image?.image_path} 
//                                                 alt={product.name}
//                                             />
//                                             <img
//                                                 className="lazyload img-hover"
//                                                 src={product.images[0]?.image_path || product.images[1]?.image_path}
//                                                 alt={product.name}
//                                             />
//                                         </Link>
//                                         <div className="list-product-btn column-left">
//                                             <button className="box-icon wishlist bg_white btn-icon-action">
//                                                 <AiOutlineHeart className=" sm:text-2xl text-xl" />
//                                                 <span className="tooltip">Add to Wishlist</span>
//                                             </button>

//                                             <button className="box-icon bg_white compare btn-icon-action">
//                                                 <HiOutlineArrowsExpand className="text-xl" />
//                                                 <span className="tooltip">Add to Compare</span>
//                                             </button>
//                                         </div>





//                                         <div class="list-product-btn absolute-3">
//                                             <a href="#quick_add" data-bs-toggle="modal" class="box-icon quick-add style-2">
//                                                 <AiOutlineShoppingCart className="text-xl" />
//                                                 <span class="text">QUICK ADD</span>
//                                             </a>


//                                              <button
//                                                     className="box-icon quickview style-2"
//                                                     onClick={() => handleQuickView(product)}
//                                                 >
//                                                     <AiOutlineEye className="text-xl" />
//                                                     <span className="text">QUICK VIEW</span>
//                                                 </button>

//                                         </div>
//                                     </div>

//                                     <div className="card-product-info">
//                                         <Link to={`/product/${product.slug}`} className="title link">
//                                             {product.name}
//                                         </Link>
//                                         <span className="price">${product.price}</span>

// <ul className="list-color-product">
//     {product.colour && (
//         <li className="list-color-item color-swatch">
//             <span className="tooltip">{product.colour.name}</span>
//             <span
//                 className="swatch-value"
//                 style={{ backgroundColor: product.colour.hex_code }}
//             ></span>
//         </li>
//     )}
// </ul>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>

//             <QuickView product={selectedProduct} />

//         </section>
//     );
// }

// export default BestSeller;





































































































import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart, AiOutlineShoppingCart, AiOutlineEye, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { HiOutlineArrowsExpand } from 'react-icons/hi';
import axiosInstance from '../../../axiosInstance';
import QuickAdd from '../../../components/QuickAdd';
import QuickView from '../../../components/QuickView';

function BestSeller() {
    const scrollContainerRef = useRef(null);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [productForQuickView, setProductForQuickView] = useState(null); // For Quick View
    const [productForQuickAdd, setProductForQuickAdd] = useState(null); // For Quick Add
    const [isQuickAddOpen, setIsQuickAddOpen] = useState(false); // Modal control state
    const [isQuickViewOpen, setIsQuickViewOpen] = useState(false); // Modal control state

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axiosInstance.get('/products');
                setProducts(response.data.slice(0, 10));
            } catch (err) {
                setError('Failed to fetch products');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleScroll = (direction) => {
        const scrollContainer = scrollContainerRef.current;
        const cardWidth = scrollContainer.querySelector('.card-product')?.offsetWidth || 0;
        const screenWidth = window.innerWidth;
        const cardsToScroll = screenWidth >= 1024 ? 4 : screenWidth >= 768 ? 3 : 2;
        const scrollAmount = cardWidth * cardsToScroll;

        scrollContainer.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        });
    };

    const updateArrows = () => {
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            const tolerance = 2;
            setCanScrollLeft(scrollContainer.scrollLeft > tolerance);
            setCanScrollRight(
                scrollContainer.scrollWidth - scrollContainer.scrollLeft - scrollContainer.clientWidth > tolerance
            );
        }
    };

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        const debounceUpdateArrows = () => {
            clearTimeout(updateArrows.timer);
            updateArrows.timer = setTimeout(updateArrows, 100);
        };

        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', debounceUpdateArrows);
            updateArrows();
        }

        return () => {
            if (scrollContainer) scrollContainer.removeEventListener('scroll', debounceUpdateArrows);
        };
    }, []);

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
        <section className="flat-spacing-2 pt_0">
            <div className="container">
               
                <div className="flat-title flex-row justify-between px-0">
                    <span className="title">Best Seller</span>
                    <div className="flex space-x-2">
                        <button
                            className={`nav-sw nav-prev-product ${!canScrollLeft && 'opacity-50'}`}
                            onClick={() => handleScroll('left')}
                            disabled={!canScrollLeft}
                        >
                            <AiOutlineLeft className="text-2xl" />
                        </button>
                        <button
                            className={`nav-sw nav-next-product ${!canScrollRight && 'opacity-50'}`}
                            onClick={() => handleScroll('right')}
                            disabled={!canScrollRight}
                        >
                            <AiOutlineRight className="text-2xl" />
                        </button>
                    </div>
                </div>

                {loading ? (
                    <p> </p>
                ) : error ? (
                    <p className="text-red-500">{error}</p>
                ) : (
                    <div className="flex space-x-4 overflow-x-auto no-scrollbar py-4" ref={scrollContainerRef}>
                        {products.map((product) => (
                            <div key={product.id} className="flex-none w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 md:px-1">
                                <div className="card-product style-2">
                                    <div className="card-product-wrapper">
                                        <Link to={`/product/${product.slug}`} className="product-img">
                                            <img className="lazyload img-product shadow" src={product.primary_image?.image_path} alt={product.name} />
                                            <img className="lazyload img-hover shadow" src={product.images[0]?.image_path || product.images[1]?.image_path} alt={product.name} />
                                        </Link>
                                        <div className="list-product-btn column-left">
                                            <button className="box-icon wishlist bg_white btn-icon-action">
                                                <AiOutlineHeart className="sm:text-2xl text-xl" />
                                                <span className="tooltip">Add to Wishlist</span>
                                            </button>
                                            <button className="box-icon bg_white compare btn-icon-action">
                                                <HiOutlineArrowsExpand className="text-xl" />
                                                <span className="tooltip">Add to Compare</span>
                                            </button>
                                        </div>

                                        <div className="list-product-btn absolute-3">
                                            <button className="box-icon quick-add " onClick={() => handleQuickAdd(product)}>
                                                <AiOutlineShoppingCart className="text-xl" />
                                              
                                            </button>

                                            <button className="box-icon quickview " onClick={() => handleQuickView(product)}>
                                                <AiOutlineEye className="text-2xl" />
                                              
                                            </button>    
                                        </div>
                                    </div>

                                    <div className="card-product-info">
                                        <Link to={`/product/${product.slug}`} className="title link">
                                            {product.name}
                                        </Link>
                                        <span className="price">₦{product.price}</span>

                                        <ul className="list-color-product">
                                            {product.colour && (
                                                <li className="list-color-item color-swatch">
                                                    <span className="tooltip">{product.colour.name}</span>
                                                    <span
                                                        className="swatch-value"
                                                        style={{ backgroundColor: product.colour.hex_code }}
                                                    ></span>
                                                </li>
                                            )}
                                        </ul>
                                    </div>


                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <QuickAdd
                product={productForQuickAdd}
                isOpen={isQuickAddOpen}
                onClose={closeQuickAdd}
            />
            <QuickView product={productForQuickView}
             isOpen={isQuickViewOpen}
             onClose={closeQuickView} />
        </section>
    );
}

export default BestSeller;
