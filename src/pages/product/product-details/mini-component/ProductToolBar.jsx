// import React from 'react'

// function ProductToolBar({ product }) {
//     return (
//         <>

//             <div class="tf-sticky-btn-atc">
//                 <div class="container">
//                     <div class="tf-height-observer w-100 d-flex align-items-center">
//                         <div class="tf-sticky-atc-product d-flex align-items-center">
//                             <div class="tf-sticky-atc-img">
//                             <img className="lazyloaded" src={product.primary_image?.image_path} alt={product.name} />
                               
//                             </div>
//                             <div class="tf-sticky-atc-title fw-5 d-xl-block d-none">{product.name}</div>
//                         </div>
//                         <div class="tf-sticky-atc-infos">
//                             <form class="">
//                                 <div class="tf-sticky-atc-variant-price text-center">
//                                     <select class="tf-select">
//                                         <option selected="selected">Beige / S - ₦758.00</option>
//                                         <option>Beige / M - ₦83.00</option>
//                                         <option>Beige / L - ₦834.00</option>
//                                         <option>Beige / XL - ₦58.00</option>
//                                         <option>Black / S - ₦458.00</option>
//                                         <option>Black / M - ₦328.00</option>
//                                         <option>Black / L - ₦2338.00</option>
//                                         <option>Black / XL - ₦2348.00</option>
//                                         <option>Blue / S - ₦64358.00</option>
//                                         <option>Blue / M - ₦2458.00</option>
//                                         <option>Blue / L - ₦5678.00</option>
//                                         <option>Blue / XL - ₦7358.00</option>
//                                         <option>White / S - ₦768.00</option>
//                                         <option>White / M - ₦358.00</option>
//                                         <option>White / L - ₦328.00</option>
//                                         <option>White / XL - ₦268.00</option>
//                                     </select>
//                                 </div>
//                                 <div class="tf-sticky-atc-btns">
//                                     <div class="tf-product-info-quantity">
//                                         <div class="wg-quantity">
//                                             <span class="btn-quantity minus-btn">-</span>
//                                             <input type="text" name="number" value="1" />
//                                             <span class="btn-quantity plus-btn">+</span>
//                                         </div>
//                                     </div>
//                                     <a href="#" class="tf-btn btn-fill radius-3 justify-content-center fw-6 fs-14 flex-grow-1 animate-hover-btn ">Add to cart - ₦{product.price}</a>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default ProductToolBar













//     import React, { useState } from "react";
// import axios from "../../../../axiosInstance"; // Axios instance for API calls
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useQueryClient } from "@tanstack/react-query"; // Import queryClient

// function ProductToolBar({ product }) {
//   const [quantity, setQuantity] = useState(1);
//   const queryClient = useQueryClient(); // React Query's QueryClient
//   const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

//   if (!product) return null; // Safeguard if no product exists

//   const handleAddToCart = async (e) => {
//     e.preventDefault();

//     if (isAuthenticated) {
//       // Logic for authenticated users
//       try {
//         // Post request to add product to cart
//         await axios.post("/cart", {
//           product_id: product.id,
//           quantity,
//         });

//         toast.success("Product added to cart!", { position: "top-right", autoClose: 3000 });

//         // Invalidate query cache to trigger re-fetch
//         queryClient.invalidateQueries(["cart"]);
//       } catch (error) {
//         console.error("Error adding product to cart:", error);
//         const errorMessage =
//           error.response?.data?.message || "Failed to add product to cart.";
//         toast.error(errorMessage, { position: "top-right" });
//       }
//     } else {
//       // Logic for unauthenticated users (localStorage handling)
//       try {
//         const cart = JSON.parse(localStorage.getItem("cart")) || [];

//         const newProduct = {
//           id: product.id,
//           name: product.name,
//           image: product.primary_image?.image_path,
//           price: product.price,
//           color: product.colour.name,
//           size: product.size.name,
//           slug: product.slug,
//           quantity,
//         };

//         // Check if product already exists and update quantity
//         const existingProductIndex = cart.findIndex((item) => item.id === product.id);
//         if (existingProductIndex !== -1) {
//           cart[existingProductIndex].quantity += quantity;
//         } else {
//           cart.push(newProduct);
//         }

