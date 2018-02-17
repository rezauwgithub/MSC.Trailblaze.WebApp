import React from 'react';
import { TextField } from 'react-md';

import { connect } from 'react-redux';


const LogsTextField = (props) => (
    <div className="logs_textfield">
        <TextField id="logs" rows={8} maxRows={8} />
    </div>
);


const mapStateToProps = (state) => {
    return {
        logs: state.logsReducer.logs
    };
};



export default connect(mapStateToProps)(LogsTextField);

