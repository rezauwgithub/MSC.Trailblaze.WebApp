import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


const tableData = [
  {
    name: 'John Smith',
    status: 'Employed',
  },
  {
    name: 'Randal White',
    status: 'Unemployed',
  },
  {
    name: 'Stephanie Sanders',
    status: 'Employed',
  },
  {
    name: 'Steve Brown',
    status: 'Employed',
  },
  {
    name: 'Joyce Whitten',
    status: 'Employed',
  },
  {
    name: 'Samuel Roberts',
    status: 'Employed',
  },
  {
    name: 'Adam Moore',
    status: 'Employed',
  },
];

export default class LogsTable extends Component {
  render() {
    const tableStyle = { height: "3px", padding: "2px"};
    
    return (
      <div>
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow style={tableStyle}>
              <TableHeaderColumn style={tableStyle}>Log</TableHeaderColumn>
              <TableHeaderColumn style={tableStyle}>Date/Time</TableHeaderColumn>
            </TableRow>            
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {tableData.map( (row, index) => (
              <TableRow key={index} style={tableStyle}>
                <TableRowColumn style={tableStyle}>{row.name}</TableRowColumn>
                <TableRowColumn style={tableStyle}>{row.status}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}
