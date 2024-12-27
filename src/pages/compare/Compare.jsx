import React, {  useEffect } from 'react';

function Compare() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
      }, []);
  return (
    <>
      <section class="flat-spacing-12">
            <div class="container">
                <div>
                    <div class="tf-compare-table">
                        <div class="tf-compare-row tf-compare-grid">
                            <div class="tf-compare-col d-md-block d-none"></div>
                            <div class="tf-compare-col">
                                <div class="tf-compare-item">
                                    <div class="tf-compare-remove link">Remove</div>
                                    <a class="tf-compare-image" href="product-detail.html">
                                        <img class="lazyload" data-src="assets/images/shop/products/hmgoepprod2.jpg" src="assets/images/shop/products/hmgoepprod2.jpg" alt="img-compare"/>
                                    </a>
                                    <a class="tf-compare-title" href="product-detail.html">Boxy T-shirt</a>
                                    <div class="price">
                                        $7.99
                                    </div>
                                    <div class="tf-compare-group-btns d-flex gap-10">
                                        <a href="#quick_view" data-bs-toggle="modal" class="tf-btn btn-outline-dark radius-3"><i class="icon icon-view"></i><span>QUICK VIEW</span></a>
                                        <a href="#quick_add" data-bs-toggle="modal" class="tf-btn btn-outline-dark radius-3"><i class="icon icon-bag"></i><span>QUICK ADD</span></a>
                                    </div>
                                </div>
                            </div>
                            <div class="tf-compare-col">
                                <div class="tf-compare-item">
                                    <div class="tf-compare-remove link">Remove</div>
                                    <a class="tf-compare-image" href="product-detail.html">
                                        <img class="lazyload" data-src="assets/images/shop/products/hmgoepprod3.jpg" src="assets/images/shop/products/hmgoepprod3.jpg" alt="img-compare"/>
                                    </a>
                                    <a class="tf-compare-title" href="product-detail.html">Drawstring-detail Sports Tank Top</a>
                                    <div class="price">
                                        <span class="compare-at-price">$14.99</span><span class="price-on-sale">$8.99</span>
                                    </div>
                                    <div class="tf-compare-group-btns d-flex gap-10">
                                        <a href="#quick_view" data-bs-toggle="modal" class="tf-btn btn-outline-dark radius-3"><i class="icon icon-view"></i><span>QUICK VIEW</span></a>
                                        <a href="#quick_add" data-bs-toggle="modal" class="tf-btn btn-outline-dark radius-3"><i class="icon icon-bag"></i><span>QUICK ADD</span></a>
                                    </div>
                                </div>
                            </div>
                            <div class="tf-compare-col">
                                <div class="tf-compare-item">
                                    <div class="tf-compare-remove link">Remove</div>
                                    <a class="tf-compare-image" href="product-detail.html">
                                        <img class="lazyload" data-src="assets/images/shop/products/hmgoepprod4.jpg" src="assets/images/shop/products/hmgoepprod4.jpg" alt="img-compare"/>
                                    </a>
                                    <a class="tf-compare-title" href="product-detail.html">Ribbed Tank Top</a>
                                    <div class="price">
                                        $7.99
                                    </div>
                                    <div class="tf-compare-group-btns d-flex gap-10">
                                        <a href="#quick_view" data-bs-toggle="modal" class="tf-btn btn-outline-dark radius-3"><i class="icon icon-view"></i><span>QUICK VIEW</span></a>
                                        <a href="#quick_add" data-bs-toggle="modal" class="tf-btn btn-outline-dark radius-3"><i class="icon icon-bag"></i><span>QUICK ADD</span></a>
                                    </div>
                                </div>
                            </div>
                            <div class="tf-compare-col">
                                <div class="tf-compare-item">
                                    <div class="tf-compare-remove link">Remove</div>
                                    <a class="tf-compare-image" href="product-detail.html">
                                        <img class="lazyload" data-src="assets/images/shop/products/hmgoepprod5.jpg" src="assets/images/shop/products/hmgoepprod5.jpg" alt="img-compare"/>
                                    </a>
                                    <a class="tf-compare-title" href="product-detail.html">Regular Fit Oxford Shirt</a>
                                    <div class="price">
                                        <span class="compare-at-price">$14.99</span><span class="price-on-sale">$8.99</span>
                                    </div>
                                    <div class="tf-compare-group-btns d-flex gap-10">
                                        <a href="#quick_view" data-bs-toggle="modal" class="tf-btn btn-outline-dark radius-3"><i class="icon icon-view"></i><span>QUICK VIEW</span></a>
                                        <a href="#quick_add" data-bs-toggle="modal" class="tf-btn btn-outline-dark radius-3"><i class="icon icon-bag"></i><span>QUICK ADD</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tf-compare-row">
                            <div class="tf-compare-col tf-compare-field d-md-block d-none">
                                <h6>Availability</h6>
                            </div>
                            <div class="tf-compare-col tf-compare-field tf-compare-stock">
                                <div class="icon">
                                    <i class="icon-check"></i>
                                </div>
                                <span class="fw-5">In Stock</span>
                            </div>
                            <div class="tf-compare-col tf-compare-field tf-compare-stock">
                                <div class="icon">
                                    <i class="icon-check"></i>
                                </div>
                                <span class="fw-5">In Stock</span>
                            </div>
                            <div class="tf-compare-col tf-compare-field tf-compare-stock">
                                <div class="icon">
                                    <i class="icon-check"></i>
                                </div>
                                <span class="fw-5">In Stock</span>
                            </div>
                            <div class="tf-compare-col tf-compare-field tf-compare-stock">
                                <div class="icon">
                                    <i class="icon-check"></i>
                                </div>
                                <span class="fw-5">In Stock</span>
                            </div>
                        </div>
                        <div class="tf-compare-row">
                            <div class="tf-compare-col tf-compare-field d-md-block d-none">
                                <h6>Vendor</h6>
                            </div>
                            <div class="tf-compare-col tf-compare-value text-center">Ecomus</div>
                            <div class="tf-compare-col tf-compare-value text-center">M&H</div>
                            <div class="tf-compare-col tf-compare-value text-center">Ecomus</div>
                            <div class="tf-compare-col tf-compare-value text-center">M&H</div>
                        </div>
                        <div class="tf-compare-row">
                            <div class="tf-compare-col tf-compare-field d-md-block d-none">
                                <h6>Color</h6>
                            </div>
                            <div class="tf-compare-col tf-compare-value text-center">Grey, Pink, Light Pink, White</div>
                            <div class="tf-compare-col tf-compare-value text-center">-</div>
                            <div class="tf-compare-col tf-compare-value text-center">Orange, Black, White</div>
                            <div class="tf-compare-col tf-compare-value text-center">Light Green, Black, Blue, Dark Blue, White, Light Grey</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Compare
