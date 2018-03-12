/*
  Actions are where most of the business logic takes place.
  They are dispatched by views or by other actions
  There are 3 types of actions:
    async thunks - when doing asynchronous business logic like accessing a service
    sync thunks - when you have substantial business logic but it's not async
    plain object actions - when you just send a plain action to the reducer
*/

import axios from 'axios';
import * as types from './actionTypes';
import { addLog } from '../logs/actions';

import * as settings from '../../__frontend_app_settings__';

// action creators

const isFetchingLicensedCompilers = (bool) => {
  return {
    type: types.FETCHING_LICENSED_COMPILERS,
    isFetchingLicensedCompilers: bool
  };
};

const licensedCompilersFetched = (licensedCompilers) => {
	return {
		type: types.LICENSED_COMPILERS_FETCHED,
		licensedCompilers
	};
};

const hasErroredFetchingLicensedCompilers = (bool) => {
  return {
    type: types.ERRORED_FETCHING_LICENSED_COMPILERS,
    hasErroredFetchingLicensedCompilers: bool
  };
};



const isFetchingAddedCompilerDetails = (jsonObj) => {
  return {
    type: types.FETCHING_ADDED_COMPILER_DETAILS,
    isFetchingAddedCompilerDetailsjsonObj: jsonObj
  };
};

const addedCompilerDetailsFetched = (addedCompilerDetailsjsonObj) => {
	return {
		type: types.ADDED_COMPILER_DETAILS_FETCHED,
		addedCompilerDetailsjsonObj
	};
};

const hasErroredFetchingAddedCompilerDetails = (jsonObj) => {
  return {
    type: types.ERRORED_FETCHING_ADDED_COMPILER_DETAILS,
    hasErroredFetchingAddedCompilerDetailsjsonObj: jsonObj
  };
};



const isFetchingAddedCompilerOptions = (jsonObj) => {
  return {
    type: types.FETCHING_ADDED_COMPILER_OPTIONS,
    isFetchingAddedCompilerOptionsjsonObj: jsonObj
  };
};

const addedCompilerOptionsFetched = (addedCompilerOptionsjsonObj) => {
	return {
		type: types.ADDED_COMPILER_OPTIONS_FETCHED,
		addedCompilerOptionsjsonObj
	};
};

const hasErroredFetchingAddedCompilerOptions = (jsonObj) => {
  return {
    type: types.ERRORED_FETCHING_ADDED_COMPILER_OPTIONS,
    hasErroredFetchingAddedCompilerOptionsjsonObj: jsonObj
  };
};




// Async Action

export const fetchLicensedCompilers = () => {
  
  // Returns a dispatcher function that dispatches an action at a later time.
  return (dispatch) => {
    
    dispatch(isFetchingLicensedCompilers(true));
    dispatch(addLog({ log: 'Fetching licensed compilers from API backend...', dateTime: Date() }));
    // Return a promise
    return axios.get(`http://${window.location.hostname}:${settings.BACKEND_API_PORT_NUMBER}/api/compilers.names`)
      .then(res => {
        // Dispatch another action to consume data
        dispatch(licensedCompilersFetched(res.data));
        dispatch(isFetchingLicensedCompilers(false));
        dispatch(addLog({ log: 'Licensed compilers fetched!', dateTime: Date() }));
      })
      .catch(err => {
        dispatch(hasErroredFetchingLicensedCompilers(true));
        dispatch(isFetchingLicensedCompilers(false));
        dispatch(addLog({ log: 'Errored fetching licensed compilers from API backend...', dateTime: Date() }));
        
        throw(err);
    });

  };

};


export const fetchAddedCompilerDetails = (addedCompiler) => {

  // Returns a dispatcher function that dispatches an action at a later time.
  return (dispatch) => {

    dispatch(isFetchingAddedCompilerDetails(`{ ${addedCompiler.value}: { isFetchingAddedCompilerDetails: true } }`));
    dispatch(addLog({ log: `Fetching added compiler (${addedCompiler.name}) details from API backend...`, dateTime: Date() }));
    // Return a promise
    return axios.post(`http://${window.location.hostname}:${settings.BACKEND_API_PORT_NUMBER}/api/compiler.details`, {
      addedCompiler: addedCompiler
    })
    .then(res => {
      // Dispatch another action to consume data
      console.log("Dimpsey! Details: " + JSON.stringify(res.data));
      dispatch(addedCompilerDetailsFetched(`{ ${addedCompiler.value}: { addedCompilerDetails: ${JSON.stringify(res.data)} }`));
      dispatch(isFetchingAddedCompilerDetails(`{ ${addedCompiler.value}: { isFetchingAddedCompilerDetails: false } }`));
      dispatch(addLog({ log: `Added compiler (${addedCompiler.name}) details fetched!`, dateTime: Date() }));
    })
    .catch(err => {
      dispatch(hasErroredFetchingAddedCompilerDetails(`{ ${addedCompiler.value}: { hasErroredFetchingAddedCompilerDetails: true } }`));
      dispatch(isFetchingAddedCompilerDetails(`{ ${addedCompiler.value}: { isFetchingAddedCompilerDetails: false } }`));
      dispatch(addLog({ log: `Errored fetching added compiler (${addedCompiler.name}) details from API backend...`, dateTime: Date() }));
      
      throw(err);
    });

  };
};




export const fetchAddedCompilerOptions = (addedCompiler) => {

  // Returns a dispatcher function that dispatches an action at a later time.
  return (dispatch) => {

    dispatch(isFetchingAddedCompilerOptions(`{ value: ${addedCompiler.value}, isFetchingAddedCompilerOptions: true }`));
    dispatch(addLog({ log: `Fetching added compiler (${addedCompiler.name}) options from API backend...`, dateTime: Date() }));
    // Return a promise
    return axios.post(`http://${window.location.hostname}:${settings.BACKEND_API_PORT_NUMBER}/api/compiler.options`, {
      addedCompiler: addedCompiler
    })
    .then(res => {
      // Dispatch another action to consume data
      console.log("Dimpsey! Options: " + JSON.stringify(res.data));
      dispatch(addedCompilerOptionsFetched(`{ ${addedCompiler.value}, addedCompilerOptions: ${res.data} }`));
      dispatch(isFetchingAddedCompilerOptions(`{ value: ${addedCompiler.value}, isFetchingAddedCompilerOptions: false }`));
      dispatch(addLog({ log: `Added compiler (${addedCompiler.name}) options fetched!`, dateTime: Date() }));
    })
    .catch(err => {
      dispatch(hasErroredFetchingAddedCompilerOptions(`{ value: ${addedCompiler.value}, hasErroredFetchingAddedCompilerOptions: true }`));
      dispatch(isFetchingAddedCompilerOptions(`{ value: ${addedCompiler.value}, isFetchingAddedCompilerOptions: false }`));
      dispatch(addLog({ log: `Errored fetching added compiler (${addedCompiler.name}) options from API backend...`, dateTime: Date() }));
      
      throw(err);
    });

  };
};

