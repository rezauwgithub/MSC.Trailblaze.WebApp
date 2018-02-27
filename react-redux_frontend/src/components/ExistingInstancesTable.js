import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const tableHeaderColumns = [
  {
    title: 'Compiler Name'
  },
  {
    title: 'option1'
  },
  {
    title: 'option2'
  },
  {
    title: 'option3'
  },
  {
    title: 'option4'
  },
];


const tableData = [
  {
    compilerName: 'BIST180',
    option1: '32323',
    option2: '53544',
    option3: '4234324',
    option4: '2323123',
  },
  {
    compilerName: 'BIST12320',
    option1: '32323',
    option2: '53544',
    option3: '4234324',
    option4: '2323123',
  },
  {
    compilerName: 'BIS80',
    option1: '32323',
    option2: '53544',
    option3: '4234324',
    option4: '2323123',
  },
  {
    compilerName: 'BIST1423280',
    option1: '32323',
    option2: '53544',
    option3: '423234324',
    option4: '2323123',
  },
  {
    compilerName: 'BIST123',
    option1: '32323',
    option2: '53544',
    option3: '42324324',
    option4: '2323123',
  },
  {
    compilerName: 'BIST180',
    option1: '32323',
    option2: '53544',
    option3: '423323324',
    option4: '2323123',
  },
  {
    compilerName: 'BIST180',
    option1: '32323',
    option2: '53544',
    option3: '4234324',
    option4: '2323123',
  },
  {
    compilerName: 'BIST12320',
    option1: '32323',
    option2: '53544',
    option3: '4234324',
    option4: '2323123',
  },
  {
    compilerName: 'BIS80',
    option1: '32323',
    option2: '53544',
    option3: '4234324',
    option4: '2323123',
  },
  {
    compilerName: 'BIST1423280',
    option1: '32323',
    option2: '53544',
    option3: '423234324',
    option4: '2323123',
  },
  {
    compilerName: 'BIST123',
    option1: '32323',
    option2: '53544',
    option3: '42324324',
    option4: '2323123',
  },
  {
    compilerName: 'BIST180',
    option1: '32323',
    option2: '53544',
    option3: '423323324',
    option4: '2323123',
  },
  {
    compilerName: 'BIST180',
    option1: '32323',
    option2: '53544',
    option3: '4234324',
    option4: '2323123',
  },
  {
    compilerName: 'BIST12320',
    option1: '32323',
    option2: '53544',
    option3: '4234324',
    option4: '2323123',
  },
  {
    compilerName: 'BIS80',
    option1: '32323',
    option2: '53544',
    option3: '4234324',
    option4: '2323123',
  },
  {
    compilerName: 'BIST1423280',
    option1: '32323',
    option2: '53544',
    option3: '423234324',
    option4: '2323123',
  },
  {
    compilerName: 'BIST123',
    option1: '32323',
    option2: '53544',
    option3: '42324324',
    option4: '2323123',
  },
  {
    compilerName: 'BIST180',
    option1: '32323',
    option2: '53544',
    option3: '423323324',
    option4: '2323123',
  },
  {
    compilerName: 'BIST180',
    option1: '32323',
    option2: '53544',
    option3: '4234324',
    option4: '2323123',
  },
  {
    compilerName: 'BIST12320',
    option1: '32323',
    option2: '53544',
    option3: '4234324',
    option4: '2323123',
  },
  {
    compilerName: 'BIS80',
    option1: '32323',
    option2: '53544',
    option3: '4234324',
    option4: '2323123',
  },
  {
    compilerName: 'BIST1423280',
    option1: '32323',
    option2: '53544',
    option3: '423234324',
    option4: '2323123',
  },
  {
    compilerName: 'BIST123',
    option1: '32323',
    option2: '53544',
    option3: '42324324',
    option4: '2323123',
  },
  {
    compilerName: 'BIST180',
    option1: '32323',
    option2: '53544',
    option3: '423323324',
    option4: '2323123',
  },
  {
    compilerName: 'BIST180',
    option1: '32323',
    option2: '53544',
    option3: '4234324',
    option4: '2323123',
  },
  {
    compilerName: 'BIST12320',
    option1: '32323',
    option2: '53544',
    option3: '4234324',
    option4: '2323123',
  },
  {
    compilerName: 'BIS80',
    option1: '32323',
    option2: '53544',
    option3: '4234324',
    option4: '2323123',
  },
  {
    compilerName: 'BIST1423280',
    option1: '32323',
    option2: '53544',
    option3: '423234324',
    option4: '2323123',
  },
  {
    compilerName: 'BIST123',
    option1: '32323',
    option2: '53544',
    option3: '42324324',
    option4: '2323123',
  },
  {
    compilerName: 'BIST180',
    option1: '32323',
    option2: '53544',
    option3: '423323324',
    option4: '2323123',
  },
  {
    compilerName: 'BIST180',
    option1: '32323',
    option2: '53544',
    option3: '4234324',
    option4: '2323123',
  },
  {
    compilerName: 'BIST12320',
    option1: '32323',
    option2: '53544',
    option3: '4234324',
    option4: '2323123',
  },
  {
    compilerName: 'BIS80',
    option1: '32323',
    option2: '53544',
    option3: '4234324',
    option4: '2323123',
  },
  {
    compilerName: 'BIST1423280',
    option1: '32323',
    option2: '53544',
    option3: '423234324',
    option4: '2323123',
  },
  {
    compilerName: 'BIST123',
    option1: '32323',
    option2: '53544',
    option3: '42324324',
    option4: '2323123',
  },
  {
    compilerName: 'BIST180',
    option1: '32323',
    option2: '53544',
    option3: '423323324',
    option4: '2323123',
  },
];



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
              {tableHeaderColumns.map((col, index) => (
                <TableHeaderColumn key={index} style={gunnarStyle}>{col.title}</TableHeaderColumn>
              ))}
            </TableRow>            
          </TableHeader>
          <TableBody deselectOnClickaway={false}>
            {tableData.map((row, index) => (
              <TableRow key={index} style={gunnarStyle}>
                <TableRowColumn style={gunnarStyle}>{row.compilerName}</TableRowColumn>
                <TableRowColumn style={gunnarStyle}>{row.option1}</TableRowColumn>
                <TableRowColumn style={gunnarStyle}>{row.option2}</TableRowColumn>
                <TableRowColumn style={gunnarStyle}>{row.option3}</TableRowColumn>
                <TableRowColumn style={gunnarStyle}>{row.option4}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}