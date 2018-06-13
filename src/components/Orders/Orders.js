import React from 'react';
import PropTypes from 'prop-types';
import TableOrders from '../TableOrders/TableOrders';
import './Orders.css';

const Orders = ({ buy, sale }) => (
  <section className="orders">
    <TableOrders
      title="Покупка"
      orders={buy}
    />
    <TableOrders
      title="Продажа"
      orders={sale}
    />
  </section>
);

Orders.propTypes = {
  buy: PropTypes.arrayOf(PropTypes.array).isRequired,
  sale: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default Orders;
