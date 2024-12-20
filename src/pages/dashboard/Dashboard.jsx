import React, { useEffect, useRef } from 'react';
import ProductCategory from '../product/product-category/ProductCategory';


function Dashboard() {
   
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section className="flat-spacing-2">
                <div className="container">
                   
                    <p>this is main dashboard oikjdhfgx</p>
                    {/* <ProductCategory/> */}
                </div>
            </section>

           
        </>
    );
}

export default Dashboard;







