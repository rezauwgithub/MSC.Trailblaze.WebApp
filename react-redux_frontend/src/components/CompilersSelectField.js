import React, {Component} from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import * as availableCompilersAction from '../store/available_compilers/actions';
import * as availableCompilersSelectors from '../store/available_compilers/reducer';


/**
 * The rendering of selected items can be customized by providing a `selectionRenderer`.
 */
class CompilersSelectField extends Component {
  state = {
    values: [],
  };

  
  constructor(props) {
    super(props);
    autoBind(this);
  }


  componentDidMount() {
    this.props.dispatch(availableCompilersAction.fetchAvailableCompilers());
  }



  handleChange = (event, index, values) => this.setState({values});

  selectionRenderer = (values) => {
    switch (values.length) {
      case 0:
        return '';
      case 1:
        return this.props.availableCompilers[values[0]].name;
      default:
        return `${values.length} compilers selected`;
    }
  }

  menuItems(availableCompilers) {
    return availableCompilers.map((availableCompiler) => (
      <MenuItem
        key={availableCompiler.value}
        insetChildren={true}
        checked={this.state.values.indexOf(availableCompiler.value) > -1}
        value={availableCompiler.value}
        primaryText={availableCompiler.name}
      />
    ));
  }



  render() {
    return (
      <SelectField
        multiple={true}
        hintText="Select Compiler(s)"
        value={this.state.values}
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
    availableCompilers: availableCompilersSelectors.getAvailableCompilers(state)
  };
}


export default connect(mapStateToProps)(CompilersSelectField);