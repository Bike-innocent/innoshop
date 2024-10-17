// import React from 'react'
// import Filter from './mini-component/Filter'
// import Featured from './mini-component/Featured'
// import Pagination from './mini-component/Pagination'

// function Shop() {
//     return (
//         <>



//             <section class="flat-spacing-2">
//                 <div class="container">
//                     <div class="tf-shop-control grid-3 align-items-center">
//                         <div class="tf-control-filter">
//                             <a href="#filterShop" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" class="tf-btn-filter"><span class="icon icon-filter"></span><span class="text">Filter</span></a>
//                         </div>


//                         <ul class="tf-control-layout d-flex justify-content-center">
//                             <li class="tf-view-layout-switch sw-layout-2" data-value-grid="grid-2">
//                                 <div class="item"><span class="icon icon-grid-2"></span></div>
//                             </li>
//                             <li class="tf-view-layout-switch sw-layout-3" data-value-grid="grid-3">
//                                 <div class="item"><span class="icon icon-grid-3"></span></div>
//                             </li>
//                             <li class="tf-view-layout-switch sw-layout-4 active" data-value-grid="grid-4">
//                                 <div class="item"><span class="icon icon-grid-4"></span></div>
//                             </li>
//                             <li class="tf-view-layout-switch sw-layout-5" data-value-grid="grid-5">
//                                 <div class="item"><span class="icon icon-grid-5"></span></div>
//                             </li>
//                             <li class="tf-view-layout-switch sw-layout-6" data-value-grid="grid-6">
//                                 <div class="item"><span class="icon icon-grid-6"></span></div>
//                             </li>
//                         </ul>

//                         <Featured />



