import { DECREMENT_FOOD, GET_FOODS, GET_PRICE, INCREMENT_FOOD } from '../constants';

const initialState = {
  foodsArray: [],
  foodCount: 1,
  foodPrice: 0,
  totalFoodPrice: 0,
};

const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FOODS:
      return { ...state, foodsArray: action.payload };
    case INCREMENT_FOOD:
      return {
        ...state,
        totalFoodPrice: (state.foodCount + 1) * state.foodPrice,
        foodCount: state.foodCount + 1,
      };
    case DECREMENT_FOOD:
      console.log(state.totalFoodPrice);
      return {
        ...state,
        foodCount: state.foodCount - 1,
        totalFoodPrice: (state.foodCount - 1) * state.foodPrice,
      };
    case GET_PRICE:
      return {
        ...state,
        foodPrice: action.payload,
        totalFoodPrice: action.payload,
        foodCount: 1,
      };
    default:
      return state;
  }
};

export default foodReducer;
