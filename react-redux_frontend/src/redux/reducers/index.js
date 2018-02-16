import { combineReducers } from 'redux';
import { optionsReducer } from './options';
import { logsReducer } from './logs';


export const reducers = combineReducers({
    optionsReducer,
    logsReducer
});

