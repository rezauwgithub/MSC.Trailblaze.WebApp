import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import * as reducers from './reducers';

const initialState = {};
export const store = createStore(combineReducers({
  compilers: reducers.compilers,
  logs: reducers.logs
}), initialState, applyMiddleware(thunk, logger));