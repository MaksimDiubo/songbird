import React from 'react';

import Answer from '../Answer';

import './AnswerBlock.scss';

const AnswerBlock = () => {
  return (
    <div className= 'answerBlock'>
      <Answer />
      <Answer />
      <Answer />
    </div>
  );
}

export default AnswerBlock;
