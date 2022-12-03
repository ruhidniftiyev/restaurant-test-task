import React from 'react';

const OrderItem = ({ num, table, waiter, orderState, bill, date }) => {
  return (
    <div className="order-item">
      <p className="order-item__number">{num}</p>
      <p className="order-item__table">{table}</p>
      <p className="order-item__waiter">{waiter}</p>
      <p className="order-item__orderState">{orderState}</p>
      <p className="order-item__bill">{bill}</p>
      <p className="order-item__date">{date}</p>
      <button className="order-item__view">Bax</button>
    </div>
  );
};

export default OrderItem;
