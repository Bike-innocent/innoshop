// import React from 'react'
// import FindSize from './FindSize'

// function QuickView() {
//   return (
//     <>
      
   
//     <div class="modal fade modalDemo" id="quick_view">
//         <div class="modal-dialog modal-dialog-centered">
//             <div class="modal-content">
//                 <div class="header">
//                     <span class="icon-close icon-close-popup" data-bs-dismiss="modal"></span>
//                 </div>
//                 <div class="wrap">
//                     <div class="tf-product-media-wrap">
//                         <div class="swiper tf-single-slide">
//                             <div class="swiper-wrapper" >
//                                 <div class="swiper-slide">
//                                     <div class="item">
//                                         <img src="assets/images/products/orange-1.jpg" alt=""/>
//                                     </div>
//                                 </div>
//                                 <div class="swiper-slide">
//                                     <div class="item">
//                                         <img src="assets/images/products/pink-1.jpg" alt=""/>
//                                     </div>
//                                 </div>
//                             </div>
//                              <div class="swiper-button-next button-style-arrow single-slide-prev"></div>
//                             <div class="swiper-button-prev button-style-arrow single-slide-next"></div> 
//                         </div>
//                     </div>
//                     <div class="tf-product-info-wrap position-relative">
//                         <div class="tf-product-info-list">
//                             <div class="tf-product-info-title">
//                                 <h5><a class="link" href="product-detail.html">Ribbed Tank Top</a></h5>
//                             </div>
//                             <div class="tf-product-info-badges">
//                                 <div class="badges text-uppercase">Best seller</div>
//                                 <div class="product-status-content">
//                                     <i class="icon-lightning"></i>
//                                     <p class="fw-6">Selling fast! 48 people have this in their carts.</p>
//                                 </div>
//                             </div>
//                             <div class="tf-product-info-price">
//                                 <div class="price">$18.00</div>
//                             </div>
//                             <div class="tf-product-description">
//                                 <p>Nunc arcu faucibus a et lorem eu a mauris adipiscing conubia ac aptent ligula facilisis a auctor habitant parturient a a.Interdum fermentum.</p>
//                             </div>
//                             <div class="tf-product-info-variant-picker">
//                                 <div class="variant-picker-item">
//                                     <div class="variant-picker-label">
//                                         Color: <span class="fw-6 variant-picker-label-value">Orange</span>
//                                     </div>
//                                     <div class="variant-picker-values">
//                                         <input id="values-orange-1" type="radio" name="color-1" checked/>
//                                         <label class="hover-tooltip radius-60" for="values-orange-1" data-value="Orange">
//                                             <span class="btn-checkbox bg-color-orange"></span>
//                                             <span class="tooltip">Orange</span>
//                                         </label>
                                      
//                                     </div>
//                                 </div>
//                                 <div class="variant-picker-item">
//                                     <div class="d-flex justify-content-between align-items-center">
//                                         <div class="variant-picker-label">
//                                             Size: <span class="fw-6 variant-picker-label-value">S</span>
//                                         </div>
//                                         <div class="find-size btn-choose-size fw-6">Find your size</div>
//                                     </div>
//                                     <div class="variant-picker-values">
//                                         <input type="radio" name="size-1" id="values-s-1" checked/>
//                                         <label class="style-text" for="values-s-1" data-value="S">
//                                             <p>S</p>
//                                         </label>
                                        
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="tf-product-info-quantity">
//                                 <div class="quantity-title fw-6">Quantity</div>
//                                 <div class="wg-quantity">
//                                     <span class="btn-quantity minus-btn">-</span>
//                                     <input type="text" name="number" value="1"/>
//                                     <span class="btn-quantity plus-btn">+</span>
//                                 </div>
//                             </div>
//                             <div class="tf-product-info-buy-button">
//                                 <form class="">
//                                     <a href="#" class="tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn "><span>Add to cart -&nbsp;</span><span class="tf-qty-price">$8.00</span></a>
//                                     <a href="javascript:void(0);" class="tf-product-btn-wishlist hover-tooltip box-icon bg_white wishlist btn-icon-action">
//                                         <span class="icon icon-heart"></span>
//                                         <span class="tooltip">Add to Wishlist</span>
//                                         <span class="icon icon-delete"></span>
//                                     </a>
//                                     <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" class="tf-product-btn-wishlist hover-tooltip box-icon bg_white compare btn-icon-action">
//                                         <span class="icon icon-compare"></span>
//                                         <span class="tooltip">Add to Compare</span>
//                                         <span class="icon icon-check"></span>
//                                     </a>
//                                     <div class="w-100">
//                                         <a href="#" class="btns-full">Buy with <img src="assets/images/payments/paypal.png" alt=""/></a>
//                                         <a href="#" class="payment-more-option">More payment options</a>
//                                     </div>
//                                 </form>
//                             </div>
//                             <div>
//                                 <a href="product-detail.html" class="tf-btn fw-6 btn-line">View full details<i class="icon icon-arrow1-top-left"></i></a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>

