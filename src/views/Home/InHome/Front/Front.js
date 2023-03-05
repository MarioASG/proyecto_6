import React from 'react';
import './Front.css';
import SongPlayer from './SongPlayer';

const Front = () => {

  return (
    <div className='front'>
      <div className='helloFront'>
        <div className='text1'>Hola, Soy Mario</div>
        <div className='text2'>Desarrollador Web</div>
        <SongPlayer />
      </div>
    </div>
  )
}

export default Front
