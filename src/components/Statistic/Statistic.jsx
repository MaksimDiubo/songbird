import React from 'react';
import PropTypes from 'prop-types';

import BtnNextLevel from '../BtnNextLevel';

import './Statistic.scss';

const Statistic = ({ score, restartGame }) => {
  Statistic.propTypes = {
    score: PropTypes.number.isRequired,
    restartGame: PropTypes.func.isRequired
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Итоговый счет игры: {score}</h3>
        <hr/>
        {score < 30 ? <p>Хороший результат!!!</p> : <p>Поздравляем! Вы набрали максимальное колличество очков!!! Приглашение на ежегодный форум орнитологов пришлем Вам по почте! Естественно голубиной....</p>}
        <hr/>
        <BtnNextLevel answer clickHandler={restartGame} btnValue="заново!" />
      </div>
    </div>
  );
};

export default Statistic;
