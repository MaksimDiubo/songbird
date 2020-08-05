import React from 'react';

import mood from '../../../public/images/icons/mood.svg';

import './Answer.scss';

const Answer = () => {
  return (
    <div className= 'answer'>
      <span>Bird</span>
      <img src={mood} alt="img"/>
    </div>
  );
}

export default Answer;
