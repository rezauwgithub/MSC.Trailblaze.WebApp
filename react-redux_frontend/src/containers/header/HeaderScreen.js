/*
  Containers are "smart" React Components that are aware of Redux.
  They are connected to the Redux Store and listen on part of the app state.
  They use mapStateToProps to specify which parts and use Selectors to read them.
  Avoid having view logic & local component state in them. Use "Dumb" Components instead.
*/

import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';

import AppBar from 'material-ui/AppBar';
import { APP_TITLE } from '../../__frontend_app_settings__';

import './header.css';

import Menu from './subcontainers/Menu';
import Navigation from './subcontainers/Navigation';
import { blueGrey400 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

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


const HeaderScreen = (props) => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div className="header">
      <AppBar title={APP_TITLE} showMenuIconButton={false} />
      <Menu />
    </div>
  </MuiThemeProvider>
);





// Map state to pros
const mapStateToProps = (state) => {
  return {

  };
}


export default connect(mapStateToProps)(HeaderScreen);





