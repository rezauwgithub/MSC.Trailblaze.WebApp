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

  isFetchingAddedCompilerCompilerOptionsjsonObj: {},
  addedCompilerCompilerOptionsjsonObj: {},
  hasErroredFetchingAddedCompilerCompilerOptionsjsonObj: {},

});



export default function reduce(state = initialState, action = {}) {

  switch (action.type) {
 
    case types.FETCHING_ADDED_COMPILER_COMPILER_OPTIONS:
      
      if (state.isFetchingAddedCompilerCompilerOptionsjsonObj[action.payload.value] === undefined) {
        return {
          ...state,
          isFetchingAddedCompilerCompilerOptionsjsonObj: {
            ...state.isFetchingAddedCompilerCompilerOptionsjsonObj,
            [action.payload.value]: action.payload
          }
        }

      }

      state.isFetchingAddedCompilerCompilerOptionsjsonObj[action.payload.value] = {
        ...state.isFetchingAddedCompilerCompilerOptionsjsonObj[action.payload.value],
        ...action.payload.payload
      }

      return {
        ...state
      }


    case types.ADDED_COMPILER_COMPILER_OPTIONS_FETCHED:

      if (state.addedCompilerCompilerOptionsjsonObj[action.payload.value] === undefined) {
        return {
          ...state,
          addedCompilerCompilerOptionsjsonObj: {
            ...state.addedCompilerCompilerOptionsjsonObj,
            [action.payload.value]: action.payload
          }
        }
      }

      state.addedCompilerCompilerOptionsjsonObj[action.payload.value] = {
        ...state.addedCompilerCompilerOptionsjsonObj[action.payload.value],
        ...action.payload
      }

      return {
        ...state
      }


    case types.ERRORED_FETCHING_ADDED_COMPILER_COMPILER_OPTIONS:

      if (state.hasErroredFetchingAddedCompilerCompilerOptionsjsonObj[action.payload.value] === undefined) {
        return {
          ...state,
          hasErroredFetchingAddedCompilerCompilerOptionsjsonObj: {
            ...state.hasErroredFetchingAddedCompilerCompilerOptionsjsonObj,
            [action.payload.value]: action.payload
          }
        }
      }
      state.hasErroredFetchingAddedCompilerCompilerOptionsjsonObj[action.payload.value] = {
        ...state.hasErroredFetchingAddedCompilerCompilerOptionsjsonObj[action.payload.value],
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


export const getIsFetchingCompilerCompilerOptionsjsonObj = (state) => {
  return state.compilers.options.compiler.isFetchingAddedCompilerCompilerOptionsjsonObj;
}

export const getCompilerCompilerOptionsjsonObj = (state) => {
  return state.compilers.options.compiler.addedCompilerCompilerOptionsjsonObj;
}

export const getHasErroredFetchingCompilerCompilerOptionsjsonObj = (state) => {
  return state.compilers.options.compiler.hasErroredFetchingAddedCompilerCompilerOptionsjsonObj;
}