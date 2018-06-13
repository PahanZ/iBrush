import React from 'react';
import PropTypes from 'prop-types';
import StatisticIcon from '../StaticsticIcon/StatisticIcon';
import './Pair.css';

const Pair = ({ pairStatus, pairData, showPairDetails }) => (
  <button
    className="pair"
    onClick={() => {
      showPairDetails(pairData, pairStatus);
    }}
  >
    <h3 className={`pair_head ${pairStatus !== 0 ?
      `${pairStatus ? 'up' : 'down'}` : ''}`}
    >
      {pairData.pair}
    </h3>
    <div className="statistic">
      { pairStatus !== 0 ?
        <StatisticIcon pairStatus={pairStatus || false} /> :
        null
      }
      <p>{Number(pairData.buy_price).toFixed(5)}</p>
    </div>
  </button>
);

Pair.propTypes = {
  pairData: PropTypes.shape({
    pair: PropTypes.string,
    buy_price: PropTypes.string,
  }).isRequired,
  pairStatus: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]).isRequired,
  showPairDetails: PropTypes.func.isRequired,
};

export default Pair;
