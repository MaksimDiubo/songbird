import React from 'react';
import PropTypes from 'prop-types';

import AudioPlayer from '../AudioPlayer';

import defaultImg from '../../../public/images/default/DefaultImg.png'

import './AboutBird.scss';

const AboutBird = ({ mode, question: { name, species, description, image, audio }, answer }) => {
  AboutBird.propTypes = {
    mode: PropTypes.string.isRequired,
    question: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      species: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
      audio: PropTypes.string
    }).isRequired,
    answer: PropTypes.bool.isRequired
  };

  const text = (
    <div className="description">
      <p>
        { answer ? description : '***' }
      </p>
    </div>
  );

  const latinName = (
    <div>
      <h4>{ answer ? species : '***' }</h4>
      <hr className="hr" />
    </div>
  );

  const aboutBirdInner = (
    <>
      <div className="question">
        <div className="birdImg" style={{backgroundImage: `url(${answer ? image : defaultImg})`}}/>
          <div className="info">
            <h3>{ answer ? name : '***' }</h3>
            <hr className="hr" />
            {mode === 'description' ? latinName : null}
            <AudioPlayer src={audio}/>
          </div>
        </div>
      {mode === 'description' ? text : null}
    </>
  )

  const aboutBirdPlaceholder = (
    <>
      <span className="description">Послушайте плейер и выберите название птицы, чей голос прозвучал</span>
    </>
  )

  return (
    <div className={mode === 'description' ? 'aboutBird aboutBird-description' : 'aboutBird'}>
      { !answer && mode === 'description' ? aboutBirdPlaceholder : aboutBirdInner}
    </div>
  );
};

export default AboutBird;
