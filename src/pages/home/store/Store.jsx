import React from 'react'

function Store() {
  return (
    <>
      {/* <!-- Store --> */}
        <section class="flat-spacing-9 pb_0">
            <div class="container">
                <div class="flat-title wow fadeInUp" data-wow-delay="0s">
                    <span class="title">Visit our store</span>
                </div>
                <div class="flat-tab-store flat-animate-tab">
                    <ul class="widget-tab-2" role="tablist">
                        <li class="nav-tab-item" role="presentation">   
                            <a href="#hongkong" class="active" data-bs-toggle="tab">Hongkong</a>
                        </li>
                        <li class="nav-tab-item" role="presentation">
                            <a href="#london"  data-bs-toggle="tab">London</a>
                        </li>
                        <li class="nav-tab-item" role="presentation">
                            <a href="#paris" data-bs-toggle="tab">Paris</a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane active show" id="hongkong" role="tabpanel">
                            <div class="widget-card-store align-items-center tf-grid-layout md-col-2">
                                <div class="store-item-info">
                                    <h5 class="store-heading">Hongkong Store</h5>
                                    <div class="description">
                                        <p>301 Front St WToronto,<br/>Ecomus@support.com <br/>(08) 8942 1299</p>
                                        <p>Mon - Fri, 8:30am - 10:30pm<br/>Saturday, 8:30am - 10:30pm <br/>Sunday Closed</p>
                                    </div>
                                </div>
                                <div class="store-img">
                                    <img class="lazyload" data-src="assets/images/shop/store/ourstore1.png" src="assets/images/shop/store/ourstore1.png" alt="store-img"/>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane" id="london" role="tabpanel">
                            <div class="widget-card-store align-items-center tf-grid-layout md-col-2">
                                <div class="store-item-info">
                                    <h5 class="store-heading">London Store</h5>
                                    <div class="description">
                                        <p>301 Front St WToronto,<br/>Ecomus@support.com <br/>(08) 8942 1299</p>
                                        <p>Mon - Fri, 8:30am - 10:30pm<br/>Saturday, 8:30am - 10:30pm <br/>Sunday Closed</p>
                                    </div>
                                </div>
                                <div class="store-img">
                                    <img class="lazyload" data-src="assets/images/shop/store/ourstore2.png" src="assets/images/shop/store/ourstore2.png" alt="store-img"/>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane" id="paris" role="tabpanel">
                            <div class="widget-card-store align-items-center tf-grid-layout md-col-2">
                                <div class="store-item-info">
                                    <h5 class="store-heading">Paris Store</h5>
                                    <div class="description">
                                        <p>301 Front St WToronto,<br/>Ecomus@support.com <br/>(08) 8942 1299</p>
                                        <p>Mon - Fri, 8:30am - 10:30pm<br/>Saturday, 8:30am - 10:30pm <br/>Sunday Closed</p>
                                    </div>
                                </div>
                                <div class="store-img">
                                    <img class="lazyload" data-src="assets/images/shop/store/ourstore3.png" src="assets/images/shop/store/ourstore3.png" alt="store-img"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       

    </>
  )
}

export default Store
