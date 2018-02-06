export const addLogReducer = (state = {logs: ''}, action) => {

    var newState = Object.assign({}, state);

    if (action.type === 'ADD_LOG_LOGSTEXTFIELD') {
        newState.logs += action.log;
    }

    return newState;
}

export const clearLogsReducer = (state , action) => {

    var newState = Object.assign({}, state);

    if (action.type === 'CLEAR_LOGS_LOGSTEXTFIELD') {
        newState.logs = action.logs;
    }

    return newState;
}


export const loadingOptionsReducer = (state = {isLoadingOptions: false}, action) => {

    var newState = Object.assign({}, state);

    if (action.type === 'LOADING_OPTIONS_COMPILERSELECT') {
        newState.isLoadingOptions = action.isLoadingOptions;
    }
    
    return newState;
}


export const erroredLoadingOptionsReducer = (state = {hasErroredLoadingOptions: false}, action) => {
    
    var newState = Object.assign({}, state);

    if (action.type === 'ERRORED_LOADING_OPTIONS_COMPILERSELECT') {
        newState.hasErroredLoadingOptions = action.hasErroredLoadingOptions;
    }
    
    return newState;
}


export const setOptionsReducer = (state = {options: []}, action) => {
    
    var newState = Object.assign({}, state);

    if (action.type === 'SET_OPTIONS_COMPILERSELECT') {
        newState.options = action.options;
    }
    
    return newState;
}


export const setSelectedOptionReducer = (state = {selectedOption: ''}, action) => {

    var newState = Object.assign({}, state);

    if (action.type === 'SET_SELECTED_OPTION_COMPILERSELECT') {
        newState.selectedOption = action.selectedOption;
    }

    return newState;
}
