import React from 'react';

import Logo from '../Logo';
import Score from '../Score';

import './Header.scss';

const Header = () => {
  return (
    <div className='header'>
      <Logo />
      <Score />
    </div>
  )
}

export default Header
