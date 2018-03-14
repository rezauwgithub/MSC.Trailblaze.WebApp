/*
  Actions are where most of the business logic takes place.
  They are dispatched by views or by other actions
  There are 3 types of actions:
    async thunks - when doing asynchronous business logic like accessing a service
    sync thunks - when you have substantial business logic but it's not async
    plain object actions - when you just send a plain action to the reducer
*/

import * as types from './actionTypes';

// action creators

export const addColumnToExistingInstancesTable = (payload) => {
  return {
      type: types.ADD_COLUMN_TO_EXISTING_INSTANCES_TABLE,
      payload
    };
};


export const addDataToExistingInstancesTable = (payload) => {
  return {
      type: types.ADD_DATA_TO_EXISTING_INSTANCES_TABLE,
      payload
    };
};