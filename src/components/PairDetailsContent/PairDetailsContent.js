import React from 'react';
import PropTypes from 'prop-types';
import './PairDetailsContent.css';

const PairDetailsContent = ({
  vol, volCurr, avg, high, low,
}) => (
  <div className="statistic_pair">
    <h4>Статиcтика за 24 часа</h4>
    <div className="transactions">
      <p>Объем торгов: {vol}</p>
      <p>Сумма сделок: {volCurr}</p>
    </div>
    <div className="prices">
      <p>Средняя цена сделки: {avg}</p>
      <p>Максимальная цена сделки: {high}</p>
      <p>Минималльная цена сделки: {low}</p>
    </div>
  </div>
);

PairDetailsContent.propTypes = {
  vol: PropTypes.string.isRequired,
  avg: PropTypes.string.isRequired,
  volCurr: PropTypes.string.isRequired,
  high: PropTypes.string.isRequired,
  low: PropTypes.string.isRequired,
};

export default PairDetailsContent;
