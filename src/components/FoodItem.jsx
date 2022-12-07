import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFoodAction } from '../redux/orders/actions';

const FoodItem = ({ nums, title, foodCount, totalPrice, time, waitTime, status }) => {
  const dispatch = useDispatch();

  const removeFromOrder = () => {
    dispatch(removeFoodAction(nums));
  };

  return (
    <div className="food-item">
      <p className="food-item__num">{nums}</p>
      <p className="food-item__title">{title}</p>
      <p className="food-item__count">{foodCount}</p>
      <p className="food-item__price">{totalPrice}</p>
      <p className="food-item__order-time">{time}</p>
      <p className="food-item__wait-time">{waitTime}0 dəq.</p>
      <p
        className={
          status === false ? 'food-item__order-status disabled' : 'food-item__order-status'
        }>
        {status === false ? 'imtina' : 'verildi'}
      </p>
      {status === false ? (
        <span>Geri alındı</span>
      ) : (
        <button onClick={removeFromOrder}>Geri al &lt;-</button>
      )}
    </div>
  );
};

export default FoodItem;
