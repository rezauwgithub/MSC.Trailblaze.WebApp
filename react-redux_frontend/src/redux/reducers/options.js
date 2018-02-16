

import { LOADING_COMPILERSELECTFIELD, ERRORED_LOADING_COMPILERSELECTFIELD, SET_OPTIONS_COMPILERSELECTFIELD } from '../../constants/redux/actionTypes';


const initialState = {
    options: [],
    loading: false,
    erroredLoading: false
}

export const optionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_COMPILERSELECTFIELD:
            return Object.assign({}, state, {
                loadingOptions: action.loadingOptions,
            })
        case ERRORED_LOADING_COMPILERSELECTFIELD:
            return Object.assign({}, state, {
                erroredLoadingOptions: action.erroredLoadingOptions
            })
        case SET_OPTIONS_COMPILERSELECTFIELD:
            return Object.assign({}, state, {
                options: action.options
            })
        default:
            return state
    }
}
