import React from 'react';
import './Pair.css';

export default props => {
  return (
    <div className="pair">
      <h3>{props.pairHead}</h3>
      <p>{props.buyPrice}</p>
    </div>
  )
}