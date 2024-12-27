import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';

function ForgetPassword() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []);
    return (
        <>


            <section class="flat-spacing-10">
                <div class="container">
                    <div class="tf-grid-layout lg-col-2 tf-login-wrap">
                        <div class="tf-login-form">
                            <div >
                                <h5 class="mb_24">Reset your password</h5>
                                <p class="mb_30">We will send you an email to reset your password</p>
                                <div>
                                    <form class="" id="login-form" action="#" method="post" accept-charset="utf-8" data-mailchimp="true">
                                        <div class="tf-field style-1 mb_15">
                                            <input class="tf-field-input tf-input" placeholder="" type="email" id="property3" name="email" />
                                            <label class="tf-field-label fw-4 text_black-2" for="property3">Email *</label>
                                        </div>
                                        <div class="mb_20">
                                        <Link to="/login" class="tf-btn btn-line">Cancel</Link>
                                        </div>
                                        <div class="">
                                            <button type="submit" class="tf-btn w-100 radius-3 btn-fill animate-hover-btn justify-content-center">Reset password</button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                        <div class="tf-login-content">
                            <h5 class="mb_36">I'm new here</h5>
                            <p class="mb_20">Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click unsubscribe in our emails.</p>
                            <Link to="/register" class="tf-btn btn-line">Register<i class="icon icon-arrow1-top-left"></i></Link>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default ForgetPassword
