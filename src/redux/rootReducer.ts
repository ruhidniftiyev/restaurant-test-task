import { combineReducers } from 'redux';
import orderReducer from './orders/reducers';
import foodReducer from './foods/reducers';

const rootReducer = combineReducers({ orderReducer, foodReducer });

export default rootReducer;
