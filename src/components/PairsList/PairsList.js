import React from 'react';
import PropTypes from 'prop-types';
import Pair from '../Pair/Pair';
import './PairList.css';

const PairsList = ({ pairs, statistics, showPairDetails }) => (
  <main className="content">
    <h3 className="subtitle">Валютные пары</h3>
    <section className={`container ${pairs.length === 0
      ? 'container_empty' : 'container_full'}`}
    >
      {
        pairs.map((el, i) => (
          <Pair
            index={i}
            key={String(i)}
            pairData={el}
            pairStatus={statistics[i]}
            showPairDetails={showPairDetails}
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

