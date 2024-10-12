import React from 'react'
import { Link } from 'react-router-dom'

import { FaEnvelope, } from 'react-icons/fa';

function Exeperience() {
    return (
        <>
            <section class="bg-white py-[50px] overflow-x-hidden">
                <div class="container" data-aos="zoom-out">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[60px] xl:gap-[134px]">



                        <div class="font-bold font-Syne leading-none flex flex-wrap flex-col gap-y-2">
                            <h3 class="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px] mb-5">
                                My Vision: Excellence and Innovation
                            </h3>

                            <p class="paragraph mb-7">
                                My goal is simple: to build websites that not only meet your business objectives but also create an exceptional experience for your users. By blending creativity with functionality, I aim to deliver solutions that bring your vision to life while ensuring long-term success and client satisfaction.
                            </p>
                        </div>


                        <div class="flex flex-col justify-end">
                            <div class="flex flex-wrap flex-col mb-8">
                                <span
                                    class="text-black-800 text-[65px] xl:text-[80px] font-bold font-Syne leading-none inline-block relative z-10 before:rounded-full before:bg-primary before:block before:absolute before:top-[50%] before:left-[-13px] before:-z-[1] before:w-[95px] lg:before:w-[100px] xl:before:w-[110px] before:h-[95px] lg:before:h-[100px] xl:before:h-[110px] before:translate-y-[-50%]">3+</span>
                                <span class="strock-text mt-5">Years of <br /> experience</span>

                            </div>

                            <div class="px-6 py-6 bg-black-800 rounded-lg flex flex-wrap justify-between items-end group">
                                <div class="flex flex-col flex-wrap gap-y-2">
                                    <Link to="mailto:hello@chibuikeinnocent.tech">
                                        <span class="text-orange text-lg font-normal leading-none">SAY HELLO!</span>
                                        <h4 class="text-white text-xl sm:text-xl lg:text-2xl xl:text-[32px] font-bold font-Syne leading-none">
                                            hello@chibuikeinnocent.tech
                                        </h4></Link>
                                </div>
                                <div class="flex flex-wrap justify-end">
                                    <Link to="mailto:hello@chibuikeinnocent.tech" class="group-hover:animate-arrow-move-up text-orange">
                                        <FaEnvelope size={33} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Exeperience
