// @flow

import * as React from 'react';
// import PropTypes from 'prop-types';
import PairDetailsHead from '../PairDetailsHead/PairDetailsHead';
import PairDetailsContent from '../PairDetailsContent/PairDetailsContent';
import Orders from '../Orders/Orders';
import './PairDetails.css';

type PairDetailsProps = {
  pairDetailsData: Object,
  hidePairDetails: Function
}

const PairDetails = ({ pairDetailsData, hidePairDetails }: PairDetailsProps) => {
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

// PairDetails.propTypes = {
  // pairDetailsData: PropTypes.shape({
  //   pairStatus: PropTypes.oneOfType([
  //     PropTypes.bool,
  //     PropTypes.number,
  //   ]).isRequired,
  //   isOpen: PropTypes.bool,
  //   pairData: PropTypes.object,
  //   sale: PropTypes.arrayOf(PropTypes.array).isRequired,
  //   buy: PropTypes.arrayOf(PropTypes.array).isRequired,
  // }).isRequired,
  // hidePairDetails: PropTypes.func.isRequired,
// };

export default PairDetails;