//     <FindSize/>
   
//     </>
//   )
// }

// export default QuickView































// import React, { useState } from 'react';
// import FindSize from './FindSize';
// import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

// function QuickView({ product }) {
//     const [quantity, setQuantity] = useState(1);

//     if (!product) return null;

//     const increaseQuantity = () => setQuantity((prev) => prev + 1);
//     const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

//     return (
//         <div className="modal fade modalDemo" id="quick_view">
//             <div className="modal-dialog modal-dialog-centered">
//                 <div className="modal-content">
//                     <div className="header">
//                         <span className="icon-close icon-close-popup" data-bs-dismiss="modal"></span>
//                     </div>
//                     <div className="wrap">
//                         <div className="tf-product-media-wrap">
//                             <div className="swiper tf-single-slide">
//                                 <div className="swiper-wrapper">
//                                     {product.images.map((image, index) => (
//                                         <div className="swiper-slide" key={index}>
//                                             <div className="item">
//                                                 <img src={image.image_path} alt={product.name} />
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <div className="swiper-button-next button-style-arrow single-slide-next"></div>
//                                 <div className="swiper-button-prev button-style-arrow single-slide-prev"></div>
//                             </div>
//                         </div>

//                         <div className="tf-product-info-wrap position-relative">
//                             <div className="tf-product-info-list">
//                                 <div className="tf-product-info-title">
//                                     <h5>{product.name}</h5>
//                                 </div>
//                                 <div className="tf-product-info-badges">
//                                     <div className="badges text-uppercase">Best Seller</div>
//                                     <div className="product-status-content">
//                                         <i className="icon-lightning"></i>
//                                         <p className="fw-6">Selling fast! {Math.floor(Math.random() * 50) + 1} people have this in their carts.</p>
//                                     </div>
//                                 </div>
//                                 <div className="tf-product-info-price">
//                                     <div className="price">${product.price}</div>
//                                 </div>
//                                 <div className="tf-product-description">
//                                     <p>{product.description}</p>
//                                 </div>

//                                 <div className="tf-product-info-variant-picker">
//                                     <div className="variant-picker-item">
//                                         <div className="variant-picker-label">
//                                             Color: <span className="fw-6 variant-picker-label-value">{product.colour.name}</span>
//                                         </div>
//                                         <div className="variant-picker-values">
//                                             <label className="hover-tooltip radius-60">
//                                                 <span
//                                                     className="btn-checkbox"
//                                                     style={{ backgroundColor: product.colour.hex_code }}
//                                                 ></span>
//                                                 <span className="tooltip">{product.colour.name}</span>
//                                             </label>
//                                         </div>
//                                     </div>

