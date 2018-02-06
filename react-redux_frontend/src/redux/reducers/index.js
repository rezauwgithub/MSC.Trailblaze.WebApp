import { combineReducers } from 'redux';

import { addLogReducer, clearLogsReducer, loadingOptionsReducer, erroredLoadingOptionsReducer, setOptionsReducer, setSelectedOptionReducer } from './options_CompilerSelect';


const reducers = combineReducers({
	addLogReducer,
	clearLogsReducer,
	loadingOptionsReducer,
	erroredLoadingOptionsReducer,
	setOptionsReducer,
	setSelectedOptionReducer,
});

export default reducers;

