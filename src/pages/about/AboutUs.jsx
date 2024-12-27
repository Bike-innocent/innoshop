
import React, {  useEffect } from 'react';
import IconBox from './mini-component/IconBox'

function AboutUs() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
      }, []);
  return (
    <>
    {/* hero section  */}
      <section class="tf-slideshow about-us-page position-relative">
            <div class="banner-wrapper">
                <img class="lazyload" src="assets/images/slider/about-banner-01.jpg" data-src="assets/images/slider/about-banner-01.jpg" alt="image-collection"/>
                <div class="box-content text-center">
                    <div class="container">
                        <div class="text text-white">Empowering women to achieve <br class="d-xl-block d-none"/> fitness goals with style</div>
                    </div>
                </div>
            </div>
        </section>

        <section class="flat-spacing-9">
            <div class="container">
                <div class="flat-title my-0">
                    <span class="title">We are Innoshop</span>
                    <p class="sub-title text_black-2">
                        Welcome to our classic women's clothing store, where we believe <br class="d-xl-block d-none"/>
                        that timeless style never goes out of fashion. Our collection features classic <br class="d-xl-block d-none"/>
                        pieces that are both stylish and versatile, perfect for building a <br class="d-xl-block d-none"/>
                        wardrobe that will last for years.
                    </p>
                </div>
            </div>
        </section>
        {/* <!-- /flat-title --> */}
        <div class="container"><div class="line"></div></div>
        {/* <!-- image-text --> */}
        <section class="flat-spacing-23 flat-image-text-section">
            <div class="container">
                <div class="tf-grid-layout md-col-2 tf-img-with-text style-4">
                    <div class="tf-image-wrap">
                        <img class="lazyload w-100" data-src="assets/images/collections/collection-69.jpg" src="assets/images/collections/collection-69.jpg" alt="collection-img"/>
                    </div>
                    <div class="tf-content-wrap px-0 d-flex justify-content-center w-100">
                        <div>
                            <div class="heading">Established - 1995</div>
                            <div class="text">
                                Innoshop was founded in 1995 by Jane Smith, a fashion lover with a <br class="d-xl-block d-none"/>
                                passion for timeless style. Jane had always been drawn to classic <br class="d-xl-block d-none"/>
                                pieces that could be worn season after season, and she believed that <br class="d-xl-block d-none"/>
                                there was a gap in the market for a store that focused solely on classic <br class="d-xl-block d-none"/>
                                women's clothing. She opened the first store in a small town in New <br class="d-xl-block d-none"/>
                                England, where it quickly became a local favorite.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        
        <section class="flat-spacing-15">
            <div class="container">
                <div class="tf-grid-layout md-col-2 tf-img-with-text style-4">
                    <div class="tf-content-wrap px-0 d-flex justify-content-center w-100">
                        <div>
                            <div class="heading">Our mission</div>
                            <div class="text">
                                Our mission is to empower people through sustainable fashion. <br class="d-xl-block d-none"/>
                                We want everyone to look and feel good, while also doing our part to <br class="d-xl-block d-none"/>
                                help the environment.We believe that fashion should be stylish, <br class="d-xl-block d-none"/>
                                affordable and accessible to everyone. Body positivity and inclusivity <br class="d-xl-block d-none"/>
                                are values that are at the heart of our brand.
                            </div>
                        </div>
                    </div>
                    <div class="grid-img-group">
                        <div class="tf-image-wrap box-img item-1">
                            <div class="img-style">
                                <img class="lazyload" src="assets/images/collections/collection-71.jpg" data-src="assets/images/collections/collection-71.jpg" alt="img-slider"/>
                            </div>
                        </div>
                        <div class="tf-image-wrap box-img item-2">
                            <div class="img-style">
                                <img class="lazyload" src="assets/images/collections/collection-70.jpg" data-src="assets/images/collections/collection-70.jpg" alt="img-slider"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <IconBox/>
        
    </>
  )
}

export default AboutUs
