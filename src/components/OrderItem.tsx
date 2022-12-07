import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCurrentOrderID } from '../redux/orders/actions';

type IOrderItem = {
  num: number;
  table: string;
  waiter: string;
  orderState: boolean;
  totalPrice: number;
  date: string;
};

const OrderItem: React.FC<IOrderItem> = ({ num, table, waiter, orderState, totalPrice, date }) => {
  const dispatch = useDispatch();

  const sawOrderClick = () => {
    dispatch(getCurrentOrderID(num - 1));
  };

  return (
    <div className={orderState !== false ? 'order-item active' : 'order-item'}>
      <p className="order-item__number">{num}</p>
      <p className="order-item__table">{table}</p>
      <p className="order-item__waiter">{waiter}</p>
      <p className="order-item__orderState">{orderState === false ? 'Sonlanıb' : 'Sonlanmayıb'}</p>
      <p className="order-item__bill">{totalPrice || 0} ₼</p>
      <p className="order-item__date">{date}</p>
      <Link to="/foods">
        <button onClick={sawOrderClick} className="order-item__view">
          Bax
        </button>
      </Link>
    </div>
  );
};

export default OrderItem;
