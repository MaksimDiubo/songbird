import React from 'react';
import PropTypes from 'prop-types';

import AudioPlayer from '../AudioPlayer';

import './AboutBird.scss';

const AboutBird = ({ mode }) => {
  AboutBird.propTypes = {
    mode: PropTypes.string.isRequired,
  }

  const description = (
    <div className='description'>
      <p>
        Значимость этих проблем настолько очевидна, что консультация
        с широким активом позволяет выполнять важные задания по разработке
          направлений прогрессивного развития. Задача организации, в особенности
          же новая модель организационной деятельности требуют определения и уточнения
            направлений прогрессивного развития.
      </p>
    </div>
  )

  const latinName = (
    <div>
      <h4>Latinus birdus</h4>
      <hr className='hr'/>
    </div>
  )

  return (
    <div className={mode === 'description' ? 'aboutBird aboutBird-description' : 'aboutBird'}>
      <div className='question'>
        <div className='birdImg' />
        <div className='info'>
          <h3>Bird</h3>
          <hr className='hr'/>
          {mode === 'description' ? latinName : null}
          <AudioPlayer />
        </div>
      </div>
      {mode === 'description' ? description : null}
    </div>
  );
}

export default AboutBird;
