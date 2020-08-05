import React from 'react';

import './AudioPlayer.scss';

const AudioPlayer = () => {
  return (
    <audio
      className='audioPlayer'
      controls
      src='https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3'
    >
      <track kind="captions" />
    </audio>
  );
}

export default AudioPlayer;
