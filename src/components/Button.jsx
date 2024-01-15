import React from 'react';
import iconButton from '../assets/iconButton.svg';

const Button = () => {
  return (
    <div>

      <img className='opacity-40 hover:opacity-100 transition-all duration-300' src={iconButton} alt="iconbutton" />
    </div>
  );
}

export default Button;
