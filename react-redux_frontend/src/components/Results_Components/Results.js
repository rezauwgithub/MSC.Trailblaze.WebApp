import React, { Component } from 'react';
import { Slider } from 'react-md';

export default class Results extends Component {
  render() {
    return (
      <div className="md-grid">
        <h2 className="md-cell md-cell--12 md-text-container">
          Results
        </h2>
        <Slider id="results-slider" className="md-cell md-cell--12" />
      </div>
    );
  }
}