//                     </div>
//                     <div class="grid-layout wrapper-shop" data-grid="grid-4">
//                         {/* {/* <!-- card product 1 --> */}
//                         <div class="card-product">
//                             <div class="card-product-wrapper">
//                                 <a href="product-detail.html" class="product-img">
//                                     <img class="lazyload img-product" data-src="assets/images/products/orange-1.jpg" src="assets/images/products/orange-1.jpg" alt="image-product" />
//                                     <img class="lazyload img-hover" data-src="assets/images/products/white-1.jpg" src="assets/images/products/white-1.jpg" alt="image-product" />
//                                 </a>
//                                 <div class="list-product-btn">
//                                     <a href="#quick_add" data-bs-toggle="modal" class="box-icon bg_white quick-add tf-btn-loading">
//                                         <span class="icon icon-bag"></span>
//                                         <span class="tooltip">Quick Add</span>
//                                     </a>
//                                     <a href="javascript:void(0);" class="box-icon bg_white wishlist btn-icon-action">
//                                         <span class="icon icon-heart"></span>
//                                         <span class="tooltip">Add to Wishlist</span>
//                                         <span class="icon icon-delete"></span>
//                                     </a>
//                                     <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" class="box-icon bg_white compare btn-icon-action">
//                                         <span class="icon icon-compare"></span>
//                                         <span class="tooltip">Add to Compare</span>
//                                         <span class="icon icon-check"></span>
//                                     </a>
//                                     <a href="#quick_view" data-bs-toggle="modal" class="box-icon bg_white quickview tf-btn-loading">
//                                         <span class="icon icon-view"></span>
//                                         <span class="tooltip">Quick View</span>
//                                     </a>
//                                 </div>
//                             </div>
//                             <div class="card-product-info">
//                                 <a href="product-detail.html" class="title link">Ribbed Tank Top</a>
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
//                         {/* <!-- card product 2 --> */}
//                         <div class="card-product">
//                             <div class="card-product-wrapper">
//                                 <a href="product-detail.html" class="product-img">
//                                     <img class="lazyload img-product" data-src="assets/images/products/brown.jpg" src="assets/images/products/brown.jpg" alt="image-product" />
//                                     <img class="lazyload img-hover" data-src="assets/images/products/purple.jpg" src="assets/images/products/purple.jpg" alt="image-product" />
//                                 </a>
//                                 <div class="list-product-btn">
//                                     <a href="#quick_add" data-bs-toggle="modal" class="box-icon bg_white quick-add tf-btn-loading">
//                                         <span class="icon icon-bag"></span>
//                                         <span class="tooltip">Quick Add</span>
//                                     </a>
//                                     <a href="javascript:void(0);" class="box-icon bg_white wishlist btn-icon-action">
//                                         <span class="icon icon-heart"></span>
//                                         <span class="tooltip">Add to Wishlist</span>
//                                         <span class="icon icon-delete"></span>
//                                     </a>
//                                     <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" class="box-icon bg_white compare btn-icon-action">
//                                         <span class="icon icon-compare"></span>
//                                         <span class="tooltip">Add to Compare</span>
//                                         <span class="icon icon-check"></span>
//                                     </a>
//                                     <a href="#quick_view" data-bs-toggle="modal" class="box-icon bg_white quickview tf-btn-loading">
//                                         <span class="icon icon-view"></span>
//                                         <span class="tooltip">Quick View</span>
//                                     </a>
//                                 </div>
//                                 <div class="size-list">
//                                     <span>M</span>
//                                     <span>L</span>
//                                     <span>XL</span>
//                                 </div>
//                                 <div class="countdown-box">
//                                     <div class="js-countdown" data-timer="1007500" data-labels="d :,h :,m :,s"></div>
//                                 </div>
//                                 <div class="on-sale-wrap text-end">
//                                     <div class="on-sale-item">-33%</div>
//                                 </div>
//                             </div>
//                             <div class="card-product-info">
//                                 <a href="product-detail.html" class="title link">Ribbed modal T-shirt</a>
//                                 <span class="price">From $18.95</span>
//                                 <ul class="list-color-product">
//                                     <li class="list-color-item color-swatch active">
//                                         <span class="tooltip">Brown</span>
//                                         <span class="swatch-value bg_brown"></span>
//                                         <img class="lazyload" data-src="assets/images/products/brown.jpg" src="assets/images/products/brown.jpg" alt="image-product" />
//                                     </li>
//                                     <li class="list-color-item color-swatch">
//                                         <span class="tooltip">Light Purple</span>
//                                         <span class="swatch-value bg_purple"></span>
//                                         <img class="lazyload" data-src="assets/images/products/purple.jpg" src="assets/images/products/purple.jpg" alt="image-product" />
//                                     </li>
//                                     <li class="list-color-item color-swatch">
//                                         <span class="tooltip">Light Green</span>
//                                         <span class="swatch-value bg_light-green"></span>
//                                         <img class="lazyload" data-src="assets/images/products/green.jpg" src="assets/images/products/green.jpg" alt="image-product" />
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>


