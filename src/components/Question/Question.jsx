import React from 'react';
import PropTypes from 'prop-types';

import AudioPlayer from '../AudioPlayer';

import defaultImg from '../../../public/images/default/DefaultImg.png';

import './Question.scss';

const Question = ({ question: { name, image, audio }, answer }) => {
  Question.propTypes = {
    question: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      species: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
      audio: PropTypes.string,
    }).isRequired,
    answer: PropTypes.bool.isRequired,
  };

  return (
    <div className="question">
      <div className="birdImg" style={{ backgroundImage: `url(${answer ? image : defaultImg})` }} />
      <div className="questionInner">
        <h3>{answer ? name : '***'}</h3>
        <AudioPlayer src={audio} autoPlay answer={answer} />
      </div>
    </div>
  );
};

export default Question;
