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
  hasErroredFetchingAvailableCompilers: false,


  isFetchingSelectedCompilerDetailsJSONArr: [],
  selectedCompilerDetailsJSONArr: [],
  hasErroredFetchingSelectedCompilerDetailsJSONArr: [],


  isFetchingSelectedCompilerOptionsJSONArr: [],
  selectedCompilerOptionsJSONArr: [],
  hasErroredFetchingSelectedCompilerOptionsJSONArr: [],

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

    case types.FETCHING_SELECTED_COMPILER_DETAILS:
      return state.merge({
        isFetchingSelectedCompilerDetailsJSONArr: action.isFetchingSelectedCompilerDetailsJSONArr
      });
    case types.SELECTED_COMPILER_DETAILS_FETCHED:
      return state.merge({
        selectedCompilerDetailsJSONArr: action.selectedCompilerDetailsJSONArr
      });
    case types.ERRORED_FETCHING_SELECTED_COMPILER_DETAILS:
      return state.merge({
        hasErroredFetchingSelectedCompilerDetailsJSONArr: action.hasErroredFetchingSelectedCompilerDetailsJSONArr
      });

    case types.FETCHING_SELECTED_COMPILER_OPTIONS:
      return state.merge({
        isFetchingSelectedCompilerOptionsJSONArr: action.isFetchingSelectedCompilerOptionsJSONArr
      });
    case types.SELECTED_COMPILER_OPTIONS_FETCHED:
      return state.merge({
        selectedCompilerOptionsJSONArr: action.selectedCompilerOptionsJSONArr
      });
    case types.ERRORED_FETCHING_SELECTED_COMPILER_OPTIONS:
      return state.merge({
        hasErroredFetchingSelectedCompilerOptionsJSONArr: action.hasErroredFetchingSelectedCompilerOptionsJSONArr
      });

    default:
      return state;

  }
}

// Selectors

export const getIsFetchingAvailableCompilers = (state) => {
  return state.compilers.isFetchingAvailableCompilers;
}

export const getAvailableCompilers = (state) => {
  return state.compilers.availableCompilers;
}

export const getHasErroredFetchingAvailableCompilers = (state) => {
  return state.compilers.hasErroredFetchingAvailableCompilers;
}


export const getIsFetchingCompilerDetailsJSONArr = (state) => {
  return state.compilers.isFetchingCompilerDetailsJSONArr;
}

export const getCompilerDetailsJSONArr = (state) => {
  return state.compilers.compilerDetailsJSONArr;
}

export const getHasErroredFetchingCompilerDetailsJSONArr = (state) => {
  return state.compilers.hasErroredFetchingCompilerDetailsJSONArr;
}


export const getIsFetchingCompilerOptionsJSONArr = (state) => {
  return state.compilers.isFetchingCompilerOptionsJSONArr;
}

export const getCompilerOptionsJSONArr = (state) => {
  return state.compilers.compilerOptionsJSONArr;
}

export const getHasErroredFetchingCompilerOptionsJSONArr = (state) => {
  return state.compilers.hasErroredFetchingCompilerOptionsJSONArr;
}