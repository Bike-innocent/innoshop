import React from 'react'

import Resume from './mini-component/Resume'

function About() {
    return (
        <>

            <section class="about-section pb-[120px]" data-aos="zoom-out" data-aos-delay="300">
                <div class="container">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-[60px] xl:gap-[134px]">
                        <div class="relative">

                            <div>
                                <img src="assets/images/about/about5.png" className='mx-auto sm:max-w-[450px] md:max-w-[500px] lg:max-w-[500px] xl:max-w-[600px]' alt="about me" />
                            </div>


                            <div class="flex flex-wrap flex-col absolute bottom-0 right-0 md:right-[170px] lg:right-[-30px] z-10">
                                <span
                                    class="text-black-800 text-[65px] xl:text-[80px] font-bold font-Syne leading-none inline-block relative before:rounded-full before:bg-primary before:block before:absolute before:top-[50%] before:left-[-13px] before:-z-[1] before:w-[95px] lg:before:w-[100px] xl:before:w-[110px] before:h-[95px] lg:before:h-[100px] xl:before:h-[110px] before:translate-y-[-50%]">3+</span>
                                <span class="strock-text mt-5">Years of <br /> experience</span>

                            </div>
                        </div>
                        <div class="font-bold font-Syne leading-none flex flex-wrap flex-col gap-y-2">
                            <span class="text-orange text-xl">Hello I’m</span>
                            <h3 class="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px] relative before:rounded-full before:block before:absolute before:top-[2px] before:left-0 before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[64px] before:h-[36px] lg:before:h-[48px] xl:before:h-[64px]">
                                Chibuke Innocent, Web Developer
                            </h3>

                            <h4 class="text-black-800 text-2xl lg:text-3xl xl:text-[44px] mt-3 mb-4">Based in Ilorin</h4>
                            <p class="paragraph mb-6">
                                I’m passionate about building websites that not only showcase your brand but also connect with your audience. My goal is to create tailored digital experiences that engage users and drive meaningful results, helping your business stand out.
                            </p>



                        {/* <Resume/> */}
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default About
