import React, { useEffect } from 'react';
import { Offcanvas } from 'bootstrap';

const DashboardOffCanvas = React.forwardRef(({ closeOffcanvasAndNavigate }, ref) => {
    useEffect(() => {
        const bsOffcanvas = new Offcanvas(ref.current);
        return () => bsOffcanvas.dispose(); // Cleanup on unmount
    }, [ref]);

    return (
        <div
            ref={ref}
            className="offcanvas offcanvas-start canvas-filter"
            tabIndex="-1"
        >
            <div className="canvas-wrapper">
                <header className="canvas-header">
                    <div className="">
                        <span>Dashboard</span>
                    </div>
                    <button
                        type="button"
                        className="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </header>

                <div className="canvas-body">
                    <ul className="nav-ul-mb space-y-1" id="wrapper-menu-navigation">
                        <li className="nav-mb-item">
                            <a
                                onClick={() => closeOffcanvasAndNavigate("/dashboard/product-category")}
                                className="collapsed mb-menu-link current"
                            >
                                Product Category
                            </a>
                        </li>
                        <li className="nav-mb-item">
                            <a
                                onClick={() => closeOffcanvasAndNavigate("/dashboard/brand")}
                                className="collapsed mb-menu-link"
                            >
                              product  Brand 
                            </a>
                        </li>
                        <li className="nav-mb-item">
                            <a
                                onClick={() => closeOffcanvasAndNavigate("/dashboard/colour")}
                                className="collapsed mb-menu-link"
                            >
                                 product  Colour
                            </a>
                        </li>
                        <li className="nav-mb-item">
                            <a
                                onClick={() => closeOffcanvasAndNavigate("/dashboard/size")}
                                className="collapsed mb-menu-link"
                            >
                               product  Size
                            </a>
                        </li>
                        <li className="nav-mb-item">
                            <a
                                onClick={() => closeOffcanvasAndNavigate("/our-store")}
                                className="collapsed mb-menu-link"
                            >
                                Our Store
                            </a>
                        </li>
                        <li className="nav-mb-item">
                            <a
                                onClick={() => closeOffcanvasAndNavigate("/faq")}
                                className="collapsed mb-menu-link"
                            >
                                FAQ
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
});

export default DashboardOffCanvas;