//                         {/* <!-- card product 3 --> */}
//                         <div class="card-product">
//                             <div class="card-product-wrapper">
//                                 <a href="product-detail.html" class="product-img">
//                                     <img class="lazyload img-product" data-src="assets/images/products/white-3.jpg" src="assets/images/products/white-3.jpg" alt="image-product" />
//                                     <img class="lazyload img-hover" data-src="assets/images/products/white-4.jpg" src="assets/images/products/white-4.jpg" alt="image-product" />
//                                 </a>
//                                 <div class="list-product-btn absolute-2">
//                                     <a href="#shoppingCart" data-bs-toggle="modal" class="box-icon bg_white quick-add tf-btn-loading">
//                                         <span class="icon icon-bag"></span>
//                                         <span class="tooltip">Add to cart</span>
//                                     </a>
//                                     <a href="javascript:void(0);" class="box-icon bg_white wishlist btn-icon-action">
//                                         <span class="icon icon-heart"></span>
//                                         <span class="tooltip">Add to Wishlist</span>
//                                         <span class="icon icon-delete"></span>
//                                     </a>
//                                     <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" class="box-icon bg_white compare btn-icon-action">
//                                         <span class="icon icon-compare"></span>
//                                         <span class="tooltip">Add to Compare</span>
//                                         <span class="icon icon-check"></span>
//                                     </a>
//                                     <a href="#quick_view" data-bs-toggle="modal" class="box-icon bg_white quickview tf-btn-loading">
//                                         <span class="icon icon-view"></span>
//                                         <span class="tooltip">Quick View</span>
//                                     </a>
//                                 </div>
//                             </div>
//                             <div class="card-product-info">
//                                 <a href="product-detail.html" class="title link">Oversized Printed T-shirt</a>
//                                 <span class="price">$10.00</span>
//                             </div>
//                         </div>
//                         {/* <!-- card product 4 --> */}
//                         <div class="card-product">
//                             <div class="card-product-wrapper">
//                                 <a href="product-detail.html" class="product-img">
//                                     <img class="lazyload img-product" data-src="assets/images/products/white-2.jpg" src="assets/images/products/white-2.jpg" alt="image-product" />
//                                     <img class="lazyload img-hover" data-src="assets/images/products/pink-1.jpg" src="assets/images/products/pink-1.jpg" alt="image-product" />
//                                 </a>
//                                 <div class="list-product-btn">
//                                     <a href="#quick_add" data-bs-toggle="modal" class="box-icon bg_white quick-add tf-btn-loading">
//                                         <span class="icon icon-bag"></span>
//                                         <span class="tooltip">Quick Add</span>
//                                     </a>
//                                     <a href="javascript:void(0);" class="box-icon bg_white wishlist btn-icon-action">
//                                         <span class="icon icon-heart"></span>
//                                         <span class="tooltip">Add to Wishlist</span>
//                                         <span class="icon icon-delete"></span>
//                                     </a>
//                                     <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" class="box-icon bg_white compare btn-icon-action">
//                                         <span class="icon icon-compare"></span>
//                                         <span class="tooltip">Add to Compare</span>
//                                         <span class="icon icon-check"></span>
//                                     </a>
//                                     <a href="#quick_view" data-bs-toggle="modal" class="box-icon bg_white quickview tf-btn-loading">
//                                         <span class="icon icon-view"></span>
//                                         <span class="tooltip">Quick View</span>
//                                     </a>
//                                 </div>
//                                 <div class="size-list">
//                                     <span>S</span>
//                                     <span>M</span>
//                                     <span>L</span>
//                                     <span>XL</span>
//                                 </div>
//                             </div>
//                             <div class="card-product-info">
//                                 <a href="product-detail.html" class="title">Oversized Printed T-shirt</a>
//                                 <span class="price">$16.95</span>
//                                 <ul class="list-color-product">
//                                     <li class="list-color-item color-swatch active">
//                                         <span class="tooltip">White</span>
//                                         <span class="swatch-value bg_white"></span>
//                                         <img class="lazyload" data-src="assets/images/products/white-2.jpg" src="assets/images/products/white-2.jpg" alt="image-product" />
//                                     </li>
//                                     <li class="list-color-item color-swatch">
//                                         <span class="tooltip">Pink</span>
//                                         <span class="swatch-value bg_purple"></span>
//                                         <img class="lazyload" data-src="assets/images/products/pink-1.jpg" src="assets/images/products/pink-1.jpg" alt="image-product" />
//                                     </li>
//                                     <li class="list-color-item color-swatch">
//                                         <span class="tooltip">Black</span>
//                                         <span class="swatch-value bg_dark"></span>
//                                         <img class="lazyload" data-src="assets/images/products/black-2.jpg" src="assets/images/products/black-2.jpg" alt="image-product" />
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                         {/* <!-- card product 5 --> */}
//                         <div class="card-product">
//                             <div class="card-product-wrapper">
//                                 <a href="product-detail.html" class="product-img">
//                                     <img class="lazyload img-product" data-src="assets/images/products/brown-2.jpg" src="assets/images/products/brown-2.jpg" alt="image-product" />
//                                     <img class="lazyload img-hover" data-src="assets/images/products/brown-3.jpg" src="assets/images/products/brown-3.jpg" alt="image-product" />
//                                 </a>
//                                 <div class="size-list">
//                                     <span>S</span>
//                                     <span>M</span>
//                                     <span>L</span>
//                                     <span>XL</span>
//                                 </div>
//                                 <div class="list-product-btn">
//                                     <a href="#quick_add" data-bs-toggle="modal" class="box-icon bg_white quick-add tf-btn-loading">
//                                         <span class="icon icon-bag"></span>
//                                         <span class="tooltip">Quick Add</span>
//                                     </a>
//                                     <a href="javascript:void(0);" class="box-icon bg_white wishlist btn-icon-action">
//                                         <span class="icon icon-heart"></span>
//                                         <span class="tooltip">Add to Wishlist</span>
//                                         <span class="icon icon-delete"></span>
//                                     </a>
//                                     <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" class="box-icon bg_white compare btn-icon-action">
//                                         <span class="icon icon-compare"></span>
//                                         <span class="tooltip">Add to Compare</span>
//                                         <span class="icon icon-check"></span>
//                                     </a>
//                                     <a href="#quick_view" data-bs-toggle="modal" class="box-icon bg_white quickview tf-btn-loading">
//                                         <span class="icon icon-view"></span>
//                                         <span class="tooltip">Quick View</span>
//                                     </a>
//                                 </div>
//                             </div>
//                             <div class="card-product-info">
//                                 <a href="product-detail.html" class="title link">V-neck linen T-shirt</a>
//                                 <span class="price">$114.95</span>
//                                 <ul class="list-color-product">
//                                     <li class="list-color-item color-swatch active">
//                                         <span class="tooltip">Brown</span>
//                                         <span class="swatch-value bg_brown"></span>
//                                         <img class="lazyload" data-src="assets/images/products/brown-2.jpg" src="assets/images/products/brown-2.jpg" alt="image-product" />
//                                     </li>
//                                     <li class="list-color-item color-swatch">
//                                         <span class="tooltip">White</span>
//                                         <span class="swatch-value bg_white"></span>
//                                         <img class="lazyload" data-src="assets/images/products/white-5.jpg" src="assets/images/products/white-5.jpg" alt="image-product" />
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                         {/* <!-- card product 6 --> */}
//                         <div class="card-product">
//                             <div class="card-product-wrapper">
//                                 <a href="product-detail.html" class="product-img">
//                                     <img class="lazyload img-product" data-src="assets/images/products/light-green-1.jpg" src="assets/images/products/light-green-1.jpg" alt="image-product" />
//                                     <img class="lazyload img-hover" data-src="assets/images/products/light-green-2.jpg" src="assets/images/products/light-green-2.jpg" alt="image-product" />
//                                 </a>
//                                 <div class="list-product-btn absolute-2">
//                                     <a href="#quick_add" data-bs-toggle="modal" class="box-icon bg_white quick-add tf-btn-loading">
//                                         <span class="icon icon-bag"></span>
//                                         <span class="tooltip">Quick Add</span>
//                                     </a>
//                                     <a href="javascript:void(0);" class="box-icon bg_white wishlist btn-icon-action">
//                                         <span class="icon icon-heart"></span>
//                                         <span class="tooltip">Add to Wishlist</span>
//                                         <span class="icon icon-delete"></span>
//                                     </a>
//                                     <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" class="box-icon bg_white compare btn-icon-action">
//                                         <span class="icon icon-compare"></span>
//                                         <span class="tooltip">Add to Compare</span>
//                                         <span class="icon icon-check"></span>
//                                     </a>
//                                     <a href="#quick_view" data-bs-toggle="modal" class="box-icon bg_white quickview tf-btn-loading">
//                                         <span class="icon icon-view"></span>
//                                         <span class="tooltip">Quick View</span>
//                                     </a>
//                                 </div>
//                             </div>
//                             <div class="card-product-info">
//                                 <a href="product-detail.html" class="title link">Loose Fit Sweatshirt</a>
//                                 <span class="price">$10.00</span>
//                                 <ul class="list-color-product">
//                                     <li class="list-color-item color-swatch active">
//                                         <span class="tooltip">Light Green</span>
//                                         <span class="swatch-value bg_light-green"></span>
//                                         <img class="lazyload" data-src="assets/images/products/light-green-1.jpg" src="assets/images/products/light-green-1.jpg" alt="image-product" />
//                                     </li>
//                                     <li class="list-color-item color-swatch">
//                                         <span class="tooltip">Black</span>
//                                         <span class="swatch-value bg_dark"></span>
//                                         <img class="lazyload" data-src="assets/images/products/black-3.jpg" src="assets/images/products/black-3.jpg" alt="image-product" />
//                                     </li>
//                                     <li class="list-color-item color-swatch">
//                                         <span class="tooltip">Blue</span>
//                                         <span class="swatch-value bg_blue-2"></span>
//                                         <img class="lazyload" data-src="assets/images/products/blue.jpg" src="assets/images/products/blue.jpg" alt="image-product" />
//                                     </li>
//                                     <li class="list-color-item color-swatch">
//                                         <span class="tooltip">Dark Blue</span>
//                                         <span class="swatch-value bg_dark-blue"></span>
//                                         <img class="lazyload" data-src="assets/images/products/dark-blue.jpg" src="assets/images/products/dark-blue.jpg" alt="image-product" />
//                                     </li>
//                                     <li class="list-color-item color-swatch">
//                                         <span class="tooltip">White</span>
//                                         <span class="swatch-value bg_white"></span>
//                                         <img class="lazyload" data-src="assets/images/products/white-6.jpg" src="assets/images/products/white-6.jpg" alt="image-product" />
//                                     </li>
//                                     <li class="list-color-item color-swatch">
//                                         <span class="tooltip">Light Grey</span>
//                                         <span class="swatch-value bg_light-grey"></span>
//                                         <img class="lazyload" data-src="assets/images/products/light-grey.jpg" src="assets/images/products/light-grey.jpg" alt="image-product" />
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>

