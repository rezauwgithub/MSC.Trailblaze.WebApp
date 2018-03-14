/*
  Containers are "smart" React Components that are aware of Redux.
  They are connected to the Redux Store and listen on part of the app state.
  They use mapStateToProps to specify which parts and use Selectors to read them.
  Avoid having view logic & local component state in them. Use "Dumb" Components instead.
*/

import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';

// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import RaisedButton from 'material-ui/RaisedButton';

import CompilersSelectField from '../../../components/content/CompilersSelectField';
import ExistingInstancesTable from '../../../components/content/ExistingInstancesTable';

import * as compilersActions from '../../../redux/compilers/actions';
import * as compilersSelectors from '../../../redux/compilers/reducer';

import * as instancesActions from '../../../redux/instances/actions';
import * as instancesSectors from '../../../redux/instances/reducer';


const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};


const DefineScreen = (props) => (
  <div className="content">
    <SwipeableViews
      index={this.state.slideIndex}
      onChangeIndex={this.handleChange}
    >
      <div>
        <table>
          <tbody>
            <tr>
              <td><RefreshIndicator 
                    size={40} 
                    left={180} 
                    top={0} 
                    status={(this.props.isFetchingLicensedCompilers) ? "loading" : "hide"} /></td>
              <td><CompilersSelectField setSelectedCompilers={this.setSelectedCompilers} /></td>
              <td><RaisedButton label="ADD" onClick={() => this.addInstancesToExistingInstancesTable(this.state.selectedCompilers)} disabled={this.state.selectedCompilers.length < 1} /></td>
              <td><RaisedButton label="REMOVE" onClick={() => alert('REMOVE clicked')} primary={true}/></td>
              <td><RaisedButton label="VALIDATE" onClick={() => alert('VALIDATE clicked')} secondary={true}/></td>
            </tr>
          </tbody>
        </table>
      <ExistingInstancesTable existingInstancesTableData={this.state.existingInstancesTableData}  />
      </div>
      <div style={styles.slide}>
        <h2 style={styles.headline}>Generate</h2>
      </div>
      <div style={styles.slide}>
        <h2 style={styles.headline}>Results</h2>
      </div>
    </SwipeableViews>             
  </div>
);





// Map state to pros
const mapStateToProps = (state) => {
  return {
    isFetchingAddedCompilerDetailsjsonObj: compilersSelectors.getIsFetchingCompilerDetailsjsonObj(state),
    addedCompilerDetailsjsonObj: compilersSelectors.getCompilerDetailsjsonObj(state),
    hasErroredFetchingAddedCompilerDetailsjsonObj: compilersSelectors.getHasErroredFetchingCompilerDetailsjsonObj(state),
    
    isFetchingAddedCompilerOptionsjsonObj: compilersSelectors.getIsFetchingCompilerOptionsjsonObj(state),
    addedCompilerOptionsjsonObj: compilersSelectors.getCompilerOptionsjsonObj(state),
    hasErroredFetchingAddedCompilerOptionsjsonObj: compilersSelectors.getHasErroredFetchingCompilerOptionsjsonObj(state),


    existingInstancesTableHeaderColumns: instancesSectors.

  };
}



export default connect(mapStateToProps)(ExistingInstancesTable);





