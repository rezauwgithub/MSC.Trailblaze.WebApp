import React, { Component } from 'react';
import BootstrapTable, { TableHeaderColumn } from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';

import CircularProgress from 'material-ui/CircularProgress';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';



const columns = [{
  dataField: 'id',
  text: 'ID',
}, {
  dataField: 'option',
  text: 'Option'
}, {
  dataField: 'placeholder',
  text: 'Placeholder'
}, {
  dataField: 'datatype',
  text: 'string'
}];



var products = [];



const RemoteCellEdit = (props) => {
  const cellEdit = {
    mode: 'click',
    blurToSave: true,
    errorMessage: props.errorMessage
  };


  return (
    <div>
      <BootstrapTable
        remote={ { cellEdit: true } }
        keyField="id"
        data={ props.data }
        columns={ props.columns }
        cellEdit={ cellEditFactory(cellEdit) }
        onTableChange={ props.onTableChange }
      />
    </div>
  );
};

export default class ExistingInstancesTable extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: this.props.existingInstancesTableData,
      errorMessage: null
    };
  }


  static deriveStateFromProps(props, state, prevProps) {

    if (prevProps === null || props.existingInstancesTableData !== prevProps.existingInstancesTableData) {
      return {
        existingInstancesTableData: props.existingInstancesTableData
      }
    }

  }



  handleTableChange = (type, { data, cellEdit: { rowId, dataField, newValue } }) => {
    if (newValue === 'test' && dataField === 'name') {
      this.setState(() => ({
        data,
        errorMessage: `Oops, product name shouldn't be "test"`
      }));
    } else {
      const result = data.map((row) => {
        if (row.id === rowId) {
          const newRow = { ...row };
          newRow[dataField] = newValue;
          return newRow;
        }
        return row;
      });
      this.setState(() => ({
        data: result,
        errorMessage: null
      }));
    }
  }

  render() {
    return (
      <RemoteCellEdit
        columns={ this.props.existingInstancesTableHeaderColumns }
        data={ this.state.data }
        errorMessage={ this.state.errorMessage }
        onTableChange={ this.handleTableChange }
      />
    );
  }
}