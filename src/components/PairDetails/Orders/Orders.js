import React from 'react';
import PropTypes from 'prop-types';
import TableOrders from './TableOrders';
import './Orders.css';

const Orders = props => (
  <section className="orders">
    <TableOrders orders={props.buy} />
    <TableOrders orders={props.sale} />
  </section>
);

Orders.propTypes = {
  buy: PropTypes.arrayOf(PropTypes.array).isRequired,
  sale: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default Orders;
