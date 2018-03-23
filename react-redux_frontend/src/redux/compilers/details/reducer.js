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
  
  isFetchingAddedCompilerDetailsjsonObj: {},
  addedCompilerDetailsjsonObj: {},
  hasErroredFetchingAddedCompilerDetailsjsonObj: {},

});



export default function reduce(state = initialState, action = {}) {

  switch (action.type) {

    case types.FETCHING_ADDED_COMPILER_DETAILS:

        if (state.isFetchingAddedCompilerDetailsjsonObj[action.payload.value] === undefined) {
          return {
            ...state,
            isFetchingAddedCompilerDetailsjsonObj: {
              ...state.isFetchingAddedCompilerDetailsjsonObj,
              [action.payload.value]: action.payload.payload
            }
          }

        }

      state.isFetchingAddedCompilerDetailsjsonObj[action.payload.value] = {
        ...state.isFetchingAddedCompilerDetailsjsonObj[action.payload.value],
        ...action.payload.payload
      }

      return {
        ...state
      }


    case types.ADDED_COMPILER_DETAILS_FETCHED:
  
      if (state.addedCompilerDetailsjsonObj[action.payload.value] === undefined) {
        return {
          ...state,
          addedCompilerDetailsjsonObj: {
            ...state.addedCompilerDetailsjsonObj,
            [action.payload.value]: action.payload
          }
        }
      }

      state.addedCompilerDetailsjsonObj[action.payload.value] = {
        ...state.addedCompilerDetailsjsonObj[action.payload.value],
        ...action.payload
      }

      return {
        ...state
      }


    case types.ERRORED_FETCHING_ADDED_COMPILER_DETAILS:

      if (state.hasErroredFetchingAddedCompilerDetailsjsonObj[action.payload.value] === undefined) {
        return {
          ...state,
          hasErroredFetchingAddedCompilerDetailsjsonObj: {
            ...state.hasErroredFetchingAddedCompilerDetailsjsonObj,
            [action.payload.value]: action.payload
          }
        }
      }

      state.hasErroredFetchingAddedCompilerDetailsjsonObj[action.payload.value] = {
        ...state.hasErroredFetchingAddedCompilerDetailsjsonObj[action.payload.value],
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

export const getIsFetchingCompilerDetailsjsonObj = (state) => {
  return state.compilers.details.isFetchingAddedCompilerDetailsjsonObj;
}

export const getCompilerDetailsjsonObj = (state) => {
  return state.compilers.details.addedCompilerDetailsjsonObj;
}

export const getHasErroredFetchingCompilerDetailsjsonObj = (state) => {
  return state.compilers.details.hasErroredFetchingAddedCompilerDetailsjsonObj;
}