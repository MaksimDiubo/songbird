import React, { useState } from 'react';

import Header from '../Header';
import Navigation from '../Navigation';
import Question from '../Question';
import AnswerBlock from '../AnswerBlock';
import BirdDescription from '../BirdDescription';
import Placeholder from '../Placeholder';
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

  const [answerState, setAnswer] = useState({ score: 0, answerCounter: 5, answer: false, selectedVariant: null })

  const nextLevel = () => {
    if (questionState.index < birdGroups.length) {
      setQuestionState({
        category: birdsData[questionState.index + 1],
        question: getQuestion(birdsData[questionState.index + 1]),
        index: questionState.index + 1
      })
      setAnswer({
        ...answerState,
        answerCounter: 5,
        answer: false,
        selectedVariant: null,
      })
    }
  }

  const getSelectedBirdData = (selectedName) => {
    return questionState.category.filter((bird) =>
      Object.values(bird).includes(selectedName)
    )[0]
  }

  const checkAnswer = (answer, selectedName) => {
    const selectedVariant = getSelectedBirdData(selectedName)
    if (answer) {
      playSound(correctSound);
      setAnswer({
       ...answerState,
       score: answerState.score + answerState.answerCounter,
       answer,
       selectedVariant,
     })
      return
    }
    playSound(errorSound);
    setAnswer({
      ...answerState,
      answerCounter: answerState.answerCounter - 1,
      answer,
      selectedVariant,
    })
  }

  const showDescription = (selectedName) => {
    const selectedVariant = getSelectedBirdData(selectedName)
    setAnswer({
      ...answerState,
      selectedVariant,
    })
  }

  const { category, question, index } = questionState;
  const { score, answer, selectedVariant } = answerState;

  return (
    <div className='container'>
      <Header score={score}/>
      <Navigation
        birdGroups={ birdGroups }
        index={ index }
      />
      <Question
        question={ question }
        answer={answer}
      />
      <AnswerBlock
        category={ category }
        question={question}
        checkAnswer={checkAnswer}
        showDescription={showDescription}
      />
      {selectedVariant ? <BirdDescription selectedVariant={selectedVariant} /> : <Placeholder />}
      <BtnNextLevel answer={answer} nextLevel={nextLevel}/>
    </div>
  );
};

export default Container;
