









// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import CheckOutForm from "./mini-component/CheckOutForm";
// import useCart from "../../hooks/useCart";

// function CheckOut() {
//     const { cart, isLoading, isError } = useCart();

//     // Calculate total price
//     const calculateTotal = () => {
//       return cart.reduce((total, product) => {
//         return total + product.price * product.quantity;
//       }, 0);
//     };
  
//     useEffect(() => {
//       window.scrollTo(0, 0); // Scroll to the top of the page
//     }, []);
  
//     if (isLoading) {
//       return <p>loading...</p>;
//     }
  
//     if (isError) {
//       return <p>Something went wrong while fetching the cart.</p>;
//     }
  
//   return (
//     <>
           
//         <section class="flat-spacing-11">
//             <div class="container">
//                 <div class="tf-page-cart-wrap layout-2">
//                     <CheckOutForm/>
//                     <div class="tf-page-cart-footer">
//                         <div class="tf-cart-footer-inner">
//                             <h5 class="fw-5 mb_20">Your order</h5>
//                             <form class="tf-page-cart-checkout widget-wrap-checkout">
//                                 <ul class="wrap-checkout-product">



//                                 {cart.map((product) => (
//                                     <li className="checkout-product-item mt-5" key={product.id}>
//                                         <figure class="img-product max-h-60">
//                                             <Link to={`/product/${product.slug}`}>
//                                                 <img
//                                                 src={product.image}
//                                                 alt={product.name}
//                                                 className="shadow-md"
//                                                 />
//                                             </Link>
//                                             <span class="quantity">{product.quantity}</span>
                                            
//                                         </figure>

                          
//                                         <div class="content">
                                            
//                                             <div className="info">
//                                                 <p className="name">{product.name}</p>
//                                                 {product.color && product.size && (
//                                                 <span className="variant">
//                                                     {product.color} / {product.size}
//                                                 </span>
//                                                 )}
//                                             </div>
//                                             <p class="">₦{(product.price * product.quantity).toFixed(2)}</p>
//                                         </div>
//                                     </li>
                                   
//                                 ))}
//                                 </ul>


//                                 <div class="coupon-box mt-4">
//                                     <input type="text" placeholder="Discount code"/>
//                                     <a href="#" class="tf-btn btn-sm radius-3 btn-fill btn-icon animate-hover-btn">Apply</a>
//                                 </div>
//                                 <div class="d-flex justify-content-between line pb_20">
//                                     <h6 class="fw-5">Total</h6>
//                                     <h6 class="total fw-5">₦{calculateTotal().toFixed(2)}</h6>
//                                 </div>
//                                 <div class="wd-check-payment">
//                                     <div class="fieldset-radio mb_20">
//                                         <input type="radio" name="payment" id="bank" class="tf-check" checked/>
//                                         <label for="bank">Direct bank transfer</label>
                                       
//                                     </div>
//                                     <div class="fieldset-radio mb_20">
//                                         <input type="radio" name="payment" id="delivery" class="tf-check"/>
//                                         <label for="delivery">Cash on delivery</label>
//                                     </div>
//                                     <p class="text_black-2 mb_20">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <Link to="/privacy-policy" class="text-decoration-underline">privacy policy</Link>.</p>
//                                     <div class="box-checkbox fieldset-radio mb_20">
//                                         <input type="checkbox" id="check-agree" class="tf-check"/>
//                                         <label for="check-agree" class="text_black-2">I have read and agree to the website <Link to="/terms-and-condition" class="text-decoration-underline">terms and conditions</Link>.</label>
//                                     </div>
//                                 </div>
//                                 <button class="tf-btn radius-3 btn-fill btn-icon animate-hover-btn justify-content-center">Place order</button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     </>
//   )
// }

// export default CheckOut






import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CheckOutForm from "./mini-component/CheckOutForm";
import { useCart } from "../../contexts/CartContext";
import axiosInstance from "../../axiosInstance"; // Import your Axios instance

function CheckOut() {
  
  const { cart,  isLoading } = useCart();
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state
  const [successMessage, setSuccessMessage] = useState(""); // Success message

  // Calculate total price
  const calculateTotal = () => {
    return cart.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);




  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage("");
  
    try {
      const response = await axiosInstance.post("/orders"); // No cart data required
      setSuccessMessage("Order placed successfully!");
      console.log(response.data);
    } catch (err) {
      console.error(err.response ? err.response.data : err);
      setError(err.response?.data.message || "Failed to place order. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  
  

 
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // if (isError) {
  //   return <p>Something went wrong while fetching the cart.</p>;
  // }

  return (
    <>
      <section className="flat-spacing-11">
        <div className="container">
          <div className="tf-page-cart-wrap layout-2">
            <CheckOutForm />
            <div className="tf-page-cart-footer">
              <div className="tf-cart-footer-inner">
                <h5 className="fw-5 mb_20">Your order</h5>
                <form
                  className="tf-page-cart-checkout widget-wrap-checkout"
                  onSubmit={handlePlaceOrder}
                >
                  <ul className="wrap-checkout-product">
                    {cart.map((product) => (
                      <li
                        className="checkout-product-item mt-5"
                        key={product.id}
                      >
                        <figure className="img-product max-h-60">
                          <Link to={`/product/${product.slug}`}>
                            <img
                              src={product.image}
                              alt={product.name}
                              className="shadow-md"
                            />
                          </Link>
                          <span className="quantity">{product.quantity}</span>
                        </figure>

                        <div className="content">
                          <div className="info">
                            <p className="name">{product.name}</p>
                            {product.color && product.size && (
                              <span className="variant">
                                {product.color} / {product.size}
                              </span>
                            )}
                          </div>
                          <p>
                            ₦{(product.price * product.quantity).toFixed(2)}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="coupon-box mt-4">
                    <input type="text" placeholder="Discount code" />
                    <a
                      href="#"
                      className="tf-btn btn-sm radius-3 btn-fill btn-icon animate-hover-btn"
                    >
                      Apply
                    </a>
                  </div>
                  <div className="d-flex justify-content-between line pb_20">
                    <h6 className="fw-5">Total</h6>
                    <h6 className="total fw-5">
                      ₦{calculateTotal().toFixed(2)}
                    </h6>
                  </div>
                  <div className="wd-check-payment">
                    <div className="fieldset-radio mb_20">
                      <input
                        type="radio"
                        name="payment"
                        id="bank"
                        className="tf-check"
                        checked
                      />
                      <label htmlFor="bank">Direct bank transfer</label>
                    </div>
                    <div className="fieldset-radio mb_20">
                      <input
                        type="radio"
                        name="payment"
                        id="delivery"
                        className="tf-check"
                      />
                      <label htmlFor="delivery">Cash on delivery</label>
                    </div>
                    <div className="box-checkbox fieldset-radio mb_20">
                      <input
                        type="checkbox"
                        id="check-agree"
                        className="tf-check"
                      />
                      <label htmlFor="check-agree" className="text_black-2">
                        I have read and agree to the website{" "}
                        <Link
                          to="/terms-and-condition"
                          className="text-decoration-underline"
                        >
                          terms and conditions
                        </Link>
                        .
                      </label>
                    </div>
                  </div>

                  {/* Display success or error message */}
                  {error && <p className="text-red-500">{error}</p>}
                  {successMessage && (
                    <p className="text-green-500">{successMessage}</p>
                  )}

                  {/* Place Order Button */}
                  <button
                    type="submit"
                    className="tf-btn radius-3 btn-fill btn-icon animate-hover-btn justify-content-center"
                    disabled={loading}
                  >
                    {loading ? "Placing Order..." : "Place Order"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CheckOut;

