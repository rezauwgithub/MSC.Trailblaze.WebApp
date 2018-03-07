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

  isFetchingLicensedCompilers: false,
  licensedCompilers: [],
  hasErroredFetchingLicensedCompilers: false,


  isFetchingAddedCompilerDetailsJSONArr: [],
  addedCompilerDetailsJSONArr: [],
  hasErroredFetchingAddedCompilerDetailsJSONArr: [],


  isFetchingAddedCompilerOptionsJSONArr: [],
  addedCompilerOptionsJSONArr: [],
  hasErroredFetchingAddedCompilerOptionsJSONArr: [],

});


export default function reduce(state = initialState, action = {}) {

  switch (action.type) {

    case types.FETCHING_LICENSED_COMPILERS:
      return state.merge({
        isFetchingLicensedCompilers: action.isFetchingLicensedCompilers
      });
    case types.LICENSED_COMPILERS_FETCHED:
      return state.merge({
        licensedCompilers: action.licensedCompilers
      });
    case types.ERRORED_FETCHING_LICENSED_COMPILERS:
      return state.merge({
        hasErroredFetchingLicensedCompilers: action.hasErroredFetchingLicensedCompilers
      });

    case types.FETCHING_ADDED_COMPILER_DETAILS:
      return state.merge({
        isFetchingAddedCompilerDetailsJSONArr: action.isFetchingAddedCompilerDetailsJSONArr
      });
    case types.ADDED_COMPILER_DETAILS_FETCHED:
      return state.merge({
        addedCompilerDetailsJSONArr: action.addedCompilerDetailsJSONArr
      });
    case types.ERRORED_FETCHING_ADDED_COMPILER_DETAILS:
      return state.merge({
        hasErroredFetchingAddedCompilerDetailsJSONArr: action.hasErroredFetchingAddedCompilerDetailsJSONArr
      });

    case types.FETCHING_ADDED_COMPILER_OPTIONS:
      return state.merge({
        isFetchingAddedCompilerOptionsJSONArr: action.isFetchingAddedCompilerOptionsJSONArr
      });
    case types.ADDED_COMPILER_OPTIONS_FETCHED:
      return state.merge({
        addedCompilerOptionsJSONArr: action.addedCompilerOptionsJSONArr
      });
    case types.ERRORED_FETCHING_ADDED_COMPILER_OPTIONS:
      return state.merge({
        hasErroredFetchingAddedCompilerOptionsJSONArr: action.hasErroredFetchingAddedCompilerOptionsJSONArr
      });

    default:
      return state;

  }
}

// Selectors

export const getIsFetchingLicensedCompilers = (state) => {
  return state.compilers.isFetchingLicensedCompilers;
}

export const getLicensedCompilers = (state) => {
  return state.compilers.licensedCompilers;
}

export const getHasErroredFetchingLicensedCompilers = (state) => {
  return state.compilers.hasErroredFetchingLicensedCompilers;
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