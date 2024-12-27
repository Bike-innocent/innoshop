
// import React from "react";
// import { Link } from "react-router-dom";

// import axios from "../../axiosInstance";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import CheckOutSection from "./mini-component/CheckOutSection";

// function ViewCart() {
//     const queryClient = useQueryClient();
//     const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

//     // Fetch Cart Function
//     const fetchCart = async () => {
//         if (isAuthenticated) {
//             const response = await axios.get("/cart");
//             return response.data;
//         } else {
//             return JSON.parse(localStorage.getItem("cart")) || [];
//         }
//     };

//     // React Query - Fetch Cart
//     const { data: cart = [], isLoading } = useQuery({
//         queryKey: ["cart"],
//         queryFn: fetchCart,
//         staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
//     });

//     // Calculate Cart Total Amount
//     const cartTotalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//     // Remove Item Mutation
//     const removeItemMutation = useMutation({
//         mutationFn: async (id) => {
//             if (isAuthenticated) {
//                 await axios.delete(`/cart/${id}`);
//             } else {
//                 const updatedCart = cart.filter((item) => item.id !== id);
//                 localStorage.setItem("cart", JSON.stringify(updatedCart));
//             }
//         },
//         onSuccess: () => queryClient.invalidateQueries(["cart"]),
//     });

//     // Update Quantity Mutation
//     const updateQuantityMutation = useMutation({
//         mutationFn: async ({ id, action }) => {
//             if (isAuthenticated) {
//                 const updatedQuantity =
//                     action === "increment"
//                         ? cart.find((item) => item.id === id).quantity + 1
//                         : Math.max(1, cart.find((item) => item.id === id).quantity - 1);
//                 await axios.put(`/cart/${id}`, { quantity: updatedQuantity });
//             } else {
//                 const updatedCart = cart.map((item) => {
//                     if (item.id === id) {
//                         return {
//                             ...item,
//                             quantity: action === "increment" ? item.quantity + 1 : Math.max(1, item.quantity - 1),
//                         };
//                     }
//                     return item;
//                 });
//                 localStorage.setItem("cart", JSON.stringify(updatedCart));
//             }
//         },
//         onSuccess: () => queryClient.invalidateQueries(["cart"]),
//     });

//     // Loading State
//     if (isLoading) return <div>Loading your cart...</div>;

//     if (cart.length === 0) {
//         return (
//             <div className="tf-page-cart text-center mt_140 mb_200">
//                 <h5 className="mb_24">Your cart is empty</h5>
//                 <p className="mb_24">You may check out all the available products and buy some in the shop</p>
//                 <a href="/shop" className="tf-btn btn-sm radius-3 btn-fill btn-icon animate-hover-btn">
//                     Return to shop<i className="icon icon-arrow1-top-left"></i>
//                 </a>
//             </div>
//         );
//     }

//     return (
//         <>


//             <section class="flat-spacing-11">
//                 <div class="container">


//                     <div class="tf-page-cart-wrap">
//                         <div class="tf-page-cart-item">
//                             <form>
//                                 <table class="tf-table-page-cart">
//                                     <thead>
//                                         <tr>
//                                             <th>Product</th>
//                                             <th>Price</th>
//                                             <th>Quantity</th>
//                                             <th>Total</th>
//                                         </tr>
//                                     </thead>

//                                     <tbody>
//                                         {cart.map((item) => (
//                                             <tr className="tf-cart-item file-delete" key={item.id}>
//                                                 <td className="tf-cart-item_product">
//                                                     {/* Product Image Link */}
//                                                     <Link to={`/product/${item.slug}`} className="img-box">
//                                                         <img src={item.image} alt={item.name} />
//                                                     </Link>
//                                                     <div className="cart-info">
//                                                         {/* Product Name Link */}
//                                                         <Link to={`/product/${item.slug}`} className="cart-title link">
//                                                             {item.name}
//                                                         </Link>
//                                                         <div className="cart-meta-variant">
//                                                             {item.color} / {item.size}
//                                                         </div>
//                                                         <span
//                                                             className="remove-cart link text-red-500"
//                                                             onClick={() => removeItemMutation.mutate(item.id)}
//                                                         >
//                                                             Remove
//                                                         </span>
//                                                     </div>
//                                                 </td>
//                                                 <td className="tf-cart-item_price" cart-data-title="Price">
//                                                     <div className="cart-price">${item.price}</div>
//                                                 </td>


