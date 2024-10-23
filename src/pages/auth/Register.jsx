import React, {  useEffect } from 'react';
import {  Link } from 'react-router-dom';

function Register() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
      }, []);
  return (
    <>
      
      <section class="flat-spacing-10">
            <div class="container">
                <div class="form-register-wrap">
                    <div class="flat-title align-items-start gap-0 mb_30 px-0">
                        <h5 class="mb_18">Register</h5>
                        <p class="text_black-2">Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click unsubscribe in our emails</p>
                    </div>
                    <div>
                        <form class="" id="register-form" action="#" method="post" accept-charset="utf-8" data-mailchimp="true">
                            <div class="tf-field style-1 mb_15">
                                <input class="tf-field-input tf-input" placeholder=" " type="text" id="property1" name="first name"/>
                                <label class="tf-field-label fw-4 text_black-2" for="property1">First name</label>
                            </div>
                            <div class="tf-field style-1 mb_15">
                                <input class="tf-field-input tf-input" placeholder=" " type="text" id="property2" name="last name"/>
                                <label class="tf-field-label fw-4 text_black-2" for="property2">Last name</label>
                            </div>
                            <div class="tf-field style-1 mb_15">
                                <input class="tf-field-input tf-input" placeholder=" " type="email" id="property3" name="email"/>
                                <label class="tf-field-label fw-4 text_black-2" for="property3">Email *</label>
                            </div>
                            <div class="tf-field style-1 mb_30">
                                <input class="tf-field-input tf-input" placeholder=" " type="password" id="property4" name="password"/>
                                <label class="tf-field-label fw-4 text_black-2" for="property4">Password *</label>
                            </div>
                            <div class="mb_20">
                                <button type="submit" class="tf-btn w-100 radius-3 btn-fill animate-hover-btn justify-content-center">Register</button>
                            </div>
                            <div class="text-center">
                                <Link to="/login" class="tf-btn btn-line">Already have an account? Log in here<i class="icon icon-arrow1-top-left"></i></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Register
