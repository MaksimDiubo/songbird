import React, {useRef} from 'react';
import PropTypes from 'prop-types';

import './AudioPlayer.scss';

const AudioPlayer = ({ src, autoPlay, answer }) => {
  AudioPlayer.propTypes = {
    src: PropTypes.string.isRequired,
    autoPlay: PropTypes.bool,
    answer: PropTypes.bool,
  }

  AudioPlayer.defaultProps = {
    autoPlay: false,
    answer: false
  };

  const player = useRef(null)

  if (answer) {
    player.current.pause()
  }

  return (
    <audio
      className="audioPlayer"
      controls
      src={ src }
      autoPlay={autoPlay}
      loop
      ref={player}
    >
      <track kind="captions" />
    </audio>
  );
};

export default AudioPlayer;
