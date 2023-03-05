import React from 'react'
import proyecto_1 from '../../../../../assets/img/proyecto_1.png'
import proyecto_2 from '../../../../../assets/img/proyecto_2.png'
import proyecto_3 from '../../../../../assets/img/proyecto_3.png'
import proyecto_4 from '../../../../../assets/img/proyecto_4.png'
import proyecto_5 from '../../../../../assets/img/proyecto_5.png'
import './ProjectsBriefcase.css'

const ProjectsBriefcase = () => {
  return (
    <div className='imgProjectsAll'>
      <a href="https://github.com/MarioASG/LandingPage/" target='_blank' rel='noopener noreferrer'><img src={proyecto_1} alt="proyecto_1" className='imgProjects' id='imgProjects1' /></a>
      <a href="https://github.com/MarioASG/CRUD/" target='_blank' rel='noopener noreferrer'><img src={proyecto_2} alt="proyecto_2" className='imgProjects' id='imgProjects2'/></a>
      <a href="https://github.com/guitarAlgorithman/proyecto_3_dashboard/" target='_blank' rel='noopener noreferrer'><img src={proyecto_3} alt="proyecto_3" className='imgProjects' id='imgProjects3'/></a>
      <a href="https://github.com/MarioASG/proyecto_4/" target='_blank' rel='noopener noreferrer'><img src={proyecto_4} alt="proyecto_4" className='imgProjects' id='imgProjects4'/></a>
      <a href="https://github.com/MarioASG/proyecto_5/" target='_blank' rel='noopener noreferrer'><img src={proyecto_5} alt="proyecto_5" className='imgProjects' id='imgProjects5'/></a>
    </div>
  )
}

export default ProjectsBriefcase;


