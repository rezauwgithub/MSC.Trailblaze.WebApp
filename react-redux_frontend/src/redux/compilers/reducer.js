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


  isFetchingAddedCompilerDetailsjsonObjArr: [],
  arrIndexIsFetchingAddedCompilerDetailsjsonObjArr: {},

  addedCompilerDetailsjsonObjArr: [],
  arrIndexAddedCompilerDetailsjsonObjArr: {},

  hasErroredFetchingAddedCompilerDetailsjsonObjArr: [],
  arrIndexhasErroredFetchingAddedCompilerDetailsjsonObjArr: {},


  isFetchingAddedCompilerOptionsjsonObjArr: [],
  arrIndexIsFetchingAddedCompilerOptionsjsonObjArr: {},

  addedCompilerOptionsjsonObjArr: [],
  arrIndexAddedCompilerOptionsjsonObjArr: {},

  hasErroredFetchingAddedCompilerOptionsjsonObjArr: [],
  arrIndexHasErroredFetchingAddedCompilerOptionsjsonObjArr: {}

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
      return {
        ...state,

      };
    case types.ADDED_COMPILER_DETAILS_FETCHED:
      return {
        ...state,
        addedCompilerDetailsjsonObjArr: state.addedCompilerDetailsjsonObjArr.concat(
          action.addedCompilerDetailsjsonObj
        )
      };
    case types.ERRORED_FETCHING_ADDED_COMPILER_DETAILS:
      return {
        ...state,
        hasErroredFetchingAddedCompilerDetailsjsonObjArr: state.hasErroredFetchingAddedCompilerDetailsjsonObjArr.concat(
          action.hasErroredFetchingAddedCompilerDetailsjsonObj
        )
      };
    
    case types.FETCHING_ADDED_COMPILER_OPTIONS:
      return {
        ...state,
        isFetchingAddedCompilerOptionsjsonObjArr: state.isFetchingAddedCompilerOptionsjsonObjArr.concat(
          action.isFetchingAddedCompilerOptionsjsonObj
        )
      };
    case types.ADDED_COMPILER_OPTIONS_FETCHED:
      return {
        ...state,
        addedCompilerOptionsjsonObjArr: state.addedCompilerOptionsjsonObjArr.concat(
          action.addedCompilerOptionsjsonObj
        )
      };
    case types.ERRORED_FETCHING_ADDED_COMPILER_OPTIONS:
      return {
        ...state,
        hasErroredFetchingAddedCompilerOptionsjsonObjArr: state.hasErroredFetchingAddedCompilerOptionsjsonObjArr.concat(
          action.hasErroredFetchingAddedCompilerOptionsjsonObj
        )
      };

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


export const getIsFetchingCompilerDetailsjsonObjArr = (state) => {
  return state.compilers.isFetchingAddedCompilerDetailsjsonObjArr;
}

export const getCompilerDetailsjsonObjArr = (state) => {
  return state.compilers.compilerDetailsjsonObjArr;
}

export const getHasErroredFetchingCompilerDetailsjsonObjArr = (state) => {
  return state.compilers.hasErroredFetchingAddedCompilerDetailsjsonObjArr;
}


export const getIsFetchingCompilerOptionsjsonObjArr = (state) => {
  return state.compilers.isFetchingAddedCompilerOptionsjsonObjArr;
}

export const getCompilerOptionsjsonObjArr = (state) => {
  return state.compilers.addedCompilerOptionsjsonObjArr;
}

export const getHasErroredFetchingCompilerOptionsjsonObjArr = (state) => {
  return state.compilers.hasErroredFetchingAddedCompilerOptionsjsonObjArr;
}