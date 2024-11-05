import React, { useEffect, useRef } from 'react';
import { Offcanvas } from 'bootstrap';
import { useNavigate } from 'react-router-dom';
import DashboardOffCanvas from './mini-component/DashboardOffCanvas';

function Dashboard() {
    const dashboardOffcanvasRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const toggleDashboardOffcanvas = () => {
        const bsOffcanvas = Offcanvas.getInstance(dashboardOffcanvasRef.current) || new Offcanvas(dashboardOffcanvasRef.current);
        bsOffcanvas.toggle();
    };

    const closeOffcanvasAndNavigate = (to) => {
        const bsOffcanvas = Offcanvas.getInstance(dashboardOffcanvasRef.current);
        if (bsOffcanvas) bsOffcanvas.hide();
        navigate(to);
    };

    return (
        <>
            <section className="flat-spacing-2">
                <div className="container">
                    <div className="tf-shop-control grid-3 align-items-center">
                        <div className="tf-control-filter">
                            <button onClick={toggleDashboardOffcanvas} className="tf-btn-filter">
                                <span className="text">Dashboard</span>
                            </button>
                        </div>
                    </div>
                    <p>Hello Innotech</p>
                </div>
            </section>

            {/* Pass closeOffcanvasAndNavigate as a prop */}
            <DashboardOffCanvas ref={dashboardOffcanvasRef} closeOffcanvasAndNavigate={closeOffcanvasAndNavigate} />
        </>
    );
}

export default Dashboard;
