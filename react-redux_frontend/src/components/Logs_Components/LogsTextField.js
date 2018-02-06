import React from 'react';
import { TextField } from 'react-md';

import { connect } from 'react-redux';


const LogsTextField = (props) => (
    <div className="logs_textfield">
        <TextField raised primary id="logs" rows={8} maxRows={8} block={true} placeholder={props.logs} />
    </div>
);


const mapStateToProps = (state) => {
    return {
        logs: state.addLogReducer.logs
    };
};



export default connect(mapStateToProps)(LogsTextField);

