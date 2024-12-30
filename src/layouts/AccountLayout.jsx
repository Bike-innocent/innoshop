
// import React, {  useEffect } from 'react';
// import { Outlet,Link } from 'react-router-dom';
// import ProfileHeader from '../components/header/ProfileHeader';
// import Footer from '../components/footer/Footer';
// import ToolBar from '../components/tool-bar/ToolBar';
// import AuthModal from '../components/header/AuthModal';
// import ShoppingCart from '../components/header/ShoppingCart';

// function AccountLayout() {


//     useEffect(() => {
//         window.scrollTo(0, 0); // Scroll to the top of the page
//       }, []);

//     const handleLogout = async () => {
//         try {
//             await axiosInstance.post('/logout'); // Token is handled by axiosInstance
//             console.log('Logout successful');
    
//             // Clear user-related data from localStorage after the request
//             localStorage.removeItem('authToken');
//             localStorage.removeItem('isAuthenticated');
    
//             // Invalidate the 'authUser' query to clear cached user data
           
    
//             // Redirect the user to the home page or login page
//             navigate('/');
//         } catch (error) {
//             console.error('Error logging out:', error);
//         }
//     };
//     return (
//         <>
//           <style jsx>{`
//                         @media (min-width: 1149px) {
//                         .custom-lg\\:block {
//                             display: block;
//                         }
//                         .custom-lg\\:w-1\\/5 {
//                             width: 20%;
//                         }
//                         .custom-lg\\:w-4\\/5 {
//                             width: 80%;
//                         }
//                         .custom-lg\\:ml-3 {
//                             margin-left: 0.75rem;
//                         }
//                         .custom-lg\\:hidden {
//                             display: none;
//                         }
//                         }
//                     `}</style>
        
        
      
//         <main className="overflow-x-hidden font-sans">
//             <ProfileHeader />
//             <div className='mt-[50px] lg:mt-[70px]'>
//                 <AuthModal />
//                 <ShoppingCart />
               
                  

//                     {/* Main Section */}
//                     <section className="flat-spacing-11 ">
//                         <div className="container">
//                         <div className="flex">
//                             {/* Sidebar Navigation */}
//                             <div className="hidden custom-lg:block custom-lg:w-1/5">
//                             <ul className="my-account-nav">
                               
//                                 <li>
//                                 <Link to="/account/orders" className="my-account-nav-item active">Your Orders</Link>
//                                 </li>
//                                 <li>
//                                 <Link to="/account" className="my-account-nav-item">Your Profile</Link>
//                                 </li>
//                                 <li>
//                                 <Link to="/account/address" className="my-account-nav-item">Your Address</Link>
//                                 </li>
                                
//                                 <li>
//                                 <Link to="/wishlist" className="my-account-nav-item">Wishlist</Link>
//                                 </li>
//                                 <li> 
//                                 <button onClick={handleLogout} className="my-account-nav-item">Logoutk</button>
//                                 </li>
//                             </ul>
//                             </div>

//                             {/* Page Content */}
//                             <div className="w-full custom-lg:w-4/5 custom-lg:ml-3">

                            
//                                 {/* Sidebar Toggle Button */}
                           
//                                                         <div className="m-2 custom-lg:hidden flex space-x-4">
//                             <Link 
//                                 to="/account/orders" 
//                                 className=" text-sm sm:text-md active px-4 py-2 border  rounded-sm border-gray-200 hover:text-red-500 focus:text-red-500  hover:bg-gray-200"
//                             >
//                                  Orders
//                             </Link>
//                             <Link 
//                                 to="/account" 
//                                 className="text-sm sm:text-md active px-4 py-2 border  rounded-sm border-gray-200 hover:text-red-500 focus:text-red-500  hover:bg-gray-200"
//                             >
//                                  Profile
//                             </Link>
//                             <Link 
//                                 to="/account/address" 
//                                 className="text-sm sm:text-md active px-4 py-2 border  rounded-sm hover:text-red-500 focus:text-red-500 hover:bg-gray-200"
//                             >
//                                  Address
//                             </Link>
//                         </div>



  



