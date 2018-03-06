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
import { addLog } from '../logs/actions';


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



const isFetchingSelectedCompilerDetails = (JSONArr) => {
  return {
    type: types.FETCHING_SELECTED_COMPILER_DETAILS,
    isFetchingSelectedCompilerDetailsJSONArr: JSONArr
  };
};

const selectedCompilerDetailsFetched = (selectedCompilerDetailsJSONArr) => {
	return {
		type: types.SELECTED_COMPILER_DETAILS_FETCHED,
		selectedCompilerDetailsJSONArr
	};
};

const hasErroredFetchingSelectedCompilerDetails = (JSONArr) => {
  return {
    type: types.ERRORED_FETCHING_SELECTED_COMPILER_DETAILS,
    hasErroredFetchingSelectedCompilerDetailsJSONArr: JSONArr
  };
};



const isFetchingSelectedCompilerOptions = (JSONArr) => {
  return {
    type: types.FETCHING_SELECTED_COMPILER_OPTIONS,
    isFetchingSelectedCompilerOptionsJSONArr: JSONArr
  };
};

const selectedCompilerOptionsFetched = (selectedCompilerOptionsJSONArr) => {
	return {
		type: types.SELECTED_COMPILER_OPTIONS_FETCHED,
		selectedCompilerOptionsJSONArr
	};
};

const hasErroredFetchingSelectedCompilerOptions = (JSONArr) => {
  return {
    type: types.ERRORED_FETCHING_SELECTED_COMPILER_OPTIONS,
    hasErroredFetchingSelectedCompilerOptionsJSONArr: JSONArr
  };
};




// async

export function fetchAvailableCompilers() {
  return async(dispatch, getState) => {
    try {
      dispatch(addLog({ log: 'Fetching available compilers from API backend...', dateTime: Date() }));
      dispatch(isFetchingAvailableCompilers(true));
      const compilersNames = await RESTfulAPIService.getJSONData('http://localhost:3001/compilers');
      dispatch(availableCompilersFetched(compilersNames));
      dispatch(isFetchingAvailableCompilers(false));
      dispatch(addLog({ log: 'Available compilers fetched!', dateTime: Date() }));

    } catch (error) {
      dispatch(hasErroredFetchingAvailableCompilers(true));
      dispatch(addLog({ log: 'Errored fetching available compilers from API backend...', dateTime: Date() }));
      dispatch(isFetchingAvailableCompilers(false));
      console.error(error);
    }
  };
}



export function fetchSelectedCompilerDetails(selectedCompiler) {
  return async(dispatch, getState) => {
    try {
      dispatch(addLog({ log: `Fetching selected compiler (${selectedCompiler.name}) details from API backend...`, dateTime: Date() }));
      dispatch(isFetchingSelectedCompilerDetails(`{ ${selectedCompiler.value}: { name: ${selectedCompiler.name}, isFetchingSelectedCompilerDetailsJSONArr: ${true} } }`));
      const selectedCompilerDetails = await RESTfulAPIService.postJSONData('http://localhost:3001/selected_compiler_details', selectedCompiler);  
      dispatch(selectedCompilerDetailsFetched(`{ ${selectedCompiler.value}: { name: ${selectedCompiler.name}, selectedCompilerDetailsJSONArr: ${selectedCompilerDetails} } }`))
      dispatch(isFetchingSelectedCompilerDetails(`{ ${selectedCompiler.value}: { name: ${selectedCompiler.name}, isFetchingSelectedCompilerDetailsJSONArr: ${false} } }`));
      dispatch(addLog({ log: `Selected compiler (${selectedCompiler.name}) details fetched!`, dateTime: Date() }));

    } catch (error) {
      dispatch(hasErroredFetchingSelectedCompilerDetails(`{ ${selectedCompiler.value}: { name: ${selectedCompiler.name}, hasErroredFetchingSelectedCompilerDetails: ${true} } }`));
      dispatch(addLog({ log: `Errored fetching selected compiler (${selectedCompiler.name}) details from API backend...`, dateTime: Date() }));
      dispatch(isFetchingSelectedCompilerDetails(`{ ${selectedCompiler.value}: { name: ${selectedCompiler.name}, isFetchingSelectedCompilerDetailsJSONArr: ${false} } }`));
      console.error(error);
    }
  };
}



export function fetchSelectedCompilerOptions(selectedCompiler) {
  return async(dispatch, getState) => {
    try {
      dispatch(addLog({ log: `Fetching selected compiler (${selectedCompiler.name}) options from API backend...`, dateTime: Date() }));
      dispatch(isFetchingSelectedCompilerOptions(`{ ${selectedCompiler.value}: { name: ${selectedCompiler.name}, isFetchingSelectedCompilerOptionsJSONArr: ${true} } }`));
      const selectedCompilerOptions = await RESTfulAPIService.postJSONData('http://localhost:3001/selected_compiler_options', selectedCompiler);  
      dispatch(selectedCompilerOptionsFetched(`{ ${selectedCompiler.value}: { name: ${selectedCompiler.name}, selectedCompilerOptionsJSONArr: ${selectedCompilerOptions} } }`))
      dispatch(isFetchingSelectedCompilerOptions(`{ ${selectedCompiler.value}: { name: ${selectedCompiler.name}, isFetchingSelectedCompilerOptionsJSONArr: ${false} } }`));
      dispatch(addLog({ log: `Selected compiler (${selectedCompiler.name}) options fetched!`, dateTime: Date() }));

    } catch (error) {
      dispatch(hasErroredFetchingSelectedCompilerOptions(`{ ${selectedCompiler.value}: { name: ${selectedCompiler.name}, hasErroredFetchingSelectedCompilerOptionsJSONArr: ${true} } }`));
      dispatch(addLog({ log: `Errored fetching selected compiler (${selectedCompiler.name}) options from API backend...`, dateTime: Date() }));
      dispatch(isFetchingSelectedCompilerOptions(`{ ${selectedCompiler.value}: { name: ${selectedCompiler.name}, isFetchingSelectedCompilerOptionsJSONArr: ${false} } }`));
      console.error(error);
    }
  };
}
