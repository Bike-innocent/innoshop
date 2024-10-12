import React from 'react'
import Icon from './mini-component/Icon'
import ContactCard from './mini-component/ContactCard'
import { Link } from 'react-router-dom'


function Service() {
    return (
        <>
            {/* Service start --> */}
            <section class="py-[80px]">
                <div class="container">
                    <div class="grid grid-cols-12 gap-6 2xl:gap-0 mb-12 items-center" data-aos="fade-up">
                        <div class="col-span-12 lg:col-span-6 xl:col-span-6">
                            <div class="font-bold font-Syne leading-none flex flex-wrap flex-col gap-y-2">
                                <span class="text-orange text-xl">Services</span>
                                <h3 class="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px] relative before:rounded-full  before:block before:absolute before:top-[2px] before:left-0 before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[60px] before:h-[36px] lg:before:h-[48px] xl:before:h-[60px]">
                                    Areas of Expertise
                                </h3>
                            </div>

                        </div>
                        <div class="col-span-12 lg:col-span-6 xl:col-span-6">
                            <p class="paragraph">
                                As a <b> full-stack web developer</b>, I create dynamic, responsive websites with a focus on innovative design and seamless functionality, delivering tailored solutions to meet your unique needs.
                            </p>


                        </div>
                    </div>

                    <div class="grid grid-cols-12 gap-6">
                        <div class="col-span-12 xl:col-span-8">
                            <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

                                {/*   {/* service Item --> */}

                                <div class="px-6 py-7 bg-black-500 rounded-lg transition-all hover:shadow-2xl hover:bg-white group" data-aos="fade-up" data-aos-delay="500">
                                    {/*   {/* Icon --> */}
                                    <div class="w-12 h-12  rounded-full flex flex-wrap items-center justify-center transition-all  mb-8">
                                        <img width="64" height="64" src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-full-stack-computer-programming-flaticons-flat-flat-icons.png" alt="external-full-stack-computer-programming-flaticons-flat-flat-icons" />

                                    </div>

                                    {/*   {/* Icon End --> */}
                                    <h4>
                                        <Link to="projects" class="flex flex-wrap items-end justify-between font-bold text-xl font-Syne text-black-800 group-hover:text-orange transition-all">

                                            Full-Stack Web<br />  Development

                                            <Icon />
                                        </Link>
                                    </h4>
                                </div>

                                {/*   {/* service Item End -->

                              {/* service Item --> */}

                                <div class="px-6 py-7 bg-black-500 rounded-lg transition-all hover:shadow-2xl hover:bg-white group" data-aos="fade-up" data-aos-delay="700">
                                    {/*   {/* Icon --> */}
                                    <div class="w-12 h-12  rounded-full  flex flex-wrap items-center justify-center transition-all  mb-8">

                                        <img width="64" height="64" src="https://img.icons8.com/arcade/64/api-settings.png" alt="api-settings" />



                                    </div>

                                    {/*   {/* Icon End --> */}
                                    <h4>
                                        <Link to="projects" class="flex flex-wrap items-end justify-between font-bold text-xl font-Syne text-black-800 group-hover:text-orange transition-all">

                                            API Development <br /> & Integration

                                            <Icon />
                                        </Link>
                                    </h4>
                                </div>

                                {/*   {/* service Item End -->

                              {/* service Item --> */}

                                <div class="px-6 py-7 bg-black-500 rounded-lg transition-all hover:shadow-2xl hover:bg-white group" data-aos="fade-up" data-aos-delay="900">
                                    {/*   {/* Icon --> */}
                                    <div class="w-12 h-12  rounded-full  flex flex-wrap items-center justify-center transition-all  mb-8">
                                        <img width="48" height="48" src="https://img.icons8.com/fluency/48/media-queries.png" alt="media-queries" />


                                    </div>

                                    {/*   {/* Icon End --> */}
                                    <h4>
                                        <Link to="projects" class="flex flex-wrap items-end justify-between font-bold text-xl font-Syne text-black-800 group-hover:text-orange transition-all">


                                            Responsive &<br /> Modern UI Design

                                            <Icon />
                                        </Link>
                                    </h4>
                                </div>

                                {/*   {/* service Item End -->

                              {/* service Item --> */}

                                <div class="px-6 py-7 bg-black-500 rounded-lg transition-all hover:shadow-2xl hover:bg-white group" data-aos="fade-up" data-aos-delay="500">
                                    {/*   {/* Icon --> */}
                                    <div class="w-14 h-14vflex flex-wrap items-center justify-center transition-all  mb-8">
                                        <img src="https://img.icons8.com/color/64/git.png" alt="git" />
                                    </div>

                                    {/*   {/* Icon End --> */}
                                    <h4>
                                        <Link to="projects" class="flex flex-wrap items-end justify-between font-bold text-xl font-Syne text-black-800 group-hover:text-orange transition-all">

                                            Version Control  <br />& Collaboration

                                            <Icon />
                                        </Link>
                                    </h4>
                                </div>

                                {/*   {/* service Item End -->

                              {/* service Item --> */}

                                <div class="px-6 py-7 bg-black-500 rounded-lg transition-all hover:shadow-2xl hover:bg-white group" data-aos="fade-up" data-aos-delay="700">
                                    {/*   {/* Icon --> */}
                                    <div class="w-14 h-14   flex flex-wrap items-center justify-center transition-all  mb-8">
                                        <img width="64" height="64" src="https://img.icons8.com/fluency/48/project-management--v1.png" alt="project-management--v1" />


                                    </div>
                                    {/* 
                                  {/* Icon End --> */}
                                    <h4>
                                        <Link to="projects" class="flex flex-wrap items-end justify-between font-bold text-xl font-Syne text-black-800 group-hover:text-orange transition-all">


                                            Project Deployment <br />& Optimization
                                            <Icon />
                                        </Link>
                                    </h4>
                                </div>

                                {/*   {/* service Item End -->

                              {/* service Item --> */}

                                <div class="px-6 py-7 bg-black-500 rounded-lg transition-all hover:shadow-2xl hover:bg-white group" data-aos="fade-up" data-aos-delay="900">
                                    {/*   {/* Icon --> */}
                                    <div class="w-12 h-12 flex flex-wrap items-center justify-center transition-all  mb-8">
                                        <img width="48" height="48" src="https://img.icons8.com/fluency/48/data-configuration.png" alt="data-configuration" />


                                    </div>

                                    {/*   {/* Icon End --> */}
                                    <h4>
                                        <Link to="projects" class="flex flex-wrap items-end justify-between font-bold text-xl font-Syne text-black-800 group-hover:text-orange transition-all">
                                            Database Design <br />& Management
                                            <Icon />
                                        </Link>
                                    </h4>
                                </div>

                                {/*   {/* service Item End --> */}

                            </div>
                        </div>

                        <ContactCard />


                    </div>
                </div>

            </section>

        </>
    )
}

export default Service
