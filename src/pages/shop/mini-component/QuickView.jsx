

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
