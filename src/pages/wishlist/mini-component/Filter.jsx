
import React, { useState, useEffect } from 'react';
import { Offcanvas } from 'bootstrap';

const Filter = React.forwardRef((props, ref) => {
    const [openSections, setOpenSections] = useState({
        categories: true,
        price: true,
        brand: true,
    });

    useEffect(() => {
        const bsOffcanvas = new Offcanvas(ref.current);
        return () => bsOffcanvas.dispose(); // Cleanup on unmount
    }, [ref]);

    const toggleSection = (section) => {
        setOpenSections((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    return (
        <div
            ref={ref}
            className="offcanvas offcanvas-start canvas-filter"
            id="filterShop"
            tabIndex="-1"
            aria-labelledby="filterOffcanvasLabel"
        >
            <div className="canvas-wrapper">
                <header className="canvas-header">
                    <div className="filter-icon">
                        <span className="icon icon-filter"></span>
                        <span>Filter</span>
                    </div>
                    <button
                        type="button"
                        className="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </header>

                <div className="canvas-body">
                    <div className="widget-facet wd-categories">
                        <div
                            className="facet-title cursor-pointer flex justify-between items-center"
                            onClick={() => toggleSection('categories')}
                        >
                            <span>Product categories</span>
                            <span className={`icon ${openSections.categories ? 'icon-arrow-up' : 'icon-arrow-down'}`}></span>
                        </div>
                        <div className={`${openSections.categories ? 'block' : 'hidden'}`}>
                            <ul className="list-categories mb_36">
                                <li className="cate-item current"><a href="/shop">Fashion</a></li>
                                <li className="cate-item"><a href="/shop">Men</a></li>
                                <li className="cate-item"><a href="/shop">Women</a></li>
                                <li className="cate-item"><a href="/shop">Denim</a></li>
                                <li className="cate-item"><a href="/shop">Dress</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="widget-facet">
                        <div
                            className="facet-title cursor-pointer flex justify-between items-center"
                            onClick={() => toggleSection('price')}
                        >
                            <span>Price</span>
                            <span className={`icon ${openSections.price ? 'icon-arrow-up' : 'icon-arrow-down'}`}></span>
                        </div>
                        <div className={`${openSections.price ? 'block' : 'hidden'}`}>
                            <div className="widget-price">
                                <div className="box-title-price flex justify-between items-center">
                                    <span>Price:</span>
                                    <div className="caption-price">
                                        <span>$10</span> - <span>$100</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="widget-facet">
                        <div
                            className="facet-title cursor-pointer flex justify-between items-center"
                            onClick={() => toggleSection('brand')}
                        >
                            <span>Brand</span>
                            <span className={`icon ${openSections.brand ? 'icon-arrow-up' : 'icon-arrow-down'}`}></span>
                        </div>
                        <div className={`${openSections.brand ? 'block' : 'hidden'}`}>
                            <ul className="tf-filter-group mb_36">
                                <li className="flex gap-2 items-center">
                                    <input type="radio" name="brand" id="brand-1" />
                                    <label htmlFor="brand-1">Ecomus (8)</label>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <input type="radio" name="brand" id="brand-2" />
                                    <label htmlFor="brand-2">M&H (8)</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Filter;

