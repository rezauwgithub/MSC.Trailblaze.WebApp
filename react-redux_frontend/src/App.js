import React from 'react';
import { connect } from 'react-redux';
import * as compilersSelectors from './redux/compilers/reducer';

import { Helmet } from 'react-helmet';
import * as settings from './__frontend_app_settings__';

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
const App = () => (
  <div className="App">
    <Helmet>
      <title>{settings.APP_TITLE}</title>
    </Helmet>
    <MuiThemeProvider muiTheme={muiTheme}>
      <div className="container">
        <HeaderScreen />
        <ContentScreen />
        <FooterScreen />
      </div>  
    </MuiThemeProvider>
  </div>
);


// Map state to pros
const mapStateToProps = (state) => {
  return {
    isFetchingLicensedCompilers: compilersSelectors.getIsFetchingLicensedCompilers(state),
    licensedCompilers: compilersSelectors.getLicensedCompilers(state),
    hasErroredFetchingLicensedCompilers: compilersSelectors.getHasErroredFetchingLicensedCompilers(state),
  };
}


export default connect(mapStateToProps)(App);
