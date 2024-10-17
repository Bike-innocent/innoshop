
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import ToolBar from '../components/tool-bar/ToolBar';
import Header from '../components/header/Header';
import OffCanvas from '../components/header/OffCanvas';
import AuthModal from '../components/header/AuthModal';
import ShoppingCart from '../components/header/ShoppingCart';
import CanvasSearch from '../components/header/CanvasSearch';

function Main() {


    return (
        <main className="overflow-x-hidden">

            <Header />
            <div className='mt-20'>
                <AuthModal />
                <ShoppingCart />
                <CanvasSearch />
                <OffCanvas />
                <Outlet />
                <Footer />
            </div>


            <ToolBar />


        </main>

    );
}

export default Main;
