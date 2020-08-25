import React from 'react';
import PropTypes from 'prop-types';

import './BtnNexLevel.scss';

const BtnNexLevel = ({ clickHandler, answer, btnValue }) => {
  BtnNexLevel.propTypes = {
    clickHandler: PropTypes.func.isRequired,
    answer: PropTypes.bool.isRequired,
    btnValue: PropTypes.string.isRequired
  }

  return (
    <button
      type="button"
      className="btn"
      disabled={!answer}
      onClick={() => clickHandler()}
    >
      { btnValue }
    </button>
  );
};

export default BtnNexLevel;
