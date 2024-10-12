import React from 'react'

function EducationTab() {
    return (
        <>

            <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold font-Syne mb-6">Education</h4>

            <div className="grid grid-cols-1 gap-6">

                <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-[30px] md:gap-[60px] lg:gap-[104px]">
                    <p className='text-lg md:text-xl font-bold m-0 border-orange border-b-2'>Web Development Boot Camp</p>
                    <div className="flex flex-col -mt-2 "> {/* Use flex-col to stack items vertically */}
                        <div className='flex'>
                            <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4"></p>
                            <h4 className="font-bold font-Syne leading-normal text-lg sm:text-xl md:text-2xl text-black-800">Ceresense ICT, Ilorin.</h4>
                        </div>
                        <p className="text-sm block font-normal font-Inter leading-tight text-black-text-800 mt-2">
                            10/2022 – 05/2023
                        </p>
                    </div>
                </div>

                <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-[30px] md:gap-[60px] lg:gap-[104px]">
                    <p className='text-lg md:text-xl font-bold m-0 border-orange border-b-2'>University</p>
                    <div className="flex flex-col -mt-2"> {/* Use flex-col to stack items vertically */}
                        <div className='flex'>
                            <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-yellow-400 before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4"></p>
                            <h4 className="font-bold font-Syne leading-normal text-lg sm:text-xl md:text-2xl text-black-800">Pursuing Higher Education</h4>
                        </div>
                        <p className="text-sm block font-normal font-Inter leading-tight text-black-text-800 mt-2">
                            Currently exploring options for future university enrollment.
                        </p>
                    </div>
                </div>

                <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-[30px] md:gap-[60px] lg:gap-[104px]">
                    <p className='text-lg md:text-xl font-bold m-0 border-orange border-b-2'>Secondary School</p>
                    <div className="flex flex-col -mt-2 "> {/* Use flex-col to stack items vertically */}
                        <div className='flex'>
                            <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4"></p>
                            <h4 className="font-bold font-Syne leading-normal text-lg sm:text-xl md:text-2xl text-black-800">St. Paul Secondary School, Utuh.</h4>
                        </div>
                        <p className="text-sm block font-normal font-Inter leading-tight text-black-text-800 mt-2">
                            10/2016 – 08/2022
                        </p>
                    </div>
                </div>




            </div>

        </>
    )
}

export default EducationTab
