import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { NavigationDrawer } from 'react-md';
import { Card, CardTitle } from 'react-md';

import { APP_TITLE } from '../constants/app_constants.js'
import NavLink from './NavLink';

import Home from './Home_Components/Home';
import Define from './Define_Components/Define';
import Generate from './Generate_Components/Generate';
import Results from './Results_Components/Results';
import Settings from './Settings';
import LogsTextField from './Logs_Components/LogsTextField';
import ClearLogsButton from './Logs_Components/ClearLogsButton';


const navItems = [{
  exact: true,
  label: 'Home',
  to: '/',
  icon: 'home',
}, {
  label: 'Define',
  to: '/define',
  icon: 'bookmark',
}, {
  label: 'Generate',
  to: '/generate',
  icon: 'donut_large',
}, {
  label: 'Results',
  to: '/results',
  icon: 'flight_land',
}, {
  label: "Settings",
  to: './settings',
  icon: 'flight_land',
}];



const App = () => (
  <div className="App">
    <div className="Header">
      <br />
      <br />
      <br />
      Page Header
    </div>
    <div className="Content">
      <Route
        render={({ location }) => (
          <NavigationDrawer
            drawerTitle="react-md with CRA"
            toolbarTitle={APP_TITLE}
            navItems={navItems.map(props => <NavLink {...props} key={props.to} />)}
          >
          <Switch key={location.key}>
            <Route exact path="/" location={location} component={Home} />
            <Route path="/define" location={location} component={Define} />
            <Route path="/generate" location={location} component={Generate} />
            <Route path="/results" location={location} component={Results} />
            <Route path="/settings" location={location} component={Settings} />
          </Switch>
          </NavigationDrawer>
        )}
      />
    </div>
    <div className="md-grid--12 md-text-container">
      <Card className="md-grid--12">
        <CardTitle title="Logs" />
        <ClearLogsButton />
        <LogsTextField />
      </Card>
    </div>
  </div>
);

export default App;