//         // Update cart in local storage
//         localStorage.setItem("cart", JSON.stringify(cart));
//         localStorage.setItem("cartCount", cart.length);

//         // Dispatch a custom event to update cart count globally
//         window.dispatchEvent(
//           new CustomEvent("cartUpdated", { detail: { count: cart.length } })
//         );

//         toast.success("Product added to cart!", { position: "top-right", autoClose: 3000 });
//       } catch (error) {
//         console.error("Error updating local cart:", error);
//         toast.error("Failed to update cart locally.", { position: "top-right" });
//       }
//     }
//   };

//   const incrementQuantity = () => setQuantity((prev) => prev + 1);
//   const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

//     return (
//         <>
//          <ToastContainer /> 

//             <div class="tf-sticky-btn-atc">
//                 <div class="container">
//                     <div class="tf-height-observer w-100 d-flex align-items-center">
//                         <div class="tf-sticky-atc-product d-flex align-items-center">
//                             <div class="tf-sticky-atc-img">
//                             <img className="lazyloaded" src={product.primary_image?.image_path} alt={product.name} />
                               
//                             </div>
//                             <div class="tf-sticky-atc-title fw-5 d-xl-block d-none">{product.name}</div>
//                         </div>
//                         <div class="tf-sticky-atc-infos">
//                             <form class="">
                               
//                                 <div class="tf-sticky-atc-btns">
//                                     <div class="tf-product-info-quantity">
//                                         <div class="wg-quantity">
//                                         <span className="btn-quantity minus-btn" onClick={decrementQuantity}>
//                                                 -
//                                             </span>
//                                             <input type="text" readOnly value={quantity} />
//                                             <span className="btn-quantity plus-btn" onClick={incrementQuantity}>
//                                                 +
//                                             </span>
                                            
//                                         </div>
//                                     </div>
//                                     <a href="#"
//                                      class="tf-btn btn-fill radius-3 justify-content-center fw-6 fs-14 flex-grow-1 animate-hover-btn " 
//                                       onClick={handleAddToCart}>Add to cart - ₦{(product.price * quantity).toFixed(2)}</a>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default ProductToolBar









import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "../../../../contexts/CartContext"; // Import CartContext

function ProductToolBar({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart} = useCart(); // Use CartContext

  if (!product) return null; // Safeguard if no product exists

  const handleAddToCart = async (e) => {
    e.preventDefault();

    try {
      const newProduct = {
        id: product.id,
        name: product.name,
        image: product.primary_image?.image_path,
        price: product.price,
        color: product.colour.name,
        size: product.size.name,
        slug: product.slug,
        
      };

      addToCart(newProduct, quantity); // Pass quantity to addToCart

      toast.success("Product added to cart!", {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (error) {
      console.error("Error adding product to cart:", error);
      toast.error("Failed to add product to cart.", { position: "top-right" });
    }
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <>
      <ToastContainer />
      <div className="tf-sticky-btn-atc">
        <div className="container">
          <div className="tf-height-observer w-100 d-flex align-items-center">
            <div className="tf-sticky-atc-product d-flex align-items-center">
              <div className="tf-sticky-atc-img">
                <img
                  className="lazyloaded"
                  src={product.primary_image?.image_path}
                  alt={product.name}
                />
              </div>
              <div className="tf-sticky-atc-title fw-5 d-xl-block d-none">
                {product.name}
              </div>
            </div>
            <div className="tf-sticky-atc-infos">
              <form>
                <div className="tf-sticky-atc-btns">
                  <div className="tf-product-info-quantity">
                    <div className="wg-quantity">
                      <span
                        className="btn-quantity minus-btn"
                        onClick={decrementQuantity}
                      >
                        -
                      </span>
                      <input type="text" readOnly value={quantity} />
                      <span
                        className="btn-quantity plus-btn"
                        onClick={incrementQuantity}
                      >
                        +
                      </span>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="tf-btn btn-fill radius-3 justify-content-center fw-6 fs-14 flex-grow-1 animate-hover-btn"
                    onClick={handleAddToCart}
                  >
                    Add to cart - ₦{(product.price * quantity).toFixed(2)}
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductToolBar;
