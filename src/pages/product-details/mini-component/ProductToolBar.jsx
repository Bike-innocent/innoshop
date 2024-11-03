import React from 'react'

function ProductToolBar({ product }) {
    return (
        <>

            <div class="tf-sticky-btn-atc">
                <div class="container">
                    <div class="tf-height-observer w-100 d-flex align-items-center">
                        <div class="tf-sticky-atc-product d-flex align-items-center">
                            <div class="tf-sticky-atc-img">
                            <img className="lazyloaded" src={product.primary_image?.image_path} alt={product.name} />
                               
                            </div>
                            <div class="tf-sticky-atc-title fw-5 d-xl-block d-none">{product.name}</div>
                        </div>
                        <div class="tf-sticky-atc-infos">
                            <form class="">
                                <div class="tf-sticky-atc-variant-price text-center">
                                    <select class="tf-select">
                                        <option selected="selected">Beige / S - $8.00</option>
                                        <option>Beige / M - $8.00</option>
                                        <option>Beige / L - $8.00</option>
                                        <option>Beige / XL - $8.00</option>
                                        <option>Black / S - $8.00</option>
                                        <option>Black / M - $8.00</option>
                                        <option>Black / L - $8.00</option>
                                        <option>Black / XL - $8.00</option>
                                        <option>Blue / S - $8.00</option>
                                        <option>Blue / M - $8.00</option>
                                        <option>Blue / L - $8.00</option>
                                        <option>Blue / XL - $8.00</option>
                                        <option>White / S - $8.00</option>
                                        <option>White / M - $8.00</option>
                                        <option>White / L - $8.00</option>
                                        <option>White / XL - $8.00</option>
                                    </select>
                                </div>
                                <div class="tf-sticky-atc-btns">
                                    <div class="tf-product-info-quantity">
                                        <div class="wg-quantity">
                                            <span class="btn-quantity minus-btn">-</span>
                                            <input type="text" name="number" value="1" />
                                            <span class="btn-quantity plus-btn">+</span>
                                        </div>
                                    </div>
                                    <a href="#" class="tf-btn btn-fill radius-3 justify-content-center fw-6 fs-14 flex-grow-1 animate-hover-btn ">Add to cart - ${product.price}</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductToolBar
