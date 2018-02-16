import { 
	LOADING_COMPILERSELECTFIELD, 
	ERRORED_LOADING_COMPILERSELECTFIELD, 
	SET_OPTIONS_COMPILERSELECTFIELD,
	CLEAR_LOGSTEXTFIELD
} from '../../constants/redux/actionTypes';


// Action Creators

export const loading_CompilerSelectField = (bool) => {
	return {
		type: LOADING_COMPILERSELECTFIELD,
		loading: bool
	};
}


export const erroredLoading_CompilerSelectField = (bool) => {
	return {
		type: ERRORED_LOADING_COMPILERSELECTFIELD,
		hasErroredLoading: bool
	};
}


export const setOptions_CompilerSelectField = (options) => {
	return {
		type: SET_OPTIONS_COMPILERSELECTFIELD,
		options: options
	};
}



export const loading_CompilerDetails = (bool) => {
	return {
		type: 'LOADING_COMPILERDETAILS',
		isLoading: bool
	};
}


export const erroredLoading_CompilerDetails = (bool) => {
	return {
		type: 'ERRORED_LOADING_COMPILERDETAILS',
		hasErroredLoading: bool
	};
}


export const setDetails_CompilerDetails = (details) => {
	return {
		type: 'SET_DATA_COMPILERDETAILS',
		details: details 
	};
}



export const clear_LogsTextField = () => {
	return {
		type: CLEAR_LOGSTEXTFIELD,

	}
}



// Redux Thunk (redux-thunk)
/*
	A thunk is a function that wraps an expression 
	to delay its evaluation.
*/
export function fetchData(url, loadingAction, erroredAction, setDataAction) {

	return (dispatch) => {
		dispatch(loadingAction(true));

		fetch(url)
			.then((response) => {
				if (!response.ok) {
					throw Error(response.statusText);
				}

				dispatch(loadingAction(false));

				return response;
			})
			.then((response) => response.json())
			.then((data) => dispatch(setDataAction(data)))
			.catch(() => {
				dispatch(erroredAction(true));
				dispatch(loadingAction(false));
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


