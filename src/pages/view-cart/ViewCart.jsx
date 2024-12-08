// import React, {  useEffect } from 'react';

// import CheckOutSection from './mini-component/CheckOutSection';

// function ViewCart() {
//     useEffect(() => {
//         window.scrollTo(0, 0); // Scroll to the top of the page
//       }, []);
//   return (
//     <>
        
       
//         <section class="flat-spacing-11">
//             <div class="container">
//                  {/* <div class="tf-page-cart text-center mt_140 mb_200">
//                     <h5 class="mb_24">Your cart is empty</h5>
//                     <p class="mb_24">You may check out all the available products and buy some in the shop</p>
//                     <a href="shop-default.html" class="tf-btn btn-sm radius-3 btn-fill btn-icon animate-hover-btn">Return to shop<i class="icon icon-arrow1-top-left"></i></a>
//                 </div>   */}
//                 <div class="tf-cart-countdown">
//                     <div class="title-left">
//                         <svg class="d-inline-block" xmlns="http://www.w3.org/2000/svg" width="16" height="24" viewBox="0 0 16 24" fill="rgb(219 18 21)">
//                             <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0899 24C11.3119 22.1928 11.4245 20.2409 10.4277 18.1443C10.1505 19.2691 9.64344 19.9518 8.90645 20.1924C9.59084 18.2379 9.01896 16.1263 7.19079 13.8576C7.15133 16.2007 6.58824 17.9076 5.50148 18.9782C4.00436 20.4517 4.02197 22.1146 5.55428 23.9669C-0.806588 20.5819 -1.70399 16.0418 2.86196 10.347C3.14516 11.7228 3.83141 12.5674 4.92082 12.8809C3.73335 7.84186 4.98274 3.54821 8.66895 0C8.6916 7.87426 11.1062 8.57414 14.1592 12.089C17.4554 16.3071 15.5184 21.1748 10.0899 24Z"></path>
//                         </svg>
//                         <p>These products are limited, checkout within </p>
//                     </div>
//                     <div class="js-countdown timer-count" data-timer="600" data-labels="d:,h:,m:,s"></div>
//                 </div>
//                 <div class="tf-page-cart-wrap">
//                     <div class="tf-page-cart-item">
//                         <form>
//                             <table class="tf-table-page-cart">
//                                 <thead>
//                                     <tr>
//                                         <th>Product</th>
//                                         <th>Price</th>
//                                         <th>Quantity</th>
//                                         <th>Total</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     <tr class="tf-cart-item file-delete">
//                                         <td class="tf-cart-item_product">
//                                             <a href="product-detail.html" class="img-box">
//                                                 <img src="assets/images/products/white-2.jpg" alt="img-product"/>
//                                             </a>
//                                             <div class="cart-info">
//                                                 <a href="product-detail.html" class="cart-title link">Oversized Printed T-shirt</a>
//                                                 <div class="cart-meta-variant">White / M</div>
//                                                 <span class="remove-cart link remove">Remove</span>
//                                             </div>
//                                         </td>
//                                         <td class="tf-cart-item_price" cart-data-title="Price">
//                                             <div class="cart-price">$18.00</div>
//                                         </td>
//                                         <td class="tf-cart-item_quantity" cart-data-title="Quantity">
//                                             <div class="cart-quantity">
//                                                 <div class="wg-quantity">
//                                                     <span class="btn-quantity minus-btn">
//                                                         <svg class="d-inline-block" width="9" height="1" viewBox="0 0 9 1" fill="currentColor"><path d="M9 1H5.14286H3.85714H0V1.50201e-05H3.85714L5.14286 0L9 1.50201e-05V1Z"></path></svg>
//                                                     </span>
//                                                     <input type="text" name="number" value="1"/>
//                                                     <span class="btn-quantity plus-btn">
//                                                         <svg class="d-inline-block" width="9" height="9" viewBox="0 0 9 9" fill="currentColor"><path d="M9 5.14286H5.14286V9H3.85714V5.14286H0V3.85714H3.85714V0H5.14286V3.85714H9V5.14286Z"></path></svg>
//                                                     </span>
//                                                 </div>
//                                             </div>
//                                         </td>
//                                         <td class="tf-cart-item_total" cart-data-title="Total">
//                                             <div class="cart-total">$18.00</div>
//                                         </td>
//                                     </tr>
//                                     <tr class="tf-cart-item file-delete">
//                                         <td class="tf-cart-item_product">
//                                             <a href="product-detail.html" class="img-box">
//                                                 <img src="assets/images/products/orange-1.jpg" alt="img-product"/>
//                                             </a>
//                                             <div class="cart-info">
//                                                 <a href="product-detail.html" class="cart-title link">Ribbed Tank Top</a>
//                                                 <div class="cart-meta-variant">Orange / S</div>
//                                                 <span class="remove-cart link remove">Remove</span>
//                                             </div>
//                                         </td>
//                                         <td class="tf-cart-item_price" cart-data-title="Price">
//                                             <div class="cart-price">$18.00</div>
//                                         </td>
//                                         <td class="tf-cart-item_quantity" cart-data-title="Quantity">
//                                             <div class="cart-quantity">
//                                                 <div class="wg-quantity">
//                                                     <span class="btn-quantity minus-btn">
//                                                         <svg class="d-inline-block" width="9" height="1" viewBox="0 0 9 1" fill="currentColor"><path d="M9 1H5.14286H3.85714H0V1.50201e-05H3.85714L5.14286 0L9 1.50201e-05V1Z"></path></svg>
//                                                     </span>
//                                                     <input type="text" name="number" value="1"/>
//                                                     <span class="btn-quantity plus-btn">
//                                                         <svg class="d-inline-block" width="9" height="9" viewBox="0 0 9 9" fill="currentColor"><path d="M9 5.14286H5.14286V9H3.85714V5.14286H0V3.85714H3.85714V0H5.14286V3.85714H9V5.14286Z"></path></svg>
//                                                     </span>
//                                                 </div>
//                                             </div>
//                                         </td>
//                                         <td class="tf-cart-item_total" cart-data-title="Total">
//                                             <div class="cart-total">$18.00</div>
//                                         </td>
//                                     </tr>
//                                     <tr class="tf-cart-item file-delete">
//                                         <td class="tf-cart-item_product">
//                                             <a href="product-detail.html" class="img-box">
//                                                 <img src="assets/images/products/black-4.jpg" alt="img-product"/>
//                                             </a>
//                                             <div class="cart-info">
//                                                 <a href="product-detail.html" class="cart-title link">Regular Fit Oxford Shirt</a>
//                                                 <div class="cart-meta-variant">Black / L</div>
//                                                 <span class="remove-cart link remove">Remove</span>
//                                             </div>
//                                         </td>
//                                         <td class="tf-cart-item_price" cart-data-title="Price">
//                                             <div class="cart-price">$18.00</div>
//                                         </td>
//                                         <td class="tf-cart-item_quantity" cart-data-title="Quantity">
//                                             <div class="cart-quantity">
//                                                 <div class="wg-quantity">
//                                                     <span class="btn-quantity minus-btn">
//                                                         <svg class="d-inline-block" width="9" height="1" viewBox="0 0 9 1" fill="currentColor"><path d="M9 1H5.14286H3.85714H0V1.50201e-05H3.85714L5.14286 0L9 1.50201e-05V1Z"></path></svg>
//                                                     </span>
//                                                     <input type="text" name="number" value="1"/>
//                                                     <span class="btn-quantity plus-btn">
//                                                         <svg class="d-inline-block" width="9" height="9" viewBox="0 0 9 9" fill="currentColor"><path d="M9 5.14286H5.14286V9H3.85714V5.14286H0V3.85714H3.85714V0H5.14286V3.85714H9V5.14286Z"></path></svg>
//                                                     </span>
//                                                 </div>
//                                             </div>
//                                         </td>
//                                         <td class="tf-cart-item_total" cart-data-title="Total">
//                                             <div class="cart-total">$18.00</div>
//                                         </td>
//                                     </tr>
//                                 </tbody>
//                             </table>
//                             <div class="tf-page-cart-note">
//                                 <label for="cart-note">Add Order Note</label>
//                                 <textarea name="note" id="cart-note" placeholder="How can we help you?"></textarea>
//                             </div>
//                         </form>
//                     </div>




