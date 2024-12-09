


// import React from 'react';

// function QuickAdd({ product }) {
//     if (!product) return null;

//     return (
//         <div className="modal fade modalDemo" id="quick_add">
//             <div className="modal-dialog modal-dialog-centered">
//                 <div className="modal-content">
//                     <div className="header">
//                         <span className="icon-close icon-close-popup" data-bs-dismiss="modal"></span>
//                     </div>
//                     <div className="wrap">
//                         <div className="tf-product-info-item">
//                             <div className="image">
//                                 <img src={product.primary_image?.image_path} alt={product.name} />
//                             </div>
//                             <div className="content">
//                                 <a href={`/product/${product.slug}`}>{product.name}</a>
//                                 <div className="tf-product-info-price">
//                                     <div className="price">${product.price}</div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Variant Picker Section */}
//                         <div className="tf-product-info-variant-picker mb_15">
//                             <div className="variant-picker-item">
//                                 <div className="variant-picker-label">
//                                     Color: <span className="fw-6 variant-picker-label-value">{product.colour.name}</span>
//                                 </div>
//                                 <div className="variant-picker-values">
//                                     <input id="values-orange" type="radio" name="color" defaultChecked />
//                                     <label className="hover-tooltip radius-60" >
//                                         <span className="btn-checkbox "  style={{ backgroundColor: product.colour.hex_code }}></span>
//                                         <span className="tooltip">{product.colour.name}</span>
//                                     </label>
//                                 </div>
//                             </div>
//                             <div className="variant-picker-item">
//                                 <div className="variant-picker-label">
//                                     Size: <span className="fw-6 variant-picker-label-value">{product.size.name}</span>
//                                 </div>
//                                 <div className="variant-picker-values">
//                                     <input type="radio" name="size" id="values-s" defaultChecked />
//                                     <label className="style-text" htmlFor="values-s" data-value="S">
//                                         <p>{product.size.name}</p>
//                                     </label>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Quantity Selector */}
//                         <div className="tf-product-info-quantity mb_15">
//                             <div className="quantity-title fw-6">Quantity</div>
//                             <div className="wg-quantity">
//                                 <span className="btn-quantity minus-btn">-</span>
//                                 <input type="text" name="number" defaultValue="1" />
//                                 <span className="btn-quantity plus-btn">+</span>
//                             </div>
//                         </div>

//                         {/* Action Buttons */}
//                         <div className="tf-product-info-buy-button">
//                             <form>
//                                 <a href="#" className="tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn">
//                                     <span>Add to cart -&nbsp;</span>
//                                     <span className="tf-qty-price">${product.price}</span>
//                                 </a>
//                                 <div className="tf-product-btn-wishlist btn-icon-action">
//                                     <i className="icon-heart"></i>
//                                     <i className="icon-delete"></i>
//                                 </div>
//                                 <a
//                                     href="#compare"
//                                     data-bs-toggle="offcanvas"
//                                     aria-controls="offcanvasLeft"
//                                     className="tf-product-btn-wishlist box-icon bg_white compare btn-icon-action"
//                                 >
//                                     <span className="icon icon-compare"></span>
//                                     <span className="icon icon-check"></span>
//                                 </a>
//                                 <div className="w-100">
//                                     <a href="#" className="btns-full">
//                                         Buy with <img src="assets/images/payments/paypal.png" alt="PayPal" />
//                                     </a>
//                                     <a href="#" className="payment-more-option">
//                                         More payment options
//                                     </a>
//                                 </div>
//                             </form>
//                         </div>


//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default QuickAdd;



























import React, { useState } from "react";
import axios from "../../../axiosInstance"; // Axios instance for API calls

function QuickAdd({ product }) {
  const [quantity, setQuantity] = useState(1);
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  if (!product) return null;

  // Handle Add to Cart
  const handleAddToCart = async () => {
    if (isAuthenticated) {
      try {
        await axios.post("/cart", {
          product_id: product.id,
          quantity,
        });
        alert("Product added to cart!");
        window.dispatchEvent(new Event("cartUpdated"));
      } catch (error) {
        console.error("Error adding product to cart", error);
        alert("Failed to add product to cart.");
      }
    } else {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      const newProduct = {
        id: product.id,
        name: product.name,
        image: product.primary_image?.image_path,
        price: product.price,
        color: product.colour.name,
        size: product.size.name,
        quantity,
      };

      const existingProductIndex = cart.findIndex((item) => item.id === product.id);
      if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += quantity;
      } else {
        cart.push(newProduct);
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      localStorage.setItem("cartCount", cart.length);
      window.dispatchEvent(new Event("cartUpdated"));
      alert("Product added to cart!");
    }
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="modal fade modalDemo" id="quick_add">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="header">
            <span className="icon-close icon-close-popup" data-bs-dismiss="modal"></span>
          </div>
          <div className="wrap">
            {/* Product Info */}
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

            {/* Variant Picker Section */}
            <div className="tf-product-info-variant-picker mb_15">
              <div className="variant-picker-item">
                <div className="variant-picker-label">
                  Color: <span className="fw-6 variant-picker-label-value">{product.colour.name}</span>
                </div>
                <div className="variant-picker-values">
                  <input id="values-orange" type="radio" name="color" defaultChecked />
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
                <div className="variant-picker-label">
                  Size: <span className="fw-6 variant-picker-label-value">{product.size.name}</span>
                </div>
                <div className="variant-picker-values">
                  <input type="radio" name="size" id="values-s" defaultChecked />
                  <label className="style-text" htmlFor="values-s" data-value="S">
                    <p>{product.size.name}</p>
                  </label>
                </div>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="tf-product-info-quantity mb_15">
              <div className="quantity-title fw-6">Quantity</div>
              <div className="wg-quantity">
                <span className="btn-quantity minus-btn" onClick={decrementQuantity}>
                  -
                </span>
                <input type="text" readOnly value={quantity} />
                <span className="btn-quantity plus-btn" onClick={incrementQuantity}>
                  +
                </span>
              </div>
            </div>

            <div className="tf-product-info-buy-button">
              <form>
                <button
                  onClick={handleAddToCart}
                  className="tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn"
                >
                  <span>Add to cart -&nbsp;</span>
                  <span className="tf-qty-price">${(product.price * quantity).toFixed(2)}</span>
                </button>


                <div className="tf-product-btn-wishlist btn-icon-action">
                  <i className="icon-heart"></i>
                  <i className="icon-delete"></i>
                </div>
                <a
                  href="#compare"
                  data-bs-toggle="offcanvas"
                  aria-controls="offcanvasLeft"
                  className="tf-product-btn-wishlist box-icon bg_white compare btn-icon-action"
                >
                  <span className="icon icon-compare"></span>
                  <span className="icon icon-check"></span>
                </a>
                <div className="w-100">
                  <a href="#" className="btns-full">
                    Buy with <img src="assets/images/payments/paypal.png" alt="PayPal" />
                  </a>
                  <a href="#" className="payment-more-option">
                    More payment options
                  </a>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickAdd;



