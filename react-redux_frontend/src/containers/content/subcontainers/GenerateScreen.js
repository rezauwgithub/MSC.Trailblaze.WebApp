import React from 'react';
import { connect } from 'react-redux';




/*
  Containers are "smart" React Components that are aware of Redux.
  They are connected to the Redux Store and listen on part of the app state.
  They use mapStateToProps to specify which parts and use Selectors to read them.
  Avoid having view logic & local component state in them. Use "Dumb" Components instead.
*/

import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';

import * as availableCompilersActions from '../store/available_compilers/actions';
import * as availableCompilersSelectors from '../store/available_compilers/reducer';


const GenerateScreen = (props) => (
  <div className="content">

  </div>
);





// Map state to pros
const mapStateToProps = (state) => {
  return {

  };
}


export default connect(mapStateToProps)(GenerateScreen);





