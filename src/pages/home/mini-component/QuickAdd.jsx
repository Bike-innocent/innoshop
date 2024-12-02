


// import React from 'react'

// function QuickAdd() {
//   return (
//     <>
       
//     <div class="modal fade modalDemo" id="quick_add">
//         <div class="modal-dialog modal-dialog-centered">
//             <div class="modal-content">
//                 <div class="header">
//                     <span class="icon-close icon-close-popup" data-bs-dismiss="modal"></span>
//                 </div>
//                 <div class="wrap">
//                     <div class="tf-product-info-item">
//                         <div class="image">
//                             <img src="assets/images/products/orange-1.jpg" alt=""/>
//                         </div>
//                         <div class="content">
//                             <a href="product-detail.html">Ribbed Tank Top</a>
//                             <div class="tf-product-info-price">
                                
//                                 <div class="price">$18.00</div>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="tf-product-info-variant-picker mb_15">
//                         <div class="variant-picker-item">
//                             <div class="variant-picker-label">
//                                 Color: <span class="fw-6 variant-picker-label-value">Orange</span>
//                             </div>
//                             <div class="variant-picker-values">
//                                 <input id="values-orange" type="radio" name="color" checked/>
//                                 <label class="hover-tooltip radius-60" for="values-orange" data-value="Orange">
//                                     <span class="btn-checkbox bg-color-orange"></span>
//                                     <span class="tooltip">Orange</span>
//                                 </label>
                               
//                             </div>
//                         </div>
//                         <div class="variant-picker-item">
//                             <div class="variant-picker-label">
//                                 Size: <span class="fw-6 variant-picker-label-value">S</span>
//                             </div>
//                             <div class="variant-picker-values">
//                                 <input type="radio" name="size" id="values-s" checked/>
//                                 <label class="style-text" for="values-s" data-value="S">
//                                     <p>S</p>
//                                 </label>
                               
//                             </div>
//                         </div>
//                     </div>
//                     <div class="tf-product-info-quantity mb_15">
//                         <div class="quantity-title fw-6">Quantity</div>
//                         <div class="wg-quantity">
//                             <span class="btn-quantity minus-btn">-</span>
//                             <input type="text" name="number" value="1"/>
//                             <span class="btn-quantity plus-btn">+</span>
//                         </div>
//                     </div>
//                     <div class="tf-product-info-buy-button">
//                         <form class="">
//                             <a href="#" class="tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn "><span>Add to cart -&nbsp;</span><span class="tf-qty-price">$18.00</span></a>
//                             <div class="tf-product-btn-wishlist btn-icon-action">
//                                 <i class="icon-heart"></i>
//                                 <i class="icon-delete"></i>
//                             </div>
//                             <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" class="tf-product-btn-wishlist box-icon bg_white compare btn-icon-action">
//                                 <span class="icon icon-compare"></span>
//                                 <span class="icon icon-check"></span>
//                             </a>
//                             <div class="w-100">
//                                 <a href="#" class="btns-full">Buy with <img src="assets/images/payments/paypal.png" alt=""/></a>
//                                 <a href="#" class="payment-more-option">More payment options</a>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
   
//     </>
//   )
// }

// export default QuickAdd







import React from 'react';

function QuickAdd({ product }) {
    if (!product) return null;

    return (
        <div className="modal fade modalDemo" id="quick_add">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="header">
                        <span className="icon-close icon-close-popup" data-bs-dismiss="modal"></span>
                    </div>
                    <div className="wrap">
                        <div className="tf-product-info-item">
                            <div className="image">
                                <img src={product.primary_image?.image_path} alt={product.name} />
                            </div>
                            <div className="content">
                                <a href={`/product/${product.slug}`}>{product.name}</a>
                                <div className="tf-product-info-price">
                                    <div className="price">${product.price}</div>
                                </div>
                            </div>
                        </div>
                        {/* Add quantity and purchase options here */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuickAdd;
