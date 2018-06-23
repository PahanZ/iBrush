//  @flow

import * as React from 'react';
import './StatisticIcon.css';

type StatisticIconProps = {
  pairStatus: bool
}

const up = require('../../assets/up.png');
const down = require('../../assets/down.png');

const StatisticIcon = ({ pairStatus }: StatisticIconProps ) => (
  <img
    className="statistic_icon"
    src={pairStatus ? up : down}
    alt={pairStatus ? 'up' : 'down'}
  />
);

export default StatisticIcon;
