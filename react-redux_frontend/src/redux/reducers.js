import { combineReducers } from 'redux';
import navigation from './navigation/reducer';
import * as compilersReducers from './compilers/reducers';
import instances from './instances/reducer';
import logs from './logs/reducer';
import dialogs from './dialogs/reducer';



let compilers = combineReducers(compilersReducers);

export {
  navigation,
  compilers,
  instances,
  logs,
  dialogs
};