/*
  Containers are "smart" React Components that are aware of Redux.
  They are connected to the Redux Store and listen on part of the app state.
  They use mapStateToProps to specify which parts and use Selectors to read them.
  Avoid having view logic & local component state in them. Use "Dumb" Components instead.
*/

import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';

import './footer.css';

import LogsTableScreen from './subcontainers/LogsTableScreen';

import * as availableCompilersActions from '../../redux/compilers/actions';
import * as availableCompilersSelectors from '../../redux/compilers/reducer';


const FooterScreen = (props) => (
  <div className="footer">
    <LogsTableScreen />
  </div>
);





// Map state to pros
const mapStateToProps = (state) => {
  return {

  };
}


export default connect(mapStateToProps)(FooterScreen);




