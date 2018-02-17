import { 
	LOADING_COMPILERSELECTFIELD, 
	ERRORED_LOADING_COMPILERSELECTFIELD, 
	SET_OPTIONS_COMPILERSELECTFIELD,
	
	LOADING_COMPILERDETAILS,
	ERRORED_LOADING_COMPILERDETAILS,
	SET_DETAILS_COMPILERDETAILS,

	LOADING_LOGSTEXTFIELD,
	ERRORED_LOADING_LOGSTEXTFIELD,
	CLEAR_LOGSTEXTFIELD,
	SET_LOGS_LOGSTEXTFIELD,
	ADD_LOG_LOGSTEXTFIELD
} from '../../constants/redux/actionTypes';


// Action Creators

export const loading_CompilerSelectField = (bool) => {
	return {
		type: LOADING_COMPILERSELECTFIELD,
		loadingOptions: bool
	};
}

export const erroredLoading_CompilerSelectField = (bool) => {
	return {
		type: ERRORED_LOADING_COMPILERSELECTFIELD,
		erroredLoadingOptions: bool
	};
}

export const setOptions_CompilerSelectField = (options) => {
	return {
		type: SET_OPTIONS_COMPILERSELECTFIELD,
		options
	};
}



export const loading_CompilerDetails = (bool) => {
	return {
		type: LOADING_COMPILERDETAILS,
		loadingDetails: bool
	};
}

export const erroredLoading_CompilerDetails = (bool) => {
	return {
		type: ERRORED_LOADING_COMPILERDETAILS,
		erroredLoadingDetails: bool
	};
}

export const setDetails_CompilerDetails = (details) => {
	return {
		type: SET_DETAILS_COMPILERDETAILS,
		details
	};
}


export const loading_LogsTextField = (bool) => {
	return {
		type: LOADING_LOGSTEXTFIELD,
		loadingLogs: bool
	}
}

export const erroredLoading_LogsTextField = (bool) => {
	return {
		type: ERRORED_LOADING_LOGSTEXTFIELD,
		erroredLoadingLogs: bool
	}
}

export const setLogs_LogsTextField = (logs) => {
	return {
		type: SET_LOGS_LOGSTEXTFIELD,
		logs
	}
}

export const clear_LogsTextField = () => {
	return {
		type: CLEAR_LOGSTEXTFIELD,
		logs: []
	}
}

export const addLog_LogsTextField = (log) => {
	return {
		type: ADD_LOG_LOGSTEXTFIELD,
		log
	}
}



// Redux Thunk (redux-thunk)
/*
	A thunk is a function that wraps an expression 
	to delay its evaluation.
*/
export function fetchData(url, loadingAction, erroredAction, setDataAction) {

	return (dispatch) => {
		dispatch(loading_CompilerSelectField(true));
		dispatch(addLog_LogsTextField('Loading Compilers...'));

		fetch(url)
			.then((response) => {
				if (!response.ok) {
					throw Error(response.statusText);
				}

				dispatch(loading_CompilerSelectField(false));
				dispatch(addLog_LogsTextField('Loaded Compilers!'));

				return response;
			})
			.then((response) => response.json())
			.then((data) => dispatch(setOptions_CompilerSelectField(data)))
			.catch(() => {
				dispatch(erroredLoading_CompilerSelectField(true));
				dispatch(loading_CompilerSelectField(false));
			}
		);
	};
}

/*
export function fetchDetails(selectedCompiler) {
	return (dispatch) => {
		dispatch(loadingCompilerDetails(true));

		fetch('/compiler_details', {
			method: "post",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},

			// Make sure to serialize your JSON body
			body: JSON.stringify({
				selectedCompiler: selectedCompiler
			})
		})
		.then((response) => {
			if (!response.ok) {
				throw Error(response.statusText);
			}

			dispatch(loadingCompilerDetails(false));

			return response;
		})
		.then((response) => response.json())
		.then((compilerDetails) => dispatch(itemsFetchDataSuccess(compilerDetails)))
		.catch(() => dispatch(itemsHasErrored(true)));
	}
}
*/


