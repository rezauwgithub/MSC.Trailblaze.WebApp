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

  isFetchingAddedCompilerProjectOptionsjsonObj: {},
  addedCompilerProjectOptionsjsonObj: {},
  hasErroredFetchingAddedCompilerProjectOptionsjsonObj: {},

});



export default function reduce(state = initialState, action = {}) {

  switch (action.type) {
 
    case types.FETCHING_ADDED_COMPILER_PROJECT_OPTIONS:
      
      if (state.isFetchingAddedCompilerProjectOptionsjsonObj[action.payload.value] === undefined) {
        return {
          ...state,
          isFetchingAddedCompilerProjectOptionsjsonObj: {
            ...state.isFetchingAddedCompilerProjectOptionsjsonObj,
            [action.payload.value]: action.payload
          }
        }

      }

      state.isFetchingAddedCompilerProjectOptionsjsonObj[action.payload.value] = {
        ...state.isFetchingAddedCompilerProjectOptionsjsonObj[action.payload.value],
        ...action.payload.payload
      }

      return {
        ...state
      }


    case types.ADDED_COMPILER_PROJECT_OPTIONS_FETCHED:

      if (state.addedCompilerProjectOptionsjsonObj[action.payload.value] === undefined) {
        return {
          ...state,
          addedCompilerProjectOptionsjsonObj: {
            ...state.addedCompilerProjectOptionsjsonObj,
            [action.payload.value]: action.payload
          }
        }
      }

      state.addedCompilerProjectOptionsjsonObj[action.payload.value] = {
        ...state.addedCompilerProjectOptionsjsonObj[action.payload.value],
        ...action.payload
      }

      return {
        ...state
      }


    case types.ERRORED_FETCHING_ADDED_COMPILER_PROJECT_OPTIONS:

      if (state.hasErroredFetchingAddedCompilerProjectOptionsjsonObj[action.payload.value] === undefined) {
        return {
          ...state,
          hasErroredFetchingAddedCompilerProjectOptionsjsonObj: {
            ...state.hasErroredFetchingAddedCompilerProjectOptionsjsonObj,
            [action.payload.value]: action.payload
          }
        }
      }
      state.hasErroredFetchingAddedCompilerProjectOptionsjsonObj[action.payload.value] = {
        ...state.hasErroredFetchingAddedCompilerProjectOptionsjsonObj[action.payload.value],
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


export const getIsFetchingCompilerProjectOptionsjsonObj = (state) => {
  return state.compilers.options.project.isFetchingAddedCompilerProjectOptionsjsonObj;
}

export const getCompilerProjectOptionsjsonObj = (state) => {
  return state.compilers.options.project.addedCompilerProjectOptionsjsonObj;
}

export const getHasErroredFetchingCompilerProjectOptionsjsonObj = (state) => {
  return state.compilers.options.project.hasErroredFetchingAddedCompilerProjectOptionsjsonObj;
}