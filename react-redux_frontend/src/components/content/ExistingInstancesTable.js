import React, { Component } from 'react';
import BootstrapTable, { TableHeaderColumn } from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';

import CircularProgress from 'material-ui/CircularProgress';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';



const columns = [{
  dataField: 'id',
  text: 'User ID'
}, {
  dataField: 'name',
  text: 'User Name'
}, {
  dataField: 'phone',
  text: 'Phone'
}, {
  dataField: 'addressCity',
  text: 'City'
}, {
  dataField: 'addressPostCode',
  text: 'PostCode'
}];



var products = [{
  id: 0,
  name: 'Mac',
  phone: '425-435-0588',
  addressCity: 'Seattle',
  addressPostCode: '98134'
}];



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
        columns={ columns }
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
      data: products,
      errorMessage: null
    };
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
        data={ this.state.data }
        errorMessage={ this.state.errorMessage }
        onTableChange={ this.handleTableChange }
      />
    );
  }
}