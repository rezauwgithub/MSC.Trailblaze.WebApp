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

  isFetchingAddedCompilerAllOptionsjsonObj: {},
  addedCompilerAllOptionsjsonObj: {},
  hasErroredFetchingAddedCompilerAllOptionsjsonObj: {},

});



export default function reduce(state = initialState, action = {}) {

  switch (action.type) {
 
    case types.FETCHING_ADDED_COMPILER_ALL_OPTIONS:
      
      if (state.isFetchingAddedCompilerAllOptionsjsonObj[action.payload.value] === undefined) {
        return {
          ...state,
          isFetchingAddedCompilerAllOptionsjsonObj: {
            ...state.isFetchingAddedCompilerAllOptionsjsonObj,
            [action.payload.value]: action.payload
          }
        }

      }

      state.isFetchingAddedCompilerAllOptionsjsonObj[action.payload.value] = {
        ...state.isFetchingAddedCompilerAllOptionsjsonObj[action.payload.value],
        ...action.payload.payload
      }

      return {
        ...state
      }


    case types.ADDED_COMPILER_ALL_OPTIONS_FETCHED:

      if (state.addedCompilerAllOptionsjsonObj[action.payload.value] === undefined) {
        return {
          ...state,
          addedCompilerAllOptionsjsonObj: {
            ...state.addedCompilerAllOptionsjsonObj,
            [action.payload.value]: action.payload
          }
        }
      }

      state.addedCompilerAllOptionsjsonObj[action.payload.value] = {
        ...state.addedCompilerAllOptionsjsonObj[action.payload.value],
        ...action.payload
      }

      return {
        ...state
      }


    case types.ERRORED_FETCHING_ADDED_COMPILER_ALL_OPTIONS:

      if (state.hasErroredFetchingAddedCompilerAllOptionsjsonObj[action.payload.value] === undefined) {
        return {
          ...state,
          hasErroredFetchingAddedCompilerAllOptionsjsonObj: {
            ...state.hasErroredFetchingAddedCompilerAllOptionsjsonObj,
            [action.payload.value]: action.payload
          }
        }
      }
      state.hasErroredFetchingAddedCompilerAllOptionsjsonObj[action.payload.value] = {
        ...state.hasErroredFetchingAddedCompilerAllOptionsjsonObj[action.payload.value],
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


export const getIsFetchingCompilerAllOptionsjsonObj = (state) => {
  return state.compilers.options.all.isFetchingAddedCompilerAllOptionsjsonObj;
}

export const getCompilerAllOptionsjsonObj = (state) => {
  return state.compilers.options.all.addedCompilerAllOptionsjsonObj;
}

export const getHasErroredFetchingCompilerAllOptionsjsonObj = (state) => {
  return state.compilers.options.all.hasErroredFetchingAddedCompilerAllOptionsjsonObj;
}