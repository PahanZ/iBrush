//  @flow

import * as React from 'react';
import TableOrders from '../TableOrders/TableOrders';
import './Orders.css';

type OrdersProps = {
  buy: Array<[string, string, string]>,
  sale: Array<[string, string, string]>
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

export default Orders;
