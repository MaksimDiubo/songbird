import React from 'react';

import Header from '../Header';
import Navigation from '../Navigation';
import AboutBird from '../AboutBird';
import AnswerBlock from '../AnswerBlock';
import BtnNextLevel from '../BtnNextLevel';

import './Container.scss';

const Container = () => {
  return (
    <div className='container'>
      <Header />
      <Navigation />
      <AboutBird />
      <AnswerBlock />
      <AboutBird mode='description'/>
      <BtnNextLevel />
    </div>
  )
}

export default Container
