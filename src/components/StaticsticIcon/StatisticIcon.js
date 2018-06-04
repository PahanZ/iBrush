import React from 'react';
import PropTypes from 'prop-types';
import './StatisticIcon.css';

const up = require('../../assets/up.png');
const down = require('../../assets/down.png');

const StatisticIcon = props => (
  <img className="statisticIcon" src={props.className === 'up' ? up : down} alt={props.className} />
);

StatisticIcon.propTypes = {
  className: PropTypes.string.isRequired,
};

export default StatisticIcon;
