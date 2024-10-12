// src/components/SkeletonComponent.jsx
import React from 'react';
import { Skeleton } from '@nextui-org/react';

const SkeletonComponent = () => {
  return (
    <>
      <Skeleton className='mb-6 rounded-[20px] object-cover w-full  max-h-[280px] sm:max-h-[320px] md:max-h-[300px] lg:max-h-[350px]' />

    </>
  );
};

export default SkeletonComponent;
