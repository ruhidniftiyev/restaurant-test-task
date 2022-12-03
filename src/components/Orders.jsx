import React from 'react';
import OrderItem from './OrderItem';

const Orders = () => {
  const orders = [
    {
      num: 1,
      table: 'm3',
      waiter: 'Murtuz',
      orderState: 'Sonlanmayib',
      bill: 77.3,
      date: '22.11.2022',
    },
    {
      num: 1,
      table: 'm3',
      waiter: 'Murtuz',
      orderState: 'Sonlanmayib',
      bill: 77.3,
      date: '22.11.2022',
    },
    {
      num: 1,
      table: 'm3',
      waiter: 'Murtuz',
      orderState: 'Sonlanmayib',
      bill: 77.3,
      date: '22.11.2022',
    },
    {
      num: 1,
      table: 'm3',
      waiter: 'Murtuz',
      orderState: 'Sonlanmayib',
      bill: 77.3,
      date: '22.11.2022',
    },
  ];

  return (
    <div className="orders">
      <div className='orders__top'>
        <h2 className='orders__content-title'>
          Sifarişlər
        </h2>
      </div>
      <div className="orders__list">
        {orders.map((order) => (
          <OrderItem {...order} />
        ))}
      </div>
      <div className="orders__details">
        <span>Cəmi məbləğ: 330 AZN</span>
      </div>
    </div>
  );
};

export default Orders;
