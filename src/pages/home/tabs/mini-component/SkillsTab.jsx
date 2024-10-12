import React from 'react'

function SkillsTab() {
    return (
        <>

            <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold font-Syne mb-6">Current Languages</h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-5">


                <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white block  gap-4 items-start">
                    <div className='flex'>
                        <img width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1" />
                        <img width="48" height="48" className='ml-2' src="https://img.icons8.com/color/48/css3.png" alt="css3" />

                    </div>
                    <div className="flex ">
                        <h4 className="font-bold font-Syne leading-normal text-xl text-black-800 mt-3">HTML, CSS </h4>
                        {/* <p className="text-sm font-normal font-Inter leading-none text-black-800">(90%)</p> */}
                    </div>
                </div>

                <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white block  gap-4 items-start">

                    <div className='flex'>
                        <img width="48" height="48" src="https://img.icons8.com/fluency/48/bootstrap.png" alt="bootstrap" />
                        <img width="48" height="48" className='ml-2' src="https://img.icons8.com/fluency/48/tailwind_css.png" alt="tailwind_css" />

                    </div>
                    <div className="flex ">
                        <h4 className="font-bold font-Syne leading-normal text-xl text-black-800 mt-2">Bootstrap,Tailwind</h4>

                    </div>
                </div>


                <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white block  gap-4 items-start">
                    <div className='flex'>
                        <img width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1" />

                        <img width="48" height="48" className='ml-2' src="https://img.icons8.com/color/48/react-native.png" alt="react-native" />
                    </div>

                    <div className="flex ">
                        <h4 className="font-bold font-Syne leading-normal text-xl text-black-800 mt-3">JavaScript (React.js)</h4>

                    </div>
                </div>

                <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white block  gap-4 items-start">
                    <div className='flex'>
                        <img width="48" height="48" src="https://img.icons8.com/officel/40/php-logo.png" alt="php-logo" />
                        <img width="48" height="48" className='ml-3' src="https://img.icons8.com/fluency/48/laravel.png" alt="laravel" />

                    </div>

                    <div className="flex ">
                        <h4 className="font-bold font-Syne leading-normal text-xl text-black-800 mt-3">PHP (Laravel)</h4>

                    </div>
                </div>

                <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white block  gap-4 items-start">
                    <div className='flex'>
                        <img width="48" height="48" src="https://img.icons8.com/color/48/mysql-logo.png" alt="mysql-logo" />

                    </div>

                    <div className="flex ">
                        <h4 className="font-bold font-Syne leading-normal text-xl text-black-800  mt-2">MySQL, phpMyAdmin</h4>

                    </div>
                </div>

                <div className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white block  gap-4 items-start">
                    <img width="48" height="48" src="https://img.icons8.com/glyph-neue/64/github.png" alt="github" />
                    <div className="flex ">
                        <h4 className="font-bold font-Syne leading-normal text-xl text-black-800 mt-3"> GitHub</h4>

                    </div>
                </div>




            </div>

        </>
    )
}

export default SkillsTab
