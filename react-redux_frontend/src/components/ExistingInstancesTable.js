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
    name: 'John Smith',
    status: 'Employed',
  },
  {
    name: 'John Smith',
    status: 'Employed',
  },
  {
    name: 'John Smith',
    status: 'Employed',
  },
  {
    name: 'John Smith',
    status: 'Employed',
  },
  {
    name: 'John Smith',
    status: 'Employed',
  },
  {
    name: 'John Smith',
    status: 'Employed',
  },
  {
    name: 'John Smith',
    status: 'Employed',
  },
  {
    name: 'John Smith',
    status: 'Employed',
  },
  {
    name: 'John Smith',
    status: 'Employed',
  },
  {
    name: 'John Smith',
    status: 'Employed',
  },
  {
    name: 'John Smith',
    status: 'Employed',
  },
  {
    name: 'John Smith',
    status: 'Employed',
  },
  {
    name: 'John Smith',
    status: 'Employed',
  },
];

export default class ExistingInstancesTable extends Component {
  render() {
    const tableStyle = { height: "3px", padding: "2px"};
    
    return (
      <div>
        <Table wrapperStyle={{ maxHeight: 200 }}>
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
