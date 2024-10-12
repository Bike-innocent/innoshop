// import React from 'react'
// import AboutTab from './mini-component/AboutTab'
// import ExperienceTab from './mini-component/ExperienceTab'
// import EducationTab from './mini-component/EducationTab'
// import SkillsTab from './mini-component/SkillsTab'
// import AwardsTab from './mini-component/AwardsTab'
// import TabButton from './mini-component/TabButton'

// function Tab() {
//     return (
//         <>


//             <section class="featured-properties py-[80px] lg:py-[100px]">
//                 <div class="container">
//                     <div class="grid grid-cols-12 lg:gap-[60px] xl:gap-[100px] 2xl:gap-[134px]">

//                         <div class="col-span-12 lg:col-span-5 2xl:col-span-4" data-aos="fade-up">

//                             <div class="font-bold font-Syne leading-none flex flex-wrap flex-col gap-y-2 mb-4">
//                                 <span class="text-orange text-xl">Resume</span>
//                                 <h3 class="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px] relative before:rounded-full before:bg-primary before:block before:absolute before:top-[2px] before:left-0 before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[64px] before:h-[36px] lg:before:h-[48px] xl:before:h-[64px]">
//                                     All over my details find here...
//                                 </h3>



//                             </div>
//                             <div class="tabs flex flex-wrap lg:flex-col gap-2 my-8 lg:my-0">
//                                 <button data-tab="about_me_tab" class="tab-btn justify-between items-center inline-flex group active">
//                                     About me
//                                    <TabButton/>
//                                 </button>
//                                 <button data-tab="experience_tab" class="tab-btn justify-between items-center inline-flex group">
//                                     Experience
//                                    <TabButton/>
//                                 </button>
//                                 <button data-tab="education_tab" class="tab-btn justify-between items-center inline-flex group">
//                                     Education
//                                    <TabButton/>
//                                 </button>
//                                 <button data-tab="skills_tab" class="tab-btn justify-between items-center inline-flex group">
//                                     Skills
//                                    <TabButton/>
//                                 </button>
//                                 <button data-tab="awards_tab" class="tab-btn justify-between items-center inline-flex group">
//                                     Awards
//                                    <TabButton/>
//                                 </button>
//                             </div>
//                         </div>

//                         <div class="col-span-12 lg:col-span-7 2xl:col-span-8" data-aos="fade-up" data-aos-delay="400">
//                             <AboutTab />

//                             <ExperienceTab />

//                             <EducationTab />

//                             <SkillsTab />

//                             <AwardsTab/>

//                             <span class="flex justify-end mt-14 -mr-3">
//                                 <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path
//                                         d="M27.5625 0C27.5625 23.1273 9.1875 28.5455 0 27.8182C16.875 31.0909 25.3125 34.3636 27 54C27 40.3636 34.875 30.5455 54 27.8182C46.125 28.3636 29.8125 24 27.5625 0Z"
//                                         fill="#FFB646" />
//                                 </svg>
//                             </span>
//                         </div>
//                     </div>
//                 </div>
//             </section>


//         </>
//     )
// }

// export default Tab

import React, { useState } from 'react';
import AboutTab from './mini-component/AboutTab';
import ExperienceTab from './mini-component/ExperienceTab';
import EducationTab from './mini-component/EducationTab';
import SkillsTab from './mini-component/SkillsTab';
import AwardsTab from './mini-component/AwardsTab';
import TabButton from './mini-component/TabButton';

function Tab() {
    const [activeTab, setActiveTab] = useState('about_me_tab'); // Default active tab

    const handleTabClick = (tabId) => {
        setActiveTab(tabId); // Set active tab on click
    };

    return (
        <section className="featured-properties py-[80px] lg:py-[100px]">
            <div className="container">
                <div className="grid grid-cols-12 lg:gap-[60px] xl:gap-[100px] 2xl:gap-[134px]">
                    <div className="col-span-12 lg:col-span-5 2xl:col-span-4" data-aos="fade-up">
                        <div className="font-bold font-Syne leading-none flex flex-wrap flex-col gap-y-2 mb-4">
                            <span className="text-orange text-xl">Resume</span>
                            <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px] relative before:rounded-full  before:block before:absolute before:top-[2px] before:left-0 before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[64px] before:h-[36px] lg:before:h-[48px] xl:before:h-[64px]">
                                All over my details find here...
                            </h3>
                        </div>
                        <div className="tabs flex flex-wrap lg:flex-col gap-2 my-8 lg:my-0">
                            {/* Tab Buttons */}
                            <button
                                onClick={() => handleTabClick('about_me_tab')}
                                className={`tab-btn justify-between items-center inline-flex group ${activeTab === 'about_me_tab' ? 'active' : ''}`}
                            >
                                About me
                                <TabButton />
                            </button>
                            <button
                                onClick={() => handleTabClick('experience_tab')}
                                className={`tab-btn justify-between items-center inline-flex group ${activeTab === 'experience_tab' ? 'active' : ''}`}
                            >
                                Experience
                                <TabButton />
                            </button>
                            <button
                                onClick={() => handleTabClick('education_tab')}
                                className={`tab-btn justify-between items-center inline-flex group ${activeTab === 'education_tab' ? 'active' : ''}`}
                            >
                                Education
                                <TabButton />
                            </button>
                            <button
                                onClick={() => handleTabClick('skills_tab')}
                                className={`tab-btn justify-between items-center inline-flex group ${activeTab === 'skills_tab' ? 'active' : ''}`}
                            >
                                Skills
                                <TabButton />
                            </button>
                            {/* <button
                                onClick={() => handleTabClick('awards_tab')}
                                className={`tab-btn justify-between items-center inline-flex group ${activeTab === 'awards_tab' ? 'active' : ''}`}
                            >
                                Awards
                                <TabButton />
                            </button> */}
                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-7 2xl:col-span-8" data-aos="fade-up" data-aos-delay="400">
                        {/* Tab Content */}
                        <div id="about_me_tab" className={`tab-content ${activeTab === 'about_me_tab' ? 'active' : ''}`}>
                            <AboutTab />
                        </div>
                        <div id="experience_tab" className={`tab-content ${activeTab === 'experience_tab' ? 'active' : ''}`}>
                            <ExperienceTab />
                        </div>
                        <div id="education_tab" className={`tab-content ${activeTab === 'education_tab' ? 'active' : ''}`}>
                            <EducationTab />
                        </div>
                        <div id="skills_tab" className={`tab-content ${activeTab === 'skills_tab' ? 'active' : ''}`}>
                            <SkillsTab />
                        </div>
                        <div id="awards_tab" className={`tab-content ${activeTab === 'awards_tab' ? 'active' : ''}`}>
                            <AwardsTab />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Tab;
