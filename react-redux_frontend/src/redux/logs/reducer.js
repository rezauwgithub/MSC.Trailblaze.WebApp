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
  logs: []
});


export default function reduce(state = initialState, action = {}) {

  switch (action.type) {

    case types.ADD_LOG:
      return state.merge({
        logs: state.logs.concat(action.payload)
      })

    default:
      return state;
      
  }
}



// Selectors

export const getLogs = (state) => {
  return state.logs.logs;
}


