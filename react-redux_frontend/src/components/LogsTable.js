import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';




const tableData = [
  {
    log: 'Fetching data from API...',
    dateTime: 'Sat Dec 21, 2017 10:32:34 PM',
  },
  {
    log: 'Fetching data from API...',
    dateTime: 'Sat Dec 21, 2017 10:32:34 PM',
  },
  {
    log: 'Fetching data from API...',
    dateTime: 'Sat Dec 21, 2017 10:32:34 PM',
  },
  {
    log: 'Fetching data from API...',
    dateTime: 'Sat Dec 21, 2017 10:32:34 PM',
  },
  {
    log: 'Fetching data from API...',
    dateTime: 'Sat Dec 21, 2017 10:32:34 PM',
  },
  {
    log: 'Fetching data from API...',
    dateTime: 'Sat Dec 21, 2017 10:32:34 PM',
  },
  {
    log: 'Fetching data from API...',
    dateTime: 'Sat Dec 21, 2017 10:32:34 PM',
  },
  {
    log: 'Fetching data from API...',
    dateTime: 'Sat Dec 21, 2017 10:32:34 PM',
  },
  {
    log: 'Fetching data from API...',
    dateTime: 'Sat Dec 21, 2017 10:32:34 PM',
  },
  {
    log: 'Fetching data from API...',
    dateTime: 'Sat Dec 21, 2017 10:32:34 PM',
  },
  {
    log: 'Fetching data from API...',
    dateTime: 'Sat Dec 21, 2017 10:32:34 PM',
  },
  {
    log: 'Fetching data from API...',
    dateTime: 'Sat Dec 21, 2017 10:32:34 PM',
  },
  {
    log: 'Fetching data from API...',
    dateTime: 'Sat Dec 21, 2017 10:32:34 PM',
  },
  {
    log: 'Fetching data from API...',
    dateTime: 'Sat Dec 21, 2017 10:32:34 PM',
  },
  {
    log: 'Fetching data from API...',
    dateTime: 'Sat Dec 21, 2017 10:32:34 PM',
  },
];



export default class LogsTable extends Component {
  render() {
    const gunnarStyle = { height: "20px", padding: "0px"};
    
    return (
      <div>
        <Table height="90px">
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow style={gunnarStyle}>
              <TableHeaderColumn style={gunnarStyle}>Log</TableHeaderColumn>
              <TableHeaderColumn style={gunnarStyle}>DateTime</TableHeaderColumn>
            </TableRow>            
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {tableData.map((row, index) => (
              <TableRow key={index} style={gunnarStyle}>
                <TableRowColumn style={gunnarStyle}>{row.log}</TableRowColumn>
                <TableRowColumn style={gunnarStyle}>{row.dateTime}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}