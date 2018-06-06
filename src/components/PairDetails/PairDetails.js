import React from 'react';
import PropTypes from 'prop-types';
import PairDetailsHead from './PairDetailsHead';
import PairDetailsContent from './PairDetailsContent';
import Orders from './Orders/Orders';
import './PairDetails.css';

const PairDetails = (props) => {
  const {
    avg, buy_price: buyPrice, high, low, pair, vol_curr: volCurr, vol,
  } = props.pairDetailsData.pairData;
  return (
    <section className={`popup ${props.pairDetailsData.isOpen ? 'show' : 'hide'}`}>
      <PairDetailsHead
        buyPrice={buyPrice || ''}
        pair={pair || ''}
        pairStatus={props.pairDetailsData.pairStatus}
        hidePairDetails={props.hidePairDetails}
      />
      <PairDetailsContent
        vol={vol || ''}
        avg={avg || ''}
        volCurr={volCurr || ''}
        high={high || ''}
        low={low || ''}
      />
      <Orders
        sale={props.pairDetailsData.sale}
        buy={props.pairDetailsData.buy}
      />
    </section>
  );
};

PairDetails.propTypes = {
  pairDetailsData: PropTypes.shape({
    pairStatus: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number,
    ]).isRequired,
    isOpen: PropTypes.bool,
    pairData: PropTypes.object,
    sale: PropTypes.arrayOf(PropTypes.array).isRequired,
    buy: PropTypes.arrayOf(PropTypes.array).isRequired,
  }).isRequired,
  hidePairDetails: PropTypes.func.isRequired,
};

export default PairDetails;
