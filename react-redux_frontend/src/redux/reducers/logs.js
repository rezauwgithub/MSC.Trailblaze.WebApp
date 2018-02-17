import { LOADING_LOGSTEXTFIELD, ERRORED_LOADING_LOGSTEXTFIELD, SET_LOGS_LOGSTEXTFIELD, CLEAR_LOGSTEXTFIELD, ADD_LOG_LOGSTEXTFIELD } from '../../constants/redux/actionTypes';


const initialState = {
    logs: []
}

export const logsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_LOGSTEXTFIELD:
            return Object.assign({}, state, {
                loadingLogs: action.loadingLogs,
            })
        case ERRORED_LOADING_LOGSTEXTFIELD:
            return Object.assign({}, state, {
                erroredLoadingLogs: action.erroredLoadingLogs
            })
        case SET_LOGS_LOGSTEXTFIELD:
            return Object.assign({}, state, {
                logs: action.logs
            })
        case CLEAR_LOGSTEXTFIELD:
            return Object.assign({}, state, {
                logs: []
            })
        case ADD_LOG_LOGSTEXTFIELD:
            return [
                ...state,
                {
                    log: action.log
                }
            ]
        default:
            return state
    }
}
