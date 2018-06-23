// @flow

import * as React from 'react';
import './TableOrders.css';

type TableOrdersProps = {
  title: string,
  orders: Array<[string, string, string]>
}

const TableOrders = ({ title, orders }: TableOrdersProps) => (
  <div className="table_container">
    <h3 className="table_caption">{title}</h3>
    <table cellSpacing="5" className="table_orders">
      <thead className="thead">
        <tr>
          <th>Цена</th>
          <th>Количество</th>
          <th>Сумма</th>
        </tr>
      </thead>
      <tbody className="tbody">
        {orders.map((el, i) => (
          <tr key={String(i)}>
            <td>{el[0]}</td>
            <td className="bordered">{el[1]}</td>
            <td>{el[2]}</td>
          </tr>
          ))
          }
      </tbody>
    </table>
  </div>
);

export default TableOrders;
