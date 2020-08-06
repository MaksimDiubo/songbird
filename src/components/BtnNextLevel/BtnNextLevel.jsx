import React from 'react';
import PropTypes from 'prop-types';

import './BtnNexLevel.scss';

const BtnNexLevel = ({ nextLevel, answer }) => {
  BtnNexLevel.propTypes = {
    nextLevel: PropTypes.func.isRequired,
    answer: PropTypes.bool.isRequired
  }

  return (
    <button
      type="button"
      className="btn"
      disabled={!answer}
      onClick={() => nextLevel()}
    >
      next level
    </button>
  );
};

export default BtnNexLevel;
