import React from 'react';
import PropTypes from 'prop-types';

const TableOrders = (props) => {
  console.log(props.orders);
  return (
    <div className="table_container">
      <h3 className="table_caption">{props.title}</h3>
      <table cellSpacing="5" className="table_orders">
        <thead className="thead">
          <tr>
            <th>Цена</th>
            <th>Количество</th>
            <th>Сумма</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {props.orders.map((el, i) => (
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
};

TableOrders.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.array).isRequired,
  title: PropTypes.string.isRequired,
};

export default TableOrders;
