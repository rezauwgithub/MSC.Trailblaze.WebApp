import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as compilersSelectors from './redux/compilers/reducer';
import * as compilersActions from './redux/compilers/actions';

import { Helmet } from 'react-helmet';
import { APP_TITLE } from './__frontend_app_settings__';


import { blueGrey400 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import HeaderScreen from './containers/header/HeaderScreen';




import ContentScreen from './containers/content/ContentScreen';
import FooterScreen from './containers/footer/FooterScreen';


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




// MuiThemeProvider takes the theme as a property and passed it down the hierarchy.
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedCompilers: [],
      
    };
  } 


  addInstancesToExistingInstancesTable = ({selectedCompilers}) => {

    selectedCompilers.forEach(selectedCompiler => {
      this.setState(state => ({
        existingInstancesTableData: [...state.existingInstancesTableData, {compilerName: this.props.licensedCompilers[selectedCompiler].name}]
      }))

      
      this.props.dispatch(compilersActions.fetchAddedCompilerDetails(this.props.licensedCompilers[selectedCompiler]));
      // this.props.dispatch(compilersActions.fetchAddedCompilerOptions(this.props.licensedCompilers[selectedCompiler]));

    });

  }


  render() {
    return (
      <div className="App">
        <Helmet>
          <title>{APP_TITLE}</title>
        </Helmet>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div className="container">
            <HeaderScreen />
            <ContentScreen />
            <FooterScreen />
          </div>  
        </MuiThemeProvider>
      </div>
    )
  }
};


// Map state to pros
const mapStateToProps = (state) => {
  return {
    isFetchingLicensedCompilers: compilersSelectors.getIsFetchingLicensedCompilers(state),
    licensedCompilers: compilersSelectors.getLicensedCompilers(state),
    hasErroredFetchingLicensedCompilers: compilersSelectors.getHasErroredFetchingLicensedCompilers(state),
  };
}


export default connect(mapStateToProps)(App);
