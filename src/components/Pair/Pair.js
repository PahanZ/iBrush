import React from 'react';
import PropTypes from 'prop-types';
import StatisticIcon from '../StaticsticIcon/StatisticIcon';
import './Pair.css';

const Pair = props => (
  <div className="pair">
    <h3 className={`pairHead ${props.className}`}>{props.pairHead}</h3>
    <div className="statistic">
      { props.className !== 'without changes' ?
        <StatisticIcon className={props.className} /> :
        null
      }
      <p>{props.buyPrice}</p>
    </div>
  </div>
);

Pair.propTypes = {
  pairHead: PropTypes.string.isRequired,
  buyPrice: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Pair;
