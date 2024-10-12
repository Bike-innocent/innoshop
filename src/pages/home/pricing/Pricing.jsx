import React from 'react'

function Pricing() {
  return (
    <>
        <section class="bg-white pb-[120px]">
            <div class="container">
                <div class="grid grid-cols-12">
                    <div class="col-span-12">
                        <div class="flex flex-col md:flex-row justify-between md:items-end mb-16">
                            <div class="font-bold font-Syne leading-none flex flex-wrap flex-col gap-y-2 max-w-[325px] lg:max-w-[400px] xl:max-w-[527px]" data-aos="fade-up">
                                <span class="text-orange text-xl">Pricing</span>
                                <h3 class="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
                                    Stay chill and pick your <span
                                        class="relative z-[1] before:rounded-full before:bg-primary before:block before:absolute before:top-[13px] before:left-[-4px] before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[64px] before:h-[36px] lg:before:h-[48px] xl:before:h-[64px]">pl</span>an
                                </h3>
                            </div>

                            <div class="flex mt-8 md:mt-0" data-aos="fade-up" data-aos-delay="200">
                                <a href="contact.html" class="flex items-center flex-wrap btn-primary group">
                                    Contact for Custom Project
                                    <span class="inline-block ml-3 group-hover:animate-arrow-move-up">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                    {/*   {/* Pricing Item Start --> */}

                    <div class="p-6 lg:p-8 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white group flex flex-wrap flex-col gap-10 lg:gap-12 group" data-aos="fade-up" data-aos-delay="300">

                        <div class="flex items-center justify-between">
                            <span class="text-lg font-normal font-sans leading-none text-black-text-600">Basic</span>
                            <span class="font-bold text-xl font-Syne text-orange">$48/h</span>
                        </div>

                        <div class="flex flex-wrap justify-between items-end">
                            <div>
                                <h4 class="font-bold font-Syne leading-10 text-[32px] text-black-800 mb-1">20 hrs
                                </h4>
                                <p class="text-lg font-normal font-sans leading-none text-black-text-600">10 hours per
                                    week</p>
                            </div>

                            <a href="#" class="text-black-text-600 group-hover:text-orange group-hover:animate-arrow-move-up">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class="transition-all" d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path class="transition-all" d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/*   {/* Pricing Item End -->
                      {/* Pricing Item Start --> */}

                    <div class="p-6 lg:p-8 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white group flex flex-wrap flex-col gap-10 lg:gap-12 group" data-aos="fade-up" data-aos-delay="500">

                        <div class="flex items-center justify-between">
                            <span class="text-lg font-normal font-sans leading-none text-black-text-600">Premium</span>
                            <span class="font-bold text-xl font-Syne text-orange">$60/h</span>
                        </div>

                        <div class="flex flex-wrap justify-between items-end">
                            <div>
                                <h4 class="font-bold font-Syne leading-10 text-[32px] text-black-800 mb-1">30 hrs
                                </h4>
                                <p class="text-lg font-normal font-sans leading-none text-black-text-600">15 hours per
                                    week</p>
                            </div>

                            <a href="#" class="text-black-text-600 group-hover:text-orange group-hover:animate-arrow-move-up">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class="transition-all" d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path class="transition-all" d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/*   {/* Pricing Item End -->
                      {/* Pricing Item Start --> */}

                    <div class="p-6 lg:p-8 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white group flex flex-wrap flex-col gap-10 lg:gap-12 group" data-aos="fade-up" data-aos-delay="700">

                        <div class="flex items-center justify-between">
                            <span class="text-lg font-normal font-sans leading-none text-black-text-600">Platinum</span>
                            <span class="font-bold text-xl font-Syne text-orange">$60/h</span>
                        </div>

                        <div class="flex flex-wrap justify-between items-end">
                            <div>
                                <h4 class="font-bold font-Syne leading-10 text-[32px] text-black-800 mb-1">20 hrs
                                </h4>
                                <p class="text-lg font-normal font-sans leading-none text-black-text-600">80 hours per
                                    week</p>
                            </div>

                            <a href="#" class="text-black-text-600 group-hover:text-orange group-hover:animate-arrow-move-up">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class="transition-all" d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path class="transition-all" d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/*   {/* Pricing Item End --> */}

                </div>
            </div>
        </section>
    </>
  )
}

export default Pricing
