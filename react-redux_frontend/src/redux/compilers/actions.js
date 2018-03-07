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



const isFetchingAddedCompilerDetails = (JSONArr) => {
  return {
    type: types.FETCHING_ADDED_COMPILER_DETAILS,
    isFetchingAddedCompilerDetailsJSONArr: JSONArr
  };
};

const addedCompilerDetailsFetched = (addedCompilerDetailsJSONArr) => {
	return {
		type: types.ADDED_COMPILER_DETAILS_FETCHED,
		addedCompilerDetailsJSONArr
	};
};

const hasErroredFetchingAddedCompilerDetails = (JSONArr) => {
  return {
    type: types.ERRORED_FETCHING_ADDED_COMPILER_DETAILS,
    hasErroredFetchingAddedCompilerDetailsJSONArr: JSONArr
  };
};



const isFetchingAddedCompilerOptions = (JSONArr) => {
  return {
    type: types.FETCHING_ADDED_COMPILER_OPTIONS,
    isFetchingAddedCompilerOptionsJSONArr: JSONArr
  };
};

const addedCompilerOptionsFetched = (addedCompilerOptionsJSONArr) => {
	return {
		type: types.ADDED_COMPILER_OPTIONS_FETCHED,
		addedCompilerOptionsJSONArr
	};
};

const hasErroredFetchingAddedCompilerOptions = (JSONArr) => {
  return {
    type: types.ERRORED_FETCHING_ADDED_COMPILER_OPTIONS,
    hasErroredFetchingAddedCompilerOptionsJSONArr: JSONArr
  };
};




// Async Action

export const fetchLicensedCompilers = (url) => {
  
  // Returns a dispatcher function that dispatches an action at a later time.
  return (dispatch) => {
    
    dispatch(isFetchingLicensedCompilers(true));
    dispatch(addLog({ log: 'Fetching licensed compilers from API backend...', dateTime: Date() }));
    // Return a promise
    return axios.get(`http://${window.location.hostname}:${settings.BACKEND_API_PORT_NUMBER}/api/compilers.names`, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(res => {
        // Dispatch another action to consume data
        dispatch(licensedCompilersFetched(res.data))
        dispatch(isFetchingLicensedCompilers(false));
        dispatch(addLog({ log: 'Licensed compilers fetched!', dateTime: Date() }));
      })
      .catch(err => {
        dispatch(hasErroredFetchingLicensedCompilers(true));
        dispatch(addLog({ log: 'Errored fetching licensed compilers from API backend...', dateTime: Date() }));
        dispatch(isFetchingLicensedCompilers(false));
        throw(err);
      });

  };

};




