import React from 'react';

function BackToTop() {
    // Function to handle the scroll to top action
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scrolling behavior
        });
    };

    return (
        <>
            <div className="border-t border-gray-500 pt-6 py-[72px]">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 sm:col-span-8 order-last sm:order-first">
                        <p className="text-white text-lg font-normal font-sans leading-7">©2024 Chibuike Innocent, All Rights Reserved
                        </p>
                    </div>
                    <div className="col-span-12 sm:col-span-4 order-first sm:order-last">
                        <div className="flex justify-end mb-2 sm:mb-0">
                            {/* Use a button instead of Link to avoid navigation */}
                            <button
                                className="flex flex-wrap items-center gap-2 group"
                                onClick={scrollToTop}
                                aria-label="scroll up"
                            >
                                <span className="text-white text-lg font-normal font-sans leading-7 transition-all group-hover:text-orange">
                                    Back to Top
                                </span>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 19V5"
                                        stroke="#3B82F6"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M19 12L12 5L5 12"
                                        stroke="#3B82F6"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BackToTop;
