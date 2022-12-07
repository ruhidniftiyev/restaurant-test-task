import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import arrowLeft from '../assets/grey-arrow-left.svg';
import {
  decrementDoodAction,
  getFoodPriceAction,
  getFoodsAction,
  incrementFoodAction,
} from '../redux/foods/actions';
import { getAllFoods, getSelectFoodCount, getTotalFoodPrice } from '../redux/foods/selectors';
import { addFoodAction } from '../redux/orders/actions';

const OrderInfo = () => {
  const foodSelectEl = useRef(null);
  const [foods, setFoods] = useState([]);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const foodsFromAPI = useSelector(getAllFoods);
  const foodCount = useSelector(getSelectFoodCount);
  const totalPrice = useSelector(getTotalFoodPrice);

  useEffect(() => {
    axios.get('https://638e18094190defdb7563f91.mockapi.io/foods').then((res) => {
      setFoods(res.data);
      dispatch(getFoodsAction(res.data));
    });
  }, []);

  const addZero = (timeNum) => {
    return timeNum < 10 ? `0${timeNum}` : timeNum;
  };

  const getTime = () => {
    const date = new Date();
    const time = `${addZero(date.getHours())}:${addZero(date.getMinutes())}`;
    return time;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const food = foodSelectEl.current.value;
    const foodIndex = foodSelectEl.current.selectedIndex;
    food &&
      dispatch(
        addFoodAction({
          title: foodsFromAPI[foodIndex - 1].title,
          foodIndex,
          foodCount,
          totalPrice: +totalPrice,
          time: getTime(),
        }),
      ) &&
      navigate('/foods', { replace: true });
  };

  const foodSelect = (e) => {
    dispatch(getFoodPriceAction(foodSelectEl.current.value));
  };

  const onClickAddFood = () => {
    dispatch(incrementFoodAction());
  };

  const onClickRemoveFood = () => {
    dispatch(decrementDoodAction());
  };

  return (
    <div className="order-info">
      <div className="order-info__top">
        <h2 className="order-info__title">Məhsul əlavə et: </h2>
      </div>
      <div className="order-info__content">
        <form onSubmit={handleSubmit} className="order-info__form">
          <label>
            <b className="select-title">Siyahıdan məhsul seçin</b>
            <select onChange={foodSelect} ref={foodSelectEl}>
              <option value="" selected disabled>
                Məhsulu seçin
              </option>
              {foods.map((food) => (
                <option key={food.id} value={food.price}>{food.title}</option>
              ))}
            </select>
          </label>{' '}
          <div className="order-info__details">
            <div className="order-info__details-count">
              <div onClick={onClickRemoveFood}>
                <span className="material-symbols-outlined">remove</span>
              </div>
              <b>{foodCount}</b>
              <div onClick={onClickAddFood}>
                <span className="material-symbols-outlined">add</span>
              </div>
            </div>
            <div className="order-info__details-price">
              <span>Qiymət</span>
              <b>{totalPrice} ₼</b>
            </div>
          </div>
          <button>Əlavə et</button>
        </form>
        <Link to="/foods">
          <button className="order-info__go-back-btn">
            <img src={arrowLeft} alt="" />
            <span>Geri qayıt</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderInfo;
