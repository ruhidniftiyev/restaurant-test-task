import {
  ADD_FOOD,
  ADD_NEW_ORDER,
  CURRENT_ORDER,
  REMOVE_FOOD,
  REMOVE_ORDER,
  STOP_ORDER,
} from '../constants';

export const addNewOrderAction = (orderData) => ({
  type: ADD_NEW_ORDER,
  payload: orderData,
});

export const addFoodAction = (food) => ({
  type: ADD_FOOD,
  payload: food,
});

export const removeFoodAction = (id) => ({
  type: REMOVE_FOOD,
  payload: id,
});

export const getCurrentOrderID = (id) => ({
  type: CURRENT_ORDER,
  payload: id,
});

export const stopOrderAction = (data) => ({
  type: STOP_ORDER,
  payload: data,
});

export const removeOrderAction = (id) => ({
  type: REMOVE_ORDER,
  payload: id,
});
