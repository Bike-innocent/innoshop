// import React from 'react'

// function AddToCart({ product }) {
//   return (
//     <>
      
//       <div class="tf-product-info-quantity">
//                             <div class="quantity-title fw-6">Quantity</div>
//                             <div class="wg-quantity">
//                                 <span class="btn-quantity minus-btn">-</span>
//                                 <input type="text" name="number" value="1" />
//                                 <span class="btn-quantity plus-btn">+</span>
//                             </div>
//                         </div>
//                         <div class="tf-product-info-buy-button">
//                             <form class="">
//                                 <a href="#" class="tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn "><span>Add to cart -&nbsp;</span><span class="tf-qty-price">₦{product.price}</span></a>
//                                 <a href="javascript:void(0);" class="tf-product-btn-wishlist hover-tooltip box-icon bg_white wishlist btn-icon-action">
//                                     <span class="icon icon-heart"></span>
//                                     <span class="tooltip">Add to Wishlist</span>
//                                     <span class="icon icon-delete"></span>
//                                 </a>
//                                 <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" class="tf-product-btn-wishlist hover-tooltip box-icon bg_white compare btn-icon-action">
//                                     <span class="icon icon-compare"></span>
//                                     <span class="tooltip">Add to Compare</span>
//                                     <span class="icon icon-check"></span>
//                                 </a>
//                                 <div class="w-100">
//                                     <a href="#" class="btns-full">Buy with <img src="assets/images/payments/paypal.png" alt="" /></a>
//                                     <a href="#" class="payment-more-option">More payment options</a>
//                                 </div>
//                             </form>
//                         </div>

//     </>
//   )
// }

// export default AddToCart



























import React, { useState } from "react";
import axios from "../../../../axiosInstance"; // Axios instance for API calls
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useQueryClient } from "@tanstack/react-query"; // Import queryClient

function AddToCart({ product }) {
  const [quantity, setQuantity] = useState(1);
  const queryClient = useQueryClient(); // React Query's QueryClient
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  if (!product) return null; // Safeguard if no product exists

  const handleAddToCart = async (e) => {
    e.preventDefault();

    if (isAuthenticated) {
      // Logic for authenticated users
      try {
        // Post request to add product to cart
        await axios.post("/cart", {
          product_id: product.id,
          quantity,
        });

        toast.success("Product added to cart!", { position: "top-right", autoClose: 3000 });

        // Invalidate query cache to trigger re-fetch
        queryClient.invalidateQueries(["cart"]);
      } catch (error) {
        console.error("Error adding product to cart:", error);
        const errorMessage =
          error.response?.data?.message || "Failed to add product to cart.";
        toast.error(errorMessage, { position: "top-right" });
      }
    } else {
      // Logic for unauthenticated users (localStorage handling)
      try {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        const newProduct = {
          id: product.id,
          name: product.name,
          image: product.primary_image?.image_path,
          price: product.price,
          color: product.colour.name,
          size: product.size.name,
          slug: product.slug,
          quantity,
        };

        // Check if product already exists and update quantity
        const existingProductIndex = cart.findIndex((item) => item.id === product.id);
        if (existingProductIndex !== -1) {
          cart[existingProductIndex].quantity += quantity;
        } else {
          cart.push(newProduct);
        }

        // Update cart in local storage
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("cartCount", cart.length);

        // Dispatch a custom event to update cart count globally
        window.dispatchEvent(
          new CustomEvent("cartUpdated", { detail: { count: cart.length } })
        );

        toast.success("Product added to cart!", { position: "top-right", autoClose: 3000 });
      } catch (error) {
        console.error("Error updating local cart:", error);
        toast.error("Failed to update cart locally.", { position: "top-right" });
      }
    }
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <>
      <ToastContainer /> {/* Toast notifications */}
      <div className="tf-product-info-quantity mb-4">
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
            <span className="tf-qty-price">₦{(product.price * quantity).toFixed(2)}</span>
          </button>

          <a
            href="#"
            className="tf-product-btn-wishlist hover-tooltip box-icon bg_white wishlist btn-icon-action"
          >
            <span className="icon icon-heart"></span>
            <span className="tooltip">Add to Wishlist</span>
            <span className="icon icon-delete"></span>
          </a>

          <a
            href="#compare"
            data-bs-toggle="offcanvas"
            aria-controls="offcanvasLeft"
            className="tf-product-btn-wishlist hover-tooltip box-icon bg_white compare btn-icon-action"
          >
            <span className="icon icon-compare"></span>
            <span className="tooltip">Add to Compare</span>
            <span className="icon icon-check"></span>
          </a>

         



        </form>
      </div>
    </>
  );
}

export default AddToCart;












// <div className="w-100">
// <a href="#" className="btns-full">
//   Buy with <img src="assets/images/payments/paypal.png" alt="PayPal" />
// </a>
// <a href="#" className="payment-more-option">
//   More payment options
// </a>
// </div>