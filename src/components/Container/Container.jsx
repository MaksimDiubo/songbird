import React, { useState } from 'react';

import Header from '../Header';
import Navigation from '../Navigation';
import AboutBird from '../AboutBird';
import AnswerBlock from '../AnswerBlock';
import BtnNextLevel from '../BtnNextLevel';

import { birdGroups } from '../../constants';
import correctSound from '../../../public/audio/correct.mp3';
import errorSound from '../../../public/audio/error.mp3';
// import levelSound from '../../../public/audio/levelUp.mp3';
// import roundSound from '../../../public/audio/roundEnd.mp3';
import birdsData from '../../data/birdsData';
import getRandom from '../../utils/getRandom';
import playSound from '../../utils/playSound';

import './Container.scss';

const Container = () => {

  const getQuestion = (category) => {
    const index = getRandom(0, category.length);
    return category[index];
  }

  const [questionState, setQuestionState] = useState({ category: birdsData[0], question: getQuestion(birdsData[0]), index: 0 });

  const navClickHandler = (index) => {
    setQuestionState({ category: birdsData[index], question: getQuestion(birdsData[index]), index });
  };

  const [scoreState, setScore] = useState({ score: 0, answerCounter: 5, answer: false })

  const nextLevel = () => {
    if (questionState.index < birdGroups.length) {
      setQuestionState({
        category: birdsData[questionState.index + 1],
        question: getQuestion(birdsData[questionState.index + 1]),
        index: questionState.index + 1
      })
      setScore({
        ...scoreState,
        answerCounter: 5,
        answer: false
      })
    }
  }

  const checkAnswer = (answer) => {
    if (answer) {
      playSound(correctSound);
      setScore({
       ...scoreState,
       score: scoreState.score + scoreState.answerCounter,
       answer,
     })
      return
    }
    playSound(errorSound);
    setScore({ ...scoreState, answerCounter: scoreState.answerCounter - 1, answer })
  }

  const { category, question } = questionState;
  const { score, answer } = scoreState;

  return (
    <div className='container'>
      <Header score={score}/>
      <Navigation birdGroups={ birdGroups } navClickHandler={navClickHandler} />
      <AboutBird mode='question' question={ question } answer={answer}/>
      <AnswerBlock
        category={ category }
        question={question}
        checkAnswer={checkAnswer}
        disabled={answer}
      />
      <AboutBird mode='description' question={ question } answer={answer}/>
      <BtnNextLevel answer={answer} nextLevel={nextLevel}/>
    </div>
  );
};

export default Container;
