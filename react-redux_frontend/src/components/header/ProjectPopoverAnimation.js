import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';

export default class ProjectPopoverAnimation extends React.Component {

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
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div>
        <RaisedButton
          onClick={this.handleClick}
          label="Project"
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
            <MenuItem primaryText="New" onClick={() => alert('New Clicked!')} />
            <MenuItem primaryText="Open" onClick={() => alert('Open Clicked!')} />
            <MenuItem 
              primaryText="Recent"
              onClick={() => alert('Recent Clicked!')}
              rightIcon={<ArrowDropRight />}
              menuItems={[
                <MenuItem primaryText="ExampleProject" onClick={() => alert('ExampleProject Clicked!')} />,
              ]}
            />
            <Divider />
            <MenuItem primaryText="Close" onClick={() => alert('Close Clicked!')} />
          </Menu>
        </Popover>
      </div>
    );
  }
}