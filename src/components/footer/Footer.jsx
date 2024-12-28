



import React from 'react';
import FooterNav from './mini-component/FooterNav';
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok, FaPinterestP } from 'react-icons/fa';

import Visa from '../../../public/assets/images/payments/visa.png';
import Img1 from '../../../public/assets/images/payments/img-1.png';
import Img2 from '../../../public/assets/images/payments/img-2.png';
import Img3 from '../../../public/assets/images/payments/img-3.png';
import Img4 from '../../../public/assets/images/payments/img-4.png';



function Footer() {
    return (
        <>
            <footer id="footer" className="footer md-pb-70">
                <div className="footer-wrap">
                    <div className="footer-body">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-3 col-md-6 col-12">
                                    <div className="footer-infor">
                                        <div className="footer-logo">
                                            <a href="index.html" className="logo-header text-3xl font-bold">
                                                {/* <img src="assets/images/logo/logo.svg" alt="logo" className="logo" /> */}
                                                Innoshop
                                            </a>
                                        </div>
                                        <ul>
                                            <li>
                                                <p>Address: 1234 Fashion Street, Suite 567, <br /> New York, NY 10001</p>
                                            </li>
                                            <li>
                                                <p>Email: <a href="#">info@example.com</a></p>
                                            </li>
                                            <li>
                                                <p>Phone: <a href="#">(+234)808 887 9523</a></p>
                                            </li>
                                        </ul>
                                        <a href="contact-1.html" className="tf-btn btn-line">
                                            Get direction<i className="icon icon-arrow1-top-left"></i>
                                        </a>
                                        <ul className="tf-social-icon d-flex gap-4">
                                            <li>
                                                <a href="#" className="box-icon w_34 round social-facebook social-line">
                                                    <FaFacebookF className="text-xl" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="box-icon w_34 round social-twitter social-line">
                                                    <FaTwitter className="text-xl" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="box-icon w_34 round social-instagram social-line">
                                                    <FaInstagram className="text-xl" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="box-icon w_34 round social-tiktok social-line">
                                                    <FaTiktok className="text-xl" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="box-icon w_34 round social-pinterest social-line">
                                                    <FaPinterestP className="text-xl" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <FooterNav />
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="footer-bottom-wrap d-flex gap-4 flex-wrap justify-content-between align-items-center">
                                        <div className="footer-menu_item">
                                            © 2024 Innoshop Store.{' '}
                                            <a href="https://chibuikeinnocent.tech" className="text-blue-500">
                                                chibuike innocent
                                            </a>{' '}
                                            All Rights Reserved
                                        </div>
                                        <div className="tf-payment">
                                            <img src={Visa} alt=""  />
                                            <img src={Img1} alt=""  />
                                            <img src={Img2} alt=""  />
                                            <img src={Img3} alt=""  />
                                            <img src={Img4} alt=""  />
                                           
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
