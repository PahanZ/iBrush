// @flow

import * as React from 'react';
import StatisticIcon from '../StaticsticIcon/StatisticIcon';
import './PairDetailsHead.css';

type PairDetailsHeadProps = {
  pair: string,
  pairStatus: bool | number,
  buyPrice: string,
  hidePairDetails: SyntheticEvent<>
}

const PairDetailsHead = ({
  pair, pairStatus, buyPrice, hidePairDetails,
}: PairDetailsHeadProps ) => (
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

export default PairDetailsHead;
