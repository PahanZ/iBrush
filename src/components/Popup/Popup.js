import React from 'react';
import PropTypes from 'prop-types';
import './Popup.css';

const Popup = props => (
  <div className={`popup ${props.className}`}>
    <h3>eee</h3>
    {/* eslint-disable */}
    <div
      className="close"
      onClick={() => {
        props.hidePopup(props.index);
      }}
    >&times;
    </div>
    {/* eslint-enable */}
  </div>
);

Popup.propTypes = {
  className: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  hidePopup: PropTypes.func.isRequired,
};
export default Popup;
