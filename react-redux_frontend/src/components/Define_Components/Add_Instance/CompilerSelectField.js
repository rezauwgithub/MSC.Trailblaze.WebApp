import React, { Component } from 'react';
import { SelectField } from 'react-md';

import { fetchOptions_CompilerSelect }  from '../../../redux/actions/index';
import { connect } from 'react-redux';


class CompilerSelectField extends Component {

    componentWillMount() {
        console.log('Something is being printed!');
        this.props.fetchOptions();
    }


    render() {

        if (this.props.hasErroredLoadingOptions) {
            return <p>Error loading the compiler names.</p>;
        }


        return (
            <div className="CompilerSelectField">
                <SelectField
                    className="md-cell"
                    menuItems={this.props.options}
                />
            </div>
        )
    }
};


const mapStateToProps = (state) => {
    return {
        options: state.setOptionsReducer.options,
        isLoadingOptions: state.loadingOptionsReducer.isLoadingOptions,
        hasErroredLoading: state.erroredLoadingOptionsReducer.hasErroredLoadingOptions
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        fetchOptions: () => {
            dispatch(fetchOptions_CompilerSelect());
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(CompilerSelectField);