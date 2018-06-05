import React from 'react';
import PropTypes from 'prop-types';
import StatisticIcon from '../../StaticsticIcon/StatisticIcon';
import './Pair.css';

const Pair = props => (
  <button
    className="pair"
    onClick={() => {
      props.showPairDetails(props.pairData, props.pairStatus);
    }}
  >
    <h3 className={`pair_head ${props.pairStatus ? 'up' : 'down'}`}>{props.pairData.pair}</h3>
    <div className="statistic">
      { props.pairStatus !== null ?
        <StatisticIcon pairStatus={!!props.pairStatus} /> :
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
  pairStatus: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]).isRequired,
  showPairDetails: PropTypes.func.isRequired,
};

export default Pair;
