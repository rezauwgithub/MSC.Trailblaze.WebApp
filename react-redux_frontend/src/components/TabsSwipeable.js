import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';

import CompilersSelectField from './CompilersSelectField';
import ExistingInstancesTable from './ExistingInstancesTable';

import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

export default class TabsSwipeable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="Define" value={0} />
          <Tab label="Generate" value={1} />
          <Tab label="Results" value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            <table>
              <tbody>
                <tr>
                  <td><CompilersSelectField /></td>
                  <td><RaisedButton label="ADD" /></td>
                  <td><RaisedButton label="REMOVE" primary={true}/></td>
                  <td><RaisedButton label="VALIDATE" secondary={true}/></td>
                </tr>
              </tbody>
            </table>
            <ExistingInstancesTable />
          </div>
          <div style={styles.slide}>
            <h2 style={styles.headline}>Generate</h2>
          </div>
          <div style={styles.slide}>
            <h2 style={styles.headline}>Results</h2>
          </div>
        </SwipeableViews>
      </div>
    );
  }
}