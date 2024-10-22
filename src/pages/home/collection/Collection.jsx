import React from 'react'
import { Link } from 'react-router-dom';


function Collection() {
  return (
    <>
        
        <section class="flat-spacing-8">
            <div class="container-full">
                <div class="masonry-layout">
                    <div class="item-1 collection-item large hover-img wow fadeInUp" data-wow-delay="0s">
                        <div class="collection-inner">
                            <Link to="/shop" class="collection-image img-style rounded-0">
                                <img class="lazyload" data-src="assets/images/collections/collection-21.jpg" src="assets/images/collections/collection-21.jpg" alt="collection-img"/>
                            </Link>
                            <div class="collection-content">
                               <Link to="/shop" class="tf-btn collection-title hover-icon"><span>Women</span><i class="icon icon-arrow1-top-left"></i> </Link>
                            </div>
                        </div>
                    </div>
                    <div class="item-2 collection-item large hover-img wow fadeInUp" data-wow-delay=".1s">
                        <div class="collection-inner">
                           <Link to="/shop" class="collection-image img-style rounded-0">
                                <img class="lazyload" data-src="assets/images/collections/collection-22.jpg" src="assets/images/collections/collection-22.jpg" alt="collection-img"/>
                           </Link>
                            <div class="collection-content">
                               <Link to="/shop" class="tf-btn collection-title hover-icon"><span>Handbag</span><i class="icon icon-arrow1-top-left"></i> </Link>
                            </div>
                        </div>
                    </div>
                    <div class="item-3 collection-item large hover-img wow fadeInUp" data-wow-delay=".2s">
                        <div class="collection-inner">
                           <Link to="/shop" class="collection-image img-style rounded-0">
                                <img class="lazyload" data-src="assets/images/collections/collection-23.jpg" src="assets/images/collections/collection-23.jpg" alt="collection-img"/>
                           </Link>
                            <div class="collection-content">
                               <Link to="/shop" class="tf-btn collection-title hover-icon"><span>Accessories</span><i class="icon icon-arrow1-top-left"></i> </Link>
                            </div>
                        </div>
                    </div>
                    <div class="item-4 collection-item large hover-img wow fadeInUp" data-wow-delay="0s">
                        <div class="collection-inner">
                           <Link to="/shop" class="collection-image img-style rounded-0">
                                <img class="lazyload" data-src="assets/images/collections/collection-24.jpg" src="assets/images/collections/collection-24.jpg" alt="collection-img"/>
                           </Link>
                            <div class="collection-content">
                               <Link to="/shop" class="tf-btn collection-title hover-icon"><span>Men</span><i class="icon icon-arrow1-top-left"></i> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        {/* <!-- Shop Collection --> */}
        <section class="flat-spacing-4 pt_0">
            <div class="container">
                <div class="tf-grid-layout md-col-2 tf-img-with-text">
                    <div class="tf-image-wrap wow fadeInUp" data-wow-delay="0s">
                        <img class="lazyload" data-src="assets/images/collections/collection-25.jpg" src="assets/images/collections/collection-25.jpg" alt="collection-img"/>
                    </div>
                    <div class="tf-content-wrap wow fadeInUp" data-wow-delay="0s">
                        <span class="sub-heading text-uppercase fw-7">SPRING SALE 30% OFF</span>
                        <div class="heading">Effortless <br/> Denim Delights</div>
                        <p class="description">Discover the versatility of denim with our collection of jeans, jackets</p>
                       <Link to="/shop" class="tf-btn style-2 btn-fill radius-3 animate-hover-btn">Shop collection</Link>
                    </div>
                </div>
            </div>
        </section>
        
    </>
  )
}

export default Collection
