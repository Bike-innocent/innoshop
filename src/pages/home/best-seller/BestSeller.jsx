



import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function BestSeller() {
    const scrollContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    // Function to handle scroll based on screen size
    const handleScroll = (direction) => {
        const scrollContainer = scrollContainerRef.current;

        // Calculate card width dynamically
        const cardWidth = scrollContainer.querySelector('.card-product').offsetWidth;

        // Set number of cards to scroll based on screen size
        const screenWidth = window.innerWidth;
        let cardsToScroll;

        if (screenWidth >= 1024) {
            cardsToScroll = 4; // Large screens: 4 cards
        } else if (screenWidth >= 768) {
            cardsToScroll = 3; // Medium screens: 3 cards
        } else {
            cardsToScroll = 2; // Small screens: 2 cards
        }

        // Scroll amount is the card width * number of cards to scroll
        const scrollAmount = cardWidth * cardsToScroll;

        // Scroll left or right based on direction
        if (direction === 'left') {
            scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
            scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    // Function to update arrow visibility based on scroll position
    const updateArrows = () => {
        const scrollContainer = scrollContainerRef.current;

        // Check if container is at the start
        setCanScrollLeft(scrollContainer.scrollLeft > 0);

        // Check if container is at the end
        setCanScrollRight(
            scrollContainer.scrollWidth - scrollContainer.scrollLeft !== scrollContainer.clientWidth
        );
    };

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;

        // Attach the scroll event listener
        scrollContainer.addEventListener('scroll', updateArrows);

        // Initial check for arrow visibility
        updateArrows();

        return () => {
            // Clean up event listener on component unmount
            scrollContainer.removeEventListener('scroll', updateArrows);
        };
    }, []);

    return (
        <section className="flat-spacing-2 pt_0">
            <div className="container">
                {/* <div className="flat-title flex-row justify-content-between px-0">
                    <span className="title wow fadeInUp" data-wow-delay="0s">Best Seller</span>
                    <div className="box-sw-navigation">
                        
                        <div className="nav-sw square nav-prev-slider nav-prev-product" onClick={() => handleScroll('left')}>
                            <span className="icon icon-arrow1-left"></span>
                        </div>
                       
                        <div className="nav-sw square nav-next-slider nav-next-product" onClick={() => handleScroll('right')}>
                            <span className="icon icon-arrow1-right"></span>
                        </div>
                    </div>
                </div> */}

                <div className="flat-title flex-row justify-content-between px-0">
                    <span className="title wow fadeInUp" data-wow-delay="0s">Best Seller</span>
                    <div className="box-sw-navigation">
                        {/* Left (Previous) Arrow */}
                        <div
                            className={`nav-sw square nav-prev-slider nav-prev-product ${!canScrollLeft && 'opacity-50 cursor-not-allowed'}`}
                            onClick={() => handleScroll('left')}
                            style={{ pointerEvents: !canScrollLeft ? 'none' : 'auto' }}
                        >
                            <span className="icon icon-arrow1-left"></span>
                        </div>

                        {/* Right (Next) Arrow */}
                        <div
                            className={`nav-sw square nav-next-slider nav-next-product ${!canScrollRight && 'opacity-50 cursor-not-allowed'}`}
                            onClick={() => handleScroll('right')}
                            style={{ pointerEvents: !canScrollRight ? 'none' : 'auto' }}
                        >
                            <span className="icon icon-arrow1-right"></span>
                        </div>
                    </div>
                </div>

                {/* Horizontal Scrollable Container */}
                <div
                    className="flex space-x-4 overflow-x-auto no-scrollbar py-4"
                    ref={scrollContainerRef}
                >
                    {/* First Card */}
                    <div className="flex-none w-1/2 md:w-1/3 lg:w-1/4 md:px-1">

                    <div class="card-product style-2">
                        <div class="card-product-wrapper">
                            <Link to="/product-details" class="product-img">
                                <img class="lazyload img-product" data-src="assets/images/products/light-grey.jpg" src="assets/images/products/light-grey.jpg" alt="image-product" />
                                <img class="lazyload img-hover" data-src="assets/images/products/white-1.jpg" src="assets/images/products/white-1.jpg" alt="image-product" />
                            </Link>
                            <div class="list-product-btn column-left">
                                <a href="javascript:void(0);" class="box-icon wishlist bg_white btn-icon-action">
                                    <span class="icon icon-heart"></span>
                                    <span class="tooltip">Add to Wishlist</span>
                                    <span class="icon icon-delete"></span>
                                </a>
                                <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" class="box-icon bg_white compare btn-icon-action">
                                    <span class="icon icon-compare"></span>
                                    <span class="tooltip">Add to Compare</span>
                                    <span class="icon icon-check"></span>
                                </a>
                            </div>
                            <div class="list-product-btn absolute-3">
                                <a href="#quick_add" data-bs-toggle="modal" class="box-icon quick-add style-2">
                                    <span class="icon icon-bag"></span>
                                    <span class="text">QUICK ADD</span>
                                </a>
                                <a href="#quick_view" data-bs-toggle="modal" class="box-icon quickview style-2">
                                    <span class="icon icon-view"></span>
                                    <span class="text">QUICK VIEW</span>
                                </a>
                            </div>
                            <div class="size-list style-2">
                                <span>S</span>
                                <span>M</span>
                                <span>L</span>
                                <span>XL</span>
                            </div>
                            {/* <div class="on-sale-wrap text-end">
                                <div class="on-sale-item">-33%</div>
                            </div>
                            <div class="countdown-box">
                                <div class="js-countdown" data-timer="1007500" data-labels="d :,h :,m :,s"></div>
                            </div> */}
                        </div>
                        <div class="card-product-info">
                            <Link href="/product-details" class="title link">Ribbed Tank Top</Link>
                            <span class="price">$16.95</span>
                            <ul class="list-color-product">
                                <li class="list-color-item color-swatch active">
                                    <span class="tooltip">Orange</span>
                                    <span class="swatch-value bg_orange-3"></span>
                                    <img class="lazyload" data-src="assets/images/products/orange-1.jpg" src="assets/images/products/orange-1.jpg" alt="image-product" />
                                </li>
                                <li class="list-color-item color-swatch">
                                    <span class="tooltip">Black</span>
                                    <span class="swatch-value bg_dark"></span>
                                    <img class="lazyload" data-src="assets/images/products/black-1.jpg" src="assets/images/products/black-1.jpg" alt="image-product" />
                                </li>
                                <li class="list-color-item color-swatch">
                                    <span class="tooltip">White</span>
                                    <span class="swatch-value bg_white"></span>
                                    <img class="lazyload" data-src="assets/images/products/white-1.jpg" src="assets/images/products/white-1.jpg" alt="image-product" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    </div>

                    {/* Second Card */}
                    <div className="flex-none w-1/2 md:w-1/3 lg:w-1/4 md:px-1">
                    <div class="card-product style-2">
                        <div class="card-product-wrapper">
                             <Link to="/product-details" class="product-img">
                                <img class="lazyload img-product" data-src="assets/images/products/orange-1.jpg" src="assets/images/products/orange-1.jpg" alt="image-product" />
                                <img class="lazyload img-hover" data-src="assets/images/products/white-1.jpg" src="assets/images/products/white-1.jpg" alt="image-product" />
                            </Link>
                            <div class="list-product-btn column-left">
                                <a href="javascript:void(0);" class="box-icon wishlist bg_white btn-icon-action">
                                    <span class="icon icon-heart"></span>
                                    <span class="tooltip">Add to Wishlist</span>
                                    <span class="icon icon-delete"></span>
                                </a>
                                <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" class="box-icon bg_white compare btn-icon-action">
                                    <span class="icon icon-compare"></span>
                                    <span class="tooltip">Add to Compare</span>
                                    <span class="icon icon-check"></span>
                                </a>
                            </div>
                            <div class="list-product-btn absolute-3">
                                <a href="#quick_add" data-bs-toggle="modal" class="box-icon quick-add style-2">
                                    <span class="icon icon-bag"></span>
                                    <span class="text">QUICK ADD</span>
                                </a>
                                <a href="#quick_view" data-bs-toggle="modal" class="box-icon quickview style-2">
                                    <span class="icon icon-view"></span>
                                    <span class="text">QUICK VIEW</span>
                                </a>
                            </div>
                            <div class="size-list style-2">
                                <span>S</span>
                                <span>M</span>
                                <span>L</span>
                                <span>XL</span>
                            </div>
                            {/* <div class="on-sale-wrap text-end">
                                <div class="on-sale-item">-33%</div>
                            </div>
                            <div class="countdown-box">
                                <div class="js-countdown" data-timer="1007500" data-labels="d :,h :,m :,s"></div>
                            </div> */}
                        </div>
                        <div class="card-product-info">
                            <Link href="/product-details" class="title link">Ribbed Tank Top</Link>
                            <span class="price">$16.95</span>
                            <ul class="list-color-product">
                                <li class="list-color-item color-swatch active">
                                    <span class="tooltip">Orange</span>
                                    <span class="swatch-value bg_orange-3"></span>
                                    <img class="lazyload" data-src="assets/images/products/orange-1.jpg" src="assets/images/products/orange-1.jpg" alt="image-product" />
                                </li>
                                <li class="list-color-item color-swatch">
                                    <span class="tooltip">Black</span>
                                    <span class="swatch-value bg_dark"></span>
                                    <img class="lazyload" data-src="assets/images/products/black-1.jpg" src="assets/images/products/black-1.jpg" alt="image-product" />
                                </li>
                                <li class="list-color-item color-swatch">
                                    <span class="tooltip">White</span>
                                    <span class="swatch-value bg_white"></span>
                                    <img class="lazyload" data-src="assets/images/products/white-1.jpg" src="assets/images/products/white-1.jpg" alt="image-product" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    </div>

                    {/* Third Card */}
                    <div className="flex-none w-1/2 md:w-1/3 lg:w-1/4 md:px-1">
                    <div class="card-product style-2">
                        <div class="card-product-wrapper">
                             <Link to="/product-details" class="product-img">
                                <img class="lazyload img-product" data-src="assets/images/products/black-3.jpg" src="assets/images/products/black-3.jpg" alt="image-product" />
                                <img class="lazyload img-hover" data-src="assets/images/products/white-1.jpg" src="assets/images/products/white-1.jpg" alt="image-product" />
                            </Link>
                            <div class="list-product-btn column-left">
                                <a href="javascript:void(0);" class="box-icon wishlist bg_white btn-icon-action">
                                    <span class="icon icon-heart"></span>
                                    <span class="tooltip">Add to Wishlist</span>
                                    <span class="icon icon-delete"></span>
                                </a>
                                <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" class="box-icon bg_white compare btn-icon-action">
                                    <span class="icon icon-compare"></span>
                                    <span class="tooltip">Add to Compare</span>
                                    <span class="icon icon-check"></span>
                                </a>
                            </div>
                            <div class="list-product-btn absolute-3">
                                <a href="#quick_add" data-bs-toggle="modal" class="box-icon quick-add style-2">
                                    <span class="icon icon-bag"></span>
                                    <span class="text">QUICK ADD</span>
                                </a>
                                <a href="#quick_view" data-bs-toggle="modal" class="box-icon quickview style-2">
                                    <span class="icon icon-view"></span>
                                    <span class="text">QUICK VIEW</span>
                                </a>
                            </div>
                            <div class="size-list style-2">
                                <span>S</span>
                                <span>M</span>
                                <span>L</span>
                                <span>XL</span>
                            </div>
                            {/* <div class="on-sale-wrap text-end">
                                <div class="on-sale-item">-33%</div>
                            </div>
                            <div class="countdown-box">
                                <div class="js-countdown" data-timer="1007500" data-labels="d :,h :,m :,s"></div>
                            </div> */}
                        </div>
                        <div class="card-product-info">
                            <Link href="/product-details" class="title link">Ribbed Tank Top</Link>
                            <span class="price">$16.95</span>
                            <ul class="list-color-product">
                                <li class="list-color-item color-swatch active">
                                    <span class="tooltip">Orange</span>
                                    <span class="swatch-value bg_orange-3"></span>
                                    <img class="lazyload" data-src="assets/images/products/orange-1.jpg" src="assets/images/products/orange-1.jpg" alt="image-product" />
                                </li>
                                <li class="list-color-item color-swatch">
                                    <span class="tooltip">Black</span>
                                    <span class="swatch-value bg_dark"></span>
                                    <img class="lazyload" data-src="assets/images/products/black-1.jpg" src="assets/images/products/black-1.jpg" alt="image-product" />
                                </li>
                                <li class="list-color-item color-swatch">
                                    <span class="tooltip">White</span>
                                    <span class="swatch-value bg_white"></span>
                                    <img class="lazyload" data-src="assets/images/products/white-1.jpg" src="assets/images/products/white-1.jpg" alt="image-product" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    </div>

                    {/* More cards... */}
                    <div className="flex-none w-1/2 md:w-1/3 lg:w-1/4 md:px-1">

                    <div class="card-product style-2">
                        <div class="card-product-wrapper">
                             <Link to="/product-details" class="product-img">
                                <img class="lazyload img-product" data-src="assets/images/products/dark-blue.jpg" src="assets/images/products/dark-blue.jpg" alt="image-product" />
                                <img class="lazyload img-hover" data-src="assets/images/products/white-1.jpg" src="assets/images/products/white-1.jpg" alt="image-product" />
                            </Link>
                            <div class="list-product-btn column-left">
                                <a href="javascript:void(0);" class="box-icon wishlist bg_white btn-icon-action">
                                    <span class="icon icon-heart"></span>
                                    <span class="tooltip">Add to Wishlist</span>
                                    <span class="icon icon-delete"></span>
                                </a>
                                <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" class="box-icon bg_white compare btn-icon-action">
                                    <span class="icon icon-compare"></span>
                                    <span class="tooltip">Add to Compare</span>
                                    <span class="icon icon-check"></span>
                                </a>
                            </div>
                            <div class="list-product-btn absolute-3">
                                <a href="#quick_add" data-bs-toggle="modal" class="box-icon quick-add style-2">
                                    <span class="icon icon-bag"></span>
                                    <span class="text">QUICK ADD</span>
                                </a>
                                <a href="#quick_view" data-bs-toggle="modal" class="box-icon quickview style-2">
                                    <span class="icon icon-view"></span>
                                    <span class="text">QUICK VIEW</span>
                                </a>
                            </div>
                            <div class="size-list style-2">
                                <span>S</span>
                                <span>M</span>
                                <span>L</span>
                                <span>XL</span>
                            </div>
                            {/* <div class="on-sale-wrap text-end">
                                <div class="on-sale-item">-33%</div>
                            </div>
                            <div class="countdown-box">
                                <div class="js-countdown" data-timer="1007500" data-labels="d :,h :,m :,s"></div>
                            </div> */}
                        </div>
                        <div class="card-product-info">
                            <Link href="/product-details" class="title link">Ribbed Tank Top</Link>
                            <span class="price">$16.95</span>
                            <ul class="list-color-product">
                                <li class="list-color-item color-swatch active">
                                    <span class="tooltip">Orange</span>
                                    <span class="swatch-value bg_orange-3"></span>
                                    <img class="lazyload" data-src="assets/images/products/orange-1.jpg" src="assets/images/products/orange-1.jpg" alt="image-product" />
                                </li>
                                <li class="list-color-item color-swatch">
                                    <span class="tooltip">Black</span>
                                    <span class="swatch-value bg_dark"></span>
                                    <img class="lazyload" data-src="assets/images/products/black-1.jpg" src="assets/images/products/black-1.jpg" alt="image-product" />
                                </li>
                                <li class="list-color-item color-swatch">
                                    <span class="tooltip">White</span>
                                    <span class="swatch-value bg_white"></span>
                                    <img class="lazyload" data-src="assets/images/products/white-1.jpg" src="assets/images/products/white-1.jpg" alt="image-product" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    </div>


                    {/* morecards */}
                    <div className="flex-none w-1/2 md:w-1/3 lg:w-1/4 md:px-1">
                    <div class="card-product style-2">
                        <div class="card-product-wrapper">
                            <a href="product-detail.html" class="product-img">
                                <img class="lazyload img-product" data-src="assets/images/products/orange-1.jpg" src="assets/images/products/black-1.jpg" alt="image-product" />
                                <img class="lazyload img-hover" data-src="assets/images/products/dark-blue.jpg" src="assets/images/products/dark-blue.jpg" alt="image-product" />
                            </a>
                            <div class="list-product-btn column-left">
                                <a href="javascript:void(0);" class="box-icon wishlist bg_white btn-icon-action">
                                    <span class="icon icon-heart"></span>
                                    <span class="tooltip">Add to Wishlist</span>
                                    <span class="icon icon-delete"></span>
                                </a>
                                <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" class="box-icon bg_white compare btn-icon-action">
                                    <span class="icon icon-compare"></span>
                                    <span class="tooltip">Add to Compare</span>
                                    <span class="icon icon-check"></span>
                                </a>
                            </div>
                            <div class="list-product-btn absolute-3">
                                <a href="#quick_add" data-bs-toggle="modal" class="box-icon quick-add style-2">
                                    <span class="icon icon-bag"></span>
                                    <span class="text">QUICK ADD</span>
                                </a>
                                <a href="#quick_view" data-bs-toggle="modal" class="box-icon quickview style-2">
                                    <span class="icon icon-view"></span>
                                    <span class="text">QUICK VIEW</span>
                                </a>
                            </div>
                            <div class="size-list style-2">
                                <span>S</span>
                                <span>M</span>
                                <span>L</span>
                                <span>XL</span>
                            </div>
                            {/* <div class="on-sale-wrap text-end">
                                <div class="on-sale-item">-33%</div>
                            </div>
                            <div class="countdown-box">
                                <div class="js-countdown" data-timer="1007500" data-labels="d :,h :,m :,s"></div>
                            </div> */}
                        </div>
                        <div class="card-product-info">
                            <Link href="/product-details" class="title link">Ribbed Tank Top</Link>
                            <span class="price">$16.95</span>
                            <ul class="list-color-product">
                                <li class="list-color-item color-swatch active">
                                    <span class="tooltip">Orange</span>
                                    <span class="swatch-value bg_orange-3"></span>
                                    <img class="lazyload" data-src="assets/images/products/black-1.jpg" src="assets/images/products/orange-1.jpg" alt="image-product" />
                                </li>
                                <li class="list-color-item color-swatch">
                                    <span class="tooltip">Black</span>
                                    <span class="swatch-value bg_dark"></span>
                                    <img class="lazyload" data-src="assets/images/products/black-1.jpg" src="assets/images/products/black-1.jpg" alt="image-product" />
                                </li>
                                <li class="list-color-item color-swatch">
                                    <span class="tooltip">White</span>
                                    <span class="swatch-value bg_white"></span>
                                    <img class="lazyload" data-src="assets/images/products/white-1.jpg" src="assets/images/products/white-1.jpg" alt="image-product" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    </div>

                    {/* Add more cards as needed */}
                </div>
            </div>
        </section>
    );
}

export default BestSeller;
