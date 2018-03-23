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
import { addLog } from '../../logs/actions';

import * as settings from '../../../__frontend_app_settings__';
import { addHeaderColumnToExistingInstancesTable } from '../../instances/actions';

// action creators


const isFetchingAddedCompilerDetails = (payload) => {
  return {
    type: types.FETCHING_ADDED_COMPILER_DETAILS,
    payload
  };
};

const addedCompilerDetailsFetched = (payload) => {
	return {
		type: types.ADDED_COMPILER_DETAILS_FETCHED,
		payload
	};
};

const hasErroredFetchingAddedCompilerDetails = (payload) => {
  return {
    type: types.ERRORED_FETCHING_ADDED_COMPILER_DETAILS,
    payload
  };
};





export const fetchAddedCompilerDetails = (addedCompiler) => {

  // Returns a dispatcher function that dispatches an action at a later time.
  return (dispatch) => {

    dispatch(isFetchingAddedCompilerDetails(JSON.parse(`{ "value": ${addedCompiler.value}, "payload": true }`)));
    dispatch(addLog({ log: `Fetching added compiler (${addedCompiler.name}) details from API backend...`, dateTime: Date() }));
    // Return a promise
    return axios.get(`http://${window.location.hostname}:${settings.BACKEND_API_PORT_NUMBER}/api/compiler.details/${addedCompiler.value}`)
    .then(res => {
      // Dispatch another action to consume data
      dispatch(addedCompilerDetailsFetched(JSON.parse(`{ "value": ${addedCompiler.value}, "payload": ${JSON.stringify(res.data)} }`)));
      dispatch(addHeaderColumnToExistingInstancesTable(res.data.columnOptions));
      dispatch(isFetchingAddedCompilerDetails(JSON.parse(`{ "value": ${addedCompiler.value}, "payload": false }`)));
      dispatch(addLog({ log: `Added compiler (${addedCompiler.name}) details fetched!`, dateTime: Date() }));
    })
    .catch(err => {
      dispatch(hasErroredFetchingAddedCompilerDetails(JSON.parse(`{ "value": ${addedCompiler.value}, "payload": true }`)));
      dispatch(isFetchingAddedCompilerDetails(JSON.parse(`{ "value": ${addedCompiler.value}, "payload": false }`)));
      dispatch(addLog({ log: `Errored fetching added compiler (${addedCompiler.name}) details from API backend...`, dateTime: Date() }));
      
      throw(err);
    });

  };
};