import React, { Component } from 'react';
import { SelectField } from 'react-md';

import { fetchData, loading_CompilerSelectField, erroredLoading_CompilerSelectField, setOptions_CompilerSelectField }  from '../../../redux/actions/index';
import { connect } from 'react-redux';


class CompilerSelectField extends Component {

    componentWillMount() {
        this.props.fetchOptions('/msc_compilers', loading_CompilerSelectField, erroredLoading_CompilerSelectField, setOptions_CompilerSelectField);
    }


    render() {

        if (this.props.hasErroredLoadingOptions) {
            return <p>Error loading the compiler names.</p>;
        }


        return (
            <div className="CompilerSelectField">
                <SelectField id="compilerSelectField"
                    className="md-cell"
                    menuItems={this.props.options}
                />
            </div>
        )
    }
};


const mapStateToProps = (state) => {
    return {
        options: state.optionsReducer.options,
        isLoadingOptions: state.optionsReducer.loadingOptions,
        hasErroredLoading: state.optionsReducer.erroredLoadingOptions
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        fetchOptions: (url, loadingOptions_CompilerSelectField, erroredLoadingOptions_CompilerSelectField, setOptions_CompilerSelectField) => {
            dispatch(fetchData(url, loadingOptions_CompilerSelectField, erroredLoadingOptions_CompilerSelectField, setOptions_CompilerSelectField));
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(CompilerSelectField);