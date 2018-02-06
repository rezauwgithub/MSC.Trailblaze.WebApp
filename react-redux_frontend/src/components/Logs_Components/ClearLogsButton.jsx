import React from 'react';
import { Button } from 'react-md';

import { clearLogs_LogsTextField } from '../../redux/actions/index';
import { connect } from 'react-redux';


const ClearLogsButton = (props) => (
    <div className="clearlogs_button">
        <Button raised primary onClick={props.clearLogs}>CLEAR LOGS</Button>
    </div>
);


const mapStateToProps = (state) => {
    return {
        logs: state.clearLogsReducer.logs
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        clearLogs: () => {
            dispatch(clearLogs_LogsTextField());
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(ClearLogsButton);