import React, {  useEffect } from 'react';

function ContactUs() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
      }, []);
  return (
    <>
       {/* <!-- map --> */}
        <div class="w-100">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d317859.6089702069!2d-0.075949!3d51.508112!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760349331f38dd%3A0xa8bf49dde1d56467!2sTower%20of%20London!5e0!3m2!1sen!2sus!4v1719221598456!5m2!1sen!2sus" width="100%"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='b-0 h-[400px]'></iframe>
        </div>
         {/* <!-- /map --> */}
       
        <section class="flat-spacing-21">
            <div class="container">
                <div class="tf-grid-layout gap30 lg-col-2">
                    <div class="tf-content-left">
                        <h5 class="mb_20">Visit Our Store</h5>
                        <div class="mb_20">
                            <p class="mb_15"><strong>Address</strong></p>
                            <p>66 Mott St, New York, New York, Zip Code: 10006, AS</p>
                        </div>
                        <div class="mb_20">
                            <p class="mb_15"><strong>Phone</strong></p>
                            <p>(+234) 808 887 9523 </p>
                        </div>
                        <div class="mb_20">
                            <p class="mb_15"><strong>Email</strong></p>
                            <p>innoshop@example.com</p>
                        </div>
                        <div class="mb_36">
                            <p class="mb_15"><strong>Open Time</strong></p>
                            <p class="mb_15">Our store has re-opened for shopping, </p>
                            <p>exchange Every day 11am to 7pm</p>
                        </div>
                      
                    </div>
                    <div class="tf-content-right">
                        <h5 class="mb_20">Get in Touch</h5>
                        <p class="mb_24">If you’ve got great products your making or looking to work with us then drop us a line.</p>
                        <div>
                            <form class="form-contact" id="contactform" action="https://themesflat.co/html/ecomus/contact/contact-process.php" method="post">
                                <div class="d-flex gap-15 mb_15">
                                    <fieldset class="w-100">
                                        <input type="text" name="name" id="name" required placeholder="Name *"/>
                                    </fieldset>
                                    <fieldset class="w-100">
                                        <input type="email" name="email" id="email" required placeholder="Email *"/>
                                    </fieldset>
                                </div>
                                <div class="mb_15">
                                    <textarea placeholder="Message" name="message" id="message" required cols="30" rows="10"></textarea>
                                </div>
                                <div class="send-wrap">
                                    <button type="submit" class="tf-btn w-100 radius-3 btn-fill animate-hover-btn justify-content-center">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ContactUs
