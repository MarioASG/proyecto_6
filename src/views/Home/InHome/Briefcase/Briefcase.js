import React from 'react'
import './Briefcase.css';
import MyPortfolio from './InBriefcase/MyPortfolio';
import ProjectsBriefcase from './InBriefcase/ProjectsBriefcase';
import BriefcaseButton from './InBriefcase/BriefcaseButton';

const Briefcase = () => {
  return (
    <div className='briefcase' id='briefcase-section'>
      <div className='briefcaseRow'>
      <MyPortfolio />
      <BriefcaseButton/>
      </div>
      <ProjectsBriefcase />

    </div>
  )
}

export default Briefcase
