import { RootState } from '../store';

export const getSelectFoodCount = (state: RootState) => state.foodReducer.foodCount;
export const getTotalFoodPrice = (state: RootState) => state.foodReducer.totalFoodPrice;
export const getAllFoods = (state: RootState) => state.foodReducer.foodsArray;
