import React from 'react';
import PropTypes from 'prop-types';
import StatisticIcon from '../StaticsticIcon/StatisticIcon';

const PairDetailsHead = props => (
  <div className="popup_head">
    <h2>{props.pair}</h2>
    <div className="popup_buy_price">
      {props.pairStatus !== 0 ?
        <StatisticIcon pairStatus={props.pairStatus ? props.pairStatus : false} /> :
        null
      }
      <h3>{props.buyPrice}</h3>
    </div>
    {/* eslint-disable */}
        <div
            className="close"
            onClick={() => {
                props.hidePairDetails();
            }}
        >&times;
        </div>
        {/* eslint-enable */}
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
