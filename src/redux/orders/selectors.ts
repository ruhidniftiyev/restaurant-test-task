import { RootState } from "../store";

export const getOrdersSelector = (state:RootState) => state.orderReducer.orders;
export const getOrderIdSelector = (state:RootState) => state.orderReducer.orderId;
export const getFoodNumSelector = (state:RootState) => state.orderReducer.orders;
export const getCashSelector = (state:RootState) => state.orderReducer.cash;
