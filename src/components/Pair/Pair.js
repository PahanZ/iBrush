import React from 'react';
import PropTypes from 'prop-types';
import StatisticIcon from '../StaticsticIcon/StatisticIcon';
import './Pair.css';

const Pair = props => (
  <button
    className="pair"
    onClick={() => {
      props.showPopup(props.pairData, props.className);
    }}
  >
    <h3 className={`pairHead ${props.className}`}>{props.pairData.pair}</h3>
    <div className="statistic">
      { props.className !== 'without changes' ?
        <StatisticIcon className={props.className} /> :
        null
      }
      <p>{Number(props.pairData.buy_price).toFixed(5)}</p>
    </div>
  </button>
);

Pair.propTypes = {
  pairData: PropTypes.shape({
    pair: PropTypes.string,
    buy_price: PropTypes.string,
  }).isRequired,
  className: PropTypes.string.isRequired,
  showPopup: PropTypes.func.isRequired,
};

export default Pair;
