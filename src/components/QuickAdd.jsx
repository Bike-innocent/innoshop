


















import React, { useState, useRef, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoClose } from 'react-icons/io5';
import { useCart } from '../contexts/CartContext'; // Import CartContext

function QuickAdd({ product, isOpen, onClose }) {
  const modalRef = useRef(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart(); // Access addToCart from CartContext

  useEffect(() => {
    if (isOpen) {
      const modalInstance = new bootstrap.Modal(modalRef.current);
      modalInstance.show();

      modalRef.current.addEventListener("hidden.bs.modal", () => {
        setQuantity(1); // Reset quantity on close
        onClose();
      });
    }
  }, [isOpen, onClose]);

  useEffect(() => {
    setQuantity(1);
  }, [product]);

  if (!product) return null; // Safeguard if no product exists

  const handleAddToCart = async (e) => {
    e.preventDefault();
    const modalElement = document.getElementById("quick_add");

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

      await addToCart(newProduct, quantity); // Pass quantity to addToCart

      toast.success("Product added to cart!", { 
        position: "top-right", 
        autoClose: 3000, // Toast lasts for 3 seconds
      });

      bootstrap.Modal.getInstance(modalElement)?.hide();
    } catch (error) {
      console.error("Error adding product to cart:", error);
      toast.error("Failed to add product to cart.", { position: "top-right" });
    }
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <>
      <ToastContainer /> 
      <div className="modal fade modalDemo" ref={modalRef} id="quick_add">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="header">
              <span
                className="cursor-pointer icon-close-popup"
                data-bs-dismiss="modal"
              >
                <IoClose size={25}/>
              </span>
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
                    <div className="price">₦{product.price}</div>
                  </div>
                </div>
              </div>

              {/* Variant Picker */}
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
                    Size: 
                    <span className="fw-6 variant-picker-label-value">
                      {product.size.name}
                    </span>
                  </div>
                  <div className="variant-picker-values">
                    <input type="radio" name="size-1" id="values-s-1" checked/>
                    <label className="style-text" htmlFor="values-s-1" data-value="S">
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

              {/* Add to Cart */}
              <div className="tf-product-info-buy-button">
                <form>
                  <button
                    onClick={handleAddToCart}
                    className="tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn"
                  >
                    <span>Add to cart -&nbsp;</span>
                    <span className="tf-qty-price">₦{(product.price * quantity).toFixed(2)}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuickAdd;
