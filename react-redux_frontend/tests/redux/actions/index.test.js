import * as actions from '../../../src/redux/actions/index';

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
} from '../../../src/constants/redux/actionTypes';

// Note: "it" is short for "test"

describe('actions', () => {

    it('should create an action to set loadingOptions to the boolean value passed in', () => {
        const bool = true;
        const expectedAction = {
            type: LOADING_COMPILERSELECTFIELD,
            loadingOptions: bool
        };

        expect(actions.loading_CompilerSelectField(bool)).toEqual(expectedAction);
    });

    it('should create an action to set loadingOptions to the boolean value passed in', () => {
        const bool = false;
        const expectedAction = {
            type: LOADING_COMPILERSELECTFIELD,
            loadingOptions: bool
        };

        expect(actions.loading_CompilerSelectField(bool)).toEqual(expectedAction);
    });


    it('should create an action to set erroredLoadingOptions to the boolean value passed in', () => {
        const bool = true;
        const expectedAction = {
            type: ERRORED_LOADING_COMPILERSELECTFIELD,
            erroredLoadingOptions: bool
        };

        expect(actions.erroredLoading_CompilerSelectField(bool)).toEqual(expectedAction);
    });

    it('should create an action to set erroredLoadingOptions to the boolean value passed in', () => {
        const bool = false;
        const expectedAction = {
            type: ERRORED_LOADING_COMPILERSELECTFIELD,
            erroredLoadingOptions: bool
        };

        expect(actions.erroredLoading_CompilerSelectField(bool)).toEqual(expectedAction);
    }); 


    it('should create an action to set options to the CompilerSelectField', () => {
        const options = [{
            id: 1,
            value: "compiler93821",
            label: "COMPILER93821",
        }, {
            id: 2,
            value: "compiler93822",
            label: "COMPILER93822"
        }];

        const expectedAction = {
            type: SET_OPTIONS_COMPILERSELECTFIELD,
            options
        };

        expect(actions.setOptions_CompilerSelectField(options)).toEqual(expectedAction);
    });


    it('should create an action to set loadingDetails to the boolean value passed in', () => {
        const bool = true;
        const expectedAction = {
            type: LOADING_COMPILERDETAILS,
            loadingDetails: bool
        };

        expect(actions.loading_CompilerDetails(bool)).toEqual(expectedAction);
    });

    it('should create an action to set loadingDetails to the boolean value passed in', () => {
        const bool = false;
        const expectedAction = {
            type: LOADING_COMPILERDETAILS,
            loadingDetails: bool
        };

        expect(actions.loading_CompilerDetails(bool)).toEqual(expectedAction);
    });


    it('should create an action to set erroredLoadingDetails to the boolean value passed in', () => {
        const bool = true;
        const expectedAction = {
            type: ERRORED_LOADING_COMPILERDETAILS,
            erroredLoadingDetails: bool
        };

        expect(actions.erroredLoading_CompilerDetails(bool)).toEqual(expectedAction);
    });

    it('should create an action to set erroredLoadingDetails to the boolean value passed in', () => {
        const bool = false;
        const expectedAction = {
            type: ERRORED_LOADING_COMPILERDETAILS,
            erroredLoadingDetails: bool
        };

        expect(actions.erroredLoading_CompilerDetails(bool)).toEqual(expectedAction);
    });


    it('should create an action to set logs from existing logs to the textfield', () => {
        const logs = ['Something here', 'Something here too', 'Last'];
        const expectedAction = {
            type: SET_LOGS_LOGSTEXTFIELD,
            logs
        };

        expect(actions.setLogs_LogsTextField(logs)).toEqual(expectedAction);
    });


    it('should create an action to clear all logs from the logs textfield', () => {
        const logs = [];
        const expectedAction = {
            type: CLEAR_LOGSTEXTFIELD,
            logs: []
        };

        expect(actions.clear_LogsTextField()).toEqual(expectedAction);
    });


    it('should create an action to add a log to the logs textfield', () => {
        const log = 'This is a test log';
        const expectedAction = {
            type: ADD_LOG_LOGSTEXTFIELD,
            log
        };

        expect(actions.addLog_LogsTextField(log)).toEqual(expectedAction);
    });

})