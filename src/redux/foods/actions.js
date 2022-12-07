import { DECREMENT_FOOD, GET_FOODS, GET_PRICE, INCREMENT_FOOD } from '../constants';

export const incrementFoodAction = () => ({
  type: INCREMENT_FOOD,
});

export const decrementDoodAction = () => ({
  type: DECREMENT_FOOD,
});

export const getFoodPriceAction = (price) => ({
  type: GET_PRICE,
  payload: price,
});

export const getFoodsAction = (data) => ({
  type: GET_FOODS,
  payload: data,
});
