import React from 'react';
import PropTypes from 'prop-types';
import './StatisticIcon.css';

const up = require('../../assets/up.png');
const down = require('../../assets/down.png');

const StatisticIcon = props => (
  <img
    className="statistic_icon"
    src={props.pairStatus ? up : down}
    alt={props.pairStatus ? 'up' : 'down'}
  />
);

StatisticIcon.propTypes = {
  pairStatus: PropTypes.bool.isRequired,
};

export default StatisticIcon;
