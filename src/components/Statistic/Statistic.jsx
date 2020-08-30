import React from 'react';
import PropTypes from 'prop-types';

import BtnNextLevel from '../BtnNextLevel';

import { MAX_SCORE } from '../../constants';

import './Statistic.scss';

const Statistic = ({ score, restartGame }) => {
  Statistic.propTypes = {
    score: PropTypes.number.isRequired,
    restartGame: PropTypes.func.isRequired,
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>
          Вы набради {score} из {MAX_SCORE}{' '}
        </h3>
        <hr />
        {score < MAX_SCORE ? (
          <p>Хороший результат!!!</p>
        ) : (
          <p>
            Поздравляем с абсолютной победой! Вы набрали максимальное колличество очков!!! Приглашение на ежегодный форум
            орнитологов высылаем Вам почтой! Естественно голубиной почтной ....
          </p>
        )}
        <hr />
        {score < MAX_SCORE ? <BtnNextLevel answer clickHandler={restartGame} btnValue="заново!" /> : <h3>Игра завершена</h3>}
      </div>
    </div>
  );
};

export default Statistic;
