import React, { useEffect } from 'react';
import ProductTab from './mini-component/ProductTab'
import Details from './mini-component/Details'
import ProductToolBar from './mini-component/ProductToolBar'




function ProductDetials() {
     useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
      }, []);
    return (
        <>

            <section class="flat-spacing-4 ">
                <div class="tf-main-product section-image-zoom">
                    <div class="container">
                        <div class="row">



                            <div class="col-md-6">
                                <div class="tf-product-media-wrap">
                                    <div class="">
                                        <div class="d-grid grid-template-columns-2 gap-10" id="gallery-started">
                                            <a href="assets/assets/images/shop/products/hmgoepprod.jpg" target="_blank" class="item" data-pswp-width="770px" data-pswp-height="1075px">
                                                <img id="image-color-brown" class="radius-10 tf-image-zoom lazyload" data-zoom="assets/images/shop/products/hmgoepprod.jpg" data-src="assets/images/shop/products/hmgoepprod.jpg" src="assets/images/shop/products/hmgoepprod.jpg" alt=""/>
                                            </a>
                                            <a href="assets/assets/images/shop/products/hmgoepprod2.jpg" target="_blank" class="item" data-pswp-width="770px" data-pswp-height="1075px">
                                                <img id="image-color-light-purple" class="radius-10 tf-image-zoom lazyload" data-zoom="assets/images/shop/products/hmgoepprod2.jpg" data-src="assets/images/shop/products/hmgoepprod2.jpg" src="assets/images/shop/products/hmgoepprod2.jpg" alt=""/>
                                            </a>
                                            <a href="assets/assets/images/shop/products/hmgoepprod3.jpg" target="_blank" class="item" data-pswp-width="770px" data-pswp-height="1075px">
                                                <img id="image-color-light-green" class="radius-10 tf-image-zoom lazyload" data-zoom="assets/images/shop/products/hmgoepprod3.jpg" data-src="assets/images/shop/products/hmgoepprod3.jpg" src="assets/images/shop/products/hmgoepprod3.jpg" alt=""/>
                                            </a>
                                            <a href="assets/assets/images/shop/products/hmgoepprod4.jpg" target="_blank" class="item" data-pswp-width="770px" data-pswp-height="1075px">
                                                <img id="image-color-light-green" class="radius-10 tf-image-zoom lazyload" data-zoom="assets/images/shop/products/hmgoepprod4.jpg" data-src="assets/images/shop/products/hmgoepprod4.jpg" src="assets/images/shop/products/hmgoepprod4.jpg" alt=""/>
                                            </a>
                                            <a href="assets/assets/images/shop/products/hmgoepprod4.jpg" target="_blank" class="item" data-pswp-width="770px" data-pswp-height="1075px">
                                                <img id="image-color-light-green" class="radius-10 tf-image-zoom lazyload" data-zoom="assets/images/shop/products/hmgoepprod4.jpg" data-src="assets/images/shop/products/hmgoepprod4.jpg" src="assets/images/shop/products/hmgoepprod4.jpg" alt=""/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <Details />





                        </div>
                    </div>
                </div>


                <ProductToolBar />


            </section>
            <ProductTab />

        </>
    )
}

export default ProductDetials
