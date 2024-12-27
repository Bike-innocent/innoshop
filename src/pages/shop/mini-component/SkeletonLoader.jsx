// SkeletonLoader.jsx
import React from 'react';
import { Skeleton } from '@nextui-org/react';

function SkeletonLoader() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5  ">
            {Array.from({ length: 12 }).map((_, index) => (
                <div key={index} className=" w-full p-1 sm:p-2 md:p-3 lg:p-4">
                    <div className="">
                        <Skeleton className="w-full h-56 sm:h-[250px] md:h-[300px] rounded-md " />
                       
                    </div>
                    <div className=" mt-2">
                        <Skeleton className="w-3/4 h-5 mb-2" />
                        <Skeleton className="w-1/2 h-4 bg-gray-200" />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SkeletonLoader;




// // src/components/SkeletonLoader.jsx
// import React from 'react';
// import { Skeleton } from '@nextui-org/react';

// const SkeletonLoader = ({ count = 6 }) => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//       {Array.from({ length: count }).map((_, index) => (
//         <div key={index} className="w-full group">
//           <div className="block">
//             <Skeleton className="w-full h-[180px] sm:h-[280px] md:h-[250px] object-cover rounded-lg" />
//             <div className="flex pt-2">
//               <div className="flex flex-col w-full">
//                 <Skeleton className="h-5 w-full " />
//                 <Skeleton className="h-4 w-3/4 mt-1 bg-blue-700 " />
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SkeletonLo


// // SkeletonLoader.jsx
// import React from 'react';
// import { Skeleton } from '@nextui-org/react';

// function SkeletonLoader() {
//     return (
//         <div className="flex flex-wrap gap-3 text-center container">
//             {Array.from({ length: 12 }).map((_, index) => (
//                 <div key={index} className=" w-1/6 ">
//                     <div className="">
//                         <Skeleton className="w-full h-56 sm:h-[250px] md:h-[300px] rounded-md " />
                       
//                     </div>
//                     <div className=" mt-3">
//                         <Skeleton className="w-3/4 h-5 mb-2" />
//                         <Skeleton className="w-1/2 h-4 bg-gray-200" />
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default SkeletonLoader;



