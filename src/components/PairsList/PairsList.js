import React from 'react';
import PropTypes from 'prop-types';
import Pair from './Pair/Pair';
import './PairList.css';

const PairsList = props => (
  <main className="content">
    <h3 className="subtitle">Валютные пары</h3>
    <section className="container">
      {
        props.pairs.map((el, i) => (
          <Pair
            index={i}
            key={String(i)}
            pairData={el}
            pairStatus={props.statistics[i]}
            showPairDetails={props.showPairDetails}
          />
        ))
      }
    </section>
  </main>
);

PairsList.propTypes = {
  pairs: PropTypes.arrayOf(PropTypes.object).isRequired,
  statistics: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ])).isRequired,
  showPairDetails: PropTypes.func.isRequired,
};

export default PairsList;

