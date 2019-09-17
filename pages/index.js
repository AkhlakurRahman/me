import React from 'react';

import Intro from '../components/Intro';
import About from './about';
import Portfolio from './portfolio';
import CV from './cv';

const Index = () => {
  return (
    <div>
      <Intro />
      <About />
      <Portfolio />
      <CV />
    </div>
  );
};

export default Index;
