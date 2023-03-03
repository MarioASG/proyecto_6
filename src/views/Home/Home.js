import React from 'react';
import Front from '../Home/InHome/Front/Front';
import Briefcase from './InHome/Briefcase/Briefcase';
import About from './InHome/About/About';
import Skills from './InHome/Skills/Skills';


const Home = () => {
  return (
    <div>
      <Front/>
      <Briefcase/>
      <About/>
      <Skills/>
    </div>
  )
}

export default Home
