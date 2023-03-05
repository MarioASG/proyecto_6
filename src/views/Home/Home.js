import React from 'react';
import Front from '../Home/InHome/Front/Front';
import Briefcase from './InHome/Briefcase/Briefcase';
import About from './InHome/About/About';
import Contact from './InHome/Contact/Contact';



const Home = () => {
  return (
    <div id='home-section'>
      <Front/>
      <Briefcase/>
      <About/>
      <Contact/>
    </div>
  )
}

export default Home
