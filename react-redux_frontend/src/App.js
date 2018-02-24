import React from 'react';
import { Helmet } from 'react-helmet';
import { APP_TITLE } from './app_settings';

import {indigoA700} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import './App.css'

import AppBar from 'material-ui/AppBar';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: indigoA700,
  },
  appBar: {
    height: 50,
  },
});



// MuiThemeProvider takes the theme as a property and passed it down the hierarchy.
const App = () => (
  <div className="App">
    <MuiThemeProvider muiTheme={muiTheme}>
      <Helmet>
        <title>{APP_TITLE}</title>
      </Helmet>
      <AppBar title={APP_TITLE} showMenuIconButton={false} />
      <Header />
      <Main  />
      <Footer />
    </MuiThemeProvider>
  </div>
);

export default App;
