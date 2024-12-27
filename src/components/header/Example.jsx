import React from 'react'

function Example() {
    return (
        <>



            <div class="offcanvas offcanvas-start canvas-mb" id="mobileMenu">
                <span class="icon-close icon-close-popup" data-bs-dismiss="offcanvas" aria-label="Close"></span>
                <div class="mb-canvas-content">
                    <div class="mb-body">
                        <ul class="nav-ul-mb" id="wrapper-menu-navigation">
                            <li class="nav-mb-item">
                                <a href="#dropdown-menu-one" class="collapsed mb-menu-link current" data-bs-toggle="collapse" aria-expanded="true" aria-controls="dropdown-menu-one">
                                    <span>Home b</span>
                                    <span class="btn-open-sub"></span>
                                </a>


                            </li>
                            <li class="nav-mb-item">
                                <a href="#dropdown-menu-two" class="collapsed mb-menu-link current" data-bs-toggle="collapse" aria-expanded="true" aria-controls="dropdown-menu-two">
                                    <span>Shop</span>
                                    <span class="btn-open-sub"></span>
                                </a>
                            </li>

                        </ul>
                        <div class="mb-other-content">
                            <div class="d-flex group-icon">
                                <a href="wishlist.html" class="site-nav-icon"><i class="icon icon-heart"></i>Wishlist</a>
                                <a href="home-search.html" class="site-nav-icon"><i class="icon icon-search"></i>Search</a>
                            </div>
                            <div class="mb-notice">
                                <a href="contact-1.html" class="text-need">Need help ?</a>
                            </div>
                            <ul class="mb-info">
                                <li>Address: 1234 Fashion Street, Suite 567, <br /> New York, NY 10001</li>
                                <li>Email: <b>info@fashionshop.com</b></li>
                                <li>Phone: <b>(212) 555-1234</b></li>
                            </ul>
                        </div>
                    </div>
                    <div class="mb-bottom">
                        <a href="login.html" class="site-nav-icon"><i class="icon icon-account"></i>Login</a>
                        <div class="bottom-bar-language">
                            <div class="tf-currencies">
                                <select class="image-select center style-default type-currencies">
                                    <option data-thumbnail="images/country/fr.svg">EUR <span>€ | France</span></option>
                                    <option data-thumbnail="images/country/de.svg">EUR <span>€ | Germany</span></option>
                                    <option selected data-thumbnail="images/country/us.svg">USD <span>$ | United States</span></option>
                                    <option data-thumbnail="images/country/vn.svg">VND <span>₫ | Vietnam</span></option>
                                </select>
                            </div>
                            <div class="tf-languages">
                                <select class="image-select center style-default type-languages">
                                    <option>English</option>
                                    <option>العربية</option>
                                    <option>简体中文</option>
                                    <option>اردو</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Example
