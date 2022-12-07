import React from 'react';
import OrderItem from '../components/OrderItem';
import ordersIcon from '../assets/orders-icon.svg';
import noOrderImage from '../assets/no-orders.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCashSelector, getOrdersSelector } from '../redux/orders/selectors';

const Orders = () => {
  const orders = useSelector(getOrdersSelector);
  const cash = useSelector(getCashSelector);

  return (
    <div className="orders">
      <div className="orders__top">
        <h2 className="orders__content-title">
          <img src={ordersIcon} alt="" /> Sifarişlər
        </h2>
      </div>
      {orders?.length !== 0 ? (
        <>
          <div className="orders__list">
            {orders?.map((order) => (
              <OrderItem key={order.num} {...order} />
            ))}
          </div>
          <div className="orders__bottom">
            <div className="orders__details">
              <span>
                Cəmi məbləğ: <b>{cash} ₼</b>
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
            <img className="orders__no-order-img" src={noOrderImage} alt="" />
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
