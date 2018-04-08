import { combineReducers } from 'redux';
import details from './details/reducer';
import licensed from './licensed/reducer';
import * as optionsReducers from './options/reducers'


let options = combineReducers(optionsReducers);

export {
  details,
  licensed,
  options
};