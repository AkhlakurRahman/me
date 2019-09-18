import React from 'react';

import Intro from '../components/Intro';
import About from './about';
import Portfolio from './portfolio';
import CV from './cv';
import GetInTouch from '../components/GetInTouch';

const Index = () => {
  return (
    <div>
      <Intro />
      <About />
      <Portfolio />
      <GetInTouch />
    </div>
  );
};

export default Index;
