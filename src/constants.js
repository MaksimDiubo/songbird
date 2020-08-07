const birdDataURL =
  'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/songbird/birds.js';

const birdGroups = [
  {
    value: 'Разминка',
    id: 1,
  },
  {
    value: 'Воробьиные',
    id: 2,
  },
  {
    value: 'Лесные птицы',
    id: 3,
  },
  {
    value: 'Певчие птицы',
    id: 4,
  },
  {
    value: 'Хищные птицы',
    id: 5,
  },
  {
    value: 'Морские птицы',
    id: 6,
  },
];

const CORRECT_ANSW_AUDIO_SRC = './audio/correct.mp3';
const WRONG_ANSW_AUDIO_SRC = './audio/error.mp3';
const NEXT_LVL_AUDIO_SRC = './audio/levelUP.mp3';
const END_ROUND_AUDIO_SRC = './audio/levelUP.mp3';

export { birdDataURL, birdGroups, CORRECT_ANSW_AUDIO_SRC, WRONG_ANSW_AUDIO_SRC, NEXT_LVL_AUDIO_SRC, END_ROUND_AUDIO_SRC };
