import React from 'react';
import PropTypes from 'prop-types';

import './Score.scss';

const Score = ({ score }) => {
  Score.propTypes = {
    score: PropTypes.number.isRequired
  }

  return (
    <p className="score">
      Score: <span>{score}</span>
    </p>
  );
};

export default Score;
