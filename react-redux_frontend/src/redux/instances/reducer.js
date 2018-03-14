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
  existingInstancesTableHeaderColumns: [],
  existingInstancesTableData: [],
});


const reduce = (state = initialState, action = {}) => {

  switch (action.type) {

    case types.ADD_COLUMN_HEADER_TO_EXISTING_INSTANCES_TABLE:
      return {
        ...state,
        existingInstancesTableHeaderColumns: state.existingInstancesTableHeaderColumns.concat(action.payload)
      };
    case types.ADD_DATA_TO_EXISTING_INSTANCES_TABLE:
      return {
        ...state,
        existingInstancesTableData: state.existingInstancesTableData.concat(action.payload)
      }

    default:
      return state;
      
  }
}

export default reduce;



// Selectors

export const getInstancesTableHeaderColumns = (state) => {
  return state.instances.existingInstancesTableHeaderColumns;
}

export const getInstancesTableData = (state) => {
  return state.instances.existingInstancesTableData;
}

