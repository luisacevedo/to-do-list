import React from "react";
import freeCodeCampLogo from '../pictures/FreeCodeCamp_logo.svg'
import '../stylesheets/Logo.css';

const Logo = () => (
  <div className='freecodecamp-logo-contenedor'>
    <img 
      className='freecodecamp-logo'
      src={ freeCodeCampLogo }
      alt='Logo de freeCodeCamp' />
  </div>
);

export default Logo;