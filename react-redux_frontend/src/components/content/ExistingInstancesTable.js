import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
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
}, {
  compiler: "true",
  datatype: "boolean",
  option: "is_verified",
  placeholder: "true",
}, {
  compiler: "1",
  datatype: "integer",
  option: "instance_count",
  placeholder: "1"
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


// validator function pass the user input value and should return true|false.
function jobNameValidator(value){
  if(!value){
    return 'Job Name is required!'
  }else if(value.length<10){
    return 'Job Name length must great 10 char'
  }
  return true;
}




const cellEditProp = {
  mode: 'click'
};


const optionFormatter = (cell, row) => {

  if (true) {
    
  }

  return (<div>Jesus</div>);
}


const gunnarStyle = { whiteSpace: "normal", workWrap: "break-word" };


const ExistingInstancesTable = (props) => (
    <BootstrapTable data={ fakeExistingInstancesTableData } cellEdit={ cellEditProp }>
      <TableHeaderColumn key={0} style={gunnarStyle} dataField='compilerValue' isKey>Compiler ID</TableHeaderColumn>
      {props.existingInstancesTableHeaderColumns.map((column, index) => {
        return (
          <TableHeaderColumn key={index} style={gunnarStyle} dataField={column.option} dataFormat={optionFormatter}>{column.option}</TableHeaderColumn>
        )
      })}

      
    </BootstrapTable>
)

export default ExistingInstancesTable;