//                                 <Outlet />
//                             </div>
//                         </div>
//                         </div>
//                     </section>












                 
               
//                 <Footer />
//             </div>
//             <ToolBar />
//         </main>

//         </>



//     );
// }

// export default AccountLayout;






















import React, { useEffect,useContext } from 'react';
import { Outlet, Link, } from 'react-router-dom'; // Import useNavigate
import ProfileHeader from '../components/header/ProfileHeader';
import Footer from '../components/footer/Footer';
import ToolBar from '../components/tool-bar/ToolBar';
import AuthModal from '../components/header/AuthModal';
import ShoppingCart from '../components/header/ShoppingCart';

import { AuthContext } from '../contexts/AuthContext'; 

function AccountLayout() {
    const { user, logout } = useContext(AuthContext); 

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []);




 
    


    return (
        <>
            <style jsx>{`
                @media (min-width: 1149px) {
                    .custom-lg\\:block {
                        display: block;
                    }
                    .custom-lg\\:w-1\\/5 {
                        width: 20%;
                    }
                    .custom-lg\\:w-4\\/5 {
                        width: 80%;
                    }
                    .custom-lg\\:ml-3 {
                        margin-left: 0.75rem;
                    }
                    .custom-lg\\:hidden {
                        display: none;
                    }
                }
            `}</style>

            <main className="overflow-x-hidden font-sans">
                <ProfileHeader />
                <div className="mt-[50px] lg:mt-[70px]">
                    <AuthModal />
                    <ShoppingCart />

                    {/* Main Section */}
                    <section className="flat-spacing-11">
                        <div className="container">
                        <h1 className="text-2xl font-bold">Welcome, {user?.name}</h1>
                            <div className="flex">
                           
                                {/* Sidebar Navigation */}
                                <div className="hidden custom-lg:block custom-lg:w-1/5">
                                    <ul className="my-account-nav">
                                        <li>
                                            <Link to="/account/orders" className="my-account-nav-item active">
                                                Your Orders
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/account" className="my-account-nav-item">
                                                Your Profile
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/account/address" className="my-account-nav-item">
                                                Your Address
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/wishlist" className="my-account-nav-item">
                                                Wishlist
                                            </Link>
                                        </li>
                                        <li>
                                        <Link
                                         to="/"
                                          onClick={logout}
                                                className="my-account-nav-item text-left"
                                            >
                                                Logout
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                {/* Page Content */}
                                <div className="w-full custom-lg:w-4/5 custom-lg:ml-3">
                                    {/* Sidebar Toggle Button */}
                                    <div className="m-2 custom-lg:hidden flex space-x-4 overflow-x-auto">
                                        <Link
                                            to="/account/orders"
                                            className="text-sm sm:text-md active px-4 py-2 border rounded-sm border-gray-200 hover:text-red-500 focus:text-red-500 hover:bg-gray-200"
                                        >
                                            Orders
                                        </Link>
                                        <Link
                                            to="/account"
                                            className="text-sm sm:text-md active px-4 py-2 border rounded-sm border-gray-200 hover:text-red-500 focus:text-red-500 hover:bg-gray-200"
                                        >
                                            Profile
                                        </Link>
                                        <Link
                                            to="/account/address"
                                            className="text-sm sm:text-md active px-4 py-2 border rounded-sm hover:text-red-500 focus:text-red-500 hover:bg-gray-200"
                                        >
                                            Address
                                        </Link>
                                        <Link
                                         to="/"
                                          onClick={logout}
                                           
                                            className="text-sm sm:text-md active px-4 py-2 border rounded-sm hover:text-red-500 focus:text-red-500 hover:bg-gray-200"
                                        >
                                            logout
                                        </Link>
                                    </div>
                                    <Outlet />
                                </div>
                            </div>
                        </div>
                    </section>
                    <Footer />
                </div>
                <ToolBar />
            </main>
        </>
    );
}

export default AccountLayout;