//                     </div>


//                     <Pagination/>


//                 </div>
//             </section>


//             <Filter />

//         </>
//     )
// }

// export default Shop




































































// import React from 'react'
// import Filter from './mini-component/Filter'
// import Featured from './mini-component/Featured'
// import Pagination from './mini-component/Pagination'

// function Shop() {
//     return (
//         <>



//             <section class="flat-spacing-2">
//                 <div class="container">
//                     <div class="tf-shop-control grid-3 align-items-center">
//                         <div class="tf-control-filter">
//                             <a href="#filterShop" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" class="tf-btn-filter"><span class="icon icon-filter"></span><span class="text">Filter</span></a>
//                         </div>


//                         <ul class="tf-control-layout d-flex justify-content-center">
//                             <li class="tf-view-layout-switch sw-layout-2" data-value-grid="grid-2">
//                                 <div class="item"><span class="icon icon-grid-2"></span></div>
//                             </li>
//                             <li class="tf-view-layout-switch sw-layout-3" data-value-grid="grid-3">
//                                 <div class="item"><span class="icon icon-grid-3"></span></div>
//                             </li>
//                             <li class="tf-view-layout-switch sw-layout-4 active" data-value-grid="grid-4">
//                                 <div class="item"><span class="icon icon-grid-4"></span></div>
//                             </li>
//                             <li class="tf-view-layout-switch sw-layout-5" data-value-grid="grid-5">
//                                 <div class="item"><span class="icon icon-grid-5"></span></div>
//                             </li>
//                             <li class="tf-view-layout-switch sw-layout-6" data-value-grid="grid-6">
//                                 <div class="item"><span class="icon icon-grid-6"></span></div>
//                             </li>
//                         </ul>

