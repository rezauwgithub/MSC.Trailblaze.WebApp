import React, {Component} from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import * as compilersAction from '../store/compilers/actions';
import * as compilersSelectors from '../store/compilers/reducer';


/**
 * The rendering of selected items can be customized by providing a `selectionRenderer`.
 */
class CompilersSelectField extends Component {

  state = {
    selectedCompilers: [],
  };

  
  constructor(props) {
    super(props);
    autoBind(this);
  }


  componentDidMount() {
    this.props.dispatch(compilersAction.fetchAvailableCompilers());
  }



  handleChange = (event, index, selectedCompilers) => {
    this.setState({selectedCompilers});

    let selectedCompilersNames = [];
    selectedCompilers.forEach((selectedCompiler) => {
      selectedCompilersNames.push(this.props.availableCompilers[selectedCompiler].name);
    });

    this.props.setSelectedCompilers(selectedCompilersNames);
  }

  selectionRenderer = (selectedCompilers) => {
    switch (selectedCompilers.length) {
      case 0:
        return '';
      case 1:
        return this.props.availableCompilers[selectedCompilers[0]].name;
      default:
        return `${selectedCompilers.length} compilers selected`;
    }
  }

  menuItems(availableCompilers) {
    return availableCompilers.map((availableCompiler) => (
      <MenuItem
        key={availableCompiler.value}
        insetChildren={true}
        checked={this.state.selectedCompilers.indexOf(availableCompiler.value) > -1}
        value={availableCompiler.value}
        primaryText={availableCompiler.name}
      />
    ));
  }



  render() {
    return (
      <SelectField
        disabled={
          this.props.isFetchingAvailableCompilers ||
          this.props.hasErroredFetchingAvailableCompilers
        }
        multiple={true}
        hintText={
          (this.props.isFetchingAvailableCompilers) ? 
            "Loading Compiler(s)..." : 
            (this.props.hasErroredFetchingAvailableCompilers) ?
              "Errored Fetching Compiler(s)" :
              "Select Compiler(s)"
        }
        value={this.state.selectedCompilers}
        onChange={this.handleChange}
        selectionRenderer={this.selectionRenderer}
      >

        {this.menuItems(this.props.availableCompilers)}

      </SelectField>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    isFetchingAvailableCompilers: compilersSelectors.getIsFetchingAvailableCompilers(state),
    availableCompilers: compilersSelectors.getAvailableCompilers(state),
    hasErroredFetchingAvailableCompilers: compilersSelectors.getHasErroredFetchingAvailableCompilers(state)
  };
}


export default connect(mapStateToProps)(CompilersSelectField);