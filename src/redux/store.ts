import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './rootReducer';

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export type RootState = ReturnType<typeof store.getState>;
