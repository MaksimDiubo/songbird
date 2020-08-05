import React, { useState } from 'react';

import Header from '../Header';
import Navigation from '../Navigation';
import AboutBird from '../AboutBird';
import AnswerBlock from '../AnswerBlock';
import BtnNextLevel from '../BtnNextLevel';

import { birdGroups } from '../../constants';
import birdsData from '../../data/birdsData';
import getRandom from '../../utils/getRandom';

import './Container.scss';

const Container = () => {

  const getQuestion = (group) => {
    const index = getRandom(0, group.length);
    return group[index];
  }

  const [birdGroup, setBirdGroup] = useState(birdsData[0]);

  const navClickHandler = (index) => {
    setBirdGroup(birdsData[index]);
  };

  const question = getQuestion(birdGroup)

  const checkAnswer = (answer) => {
    console.log(answer)

  }

  return (
    <div className='container'>
      <Header />
      <Navigation birdGroups={ birdGroups } navClickHandler={navClickHandler} />
      <AboutBird mode='question' question={ question }/>
      <AnswerBlock
        birdGroup={ birdGroup }
        question={question}
        checkAnswer={checkAnswer}
      />
      <AboutBird mode='description' question={ question }/>
      <BtnNextLevel />
    </div>
  );
};

export default Container;