//                                                 <td className="tf-cart-item_quantity" cart-data-title="Quantity">
//                                                     <div className="cart-quantity">
//                                                         <div className="wg-quantity">
//                                                             <span
//                                                                 className="btn-quantity minus-btn"
//                                                                 onClick={() =>
//                                                                     updateQuantityMutation.mutate({ id: item.id, action: "decrement" })
//                                                                 }
//                                                             >
//                                                                 <svg
//                                                                     className="d-inline-block"
//                                                                     width="9"
//                                                                     height="1"
//                                                                     viewBox="0 0 9 1"
//                                                                     fill="currentColor"
//                                                                 >
//                                                                     <path d="M9 1H5.14286H3.85714H0V1.50201e-05H3.85714L5.14286 0L9 1.50201e-05V1Z"></path>
//                                                                 </svg>
//                                                             </span>
//                                                             <input type="text" name="number" value={item.quantity} readOnly />
//                                                             <span
//                                                                 className="btn-quantity plus-btn"
//                                                                 onClick={() =>
//                                                                     updateQuantityMutation.mutate({ id: item.id, action: "increment" })
//                                                                 }
//                                                             >
//                                                                 <svg
//                                                                     className="d-inline-block"
//                                                                     width="9"
//                                                                     height="9"
//                                                                     viewBox="0 0 9 9"
//                                                                     fill="currentColor"
//                                                                 >
//                                                                     <path d="M9 5.14286H5.14286V9H3.85714V5.14286H0V3.85714H3.85714V0H5.14286V3.85714H9V5.14286Z"></path>
//                                                                 </svg>
//                                                             </span>
//                                                         </div>
//                                                     </div>
//                                                 </td>


//                                                 <td className="tf-cart-item_total" cart-data-title="Total">
//                                                     <div className="cart-total">${(item.price * item.quantity).toFixed(2)}</div>
//                                                 </td>
//                                             </tr>
//                                         ))}
//                                     </tbody>




//                                 </table>

//                                 <div className="text-end mt-4">
//                                     <h4>
//                                         Cart Total: <span className="fw-bold">${cartTotalAmount.toFixed(2)}</span>
//                                     </h4>
//                                 </div>
//                                 <div class="tf-page-cart-note">
//                                     <label for="cart-note">Add Order Note</label>
//                                     <textarea name="note" id="cart-note" placeholder="How can we help you?"></textarea>
//                                 </div>
//                             </form>
//                         </div>






//                         <CheckOutSection />

//                     </div>
//                 </div>
//             </section>

//         </>
//     )
// }

// export default ViewCart















import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../axiosInstance";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import CheckOutSection from "./mini-component/CheckOutSection";

