import React, {Component} from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import * as compilersAction from '../redux/compilers/actions';
import * as compilersSelectors from '../redux/compilers/reducer';


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
    this.props.fetchLicensedCompilers();
  }



  handleChange = (event, index, selectedCompilers) => {
    
    this.setState({selectedCompilers});

    this.props.setSelectedCompilers({selectedCompilers});
  }

  selectionRenderer = (selectedCompilers) => {
    switch (selectedCompilers.length) {
      case 0:
        return '';
      case 1:
        return this.props.licensedCompilers[selectedCompilers[0]].name;
      default:
        return `${selectedCompilers.length} compilers selected`;
    }
  }

  menuItems(licensedCompilers) {
    return licensedCompilers.map((licensedCompiler) => (
      <MenuItem
        key={licensedCompiler.value}
        insetChildren={true}
        checked={this.state.selectedCompilers.indexOf(licensedCompiler.value) > -1}
        value={licensedCompiler.value}
        primaryText={licensedCompiler.name}
      />
    ));
  }



  render() {
    return (
      <SelectField
        disabled={
          this.props.isFetchingLicensedCompilers ||
          this.props.hasErroredFetchingLicensedCompilers
        }
        multiple={true}
        hintText={
          (this.props.isFetchingLicensedCompilers) ? 
            "Loading Compiler(s)..." : 
            (this.props.hasErroredFetchingLicensedCompilers) ?
              "Errored Fetching Compiler(s)" :
              "Select Compiler(s)"
        }
        value={this.state.selectedCompilers}
        onChange={this.handleChange}
        selectionRenderer={this.selectionRenderer}
      >

        {this.menuItems(this.props.licensedCompilers)}

      </SelectField>
    );
  }
}


// Map state to props
const mapStateToProps = (state) => {
  return {
    isFetchingLicensedCompilers: compilersSelectors.getIsFetchingLicensedCompilers(state),
    licensedCompilers: compilersSelectors.getLicensedCompilers(state),
    hasErroredFetchingLicensedCompilers: compilersSelectors.getHasErroredFetchingLicensedCompilers(state)
  };
}


// Map dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    // This dispatch will trigger the Ajax request we setup in our actions
    fetchLicensedCompilers: () => dispatch(compilersAction.fetchLicensedCompilers())
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(CompilersSelectField);