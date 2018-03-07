import React from 'react';
import { connect } from 'react-redux';
import * as logsSelectors from '../redux/logs/reducer';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';




const tableStyle = { height: "20px", padding: "0px"};


const LogsTableScreen = (props) => (
  <div>
    <Table height="90px">
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow style={tableStyle}>
          <TableHeaderColumn style={tableStyle}>Log</TableHeaderColumn>
          <TableHeaderColumn style={tableStyle}>DateTime</TableHeaderColumn>
        </TableRow>            
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {props.logs.map((row, index) => (
          <TableRow key={index} style={tableStyle}>
            <TableRowColumn style={tableStyle}>{row.log}</TableRowColumn>
            <TableRowColumn style={tableStyle}>{row.dateTime}</TableRowColumn>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);


const mapStateToProps = (state) => {
  return {
    logs: logsSelectors.getLogs(state)
  };
}


export default connect(mapStateToProps)(LogsTableScreen);

