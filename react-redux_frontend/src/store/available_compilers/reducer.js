/*
  Reducers hold the store's state (this initialState object defines it).
  Reducers also handle plain object actions and modify their state (immutably) accordingly.
  This is the only way to change the store's state.
  The other exports in this file are Selectors, which is business logic that digests parts 
  of the store's state for easier comsumption by views.
*/

import Immutable from 'seamless-immutable';
import * as types from './actionTypes';


const initialState = Immutable({
  isFetchingAvailableCompilers: false,
  availableCompilers: [],
  hasErroredFetchingAvailableCompilers: false
});


export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.FETCHING_AVAILABLE_COMPILERS:
    return state.merge({
      isFetchingAvailableCompilers: action.isFetchingAvailableCompilers
    });
    case types.AVAILABLE_COMPILERS_FETCHED:
      return state.merge({
        availableCompilers: action.availableCompilers
      });
    case types.ERRORED_FETCHING_AVAILABLE_COMPILERS:
      return state.merge({
        hasErroredFetchingAvailableCompilers: action.hasErroredFetchingAvailableCompilers
      });
    default:
      return state;
  }
}

// Selectors

export const getIsFetchingAvailableCompilers = (state) => {
  return state.available_compilers.isFetchingAvailableCompilers;
}

export const getAvailableCompilers = (state) => {
  return state.available_compilers.availableCompilers;
}

export const getHasErroedFetchingAvailableCompilers = (state) => {
  return state.available_compilers.hasErroredFetchingAvailableCompilers;
}





