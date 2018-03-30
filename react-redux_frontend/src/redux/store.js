import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import * as reducers from './reducers';


const initialState = {};

export const store = createStore(
  combineReducers(reducers),
  initialState, 
  applyMiddleware(thunk, logger)
);