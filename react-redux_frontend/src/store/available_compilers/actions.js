/*
  Actions are where most of the business logic takes place.
  They are dispatched by views or by other actions
  There are 3 types of actions:
    async thunks - when doing asynchronous business logic like accessing a service
    sync thunks - when you have substantial business logic but it's not async
    plain object actions - when you just send a plain action to the reducer
*/

import * as types from './actionTypes';
import RESTfulAPIService from '../../services/RESTfulAPI';
import * as compilersSelectors from './reducer';


// action creators

const isFetchingAvailableCompilers = (bool) => {
  return {
    type: types.FETCHING_AVAILABLE_COMPILERS,
    isFetchingAvailableCompilers: bool
  };
};

const availableCompilersFetched = (availableCompilers) => {
	return {
		type: types.AVAILABLE_COMPILERS_FETCHED,
		availableCompilers
	};
};

const hasErroredFetchingAvailableCompilers = (bool) => {
  return {
    type: types.ERRORED_FETCHING_AVAILABLE_COMPILERS,
    hasErroredFetchingAvailableCompilers: bool
  };
};





// async

export const fetchAvailableCompilers = () => {
  return async(dispatch, getState) => {
    try {
      dispatch(isFetchingAvailableCompilers(true));
      const compilerNamesJSONArray = await RESTfulAPIService.getJSONData('http://localhost:3001/msc_compilers');
      dispatch(availableCompilersFetched(compilerNamesJSONArray));
      dispatch(isFetchingAvailableCompilers(false));

    } catch (error) {
      dispatch(hasErroredFetchingAvailableCompilers(true));
      console.error(error);
    }
  };
}