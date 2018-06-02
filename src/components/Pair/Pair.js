import React from 'react';
import PropTypes from 'prop-types';
import StatisticIcon from '../StaticsticIcon/StatisticIcon';
import Popup from '../Popup/Popup';
import './Pair.css';

const Pair = props => (
  <button
    className="pair"
    onClick={() => {
      props.showPopup(props.index);
    }}
  >
    <h3 className={`pairHead ${props.className}`}>{props.pairHead}</h3>
    <div className="statistic">
      { props.className !== 'without changes' ?
        <StatisticIcon className={props.className} /> :
        null
      }
      <p>{props.buyPrice}</p>
    </div>
    <Popup
      className={props.activeList}
      hidePopup={props.hidePopup}
      index={props.index}
    />
  </button>
);

Pair.propTypes = {
  pairHead: PropTypes.string.isRequired,
  buyPrice: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  activeList: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  showPopup: PropTypes.func.isRequired,
  hidePopup: PropTypes.func.isRequired,
};

export default Pair;
