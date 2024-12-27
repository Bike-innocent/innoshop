

import React, { useState, useRef, useEffect} from "react";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import FindSize from './FindSize';
import axios from "../axiosInstance"; // Axios instance for API calls
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useQueryClient } from "@tanstack/react-query"; // Import queryClient
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Bootstrap JS




function QuickView({ product, isOpen, onClose })  {
  const modalRef = useRef(null);
    const [quantity, setQuantity] = useState(1);
    const [currentImageIndex, setCurrentImageIndex] = useState(0); 
    const queryClient = useQueryClient(); // QueryClient for React Query
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

    
  useEffect(() => {
    if (isOpen) {
      const modalInstance = new window.bootstrap.Modal(modalRef.current);
      modalInstance.show();

      modalRef.current.addEventListener("hidden.bs.modal", () => {
        setQuantity(1); // Reset quantity on close
        onClose();
      });
    }
  }, [isOpen, onClose]);

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

    useEffect(() => {
        setQuantity(1);
      }, [product]);

    
  
    if (!product) return null; // Safeguard if no product exists
  
    const handleAddToCart = async (e) => {
      e.preventDefault(); // Prevent page refresh
      const modalElement = document.getElementById("quick_view"); // Get modal element
  
      if (isAuthenticated) {
        try {
          // Send product data to API
          await axios.post("/cart", {
            product_id: product.id,
            quantity,
          });
  
          // Display success toast
          toast.success("Product added to cart!", { 
            position: "top-right", 
            autoClose: 3000, // Toast lasts for 3 seconds
           
          });
          
  
          // Invalidate React Query cache for cart updates
          queryClient.invalidateQueries(["cart"]);
  
          // Close the modal
          bootstrap.Modal.getInstance(modalElement)?.hide();
        } catch (error) {
          console.error("Error adding product to cart:", error);
  
          // Check for specific API error
          const errorMessage =
            error.response?.data?.message || "Failed to add product to cart.";
          toast.error(errorMessage, { position: "top-right" });
        }
      } else {
        try {
          // Local storage handling for unauthenticated users
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
  
          // Update cart locally
          const existingProductIndex = cart.findIndex((item) => item.id === product.id);
          if (existingProductIndex !== -1) {
            cart[existingProductIndex].quantity += quantity;
          } else {
            cart.push(newProduct);
          }
  
          // Update localStorage
          localStorage.setItem("cart", JSON.stringify(cart));
          localStorage.setItem("cartCount", cart.length);
  
          // Dispatch custom event to update cart count
          window.dispatchEvent(
            new CustomEvent("cartUpdated", { detail: { count: cart.length } })
          );
  
          // Display success toast
          toast.success("Product added to cart!", { position: "top-right" });
  
          // Close the modal
          bootstrap.Modal.getInstance(modalElement)?.hide();
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
        <ToastContainer />
        <div className="modal fade modalDemo" ref={modalRef} id="quick_view">
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
                                    <div className="price">₦{product.price}</div>
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
                                        <button className="btn-quantity minus-btn" onClick={decrementQuantity}>
                                            <AiOutlineMinus />
                                        </button>
                                        <input type="text" value={quantity} readOnly />
                                        <button className="btn-quantity plus-btn" onClick={incrementQuantity}>
                                            <AiOutlinePlus />
                                        </button>
                                    </div>
                                </div>




                
                           

                                <div className="tf-product-info-buy-button">
                                    <button  onClick={handleAddToCart} className="tf-btn btn-fill justify-content-center fw-6 fs-16">
                                    <span>Add to cart -&nbsp;</span>
                                    <span className="tf-qty-price">₦{(product.price * quantity).toFixed(2)}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default QuickView;




