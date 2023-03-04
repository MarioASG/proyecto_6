import React from 'react';
import './About.css';
import Title from './InAbout/Title';
import InAbout from './InAbout/InAbout';
import Achievements from './InAbout/Achievements';
import Experience from './InAbout/Experience';

const About = () => {
  return (
    <div className='about'>
      <div className='aboutIN'>

      <Title/>
      <InAbout/>
      <Experience/>
      <Achievements/>
        
      </div>
    </div>
  )
}

export default About
