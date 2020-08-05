import React from 'react';
import PropTypes from 'prop-types';

import './AudioPlayer.scss';

const AudioPlayer = ({ src }) => {
  AudioPlayer.propTypes = {
    src: PropTypes.string.isRequired
  }

  return (
    <audio
      className="audioPlayer"
      controls
      src={ src }    >
      <track kind="captions" />
    </audio>
  );
};

export default AudioPlayer;
