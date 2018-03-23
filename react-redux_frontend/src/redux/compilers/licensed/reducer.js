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

});



export default function reduce(state = initialState, action = {}) {

  switch (action.type) {

    case types.FETCHING_LICENSED_COMPILERS:
      return state.merge({
        isFetchingLicensedCompilers: action.payload
      });
    case types.LICENSED_COMPILERS_FETCHED:
      return state.merge({
        licensedCompilers: action.payload
      });
    case types.ERRORED_FETCHING_LICENSED_COMPILERS:
      return state.merge({
        hasErroredFetchingLicensedCompilers: action.payload
      });

    default:
      return state;

  }
}

// Selectors

export const getIsFetchingLicensedCompilers = (state) => {
  return state.compilers.licensed.isFetchingLicensedCompilers;
}

export const getLicensedCompilers = (state) => {
  return state.compilers.licensed.licensedCompilers;
}

export const getHasErroredFetchingLicensedCompilers = (state) => {
  return state.compilers.licensed.hasErroredFetchingLicensedCompilers;
}