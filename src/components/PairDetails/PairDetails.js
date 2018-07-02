// @flow

import * as React from 'react';
import PairDetailsHead from '../PairDetailsHead/PairDetailsHead';
import PairDetailsContent from '../PairDetailsContent/PairDetailsContent';
import Orders from '../Orders/Orders';
import './PairDetails.css';

type PairDetailsProps<PairDataTypes> = {
  pairDetailsData: PairDataTypes,
  hidePairDetails: Function
}

type PairDataTypes<pairDetailsDataTypes> = {
  pairData: pairDetailsDataTypes,
  isOpen: bool,
  pairStatus: bool | number,
  sale: Array<[string, string, string]>,
  buy: Array<[string, string, string]>
}

type pairDetailsDataTypes = {
  avg: string,
  buy_price: string,
  high: string,
  last_trade: string,
  low: string,
  pair: string,
  sell_price: string,
  updated: number,
  vol: string,
  vol_curr: string
}

const PairDetails = 
({ pairDetailsData, hidePairDetails }: PairDetailsProps<PairDataTypes<pairDetailsDataTypes>>) => {
  const {
    avg, buy_price: buyPrice, high, low, pair, vol_curr: volCurr, vol,
  } = pairDetailsData.pairData;
  const {
    isOpen, pairStatus, sale, buy,
  } = pairDetailsData;
  return (
    <section className={`popup ${isOpen ? 'show' : 'hide'}`}>
      <PairDetailsHead
        buyPrice={buyPrice || ''}
        pair={pair || ''}
        pairStatus={pairStatus}
        hidePairDetails={hidePairDetails}
      />
      <PairDetailsContent
        vol={vol || ''}
        avg={avg || ''}
        volCurr={volCurr || ''}
        high={high || ''}
        low={low || ''}
      />
      <Orders
        sale={sale}
        buy={buy}
      />
    </section>
  );
};

export default PairDetails;
