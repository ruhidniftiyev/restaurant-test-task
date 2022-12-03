import { combineReducers } from 'redux';
import orderReducer from './orders/reducers';

const rootReducer = combineReducers({ orderReducer });

export default rootReducer;
