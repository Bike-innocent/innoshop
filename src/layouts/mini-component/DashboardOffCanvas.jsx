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
                                onClick={() => closeOffcanvasAndNavigate("/dashboard/supplier")}
                                className="collapsed mb-menu-link"
                            >
                                 product  Supplier
                            </a>
                        </li>
                        <li className="nav-mb-item">
                            <a
                                onClick={() => closeOffcanvasAndNavigate("/dashboard/create-product")}
                                className="collapsed mb-menu-link"
                            >
                                Create Product
                            </a>
                        </li>
                        <li className="nav-mb-item">
                            <a
                                onClick={() => closeOffcanvasAndNavigate("/dashboard/product-list")}
                                className="collapsed mb-menu-link"
                            >
                             Product List
                            </a>
                        </li>
                        <li className="nav-mb-item">
                            <a
                                onClick={() => closeOffcanvasAndNavigate("/dashboard/customer-orders")}
                                className="collapsed mb-menu-link"
                            >
                            Customer orders 
                            </a>
                        </li>
                        <li className="nav-mb-item">
                            <a
                                onClick={() => closeOffcanvasAndNavigate("/dashboard/all-users")}
                                className="collapsed mb-menu-link"
                            >
                           All Users
                            </a>
                        </li>
                        <li className="nav-mb-item">
                            <a
                                onClick={() => closeOffcanvasAndNavigate("/dashboard/user-addresses")}
                                className="collapsed mb-menu-link"
                            >
                           User Addresses
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
});

export default DashboardOffCanvas;
