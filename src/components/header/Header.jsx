



import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Offcanvas } from 'bootstrap';
import SearchOffCanvas from './SearchOffCanvas';
import MainOffCanvas from './MainOffCanvas';
// import { AuthUser } from '../../service/AuthUser';
import { AuthContext } from '../../contexts/AuthContext';
import { FiSearch, FiUser, FiHeart } from 'react-icons/fi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useCart } from "../../contexts/CartContext"; 




function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const mainOffcanvasRef = useRef(null);
  const searchOffcanvasRef = useRef(null);
  const navigate = useNavigate();
  const { totalQuantity } = useCart(); // Access the cart from context

  // Fetch user data with the custom hook
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      setIsVisible(currentScrollPosition < lastScrollPosition);
      setLastScrollPosition(currentScrollPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollPosition]);

  const toggleMainOffcanvas = () => {
    const bsOffcanvas = Offcanvas.getInstance(mainOffcanvasRef.current) || new Offcanvas(mainOffcanvasRef.current);
    bsOffcanvas.toggle();
  };

  const toggleSearchOffcanvas = () => {
    const bsOffcanvas = Offcanvas.getInstance(searchOffcanvasRef.current) || new Offcanvas(searchOffcanvasRef.current);
    bsOffcanvas.toggle();
  };

  const closeOffcanvasAndNavigate = (to) => {
    const bsOffcanvasMain = Offcanvas.getInstance(mainOffcanvasRef.current);
    const bsOffcanvasSearch = Offcanvas.getInstance(searchOffcanvasRef.current);
    if (bsOffcanvasMain) bsOffcanvasMain.hide();
    if (bsOffcanvasSearch) bsOffcanvasSearch.hide();
    navigate(to);
  };

  return (
    <header
      id="header"
      className={`header-default shadow-md fixed top-0 left-0 right-0 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="px_15 lg-px_40">
        <div className="flex wrapper-header align-items-center">
          <div className="w-1/3 tf-lg-hidden">
            <button onClick={toggleMainOffcanvas} className="text-xl font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none">
                <path d="M2.00056 2.28571H16.8577C17.1608 2.28571 17.4515 2.16531 17.6658 1.95098C17.8802 1.73665 18.0006 1.44596 18.0006 1.14286C18.0006 0.839753 17.8802 0.549063 17.6658 0.334735C17.4515 0.120408 17.1608 0 16.8577 0H2.00056C1.69745 0 1.40676 0.120408 1.19244 0.334735C0.978109 0.549063 0.857702 0.839753 0.857702 1.14286C0.857702 1.44596 0.978109 1.73665 1.19244 1.95098C1.40676 2.16531 1.69745 2.28571 2.00056 2.28571ZM0.857702 8C0.857702 7.6969 0.978109 7.40621 1.19244 7.19188C1.40676 6.97755 1.69745 6.85714 2.00056 6.85714H22.572C22.8751 6.85714 23.1658 6.97755 23.3801 7.19188C23.5944 7.40621 23.7148 7.6969 23.7148 8C23.7148 8.30311 23.5944 8.59379 23.3801 8.80812C23.1658 9.02245 22.8751 9.14286 22.572 9.14286H2.00056C1.69745 9.14286 1.40676 9.02245 1.19244 8.80812C0.978109 8.59379 0.857702 8.30311 0.857702 8ZM0.857702 14.8571C0.857702 14.554 0.978109 14.2633 1.19244 14.049C1.40676 13.8347 1.69745 13.7143 2.00056 13.7143H12.2863C12.5894 13.7143 12.8801 13.8347 13.0944 14.049C13.3087 14.2633 13.4291 14.554 13.4291 14.8571C13.4291 15.1602 13.3087 15.4509 13.0944 15.6653C12.8801 15.8796 12.5894 16 12.2863 16H2.00056C1.69745 16 1.40676 15.8796 1.19244 15.6653C0.978109 15.4509 0.857702 15.1602 0.857702 14.8571Z" fill="currentColor"></path>
              </svg>
            </button>
          </div>
          <div className="w-1/3">
            <Link to="/" className="logo-header text-3xl font-bold font-sans">Innoshop</Link>
          </div>
          <div className="w-2/3 tf-md-hidden">
            <nav className="box-navigation text-center">
              <ul className="box-nav-ul flex align-items-center justify-content-center gap-40">
                {/* <li><Link to="/" className="item-link">Home</Link></li> */}
                {/* <li><Link to="/shop" className="item-link">Shop</Link></li> */}
                <li><Link to="/about-us" className="item-link">About Us</Link></li>
                <li><Link to="/contact-us" className="item-link">Contact Us</Link></li>
                <li><Link to="/our-store" className="item-link">Our Store</Link></li>
                <li><Link to="/faq" className="item-link">FAQ</Link></li>
                {/* Conditionally render for admin */}
                {user?.roles?.some(role => role.name === 'admin') && (
                  <li><Link to="/dashboard" className="item-link">Dashboard</Link></li>
                )}
              </ul>
            </nav>
          </div>




          <div className="w-1/3">
            <ul className="nav-icon flex justify-content-end align-items-center gap-20">
              <li className="nav-search">
                <button
                  onClick={toggleSearchOffcanvas}
                  data-bs-toggle="offcanvas"
                  aria-controls="offcanvasLeft"
                  className="nav-icon-item"
                >
                  <FiSearch className="text-xl" />
                </button>
              </li>
              <li className="nav-account">
                <Link to="/account/orders" className="nav-icon-item">
                  <FiUser className="text-xl" />
                </Link>
              </li>
            



              <li className="nav-cart">
                <a href="#shoppingCart" data-bs-toggle="modal" className="nav-icon-item">
                  <AiOutlineShoppingCart className="text-2xl" />

                 

                  {totalQuantity > 0 && (
                     <span className="count-box">{totalQuantity}</span>
                        
                  )}

                  

                </a>
              </li>




            </ul>
          </div>



        </div>
      </div>
      <MainOffCanvas offcanvasRef={mainOffcanvasRef} closeOffcanvasAndNavigate={closeOffcanvasAndNavigate} />
      <SearchOffCanvas offcanvasRef={searchOffcanvasRef} closeOffcanvasAndNavigate={closeOffcanvasAndNavigate} />
    </header>
  );
}

export default Header;




