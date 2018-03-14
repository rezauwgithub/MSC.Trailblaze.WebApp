/*
  Containers are "smart" React Components that are aware of Redux.
  They are connected to the Redux Store and listen on part of the app state.
  They use mapStateToProps to specify which parts and use Selectors to read them.
  Avoid having view logic & local component state in them. Use "Dumb" Components instead.
*/

import React from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';

import ProjectPopoverAnimation from '../../../components/header/ProjectPopoverAnimation';
import HelpPopoverAnimation from '../../../components/header/HelpPopoverAnimation';


const Menu = (props) => (
  <div className="header">
    <table>
      <tbody>
        <tr>
          <td><ProjectPopoverAnimation /></td>
          <td><HelpPopoverAnimation /></td>
        </tr>
      </tbody>
    </table>
  </div>
);





// Map state to pros
const mapStateToProps = (state) => {
  return {

  };
}


export default connect(mapStateToProps)(Menu);





