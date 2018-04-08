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
import { addLog } from '../../../logs/actions';

import * as settings from '../../../../__frontend_app_settings__';
import { addHeaderColumnToExistingInstancesTable } from '../../../instances/actions';


// action creators

const isFetchingAddedCompilerDeveloperOptions = (payload) => {
  return {
    type: types.FETCHING_ADDED_COMPILER_DEVELOPER_OPTIONS,
    payload
  };
};

const addedCompilerDeveloperOptionsFetched = (payload) => {
	return {
		type: types.ADDED_COMPILER_DEVELOPER_OPTIONS_FETCHED,
		payload
	};
};

const hasErroredFetchingAddedCompilerDeveloperOptions = (payload) => {
  return {
    type: types.ERRORED_FETCHING_ADDED_COMPILER_DEVELOPER_OPTIONS,
    payload
  };
};




// Async Action

export const fetchAddedCompilerDeveloperOptions = (addedCompiler) => {

  // Returns a dispatcher function that dispatches an action at a later time.
  return (dispatch) => {

    dispatch(isFetchingAddedCompilerDeveloperOptions(JSON.parse(`{ "value": ${addedCompiler.value}, "payload": true }`)));
    dispatch(addLog({ log: `Fetching added compiler (${addedCompiler.name}) developer options from API backend...`, dateTime: Date() }));
    // Return a promise
    return axios.post(`http://${window.location.hostname}:${settings.BACKEND_API_PORT_NUMBER}/api/compiler.options.developer/${addedCompiler.value}`)
    .then(res => {
      // Dispatch another action to consume data
      dispatch(addedCompilerDeveloperOptionsFetched(JSON.parse(`{ "value": ${addedCompiler.value}, "payload": ${res.data} }`)));
      dispatch(isFetchingAddedCompilerDeveloperOptions(JSON.parse(`{ "value": ${addedCompiler.value}, "payload": false }`)));
      dispatch(addLog({ log: `Added compiler (${addedCompiler.name}) developer options fetched!`, dateTime: Date() }));
    })
    .catch(err => {
      dispatch(hasErroredFetchingAddedCompilerDeveloperOptions(JSON.parse(`{ "value": ${addedCompiler.value}, "payload": true }`)));
      dispatch(isFetchingAddedCompilerDeveloperOptions(JSON.parse(`{ "value": ${addedCompiler.value}, "payload": false }`)));
      dispatch(addLog({ log: `Errored fetching added compiler (${addedCompiler.name}) developer options from API backend...`, dateTime: Date() }));
      
      throw(err);
    });

  };
};

