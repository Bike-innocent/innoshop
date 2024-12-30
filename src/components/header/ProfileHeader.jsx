





// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { AuthUser } from '../../service/AuthUser';
// import placeholder from '../../../public/assets/images/profile/placeholder.png';






// function ProfileHeader() {
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollPosition, setLastScrollPosition] = useState(0);
 


//   // Fetch user data with the custom hook
//   const { data: user, } = AuthUser();

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollPosition = window.pageYOffset;
//       setIsVisible(currentScrollPosition < lastScrollPosition);
//       setLastScrollPosition(currentScrollPosition);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [lastScrollPosition]);

 

//   return (
//     <header
//       id="header"
//       className={`header-default shadow-md fixed top-0 left-0 right-0 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
//     >
//       <div className="px_15 lg-px_40">
//         <div className="flex wrapper-header align-items-center">
//           <div className="w-3/4 lg:w-1/4 flex ">
          
//           <img src={placeholder} alt="" className='h-12 rounded-full' />
         
//             <Link to="/" className="  logo-header text-xl  sm:text-2xl  font-sans ml-2 mt-2">Chibuike Innocent</Link>
//           </div>
//           <div className="w-2/3 tf-md-hidden">
//             <nav className="box-navigation text-center">
//               <ul className="box-nav-ul flex align-items-center justify-content-center gap-40">
//                 <li><Link to="/" className="item-link">Home</Link></li>
//                 <li><Link to="/shop" className="item-link">Shop</Link></li>
//                 <li><Link to="/about-us" className="item-link">About Us</Link></li>
//                 <li><Link to="/contact-us" className="item-link">Contact Us</Link></li>
//                 <li><Link to="/our-store" className="item-link">Our Store</Link></li>
//                 <li><Link to="/faq" className="item-link">FAQ</Link></li>
//                 {/* Conditionally render for admin */}
//                 {user?.roles?.some(role => role.name === 'admin') && (
//                   <li><Link to="/dashboard" className="item-link">Dashboard</Link></li>
//                 )}
//               </ul>
//             </nav>
//           </div>


//           {/* <div className="w-1/3 lg:w-1/5">

              

//           </div> */}



//         </div>
//       </div>
     
     
//     </header>
//   );
// }

// export default ProfileHeader;




import React, { useState, useEffect,useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
// import { AuthUser } from '../../service/AuthUser';
 import placeholder from '../../../public/assets/images/profile/placeholder.png';

function ProfileHeader() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  // Fetch user data with the custom hook
  const { user, loading } = useContext(AuthContext);
  // const { data: user, isLoading } = AuthUser();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      setIsVisible(currentScrollPosition < lastScrollPosition);
      setLastScrollPosition(currentScrollPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollPosition]);

  return (
    <header
      id="header"
      className={`header-default shadow-md fixed top-0 left-0 right-0 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="px_15 lg-px_40">
        <div className="flex wrapper-header align-items-center">
          <div className="w-3/4 lg:w-1/4 flex items-center">
            {/* User Avatar */}
            <img src={placeholder} alt="User Avatar" className="h-12 rounded-full" />
            {/* User Name */}
            <Link
              to="/"
              className="logo-header text-xl sm:text-2xl font-sans ml-2 mt-2"
            >
              {loading ? '' : user?.name || 'Guest'}
            </Link>
          </div>

          <div className="w-2/3 tf-md-hidden">
            <nav className="box-navigation text-center">
              <ul className="box-nav-ul flex align-items-center justify-content-center gap-40">
                <li><Link to="/" className="item-link">Home</Link></li>
                <li><Link to="/shop" className="item-link">Shop</Link></li>
                <li><Link to="/about-us" className="item-link">About Us</Link></li>
                <li><Link to="/contact-us" className="item-link">Contact Us</Link></li>
                <li><Link to="/our-store" className="item-link">Our Store</Link></li>
                <li><Link to="/faq" className="item-link">FAQ</Link></li>
                {/* Conditionally render Dashboard link for admin */}
                {user?.roles?.some(role => role.name === 'admin') && (
                  <li><Link to="/dashboard" className="item-link">Dashboard</Link></li>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default ProfileHeader;
