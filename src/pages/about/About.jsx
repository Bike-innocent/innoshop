
import React from 'react';
import Hero from './mini-component/Hero';
import Exeperience from './mini-component/Exeperience';
// import Video from './mini-component/Video';
import Tab from './mini-component/tabs/Tab';
// import Testimonial from './mini-component/Testimonial';
import Title from '../../components/Title';

function About() {
    return (
        <>
            <Title title="About Me " /> 
            <Hero />
            <Exeperience />
            {/* <Video /> */}
            <Tab />
            {/* <Testimonial /> */}
        </>
    );
}

export default About;
