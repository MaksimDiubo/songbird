import React, {useRef} from 'react';
import PropTypes from 'prop-types';

import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';

import './AudioPlayer.scss';

const Player = ({ src, autoPlay, answer }) => {
  Player.propTypes = {
    src: PropTypes.string.isRequired,
    autoPlay: PropTypes.bool,
    answer: PropTypes.bool,
  }

 Player.defaultProps = {
    autoPlay: false,
    answer: false
  };

  const player = useRef(null)

  if (answer) {
    player.current.audio.current.pause()
  }

  return (
    <AudioPlayer
      className="audioPlayer"
      autoPlay={ autoPlay }
      autoPlayAfterSrcChange={false}
      src={ src }
      showJumpControls={false}
      showDownloadProgress={false}
      customProgressBarSection={
        [
          RHAP_UI.CURRENT_TIME,
          RHAP_UI.PROGRESS_BAR,
          RHAP_UI.DURATION,
        ]
      }
      customAdditionalControls={[]}
      ref={player}
    />
  );
};

export default Player;