function ViewCart() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); 

    const queryClient = useQueryClient();
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

    // Fetch Cart Function
    const fetchCart = async () => {
        if (isAuthenticated) {
            const response = await axios.get("/cart");
            return response.data;
        } else {
            return JSON.parse(localStorage.getItem("cart")) || [];
        }
    };

    // React Query - Fetch Cart
    const { data: cart = [], isLoading, refetch } = useQuery({
        queryKey: ["cart"],
        queryFn: fetchCart,
        staleTime: 1000 * 60 * 5,
    });

    // Update Cart Count in localStorage
    const updateCartCount = (updatedCart) => {
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        localStorage.setItem("cartCount", updatedCart.length); // Update count
        window.dispatchEvent(new Event("cartUpdated")); // Trigger cart update event
    };

 
    // Add LocalStorage Event Listener
    useEffect(() => {
        const handleCartUpdate = () => {
            refetch(); // Refetch cart data when the cart is updated
        };

        window.addEventListener("cartUpdated", handleCartUpdate);
        return () => {
            window.removeEventListener("cartUpdated", handleCartUpdate);
        };
    }, [refetch]);

    // Remove Item Mutation
    const removeItemMutation = useMutation({
        mutationFn: async (id) => {
            if (isAuthenticated) {
                await axios.delete(`/cart/${id}`);
            } else {
                const updatedCart = cart.filter((item) => item.id !== id);
                updateCartCount(updatedCart);
            }
        },
        onSuccess: () => queryClient.invalidateQueries(["cart"]),
    });

    // Update Quantity Mutation
    const updateQuantityMutation = useMutation({
        mutationFn: async ({ id, action }) => {
            if (isAuthenticated) {
                const updatedQuantity =
                    action === "increment"
                        ? cart.find((item) => item.id === id).quantity + 1
                        : Math.max(1, cart.find((item) => item.id === id).quantity - 1);
                await axios.put(`/cart/${id}`, { quantity: updatedQuantity });
            } else {
                const updatedCart = cart.map((item) => {
                    if (item.id === id) {
                        return {
                            ...item,
                            quantity: action === "increment" ? item.quantity + 1 : Math.max(1, item.quantity - 1),
                        };
                    }
                    return item;
                });
                updateCartCount(updatedCart);
            }
        },
        onSuccess: () => queryClient.invalidateQueries(["cart"]),
    });

    // Calculate Cart Total
    const cartTotalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    // Loading State
    if (isLoading) return <div>Loading your cart...</div>;

    // Empty Cart State
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
                <div className="tf-page-cart-wrap">
                    <div className="tf-page-cart-item">
                        <form>
                            <table className="tf-table-page-cart">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((item) => (
                                        <tr className="tf-cart-item" key={item.id}>
                                            <td className="tf-cart-item_product">
                                                <Link to={`/product/${item.slug}`} className="img-box">
                                                    <img src={item.image} alt={item.name} />
                                                </Link>
                                                <div className="cart-info">
                                                    <Link to={`/product/${item.slug}`} className="cart-title link">
                                                        {item.name}
                                                    </Link>
                                                    <div className="cart-meta-variant">
                                                        {item.color} / {item.size}
                                                    </div>
                                                    <span
                                                        className="remove-cart link text-red-500"
                                                        onClick={() => removeItemMutation.mutate(item.id)}
                                                    >
                                                        Remove
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="tf-cart-item_price">₦{item.price}</td>

                                            <td className="tf-cart-item_quantity" cart-data-title="Quantity">
                                                    <div className="cart-quantity">
                                                        <div className="wg-quantity">
                                                            <span
                                                                className="btn-quantity minus-btn"
                                                                onClick={() =>
                                                                    updateQuantityMutation.mutate({ id: item.id, action: "decrement" })
                                                                }
                                                            >
                                                                <svg
                                                                    className="d-inline-block"
                                                                    width="9"
                                                                    height="1"
                                                                    viewBox="0 0 9 1"
                                                                    fill="currentColor"
                                                                >
                                                                    <path d="M9 1H5.14286H3.85714H0V1.50201e-05H3.85714L5.14286 0L9 1.50201e-05V1Z"></path>
                                                                </svg>
                                                            </span>
                                                            <input type="text" name="number" value={item.quantity} readOnly />
                                                            <span
                                                                className="btn-quantity plus-btn"
                                                                onClick={() =>
                                                                    updateQuantityMutation.mutate({ id: item.id, action: "increment" })
                                                                }
                                                            >
                                                                <svg
                                                                    className="d-inline-block"
                                                                    width="9"
                                                                    height="9"
                                                                    viewBox="0 0 9 9"
                                                                    fill="currentColor"
                                                                >
                                                                    <path d="M9 5.14286H5.14286V9H3.85714V5.14286H0V3.85714H3.85714V0H5.14286V3.85714H9V5.14286Z"></path>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </td>



                                            <td className="tf-cart-item_total">₦{(item.price * item.quantity).toFixed(2)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                           
                          
                        </form>
                    </div>
                    <CheckOutSection subTotal={cartTotalAmount.toFixed(2)} />

                </div>
            </div>
        </section>
    );
}

export default ViewCart;
