import React from 'react';
import PropTypes from 'prop-types';

import AudioPlayer from '../AudioPlayer';

import './AboutBird.scss';

const AboutBird = ({ mode, question: { name, species, description, image, audio } }) => {
  AboutBird.propTypes = {
    mode: PropTypes.string.isRequired,
    question: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      species: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
      audio: PropTypes.string
    }).isRequired
  };

  const text = (
    <div className="description">
      <p>
        { description }
      </p>
    </div>
  );

  const latinName = (
    <div>
      <h4>{ species }</h4>
      <hr className="hr" />
    </div>
  );

  return (
    <div className={mode === 'description' ? 'aboutBird aboutBird-description' : 'aboutBird'}>
      <div className="question">
        <div className="birdImg" style={{backgroundImage: `url(${image})`}}/>
        <div className="info">
          <h3>{ name }</h3>
          <hr className="hr" />
          {mode === 'description' ? latinName : null}
          <AudioPlayer src={audio}/>
        </div>
      </div>
      {mode === 'description' ? text : null}
    </div>
  );
};

export default AboutBird;
