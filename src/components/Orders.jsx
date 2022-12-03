import React from 'react';
import OrderItem from './OrderItem';
import ordersIcon from '../assets/orders-icon.svg';
import noOrderImage from '../assets/no-orders.png';
import { Link } from 'react-router-dom';

const Orders = () => {
  const orders = [
    {
      num: 1,
      table: 'm3',
      waiter: 'Murtuz',
      orderState: 'Sonlanmayib',
      bill: 77.3,
      date: '22.11.2022 15:37:12',
    },
    {
      num: 1,
      table: 'm3',
      waiter: 'Murtuz',
      orderState: 'Sonlanmayib',
      bill: 77.3,
      date: '22.11.2022 15:37:12',
    },
    {
      num: 1,
      table: 'm3',
      waiter: 'Murtuz',
      orderState: 'Sonlanmayib',
      bill: 77.3,
      date: '22.11.2022 15:37:12',
    },
    {
      num: 1,
      table: 'm3',
      waiter: 'Murtuz',
      orderState: 'Sonlanmayib',
      bill: 77.3,
      date: '22.11.2022 15:37:12',
    },
  ];

  return (
    <div className="orders">
      <div className="orders__top">
        <h2 className="orders__content-title">
          <img src={ordersIcon} alt="" /> Sifarişlər
        </h2>
      </div>
      {orders.length !== 0 ? (
        <>
          <div className="orders__list">
            {orders.map((order) => (
              <OrderItem {...order} />
            ))}
          </div>
          <div className="orders__bottom">
            <div className="orders__details">
              <span>
                Cəmi məbləğ: <b>330 ₼</b>
              </span>
            </div>
            <Link to="/new">
              <button className="orders__new-order-btn">Yeni sifariş</button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="orders__list">
            <h2>Hələ ki sifariş yoxdur😕</h2>
            <p className="orders__no-order-text">Yeni sifariş əlavə etmək üçün düyməyə basın.</p>
            <img className="orders__no-order-img" src={noOrderImage} alt="" srcset="" />
          </div>
          <div className="orders__no-order-bottom">
            <Link to="/new">
              <button className="orders__new-order-btn">Yeni sifariş</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;
