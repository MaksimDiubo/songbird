import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import mood from '../../../public/images/icons/mood.svg';
import moodBad from '../../../public/images/icons/mood_bad.svg';

import './Answer.scss';

const Answer = ({ name, questionName, checkAnswer, showDescription, levelEnd, isLevelEnd }) => {
  Answer.propTypes = {
    name: PropTypes.string.isRequired,
    questionName: PropTypes.string.isRequired,
    checkAnswer: PropTypes.func.isRequired,
    showDescription: PropTypes.func.isRequired,
    levelEnd: PropTypes.func.isRequired,
    isLevelEnd: PropTypes.bool.isRequired
  };

  const [isCorrect, setCorrect] = useState(null)
  const [isClicked, setClicked] = useState(false)

  useEffect(()=> {
    setCorrect(null)
    setClicked(false)
  }, [name, questionName])

  const clickHandler = () => {
      if (!isClicked && !isLevelEnd) {
        setClicked(true)
        if (name === questionName) {
          setCorrect(true)
          checkAnswer(true, name, true)
          levelEnd()
        } else {
          setCorrect(false)
          checkAnswer(false, name, true)
        }
      } else {
        showDescription(name)
      }
  }

  let classNames = 'answer';
  if (isCorrect !== null) {
    if (isCorrect) {
      classNames += ' correct'
    } else {
    classNames += ' wrong'
    }
  }

  let icon = null
  if (isCorrect !== null) {
    icon = (
      <img src={isCorrect ? mood : moodBad} alt="img" />
    )
  }

  return (
    <button
      type="button"
      name={name}
      className={classNames}
      onClick={(e) => clickHandler(e)}
    >
      { name }
      {icon}
    </button>
  );
};

export default Answer;
