import React, { Component } from 'react';
import { Slider } from 'react-md';

export default class Settings extends Component {
  render() {
    return (
      <div className="md-grid">
        <h2 className="md-cell md-cell--12 md-text-container">
          Settings
        </h2>
        <Slider id="settings-slider" className="md-cell md-cell--12" />
      </div>
    );
  }
}