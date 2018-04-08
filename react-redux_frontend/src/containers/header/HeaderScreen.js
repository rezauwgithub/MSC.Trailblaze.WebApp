/*
  Containers are "smart" React Components that are aware of Redux.
  They are connected to the Redux Store and listen on part of the app state.
  They use mapStateToProps to specify which parts and use Selectors to read them.
  Avoid having view logic & local component state in them. Use "Dumb" Components instead.
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';

import AppBar from 'material-ui/AppBar';
import { APP_TITLE } from '../../__frontend_app_settings__';

import './header.css';

import ProjectPopoverAnimation from '../../components/header/ProjectPopoverAnimation';
import HelpPopoverAnimation from '../../components/header/HelpPopoverAnimation';

import { blueGrey400 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Tabs, Tab} from 'material-ui/Tabs';

import * as navigationActions from '../../redux/navigation/actions';
import * as navigationSelectors from '../../redux/navigation/reducer';

import * as dialogsActions from '../../redux/dialogs/actions';
import * as dialogsSelectors from '../../redux/dialogs/reducer';


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



class HeaderScreen extends Component {
  

  handleDialogHelpAboutOpen = (bool) => {
    this.props.dispatch(dialogsActions.isOpenDialogHelpAbout(bool));
  }


  handleChange = (index) => {
    this.props.dispatch(navigationActions.navigateTabs(index));
  }
  

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="header">
          <AppBar title={APP_TITLE} showMenuIconButton={false} />
          <table>
            <tbody>
              <tr>
                <td><ProjectPopoverAnimation /></td>
                <td><HelpPopoverAnimation 
                  isOpenDialogHelpAbout={this.props.isOpenDialogHelpAbout} 
                  dialogHelpAboutDetails={this.props.dialogHelpAboutDetails} 
                  handleDialogHelpAboutOpen={this.handleDialogHelpAboutOpen} 
                />
                </td>
              </tr>
            </tbody>
          </table>
          <Tabs
            onChange={this.handleChange}
            value={this.props.slideIndex}
          >
            <Tab label="Define" value={0} />
            <Tab label="Generate" value={1} />
            <Tab label="Results" value={2} />
          </Tabs>
        </div>
      </MuiThemeProvider>
    );
  }
};


// Map state to pros
const mapStateToProps = (state) => {
  return {
    slideIndex: navigationSelectors.getSlideIndex(state),

    isOpenDialogHelpAbout: dialogsSelectors.getIsOpenDialogHelpAbout(state),
    dialogHelpAboutDetails: dialogsSelectors.getDialogHelpAboutDetails(state),
  };
}


export default connect(mapStateToProps)(HeaderScreen);





