import * as actions from '../../../src/redux/actions/index';


describe('actions', () => {

    it('should create an action to add a log to the logs textfield', () => {
        const log = 'This is a test log';
        const expectedAction = {
            type: 'ADD_LOG_LOGSTEXTFIELD',
            log
        };

        expect(actions.addLog_LogsTextField(log)).toEqual(expectedAction);
    });


    it('should create an action to clear all logs from the logs textfield', () => {
        const logs = '';
        const expectedAction = {
            type: 'CLEAR_LOGS_LOGSTEXTFIELD',
            logs: ''
        };

        expect(actions.clearLogs_LogsTextField()).toEqual(expectedAction);
    });

})