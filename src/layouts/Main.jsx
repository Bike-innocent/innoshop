
import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderIndex from '../components/header/HeaderIndex';
import Footer from '../components/footer/Footer';
import ToolBar from '../components/tool-bar/ToolBar';

function Main() {


    return (
        <main className="overflow-x-hidden">
            <div id="wrapper">
                <HeaderIndex />
                <Outlet />
                <Footer />
            </div>
            <ToolBar/>


        </main>

    );
}

export default Main;
