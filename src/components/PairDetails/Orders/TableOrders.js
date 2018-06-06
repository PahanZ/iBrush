import React from 'react';
import PropTypes from 'prop-types';

const TableOrders = (props) => {
  console.log(props.orders);
  return (
    <div>
        table
    </div>
  );
};

TableOrders.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default TableOrders;
