import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { HOME_PAGE } from '../../__frontend_app_settings__';


export default class DialogHelpAbout extends Component {

  state = {
    open: false,
  };

  handleOpen = () => {
    this.props.handleDialogHelpAboutOpen(true);
  };

  handleClose = () => {
    this.props.handleDialogHelpAboutOpen(false);
  };


  render() {
    const actions = [
      <FlatButton 
        label="Close"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        <Dialog
          title={this.props.dialogHelpAboutDetails.title}
          actions={actions}
          open={this.props.isOpenDialogHelpAbout}
          onRequestClose={this.handleClose}
        >
          {this.props.dialogHelpAboutDetails.description} <br/>
          Product Version: {this.props.dialogHelpAboutDetails.productVersion} <br />
          Vendor: {this.props.dialogHelpAboutDetails.vendor} <br />
          Homepage: {HOME_PAGE} <br />
          All rights reserved ({this.props.dialogHelpAboutDetails.copyrightYears})
        </Dialog>
      </div>
    )
  }

}