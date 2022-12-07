import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import arrowLeft from '../assets/grey-arrow-left.svg';
import FoodItem from '../components/FoodItem';
import { removeOrderAction, stopOrderAction } from '../redux/orders/actions';
import { getOrderIdSelector, getOrdersSelector } from '../redux/orders/selectors';

const FoodsOrder = () => {
  const dispatch = useDispatch();
  const orders = useSelector(getOrdersSelector);
  const currentId: number = useSelector(getOrderIdSelector);

  type oOrderFoodsItems = {
    title: string;
    foodIndex: number;
    foodCount: number;
    totalPrice: number;
    time: string;
    status: boolean;
    nums: number;
  };

  const currentOrderState: boolean = orders[currentId]?.orderState;
  const foodsOrder:oOrderFoodsItems[] = orders[currentId]?.foods;
  const totalBill:number = orders[currentId]?.totalPrice;

  const addZero = (timeNum: number) => {
    return timeNum < 10 ? `0${timeNum}` : timeNum;
  };

  const getTime = () => {
    const date = new Date();
    const time = `${addZero(date.getDay())}-${addZero(
      date.getMonth(),
    )}-${date.getFullYear()} ${addZero(date.getHours())}:${addZero(date.getMinutes())}`;
    return time;
  };

  const stopOrderClick = () => {
    dispatch(stopOrderAction(getTime()));
  };

  const removeOrderClick = () => {
    dispatch(removeOrderAction(currentId));
  };

  return (
    <div className="foods-order">
      <div className="foods-order__top">
        <h2 className="foods-order__title">Sifariş:</h2>
      </div>
      <div className="foods-order__content">
        <div className="foods-order__list">
          <div className="food-item foods-order__thead">
            <p className="food-item__num">#</p>
            <p className="food-item__title">Məhsul</p>
            <p className="food-item__count">Miqdar</p>
            <p className="food-item__price">Məbləğ</p>
            <p className="food-item__order-time">Sifariş vaxtı</p>
            <p className="food-item__wait-time">Gözləmə</p>
            <p className="food-item__order-status-t">Status</p>
            <p>Geri</p>
          </div>
          {foodsOrder?.length === 0 ? (
            <p className="foods-order__error-message">Məhsul yoxdur😕</p>
          ) : (
            foodsOrder?.map((food: any, index: number) => <FoodItem key={index} {...food} />)
          )}
        </div>
        <div className="foods-order__details">
          <span>
            Cəmi məbləğ: <b>{totalBill || 0} ₼</b>
          </span>
          {currentOrderState === false ? (
            ''
          ) : (
            <Link to="/add">
              <button className="foods-order__new-food-btn">Məhsul əlavə et</button>
            </Link>
          )}
        </div>
      </div>
      <div className="foods-order__bottom">
        <div className="foods-order__go-back">
          <Link to="/">
            <button className="foods-order__go-back-btn">
              <img src={arrowLeft} alt="" />
              <span>Geri qayıt</span>
            </button>
          </Link>
        </div>
        <div className="foods-order__stop">
          <Link to="/">
            {foodsOrder?.length === 0 ? (
              <button onClick={removeOrderClick} className="foods-order__stop-btn">
                Ləğv et
              </button>
            ) : (
              <button onClick={stopOrderClick} className="foods-order__stop-btn">
                {currentOrderState === false ? 'Sonlanıb' : 'Sonlandır'}
              </button>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodsOrder;
