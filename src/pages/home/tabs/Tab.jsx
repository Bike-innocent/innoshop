

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
