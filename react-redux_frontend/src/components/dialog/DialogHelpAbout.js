import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


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
          Front-End interface to Mobile-Semiconductor Trailblaze Memory Generation System <br/>
          Product Version: (C2018, 03) (Build: Thursday, March 15, 2018 10:04 AM) <br />
          Vendor: Mobile Semiconductor Corporation <br />
          Homepage: www.mobile-semi.com <br />
          All rights reserved (2017-2018)
        </Dialog>
      </div>
    )
  }

}