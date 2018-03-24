/*
  Containers are "smart" React Components that are aware of Redux.
  They are connected to the Redux Store and listen on part of the app state.
  They use mapStateToProps to specify which parts and use Selectors to read them.
  Avoid having view logic & local component state in them. Use "Dumb" Components instead.
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';

// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import RaisedButton from 'material-ui/RaisedButton';

import CompilersSelectField from '../../../containers/content/subcontainers/CompilersSelectField';
import ExistingInstancesTable from '../../../components/content/ExistingInstancesTable';

import * as compilersDetailsActions from '../../../redux/compilers/details/actions';
import * as compilersDetailsSelectors from '../../../redux/compilers/details/reducer';

import * as compilersLicensedActions from '../../../redux/compilers/licensed/actions';
import * as compilersLicensedSelectors from '../../../redux/compilers/licensed/reducer';

import * as compilersAllOptionsActions from '../../../redux/compilers/options/all/actions';
import * as compilersAllOptionsSelectors from '../../../redux/compilers/options/all/reducer';
import * as compilersCompilerOptionsActions from '../../../redux/compilers/options/compiler/actions';
import * as compilersCompilerOptionsSelectors from '../../../redux/compilers/options/compiler/reducer';
import * as compilersDeveloperOptionsActions from '../../../redux/compilers/options/developer/actions';
import * as compilersDeveloperOptionsSelectors from '../../../redux/compilers/options/developer/reducer';
import * as compilersProjectOptionsActions from '../../../redux/compilers/options/project/actions';
import * as compilersProjectOptionsSelectors from '../../../redux/compilers/options/project/reducer';
import * as compilersUserOptionsActions from '../../../redux/compilers/options/user/actions';
import * as compilersUserOptionsSelectors from '../../../redux/compilers/options/user/reducer';


import * as navigationSelectors from '../../../redux/navigation/reducer';

import * as instancesActions from '../../../redux/instances/actions';
import * as instancesSelectors from '../../../redux/instances/reducer';


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





class DefineScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedCompilers: []
    };
  }


  setSelectedCompilers = ({selectedCompilers}) => {
    this.setState({
      selectedCompilers: selectedCompilers
    });
  }
  

  addInstancesToExistingInstancesTable = () => {
    this.state.selectedCompilers.forEach(selectedCompiler => {

      this.props.dispatch(instancesActions.addDataToExistingInstancesTable(
        {
          compilerName: this.props.licensedCompilers[selectedCompiler].name
        }
      ));

      //this.props.dispatch(compilersActions.fetchAddedCompilerDetails(this.props.licensedCompilers[selectedCompiler]));
      this.props.dispatch(compilersUserOptionsActions.fetchAddedCompilerUserOptions(this.props.licensedCompilers[selectedCompiler]));

    });
  }


  render() {
    return (
      <div className="content">
        <SwipeableViews
          index={this.props.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            <table>
              <tbody>
                <tr>
                  <td><RefreshIndicator size={40} left={180} top={0} 
                        status={(this.props.isFetchingLicensedCompilers) ? "loading" : "hide"} /></td>
                  <td><CompilersSelectField setSelectedCompilers={this.setSelectedCompilers} /></td>
                  <td><RaisedButton label="ADD" onClick={() => this.addInstancesToExistingInstancesTable()} disabled={this.state.selectedCompilers.length < 1} /></td>
                  <td><RaisedButton label="REMOVE" onClick={() => alert('REMOVE clicked')} primary={true}/></td>
                  <td><RaisedButton label="VALIDATE" onClick={() => alert('VALIDATE clicked')} secondary={true}/></td>
                </tr>
              </tbody>
            </table>
          <ExistingInstancesTable 
            existingInstancesTableHeaderColumns={this.props.existingInstancesTableHeaderColumns} 
            existingInstancesTableData={this.props.existingInstancesTableData} 
            isFetchingAddedCompilerDetailsjsonObj={this.props.isFetchingAddedCompilerDetailsjsonObj} 
            isFetchingAddedCompilerOptionsjsonObj={this.props.isFetchingAddedCompilerOptionsjsonObj} 
          />
          </div>
          <div style={styles.slide}>
            <h2 style={styles.headline}>Generate</h2>
          </div>
          <div style={styles.slide}>
            <h2 style={styles.headline}>Results</h2>
          </div>
        </SwipeableViews>             
      </div>
    )
  };
  
};





// Map state to pros
const mapStateToProps = (state) => {
  return {
    isFetchingLicensedCompilers: compilersLicensedSelectors.getIsFetchingLicensedCompilers(state),
    licensedCompilers: compilersLicensedSelectors.getLicensedCompilers(state),
    hasErroredFetchingLicensedCompilers: compilersLicensedSelectors.getHasErroredFetchingLicensedCompilers(state),

    isFetchingAddedCompilerDetailsjsonObj: compilersDetailsSelectors.getIsFetchingCompilerDetailsjsonObj(state),
    addedCompilerDetailsjsonObj: compilersDetailsSelectors.getCompilerDetailsjsonObj(state),
    hasErroredFetchingAddedCompilerDetailsjsonObj: compilersDetailsSelectors.getHasErroredFetchingCompilerDetailsjsonObj(state),
    

    isFetchingAddedCompilerAllOptionsjsonObj: compilersAllOptionsSelectors.getIsFetchingCompilerAllOptionsjsonObj(state),
    addedCompilerAllOptionsjsonObj: compilersAllOptionsSelectors.getCompilerAllOptionsjsonObj(state),
    hasErroredFetchingAddedAllCompilerOptionsjsonObj: compilersAllOptionsSelectors.getHasErroredFetchingCompilerAllOptionsjsonObj(state),
    
    isFetchingAddedCompilerCompilerOptionsjsonObj: compilersCompilerOptionsSelectors.getIsFetchingCompilerCompilerOptionsjsonObj(state),
    addedCompilerCompilerOptionsjsonObj: compilersCompilerOptionsSelectors.getCompilerCompilerOptionsjsonObj(state),
    hasErroredFetchingAddedCompilerCompilerOptionsjsonObj: compilersCompilerOptionsSelectors.getHasErroredFetchingCompilerCompilerOptionsjsonObj(state),
    
    isFetchingAddedCompilerDeveloperOptionsjsonObj: compilersDeveloperOptionsSelectors.getIsFetchingCompilerDeveloperOptionsjsonObj(state),
    addedCompilerDeveloperOptionsjsonObj: compilersDeveloperOptionsSelectors.getCompilerDeveloperOptionsjsonObj(state),
    hasErroredFetchingAddedCompilerDeveloperOptionsjsonObj: compilersDeveloperOptionsSelectors.getHasErroredFetchingCompilerDeveloperOptionsjsonObj(state),
    
    isFetchingAddedCompilerProjectOptionsjsonObj: compilersProjectOptionsSelectors.getIsFetchingCompilerProjectOptionsjsonObj(state),
    addedCompilerProjectOptionsjsonObj: compilersProjectOptionsSelectors.getCompilerProjectOptionsjsonObj(state),
    hasErroredFetchingAddedCompilerProjectOptionsjsonObj: compilersProjectOptionsSelectors.getHasErroredFetchingCompilerProjectOptionsjsonObj(state),

    isFetchingAddedCompilerUserOptionsjsonObj: compilersUserOptionsSelectors.getIsFetchingCompilerUserOptionsjsonObj(state),
    addedCompilerUserOptionsjsonObj: compilersUserOptionsSelectors.getCompilerUserOptionsjsonObj(state),
    hasErroredFetchingAddedCompilerUserOptionsjsonObj: compilersUserOptionsSelectors.getHasErroredFetchingCompilerUserOptionsjsonObj(state),


    slideIndex: navigationSelectors.getSlideIndex(state),

    existingInstancesTableHeaderColumns: instancesSelectors.getInstancesTableHeaderColumns(state),
    existingInstancesTableData: instancesSelectors.getInstancesTableData(state)
  };
}



export default connect(mapStateToProps)(DefineScreen);





