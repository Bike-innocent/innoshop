// src/components/ProductDetailsSkeleton.jsx

import React from 'react';
import { Skeleton } from '@nextui-org/react';

function ProductDetailsSkeleton() {
  return (
    <section className="flat-spacing-4">
      <div className="tf-main-product section-image-zoom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="tf-product-media-wrap">
                <div className="d-grid grid-template-columns-2 gap-10">
                  {/* Skeletons for product images */}
                  <Skeleton className="w-full h-[200px] sm:h-[300px] rounded-md" />
                  <Skeleton className="w-full h-[200px] sm:h-[300px] rounded-md" />
                  <Skeleton className="w-full h-[200px] sm:h-[300px] rounded-md" />
                  <Skeleton className="w-full h-[200px] sm:h-[300px] rounded-md" />
                </div>
              </div>
            </div>

            {/* Skeleton for Details component */}
            <div className="col-md-6">
              <Skeleton className="h-10 w-3/4 mb-4" />
              <Skeleton className="h-6 w-1/2 mb-2" />
              <Skeleton className="h-5 w-1/3 mb-6" />
              <div className="flex gap-2 mt-5">
                <Skeleton className="h-10 w-10 rounded-full mb-2" />
                <Skeleton className="h-10 w-10 rounded-full mb-2" />
                <Skeleton className="h-10 w-10 rounded-full mb-2" />
              </div>
              <Skeleton className="h-12 w-1/3 mb-4 mt-4" />
              <Skeleton className="h-16 w-full mb-4 rounded-md" />
              <Skeleton className="h-16 w-full rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetailsSkeleton;
