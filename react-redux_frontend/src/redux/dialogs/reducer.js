/*
  Reducers hold the store's state (this initialState object defines it).
  Reducers also handle plain object actions and modify their state (immutably) accordingly.
  This is the only way to change the store's state.
  The other exports in this file are Selectors, which is business logic that digests parts 
  of the store's state for easier comsumption by views.
*/

import Immutable from 'seamless-immutable';
import * as types from './actionTypes';
import * as settings from '../../__frontend_app_settings__';


const initialState = Immutable({

  isOpenDialogHelpAbout: false,
  dialogHelpAboutDetails: 
    {
      title: `About: ${settings.APP_TITLE} ${settings.PRODUCT_VERSION}`,
      description: settings.DESCRIPTION,
      productVersion: settings.PRODUCT_VERSION,
      vendor: settings.VENDOR,
      homepage: settings.HOME_PAGE,
      copyrightYears: settings.COPY_RIGHT_YEARS
    },
});


export default function reduce(state = initialState, action = {}) {

  switch (action.type) {

    case types.OPEN_DIALOG_HELP_ABOUT:
      return state.merge({
        isOpenDialogHelpAbout: action.payload
      });    

    default:
      return state;

  }
}

// Selectors

export const getIsOpenDialogHelpAbout = (state) => {
  return state.dialogs.isOpenDialogHelpAbout;
}

export const getDialogHelpAboutDetails = (state) => {
  return state.dialogs.dialogHelpAboutDetails;
}