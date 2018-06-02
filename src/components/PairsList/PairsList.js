import React from 'react';
import PropTypes from 'prop-types';
import Pair from '../Pair/Pair';
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
            pairHead={el.pair}
            buyPrice={Number(el.buy_price).toFixed(5)}
            className={props.statistics[i]}
            activeList={props.activeList[i]}
            showPopup={props.showPopup}
            hidePopup={props.hidePopup}
          />
        ))
      }
    </section>
  </main>
);

PairsList.propTypes = {
  pairs: PropTypes.arrayOf(PropTypes.object).isRequired,
  statistics: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeList: PropTypes.arrayOf(PropTypes.string).isRequired,
  showPopup: PropTypes.func.isRequired,
  hidePopup: PropTypes.func.isRequired,
};

export default PairsList;

