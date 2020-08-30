import React from 'react';
import PropTypes from 'prop-types';

import BtnNextLevel from '../BtnNextLevel';
import Logo from '../Logo';

import './WelcomeDialog.scss';

const WelcomeDialog = ({ restartGame }) => {
  WelcomeDialog.propTypes = {
    restartGame: PropTypes.func.isRequired,
  };

  return (
    <div className="welcomeDialog">
      <div className="welcomeDialog-content">
        <h2>
          Привет! Добро пожаловать в
        </h2>
        <Logo />
        <hr />
        <p>Слушай голоса и угадывай птиц!</p>
        <BtnNextLevel answer clickHandler={restartGame} btnValue="старт!" />
      </div>
    </div>
  );
};

export default WelcomeDialog;
