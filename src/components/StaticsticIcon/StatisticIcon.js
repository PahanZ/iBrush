import React from 'react';
import PropTypes from 'prop-types';

const up = require('../../assets/up.png');
const down = require('../../assets/down.png');

const StatisticIcon = props => (
  <img src={props.className === 'up' ? up : down} alt={props.className} />
);

StatisticIcon.propTypes = {
  className: PropTypes.string.isRequired,
};

export default StatisticIcon;
