import React from 'react';
import PropTypes from 'prop-types';
import StatisticIcon from '../StaticsticIcon/StatisticIcon';
import './Popup.css';

const Popup = (props) => {
  console.log(props);
  const {
    avg, buy_price: buyPrice, high, low, pair, sell_price: sellPrice, vol,
  } = props.popupData.pairData;
  return (
    <section className={`popup ${props.popupData.classPopup}`}>
      <div className="popupHead">
        <h2>{pair}</h2>
        <div className="popupBuyPrice">
          <StatisticIcon className={props.popupData.iconClass} />
          <h3>{buyPrice}</h3>
        </div>
        {/* eslint-disable */}
        <div
          className="close"
          onClick={() => {
            props.hidePopup();
          }}
        >&times;
        </div>
        {/* eslint-enable */}
      </div>
      <div className="statisticPair">
        <h4>Статиcтика за 24 часа</h4>
        <div className="transactions">
          <p>Объем торгов: {vol}</p>
          <p>Сумма сделок: {avg}</p>
        </div>
        <div className="prices">
          <p>Средняя цена сделки: {sellPrice}</p>
          <p>Максимальная цена сделки: {high}</p>
          <p>Минималльная цена сделки: {low}</p>
        </div>
      </div>
    </section>
  );
};

Popup.propTypes = {
  popupData: PropTypes.shape({
    iconClass: PropTypes.string,
    classPopup: PropTypes.string,
    pairData: PropTypes.object,
  }).isRequired,
};
export default Popup;
