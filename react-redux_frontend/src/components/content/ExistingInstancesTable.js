import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import CircularProgress from 'material-ui/CircularProgress';


import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';


var fakeExistingInstancesTableHeaderColumns = [{
  datatype: "string",
  option: "BISTName",
  placeholder: "NULL"
}, {
  compiler: "171",
  datatype: "integer",
  option: "ID",
  placeholder: "171"
}];


var fakeExistingInstancesTableData = [{
  compilerValue: 0,
  compilerName: "Compiler0",
}, {
  compilerValue: 1,
  compilerName: "Compiler1",
}, {
  compilerValue: 2,
  compilerName: "Compiler2",
}];



const cellEditProp = {
  mode: 'click'
};

const ExistingInstancesTable = (props) => (

  

  <BootstrapTable data={fakeExistingInstancesTableData} keyField='compilerValue' cellEdit={ cellEditProp }>
    <TableHeaderColumn dataField={'compilerValue'} editable={false}>Compiler Value</TableHeaderColumn>
    <TableHeaderColumn dataField={'compilerName'} editable={false}>Compiler Name</TableHeaderColumn>
    <TableHeaderColumn dataField={'instanceName'}>Instance Name</TableHeaderColumn>
    {fakeExistingInstancesTableHeaderColumns.map((col, index) => {
      return (
        <TableHeaderColumn key={index} dataField={'option' + index}>{col.option}</TableHeaderColumn>
      );
    })}
  </BootstrapTable>
)

export default ExistingInstancesTable;