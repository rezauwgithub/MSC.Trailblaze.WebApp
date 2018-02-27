import React from 'react';
import { Helmet } from 'react-helmet';
import { APP_TITLE } from './app_settings';

import './App.css'
import { blueGrey400 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


import AppBar from 'material-ui/AppBar';
import ProjectPopoverAnimation from './components/ProjectPopoverAnimation';
import HelpPopoverAnimation from './components/HelpPopoverAnimation';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import LogsTable from './components/LogsTable';


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
          <Tabs>
            <Tab label="Define" value={0} />
            <Tab label="Generate" value={1} />
            <Tab label="Results" value={2} />
          </Tabs>
        </div>
        <div className="content">
          Testing something there
          <br />
          Testing something there
          <br />
          Testing something there
          <br />
          Testing something there
          <br />
          Testing something there
          <br />
          Testing something there
          <br />
          Testing something there
          <br />
          Testing something there
          <br />
          Testing something there
          <br />
          Testing something there
          <br />
          Testing something there
          <br />
          Testing something there
          <br />
          Testing something there
          <br />
          Testing something there
          <br />
          Testing something there
          <br />
          Testing something there
          <br />
          Testing something there
          <br />
          Testing something there
          <br />
          Testing something there
          <br />
          Testing something there
          <br />
          Testing something there
          <br />
          Testing something there
          <br />
          Testing something there
          <br />
          Testing something there
          <br />
          Testing something there
          <br />
          Testing something there
          <br />
          Testing something there
          <br />
          Testing something there
          <br />
          Testing something there
          <br />
          Testing something there
          <br />
          Testing something there
          <br />
          Testing something there
          <br />
          Testing something there
          <br />
          Testing something there
          <br />
        </div>
        <div className="footer">
          <LogsTable />
        </div>
      </div>  
    </MuiThemeProvider>
  </div>
);

export default App;
