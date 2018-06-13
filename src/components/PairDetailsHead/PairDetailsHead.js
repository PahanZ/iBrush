import React from 'react';
import PropTypes from 'prop-types';
import StatisticIcon from '../StaticsticIcon/StatisticIcon';
import './PairDetailsHead.css';

const PairDetailsHead = ({
  pair, pairStatus, buyPrice, hidePairDetails,
}) => (
  <div className="popup_head">
    <h2>{pair}</h2>
    <div className="popup_buy_price">
      {pairStatus !== 0 ?
        <StatisticIcon pairStatus={pairStatus} /> : null
      }
      <h3>{buyPrice}</h3>
    </div>
    <button
      className="close"
      onClick={hidePairDetails}
    >&times;
    </button>
  </div>
);

PairDetailsHead.propTypes = {
  pair: PropTypes.string.isRequired,
  pairStatus: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]).isRequired,
  buyPrice: PropTypes.string.isRequired,
  hidePairDetails: PropTypes.func.isRequired,
};

export default PairDetailsHead;