//                     <CheckOutSection/>

//                 </div>
//             </div>
//         </section>

//     </>
//   )
// }

// export default ViewCart







import React, { useState, useEffect } from "react";
import CheckOutSection from "./mini-component/CheckOutSection";

function ViewCart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Remove Item from Cart
  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Update Quantity
  const handleQuantityChange = (id, action) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: action === "increment" ? item.quantity + 1 : Math.max(1, item.quantity - 1),
        };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  if (cart.length === 0) {
    return (
      <div className="tf-page-cart text-center mt_140 mb_200">
        <h5 className="mb_24">Your cart is empty</h5>
        <p className="mb_24">You may check out all the available products and buy some in the shop</p>
        <a href="/shop" className="tf-btn btn-sm radius-3 btn-fill btn-icon animate-hover-btn">
          Return to shop<i className="icon icon-arrow1-top-left"></i>
        </a>
      </div>
    );
  }

  return (
    <section className="flat-spacing-11">
      <div className="container">
        <table className="tf-table-page-cart">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td className="tf-cart-item_product">
                  <img src={item.image} alt={item.name} width="80" />
                  <div>{item.name}</div>
                  <div>{item.color} / {item.size}</div>
                </td>
                <td>${item.price}</td>
                <td>
                  <div className="cart-quantity">
                    <button onClick={() => handleQuantityChange(item.id, "decrement")}>-</button>
                    <input type="text" readOnly value={item.quantity} />
                    <button onClick={() => handleQuantityChange(item.id, "increment")}>+</button>
                  </div>
                </td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button onClick={() => handleRemove(item.id)} className="btn btn-danger">
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <CheckOutSection cart={cart} />
      </div>
    </section>
  );
}

export default ViewCart;
