
import React, { useEffect, useRef } from 'react';
import ContactGif from './mini-component/ContactGif';
import Arrow from './mini-component/Arrow';
import counterUp from 'counterup2';
import Icons from './mini-component/Icons';
import { Link } from 'react-router-dom';

function Hero() {
    const counterRef = useRef(null);

    useEffect(() => {
        if (counterRef.current) {
            const el = counterRef.current;

            const callback = (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !el.classList.contains('is-visible')) {
                        counterUp(el, {
                            duration: 2000,
                            delay: 10,
                        });
                        el.classList.add('is-visible');
                    }
                });
            };

            const observer = new IntersectionObserver(callback, { threshold: 1 });
            observer.observe(el);

            // Cleanup observer when the component is unmounted
            return () => observer.disconnect();
        }
    }, []);

    return (
        <div>
            {/* Hero section start */}
            <section className="bg-secondary relative pt-[140px] pb-[125px]">
                <div className="container">
                    <div className="grid grid-cols-1 2xl:-mx-4">
                        <div className="xl:pt-12">
                            <span
                                className="font-Syne text-black-800 font-bold text-1xl md:text-2xl lg:text-[32px] leading-none flex flex-wrap items-center mb-3"
                                data-aos="fade-right"
                                data-aos-delay="300"
                            >
                                <span className="mr-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="2" viewBox="0 0 65 2" fill="none">
                                        <path d="M0 1H65" stroke="#080808" />
                                    </svg>
                                </span>
                                Hello, I’m
                                <img className="ml-2" src="assets/images/icon/victory.png" alt="icon" />
                            </span>
                            <h1
                                className="relative z-[1] font-sans text-black-800 font-bold text-[60px] sm:text-[80px] lg:text-[100px] xl:text-[120px] 2xl:text-[140px] leading-[64px] lg:leading-[80px] xl:leading-[90px] 2xl:leading-[110px] 2xl:before:w-[120px] xl:before:w-[100px] 2xl:before:h-[120px] xl:before:h-[100px] before:rounded-full before:block before:absolute before:top-[0px] before:left-0 before:-z-[1] lg:before:w-[85px] lg:before:h-[85px] before:w-[70px] before:h-[70px]"
                                data-aos="fade-right"
                                data-aos-delay="400"
                            >
                                Chibuike 
                            </h1>
                            <h2
                                className="font-Syne text-black-800 font-bold text-[60px] sm:text-[80px] lg:text-[100px] xl:text-[120px] 2xl:text-[140px] leading-[64px] lg:leading-[80px] xl:leading-[90px] 2xl:leading-[110px] mb-[20px]"
                                data-aos="fade-right"
                                data-aos-delay="600"
                            >
                                Innocent
                            </h2>
                            <p
                                className="font-Syne text-black-700 font-bold text-lg md:text-xl xl:text-2xl leading-tight mb-[30px]"
                                data-aos="fade-right"
                                data-aos-delay="800"
                            >
                                Fulstack Website Developer.
                            </p>

                            <div className="flex flex-wrap mb-[50px] md:mb-[60px] xl:mb-[70px] 2xl:mb-[80px]">
                                <span data-aos="fade-right" data-aos-delay="1000">
                                    <Link to="contact" className="flex items-center flex-wrap btn-primary mr-2 group">
                                        Let’s Talk
                                        <Arrow />
                                    </Link>
                                </span>

                                <span data-aos="fade-right" data-aos-delay="1200">
                                    <Link to="projects" className="flex items-center flex-wrap btn-primary-outline group">
                                        My Work
                                        <Arrow />
                                    </Link>
                                </span>
                            </div>

                            <div className="flex flex-wrap items-center" data-aos="fade-right" data-aos-delay="1400">
                                <div className="flex flex-wrap items-center">
                                    {/* Counter */}
                                    <span
                                        ref={counterRef}
                                        className="font-Syne text-black-800 font-bold text-[44px] leading-none counter"
                                    >
                                        50+
                                    </span>
                                    <span className="text-lg text-black-700 ml-3">Worldwide client</span>
                                    <span className="mx-8">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="14" viewBox="0 0 2 14" fill="none">
                                            <path d="M1 0L1 14" stroke="#080808" strokeOpacity="0.4" />
                                        </svg>
                                    </span>
                                </div>

            
                                <Icons/>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="hidden md:block">
                    <img
                        className="absolute top-0 right-0 md:max-w-[420px] lg:max-w-[570px] xl:max-w-[650px] 2xl:max-w-[700px] 3xl:max-w-[750px] "
                        data-aos="fade-left"
                        src="assets/images/hero/chi.png"
                        alt="hero Image"
                    />
                    <ContactGif />
                </div>
            </section>
        </div>
    );
}

export default Hero;
