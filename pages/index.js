import React from 'react';

import Intro from '../components/Intro';
import About from './about';
import Portfolio from './portfolio';
import GetInTouch from '../components/GetInTouch';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div>
      <Intro />
      <About />
      <Portfolio />
      <Footer />
      <GetInTouch />
    </div>
  );
};

export default Index;
