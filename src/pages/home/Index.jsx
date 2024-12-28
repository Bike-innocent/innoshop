import React, {  useEffect } from 'react';
import Title from '../../components/Title';
import Slider from './Slider/Slider';
// import Collection from './collection/Collection';
// import BestSeller from './best-seller/BestSeller';
// import Store from './store/Store';
// import Brand from './brand/Brand';
import Compare from './mini-component/Compare';
import Shop from '../shop/Shop';

function Index() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  return (
    <>
      <Title title="Chibuike Innocent - Web Developer" />
      <Slider />
      <Shop/>
      {/* <Collection />
      <BestSeller /> */}
      {/* <Store /> */}
      {/* <Brand /> */}
    
     
      <Compare />

    </>
  )
}

export default Index
