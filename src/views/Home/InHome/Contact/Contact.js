import React from 'react';
import './Contact.css';
import ContactButton from './InConctact/ContactButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faSpotify, faTiktok, faYoutube} from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contactIN'>
        
      <h1>CONTÁCTAME</h1>
      <h3>Interesado en oportunidades freelance y proyectos ambiciosos.
         Si tiene alguna pregunta o sugerencia, no dude en informarme.
      </h3>
      <ContactButton/>
      <p>
      Envíame un email a mariosanhuezag@hotmail.com ó encuéntrame en mis redes.
    </p>
      <div className='iconsContact'>
      <div className='iconContact'>
      <a href="https://www.instagram.com/marioandres__/" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faInstagram} size="lg" /></a>  
      </div>
      <div className='iconContact'>
      <a href="https://www.facebook.com/mario.sanhuezagarces/" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faFacebook} size="lg" /></a>
      </div>
      <div className='iconContact'>
      <a href="https://www.linkedin.com/in/mario-sanhueza-garc%C3%A9s-0717095b/" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faLinkedin} size="lg" /></a>
      </div>
      <div className='iconContact'>
      <a href="https://open.spotify.com/artist/4AIfdQrBJ9uYAcYISKV2jY/" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faSpotify} size="lg" /></a>
      </div>
      <div className='iconContact'>
      <a href="https://www.tiktok.com/@marioandres_/" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faTiktok} size="lg" /></a>
      </div>
      <div className='iconContact'>
      <a href="https://www.youtube.com/channel/UCD5w6fq2XRasve2jbO2b8vA/" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faYoutube} size="lg" /></a>
      </div>  
      </div>

      </div>
    

    </div>
  )
}

export default Contact

