import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as compilersSelectors from './redux/compilers/reducer';
import * as compilersActions from './redux/compilers/actions';

import { Helmet } from 'react-helmet';
import { APP_TITLE } from './_app_settings';

import './App.css'
import { blueGrey400 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import AppBar from 'material-ui/AppBar';
import RefreshIndicator from 'material-ui/RefreshIndicator';

import ProjectPopoverAnimation from './components/ProjectPopoverAnimation';
import HelpPopoverAnimation from './components/HelpPopoverAnimation';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';

import CompilersSelectField from './components/CompilersSelectField';
import ExistingInstancesTable from './components/ExistingInstancesTable';

import RaisedButton from 'material-ui/RaisedButton';


import LogsTableScreen from './containers/LogsTableScreen';


// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blueGrey400
  },
  appBar: {
    height: 32,
  },
});


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


const tableData = [
  {
    compilerName: 'BIST180',
  },
];





// MuiThemeProvider takes the theme as a property and passed it down the hierarchy.
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      selectedCompilers: [],

      existingInstancesTableHeaderColumns: [],
      existingInstancesTableData: [],
    };
  } 
  

  setSelectedCompilers = (selectedCompilers) => {
    this.setState({
      selectedCompilers: selectedCompilers
    });
  }



  addInstancesToExistingInstancesTable = ({selectedCompilers}) => {

    selectedCompilers.forEach(selectedCompiler => {
      this.setState(state => ({
        existingInstancesTableData: [...state.existingInstancesTableData, {compilerName: this.props.availableCompilers[selectedCompiler].name}]
      }))


      this.props.dispatch(compilersActions.fetchSelectedCompilerDetails(this.props.availableCompilers[selectedCompiler]))
    });

  }



  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };


  render() {
    return (
      <div className="App">
        <Helmet>
          <title>{APP_TITLE}</title>
        </Helmet>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div className="container">
            <div className="header">
              <AppBar title={APP_TITLE} showMenuIconButton={false} />
              <table>
                <tbody>
                  <tr>
                    <td><ProjectPopoverAnimation /></td>
                    <td><HelpPopoverAnimation /></td>
                  </tr>
                </tbody>
              </table>
              <Tabs
                onChange={this.handleChange}
                value={this.state.slideIndex}
              >
                <Tab label="Define" value={0} />
                <Tab label="Generate" value={1} />
                <Tab label="Results" value={2} />
              </Tabs>
            </div>
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
                              status={(this.props.isFetchingAvailableCompilers) ? "loading" : "hide"} /></td>
                        <td><CompilersSelectField setSelectedCompilers={this.setSelectedCompilers} /></td>
                        <td><RaisedButton label="ADD" onClick={() => this.addInstancesToExistingInstancesTable(this.state.selectedCompilers)} disabled={this.state.selectedCompilers.length < 1} /></td>
                        <td><RaisedButton label="REMOVE" onClick={() => alert('REMOVE clicked')} primary={true}/></td>
                        <td><RaisedButton label="VALIDATE" onClick={() => alert('VALIDATE clicked')} secondary={true}/></td>
                      </tr>
                    </tbody>
                  </table>
                <ExistingInstancesTable existingInstancesTableData={this.state.existingInstancesTableData} />
                </div>
                <div style={styles.slide}>
                  <h2 style={styles.headline}>Generate</h2>
                </div>
                <div style={styles.slide}>
                  <h2 style={styles.headline}>Results</h2>
                </div>
              </SwipeableViews>             
            </div>
            <div className="footer">
              <LogsTableScreen />
            </div>
          </div>  
        </MuiThemeProvider>
      </div>
    )
  }
};


const mapStateToProps = (state) => {
  return {
    isFetchingAvailableCompilers: compilersSelectors.getIsFetchingAvailableCompilers(state),
    availableCompilers: compilersSelectors.getAvailableCompilers(state),
    hasErroredFetchingAvailableCompilers: compilersSelectors.getHasErroredFetchingAvailableCompilers(state)
  };
}


export default connect(mapStateToProps)(App);