//                         <Featured />



//                     </div>
//                     <div class="grid-layout wrapper-shop" data-grid="grid-4">
//                         {/* {/* <!-- card product 1 --> */}
//                         <div class="card-product">
//                             <div class="card-product-wrapper">
//                                 <a href="product-detail.html" class="product-img">
//                                     <img class="lazyload img-product" data-src="assets/images/products/orange-1.jpg" src="assets/images/products/orange-1.jpg" alt="image-product" />
//                                     <img class="lazyload img-hover" data-src="assets/images/products/white-1.jpg" src="assets/images/products/white-1.jpg" alt="image-product" />
//                                 </a>
//                                 <div class="list-product-btn">
//                                     <a href="#quick_add" data-bs-toggle="modal" class="box-icon bg_white quick-add tf-btn-loading">
//                                         <span class="icon icon-bag"></span>
//                                         <span class="tooltip">Quick Add</span>
//                                     </a>
//                                     <a href="javascript:void(0);" class="box-icon bg_white wishlist btn-icon-action">
//                                         <span class="icon icon-heart"></span>
//                                         <span class="tooltip">Add to Wishlist</span>
//                                         <span class="icon icon-delete"></span>
//                                     </a>
//                                     <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" class="box-icon bg_white compare btn-icon-action">
//                                         <span class="icon icon-compare"></span>
//                                         <span class="tooltip">Add to Compare</span>
//                                         <span class="icon icon-check"></span>
//                                     </a>
//                                     <a href="#quick_view" data-bs-toggle="modal" class="box-icon bg_white quickview tf-btn-loading">
//                                         <span class="icon icon-view"></span>
//                                         <span class="tooltip">Quick View</span>
//                                     </a>
//                                 </div>
//                             </div>
//                             <div class="card-product-info">
//                                 <a href="product-detail.html" class="title link">Ribbed Tank Top</a>
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
                       
