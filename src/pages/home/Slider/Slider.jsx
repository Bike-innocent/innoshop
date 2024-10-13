import React from 'react'

function Slider() {
  return (
    <>
    
        <div class="tf-slideshow slider-home-2 slider-effect-fade position-relative">
            <div class="swiper tf-sw-slideshow" data-preview="1" data-tablet="1" data-mobile="1" data-centered="false" data-space="0" data-loop="true" data-auto-play="true" data-delay="2000" data-speed="1000">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" lazy="true">
                        <div class="wrap-slider">
                            <img class="lazyload" data-src="assets/images/slider/fashion-slideshow-04.jpg" src="assets/images/slider/fashion-slideshow-04.jpg" alt="fashion-slideshow-01"/>
                            <div class="box-content">
                                <div class="container">
                                    <h1 class="fade-item fade-item-1">Summer Style<br/>Sensations</h1>
                                    <p class="fade-item fade-item-2">Discover the hottest trends and must-have looks</p>
                                    <a href="shop-default.html" class="fade-item fade-item-3 tf-btn btn-fill animate-hover-btn btn-xl radius-3"><span>Shop collection</span><i class="icon icon-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide" lazy="true">
                        <div class="wrap-slider">
                            <img class="lazyload" data-src="assets/images/slider/fashion-slideshow-05.jpg" src="assets/images/slider/fashion-slideshow-05.jpg" alt="fashion-slideshow-02"/>
                            <div class="box-content">
                                <div class="container">
                                    <h1 class="fade-item fade-item-1">Youthful<br/>Summer style</h1>
                                    <p class="fade-item fade-item-2">Discover the hottest trends and must-have looks</p>
                                    <a href="shop-default.html" class="fade-item fade-item-3 tf-btn btn-fill animate-hover-btn btn-xl radius-3"><span>Shop collection</span><i class="icon icon-arrow-right"></i></a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide" lazy="true">
                        <div class="wrap-slider">
                            <img class="lazyload" data-src="assets/images/slider/fashion-slideshow-06.jpg" src="assets/images/slider/fashion-slideshow-06.jpg" alt="fashion-slideshow-03"/>
                            <div class="box-content">
                                <div class="container">
                                    <h1 class="fade-item fade-item-1">Gentle<br/>Summer style</h1>
                                    <p class="fade-item fade-item-2">Discover the hottest trends and must-have looks</p>
                                    <a href="shop-default.html" class="fade-item fade-item-3 tf-btn btn-fill animate-hover-btn btn-xl radius-3"><span>Shop collection</span><i class="icon icon-arrow-right"></i></a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="wrap-pagination sw-absolute-2">
                <div class="container">
                    <div class="sw-dots sw-pagination-slider"></div>
                </div>
            </div>
        </div>
     
    </>
  )
}

export default Slider
