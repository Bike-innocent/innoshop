import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa'; // Import icons from react-icons
import { Link } from 'react-router-dom';

function FooterNav() {
  // State to handle collapsing for each section
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [isEmailOpen, setIsEmailOpen] = useState(false);

  // Toggle functions for each section
  const toggleHelp = () => setIsHelpOpen(!isHelpOpen);
  const toggleAboutUs = () => setIsAboutUsOpen(!isAboutUsOpen);
  const toggleEmail = () => setIsEmailOpen(!isEmailOpen);

  return (
    <div className="footer-nav grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Help Section */}
      <div className="footer-col-block">
        <div className="footer-heading flex justify-between items-center cursor-pointer" onClick={toggleHelp}>
          <h6>Help</h6>
          <span className="md:hidden">
            {isHelpOpen ? <FaMinus className="text-gray-700" /> : <FaPlus className="text-gray-700" />}
          </span>
        </div>
        <ul
          className={`footer-menu-list transition-all duration-300 ${isHelpOpen ? 'block' : 'hidden'} md:block`}
        >
          <li><Link to="/privacy-policy" className="footer-menu_item">Privacy Policy</Link></li>
          <li><Link to="/delivery-return" className="footer-menu_item">Returns + Exchanges</Link></li>
        
          <li><Link to="/terms-and-condition" className="footer-menu_item">Terms & Conditions</Link></li>
          <li><Link to="/faq" className="footer-menu_item">FAQ’s</Link></li>
          <li><Link to="/compare" className="footer-menu_item">Compare</Link></li>
          <li><Link to="/wishlist" className="footer-menu_item">My Wishlist</Link></li>
        </ul>
      </div>

      {/* About Us Section */}
      <div className="footer-col-block">
        <div className="footer-heading flex justify-between items-center cursor-pointer" onClick={toggleAboutUs}>
          <h6>About Us</h6>
          <span className="md:hidden">
            {isAboutUsOpen ? <FaMinus className="text-gray-700" /> : <FaPlus className="text-gray-700" />}
          </span>
        </div>
        <ul
          className={`footer-menu-list transition-all duration-300 ${isAboutUsOpen ? 'block' : 'hidden'} md:block`}
        >
          <li><Link to="/about-us" className="footer-menu_item">Our Story</Link></li>
          <li><Link to="/our-store" className="footer-menu_item">Visit Our Store</Link></li>
          <li><Link to="/contact-us" className="footer-menu_item">Contact Us</Link></li>
          <li><Link to="/login" className="footer-menu_item">Account</Link></li>
        </ul>
      </div>

      {/* Email Sign-Up Section */}
      <div className="footer-col-block">
        <div className="footer-heading flex justify-between items-center cursor-pointer" onClick={toggleEmail}>
          <h6>Sign Up for Email</h6>
          <span className="md:hidden">
            {isEmailOpen ? <FaMinus className="text-gray-700" /> : <FaPlus className="text-gray-700" />}
          </span>
        </div>
        <div
          className={`footer-newsletter transition-all duration-300 ${isEmailOpen ? 'block' : 'hidden'} md:block`}
        >
          <div className="footer-menu_item">
            Sign up to get first dibs on new arrivals, sales, exclusive content, events, and more!
          </div>
          <form className="form-newsletter" id="subscribe-form">
            <div id="subscribe-content">
              <fieldset className="email">
                <input
                  type="email"
                  name="email-form"
                  id="subscribe-email"
                  placeholder="Enter your email...."
                  className="border rounded-lg p-2"
                />
              </fieldset>
              <div className="button-submit">
                <button
                  id="subscribe-button"
                  className="tf-btn btn-sm radius-3 btn-fill btn-icon animate-hover-btn"
                  type="button"
                >
                  Subscribe
                  <i className="icon icon-arrow1-top-left"></i>
                </button>
              </div>
            </div>
          </form>

          
        </div>
      </div>
    </div>
  );
}

export default FooterNav;
