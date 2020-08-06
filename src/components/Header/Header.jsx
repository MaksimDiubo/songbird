import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../Logo';
import Score from '../Score';

import './Header.scss';

const Header = ({ score }) => {
  Header.propTypes = {
    score: PropTypes.number.isRequired
  }

  return (
    <div className="header">
      <Logo />
      <Score score={score}/>
    </div>
  );
};

export default Header;
