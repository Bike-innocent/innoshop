// import React, { useEffect } from 'react';
// import ProductTab from './mini-component/ProductTab'
// import Details from './mini-component/Details'
// import ProductToolBar from './mini-component/ProductToolBar'




// function ProductDetials() {
//      useEffect(() => {
//         window.scrollTo(0, 0); // Scroll to the top of the page
//       }, []);
//     return (
//         <>

//             <section class="flat-spacing-4 ">
//                 <div class="tf-main-product section-image-zoom">
//                     <div class="container">
//                         <div class="row">



//                             <div class="col-md-6">
//                                 <div class="tf-product-media-wrap">
//                                     <div class="">
//                                         <div class="d-grid grid-template-columns-2 gap-10" id="gallery-started">
//                                             <a href="assets/assets/images/shop/products/hmgoepprod.jpg" target="_blank" class="item" data-pswp-width="770px" data-pswp-height="1075px">
//                                                 <img id="image-color-brown" class="radius-10 tf-image-zoom lazyload" data-zoom="assets/images/shop/products/hmgoepprod.jpg" data-src="assets/images/shop/products/hmgoepprod.jpg" src="assets/images/shop/products/hmgoepprod.jpg" alt=""/>
//                                             </a>
//                                             <a href="assets/assets/images/shop/products/hmgoepprod2.jpg" target="_blank" class="item" data-pswp-width="770px" data-pswp-height="1075px">
//                                                 <img id="image-color-light-purple" class="radius-10 tf-image-zoom lazyload" data-zoom="assets/images/shop/products/hmgoepprod2.jpg" data-src="assets/images/shop/products/hmgoepprod2.jpg" src="assets/images/shop/products/hmgoepprod2.jpg" alt=""/>
//                                             </a>
//                                             <a href="assets/assets/images/shop/products/hmgoepprod3.jpg" target="_blank" class="item" data-pswp-width="770px" data-pswp-height="1075px">
//                                                 <img id="image-color-light-green" class="radius-10 tf-image-zoom lazyload" data-zoom="assets/images/shop/products/hmgoepprod3.jpg" data-src="assets/images/shop/products/hmgoepprod3.jpg" src="assets/images/shop/products/hmgoepprod3.jpg" alt=""/>
//                                             </a>
//                                             <a href="assets/assets/images/shop/products/hmgoepprod4.jpg" target="_blank" class="item" data-pswp-width="770px" data-pswp-height="1075px">
//                                                 <img id="image-color-light-green" class="radius-10 tf-image-zoom lazyload" data-zoom="assets/images/shop/products/hmgoepprod4.jpg" data-src="assets/images/shop/products/hmgoepprod4.jpg" src="assets/images/shop/products/hmgoepprod4.jpg" alt=""/>
//                                             </a>
//                                             <a href="assets/assets/images/shop/products/hmgoepprod4.jpg" target="_blank" class="item" data-pswp-width="770px" data-pswp-height="1075px">
//                                                 <img id="image-color-light-green" class="radius-10 tf-image-zoom lazyload" data-zoom="assets/images/shop/products/hmgoepprod4.jpg" data-src="assets/images/shop/products/hmgoepprod4.jpg" src="assets/images/shop/products/hmgoepprod4.jpg" alt=""/>
//                                             </a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>



//                             <Details />





//                         </div>
//                     </div>
//                 </div>


//                 <ProductToolBar />


//             </section>
//             <ProductTab />

//         </>
//     )
// }

// export default ProductDetials





// ProductDetails.jsx









// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axiosInstance from '../../axiosInstance';
// import Details from './mini-component/Details';
// import ProductTab from './mini-component/ProductTab';
// import ProductToolBar from './mini-component/ProductToolBar';

// function ProductDetails() {
//   const { slug } = useParams();
//   const [product, setProduct] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     window.scrollTo(0, 0); // Scroll to the top of the page
//     const fetchProduct = async () => {
//       try {
//         const response = await axiosInstance.get(`/products/${slug}`);
//         setProduct(response.data);
//       } catch (error) {
//         setError('Failed to fetch product details.');
//         console.error('Error fetching product:', error);
//       }
//     };

//     fetchProduct();
//   }, [slug]);

//   if (error) return <p className="text-red-500">{error}</p>;
//   if (!product) return <p>Loading...</p>;

//   return (
//     <>
//       <section className="flat-spacing-4">
//         <div className="tf-main-product section-image-zoom">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-6">
//                 {/* Render primary image and additional images */}
//                 <div className="tf-product-media-wrap">
//                   <div className="d-grid grid-template-columns-2 gap-10">

//                     {product.images?.map((image) => (
//                       <a key={image.id} href={image.image_path} target="_blank" rel="noopener noreferrer">
//                         <img className="radius-10 tf-image-zoom " src={image.image_path} alt={`${product.name} additional`} />
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Pass product data to the Details component */}
//               <Details product={product} />
//             </div>
//           </div>
//         </div>

//         <ProductToolBar product={product} />
//       </section>
//       <ProductTab />
//     </>
//   );
// }

// export default ProductDetails;







import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../../axiosInstance';
import Details from './mini-component/Details';
import ProductTab from './mini-component/ProductTab';
import ProductToolBar from './mini-component/ProductToolBar';
import ProductDetailsSkeleton from './mini-component/ProductDetailsSkeleton';

function ProductDetails() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
    const fetchProduct = async () => {
      try {
        const response = await axiosInstance.get(`/products/${slug}`);
        setProduct(response.data);
      } catch (error) {
        setError('Failed to fetch product details.');
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [slug]);

  if (error) return <p className="text-red-500">{error}</p>;

  // Display skeleton while product data is loading
  if (!product) {
    return <ProductDetailsSkeleton />;
  }

  return (
    <>
      <section className="flat-spacing-4">
        <div className="tf-main-product section-image-zoom">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="tf-product-media-wrap">
                  <div className="d-grid grid-template-columns-2 gap-10">
                    {product.images?.map((image) => (
                      <a key={image.id} href={image.image_path} target="_blank" rel="noopener noreferrer">
                        <img className="radius-10 tf-image-zoom" src={image.image_path} alt={`${product.name} additional`} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <Details product={product} />
            </div>
          </div>
        </div>

        <ProductToolBar product={product} />
      </section>
      <ProductTab />
    </>
  );
}

export default ProductDetails;
