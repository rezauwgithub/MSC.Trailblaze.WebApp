export const addLog_LogsTextField = (log) => {
	return {
		type: 'ADD_LOG_LOGSTEXTFIELD',
		log
	};
}

export const clearLogs_LogsTextField = () => {
	return {
		type: 'CLEAR_LOGS_LOGSTEXTFIELD',
		logs: ''
	};
}



export const loadingOptions_CompilerSelect = (bool) => {
	return {
		type: 'LOADING_OPTIONS_COMPILERSELECT',
		isLoadingOptions: bool
	};
}


export const erroredLoadingOptions_CompilerSelect = (bool) => {
	return {
		type: 'ERRORED_LOADING_OPTIONS_COMPILERSELECT',
		hasErroredLoadingOptions: bool
	};
}


export const setOptions_CompilerSelect = (options) => {
	return {
		type: 'SET_OPTIONS_COMPILERSELECT',
		options
	};
}


export const setSelectedOption_CompilerSelect = (selectedOption) => {
	return {
		type: 'SET_SELECTED_OPTION_COMPILERSELECT',
		selectedOption
	};
}




// Redux Thunk (redux-thunk)
/*
	A thunk is a function that wraps an expression 
	to delay its evaluation.
*/
export function fetchOptions_CompilerSelect() {

	return (dispatch) => {
		dispatch(loadingOptions_CompilerSelect(true));

		fetch('/msc_compilers')
			.then((response) => {
				if (!response.ok) {
					throw Error(response.statusText);
				}

				dispatch(loadingOptions_CompilerSelect(false));

				return response;
			})
			.then((response) => response.json())
			.then((options) => dispatch(setOptions_CompilerSelect(options)))
			.catch(() => {
				dispatch(erroredLoadingOptions_CompilerSelect(true));
				dispatch(loadingOptions_CompilerSelect(false));
			}
		);
	};
}

/*
export function fetchDetails() {
	return (dispatch) => {
		dispatch(itemsIsLoading(true));

		fetch('/compiler_details', {
			method: "post",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},

			// Make sure to serialize your JSON body
			body: JSON.stringify({
				selectedCompiler: 'BIST180'
			})
		})
		.then((response) => {
			if (!response.ok) {
				throw Error(response.statusText);
			}

			dispatch(itemsIsLoading(false));

			return response;
		})
		.then((response) => response.json())
		.then((items) => dispatch(itemsFetchDataSuccess(items)))
		.catch(() => dispatch(itemsHasErrored(true)));
	}
}
*/

