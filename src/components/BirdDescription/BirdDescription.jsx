import React from 'react';
import PropTypes from 'prop-types';

import AudioPlayer from '../AudioPlayer';

import './BirdDescription.scss';

const BirdDescription = ({ selectedVariant: { name, species, description, image, audio } }) => {
  BirdDescription.propTypes = {
    selectedVariant: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      species: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
      audio: PropTypes.string,
    }).isRequired,
  };

  return (
    <div className="description" style={{ backgroundImage: `url(${image})` }}>
      <div className="descriptionInner">
        <div className="info">
          <h3>{name}</h3>
          <hr className="hr" />
          <h4>{species}</h4>
          <hr className="hr" />
          <AudioPlayer src={audio} />
        </div>
      </div>
      <div className="text">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BirdDescription;
