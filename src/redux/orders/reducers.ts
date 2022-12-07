import {
  ADD_FOOD,
  ADD_NEW_ORDER,
  CURRENT_ORDER,
  REMOVE_FOOD,
  REMOVE_ORDER,
  STOP_ORDER,
} from '../constants';

type FoodItem = {
  title: string;
  foodIndex: number;
  foodCount: number;
  totalPrice: number;
  time: string;
  status: boolean;
  nums: number;
};

type OrdersItem = {
  table: string;
  waiter: string;
  orderState: boolean;
  date: string;
  foods: FoodItem[];
  totalPrice: number;
};

interface OrderStateItem {
  orders: OrdersItem[];
  num: number;
  orderId: number;
  foodNum: number;
  cash: number;
}

const initialState: OrderStateItem = {
  orders: [],
  num: 1,
  orderId: 0,
  foodNum: 1,
  cash: 0,
};

const orderReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_NEW_ORDER:
      return {
        ...state,
        num: state.num + 1,
        orders: [...state.orders, { ...action.payload, num: state.num }],
      };
    case ADD_FOOD:
      return {
        ...state,
        orders: state.orders?.map((order, index) => {
          return index === state?.orderId
            ? {
                ...order,
                foods: [...order.foods, { ...action.payload, nums: order.foods.length + 1 }],
                totalPrice: [...order.foods, action.payload]
                  .filter((obj, index) => obj.status !== false)
                  .reduce((acc, item) => acc + item.totalPrice, 0),
              }
            : order;
        }),
        cash: state.cash + +action.payload.totalPrice,
      };
    case REMOVE_FOOD:
      console.log(action.payload);
      return {
        ...state,
        orders: state.orders.map((order, index) => {
          return index === state.orderId
            ? {
                ...order,
                foods: order.foods.map((food, index) => {
                  return index === action.payload - 1
                    ? {
                        ...food,
                        status: false,
                      }
                    : food;
                }),
                totalPrice: order.foods
                  .filter((obj, index) => index !== action.payload - 1 && obj.status !== false)
                  .reduce((acc, item) => acc + item.totalPrice, 0),
              }
            : order;
        }),
        cash: state.cash - state.orders[state.orderId].foods[action.payload - 1].totalPrice,
      };
    case CURRENT_ORDER:
      return { ...state, orderId: action.payload };

    case STOP_ORDER:
      return {
        ...state,
        orders: state.orders.map((order, index) => {
          return index === state.orderId
            ? {
                ...order,
                date: action.payload,
                orderState: false,
              }
            : order;
        }),
      };
    case REMOVE_ORDER:
      return { ...state, orders: state.orders.filter((item, index) => index !== action.payload) };
    default:
      return state;
  }
};

export default orderReducer;
