//  @flow

import * as React from 'react';
// import PropTypes from 'prop-types';
import TableOrders from '../TableOrders/TableOrders';
import './Orders.css';

type OrdersProps = {
  buy: Array<Array>,
  sale: Array<Array>
}

const Orders = ({ buy, sale }: OrdersProps) => (
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

// Orders.propTypes = {
//   buy: PropTypes.arrayOf(PropTypes.array).isRequired,
//   sale: PropTypes.arrayOf(PropTypes.array).isRequired,
// };

export default Orders;