//                         {/* <!-- card product 3 --> */}
//                         <div class="card-product">
//                             <div class="card-product-wrapper">
//                                 <a href="product-detail.html" class="product-img">
//                                     <img class="lazyload img-product" data-src="assets/images/products/light-green-1.jpg" src="assets/images/products/light-green-1.jpg" alt="image-product" />
//                                     <img class="lazyload img-hover" data-src="assets/images/products/light-green-2.jpg" src="assets/images/products/light-green-2.jpg" alt="image-product" />
//                                 </a>
//                                 <div class="list-product-btn absolute-2">
//                                     <a href="#quick_add" data-bs-toggle="modal" class="box-icon bg_white quick-add tf-btn-loading">
//                                         <span class="icon icon-bag"></span>
//                                         <span class="tooltip">Quick Add</span>
//                                     </a>
//                                     <a href="javascript:void(0);" class="box-icon bg_white wishlist btn-icon-action">
//                                         <span class="icon icon-heart"></span>
//                                         <span class="tooltip">Add to Wishlist</span>
//                                         <span class="icon icon-delete"></span>
//                                     </a>
//                                     <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" class="box-icon bg_white compare btn-icon-action">
//                                         <span class="icon icon-compare"></span>
//                                         <span class="tooltip">Add to Compare</span>
//                                         <span class="icon icon-check"></span>
//                                     </a>
//                                     <a href="#quick_view" data-bs-toggle="modal" class="box-icon bg_white quickview tf-btn-loading">
//                                         <span class="icon icon-view"></span>
//                                         <span class="tooltip">Quick View</span>
//                                     </a>
//                                 </div>
//                             </div>
//                             <div class="card-product-info">
//                                 <a href="product-detail.html" class="title link">Loose Fit Sweatshirt</a>
//                                 <span class="price">$10.00</span>
//                                 <ul class="list-color-product">
//                                     <li class="list-color-item color-swatch active">
//                                         <span class="tooltip">Light Green</span>
//                                         <span class="swatch-value bg_light-green"></span>
//                                         <img class="lazyload" data-src="assets/images/products/light-green-1.jpg" src="assets/images/products/light-green-1.jpg" alt="image-product" />
//                                     </li>
//                                     <li class="list-color-item color-swatch">
//                                         <span class="tooltip">Black</span>
//                                         <span class="swatch-value bg_dark"></span>
//                                         <img class="lazyload" data-src="assets/images/products/black-3.jpg" src="assets/images/products/black-3.jpg" alt="image-product" />
//                                     </li>
                                   
//                                     <li class="list-color-item color-swatch">
//                                         <span class="tooltip">Light Grey</span>
//                                         <span class="swatch-value bg_light-grey"></span>
//                                         <img class="lazyload" data-src="assets/images/products/light-grey.jpg" src="assets/images/products/light-grey.jpg" alt="image-product" />
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>

//                     </div>


//                     <Pagination/>


//                 </div>
//             </section>


//             <Filter />

//         </>
//     )
// }

// export default Shop



















import React, { useState, useEffect } from 'react';

import Filter from './mini-component/Filter';
import Pagination from './mini-component/Pagination';
import CustomSelect from './mini-component/CustomSelect';

function Shop() {
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

                        <CustomSelect/>

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
        </>
    );
}

export default Shop;
