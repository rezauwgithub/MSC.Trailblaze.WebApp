/*
  Reducers hold the store's state (this initialState object defines it).
  Reducers also handle plain object actions and modify their state (immutably) accordingly.
  This is the only way to change the store's state.
  The other exports in this file are Selectors, which is business logic that digests parts 
  of the store's state for easier comsumption by views.
*/

import Immutable from 'seamless-immutable';
import * as types from './actionTypes';

import { addHeaderColumnToExistingInstancesTable } from './actions';


const initialState = Immutable({
  existingInstancesTableHeaderColumns: [
    {
      dataField: 'id',
      text: 'ID'
    },
    {
      dataField: 'compilerName',
      text: 'Compiler Name'
    }
  ],
  existingInstancesTableData: [],
});


export default function reduce(state = initialState, action = {}) {

  switch (action.type) {

    case types.ADD_COLUMN_HEADER_TO_EXISTING_INSTANCES_TABLE:
      return state.merge({
        existingInstancesTableHeaderColumns: state.existingInstancesTableHeaderColumns.concat(action.payload)
      });

    case types.ADD_DATA_TO_EXISTING_INSTANCES_TABLE:
      return state.merge({
        existingInstancesTableData: [...state.existingInstancesTableData, action.payload]
      })

    default:
      return state;
      
  }
}



// Selectors

export const getInstancesTableHeaderColumns = (state) => {
  return state.instances.existingInstancesTableHeaderColumns;
}

export const getInstancesTableData = (state) => {
  return state.instances.existingInstancesTableData;
}