//                                     <div className="variant-picker-item">
//                                         <div className="d-flex justify-content-between align-items-center">
//                                             <div className="variant-picker-label">
//                                                 Size: <span className="fw-6 variant-picker-label-value">M</span>
//                                             </div>
//                                             <FindSize />
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="tf-product-info-quantity">
//                                     <div className="quantity-title fw-6">Quantity</div>
//                                     <div className="wg-quantity">
//                                         <button className="btn-quantity minus-btn" onClick={decreaseQuantity}>
//                                             <AiOutlineMinus />
//                                         </button>
//                                         <input type="text" value={quantity} readOnly />
//                                         <button className="btn-quantity plus-btn" onClick={increaseQuantity}>
//                                             <AiOutlinePlus />
//                                         </button>
//                                     </div>
//                                 </div>

//                                 <div className="tf-product-info-buy-button">
//                                     <button className="tf-btn btn-fill justify-content-center fw-6 fs-16">
//                                         Add to Cart
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default QuickView;














import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import FindSize from './FindSize';

function QuickView({ product }) {
    const [quantity, setQuantity] = useState(1);
    const [currentImageIndex, setCurrentImageIndex] = useState(0); // Track the current image index

    if (!product) return null;

    const increaseQuantity = () => setQuantity((prev) => prev + 1);
    const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex < product.images.length - 1 ? prevIndex + 1 : 0 // Loop back to the first image
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex > 0 ? prevIndex - 1 : product.images.length - 1 // Loop back to the last image
        );
    };

    return (
        <div className="modal fade modalDemo" id="quick_view">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="header">
                        <span className="icon-close icon-close-popup" data-bs-dismiss="modal"></span>
                    </div>
                    <div className="wrap">
                        <div className="tf-product-media-wrap relative">
                            <div className="image-wrapper">
                                <img
                                    src={product.images[currentImageIndex]?.image_path}
                                    alt={product.name}
                                    className="w-full object-cover"
                                />
                            </div>
                            <button
                                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                                onClick={prevImage}
                            >
                                <AiOutlineLeft size={24} />
                            </button>
                            <button
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                                onClick={nextImage}
                            >
                                <AiOutlineRight size={24} />
                            </button>
                        </div>

                        <div className="tf-product-info-wrap position-relative">
                            <div className="tf-product-info-list">
                                <div className="tf-product-info-title">
                                    <h5>{product.name}</h5>
                                </div>
                                <div className="tf-product-info-badges">
                                    <div className="badges text-uppercase">Best Seller</div>
                                    <div className="product-status-content">
                                        <i className="icon-lightning"></i>
                                        <p className="fw-6">Selling fast! {Math.floor(Math.random() * 50) + 1} people have this in their carts.</p>
                                    </div>
                                </div>
                                <div className="tf-product-info-price">
                                    <div className="price">${product.price}</div>
                                </div>
                                <div className="tf-product-description">
                                    <p>{product.description}</p>
                                </div>

                                <div className="tf-product-info-variant-picker">
                                    <div className="variant-picker-item">
                                        <div className="variant-picker-label">
                                            Color: <span className="fw-6 variant-picker-label-value">{product.colour.name}</span>
                                        </div>
                                        <div className="variant-picker-values">
                                            <label className="hover-tooltip radius-60">
                                                <span
                                                    className="btn-checkbox"
                                                    style={{ backgroundColor: product.colour.hex_code }}
                                                ></span>
                                                <span className="tooltip">{product.colour.name}</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="variant-picker-item">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="variant-picker-label">
                                                Size: <span className="fw-6 variant-picker-label-value">M</span>
                                            </div>
                                            <FindSize />
                                        </div>
                                    </div>
                                </div>

                                <div className="tf-product-info-quantity">
                                    <div className="quantity-title fw-6">Quantity</div>
                                    <div className="wg-quantity">
                                        <button className="btn-quantity minus-btn" onClick={decreaseQuantity}>
                                            <AiOutlineMinus />
                                        </button>
                                        <input type="text" value={quantity} readOnly />
                                        <button className="btn-quantity plus-btn" onClick={increaseQuantity}>
                                            <AiOutlinePlus />
                                        </button>
                                    </div>
                                </div>

                                <div className="tf-product-info-buy-button">
                                    <button className="tf-btn btn-fill justify-content-center fw-6 fs-16">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuickView;
