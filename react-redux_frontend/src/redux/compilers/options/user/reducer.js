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

  isFetchingAddedCompilerUserOptionsjsonObj: {},
  addedCompilerUserOptionsjsonObj: {},
  hasErroredFetchingAddedCompilerUserOptionsjsonObj: {},

});



export default function reduce(state = initialState, action = {}) {

  switch (action.type) {
 
    case types.FETCHING_ADDED_COMPILER_USER_OPTIONS:
      
      if (state.isFetchingAddedCompilerUserOptionsjsonObj[action.payload.value] === undefined) {
        return {
          ...state,
          isFetchingAddedCompilerUserOptionsjsonObj: {
            ...state.isFetchingAddedCompilerUserOptionsjsonObj,
            [action.payload.value]: action.payload
          }
        }

      }

      state.isFetchingAddedCompilerUserOptionsjsonObj[action.payload.value] = {
        ...state.isFetchingAddedCompilerUserOptionsjsonObj[action.payload.value],
        ...action.payload.payload
      }

      return {
        ...state
      }


    case types.ADDED_COMPILER_USER_OPTIONS_FETCHED:

      if (state.addedCompilerUserOptionsjsonObj[action.payload.value] === undefined) {
        return {
          ...state,
          addedCompilerUserOptionsjsonObj: {
            ...state.addedCompilerUserOptionsjsonObj,
            [action.payload.value]: action.payload
          }
        }
      }

      state.addedCompilerUserOptionsjsonObj[action.payload.value] = {
        ...state.addedCompilerUserOptionsjsonObj[action.payload.value],
        ...action.payload
      }

      return {
        ...state
      }


    case types.ERRORED_FETCHING_ADDED_COMPILER_USER_OPTIONS:

      if (state.hasErroredFetchingAddedCompilerUserOptionsjsonObj[action.payload.value] === undefined) {
        return {
          ...state,
          hasErroredFetchingAddedCompilerUserOptionsjsonObj: {
            ...state.hasErroredFetchingAddedCompilerUserOptionsjsonObj,
            [action.payload.value]: action.payload
          }
        }
      }
      state.hasErroredFetchingAddedCompilerUserOptionsjsonObj[action.payload.value] = {
        ...state.hasErroredFetchingAddedCompilerUserOptionsjsonObj[action.payload.value],
        ...action.payload
      }

      return {
        ...state
      }
        

    default:
      return state;

  }
}

// Selectors


export const getIsFetchingCompilerUserOptionsjsonObj = (state) => {
  return state.compilers.isFetchingAddedCompilerUserOptionsjsonObj;
}

export const getCompilerUserOptionsjsonObj = (state) => {
  return state.compilers.addedCompilerUserOptionsjsonObj;
}

export const getHasErroredFetchingCompilerUserOptionsjsonObj = (state) => {
  return state.compilers.hasErroredFetchingAddedCompilerUserOptionsjsonObj;
}