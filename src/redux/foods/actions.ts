import { DECREMENT_FOOD, GET_FOODS, GET_PRICE, INCREMENT_FOOD } from '../constants';

type DataFoodItem = {
  id: number;
  title: string;
  price: number;
};

export const incrementFoodAction = () => ({
  type: INCREMENT_FOOD,
});

export const decrementDoodAction = () => ({
  type: DECREMENT_FOOD,
});

export const getFoodPriceAction = (price: number) => ({
  type: GET_PRICE,
  payload: price,
});

export const getFoodsAction = (data: DataFoodItem) => ({
  type: GET_FOODS,
  payload: data,
});
