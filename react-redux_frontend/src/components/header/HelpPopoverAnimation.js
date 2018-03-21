import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import DialogHelpAbout from '../dialog/DialogHelpAbout';


export default class HelpPopoverAnimation extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }


  handleClick = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {

    console.log('handleRequestClose()');

    this.setState({
      open: false,
    });
  };



  render() {
    return (
      <div>
        <RaisedButton
          onClick={this.handleClick}
          label="Help"
        />

        <DialogHelpAbout 
          isOpenDialogHelpAbout={this.props.isOpenDialogHelpAbout} 
          dialogHelpAboutDetails={this.props.dialogHelpAboutDetails}
          handleDialogHelpAboutOpen={this.props.handleDialogHelpAboutOpen}
        />

        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
          animation={PopoverAnimationVertical}
        >
          <Menu>
            <MenuItem primaryText="Help &amp; Feedback" onClick={() => alert('Help Feedback Clicked!')} />
            <MenuItem primaryText="About" onClick={() => this.handleRequestClose() & this.props.handleDialogHelpAboutOpen(true)} />
          </Menu>
        </Popover>
      </div>
    );
  }
}