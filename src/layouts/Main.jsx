
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import ToolBar from '../components/tool-bar/ToolBar';
import Header from '../components/header/Header';
import AuthModal from '../components/header/AuthModal';
import ShoppingCart from '../components/header/ShoppingCart';


function Main() {


    return (
        <main className="overflow-x-hidden">

            <Header />
            <div className='mt-[50px] lg:mt-[70px]'>
                <AuthModal />
                <ShoppingCart />
              
                <Outlet />
                
                <Footer />
            </div>
            <ToolBar />
        </main>

    );
}

export default Main;
