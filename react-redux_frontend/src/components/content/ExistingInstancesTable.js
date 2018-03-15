import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import CircularProgress from 'material-ui/CircularProgress';



export default class ExistingInstancesTable extends Component {
  render() {
    const gunnarStyle = { height: "20px", padding: "0px"};
    
    return (
      <div>
        <Table height="250px"
          multiSelectable={true}
        >
          <TableHeader enableSelectAll={true}>
            <TableRow style={gunnarStyle}>
              {this.props.existingInstancesTableHeaderColumns.map((col, index) => (
                <TableHeaderColumn key={index} style={gunnarStyle}>{col.title}</TableHeaderColumn>
              ))}
            </TableRow>            
          </TableHeader>
          <TableBody deselectOnClickaway={false}>
            {this.props.existingInstancesTableData.map((row, index) => (
              <TableRow key={index} style={gunnarStyle}>
                <TableRowColumn style={gunnarStyle}>{row.compilerName}</TableRowColumn>

                
                <TableRowColumn style={gunnarStyle}><CircularProgress mode={ (this.props.isFetchingAddedCompilerDetailsjsonObj || this.props.isFetchingAddedCompilerOptionsjsonObj) ? "indeterminate" : "determinate" } /></TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}