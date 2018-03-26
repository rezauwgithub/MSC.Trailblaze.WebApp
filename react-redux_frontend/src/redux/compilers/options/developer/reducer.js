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

  isFetchingAddedCompilerDeveloperOptionsjsonObj: {},
  addedCompilerDeveloperOptionsjsonObj: {},
  hasErroredFetchingAddedCompilerDeveloperOptionsjsonObj: {},

});



export default function reduce(state = initialState, action = {}) {

  switch (action.type) {
 
    case types.FETCHING_ADDED_COMPILER_DEVELOPER_OPTIONS:
      
      if (state.isFetchingAddedCompilerDeveloperOptionsjsonObj[action.payload.value] === undefined) {
        return {
          ...state,
          isFetchingAddedCompilerDeveloperOptionsjsonObj: {
            ...state.isFetchingAddedCompilerDeveloperOptionsjsonObj,
            [action.payload.value]: action.payload
          }
        }

      }

      state.isFetchingAddedCompilerDeveloperOptionsjsonObj[action.payload.value] = {
        ...state.isFetchingAddedCompilerDeveloperOptionsjsonObj[action.payload.value],
        ...action.payload.payload
      }

      return {
        ...state
      }


    case types.ADDED_COMPILER_DEVELOPER_OPTIONS_FETCHED:

      if (state.addedCompilerDeveloperOptionsjsonObj[action.payload.value] === undefined) {
        return {
          ...state,
          addedCompilerDeveloperOptionsjsonObj: {
            ...state.addedCompilerDeveloperOptionsjsonObj,
            [action.payload.value]: action.payload
          }
        }
      }

      state.addedCompilerDeveloperOptionsjsonObj[action.payload.value] = {
        ...state.addedCompilerDeveloperOptionsjsonObj[action.payload.value],
        ...action.payload
      }

      return {
        ...state
      }


    case types.ERRORED_FETCHING_ADDED_COMPILER_DEVELOPER_OPTIONS:

      if (state.hasErroredFetchingAddedCompilerDeveloperOptionsjsonObj[action.payload.value] === undefined) {
        return {
          ...state,
          hasErroredFetchingAddedCompilerDeveloperOptionsjsonObj: {
            ...state.hasErroredFetchingAddedCompilerDeveloperOptionsjsonObj,
            [action.payload.value]: action.payload
          }
        }
      }
      state.hasErroredFetchingAddedCompilerDeveloperOptionsjsonObj[action.payload.value] = {
        ...state.hasErroredFetchingAddedCompilerDeveloperOptionsjsonObj[action.payload.value],
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


export const getIsFetchingCompilerDeveloperOptionsjsonObj = (state) => {
  return state.compilers.options.developer.isFetchingAddedCompilerDeveloperOptionsjsonObj;
}

export const getCompilerDeveloperOptionsjsonObj = (state) => {
  return state.compilers.options.developer.addedCompilerDeveloperOptionsjsonObj;
}

export const getHasErroredFetchingCompilerDeveloperOptionsjsonObj = (state) => {
  return state.compilers.options.developer.hasErroredFetchingAddedCompilerDeveloperOptionsjsonObj;
}