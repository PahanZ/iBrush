import React from 'react';
import PropTypes from 'prop-types';
import PairDetailsHead from './PairDetailsHead';
import PairDetailsContent from './PairDetailsContent';
import './PairDetails.css';

const PairDetails = (props) => {
  const {
    avg, buy_price: buyPrice, high, low, pair, sell_price: sellPrice, vol,
  } = props.pairDetailsData.pairData;
  return (
    <section className={`popup ${props.pairDetailsData.isOpen ? 'show' : 'hide'}`}>
      <PairDetailsHead
        buyPrice={buyPrice || ''}
        pair={pair || ''}
        pairStatus={props.pairDetailsData.pairStatus || ''}
        hidePairDetails={props.hidePairDetails}
      />
      <PairDetailsContent
        vol={vol || ''}
        avg={avg || ''}
        sellPrice={sellPrice || ''}
        high={high || ''}
        low={low || ''}
      />
    </section>
  );
};

PairDetails.propTypes = {
  pairDetailsData: PropTypes.shape({
    pairStatus: PropTypes.bool,
    isOpen: PropTypes.bool,
    pairData: PropTypes.object,
  }).isRequired,
  hidePairDetails: PropTypes.func.isRequired,
};

export default PairDetails;
