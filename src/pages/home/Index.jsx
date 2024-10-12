import React from 'react'
import Hero from './hero/Hero'
import Service from './service/Service'
import About from './about/About'
import Tab from './tabs/Tab'
import Portfolio from './portfolio/Portfolio'
import Blog from './blog/Blog'
import Title from '../../components/Title';

function Index() {
  return (
    <>
    <Title title="Chibuike Innocent - Web Developer" /> 
      <Hero/>
      <Service/>
      <About/>
      <Tab/>
      <Portfolio/>
      {/* <Testimonial/> */}
      <Blog/>
      {/* <Pricing/> */}
    </>
  )
}

export default Index
