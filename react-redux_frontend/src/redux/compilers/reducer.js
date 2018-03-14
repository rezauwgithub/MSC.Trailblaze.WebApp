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

  selectedCompilers: [],

  
  isFetchingAddedCompilerDetailsjsonObj: {},
  addedCompilerDetailsjsonObj: {},
  hasErroredFetchingAddedCompilerDetailsjsonObj: {},

  isFetchingAddedCompilerOptionsjsonObj: {},
  addedCompilerOptionsjsonObj: {},
  hasErroredFetchingAddedCompilerOptionsjsonObj: {},

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

    case types.FETCHING_ADDED_COMPILER_DETAILS:
      
        
        console.log('WTF? value: ' + action.payload.value);
        console.log('WTF? value: ' + action.payload.payload)


        if (state.isFetchingAddedCompilerDetailsjsonObj[action.payload.value] === undefined) {
          alert('Adding - Fetching Added Compiler Details');
          
          return {
            ...state,
            isFetchingAddedCompilerDetailsjsonObj: {
              ...state.isFetchingAddedCompilerDetailsjsonObj,
              [action.payload.value]: action.payload.payload
            }
          }

        }

      
      alert('Updating - Fetching Compiler Details');

      state.isFetchingAddedCompilerDetailsjsonObj[action.payload.value] = {
        ...state.isFetchingAddedCompilerDetailsjsonObj[action.payload.value],
        ...action.payload.payload
      }

      return {
        ...state
      }


    case types.ADDED_COMPILER_DETAILS_FETCHED:
  
      if (state.addedCompilerDetailsjsonObj[action.payload.value] === undefined) {
        alert('Adding - Added Compiler Details');

        return {
          ...state,
          addedCompilerDetailsjsonObj: {
            ...state.addedCompilerDetailsjsonObj,
            [action.payload.value]: action.payload
          }
        }
      }


      alert('Updating - Added Compiler Details');

      state.addedCompilerDetailsjsonObj[action.payload.value] = {
        ...state.addedCompilerDetailsjsonObj[action.payload.value],
        ...action.payload
      }

      return {
        ...state
      }


    case types.ERRORED_FETCHING_ADDED_COMPILER_DETAILS:

      if (state.hasErroredFetchingAddedCompilerDetailsjsonObj[action.payload.value] === undefined) {
        alert('Adding - Errored Fetching Added Compiler Details');

        return {
          ...state,
          hasErroredFetchingAddedCompilerDetailsjsonObj: {
            ...state.hasErroredFetchingAddedCompilerDetailsjsonObj,
            [action.payload.value]: action.payload
          }
        }
      }


      alert('Updating - Errored Fetching Added Compiler Details');

      state.hasErroredFetchingAddedCompilerDetailsjsonObj[action.payload.value] = {
        ...state.hasErroredFetchingAddedCompilerDetailsjsonObj[action.payload.value],
        ...action.payload
      }

      return {
        ...state
      }


 
    case types.FETCHING_ADDED_COMPILER_OPTIONS:
      
      if (state.isFetchingAddedCompilerOptionsjsonObj[action.payload.value] === undefined) {
        alert('Adding - Fetching Added Compiler Options');
        
        return {
          ...state,
          isFetchingAddedCompilerOptionsjsonObj: {
            ...state.isFetchingAddedCompilerOptionsjsonObj,
            [action.payload.value]: action.payload
          }
        }

      }

    
    alert('Updating - Fetching Compiler Options');

    state.isFetchingAddedCompilerOptionsjsonObj[action.payload.value] = {
      ...state.isFetchingAddedCompilerOptionsjsonObj[action.payload.value],
      ...action.payload.payload
    }

    return {
      ...state
    }


    case types.ADDED_COMPILER_OPTIONS_FETCHED:

      if (state.addedCompilerOptionsjsonObj[action.payload.value] === undefined) {
        alert('Adding - Added Compiler Options');

        return {
          ...state,
          addedCompilerOptionsjsonObj: {
            ...state.addedCompilerOptionsjsonObj,
            [action.payload.value]: action.payload
          }
        }
      }


      alert('Updating - Added Compiler Options');

      state.addedCompilerOptionsjsonObj[action.payload.value] = {
        ...state.addedCompilerOptionsjsonObj[action.payload.value],
        ...action.payload
      }

      return {
        ...state
      }


    case types.ERRORED_FETCHING_ADDED_COMPILER_OPTIONS:

      if (state.hasErroredFetchingAddedCompilerOptionsjsonObj[action.payload.value] === undefined) {
        alert('Adding - Errored Fetching Added Compiler Options');

        return {
          ...state,
          hasErroredFetchingAddedCompilerOptionsjsonObj: {
            ...state.hasErroredFetchingAddedCompilerOptionsjsonObj,
            [action.payload.value]: action.payload
          }
        }
      }


      alert('Updating - Errored Fetching Added Compiler Options');

      state.hasErroredFetchingAddedCompilerOptionsjsonObj[action.payload.value] = {
        ...state.hasErroredFetchingAddedCompilerOptionsjsonObj[action.payload.value],
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

export const getIsFetchingLicensedCompilers = (state) => {
  return state.compilers.isFetchingLicensedCompilers;
}

export const getLicensedCompilers = (state) => {
  return state.compilers.licensedCompilers;
}

export const getHasErroredFetchingLicensedCompilers = (state) => {
  return state.compilers.hasErroredFetchingLicensedCompilers;
}


export const getIsFetchingCompilerDetailsjsonObj = (state) => {
  return state.compilers.isFetchingAddedCompilerDetailsjsonObj;
}

export const getCompilerDetailsjsonObj = (state) => {
  return state.compilers.addedCompilerDetailsjsonObj;
}

export const getHasErroredFetchingCompilerDetailsjsonObj = (state) => {
  return state.compilers.hasErroredFetchingAddedCompilerDetailsjsonObj;
}


export const getIsFetchingCompilerOptionsjsonObj = (state) => {
  return state.compilers.isFetchingAddedCompilerOptionsjsonObj;
}

export const getCompilerOptionsjsonObj = (state) => {
  return state.compilers.addedCompilerOptionsjsonObj;
}

export const getHasErroredFetchingCompilerOptionsjsonObj = (state) => {
  return state.compilers.hasErroredFetchingAddedCompilerOptionsjsonObj;
}