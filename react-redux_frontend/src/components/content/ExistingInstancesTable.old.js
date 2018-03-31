import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import TextField from 'material-ui/TextField';

import CircularProgress from 'material-ui/CircularProgress';



export default class ExistingInstancesTable extends Component {
  render() {
    const gunnarStyle = { height: "20px", padding: "0px", whiteSpace: "normal", wordWrap: "break-word" };
    
    return (
      <div>
        <Table height="250px"
          multiSelectable={true}
        >
          <TableHeader enableSelectAll={true}>
            <TableRow style={gunnarStyle}>
              <TableRowColumn style={gunnarStyle}>Compiler Name</TableRowColumn>
              {this.props.existingInstancesTableHeaderColumns.map((col, index) => (
                  <TableHeaderColumn key={index} style={gunnarStyle}>{col.option}</TableHeaderColumn>
                )
              )}
              <TableRowColumn style={gunnarStyle}>Status</TableRowColumn>
            </TableRow>            
          </TableHeader>
          <TableBody deselectOnClickaway={false}>
            {this.props.existingInstancesTableData.map((row, index) => (
              <TableRow key={index} style={gunnarStyle}>
                <TableRowColumn style={gunnarStyle}>{row.compilerName}</TableRowColumn>
                {this.props.existingInstancesTableHeaderColumns.map((col, index) => (
                  <TableRowColumn key={index} style={gunnarStyle}>{col.placeholder}</TableRowColumn>
                ))}
                <TableRowColumn style={gunnarStyle}><CircularProgress mode={ (this.props.isFetchingAddedCompilerDetailsjsonObj || this.props.isFetchingAddedCompilerOptionsjsonObj) ? "indeterminate" : "determinate" } /></TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}