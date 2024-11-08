import React, {  useEffect } from 'react';
import Title from '../../components/Title';
import Slider from './Slider/Slider';
import Collection from './collection/Collection';
import BestSeller from './best-seller/BestSeller';
import Store from './store/Store';
import Brand from './brand/Brand';
import QuickAdd from './mini-component/QuickAdd';
import QuickView from './mini-component/QuickView';
import Compare from './mini-component/Compare';

function Index() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  return (
    <>
      <Title title="Chibuike Innocent - Web Developer" />
      <Slider />
      <Collection />
      <BestSeller />
      <Store />
      {/* <Brand /> */}
      <QuickAdd/>
      <QuickView />
      <Compare />

    </>
  )
}

export default Index
