import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Answer from '../Answer';

import './AnswerBlock.scss';

const AnswerBlock = ({ category, question: { name: questionName }, checkAnswer, showDescription }) => {
  AnswerBlock.propTypes = {
    category: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        species: PropTypes.string,
        description: PropTypes.string,
        image: PropTypes.string,
        audio: PropTypes.string
      })
    ).isRequired,
    question: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      species: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
      audio: PropTypes.string
    }).isRequired,
    checkAnswer: PropTypes.func.isRequired,
    showDescription: PropTypes.func.isRequired,
  };

  const [isLevelEnd, setLevelEnd] = useState(false)

  useEffect(() => {
    setLevelEnd(false)
  }, [category])

  const levelEnd = () => {
    setLevelEnd(true)
  }

  return (
    <div className="answerBlock">
      { category.map((el) => {
        const { id, name } = el;
        return (
          <Answer
            key={id.toString()}
            name={name}
            questionName={questionName}
            checkAnswer={checkAnswer}
            showDescription={showDescription}
            levelEnd={levelEnd}
            isLevelEnd={isLevelEnd}
          />
        )
      })}
    </div>
  );
};

export default AnswerBlock;
