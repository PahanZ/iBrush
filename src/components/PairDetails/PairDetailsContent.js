import React from 'react';
import PropTypes from 'prop-types';

const PairDetailsContent = props => (
  <div className="statistic_pair">
    <h4>Статиcтика за 24 часа</h4>
    <div className="transactions">
      <p>Объем торгов: {props.vol}</p>
      <p>Сумма сделок: {props.avg}</p>
    </div>
    <div className="prices">
      <p>Средняя цена сделки: {props.sellPrice}</p>
      <p>Максимальная цена сделки: {props.high}</p>
      <p>Минималльная цена сделки: {props.low}</p>
    </div>
  </div>
);

PairDetailsContent.propTypes = {
  vol: PropTypes.string.isRequired,
  avg: PropTypes.string.isRequired,
  sellPrice: PropTypes.string.isRequired,
  high: PropTypes.string.isRequired,
  low: PropTypes.string.isRequired,
};

export default PairDetailsContent;
