import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import CircularProgress from 'material-ui/CircularProgress';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';


export default class ExistingInstancesTable extends Component {

  constructor(props) {
    super(props);

    this.state= {
      products: []
    }


    this.addProducts(5000);
  }


  addProducts(quantity) {

    const startId = this.state.products.length;
    for (let i = 0; i < quantity; i++) {
      const id = startId + i;
  
      this.state.products.push({
        id: id,
        name: 'Item name ' + id,
        price: 2100 + i
      });
    }
  
  }
  



  onAfterSaveCell(row, cellName, cellValue) {

    alert(`Save cell ${cellName} with value ${cellValue}`);
  
    let rowStr = '';
    for (const prop in row) {
      rowStr += prop + ': ' + row[prop] + '\n';
    }
  
    
    alert('The whole row :\n' + rowStr);
  
  }
  



  onBeforeSaveCell(row, cellName, cellValue) {
    /* 
      You can do any validation on here for editing value,
      return false for reject the editing
    */
  
    return true;
  }  


  onBeforeSaveCellAsync(row, cellName, cellValue, done) {
    /*
      If you validation is async, for example: you want to pop a confirm dialog
      for user to confirm in this case, react-bootstrap-table passes a callback 
      function back to you.
  
      You are suppose to call this callback function with a bool value to perform
      if it is valid or not. In addition, you sould return 1 to tell react-bootstrap-table
      this is a async operation.
    */
  
    /*
    // I use setTimeout to perform a async operation.
    setTimeout(() => {
  
      done(true);   // it's ok to save :)
      done(false);  // it's not ok to save :(
  
    }, 3000);
  
    
    return 1;   // please return 1
    */
  
  }



  cellEditProp = {
    mode: 'click',
    blueToSave: true,
    beforeSaveCell: this.onBeforeSaveCell,   // a hook for before saving cell
    afterSaveCell: this.onAfterSaveCell,     // a hook for after saving cell
  }


  render() {
    return (
      <BootstrapTable data={ this.state.products } height={350} cellEdit={ this.cellEditProp }>
        <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }

}