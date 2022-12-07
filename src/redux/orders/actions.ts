import {
  ADD_FOOD,
  ADD_NEW_ORDER,
  CURRENT_ORDER,
  REMOVE_FOOD,
  REMOVE_ORDER,
  STOP_ORDER,
} from '../constants';

type OrderItem = {
  table: string;
  waiter: string;
  date: string;
  foods: FoodItem[]
};

type FoodItem = {
  title: string;
  foodIndex: number;
  foodCount: number;
  totalPrice: number;
  time: string;
};

export const addNewOrderAction = (orderData: OrderItem) => ({
  type: ADD_NEW_ORDER,
  payload: orderData,
});

export const addFoodAction = (food:FoodItem) => ({
  type: ADD_FOOD,
  payload: food,
});

export const removeFoodAction = (id: number) => ({
  type: REMOVE_FOOD,
  payload: id,
});

export const getCurrentOrderID = (id: number) => ({
  type: CURRENT_ORDER,
  payload: id,
});

export const stopOrderAction = (data: string) => ({
  type: STOP_ORDER,
  payload: data,
});

export const removeOrderAction = (id: number) => ({
  type: REMOVE_ORDER,
  payload: id,
});
